import React from 'react';

export default class ComponentBodyChlid extends React.Component {
    render(){
        return(
            // 子页面向父页面传参
            <p>子页面输入：<input type="text" onChange={this.props.handleChangeValue}/></p>
        )
    }
}