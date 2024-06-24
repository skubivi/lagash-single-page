import { FC, useEffect, useState } from "react";
import { Languages, getLanguageFromLocalStorage, setLanguageToLocalStorage } from "../../utils";

import './language-switcher.scss'

import languageSwitcher from '../../assets/language-switcher/language-switcher-icon.svg'
import checkedIcon from '../../assets/language-switcher/checked.svg'
import { useTranslation } from "react-i18next";

interface ILanguageRow {
    active: boolean
    onClick: () => void
    label: string
}

const LanguageRow: FC<ILanguageRow> = ({
    active,
    label,
    onClick
}) => {
    return (
        <div className={'language-row' + (active ? ' active' : '')} onClick={onClick}>
            {active && <img src={checkedIcon} alt="checked-icon" className="checked-icon"/>}
            <p className="language-row-p">{label}</p>
        </div>
    )
}

const LanguageSwitcher: FC = () => {
    const { t } = useTranslation(['languageSwitcher'])
    const { i18n } = useTranslation();
    const [language, setLanguage] = useState<Languages>(Languages.En)
    const [open, setOpen] = useState(false)
    const [fullOpen, setFullOpen] = useState(false)
    const handleOpen = () => {
        setOpen(true)
    }
    const handleClose = () => {
        setFullOpen(false)
        setOpen(false)
    }
    const handleClick = () => {
        if (!open) handleOpen()
    }
    const handleSelect = (value: Languages) => {
        setLanguage(value)
        setLanguageToLocalStorage(value)
        i18n.changeLanguage(value);
        document.body.dir = i18n.dir(value);
        handleClose()
    }
    useEffect(() => {
        let timeoutId = 0
        if (open) {
            timeoutId = setTimeout(() => {
                setFullOpen(true)
            }, 500)
        }
        return () => {
            if (timeoutId) clearTimeout(timeoutId)
        }
    }, [open])
    useEffect(() => {
        const languageFromLS = getLanguageFromLocalStorage()
        setLanguage(languageFromLS)
    }, [])
    return (
        <div
            className={"language-switcher " + (open ? 'language-switcher-opened' : 'language-switcher-closed')}
            onClick={handleClick}
        >
            <div className="language-switcher-header">
                <img 
                    src={languageSwitcher} 
                    alt="languageSwitcher"
                    className="language-switcher-img"
                    onClick={handleClose}
                />
                {fullOpen && <p className="title">{t('languageSwitcher.title')}</p>}
            </div>
            {fullOpen && 
                <div className="language-switcher-body">
                    <LanguageRow label="Русский" onClick={() => handleSelect(Languages.Ru)} active={language === Languages.Ru}/>
                    <LanguageRow label="English" onClick={() => handleSelect(Languages.En)} active={language === Languages.En}/>
                    <LanguageRow label="עברית" onClick={() => handleSelect(Languages.He)} active={language === Languages.He}/>
                </div>
            }
        </div>
    )
}

export default LanguageSwitcher