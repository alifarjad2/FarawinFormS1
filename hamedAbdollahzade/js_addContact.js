// این متغییرها رو تعریف کردم ک ولیدیت فرمام رو انجام بدم 
// متغییر vpc فیلد موبایل اگه درست باشه مقدار درست رو میگیره
var vpc = false ;
// متغییر vin برای اینه که اگه نام و نام خانوادگی نوشته نشده بود دکمه از کار بیوفته 
var vin = false ;

// -------------------------------------------
function validInputMobile ()
{
    // این فرم برای اعتبار سنجی شماره موبایل
    // debugger
    let phoneContact = document.getElementById('inputMobile').value ;
// اینجا مقدار شماره تماس مخاطب رو میگیره و چک میکنه ک حتما رقم باشه و طولش یازده رقم باشه 
    if (Number(phoneContact) && phoneContact.length === 11)
    {
        for (let i=0 ; i<11 ; i++)
        {
            if (phoneContact[i] >= 0 && phoneContact[i] <= 9)
            {
                // اینجا اگه شرط برقرار بود پیام خطارو نمایشش رو غیر فعال میکنه و مقدار ولیدیت این فیلد رو درست قرار میده 
                document.getElementById('spanInputMobile').style.display='none';
                vpc = true;
            }
            else 
            {
                vpc = false;
                break;
            }
        }
    }
    else 
    {
        document.getElementById('spanInputMobile').style.display="";
    }
}
// ------------------------------------------------------------------
    // debugger
    const flname = document.getElementById('inputFnameLname').value;
    if(flname !== "")
    {
        vin = true ;
    }
// -----------------------------------------------------------
// debugger
// اینجا هم برای دکمه باتنم ی ایونت اضافه کردم ک اگه مقدار اینپوت هام درست وارد نشده بود دکمه رو غیرفعال کنه 
const btnAddContact = document.getElementById('btnAddContact') ;
btnAddContact.addEventListener('click',event=>{
    if(!vpc  && !vin )
    {btnAddContact.disabled = true;}
})
// ---------------------------------------------------------------