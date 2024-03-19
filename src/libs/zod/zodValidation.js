import { z } from "zod";
import {
  BIRTH_REQUIRED,
  CURRENT_PASSWORD_INVALID,
  EMAIL_FORMAT,
  EMAIL_REQUIRED,
  NAME_REQUIRED,
  NEW_PASSWORD_REQUIRED,
  PASSWORD_CONFIRM_INVALID,
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

const PHONE_REGEX = /[0-9]/g;
const PASSWORD_REGEX = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,15}$/;

// NOTE: 로그인
export const zodLogin = z.object({
  user_email: z
    .string()
    .min(1, EMAIL_REQUIRED)
    .email({ message: EMAIL_FORMAT }),
  user_password: z
    .string()
    .min(1, PASSWORD_REQUIRED)
    .regex(PASSWORD_REGEX, { message: PASSWORD_FORMAT }),
  auto_login: z.boolean(),
});

// NOTE: 회원가입
export const zodJoin = z
  .object({
    user_email: z
      .string()
      .min(1, EMAIL_REQUIRED)
      .email({ message: EMAIL_FORMAT }),
    user_password: z
      .string()
      .min(1, { message: PASSWORD_REQUIRED })
      .regex(PASSWORD_REGEX, {
        message: PASSWORD_FORMAT,
      }),
    confirm_password: z
      .string()
      .min(1, { message: PASSWORD_CONFIRM_REQUIRED })
      .regex(PASSWORD_REGEX, {
        message: PASSWORD_FORMAT,
      }),
    user_name: z.string().min(1, { message: NAME_REQUIRED }),
    user_birth: z.string().min(1, { message: BIRTH_REQUIRED }),
    user_phone: z
      .string()
      .min(1, { message: PHONE_REQUIRED })
      .regex(PHONE_REGEX, { message: PHONE_FORMAT }),
    auth_code: z.string().min(1, { message: VERIFICATION_CODE_REQUIRED }),
    phone_verified: z.boolean().refine(value => value === true, {
      message: VERIFICATION_CODE_INCOMPLETE,
    }),
    user_seq: z.optional(z.string()),
    use_term: z.boolean().refine(value => value === true, {
      message: USE_TERM_REQUIRED,
    }),
    privacy_policy: z.boolean().refine(value => value === true, {
      message: PRIVACY_POLICY_REQUIRED,
    }),
    email_receive_yn: z.boolean(),
  })
  .refine(data => data.user_password === data.confirm_password, {
    message: PASSWORD_CONFIRM_INVALID,
    path: ["confirm_password"],
  });

// NOTE: 계정 찾기
export const zodFindAccount = z.object({
  user_name: z.string().min(1, { message: NAME_REQUIRED }),
  user_phone: z
    .string()
    .min(1, { message: PHONE_REQUIRED })
    .regex(PHONE_REGEX, { message: PHONE_FORMAT }),
  auth_code: z.string().min(1, { message: VERIFICATION_CODE_REQUIRED }),
  phone_verified: z.boolean().refine(value => value === true, {
    message: VERIFICATION_CODE_INCOMPLETE,
  }),
});

// NOTE: 비밀번호 변경하기 - 계정 찾기
export const zodChangePassword = z
  .object({
    user_password: z
      .string()
      .min(1, { message: PASSWORD_REQUIRED })
      .regex(PASSWORD_REGEX, {
        message: PASSWORD_FORMAT,
      }),
    confirm_password: z
      .string()
      .min(1, { message: PASSWORD_CONFIRM_REQUIRED })
      .regex(PASSWORD_REGEX, {
        message: PASSWORD_FORMAT,
      }),
  })
  .refine(data => data.user_password === data.confirm_password, {
    message: PASSWORD_CONFIRM_INVALID,
    path: ["confirm_password"],
  });

// NOTE: 계정 변경하기 - 마이페이지
export const zodChangeAccount = z.object({
  user_name: z.string().min(1, { message: NAME_REQUIRED }),
  user_birth: z.string().min(1, { message: BIRTH_REQUIRED }),
  user_phone: z
    .string()
    .min(1, { message: PHONE_REQUIRED })
    .regex(PHONE_REGEX, { message: PHONE_FORMAT }),
  auth_code: z.string().min(1, { message: VERIFICATION_CODE_REQUIRED }),
  phone_verified: z.boolean().refine(value => value === true, {
    message: VERIFICATION_CODE_INCOMPLETE,
  }),
  user_seq: z.optional(z.string()),
  email_receive_yn: z.boolean(),
});

// NOTE: 비밀번호 변경하기 - 마이페이지
export const zodChangeMyPassword = z
  .object({
    user_password: z
      .string()
      .min(1, { message: PASSWORD_REQUIRED })
      .regex(PASSWORD_REGEX, {
        message: PASSWORD_FORMAT,
      }),
    new_password: z
      .string()
      .min(1, { message: NEW_PASSWORD_REQUIRED })
      .regex(PASSWORD_REGEX, {
        message: PASSWORD_FORMAT,
      }),
    confirm_password: z
      .string()
      .min(1, { message: PASSWORD_CONFIRM_REQUIRED })
      .regex(PASSWORD_REGEX, {
        message: PASSWORD_FORMAT,
      }),
  })
  .refine(data => data.new_password === data.confirm_password, {
    message: CURRENT_PASSWORD_INVALID,
    path: ["confirm_password"],
  });