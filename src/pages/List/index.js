import React, { Component } from 'react'
import { listAction } from '../../actions'

export default class List extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return <div>
            <h2>List</h2>
            <ul>
            	{ this.props.list.map( (item,index) => <li
            		onClick = { () => this.props.dispatch(listAction.del(index)) }
            		key = { index }
            		>{ item }</li> ) }
            </ul>
        </div>
    }
}
