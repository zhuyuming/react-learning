import React, { Component } from 'react'
import Nav from '../Nav'
import { listAction } from '../../actions'

export default class ListForm extends Component{

	list(e){
		e.preventDefault();
		let val = this.refs.listitem.value.trim()
		if( val.length > 0 ) this.props.dispatch( listAction.add(val) )
		this.refs.listitem.value = ''
	}
    render(){
        return <div>
            <h3>list from</h3>
            <form action="ad" onSubmit={ (e) => this.list(e) }>
            	<input type="text" ref='listitem' />
            </form>
        </div>
    }
}
