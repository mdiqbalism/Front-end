const heading = React.createElement(
    "h1",
    {
        
    id:"title",
},
"Hello World!"

);

const heading2 = React.createElement(
    "h2",
    {

    id:"title",
},
"Hello World  2"

);

const container = React.createElement(
    "div",
    {

    id:"container",
},
[heading, heading2]

);

console.log(heading);

const root = ReactDOM.createRoot(document.getElementById("root"));

//passing this render element inside the root
root.render(container);