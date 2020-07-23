import React from 'react'
import {Card, CardHeader, Col} from "shards-react";
import ItemList from "../ItemList/ItemList";

export default function MenuCol({lg, header, items, onClick, getItemLabel}){
    return(
        <Col sm={12} lg={lg} xs={12}>
            <Card>
                <CardHeader>
                    {header}
                </CardHeader>
                {items.length > 0 ?
                    <ItemList
                        items = {items}
                        onClick = {onClick}
                        getItemLabel = {getItemLabel}
                    />
                    :
                    null

                }
            </Card>
        </Col>
    )
}
