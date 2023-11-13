
function FormButton(){

    let nameTxt = document.getElementById('nameTxt');
    let nameInp = document.getElementById('nameInp');

    let emailTxt = document.getElementById('emailTxt');
    let emailInp = document.getElementById('emailInp');

    let passwordTxt = document.getElementById('passwordTxt');
    let passwordInp = document.getElementById('passwordInp');

    if(nameInp.value.length == 0){
        nameInp.classList ='redborder';
        nameTxt.style.display ='inline';
    }
    else{
        nameInp.classList ='blackborder';
        nameTxt.style.display ='none';
    }

    if(emailInp.value.length == 0){
        emailInp.classList ='redborder';
        emailTxt.style.display ='inline';
    }
    else{
        emailInp.classList ='blackborder';
        emailTxt.style.display ='none';
    }

    if(passwordInp.value.length == 0){
        passwordInp.classList ='redborder';
        passwordTxt.style.display ='inline';
    }
    else{
        passwordInp.classList ='blackborder';
        passwordTxt.style.display ='none';
    }

    if(nameInp.value.length != 0 && emailInp.value.length != 0 && passwordInp.value.length != 0){
        alert("Data Has Been Submitted");
    }
}