import { z } from "zod";
import {
  BIRTH_REQUIRED,
  CURRENT_PASSWORD_INVALID,
  EMAIL_FORMAT,
  EMAIL_REQUIRED,
  NAME_REQUIRED,
  PASSWORD_CONFIRM_REQUIRED,
  PASSWORD_FORMAT,
  PASSWORD_REQUIRED,
  PHONE_FORMAT,
  PHONE_REQUIRED,
  PRIVACY_POLICY_REQUIRED,
  USE_TERM_REQUIRED,
  VERIFICATION_CODE_INCOMPLETE,
  VERIFICATION_CODE_REQUIRED,
} from "@/constants/inputErrorMessage";

export const zodLogin = z.object({
  user_email: z
    .string()
    .min(1, EMAIL_REQUIRED)
    .email({ message: EMAIL_FORMAT }),
  user_password: z
    .string()
    .min(1, PASSWORD_REQUIRED)
    .regex(/^(?=.*[a-zA-Z])(?=.*[0-9]).{8,15}$/, { message: PASSWORD_FORMAT }),
  auto_login: z.boolean(),
});

export const zodJoin = z
  .object({
    user_email: z
      .string()
      .min(1, EMAIL_REQUIRED)
      .email({ message: EMAIL_FORMAT }),
    user_password: z
      .string()
      .min(1, { message: PASSWORD_REQUIRED })
      .regex(/^(?=.*[a-zA-Z])(?=.*[0-9]).{8,15}$/, {
        message: PASSWORD_FORMAT,
      }),
    confirm_password: z
      .string()
      .min(1, { message: PASSWORD_CONFIRM_REQUIRED })
      .regex(/^(?=.*[a-zA-Z])(?=.*[0-9]).{8,15}$/, {
        message: PASSWORD_FORMAT,
      }),
    user_name: z.string().min(1, { message: NAME_REQUIRED }),
    user_birth: z.string().min(1, { message: BIRTH_REQUIRED }),
    user_phone: z
      .string()
      .min(1, { message: PHONE_REQUIRED })
      .regex(/^[0-9]+$/, { message: PHONE_FORMAT }),
    auth_code: z.string().min(1, { message: VERIFICATION_CODE_REQUIRED }),
    phone_verified: z.boolean().refine(value => value === true, {
      message: VERIFICATION_CODE_INCOMPLETE,
    }),
    user_key: z.optional(z.string()),
    use_term: z.boolean().refine(value => value === true, {
      message: USE_TERM_REQUIRED,
    }),
    privacy_policy: z.boolean().refine(value => value === true, {
      message: PRIVACY_POLICY_REQUIRED,
    }),
    personal_info: z.boolean(),
  })
  .refine(data => data.user_password === data.password_confirm, {
    message: CURRENT_PASSWORD_INVALID,
    path: ["password_confirm"],
  });

export const zodFindAccount = z.object({
  user_name: z.string().min(1, { message: NAME_REQUIRED }),
  user_phone: z
    .string()
    .min(1, { message: PHONE_REQUIRED })
    .regex(/^[0-9]+$/, { message: PHONE_FORMAT }),
  auth_code: z.string().min(1, { message: VERIFICATION_CODE_REQUIRED }),
  phone_verified: z.boolean().refine(value => value === true, {
    message: VERIFICATION_CODE_INCOMPLETE,
  }),
});

export const zodChangeAccount = z.object({
  user_name: z.string().min(1, { message: NAME_REQUIRED }),
  user_birth: z.string().min(1, { message: BIRTH_REQUIRED }),
  user_phone: z
    .string()
    .min(1, { message: PHONE_REQUIRED })
    .regex(/^[0-9]+$/, { message: PHONE_FORMAT }),
  auth_code: z.string().min(1, { message: VERIFICATION_CODE_REQUIRED }),
  phone_verified: z.boolean().refine(value => value === true, {
    message: VERIFICATION_CODE_INCOMPLETE,
  }),
  user_key: z.optional(z.string()),
  personal_info: z.boolean(),
});
