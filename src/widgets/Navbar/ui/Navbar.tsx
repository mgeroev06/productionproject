import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';
import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export function Navbar({ className }: NavbarProps) {
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <div className={cls.Links}>
                <AppLink to="/" className={cls.MainLink}>
                    {t('Главная')}
                </AppLink>
                <AppLink to="/about">{t('О сайте')}</AppLink>
            </div>
        </div>
    );
}