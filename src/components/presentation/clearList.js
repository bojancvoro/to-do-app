import React from "react";

const ClearList = (props) => {
    return (
        <div>
            <button disabled={props.listEmpty} onClick={props.handleClearList}>Clear the list</button>
        </div>
    );
}

export default ClearList;