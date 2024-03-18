import React, { useState } from "react";

import { TextInput } from "@/components/ui/form/index";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import PasswordInput from "@/components/ui/form/PasswordInput";
import {
  BIRTH_PH,
  CONFIRM_PASSWORD_PH,
  EMAIL_PH,
  NAME_PH,
  PASSWORD_PH,
  PHONE_PH,
} from "@/constants/placeholderTexts";

export const EmailField = ({ control, disabled = false }) => {
  return (
    <TextInput
      control={control}
      name="user_email"
      placeholder={EMAIL_PH}
      maxLength={50}
      label="이메일"
      type="email"
      disabled={disabled}
    />
  );
};

export const PasswordField = ({ control }) => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  return (
    <PasswordInput
      control={control}
      name="user_password"
      label="비밀번호"
      placeholder={PASSWORD_PH}
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

export const NameField = ({ control }) => {
  return (
    <TextInput
      control={control}
      name="user_name"
      placeholder={NAME_PH}
      maxLength={10}
      label="이름"
    />
  );
};

export const BirthField = ({ control }) => {
  return (
    <TextInput
      control={control}
      name="user_birth"
      placeholder={BIRTH_PH}
      maxLength={10}
      label="생년월일(8자리)"
    />
  );
};

export const PhoneField = ({ control, readOnly, children, addonAfter }) => {
  return (
    <TextInput
      name="user_phone"
      label="핸드폰 번호"
      labelrequired="true"
      inputMode="decimal"
      control={control}
      placeholder={readOnly ? "" : PHONE_PH}
      readOnly={readOnly}
      pattern="[0-9]+"
      addonAfter={addonAfter}
      bordered={false}
      customborder="true"
    >
      {children}
    </TextInput>
  );
};
