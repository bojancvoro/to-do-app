import React from "react";
import { TakeInputs } from "../presentation/takeInputs";

class TakeInputsContainer extends React.Component {
    handleAddItem = (e) => {
        e.preventDefault();
        const newItem = e.target.input.value;
        if(newItem) {
            this.props.handleAddItem(newItem);
            e.target.input.value = "";
        }
    }

    handleSearch = (e) => {
        const searchTerm = e.target.value;
        this.props.handleSearch(searchTerm);
    }
    
    render() {
        return (
            <TakeInputs handleAddItem={this.handleAddItem} handleSearch={this.handleSearch} />
        );
    }
}

export default TakeInputsContainer;
