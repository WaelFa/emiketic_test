import React, { Component } from 'react'

export default class UserDetails extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    render() {
        const { item } = this.props
        console.log(item)
       
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
                </center>
                
            </div>
        )
    }
}
