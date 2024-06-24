import { FC } from 'react'
import './fifth-block.scss'
import Card from '../card/card'

import fifthBlockImage from '../../assets/fifth-block/fifth-block-image.png'
import { useTranslation } from 'react-i18next'

const FifthBlock: FC = () => {
    const { t } = useTranslation(['fifthBlock'])
    return (
        <div className='fifth-block'>
            <Card 
                cardTitle={t('fifthBlock.cardTitle')}
                cardText={t('fifthBlock.cardText')}
                listTitle={t('fifthBlock.listTitle')}
                listItems={[
                    t('fifthBlock.list1'),
                    t('fifthBlock.list2'),
                    t('fifthBlock.list3'),
                    t('fifthBlock.list4'),
                    t('fifthBlock.list5')
                ]}
            />
            <img src={fifthBlockImage} alt='fifth-block-image' className='fifth-block-image'/>
        </div>
    )
}

export default FifthBlock