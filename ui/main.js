
//Submit username/password to login
//submit name
var submit = document.getElementById('submit_btn');
submit.onclick = function (){
    // make a request to server and the send the name
     //create a request object
    var request = new XMLHttpRequest();
    
    //capture the response and store it in a variable
    request.onreadystatechange = function () {
        if(request.readyState === XMLHttpRequest.DONE){
            //take some action
            if(request.status === 200){
                //capture a list of name and render it as a list
               console.log('user logged in');
               alert('logged in successfully');
            }else if (request.status === 403){
                alert('username/password is incorrect');
            } else if (request.status === 500){
                alert('Something went wrong on the server');
            }
                
            }
        }
        //not done yet
     };
     // make the request
     var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    console.log(username);
    console.log(password);
     request.open('POST', 'http://javedalikhan50.imad.hasura-app.io/login', true);
     request.send(JSON.stringify({username: username, password: password}));
    
};