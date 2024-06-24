import { FC } from "react";

import firstBlockImage from '../../assets/first-block/first-block-image.png'

import './first-block.scss'
import { useTranslation } from "react-i18next";

interface IFirstBlock {
    onClick: () => void
    scrollToSEO: () => void
    scrollToBrand: () => void
    scrollToWebsite: () => void
    scrollToCRM: () => void
}

const FirstBlock: FC<IFirstBlock> = ({
    onClick,
    scrollToBrand,
    scrollToCRM,
    scrollToSEO,
    scrollToWebsite
}) => {
    const { t } = useTranslation(['firstBlock'])
    return (
        <div className="first-block">
            <div className="title-block">
                <div className="left-block">
                    <h1 className="title">{t('firstBlock.title.first')}<br/>{t('firstBlock.title.second')}</h1>
                    <button className="submit-button" onClick={onClick}>{t('firstBlock.button')}</button>
                </div>
                <img src={firstBlockImage} alt="firstBlockImage"/>
            </div>
            <div className="navigation-block">
                <p onClick={scrollToSEO}>{t('firstBlock.seo')}</p>
                <p onClick={scrollToBrand}>{t('firstBlock.brand')}</p>
                <p onClick={scrollToWebsite}>{t('firstBlock.website')}</p>
                <p onClick={scrollToCRM}>{t('firstBlock.crm')}</p>
            </div>
        </div>
    )
}

export default FirstBlock