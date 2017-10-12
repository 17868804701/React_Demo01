import React from 'react';
import ComponentBodyChlid from './bodyChild'

export default class ComponentIndex extends React.Component {
    constructor() {
        super();
        this.state = {username: "jack"}
    }

    changeInfo(name) {
        this.setState({username: name});
        // ref获取Dom节点
        console.log(this.refs.My_button);
        this.refs.My_button.style.color = 'red';
    }

    handleChangeValue(event) {
        this.setState({username: event.target.value})
    }

    render() {
        setTimeout(()=>{
            this.setState({username:"666"})
        },4000);
        return (
            <div>
                <h1>这是主题内容</h1>
                <p>接收到页面的参数-------name:{this.state.username},userId:{this.props.userId}</p>
                <input type="button" ref="My_button" value="提交" onClick={this.changeInfo.bind(this, "黄森")}/>
                <ComponentBodyChlid handleChangeValue={this.handleChangeValue.bind(this)}/>
            </div>
        )
    }
}

// ComponentIndex.propTypes = {
//    userId:React.PropTypes.number
// };