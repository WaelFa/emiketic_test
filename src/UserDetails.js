import React, { Component } from 'react'
import { Link } from "react-router-dom";

export default class UserDetails extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            posts: [],
            loading: true,
            name: props.match.params.username,  
        }
    }
    componentWillMount() {
        fetch('https://randomuser.me/api/?results=10&seed=emiketic')
            .then(res => res.json())
            .then(data => this.setState({ posts: data.results, loading: false }))
        
        
    }
    componentDidMount() {
        document.title = "User detail";
    }
    
    
    render() {

        const { loading } = this.state;
        if (loading) {
            return <div>Loading ...</div>
        }
        const element = this.state.posts.filter(el => el.name.first === this.state.name)[0];
        console.log(element)
    return (
            <div>
                <center>
                    <h1>User Details</h1>
                    <br/>
                    <h3>name : {element.name.first}</h3>
                    <h3>email : {element.email}</h3>
                    <h3>phone : {element.phone}</h3>
                    <h3>gender : {element.gender}</h3>
                    <h3>location : {element.location.city}</h3>
                <h3>picture : {element.picture.large}</h3>
                <img src={element.picture.large} />
                <Link to="/" ><button>Back</button></Link>
                </center>
                
            </div>
        )
    }
}
