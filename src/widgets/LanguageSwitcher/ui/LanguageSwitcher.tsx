import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import cls from './LanguageSwitcher.module.scss';

interface LanguageSwitcherProps {
  className?: string;
}

export function LanguageSwitcher({ className }: LanguageSwitcherProps) {
    const { t, i18n } = useTranslation();

    const toggle = async () => {
        const newLanguage = i18n.language === 'ru' ? 'en' : 'ru';
        i18n.changeLanguage(newLanguage);
    };

    return (
        <Button
            theme={ButtonTheme.CLEAR}
            onClick={toggle}
            className={classNames('', {}, [className])}
        >
            {t('Язык')}
        </Button>
    );
}
