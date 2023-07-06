///////////////////////////////////////////////////////////  استایل به فیلد شماره مخاطب جدید
// استایل اولیه ارور شماره
let errorNumber = document.getElementById("errorNumber");
errorNumber.style.display = "none";
/////////////// المنت مورد نظر رو میریزیم توی یک متغیر تا کد خوانا تر باشه
let numberMobileNewContact = document.getElementById("numberMobileNewContact");
// متد addeventlistener بهش اضافه میکنیم تا نسبت به هر بار که مقدارش تغییر کرد ،مقدار ورودی رو چک کنه
numberMobileNewContact.addEventListener("input", () => {
  ///// شرط اول چک میکنه که درصورت خالی بودن نباید ارور رو نشون بده
  if (numberMobileNewContact.value == "") {
    errorNumber.style.display = "none";
  } //// اینجا چون نمیخاستم از روش regs استفاده کنم
  ////  یک شرط گذاشتم که اگر یک رقم اضافه شد اون رو بریز داخل یک متغیر
  else if (numberMobileNewContact.value.length == 1) {
    let numberMobileValue = numberMobileNewContact.value;
    //  مقدار متغیر جدید تبدیل به رشته میشه تا بتونیم از متد (startsWith)استفاده کنیم
    numberMobileValue = numberMobileValue.toString();
    /////// خط پایین چک میکنه که حتما اولین کاراکتر 0 باشه
    if (!numberMobileValue.startsWith("0")) {
      errorNumber.style.display = "";
    } ////// باید یک درغیر اینصورت باشه تا درصورت درست بودن شرط ارور رو پاک کنه
    ///  چون اگردراخرشرط ها بزنیم  "else{ ارور رو پاکن }"   بقیه شرط ها بهم میریزه
    else {
      errorNumber.style.display = "none";
    }
  } //// همینطور برای رقم دوم، باید دوباره مثل بالا به رشته تبدیل بشه تا رقم دوم رو چک کرد
  else if (numberMobileNewContact.value.length == 2) {
    let numberMobileValue = numberMobileNewContact.value;
    numberMobileValue = numberMobileValue.toString();
    /// اینجا بااضافه کردن 1 داخل پرانتز ایندکس رو مشخص میکنیم
    //// یعنی از دومین رقم چک کن
    if (!numberMobileValue.startsWith("9", 1)) {
      errorNumber.style.display = "";
    }
  } ////  شرط بعدی برای این هس که از رقم سوم به بعد درصورتی که حرف وارد بشه ارور بده
  else if (
    numberMobileNewContact.value.length >= 3 &&
    isNaN(numberMobileNewContact.value)
  ) {
    errorNumber.style.display = "";
    errorNumber.innerHTML = " فقط عدد ";
  } //// واخرین شرط باری بررسی تعداد کاراکتر هاس
  else if (numberMobileNewContact.value.length != 11) {
    errorNumber.style.display = "";
    errorNumber.innerHTML = " باید 11 رقم باشه  ";
  } else {
    errorNumber.style.display = "none";
  }
});

//////////////////////////////////////////////////////////////////  استایل فیلد اسم مخاطب جدید
//  استایل ارور اسم
const errorName = document.getElementById("errorName");
errorName.style.display = "none";
//////////////////// المنت مورد نظر رو میریزیم توی یک متغیر تا کد خوانا تر باشه
let nameNewContact = document.getElementById("nameNewContact");
////  متد addeventlistener بهش اضافه میکنیم تا نسبت به دفعه ای که مقدارش تغییر کرد ،مقدار ورودی رو چک کنه
nameNewContact.addEventListener("input", () => {
  if (nameNewContact.value.length > 15) {
    errorName.style.display = "";
  } //// چون فقط یک شرط هست با یک درغیراینصورت میشه هر موردی بجز شرط رو درنظر گرفت
  else {
    errorName.style.display = "none";
  }
});
////////////////////////////////////////////////  لیست مخاطبین
//// ایجاد یک لیست برای مخاطبین
let contactList = [];
/////// یک تابع تا از ثبت مخاطب تکراری جلوگیری بشه
function addContact(newNumber, newName) {
  const notValid = contactList.find((contact) => contact.number === newNumber);
  if (notValid) {
    document.getElementById("error").style.display = "";
    document.getElementById("error").style.color = "red";
    document.getElementById("error").innerHTML = " مخاطب وجود دارد ";
  } else {
    ////// وگرنه مقادیر رو بصورت یک ابجکت  به لیست اضافه کن
    const contact = {
      number: newNumber,
      name: newName,
    };
    contactList.push(contact);
  }
}
// }
///////////////////////////////////////////////////  دکمه submitButton
// برای خوانایی بیشتر المنت رو توی یک متغیر ریختم
const submitButton = document.getElementById("submitButton");
//  استایل رنگ بکگراند و متن
submitButton.style.backgroundColor = " rgb(103, 209, 136) ";
submitButton.style.color = " rgb(27, 50, 30) ";
/////////////////////  اعتبارسنجی مقادیر فیلدهامون
////////// روی دکمه اکشن کلیک زدم تا درصورت درست بودن مقادیر فیلد هاارسال بشه
submitButton.addEventListener("click", (event) => {
  ///////////// اگر فیلد ها خالی بود حالت پیش فرض دکمه غیر فعال بشه
  if (numberMobileNewContact.value === "" && nameNewContact.value === "") {
    event.preventDefault();
  } else if(numberMobileNewContact.value == "" || nameNewContact.value == ""){
    event.preventDefault();
}else {
    //// و در غیر اینصورت مقادیر به تابع افزودن مخاطبین ارسال بشه
    addContact(numberMobileNewContact.value, nameNewContact.value); 
    console.log(contactList);
  }
});
