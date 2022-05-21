var data=JSON.parse(localStorage.getItem("myuser"))

  
function submit(){
    let user=document.getElementById("user").value;
    let pass=document.getElementById("pass").value;
   

    data.map(function(elem,index){
    let luser=elem.email;
    let lpass=elem.passward;
    console.log(user)
    console.log(luser)
    if(luser===user ||lpass===pass){
       alert("thanks", "uiii") 
       window.location.href='index.html'
    }
    else
    {
        alert("invalid Credentials." ,"ok")
    }

    
    
    
})
    



}
