import React from "react";

export const ListItem = (props) => {
    return (
        <div>
            {props.itemName}
            <button>Remove Item</button>
        </div>
    );
}