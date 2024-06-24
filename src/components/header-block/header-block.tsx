import { FC } from "react";

import './header-block.scss'
import logo from '../../assets/header-block/logo.svg'
import LanguageSwitcher from "../language-switcher/language-switcher";
import { useTranslation } from "react-i18next";

interface IHeaderBlock {
    scrollToAbout: () => void;
    scrollToServices: () => void;
    scrollToContacts: () => void
}

const HeaderBlock: FC<IHeaderBlock> = ({
    scrollToAbout,
    scrollToContacts,
    scrollToServices
}) => {
    const { t } = useTranslation(['headerBlock'])
    return (
        <div
            className="header-block"
        >
            <img 
                src={logo}
                alt="logo"
                className="logo"
            />
            <div
                className="navigation"
            >
                <p className="navigation-p" onClick={scrollToAbout}>{t('headerBlock.about')}</p>
                <p className="navigation-p" onClick={scrollToServices}>{t('headerBlock.services')}</p>
                <p className="navigation-p" onClick={scrollToContacts}>{t('headerBlock.contacts')}</p>
            </div>
            <LanguageSwitcher />
        </div>
    )
}

export default HeaderBlock