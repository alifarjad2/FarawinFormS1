//* Mohammad Ghorbani
//* کامنت هر لاین در لاین بالاتر ان قرار گرفته است

// ب علت دسترسی نداشتن به سرور یک یوزر تولید کردم تا عملکرد فرم رو باهاش چک کنم
const user = { name: "MohammadGhorbani", mobile: "09305320910" };

//روی صفحه از دام لودد استفاده کردم تا در اولین فرصت بعد از پردازش دام صفحه شروع بکارکنه و منتظر استایل صفحه نباشه
document.addEventListener("DOMContentLoaded", function () {
  // از لاین 7 تا 12 به گرفتن المنت های مورد نظر صفحه با استفاده از ایدی و ریختن انها در یک متغیر برای استفاده در جای مورد نیاز میباشد
  const inputAddMobile = document.getElementById("inputAddMobile");
  const errorMassageMobile = document.getElementById("errorMassageMobile");
  const inputFullName = document.getElementById("inputFullName");
  const errorMessageFullName = document.getElementById("errorMessageFullName");
  const addUser = document.getElementById("addUser");
  const closeAddUserPage = document.getElementById("closeAddUserPage");
  // دو متغیر با پیشفرض غلط ک برای چک کردن درستی دو فیلد مورد استفاده قرار گرفتن تا در صورت درست بودن یا نبودن دکمه افزودن مخاطب را فعال و غیرفعال کنند
  let validationName = false;
  let validationMobile = false;
  // دو متغیر با پیشفرض غلط برای چک کردن اطلاعات مخاطب سمت سرور با مشخصات وارد شده در فیلدها و سپس فعالسازی و غیرفعالسازی دکمه افزودن مخاطب
  let numberValidationOnServer = false;
  let fullNameValidationOnServer = false;

  inputAddMobile.addEventListener("input", function () {
    // کارکرد کلی این فانکشن اینه بیاد مقدار ورودی اینپوت موبایل رو چک کنه تا با 09 شروع بشه و 11 رقم باشه
    //مقدار وردی ک کاربر داخل فیلد موبایل وارد کرد رو داخل ی متغیر با همین نام ریختم تا درستی ک مدنظرمه رو روش چک کنم
    // از .trim() برای حذف اسپیس های قبل و بعد ورودی استفاده شده
    const mobileNumber = inputAddMobile.value.trim();
    // ی متغیر ایجاد کردم ک داخلش ارور مد نظرم رو با استایل مد نظر نشون بدم
    let errorMessage = "";
    // در اینجا چک میکنه اگر ورودی موبایل خالی بود وارد شرط اول میشه و پیام مربوطه رو میریزه داخل متغیر ارور مسیج و مقدا اعتبار سنجی موبایل رو روی اشتباه میذاره
    if (mobileNumber.length == 0) {
      errorMessage = "فیلد خالی میباشد لطفا شماره موبایل را وارد نمایید";
      errorMassageMobile.style.color = "orange";
      validationMobile = false;
    } // اگر شرط بالا درست نبود به شرط دوم میرسه تا چک کنه اگر طول رشته ورودی موبایل 11 رقم نبود یا با 09 شروع نشده باشه پیام مربوطه رو میریزه داخل متغیر ارور مسیج و مقدار اعتبار سنجی روی اشتباه میذاره
    else if (mobileNumber.length !== 11 || !mobileNumber.startsWith("09")) {
      errorMessage =
        "فقط باید ارقام بین صفر تا نه باشد و طول این فیلد 11 رقم باشد";
      errorMassageMobile.style.color = "red";
      validationMobile = false;
      //اگر شرط بالا بازهم درست نبود چک میکنه اگر ورودی 11 رقم باشه و با 09 شروع شده باشه وارد حلقه میشه
    } else if (mobileNumber.length === 11 && mobileNumber.startsWith("09")) {
      // در اینجا کلیت کاری ک انجام میشه اینکه ورودی موبایل ک یک رشته است رو به عدد تبدیل میکنه رو اگر تایپش درست وارد بشه وارد حلقه فور میشه تا تک تک خونه های رشته رو چک کنه تا اگر در صورت مواجه شدن با اعداد بزرگ دارای نماد ایی پیام مربوطه رو میریزه داخل متغیر ارور مسیج و بگه ورودی فقط باید اعداد 0 تا9 باشد و بعد از حلقه خارج میشود
      if (Number(mobileNumber)) {
        for (let i = 0; i < 11; i++) {
          if (mobileNumber[i] === "e") {
            errorMessage = "فقط باید ارقام بین صفر تا نه باشد";
            errorMassageMobile.style.color = "red";
            validationMobile = false;
            break;
            // درصورتی وارد شرط بالا نشود یعنی شماره موبایل کامل درست وارد شده سپس پیام مربوطه رو میریزه داخل متغیر ارور مسیج و مقدار اعتبار سنجی موبایل رو هم روی درست قرار میگیره
          } else {
            errorMessage = "شماره درست وارد شده است";
            errorMassageMobile.style.color = "green";
            validationMobile = true;
          }
        }
        // در صورت درست نبودن تایپ ورودی موبایل وارد این شرط میشه و پیام مربوطه رو میریزه داخل متغیر ارور مسیج و مقدار اعتبارسنجی موبایل رو اشتباه(غلط) میذاره
      } else {
        errorMessage =
          "فقط باید ارقام بین صفر تا نه باشد و طول این فیلد 11 رقم باشد";
        errorMassageMobile.style.color = "red";
        validationMobile = false;
      }
    }
    // اینجا چک میکنه اگر ورودی کاربر با اطلاعات مخاطب از سمت سرور فرضی برابر بود یعنی درسته و مقدار درست رو داخل متغیر اعتبار سنجی میریزه ک یعنی اطلاعات ورودی در سرور موجوده و با هم همخوانی دارد
    numberValidationOnServer = user.mobile === mobileNumber;
    //محتوای ارور مسیج رو داخل المنت ارور مسیج موبایل میریزه ک مربوط ب همچین المنتی با همین ایدی در صفحه است تا برای کاربر نمایش بده
    errorMassageMobile.textContent = errorMessage;
    // تابعی رو فراخوانی میکنه ک درستی یا نادرستی 4 اعتبارسنجی مربوط به لاین های 16 تا 20 رو چک کنه
    updateAddUserButton();
  });

  inputFullName.addEventListener("input", function () {
    // کارکرد کلی این فانکشن اینه ورودی نام و نام خانوادگی رو چک کنه
    // محتوای اینپوت فول نیم رو داخل یک متغیر ب همین نام ریختم تا عملیات های مورد نظر روش انجام بدم
    // از .trim() برای حذف اسپیس های قبل و بعد ورودی استفاده شده
    const fullName = inputFullName.value.trim();
    // یک متغیر برای ریختن مسیج ارور مد نظر داخل ان
    let errorMessage = "";
    // در این شرط چک میکنه طول رشته ورودی کاربر اگر صفر باشه واردش میشه و پیام مربوطه رو میریزه داخل متغیر ارور مسیج و مقدار اعتبار سنجی نام رو غلط(اشتباه) میکنه
    if (fullName.length === 0) {
      errorMessage = "فیلد خالی میباشد لطفا نام و نام خانوادگی را وارد نمایید";
      errorMessageFullName.style.color = "orange";
      validationName = false;
      // در صورت درست نبودن شرط بالا یعنی نام و نام خانوادگی به درستی وارد شده است پس پیام مربوط به ان را داخل ارور مسیج ریخته و مقدار اعتبارسنجی نام هم برابر با درست میشود
    } else {
      errorMessage = "نام و نام خانوادگی به درستی وارد شده";
      errorMessageFullName.style.color = "green";
      validationName = true;
    }
    // دراینجا اگر مقدار فول نیم ک همان مقداریست ک کاربر وارد کرده با یوزر نیم که اطلاعات سمت سرور فرضیه برابر باشه مقدار درست رو داخل متغیر مربوطه میریزه برای فعالسازی و غیر فعالسازی دکمه افزودن مخاطب
    fullNameValidationOnServer = user.name === fullName;
    //محتوای ارور مسیج رو داخل المنت ارور مسیج موبایل میریزه ک مربوط ب همچین المنتی با همین ایدی در صفحه است تا برای کاربر نمایش بده
    errorMessageFullName.textContent = errorMessage;
    // تابعی رو فراخوانی میکنه ک درستی یا نادرستی 4 اعتبارسنجی مربوط به لاین های 16 تا 20 رو چک کنه
    updateAddUserButton();
  });
  // فانکشن اپدیت اضافه کردن یوزر برای اینکه چک کنه مقدار متغیرهای مربوطه در صورت درست بودن از غیرفعالسازی دکمه افزودن مخاطب جلوگیری کنه و در غیر اینصورت دکمه غیرفعال میشه تا زمانیکه تمام مقادیر درست باشن
  function updateAddUserButton() {
    if (
      validationName &&
      validationMobile &&
      numberValidationOnServer &&
      fullNameValidationOnServer
    ) {
      addUser.disabled = false;
    } else {
      addUser.disabled = true;
    }
  }
  // بر روی المنت دکمه بستن صفحه ی ایونت ست کردم ک وقتی روش کلیک شد بدون در نظر گرفتن هرچیزی صفحه رو ببنده اما این قسمت به درستی عمل نمیکنه
  closeAddUserPage.addEventListener("click", function (event) {
    event.preventDefault();
    window.close();
  });
});

