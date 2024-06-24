import { FC } from "react";

import './second-block.scss'

import firstImage from '../../assets/second-block/second-block-first-image.png'
import secondImage from '../../assets/second-block/second-block-second-image.png'
import { useTranslation } from "react-i18next";

const SecondBlock: FC = () => {
    const { t } = useTranslation(['secondBlock'])
    return (
        <div className="second-block">
            <div
                className="second-block-container"
            >
                <h2>{t('secondBlock.title')}</h2>
                <p>
                    {t('secondBlock.first')}
                    <br />
                    <br />
                    {t('secondBlock.second')}
                    <br />
                    <br />
                    {t('secondBlock.third')}
                </p>
            </div>
            <img className="first-image" src={firstImage} alt="second-block-first-image" />
            <img className="second-image" src={secondImage} alt="second-block-second-image" />
        </div>
    )
}

export default SecondBlock