import { FC } from 'react'
import './seventh-block.scss'
import Card from '../card/card'

import seventhBlockImage from '../../assets/seventh-block/seventh-block.png'
import { useTranslation } from 'react-i18next'

const SeventhBlock: FC = () => {
    const { t } = useTranslation(['seventhBlock'])
    return (
        <div className='seventh-block'>
            <Card 
                cardTitle={t('seventhBlock.cardTitle')}
                cardText={t('seventhBlock.cardText')}
                listTitle={t('seventhBlock.listTitle')}
                listItems={[
                    t('seventhBlock.list1'),
                    t('seventhBlock.list2'),
                    t('seventhBlock.list3'),
                    t('seventhBlock.list4')
                ]}
            />
            <img src={seventhBlockImage} alt='seventh-block-image' className='seventh-block-image'/>
        </div>
    )
}

export default SeventhBlock