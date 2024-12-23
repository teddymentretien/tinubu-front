import React from "react";
import { useTranslation } from "next-i18next";
import { SelectField, Option } from "./SelectField";
import { useRouter } from 'next/router';

const languageOptions: Option[] = [
  { label: "English", value: "en" },
  { label: "Français", value: "fr" },
];

const SelectLanguage: React.FC = () => {
  const { i18n, t } = useTranslation("common");
  const router = useRouter();
  const currentLanguage = i18n.language;

  const handleChangeLanguage = (value: string) => {
    i18n.changeLanguage(value);
    router.push(router.pathname, router.asPath, { locale: value });
  };

  return (
    <SelectField
      label={t("select_language")}
      value={currentLanguage}
      options={languageOptions}
      onChange={handleChangeLanguage}
    />
  );
};

export default SelectLanguage;
