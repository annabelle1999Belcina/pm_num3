import React,{Component} from 'react';

class Dashboard extends Component{
    render(){
        return(
            <div class = "container">
                <center>
                    <div class = "box">
                        <h2>Hello {this.props.name}</h2>
                        <h1>Welcome to the Dashboard ^_^</h1>
                    </div>
                </center>
            </div>
        )
    }
}
export default Dashboard;