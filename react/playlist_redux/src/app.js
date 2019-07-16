import React, { Component } from 'react';
import { connect } from 'react-redux'

import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import Home from './home'
import Add from './add'


export class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div id="musicApp">
                    <Switch>
                        <Route path="/add" component={Add}></Route>
                        <Route path="/" render={(e) => {
                            if (this.props.data.length === 0) {
                                return <Redirect to="/add" />
                            }
                            return <Home router={e} />
                        }}></Route>
                    </Switch>
                </div>
            </BrowserRouter>
        )
    }
}

export default connect((state) => state)(App)