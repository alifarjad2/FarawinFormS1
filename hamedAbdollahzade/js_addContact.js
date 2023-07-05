// اینجا ی فانکشن تعریف کردم برای عملیات اعتبار سنجی فیلد های شماره موبایل و نام کاربر ک اگه درست نبود دکمه افزودن غیرفعال بشه
// و در کنار المنت اینپوت کاربر بیاد پیغام خطا رو بهش نشون بده 
function validation ()
{
    // debugger
    //    اینجا دکمه و مقادیر موبایل و نام و نام خانوادگی رو گرفتم و از نوع ور تعریف کردم ک پایین تر بتونم ازش استفاده کنم
    var btnAddContact = document.getElementById('btnAddContact') ;
    var flname = document.getElementById('inputFnameLname').value;
    var phoneContact = document.getElementById('inputMobile').value ;
    
// اینجا مقدار شماره تماس مخاطب رو میگیره و چک میکنه ک حتما رقم باشه و طولش یازده رقم باشه 
    if (Number(phoneContact) && phoneContact.length === 11 )
    {
    //  اینجا هم ی حلقه فور تعریف کردم ک تک تک کاراکتر هارو کنترل کنه بین صفر و نه باشه 
        for (let i=0 ; i<11 ; i++)
        {
            if (phoneContact[i] >= 0 && phoneContact[i] <= 9)
            {
                // اینجا اگه شرط برقرار بود پیام خطارو نمایشش رو غیر فعال میکنه و دکمه رو فعال میکنه 
                document.getElementById('spanInputMobile').style.display='none';
                btnAddContact.disabled = false ;
            }
            else 
            {
            // این الس رو گذاشتم ک اگه یکی هم حتی درست نبود دکمه غیر فعال بشه و بریک بشه و از حلقه بیاد بیرون 
                btnAddContact.disabled = true ;
                break;
            }
        }
    }
    else 
    {
        // این الس هم برای اینه ک کلا اگر رقم نباشه و یازده رقمم نبود پیغام خطارو نمایش بده و دکمه رو غیرفعال کنه 
        document.getElementById('spanInputMobile').style.display="";
        btnAddContact.disabled = true ;
    }

    // این ایف رو هم برای خالی نبودن مقدار موبایل و نام و نام خانوادگی گذاشتم ک دکمه رو غیرفعال یا فعال کنه 
    if (flname !== "" && phoneContact !=="" )
    {
        btnAddContact.disabled = false ;
    }
    else 
    {
        btnAddContact.disabled = true ;
    }
}
// ------------------------------------------------------------------
