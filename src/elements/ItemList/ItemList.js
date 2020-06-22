import React, {useState} from 'react'
import {ListGroup, ListGroupItem} from "shards-react";

export default function ItemList({items, onClick, getItemLabel}){

    const [activeItem, setActiveItem] = useState(items ? (items[0] ? items[0] : null) : null);
    //
    if (items) {
        return (
            <div>
            <ListGroup >
                {
                    items.map((item, i) => {
                        return (
                            <ListGroupItem
                                action={true}
                                active={ activeItem === item || (activeItem === null && i === 0) }
                                onClick={() =>{
                                    console.log("inside ItemList.js")
                                    console.log(items)
                                    setActiveItem(item)
                                    onClick(item)
                                }}
                                /*key={item}*/
                            >
                                {getItemLabel(item)}
                            </ListGroupItem>
                        );
                    })
                }
            </ListGroup>
            </div>
        )
    }
    else {
        return (
            <p>Loading...</p>
        )
    }
}
