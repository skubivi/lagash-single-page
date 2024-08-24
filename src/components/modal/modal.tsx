import { FC, useState } from "react";

import './modal.scss'
import { useTranslation } from "react-i18next";

import privacyPolicyRu from '../../assets/privacy-policy/privacy-policy-ru.pdf'
import privacyPolicyEn from '../../assets/privacy-policy/privacy-policy-en.pdf'
import privacyPolicyHe from '../../assets/privacy-policy/privacy-policy-he.pdf'
import { Languages } from "../../utils";

interface IModal {
    onClose: () => void
}

const Modal: FC<IModal> = ({
    onClose
}) => {
    const { t, i18n } = useTranslation(['modal'])
    const fileToDownload = i18n.language === Languages.Ru ? privacyPolicyRu : i18n.language === Languages.En ? privacyPolicyEn : privacyPolicyHe
    const fileName = i18n.language === Languages.Ru ? 'Политика конфиденциальности' : i18n.language === Languages.En ? 'Privacy policy' : 'מדיניות פרטיות'

    const handleClose: React.MouseEventHandler<HTMLDivElement> = (e) => {
        //@ts-ignore
        if (e.target.className === 'modal-container') {
            onClose()
        }
    }
    const submitURL = 'https://agoramas.net/feedback'
    const [name, setName] = useState('')
    const [tel, setTel] = useState('')
    const handleChangeName: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        setName(e.target.value)
    }
    const handleChangeTel: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        setTel(e.target.value)
    }
    const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault()
        const re = /^[\d\+][\d\(\)\ -]{4,14}\d$/;
        if (re.test(tel)) {
            try {
                const myHeaders = new Headers()
                myHeaders.append("Content-Type", "application/json")
                const response = await fetch(submitURL, {
                    method: 'POST',
                    headers: myHeaders,
                    body: JSON.stringify({tel, name, email: ''})
                })
                if (response.ok) {
                    setName('')
                    setTel('')
                }
            } catch {}
        }
    }
    return (
        <div className="modal-container" onClick={handleClose}>
            <div className="modal-window">
                <div className="close-container">
                    <button onClick={onClose} className="close-button">+</button>
                </div>
                <div className="form-container">
                    <h6>{t('modal.title')}</h6>
                    <form onSubmit={handleSubmit}>
                        <input value={name} onChange={handleChangeName} required placeholder={t('modal.place1')} className="modal-input"/>
                        <input value={tel} onChange={handleChangeTel} required type="tel" placeholder={t('modal.place2')} className="modal-input"/>
                        <p>{t('modal.first')}<u>{t('modal.second')}</u>{t('modal.third')}<u><a href={fileToDownload} download={fileName}>{t('modal.fourth')}</a></u></p>
                        <button type="submit">{t('modal.button')}</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Modal