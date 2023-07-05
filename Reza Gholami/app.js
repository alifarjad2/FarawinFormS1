// #region Variables
// var let const
// متغیر ها یا ثابت هایی که میخوایم در همه جا بهشون دسترسی داشته باشیم بصورت گلوبال تعریف میکنیم
//  میشه کل سند اچ تی ام ال ما document 
//  به المنت موردنظر دسترسی پیدا کنیم که دسترسی مثل دسیترسی در سی اس اس هست با آی دی و بقیه موارد query selector هم می توان با 
// کلاس آیدی و getElementBy... می توان از روش های دیگری هم استفاده کنیم مثل 
// اسم متغیر آورده شده است و سپس وقتی تگ در سمت راست مساوی سلکت شد ریخته میشه داخل متغیر که در سمت چپ تعریف کردیم let بعد
// از کاما استفاده شده است let برای عدم تکرار 
// بلاک اسکوپ هستند const & let
// توسط آی دی دسترسی پیدا کردیم و انتساب کردیم به متغیر فرم form  در کد زیر به تگ 
let form = document.querySelector("#form");
// phoneNumberInput توسط آی دی دسترسی پیدا کردیم و انتساب دادیم به متغیر input type tel  در کد زیر به تگ 
phoneNumberInput = document.querySelector('#phoneNumber'),
	// submitForm تایپ آن دسترسی پیدا کردیم و انتساب دادیم به متغیر  input type submit  در کد زیر به تگ 
	submitForm = document.querySelector('input[type="submit"]'),
	// userNameInput توسط آی دی دسترسی پیدا کردیم و انتساب دادیم به متغیر  input type text  در کد زیر به تگ 
	userNameInput = document.querySelector('#userName'),
	// showFormButton توسط آی دی دسترسی پیدا کردیم و انتساب دادیم به متغیر  button show در کد زیر به تگ 
	showFormButton = document.querySelector('#showFormBtn'),
	// closeFormButton توسط آی دی دسترسی پیدا کردیم و انتساب دادیم به متغیر  button close در کد زیر به تگ 
	closeFormButton = document.querySelector('#closeFormBtn')
