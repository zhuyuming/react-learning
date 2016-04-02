import React, { Component } from 'react'
import Head from '../Head'
import Foot from '../Foot'


export default class App extends Component{
    render(){
        var newProps = Object.assign({}, this.props,this.props.children.props)
        var newChild = Object.assign({}, this.props.children, { props: newProps })
        return <div>
            <Head {...this.props} />
            { newChild }
            <Foot {...this.props} />
        </div>
    }
}
