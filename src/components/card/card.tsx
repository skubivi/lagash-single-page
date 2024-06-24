import { FC } from "react";

import listMarker from '../../assets/card/list-marker.svg'

import './card.scss'

interface ICard {
    cardTitle: string;
    cardText: string
    listTitle: string
    listItems: string[]
}

const Card: FC<ICard> = ({
    cardText,
    cardTitle,
    listItems,
    listTitle
}) => {
    return (
        <div className="card-container">
            <div className="card">
                <h4>{cardTitle}</h4>
                <p>{cardText}</p>
            </div>
            <div className="list-container">
                <h5>{listTitle}</h5>
                <ul>
                    {listItems.map((element, index) => <li key={index}><img src={listMarker} alt="list-marker"/><p>{element}</p></li>)}
                </ul>
            </div>
        </div>
    )
}

export default Card