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
    
var userName = 'Ankit Kumar';
var userAge = 21;
var userLocation = 'Jodhpur';
var templateTwo = (
    <div>
        <h1>{userName.toUpperCase() + '!'}</h1>
        <p>Age: {userAge}</p>
        <p>Location: {userLocation}</p>
    </div>
);
var appRoot = document.getElementById('app');
ReactDOM.render(templateTwo, appRoot);