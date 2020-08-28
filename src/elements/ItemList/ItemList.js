import React, {useState, useEffect} from 'react'
import {ListGroup, ListGroupItem} from "shards-react";

export default function ItemList({items, onClick, getItemDisplay}){

    const [activeItem, setActiveItem] = useState(items ? (items[0] ? items[0] : null) : null);

    useEffect(()=> {
        setActiveItem((oldItems)=> {
            if (oldItems && items && oldItems[0] && items[0] && items[1] && //simply checking for existence of stuff
                oldItems[0] === items[1] && oldItems[0] !== items[0]) {
                // prevents from annoying refresh when only one item is added to the list
                // e.g. if we have
                //                  [item7, item8, item9]
                // and we change to
                //                  [item6, item7, item8, item9]
                // while we have item9 selected, the user does't get "kicked" to item6, but stays at item9.
                setActiveItem(items[0])
            }
            if (!activeItem) { // on first items update
                setActiveItem(items[0])
            }
        })
    }, [items])

    if (items) {
        return (
            <div style={{display: "block-inline"}}>
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
                                {getItemDisplay ? getItemDisplay(item) : "XD"}
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
