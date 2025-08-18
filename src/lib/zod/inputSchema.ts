import { z } from "zod";

export const InputSchema = {
  emailSchema: z
    .string()
    .email({ message: "Invalid email" })
    .min(1, { message: "Email is required" })
    .max(254, { message: "Email is too long" }),
  passwordSchema: z
    .string()
    .min(8, { message: "Password must be at least 8 characters" })
    .max(32, { message: "Password must be at most 32 characters" })
    .superRefine((val, ctx) => {
      if (!/[A-Z]/.test(val)) {
        ctx.addIssue({
          code: "custom",
          message: "Password must contain at least one uppercase letter",
        });
      }
      if (!/[a-z]/.test(val)) {
        ctx.addIssue({
          code: "custom",
          message: "Password must contain at least one lowercase letter",
        });
      }
      if (!/[0-9]/.test(val)) {
        ctx.addIssue({
          code: "custom",
          message: "Password must contain at least one number",
        });
      }
      if (!/[!@#$%^&*]/.test(val)) {
        ctx.addIssue({
          code: "custom",
          message: "Password must contain at least one special character",
        });
      }
    }),
  fileSchema: z
    .any()
    .refine((file) => file && file.size <= 5 * 1024 * 1024, "File too large")
    .refine(
      (file) =>
        file && (file.type === "image/jpeg" || file.type === "image/png"),
      "File must be a JPEG or PNG image"
    ),
};
