import User from "./User";
import UserClass from "./UserClass";
import React from "react";


class About extends React.Component{

    constructor(props){
        super(props);
        console.log("Parent Constructor");
    }

    componentDidMount(){
       // this.timer=setInterval(()=>{console.log("React")},1000);
        console.log("Parent Mount");
    }
    componentDidUpdate(){
        console.log("Parent component did upadate");
    }
    componentWillUnmount(){
        console.log("Parent component unmounted");
       // clearInterval(this.timer);
    }

    render(){
        console.log("Parent Render");
        return (
            <div>
                <h1>About Us</h1>
                <h2>This is About us </h2>
                {/*<UserClass name="Class" location="UserClass"/>*/}
                <User name="function"  location="User"/>
            </div>
        );

    }
}


export default About;