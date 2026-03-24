const eventBus = {
    events:{},
 
    subscribe(event, fn){
        (this.events[event] ||= []).push(fn);
    },
 
    publish(event, data){
        (this.events[event] || []).forEach(fn=>fn(data));
    }
};
eventBus.subscribe("login", data=>{console.log("User:", data.name);
});
 
eventBus.publish("login", {name:"Naveen"});
eventBus.publish("login", {name:"ram"});
eventBus.publish("login", {name:"ester"});




















// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Document</title>
// </head>
// <body>
//     <div>
// <label for="name">Enter the name</label>
// </div>
// <div>
//     <input id="name" >
// </div>
// <div>
    
//     <label for="name">Enter the Email</label>
// </div>
//     <div>

//         <input id="email">
//     </div>
 
// <script>
// let name = document.getElementById("name");
// let email = document.getElementById("email");
 
// name.value = localStorage.getItem("name") || "";
// email.value = localStorage.getItem("email") || "";
 
// name.oninput = ()=>localStorage.setItem("name", name.value);
// email.oninput = ()=>localStorage.setItem("email", email.value);
// </script>
// </body>
// </html>