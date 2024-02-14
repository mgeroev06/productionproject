import { classNames } from "shared/lib/classNames/classNames";
import cls from "./LanguageSwitcher.module.scss";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { useTranslation } from "react-i18next";

interface LanguageSwitcherProps {
  className?: string;
}

export const LanguageSwitcher = ({ className }: LanguageSwitcherProps) => {
  const { t, i18n } = useTranslation();

  const toggle = async () => {
    const newLanguage = i18n.language === "ru" ? "en" : "ru";
    i18n.changeLanguage(newLanguage);
  };

  return (
    <Button
      theme={ButtonTheme.CLEAR}
      onClick={toggle}
      className={classNames(cls.LanguageSwitcher, {}, [className])}
    >
      {t("Язык")}
    </Button>
  );
};
