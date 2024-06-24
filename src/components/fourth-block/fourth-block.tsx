import { FC } from "react";

import './fourth-block.scss';
import fourthBlockImage from '../../assets/fourth-block/fourth-block-image.png'
import Card from "../card/card";
import { useTranslation } from "react-i18next";

const FourthBlock: FC = () => {
    const { t } = useTranslation(['fourthBlock'])
    return (
        <div className="fourth-block">
            <div className="container">
                <h2>{t('fourthBlock.title')}</h2>
                <Card 
                    cardTitle={t('fourthBlock.cardTitle')} 
                    cardText={t('fourthBlock.cardText')}
                    listTitle={t('fourthBlock.listTitle')}
                    listItems={[
                        t('fourthBlock.list1'),
                        t('fourthBlock.list2'),
                        t('fourthBlock.list3')
                    ]}
                />
            </div>
            <img src={fourthBlockImage} alt="fourth-block-image" className="fourth-block-image"/>
        </div>
    )
}

export default FourthBlock