//----------------------------------------------------------------------------------------------------------------------

//* این قسمت به بعد کدها مربوط به صفحه ویرایش مخاطب است

//----------------------------------------------------------------------------------------------------------------------

//روی صفحه از دام لودد استفاده کردم تا در اولین فرصت بعد از پردازش دام صفحه شروع بکارکنه و منتظر استایل صفحه نباشه
document.addEventListener("DOMContentLoaded", function () {
  // از لاین 128  تا 134 به گرفتن المنت های مورد نظر صفحه با استفاده از ایدی و ریختن انها در یک متغیر برای استفاده در جای مورد نیاز میباشد
  const inputEditMobile = document.getElementById("inputEditMobile");
  const inputEditFullName = document.getElementById("inputEditFullName");
  const errorMassageEditFullName = document.getElementById(
    "errorMassageEditFullName"
  );
  const saveUser = document.getElementById("saveUser");
  const closeEditUserPage = document.getElementById("closeEditUserPage");
  // مقدار موبایل از سمت سرور فرضی رو در فیلد اینپوت موبایل جایگذاری میکند
  inputEditMobile.value = user.mobile;
  //فیلد اینپوت موبایل را غیر فعال میکند تا چون نیاز ب تغییر ان نداریم
  inputEditMobile.disabled = true;
  // روی المنت اینپوت مربوطه ی ایونت ست کردم ک بیاد ورودی فیلد نام و نام خانوادگی رو چک کنه
  inputEditFullName.addEventListener("input", function () {
    //  مقدار ورودی رو داخل ی متغیر ریختم تا عملیات های مورد نظرم رو روش انجام بدم و
    const editFullName = inputEditFullName.value.trim();
    let errorMessage = "";
    // در این شرط چک میکنه اگر فیلد خالی باشه منظور طول رشته صفر باشه پیام مربوطه رو تولید میکنه و درغیر اینصورت یعنی فیلد پر شده و درسته
    if (editFullName.length === 0) {
      errorMessage = "فیلد خالی میباشد لطفا نام و نام خانوادگی را وارد نمایید";
      errorMassageEditFullName.style.color = "orange";
    } else {
      errorMessage = "نام و نام خانوادگی به درستی وارد شده";
      errorMassageEditFullName.style.color = "green";
    }
    //مقدار ارور مسیج رو داخل المنت ارور مسیج موبایل میریزه ک مربوط ب همچین المنتی با همین ایدی در صفحه است تا برای کاربر نمایش بده
    errorMassageEditFullName.textContent = errorMessage;
  });
  // روی دکمه ذخیره ی ایونت ست کردم ک زمانیکه روش کلیک میشه عملیات انجام بشه
  saveUser.addEventListener("click", function () {
    // مقدار وردی در فیلد نام و نام خانوادگی ک کاربر وارد کرده رو سمت سرور میفرسته رو مقدار جدید رو جایگذاری میکنه ک اینجا یوزر همون شبیه سازیه سرور فرضیه
    user.name = inputEditFullName.value.trim();
  });
  // بر روی المنت دکمه بستن صفحه ی ایونت ست کردم ک وقتی روش کلیک شد بدون در نظر گرفتن هرچیزی صفحه رو ببنده اما این قسمت به درستی عمل نمیکنه
  closeEditUserPage.addEventListener("click", function (event) {
    event.preventDefault();
    window.close();
  });
});