//لیست کاربرهای ما که قبلا در سیستم ثبت نام کردد رو در قالب یک آرایه که داخل آن آبجکت ها هستند تعریف کردم
//هر آبجکت مشخصات فرد شامل نام کاربری و شماره تلفن فرد میباشد
let usersList = [
	{mobileNumber: "09038355685", userName: ""    },
	{mobileNumber: "09999999999", userName: "علی" },
	{mobileNumber: "09123456789", userName: "احمد"},
	{mobileNumber: "09111111111", userName: "امیر"}, 
	{mobileNumber: "09222222222", userName: "محمد"}, 
	{mobileNumber: "09333333333", userName: "رضا" }
];
// #endregion
// #region EventListeners
// ها همان رویداد هایی هستند که در صفحه اتفاق می افتند event 
//روصدا زدیم تا مورد استفاده قرار بگیرند eventlistener ما در اینجا تابع  
//این تابع برای خوانایی کد استفاده شده و همه ی ایونت لیسنر هارو در داخل خود جای داده
eventListeners();
// یکسری کد که اعمال مختلفی انجام میدهند و تا زمانی که فراخوانی نشوند مورد استفاده قرار نمیگیرند function 
function eventListeners() {
	//هست اجرا میشه event listener تابعش که پارامتر دوم  Dom این ایونت پس از بارگذاری کامل ساختار 
	// دو پارامتر داره  یکی برای نوع رویدادی که اتفاق می افته و دومی تابعی است که میخواهیم هنگام رویداد فراخوانی کنیم event listener 
	//DomContentLoaded  به محض لود شدن صفحه تابع ما اجرا بشه
	//ها میتوان توابع رو مختصر نوشت arrow function با استفاده از 
	document.addEventListener("DOMContentLoaded", () => {
		// در ابتدای کار دکمه افزودن مخاطب غیر فعال میباشد
		submitForm.disabled = true;
		// دکمه نمایش فرم در ابتدا نمایش داده نمی شود
		// نکته : صرفا برای نمایش دادن و ندادن فرم از دو باتن استفاده شده در پروژه باتن ما پاپ آپ رو میبنده 
		// با دکمه + در صفحه پیام رسان فرم افزودن مخاطب به صورت پاپ آپ نمایش داده میشود
		//پاپ آپ یک پنجره است
		showFormBtn.style.display = 'none'
	})
	// PastePhoneNumber اگر کاربر در فیلد شماره تلفن ایونت پیست رو انجام داد تابع 
	phoneNumberInput.addEventListener('paste', PastePhoneNumber)
	// validatePhoneNumber اگر کاربر در فیلد شماره تلفن ، کلیدی رو فشار داد تابع 
	phoneNumberInput.addEventListener("keydown", validatePhoneNumber)
	//اجرا میشود validateFields وقتی فوکوس از روی اینپوت برداشته شد یا بهتر وقتی که کاربر محتوا نوشت و بیرون فیلد کلیک کرد تابع
	// یعنی در صورتی که ما کلیک کردیم روی اینپوت و ازش خارج شدیم و بیرون کلیک کردیم
	//برای دو اینپوت تل و تکست یکسانه blur توابع ایونت 
	phoneNumberInput.addEventListener('blur', validateField)
	userNameInput.addEventListener('blur', validateField)
	//اجرا میشود showForm اگر کاربر بر روی دکمه نمایش کلیک کرد تابع 
	showFormButton.addEventListener('click', showForm)
	//اجرا میشود closrForm اگر کاربر بر روی دکمه بستن کلیک کرد تابع 
	closeFormButton.addEventListener('click', closeForm)
	//اجرا میشه checkfields زدیم تابع  submit اگر در فرم ما روی دکمه 
	form.addEventListener('submit', checkfields)
}
// #endregion
// #region Functions
// #region Functions > PastePhoneNumber()
// در ورودی تابع به عنوان یک شی حاوی اطلاعات مربوط به رویداد رخ داده شده است event || e با پارامتر 
//این تابع استفاده شده تا جلوی پیست غیر عدد به اینپوت شماره تلفن رو بگیره
function PastePhoneNumber(e) {
	//به داده های موجود در کلیپ بورد دسترسی پیدا میکنیم  e.clipboard  ما از طریق  
	//clipboardData میتونیم داده های موجود در کلیپ بورد را با فرمت تکست بخوانیم و انتساب بدیم به متغیر .getData("text") و از طریق 
	let clipboardData = e.clipboardData.getData("text")
	//  استفاده می کنیم counterNumber برای شمارش تعداد اعداد موجود در کلیپ بورد از متغیر 
	//این است که ما بتونیم مقدارشو در خط های بعدی تغییر بدیم و در همه جا به مقدار آن دسترسی داشته باشیم داخل بلاک خارج بلاک var علت استفاده از 
	var counterNumber = 0;
	//متن کپی شده است clipboardData هر کاراکتر متن و char ما for in متنی که کپی شده رو پیمایش میکنیم که در حلقه 
	for (let char of clipboardData) {
		//در خط بعد یکی اضافه میکنه counterNumber چک میکنه اگر عدد بود به 
		if (char >= '0' && char <= '9') {
			counterNumber++ // counterNumber++ || counterNumber = counterNumber+1
		}
	}
	// counterNumber++ || counterNumber = counterNumber+1
	//  اکنون مقدار تعداد اعداد موجود در متن هست در شرط زیر اگر تعداد این اعداد با طول متن برابر باشه یعنی همه ی متن عدد بوده 
	//و شرط دیگه ای که چک میکنه این است که طول متن پیست شده نباید بیشتر از 11 رقم باشه
	//هر دو شرط باید درست باشند تا به داخل بلاک شرط بریم
	if (counterNumber == clipboardData.length && clipboardData.length <= 11) {}
	//اگر شرط بالا درست بود کاری انجام نمیشه و مقدار کپی یا کات شده پیست میشود در فیلد شماره تلفن
	else {
		//در غیر اینصورت شرط جلوی کار پیشفرض که پیست متن هست رو میگیریم چون مقدار غیر عددی خواستیم پیست کنیم
		e.preventDefault()
		//رو صدا میزنیم و پارامتر های نام آیدی و پیامی که قراره نمایش بده رو ارسال میکنیم showMessage تابع  
		showMessage('#messagePhoneNumber', 'نمیتوان مقدار غیر عددی پیست کرد')
	}
}
// #endregion
// #region Functions > validatePhoneNumber()
// اگر هر کدام از کلید های کیبورد فشار داده شد این تابع اجرا میشود
//برای این است که ما بتونیم اطلاعات مربوط به رویداد رخ داده رو بگیریم e
function validatePhoneNumber(e) {
	//keyCode هر کلید در صفحه کلید یک کد داره که وقتی فشار داده شد ما  اون کد رو انتساب می دیم به متغیر 
	let keyCode = e.keyCode, // or event.key for nameKey
		//codeToString کی کد رو از طریق متد زیر به کاراکتر مربوطش تبدیل میکنه و انتساب میدیم به متغیر 
		codeToString = String.fromCharCode(keyCode)
		//if برای فعال کردن کلید ها و جلوگیری از تکرار کد در شرط های 
		//keycode 8 backspace
		//keycode 37 arrow left
		//keycode 39 arrow right
		,
		forEnableKey = (keyCode != 8 && keyCode != 37 && keyCode != 39)
	// راست و چپ نبود جلوی کار پیشفرض که وارد کردن مقدار داخل فیلد هست رو میگیریم arrow شرط چک میکنه اگر کلیدی که فشار داده شده بود عدد نبود و کلید های حذف و 
	if (isNaN(codeToString) && forEnableKey) {
		e.preventDefault();
		//رو صدا میزنیم و پارامتر های نام آیدی و پیامی که قراره نمایش بده رو ارسال میکنیم showMessage تابع  
		showMessage('#messagePhoneNumber', 'فقط میتوانید ارقام 0 تا 9 وارد کنید')
	}
	//شرط چک میکنه اگر  طول ورودی بزگتر از 11 شد و کلید هایی که در بالا گفته شد نبود جلوی کار پیشفرض رو بگیر و مقدار هارو وارد فیلد نکن
	//e.target تگی که رویداد روش اتفاق افتاده
	if (e.target.value.length > 10 && forEnableKey) {
		e.preventDefault();
		//رو صدا میزنیم و پارامتر های نام آیدی و پیامی که قراره نمایش بده رو ارسال میکنیم showMessage تابع 
		showMessage('#messagePhoneNumber', 'شماره موبایل حداکثر 11 رقم میباشد')
	}
    //اگر بخواهیم شرطی براریم که شماره تلفن حتما اولش با 09 شروع شود این کد رو استفاده میکنیم
    //اگر ولیو فیل موبایل خالی بود و کلید 0 فشارداده نشده بود نمیزاره مقداری غیر صفر وارد فیلد بشه
	 if ( e.target.value == "" && codeToString != "0" && forEnableKey ) {
		e.preventDefault();
		showMessage('#messagePhoneNumber', 'شماره موبایل با 09 شروع میشود')
	}//اگر ولیو داخل فیلد 0 بود رقم بعدی باید 9 باشد
	if ( e.target.value == "0" && codeToString != "9" && forEnableKey ) {
		e.preventDefault()
		showMessage('#messagePhoneNumber', 'شماره موبایل با 09 شروع میشود')
	}
}
// #endregion
// #region Functions > validateField()
//  اتفاق افتاد این تابع اجرا میشود blur وقتی روی هر کدام از اینپوت های تل و تکست ایونت 
function validateField() {
	//شده blur اشاره میکنه به تگی که this
	//بود و داخل فیلد هیچی نبود وارد بلاک شرط بشه phoneNumber شرط چک میکنه اگر آی دی اینپوتی که بلر شده 
	if (this.id == 'phoneNumber' && this.value == "") {
		//رو صدا میزنیم و پارامتر های نام آیدی و پیامی که قراره نمایش بده رو ارسال میکنیم showMessage تابع 
		showMessage('#messagePhoneNumber', 'شماره موبایل نمیتواند خالی باشد')
	}
	//  بین یک تا 10 بود وارد بلاک شرط میشهvalue بود و طول phoneNumber شرط چک میکنه اگر اینپوت ما آیدیش 
	if (this.id == 'phoneNumber' && this.value.length >= 1 && this.value.length <= 10) {
		//رو صدا میزنیم و پارامتر های نام آیدی و پیامی که قراره نمایش بده رو ارسال میکنیم showMessage تابع 
		showMessage('#messagePhoneNumber', 'شماره موبایل 11 رقمی وارد کنید')
	}
	//که همان اینپوت تایپ تکست هست بود  و داخل فیلد هیچی وارد نشده بود وارد بلاک شرط میشه userName شده blur اگر آی دی فیلد 
	if (this.id == 'userName' && this.value == "") {
		//رو صدا میزنیم و پارامتر های نام آیدی و پیامی که قراره نمایش بده رو ارسال میکنیم showMessage تابع 
		showMessage('#messageUserName', 'نام و نام خانوادگی نمیتواند خالی باشد')
	}
	//تابع زیر رو فراخوانی میکنیم هر دفعه که بلر شد
	submitBtn()
}
// #endregion
// #region Functions > submitBtn()
function submitBtn() {
	//این تابع اجرا شده تا اگر طول ورودی فیلد شماره موبایل 11 رقم بود و داخل اسم چیزی نوشته شده بود و خالی نبود بره داخل بلاک شرط
	if (phoneNumberInput.value.length == 11 && userNameInput.value != '') {
		// دکمه افزودن مخاطب فعال میشود
		submitForm.disabled = false
	} else {
		//در غیر انصورت غیر فعال
		submitForm.disabled = true
	}
}
// #endregion
// #region Functions > closeForm()
// کلیک شود این تابع اجرا میشود X اگر دکمه 
function closeForm() {
	//فرم رو نمایش نمی دیم
	form.style.display = 'none'
	//رو نمایش نمیدیم X دکمه 
	closeFormButton.style.display = 'none'
	// دکمه نمایش فرم رو نمایش میدیم
	showFormButton.style.display = 'block'
	//اگر دکمه بستن زده شد محتوای فرم ریست می شود
	form.reset()
	//چون اگر دکمه بستن زده شود و سپس دکمه نمایش زده شود دکمه فعال افزودن مخاطب فعال است
	//برقرار نیست غیرفعال میشود  submitBtn درست است که با کلیک روی آن چون شرط داخل تابع 
	//اما ما میخواهیم به محض زدن دکمه بستن غیرفعال شود
	submitForm.disabled = true
}
// #endregion
// #region Functions > showForm
//اگر دکمه نمایش فرم کلیک شد این تابع اجرا میشه
function showForm() {
	//فرم رو نمایش میدیم
	form.style.display = 'block'
	//دکمه نمایش فرم نمایش داده نمی شود
	showFormButton.style.display = 'none'
	//رو نمایش میدیم X دکمه 
	closeFormButton.style.display = 'block'
}
// #endregion
// #region Functions > showMessage()
//مورد نظر برای نمایش پیام و دومی پیام میباشد div برای نمایش پیام خطا از این تابع استفاده میشود که پارامتر های ورودی آیدی 
function showMessage(idDiv, message) {
	//div دیو با آی دی مورد نظر رو انتساب میدیم به متغیر 
	let div = document.querySelector(idDiv)
	div.classList.add("messageBox")
	//پیام رو داخل دیو میریزیم
	div.innerHTML = message
	//بگ گراند برای دیو تعیین میکنیم
	div.style.background = '#ff4f4f'
	// رنکگ متن رو سفید کردم
	div.style.color = '#fff'
	// با استفاده از این متد میتونیم یک عمل خاص رو در پس از گذشت 3 ثانیه که خودمون تعیین کردیم انجام بدیم
	setTimeout(() => {
		//محتوای دیو رو خالی میکنیم
		div.innerHTML = ""
		//برای نمایش ندادن پدینگ با بک گراند مشخص شده
		div.classList.remove("messageBox")
	}, 3000);
}
// #endregion
// #region Functions > checkfields()
// این تابع هنگامی که روی دکمه افزودن مخاطب کلیک شد اجرا میشه
function checkfields(e) {
	//تغییر نمیکنه url کار پیشفرض که ارسال اطلاعات به سرور هست رو جلوگیری میکنیم و 
	e.preventDefault()
	//فرم رو با این متد ریست میکنیم
	// form.reset()
	// دکمه افزودن مخاطب بعد ریست فرم مجدد غیر فعال میشه
	submitForm.disabled = true
	// #region test
	//این کانتر برای این است که اگر کاربر قبلا در سیستم ثبت نام کرده بود کانتر پلاس پلاس بشه
	var counter = 0
	//حلقه از 0 تا تعداد کاربران شمارش میکنه تا بررسی کنه وجود داره در سیستم یانه
	for (let i = 0; i < usersList.length; i++) {
		//شرط چک میکنه اگر ورودی فیلد موبایل با شماره تلفن موجود در آبجکت های آرایه
		//برابر بود و ورودی فیلد نام کاربری با نام کاربری موجود در آبجکت های آرایه برابر بود وارد بلاک شرط میشه
		if (phoneNumberInput.value == usersList[i].mobileNumber && userNameInput.value == usersList[i].userName) {
			//پیغام 
			alert('قبلا در سیستم ثبت نام شده')
			//به کانتر ما یک عدد اضافه میشه
			counter++
		} else {
			// اگر نام کاربری و شماره تلفن مطابقت نداشت 
			//یا شماره تلفن مطابقت داشت و کاربر با نام کاربری جدید خواست ثبت نام کنه این امکان وجود دارد
			var newUser = {
				mobileNumber: phoneNumberInput.value,
				userName: userNameInput.value
			}
		}
	}
	//درصورتی که کاربری با نام کابری و شماره تلفن وارد شده در سیستم مطابقت نداشت بنابراین کانتر ما صفر خواهد بود
	if (counter == 0) {
		//پیام کاربر جدید
		alert('کاربر جدید به لیست اضافه شد')
		//یوزر جدید به انتهای آرایه اضاضه میود
		usersList.push(newUser)
		//نمایش لیست جدید کاربران
		console.log(usersList)
	}
	// #endregion 
}
// #endregion
// #endregion
