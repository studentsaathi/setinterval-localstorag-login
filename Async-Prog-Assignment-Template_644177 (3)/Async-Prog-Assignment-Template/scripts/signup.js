let arr=JSON.parse(localStorage.getItem("myuser"))||[]


function Alldata(n,m,e,p){
    this.name=n,
    this.mob=m,
    this.email=e,
    this.password=p
}

 function submit(){
  
 let name=document.getElementById("name").value;
 let mob=document.getElementById("mob").value;
 let email=document.getElementById("email").value;
 let password=document.getElementById("password").value;
 let alldata=new Alldata(name,mob,email,password)
 if((name &&mob && email&& password).length<1){
    alert("PLEASE FILL ALL INPUT" ,"ok")
 }
 else{
    window.location.href='login.html'
    arr.push(alldata)
    localStorage.setItem("myuser",JSON.stringify(arr))

    
 }
 
    
 
 
}