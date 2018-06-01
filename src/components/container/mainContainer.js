import React, { Component } from 'react';
import { Header } from "../presentation/header";
import { TakeInputs } from '../presentation/takeInputs';
import { List } from '../presentation/list';
import TakeInputsContainer from './takeInputsContainer';

class MainContainer extends Component {
    constructor(props) {
        super(props);
        this.state = { items: [], displayItems: [] };
    }

    handleAddItem = (newItem) => {
        if(!this.state.items.includes(newItem)) {
            this.setState(() => {
                return {
                        items: [...this.state.items, newItem],
                        displayItems: [...this.state.displayItems, newItem]
                    };
            });
        }
    }

    handleSearch = (searchTerm) => {
        console.log(searchTerm);
        const filteredItems = this.state.items.filter((item) => {
            return item.includes(searchTerm);
        });
        this.setState({ displayItems: filteredItems });
    }

    render() {
        return (
            <div>
                <Header />
                <TakeInputsContainer handleAddItem={this.handleAddItem} handleSearch={this.handleSearch} />
                <List items={this.state.displayItems} />
            </div>
        );
    }
}

export default MainContainer;