import React from 'react';
import ReactDom from 'react-dom';
import ComponentHeader from './components/header';
import ComponentIndex from './components/bodyindex';

class Index extends React.Component{
    render(){
        return(
            <div>
                <ComponentHeader/>
                <ComponentIndex userId={123456}/>
            </div>
        )
    }
}
ReactDom.render(<Index/>,document.getElementById("example"));