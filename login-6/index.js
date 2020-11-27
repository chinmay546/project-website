/*===== LOGIN SHOW and HIDDEN =====*/
const signUp = document.getElementById('sign-up'),
    signIn = document.getElementById('sign-in'),
    loginIn = document.getElementById('login-in'),
    loginUp = document.getElementById('login-up')


signUp.addEventListener('click', ()=>{
    // Remove classes first if they exist
    loginIn.classList.remove('block')
    loginUp.classList.remove('none')

    // Add classes
    loginIn.classList.toggle('none')
    loginUp.classList.toggle('block')
})

signIn.addEventListener('click', ()=>{
    // Remove classes first if they exist
    loginIn.classList.remove('none')
    loginUp.classList.remove('block')

    // Add classes
    loginIn.classList.toggle('block')
    loginUp.classList.toggle('none')
})

const loginPopup = document.querySelector(".login-popup");
const close = document.querySelector(".close");
const close2 = document.getElementById('close2');


window.addEventListener("load",function(){

 showPopup();
 // setTimeout(function(){
 //   loginPopup.classList.add("show");
 // },5000)

})

function showPopup(){
      const timeLimit = 3 // seconds;
      let i=0;
      const timer = setInterval(function(){
       i++;
       if(i == timeLimit){
        clearInterval(timer);
        loginPopup.classList.add("show");
       } 
       console.log(i)
      },1000);
}
close.addEventListener("click",function(){
  loginPopup.classList.remove("show");
})
close2.addEventListener("click",function(){
    loginPopup.classList.remove("show");
  })


  function openNav() {
    document.getElementById("mySidenav").style.width = "350px";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }