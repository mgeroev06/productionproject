import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Navbar.module.scss";
import { AppLink } from "shared/ui/AppLink/AppLink";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <div className={cls.Links}>
        <AppLink to="/" className={cls.MainLink}>
          MainPage
        </AppLink>
        <AppLink to="/about">About</AppLink>
      </div>
    </div>
  );
};
