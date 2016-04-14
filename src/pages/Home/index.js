import React, { Component } from 'react'
import ListForm from '../../components/ListForm'


export default class Home extends Component{
    render(){
        return <div>
            <h2>Homes</h2>
            <ListForm {...this.props} />
        </div>
    }
}
