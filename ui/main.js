//console.log('Loaded!');

//change the text of the main-text div
//var element = document.getElementById('main-text');

//element.innerHTML = 'New value';

//move the image
//var img = document.getElementById('madi');
//var marginLeft = 0;
//function moveRight(){
  //  marginLeft = marginLeft + 1;
    //img.style.marginLeft = marginLeft + 'px';
//}
//img.onclick= function () {
  //  var interval = setInterval(moveRight, 50);
    //img.style.marginLeft = '100px';
//};

var button = document.getElementById('counter');
var counter = 0;
button.onclick = function (){
    //create a request object
    var request = new XMLHttpRequest();
    
    //capture the response and store it in a variable
    request.onreadystatechange = function () {
        if(request.readyState === XMLHttpRequest.DONE){
            //take some action
            if(request.status === 200){
                var counter = request.responseText;
                var span = document.getElementById('count');
                span.innerHTML = counter.toString();    
            }
        }
        //not done yet
     };
     // make the request
     request.open('GET', 'http://javedalikhan50.imad.hasura-app.io/counter', true);
     request.send(null);
    
};

//submit name
var nameInput = document.getElementById('name');
var name = nameInput.value;
var submit = document.getElementById('submit_btn');
submit.onclick = function (){
    // make a request to server and the send the name
    
    //capture a list of name and render it as a list
    var name = ['name1', 'name2', 'name3'];
    var list = '';
    for (var i=0; i< names.length; i++){
        list += '<li>' +name[i] + '<li>';
    }
    var ul = document.getElementById('namelist');
    ul.innerHTML = list;
    }
    
}