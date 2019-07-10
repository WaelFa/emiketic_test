import React, { Component } from 'react'
import { Link } from "react-router-dom";
import UserDetails from './UserDetails'

export default class Users extends Component {
    constructor(props) {
        super(props)

        this.state = {
            posts: []
        }
    }

    componentWillMount() {
        fetch('https://randomuser.me/api/?results=10&seed=emiketic')
            .then(res => res.json())
            .then(data => this.setState({ posts: data.results}))
    }
    componentDidMount() {
        document.title = "User Index";
    }


    render() {
        const tab = this.state.posts
        const postItems = tab.map((el, key) => {
            return (
                <div key={key}>
                    <h1>Name: {el.name.first}</h1>
                    <h1>Email: {el.email}</h1>
                    <Link to={`/user/${el.name.first}`} ><h1>User Detail</h1></Link>
                    <br/>
                </div >  
            )
    })
    return(
            <div>
               {postItems}
            </div >
        )
    }
}
