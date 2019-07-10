import React, { Component } from 'react'
import UserDetails from './UserDetails';
import Users from './Users';
import { Route } from 'react-router-dom'

export default class Routes extends Component {
    render() {
        return (
            <div>
                 <Route  path='/' component={Users} />
                 <Route exact path='/user/:username' component={UserDetails}/>
            </div>
        )
    }
}
