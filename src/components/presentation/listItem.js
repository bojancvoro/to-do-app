import React from "react";

export const ListItem = (props) => {
    return (
        <div>
            {props.itemName}
            <button onClick={(e) => props.handleRemoveItem(props.itemName)}>Remove Item</button>
        </div>
    );
}