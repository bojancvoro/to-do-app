import React, { Component } from 'react';
import { Header } from "../presentation/header";
import { TakeInputs } from '../presentation/takeInputs';
import { List } from '../presentation/list';
import TakeInputsContainer from './takeInputsContainer';
import ClearList from '../presentation/clearList';

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
        const displayItems = this.state.items.filter((item) => {
            return item.includes(searchTerm);
        });
        this.setState({ displayItems });
    }

    handleRemoveItem = (itemToRemove) => {
        const items = this.state.items.filter((item) => {
            return item !== itemToRemove;
        });
        this.setState({ items, displayItems: items });
    }

    handleClearList = () => {
        this.setState({ items: [], displayItems: [] });
    }

    render() {
        return (
            <div>
                <Header />
                <TakeInputsContainer handleAddItem={this.handleAddItem} handleSearch={this.handleSearch} />
                <List items={this.state.displayItems} handleRemoveItem={this.handleRemoveItem} />
                <ClearList handleClearList={this.handleClearList} listEmpty={this.state.items.length < 1} />
            </div>
        );
    }
}

export default MainContainer;