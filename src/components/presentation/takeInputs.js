import React from "react";

export const TakeInputs = (props) => {
    return (
        <div>
            <form onSubmit={props.handleAddItem}>
                <input name="input" autoComplete="off"></input>
                <button>Add Item</button>
            </form>
            <br />
                <input 
                    name="input" 
                    onChange={props.handleSearch} 
                    placeholder="SearchYour To-Dos"
                    autoComplete="off"
                >
                </input>
            <br/>
        </div>
    );
} 