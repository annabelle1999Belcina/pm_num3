import React,{Component} from 'react';

class Dashboard extends Component{
    render(){
        return(
            <div>
                <div>Welcome</div>
                <div>Hello, {this.props.username}</div>
            </div>
        )
    }
}
export default Dashboard;