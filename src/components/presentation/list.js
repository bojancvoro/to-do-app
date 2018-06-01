import React from "react";
import { ListItem } from "./listItem";

export const List = (props) => {
    return (
        <div>
            {props.items.map((item) => {
                return <ListItem itemName={item} key={item} handleRemoveItem={props.handleRemoveItem} />
            })}
        </div>
    );
}