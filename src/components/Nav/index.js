import React, { Component } from 'react'
import { Link } from 'react-router'
export default class Nav extends Component{
    render(){
        return <div>
            <Link to="/">Home</Link>
            <span> | </span>
            <Link to="/ucenter">Ucenter</Link>
            <span> | </span>
            <Link to="/login">Login</Link>
            <span> | </span>
            <Link to="/list">List</Link>
        </div>
    }
}
