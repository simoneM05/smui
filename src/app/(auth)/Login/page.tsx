"use client";
import React, { useState } from "react";
import { useSignIn } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Eye, EyeOff } from "lucide-react";
import Image from "next/image";
import { isClerkAPIResponseError } from "@clerk/nextjs/errors";
import { Button } from "@/components/ui/button";
import z from "zod";

const Login = () => {
  const { isLoaded, signIn, setActive } = useSignIn();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [fieldErrors, setFieldErrors] = useState<{
    email?: string;
    password?: string;
  }>({});
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  if (!isLoaded) return null;

  const handleOauthSignIn = () => {
    signIn?.authenticateWithRedirect({
      strategy: "oauth_github",
      redirectUrl:
        process.env.NEXT_PUBLIC_CLERK_SIGN_IN_REDIRECT_URL ??
        "http://localhost:3000/oauth-callback",
      redirectUrlComplete: "https://boiler-inky.vercel.app/",
    });
  };

  const toggleShowPassword = () => setShowPassword((prev) => !prev);

  const validationSchema = z.object({
    email: z.email(),
    password: z
      .string()
      .min(8, "La password deve avere almeno 8 caratteri")
      .max(100, "La password non può superare 100 caratteri")
      .regex(/[A-Z]/, "La password deve contenere almeno una lettera maiuscola")
      .regex(/[0-9]/, "La password deve contenere almeno un numero")
      .regex(
        /[^A-Za-z0-9]/,
        "La password deve contenere almeno un carattere speciale"
      ),
  });

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(""); // reset errore prima della validazione

    // Validazione con Zod
    const validation = validationSchema.safeParse({ email, password });

    if (!validation.success) {
      // Prendi tutti i messaggi di errore e mostralo
      const messages = validation.error.issues
        .map((err) => err.message)
        .join(", ");
      setError(messages);
      return; // fermati qui, non procedere con il login
    }

    if (!isLoaded) return;
    setLoading(true);

    try {
      const result = await signIn.create({ identifier: email, password });

      if (result.status === "complete") {
        await setActive({ session: result.createdSessionId });
        router.push("/");
      } else {
        setError("Autenticazione incompleta. Riprova.");
      }
    } catch (err) {
      setError(
        isClerkAPIResponseError(err)
          ? err.errors[0]?.message
          : "Errore durante il login"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 border rounded-lg">
      <form onSubmit={submit} className="flex flex-col gap-4">
        <div>
          <label className="block mb-1">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border px-3 py-2 rounded"
          />
        </div>

        <div>
          <label className="block mb-1">Password</label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border px-3 py-2 rounded pr-10"
            />
            <button
              type="button"
              onClick={toggleShowPassword}
              className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500"
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>
        </div>

        {error && <p className="text-red-600">{error}</p>}

        <Button type="submit" disabled={loading}>
          {loading ? "Caricamento..." : "Accedi"}
        </Button>
      </form>

      <div className="mt-4 flex justify-center">
        <button
          type="button"
          onClick={handleOauthSignIn}
          className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-900 transition"
        >
          Accedi con GitHub
        </button>
      </div>
    </div>
  );
};

const page = () => {
  return <div>page</div>;
};

export default page;
