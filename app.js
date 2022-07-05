const userName=document.getElementById('firstname');
const lastName=document.getElementById('lastname');
const email=document.getElementById('email');
const password=document.getElementById('password');
const icon=document.querySelector('.divicon');
const para=document.getElementById('text');
const iconLastName=document.querySelector('.divicon2');
const iconEmail=document.querySelector('.divicon3');
const iconPassword=document.querySelector('.divicon4');
const para1=document.querySelector('.text2');
const para2=document.querySelector('.text3');
const para3=document.querySelector('.text4');
const form=document.querySelector('.valida');
const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

form.addEventListener('submit',e=>{
    e.preventDefault()
    checkValue();
})

function checkValue(){
    if(userName.value==''){
        icon.style.display="block";
        para.style.display="block";
    }else if(userName.value!=''){
        icon.style.display="none";
        para.style.display="none";
    }
    if(lastName.value==''){
        iconLastName.style.display="block";
        para1.style.display="block";
    }else if(lastName.value!=''){
        iconLastName.style.display="none";
        para1.style.display="none";
    }
    if(password.value==''){
        iconPassword.style.display="block";
        para3.style.display="block";
    }else if(password.value!=''){
        iconPassword.style.display="none";
        para3.style.display="none";
    }

    if(email.value==''){
        iconEmail.style.display="block";
        para2.style.display="block";
        form.classList.remove('valid');
        form.classList.remove('invalid');
    }
    if(email.match(pattern)){
        form.classList.add('valid');
        form.classList.remove('invalid');
        para2.style.display="block";
        para2.innerHTML="Email is valid";
      }else{
        form.classList.remove('valid');
        form.classList.add('invalid');
        para2.innerHTML='Please Enter Correct Email';
      }
      
    


}
    
 

   
    
       