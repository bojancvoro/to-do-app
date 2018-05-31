import React, { Component } from 'react';
import { Header } from "../presentation/header";
import { TakeInputs } from '../presentation/takeInputs';
import { List } from '../presentation/list';

class MainContainer extends Component {
    render() {
        return (
            <div>
                <Header />
                <TakeInputs />
                <List />
            </div>
        );
    }
}

export default MainContainer;