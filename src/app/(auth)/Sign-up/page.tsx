"use client";
import React, { useState } from "react";
import { useSignIn, useSignUp } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Eye, EyeOff } from "lucide-react";
import Image from "next/image";
import { isClerkAPIResponseError } from "@clerk/nextjs/errors";
import { Button } from "@/components/ui/button";

const Signup = () => {
  const { isLoaded, signUp, setActive } = useSignUp();
  const { signIn } = useSignIn();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [pendingVerification, setPendingVerification] = useState(false);
  const [code, setCode] = useState("");
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

  const validateInputs = (): boolean => {
    const errors: { email?: string; password?: string } = {};
    if (!email) {
      errors.email = "Email obbligatoria";
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
      errors.email = "Formato email non valido";
    }
    if (!password) {
      errors.password = "Password obbligatoria";
    } else if (password.length < 8) {
      errors.password = "La password deve avere almeno 8 caratteri";
    }
    setFieldErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    if (!validateInputs()) return;
    if (!isLoaded) return;
    setLoading(true);
    try {
      await signUp.create({ emailAddress: email, password });
      await signUp.prepareEmailAddressVerification({ strategy: "email_code" });
      setPendingVerification(true);
    } catch (err) {
      setError(
        isClerkAPIResponseError(err)
          ? err.errors[0]?.message
          : "Errore durante la registrazione"
      );
    } finally {
      setLoading(false);
    }
  };

  const onPressVerify = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isLoaded) return;
    setLoading(true);
    setError("");
    try {
      const completeSignUp = await signUp.attemptEmailAddressVerification({
        code,
      });
      if (completeSignUp.status === "complete") {
        await setActive({ session: completeSignUp.createdSessionId });
        router.push("/");
      } else {
        setError("Codice di verifica non valido o scaduto.");
      }
    } catch (err) {
      console.error(err);
      setError(
        isClerkAPIResponseError(err)
          ? err.errors[0]?.message
          : "Errore durante la verifica"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen px-4">
      <div className="w-full max-w-lg border-2 border-zinc-800 rounded-2xl p-10 bg-zinc-950">
        {!pendingVerification ? (
          <form onSubmit={submit} className="flex flex-col gap-4">
            <header className="flex flex-col gap-1 mb-4">
              <h1 className="text-3xl font-medium">Create an account</h1>
              <p className="text-md text-zinc-400">Sign up to get started</p>
            </header>

            <Button
              onClick={handleOauthSignIn}
              className="mb-4 rounded-2xl font-medium text-md p-2 flex items-center bg-zinc-800 border-zinc-700 border-2 hover:bg-zinc-700 focus:bg-zinc-700 justify-center gap-4"
            >
              <Image
                src={"/svg/github-icon.svg"}
                width={24}
                height={24}
                alt="github-icon"
              />
              <p className="text-zinc-300">Continue with github</p>
            </Button>

            <div className="flex gap-3 items-center">
              <div className="flex-grow bg-zinc-600 h-px" />
              <p className="text-lg font-semibold">or</p>
              <div className="flex-grow bg-zinc-600 h-px" />
            </div>
            <div className="flex-col flex gap-3">
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="p-2 rounded-xl border border-zinc-700 bg-zinc-900 text-white outline-none"
              />
              {fieldErrors.email && (
                <p className="text-red-500 text-sm">{fieldErrors.email}</p>
              )}

              <div className="flex rounded-xl items-center justify-between p-2 border border-zinc-700 bg-zinc-900 text-white">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="bg-zinc-900  text-white flex-grow outline-none"
                />
                <button
                  type="button"
                  onClick={toggleShowPassword}
                  className="p-1"
                  aria-label="Toggle password visibility"
                >
                  {showPassword ? <EyeOff size={24} /> : <Eye size={24} />}
                </button>
              </div>
              {fieldErrors.password && (
                <p className="text-red-500 text-sm">{fieldErrors.password}</p>
              )}
            </div>

            {error && <p className="text-red-500 text-sm">{error}</p>}

            <div id="clerk-captcha" />

            <Button
              type="submit"
              className="mb-4 rounded-2xl font-medium text-md text-white flex items-center bg-zinc-900 border-zinc-800 border-2 hover:bg-zinc-800 focus:bg-zinc-800 justify-center"
              disabled={loading}
            >
              Sign up
            </Button>

            <p className="text-sm mt-3 text-zinc-300 font-medium">
              Already have an account?{" "}
              <Link href="/login" className="text-blue-400 hover:underline">
                Sign In Now
              </Link>
            </p>
          </form>
        ) : (
          <form onSubmit={onPressVerify} className="flex flex-col gap-4">
            <header className="flex flex-col gap-1 mb-4">
              <h1 className="text-3xl font-medium">Verify your email</h1>
              <p className="text-md text-zinc-400">
                Enter the verification code sent to your email
              </p>
            </header>

            <input
              type="text"
              placeholder="Verification code"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              required
              className="p-2 rounded border border-zinc-700 bg-zinc-900 text-white outline-none"
            />

            {error && <p className="text-red-500 text-sm">{error}</p>}

            <Button
              type="submit"
              className="border-zinc-800 bg-zinc-900 hover:bg-zinc-800 mt-2 active:bg-zinc-800 text-white p-2 rounded"
              disabled={loading}
            >
              Verify
            </Button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Signup;
