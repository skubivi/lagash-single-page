import { FC } from 'react'
import './sixth-block.scss'
import Card from '../card/card'

import sixthBlockImage from '../../assets/sixth-block/sixth-block-image.png'
import { useTranslation } from 'react-i18next'

const SixthBlock: FC = () => {
    const { t } = useTranslation(['sixthBlock'])
    return (
        <div className='sixth-block'>
            <Card 
                cardTitle={t('sixthBlock.cardTitle')}
                cardText={t('sixthBlock.cardText')}
                listTitle={t('sixthBlock.listTitle')}
                listItems={[
                    t('sixthBlock.list1'),
                    t('sixthBlock.list2'),
                    t('sixthBlock.list3'),
                    t('sixthBlock.list4'),
                    t('sixthBlock.list5'),
                    t('sixthBlock.list6')
                ]}
            />
            <img src={sixthBlockImage} alt='sixth-block-image' className='sixth-block-image'/>
        </div>
    )
}

export default SixthBlock