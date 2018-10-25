import React from 'react'
import Logo from '../../component/logo/logo.js'
import { Radio,List,InputItem, WingBlank, WhiteSpace,Button } from 'antd-mobile';

class Register extends React.Component{
    constructor(props){
        super(props)
        this.state={
            type:'employee'
        }
    }
    render(){
        const RadioItem = Radio.RadioItem;
        return (
            <div>
                <Logo></Logo>
                <List>
                    <InputItem>User Name :</InputItem>
                    <WhiteSpace/>
                    <InputItem>Password :</InputItem>
                    <WhiteSpace/>
                    <InputItem>Confirm password :</InputItem>
                    <RadioItem check={this.state.type=='employee'}>
                    Employee :
                    </RadioItem>
                    <WhiteSpace/>
                    <RadioItem check={this.state.type=='boss'}>
                        Boss :
                    </RadioItem>
                    <WhiteSpace/>
                    <Button type='primary'>Register</Button>
                </List>
            </div>
        )
    }
}
export default Register