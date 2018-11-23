"use strict";

console.log("App.js is running! ");

//JSX - JavaScript XML

// var template = ( 
//     <div>
//         <h1>Indecision app!</h1>
//         <p>This is some info.</p>
//         <ol>
//             <li>item 1</li>
//             <li>item 2</li>
//             <li>item 3</li>
//         </ol>
//     </div>
// );

var templateTwo = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        "Ankit"
    ),
    React.createElement(
        "p",
        null,
        "Age: 21"
    ),
    React.createElement(
        "p",
        null,
        "Address: Jodhpur"
    )
);
var appRoot = document.getElementById('app');
ReactDOM.render(templateTwo, appRoot);
