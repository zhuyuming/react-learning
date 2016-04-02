import React, { Component } from 'react'
import ajax from 'reqwest'

export default class Login extends Component{
    constructor(props){
        super(props)
        this.state = { view: 1, login:true, msg:false, type:'', loading: false}
    }
    submit(e){
        e.preventDefault()

        let that = this

        let parm ={
            username : that.refs.username.value.trim(),
            password : that.refs.password.value.trim()
        }
        if(parm.username.length === 0){
            that.setState( { msg:'请输入帐号', type:'error'} )
            return false;
        }
        if(parm.password.length === 0){
            that.setState( { msg:'请输入密码', type:'error'} )
            return false;
        }

        that.setState({ loading:true })
        ajax({
            url:'./data/login.json',
            data: parm, success:function (data) {
                that.setState({ loading:false })
                if( data.code === 1 ){
                    that.setState( { msg:'登陆成功', type:'success'} )
                }
            }
        })

    }
    lockform(){

    }
    render(){
        let msg = this.state.msg ? <div className={ this.state.type }>{ this.state.msg }</div> : '';
        let load = this.state.loading ? <div>登陆中,请稍候...</div> : '';
        return <div>
            <h2>Login</h2>
            <a href="javascript:;" onClick={ () => this.setState({ view: 1 } )}>登陆</a> |
            <a href="javascript:;" onClick={ () => this.setState({ view: 0 } )}>注册</a>
            <form onSubmit={ (e) => this.submit(e) } action="a" method="get">
                <br/>
                { load }
                <br/>
                <input type="text" ref="username" onFocus={ ()=> this.setState({ msg: false }) } />
                <br/>
                <input type="text" ref="password" onFocus={ ()=> this.setState({ msg: false }) } />
                <br/>
                <button type="submit">{ this.state.view ? '登陆' : '注册'}</button>
            </form>
            { msg }
        </div>
    }
}
