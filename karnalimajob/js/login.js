const container= document.querySelector(".log"),
      eyeSlash= document.querySelectorAll(".eyeslash"),
      passWord= document.querySelectorAll(".password");
     let eye=[{eye:"icons/eye.svg"}];


// js code to show/hide password and change icon
eyeSlash.forEach(eyeIcon=>{
    eyeIcon.addEventListener("click",()=>{
        passWord.forEach(passWord=>{
            if(passWord.type==="password"){
                passWord.type="text";
                eyeIcon.classlist.remove("eyeSlash");
                eyeicon.classlist.add("eye")

                 
            }
            else{
                passWord.type="password";
                eyeIcon.classlist.add("icons/eyepassword.svg");
                eyeicon.classlist.remove("icons/eye.svg")


            }
        })
    })
}
            )
