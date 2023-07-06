// baraye mantegh safhe az js estefade miknim 

// از این دستور برای سخت گیری بیشتر کد استفاده میشه
'use strict'

// #region varibales
// to in gheshmat motaghayer hamo tarif kardm va meghdar dadm
// az type let tarif kardm ke dar windows zakhire nashe
let inputTextMobile = document.getElementById('textMobile');
let inputTextFullname = document.getElementById('textFullname');
let errorFullname = document.getElementById('errorFullname');
let btn = document.querySelector('button');
// in motagheyr ham baraye check kardn meghdar input ha gozashtam
let isFullnameValid = false;
//baraye shabih sazi gereftn shomare mobile az samt server in var ro sakhtm
let contactMobile = '09153265634';
// #endregion

// #region InputMobile
// dar in ghesmat meghad field aval ro bar asas database samt server gharar midahim 
inputTextMobile.value = contactMobile;
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
    // harbar k input haro vared miknim check mikne agar 2ta input okay boodn gozine edit mokhatab ro faal mikne
    if(isFullnameValid){
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
    // chon edit ro mokhatab haye az ghabl mojod anjam mishe pas bad in click bedon hich sharti esm mokhatab edit mishe
}
// #endregion