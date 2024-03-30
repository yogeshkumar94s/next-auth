import * as z from 'zod'
import { UserRole } from "@prisma/client";

export const SettingsSchema = z.object({
    name: z.optional(z.string()),
    isTwoFactorEnabled: z.optional(z.boolean()),
    role: z.enum([UserRole.ADMIN, UserRole.USER]),
    email: z.optional(z.string().email()),
    password: z.optional(z.string().min(6)),
    newPassword: z.optional(z.string().min(6)),
  })
    .refine((data) => {
      if (data.password && !data.newPassword) {
        return false;
      }
  
      return true;
    }, {
      message: "New password is required!",
      path: ["newPassword"]
    })
    .refine((data) => {
      if (data.newPassword && !data.password) {
        return false;
      }
  
      return true;
    }, {
      message: "Password is required!",
      path: ["password"]
    })


    export const NewPasswordSchema = z.object({
        password: z.string().min(6, {
          message: "Minimum of 6 characters required",
        }),
      });
      
      export const ResetSchema = z.object({
        email: z.string().email({
          message: "Email is required",
        }),
      });

//defines validation schemas using zod, a TypeScript-first schema declaration and validation library.

//These schemas are designed to validate the shape and content of objects, particularly useful for validating user input in forms. 


// Enhanced email validation to ensure the format is correct and consistent error messaging.
const emailValidation = z.string().trim().email({
    message: "Invalid email format"
});

// Password validation for login, ensuring it's not empty.
const loginPasswordValidation = z.string().trim().min(1, {
    message: "Password is required"
});

// Stronger password validation for registration, requiring a minimum length.
const registerPasswordValidation = z.string().trim().min(6, {
    message: "Minimum 6 characters required"
});

// Validation for the name field, ensuring it's not empty.
const nameValidation = z.string().trim().min(1, {
    message: "Username is required"
});

export const LoginSchema = z.object({
    email: emailValidation,
    password: loginPasswordValidation,
    code: z.optional(z.string()),
});

export const RegisterSchema = z.object({
    email: emailValidation,
    password: registerPasswordValidation,
    name: nameValidation,
});