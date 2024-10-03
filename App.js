// <div id="parent"> Done
        // <div id="child1">
            //<h1></h1>
            //< h1></h2>
        // </div> 
        // <div id="child2">
            //<h1></h1>
            //<h2></h2>
        // </div> 
// </div>

const parent = React.createElement("div",{id:"parent"},
    [React.createElement("div",{id:"child1"},[React.createElement("h1",{},"chidl1 H1"),React.createElement("h2",{},"chidl1 H2")])
    ,React.createElement("div",{id:"child2"},[React.createElement("h1",{},"chidl1 H1"),React.createElement("h2",{},"chidl1 H2")])]


)


const  root = ReactDOM.createRoot(document.getElementById("root"))
root.render(parent)