import React, {useState, useEffect} from 'react'
import {ListGroup, ListGroupItem} from "shards-react";

export default function ItemList({items, onClick, getItemDisplay}){

    const [activeItem, setActiveItem] = useState(items ? (items[0] ? items[0] : null) : null);

    if (items) {
        return (
            <ListGroup>
                {
                    items.map((item, i) => {
                        return (
                            <ListGroupItem
                                action={true}
                                active={ activeItem === item || (activeItem === null && i === 0) }
                                onClick={() =>{
                                    setActiveItem(item)
                                    if (onClick){
                                        onClick(item)
                                    }
                                }}
                                /*key={item}*/
                            >
                                {getItemDisplay ? getItemDisplay(item) : JSON.stringify(item)}
                            </ListGroupItem>
                        );
                    })
                }
            </ListGroup>
        )
    }
    else {
        return (
            <p>Loading...</p>
        )
    }
}
