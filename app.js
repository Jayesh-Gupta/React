import React from "react"
import ReactDOM  from "react-dom/client";

// JSX ==> React.createElement ==> ReactElement - obj ==> HTMLELEment
const jsxHeading=<h1 id="heading" className="heading">Hello JSX</h1>;

const Title=()=>(
    <h1>This is Title</h1>
)
const Heading=()=>(
    <div>
        {Title()}
        <Title/>
        <Title></Title>
        <h1>Hello from React Component</h1>
    </div>
     );

const Assignment=()=>(
<div className="title">
    <h1>H1</h1>
    <h2>H2</h2>
    <h3>H3</h3>
</div>);


const root=ReactDOM.createRoot(document.getElementById("root"))
//root.render(<Heading/>);
root.render(<Assignment/>);