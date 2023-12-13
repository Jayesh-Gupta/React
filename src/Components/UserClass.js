import React from "react";

class UserClass extends React.Component{

    constructor(props){
        super(props);
        this.state={
            count: 0,
            count2: 2, 
        }
        console.log("Child Constructor");
    }
    componentDidMount(){
        this.setState({
            count:1,
        })
        console.log("Child Mount");
    }
    componentDidUpdate(){
        console.log("child component did upadate");
    }
    componentWillUnmount(){
        console.log("component unmounted");
    }
    render(){
        console.log("Child Render");
        const {name,location}=this.props;
        const {count,count2}=this.state;
        return(
            <div className="user-card">
            <h1>count: {count}</h1>
            <button onClick={()=>{
                this.setState({
                    count:this.state.count+1,
                })
            }}>increase</button>
            <h3>{name}</h3>
            <h4>{location}  </h4>
            <h4>handle: @jayesh</h4>
            </div>
            );
        }

}

export default UserClass;