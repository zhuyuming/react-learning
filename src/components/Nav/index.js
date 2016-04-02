import React, { Component } from 'react'
import { Link } from 'react-router'
export default class Nav extends Component{
    render(){
        return <div>
            <Link to="/">Home</Link> |
            <Link to="/ucenter">Ucenter</Link> |
            <Link to="/login">Login</Link> |
            <Link to="/list">List</Link>
        </div>
    }
}
