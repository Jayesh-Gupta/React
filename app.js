/*  <script>
const heading=document.createElement("h1");
heading.innerHTML="Hello javascript!";
const root=document.getElementById("root");
root.appendChild(heading);
</script> */
//nested elements
/*
<div id="parent">
    <div id="child">
        <h1></h1>
        <h2></h2>
    </div>
    <div id="child2">
        <h1></h1>
        <h2></h2>
    </div>
</div>


*/
const nested=React.createElement("div",{"id":"parent"},
    React.createElement("div",{"id":"child"},
        React.createElement("h1",{},"Hello")));
//siblings
const siblings=React.createElement("div",{"id":"parent"},
    React.createElement("div",{"id":"child"},
        [React.createElement("h1",{},"h1"),React.createElement("h2",{},"h2")]));

const nestedDiv=React.createElement("div",{"id":"parent"},
        [React.createElement("div",{"id":"child"},
        [React.createElement("h1",{},"h1"),React.createElement("h2",{},"h2")]),
        React.createElement("div",{"id":"child2"},
        [React.createElement("h1",{},"h1"),React.createElement("h2",{},"h2")])]);
        
console.log(nested);

const heading=React.createElement("h1",{"id":"heading"},"Hello React!");// returns object
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(nestedDiv); // converting object into h1 tag and putting it in dom
