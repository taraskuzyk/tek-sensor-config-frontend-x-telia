import React from 'react'
import {Card, CardHeader, Col} from "shards-react";
import ItemList from "../ItemList/ItemList";

export default function MenuCol({lg, header, items, onClick, getItemDisplay}){
    return(
        <Col sm={12} lg={lg} xs={12}>
            <Card>
                <CardHeader>
                    {header}
                </CardHeader>
                {items && items.length > 0 ?
                    <ItemList
                        items = {items}
                        onClick = {onClick}
                        getItemDisplay = {getItemDisplay}
                    />
                    :
                    null

                }
            </Card>
        </Col>
    )
}
