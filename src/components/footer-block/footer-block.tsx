import { FC } from "react";

import './footer-block.scss'

import logo from '../../assets/footer-block/footer-logo.svg'
import smallLogo from '../../assets/footer-block/small-footer-logo.svg'
import tgLogo from '../../assets/footer-block/tg-logo.svg'
import vkLogo from '../../assets/footer-block/vk-logo.svg'
import facebookLogo from '../../assets/footer-block/facebook-logo.svg'
import smallFooterImage from '../../assets/sixth-block/sixth-block-image.png'
import tgSmallLogo from '../../assets/footer-block/tg-small.svg'
import vkSmallLogo from '../../assets/footer-block/vk-small.svg'
import facebookSmallLogo from '../../assets/footer-block/facebook-small.svg'
import { useTranslation } from "react-i18next";

import privacyPolicyRu from '../../assets/privacy-policy/privacy-policy-ru.pdf'
import privacyPolicyEn from '../../assets/privacy-policy/privacy-policy-en.pdf'
import privacyPolicyHe from '../../assets/privacy-policy/privacy-policy-he.pdf'
import { Languages } from "../../utils";

interface IFooterBlock {
    scrollToAbout: () => void;
    scrollToServices: () => void;
    scrollToContacts: () => void
}

const FooterBlock: FC<IFooterBlock> = ({
    scrollToAbout,
    scrollToContacts,
    scrollToServices
}) => {
    const { t, i18n } = useTranslation(['footerBlock'])
    const fileToDownload = i18n.language === Languages.Ru ? privacyPolicyRu : i18n.language === Languages.En ? privacyPolicyEn : privacyPolicyHe
    return (
        <div className="footer-block">
            <div className="footer">
                <div className="first-column column">
                    <img src={logo} alt="logo" className="logo" />
                    <div className="s-n-container">
                        <img src={vkLogo} alt="vk-logo" className="vk-logo"/>
                        <img src={tgLogo} alt="tg-logo" className="tg-logo"/>
                        <img src={facebookLogo} alt="facebook-logo" className="facebook-logo"/>
                    </div>
                    <p className="tel">{t('footerBlock.tel')}</p>
                    <p className="website">{t('footerBlock.website')}</p>
                </div>
                <div className="second-column column">
                    <p onClick={scrollToAbout}>{t('footerBlock.about')}</p>
                    <p onClick={scrollToServices}>{t('footerBlock.services')}</p>
                    <p onClick={scrollToContacts}>{t('footerBlock.contacts')}</p>
                </div>
                <div className="third-column column">
                    <a href={fileToDownload} download={t('footerBlock.conf')}><p>{t('footerBlock.conf')}</p></a>
                    {/* <p>{t('footerBlock.offer')}</p> */}
                </div>
                <div className="small-column">
                    <img src={smallLogo} alt="small-logo" className="small-logo" />
                    <h1 className="title">{t('footerBlock.contacts')}</h1>
                    <p className="subtitle">{t('footerBlock.smallSubtitle')}</p>
                    <p className="tel">{t('footerBlock.tel')}</p>
                    <p className="website">{t('footerBlock.website')}</p>
                    <div className="s-n-container">
                        <img src={vkSmallLogo} alt="vk-logo" className="vk-logo"/>
                        <img src={tgSmallLogo} alt="tg-logo" className="tg-logo"/>
                        <img src={facebookSmallLogo} alt="facebook-logo" className="facebook-logo"/>
                    </div>
                    <img src={smallFooterImage} alt="small-footer-image" className="small-footer-image"/>
                </div>
            </div>
        </div>
    )
}

export default FooterBlock