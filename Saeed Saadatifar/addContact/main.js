// baraye mantegh safhe az js estefade miknim 

// از این دستور برای سخت گیری بیشتر کد استفاده میشه
'use strict'

// #region varibales
// to in gheshmat motaghayer hamo tarif kardm va meghdar dadm
// az type let tarif kardm ke dar windows zakhire nashe
let inputTextMobile = document.getElementById('textMobile');
let inputTextFullname = document.getElementById('textFullname');
let errorMobile = document.getElementById('errorMobile');
let errorFullname = document.getElementById('errorFullname');
let btn = document.querySelector('button');
// in 2ta motagheyr ham baraye check kardn meghdar input ha gozashtam
let isFullnameValid = false;
let isMobileValid = false;
//baraye shabih sazi boodn contact dar database in ro sakhtm baraye tabe onclicn button
let isContactInDatabase = false;
// #endregion

// #region listener InputMobile
inputTextMobile.addEventListener("input" , mobileHandler);
function mobileHandler (){
    // regex dorost kardm baraya check kardan adad 0 ta 9
    let regexMob = /^[0-9]+$/;
    if(inputTextMobile.value.length != 11 || inputTextMobile.value[0] != '0' || inputTextMobile.value[1] != '9' || !regexMob.test(inputTextMobile.value)){
        errorMobile.style.visibility = "visible";
        isMobileValid = false;
    }
    else{
        errorMobile.style.visibility = 'hidden';
        isMobileValid = true;
    }
    // harbar k input haro vared miknim check mikne agar 2ta input okay boodn gozine afzodan mokhatab ro faal mikne
    if(isFullnameValid && isMobileValid){
        btn.disabled = false;
    }
    else{
        btn.disabled = true;
    }
}
// #endregion

// #region listener InputFullname
inputTextFullname.addEventListener("input",fullnameHandler);
function fullnameHandler(){
    // meghdar name harchi be joz khali bashe mored ghabol hast
    if(inputTextFullname.value != ''){
        errorFullname.style.visibility = 'hidden';
        isFullnameValid = true;
    }
    else{
        errorFullname.style.visibility = 'visible';
        isFullnameValid = false;
    }
    // harbar k input haro vared miknim check mikne agar 2ta input okay boodn gozine afzodan mokhatab ro faal mikne
    if(isFullnameValid && isMobileValid){
        btn.disabled = false;
    }
    else{
        btn.disabled = true;
    }   
}
// #endregion

// #region listener ButtonClick
btn.addEventListener("click",btnHandler);
function btnHandler(){
    if(isContactInDatabase){
        //mokhatab be safhe chat afzode mishe va shoro be chat mikne
    }
    else{
        alert('مخاطبی با این شماره وجود ندارد');
    }

}
// #endregion