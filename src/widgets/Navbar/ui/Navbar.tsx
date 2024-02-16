import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export function Navbar({ className }: NavbarProps) {
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
}
