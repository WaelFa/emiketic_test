import React, { Component } from 'react'
import { Link } from "react-router-dom";

export default class UserDetails extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            posts: [],
            name: props.match.params.username,  
        }
    }
    componentWillMount() {
        fetch('https://randomuser.me/api/?results=10&seed=emiketic')
            .then(res => res.json())
            .then(data => this.setState({ posts: data.results }))
        
        
    }
    componentDidMount() {
        document.title = "User detail";
    }
    
    
    render() {
        const element = this.state.posts.filter(el => el.name.first === this.state.name)[0];
        console.log(element)
       
    return (
            <div>
                <center>
                    <h1>User Details</h1>
                    <br />
                    <h3>name : {}</h3>
                    <h3>email : {}</h3>
                    <h3>phone : {}</h3>
                    <h3>gender : {}</h3>
                    <h3>location : {}</h3>
                    <h3>picture : {}</h3>
                    <Link to="/" ><button>Back</button></Link>
                </center>
                
            </div>
        )
    }
}
