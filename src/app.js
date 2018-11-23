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
    
var user = {
    name: 'Ankit',
    age: 21,
    location: 'Jodhpur'
};



function getLocation(location){
    if(location){
        return <p>Location: {location}</p>;
    }
    else{
        return undefined;
    }
}
var template = (
    <div>
        <h1>{user.name ? user.name : 'Anonymous'}</h1>
        {( (user.age && user.age >=18) && <p>Age: {user.age}</p> )}
        {getLocation(user.location)}
    </div>
);
var appRoot = document.getElementById('app');
ReactDOM.render(template, appRoot);