import React from 'react'
import Logo from '../../component/logo/logo.js'
import { Radio,List,InputItem,  WhiteSpace,Button } from 'antd-mobile';

class Register extends React.Component{
    constructor(props){
        super(props)
        this.state={
            user:'',
            pwd:'',
            repeatpwd:'',
            type:'employee'
        }
        this.handleRegister =this.handleRegister.bind(this)
    }
    handleChange(key,val){
        this.setState({
            [key]:val
        })
    }
    handleRegister(){
        console.log(this.state)
    }
    render(){
        const RadioItem = Radio.RadioItem;
        return (
            <div>
                <Logo></Logo>
                <List>
                    <InputItem onChange={(val)=>this.handleChange('user',val)}>User Name :</InputItem>
                    <WhiteSpace/>
                    <InputItem type ='password' onChange={(val)=>this.handleChange('pwd',val)}>Password :</InputItem>
                    <WhiteSpace/>
                    <InputItem type ='password' onChange={(val)=>this.handleChange('repeatpwd',val)}>Confirm :</InputItem>
                    <RadioItem check={this.state.type==='employee' }onChange={()=>this.handleChange('type','employee')}>Employee :</RadioItem>
                    <WhiteSpace/>
                    <RadioItem check={this.state.type==='boss'} onChange={()=>this.handleChange('type','boss')}>Boss :</RadioItem>
                    <WhiteSpace/>
                    <Button type='primary' onClick={this.handleRegister}>Register</Button>
                </List>
            </div>
        )
    }
}
export default Register