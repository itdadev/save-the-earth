import React, { useCallback, useState } from "react";

import { TextInput } from "@/components/ui/form/index";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import PasswordInput from "@/components/ui/form/PasswordInput";
import {
  BIRTH_PH,
  CONFIRM_PASSWORD_PH,
  CURRENT_PASSWORD_PH,
  EMAIL_PH,
  NAME_PH,
  NEW_PASSWORD_PH,
  PASSWORD_PH,
  PHONE_PH,
} from "@/constants/placeholderTexts";
import { SendButton } from "@/components/ui/form/PhoneVerificationFields";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { CHECK_EMAIL_API_URL } from "@/constants/apiUrls";
import { INVALID_LOGIN_INFO, SUCCESS_CODE } from "@/constants/responseResults";
import { EMAIL_REGEX } from "@/libs/zod/zodValidation";
import {
  EMAIL_ALREADY_EXISTS,
  EMAIL_FORMAT,
} from "@/constants/inputErrorMessage";

export const EmailCheckField = ({ control, watch, setError, setValue }) => {
  const [emailChecked, setEmailChecked] = useState(false);

  const { mutate: checkEmail } = useMutation({
    mutationFn: async data => {
      return await axios.get(`${CHECK_EMAIL_API_URL}?user_email=${data}`);
    },
    onSuccess: data => {
      if (data?.data?.code === SUCCESS_CODE) {
        const result = data?.data?.data.result;

        if (result) {
          setEmailChecked(true);
          setValue("user_email_checked", true);
        } else {
          setError("user_email", { message: EMAIL_ALREADY_EXISTS });
          setValue("user_email_checked", false);
        }
      }
    },
    onError: error => {
      if (error.response.data.code === INVALID_LOGIN_INFO) {
      }
    },
  });
  const validate = useCallback(() => {
    const userEmail = watch("user_email");

    if (!userEmail.match(EMAIL_REGEX)) {
      setError("user_email", { message: EMAIL_FORMAT });
      return undefined;
    }

    checkEmail(watch("user_email"));
  }, [watch, checkEmail, setError]);

  return (
    <TextInput
      control={control}
      name="user_email"
      placeholder={EMAIL_PH}
      maxLength={50}
      label="이메일"
      type="email"
      inputMode="text"
      disabled={emailChecked}
      customMessage={emailChecked ? "사용 가능한 이메일입니다." : undefined}
      addonAfter={
        <SendButton type="primary" size="large" onClick={validate}>
          중복 확인
        </SendButton>
      }
    />
  );
};
export const EmailField = ({ control, disabled = false }) => {
  return (
    <TextInput
      control={control}
      name="user_email"
      placeholder={EMAIL_PH}
      maxLength={50}
      label="이메일"
      type="email"
      inputMode="email"
      disabled={disabled}
    />
  );
};

export const PasswordField = ({ control, current }) => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  return (
    <PasswordInput
      control={control}
      name="user_password"
      label={current ? "현재 비밀번호" : "비밀번호"}
      inputMode="text"
      placeholder={current ? CURRENT_PASSWORD_PH : PASSWORD_PH}
      iconRender={visible =>
        visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
      }
      visibilityToggle={{
        visible: passwordVisible,
        onVisibleChange: setPasswordVisible,
      }}
    />
  );
};

export const PasswordConfirmField = ({ control }) => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  return (
    <PasswordInput
      control={control}
      name="confirm_password"
      label="비밀번호 확인"
      inputMode="text"
      placeholder={CONFIRM_PASSWORD_PH}
      iconRender={visible =>
        visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
      }
      visibilityToggle={{
        visible: passwordVisible,
        onVisibleChange: setPasswordVisible,
      }}
    />
  );
};

export const NewPasswordField = ({ control }) => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  return (
    <PasswordInput
      control={control}
      name="new_password"
      label="새 비밀번호"
      inputMode="text"
      placeholder={NEW_PASSWORD_PH}
      iconRender={visible =>
        visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
      }
      visibilityToggle={{
        visible: passwordVisible,
        onVisibleChange: setPasswordVisible,
      }}
    />
  );
};

export const NameField = ({ control }) => {
  return (
    <TextInput
      control={control}
      name="user_name"
      placeholder={NAME_PH}
      maxLength={10}
      label="이름"
      inputMode="text"
    />
  );
};

export const BirthField = ({ control, setValue }) => {
  return (
    <TextInput
      control={control}
      name="user_birth"
      placeholder={BIRTH_PH}
      maxLength={10}
      label="생년월일(8자리)"
      setValue={setValue}
      inputMode="decimal"
    />
  );
};

export const PhoneField = ({
  control,
  readOnly,
  children,
  addonAfter,
  setValue,
}) => {
  return (
    <TextInput
      name="user_phone"
      label="핸드폰 번호"
      labelrequired="true"
      inputMode="decimal"
      control={control}
      maxLength={13}
      placeholder={readOnly ? "" : PHONE_PH}
      readOnly={readOnly}
      pattern="[0-9]+"
      addonAfter={addonAfter}
      bordered={false}
      customborder="true"
      setValue={setValue}
    >
      {children}
    </TextInput>
  );
};
