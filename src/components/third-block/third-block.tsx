import { FC } from "react";

import './third-block.scss'

import thirdBlockImg from '../../assets/fifth-block/fifth-block-image.png'
import { useTranslation } from "react-i18next";

const ThirdBlock: FC = () => {
    const { t } = useTranslation(['thirdBlock'])
    return (
        <div className="third-block">
            <h3>{t('thirdBlock.title')}</h3>
            <p>
            {t('thirdBlock.first')}
            <br /><br />
            {t('thirdBlock.second')} 
            <br /><br />
            {t('thirdBlock.third')}
            </p>
            <img src={thirdBlockImg} alt="third-block-img" />
        </div>
    )
}

export default ThirdBlock