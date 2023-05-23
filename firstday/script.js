function loginCheck(){
    var setId  = "20-43580-1";
    var setpass = "123456";
    var userId  = document.getElementById('uid').value;
    var userPass = document.getElementById('pass').value;
    if(userId == setId && userPass == setpass){

        alert("Congratulations");
        
    }
    else{
        alert("sorry");
    }
}