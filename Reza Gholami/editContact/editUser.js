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
let form = document.querySelector( "#form" );
// phoneNumberInput توسط آی دی دسترسی پیدا کردیم و انتساب دادیم به متغیر input type tel  در کد زیر به تگ 
phoneNumberInput = document.querySelector( '#phoneNumber' )
	, // saveBtn دسترسی پیدا کردیم و انتساب دادیم به متغیر button id="saveBtn" در کد زیر به تگ 
	saveBtn = document.querySelector( '#saveBtn' )
	, // userNameInput توسط آی دی دسترسی پیدا کردیم و انتساب دادیم به متغیر  input type text  در کد زیر به تگ 
	userNameInput = document.querySelector( '#userName' )
	, // addContactPage توسط آی دی دسترسی پیدا کردیم و انتساب دادیم به متغیر button در کد زیر به تگ 
	addContactPage = document.querySelector( '#addContactPage' )
	, // closePopupForm توسط آی دی دسترسی پیدا کردیم و انتساب دادیم به متغیر  button close در کد زیر به تگ 
	closePopupForm = document.querySelector( '#closePopupForm' )
	, //این آرایه را تعریف کردم تا اگر نام کاربر در سیستم وجود داشت پیغام متناظر
	// در غیر اینصورت نام جدید به این لیست اضافه شود
	usersName = [ "رضا", "محمد", "امیر", "آرمین", "معین" ];
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
	//دکمه ذخیره در ابتدا غیر فعال میباشد
	document.addEventListener( "DOMContentLoaded", () => {
		saveBtn.disabled = true
	} )
	// PastePhoneNumber اگر کاربر در فیلد شماره تلفن ایونت پیست رو انجام داد تابع 
	phoneNumberInput.addEventListener( 'paste', PastePhoneNumber )
	// validatePhoneNumber اگر کاربر در فیلد شماره تلفن ، کلیدی رو فشار داد تابع 
	phoneNumberInput.addEventListener( "keydown", validatePhoneNumber )
	//اجرا میشود validateFields وقتی فوکوس از روی اینپوت برداشته شد یا بهتر وقتی که کاربر محتوا نوشت و بیرون فیلد کلیک کرد تابع
	// یعنی در صورتی که ما کلیک کردیم روی اینپوت و ازش خارج شدیم و بیرون کلیک کردیم
	//برای دو اینپوت تل و تکست یکسانه blur توابع ایونت 
	phoneNumberInput.addEventListener( 'blur', validateField )
	userNameInput.addEventListener( 'blur', validateField )
	//اجرا میشود addContactPageBtn اگر کاربر بر روی دکمه نمایش کلیک کرد تابع 
	addContactPage.addEventListener( 'click', addContactPageBtn )
	//اجرا میشود closrForm اگر کاربر بر روی دکمه بستن کلیک کرد تابع 
	closePopupForm.addEventListener( 'click', closePopupBtn )
	//اجرا میشود checkUser روی دکمه ذخیره ایونت کلیک رو گذاشتم و هنگامی که کلیک شد تابع 
	saveBtn.addEventListener( 'click', checkUserName )
}
// #endregion
// #region Functions
// #region Functions > PastePhoneNumber()
// در ورودی تابع به عنوان یک شی حاوی اطلاعات مربوط به رویداد رخ داده شده است event || e با پارامتر 
//این تابع استفاده شده تا جلوی پیست غیر عدد به اینپوت شماره تلفن رو بگیره
function PastePhoneNumber( e ) {
	//به داده های موجود در کلیپ بورد دسترسی پیدا میکنیم  e.clipboard  ما از طریق  
	//clipboardData میتونیم داده های موجود در کلیپ بورد را با فرمت تکست بخوانیم و انتساب بدیم به متغیر .getData("text") و از طریق 
	let clipboardData = e.clipboardData.getData( "text" )
	//شرط چک میکنه اگر داده کلیپبورد عدد بود و طولش کمتر مساوی 11 بود پیست بشه
	if ( Number( clipboardData ) && clipboardData.length <= 11 ) {}
	//در غیر اینصورت اگر عدد بود و طولش بیشتر از 11 رقم بود  بره داخل بلاک شرط و
	else if ( Number( clipboardData ) && clipboardData.length > 11 ) {
		//جلوی پیست رو بگیره
		e.preventDefault()
		//نمایش پیام
		showMessage( '#messagePhoneNumber', ' حداکثر 11 رقم میتوان پیست کرد' )
	} else {
		//اگر عدد نبود
		e.preventDefault()
		//نمایش پیام
		showMessage( '#messagePhoneNumber', 'فقط عدد پیست میشود ' )
	}
}
// #endregion
// #region Functions > validatePhoneNumber()
// اگر هر کدام از کلید های کیبورد فشار داده شد این تابع اجرا میشود
//برای این است که ما بتونیم اطلاعات مربوط به رویداد رخ داده رو بگیریم e
function validatePhoneNumber( e ) {
	//keyCode هر کلید در صفحه کلید یک کد داره که وقتی فشار داده شد ما  اون کد رو انتساب می دیم به متغیر 
	let keyCode = e.keyCode, // or event.key for nameKey
		//codeToString کی کد رو از طریق متد زیر به کاراکتر مربوطش تبدیل میکنه و انتساب میدیم به متغیر 
		codeToString = String.fromCharCode( keyCode )
		//if برای فعال کردن کلید ها و جلوگیری از تکرار کد در شرط های 
		//keycode 8 backspace
		//keycode 37 arrow left
		//keycode 39 arrow right
		, forEnableKey = ( keyCode != 8 && keyCode != 37 && keyCode != 39 )
	// راست و چپ نبود جلوی کار پیشفرض که وارد کردن مقدار داخل فیلد هست رو میگیریم arrow شرط چک میکنه اگر کلیدی که فشار داده شده بود عدد نبود و کلید های حذف و 
	if ( isNaN( codeToString ) && forEnableKey ) {
		e.preventDefault();
		//رو صدا میزنیم و پارامتر های نام آیدی و پیامی که قراره نمایش بده رو ارسال میکنیم showMessage تابع  
		showMessage( '#messagePhoneNumber', 'فقط میتوانید ارقام 0 تا 9 وارد کنید' )
	}
	//شرط چک میکنه اگر  طول ورودی بزگتر از 11 شد و کلید هایی که در بالا گفته شد نبود جلوی کار پیشفرض رو بگیر و مقدار هارو وارد فیلد نکن
	//e.target تگی که رویداد روش اتفاق افتاده
	if ( e.target.value.length > 10 && forEnableKey ) {
		e.preventDefault();
		//رو صدا میزنیم و پارامتر های نام آیدی و پیامی که قراره نمایش بده رو ارسال میکنیم showMessage تابع 
		showMessage( '#messagePhoneNumber', 'شماره موبایل حداکثر 11 رقم میباشد' )
	}
	//اگر بخواهیم شرطی براریم که شماره تلفن حتما اولش با 09 شروع شود این کد رو استفاده میکنیم
	//اگر ولیو فیل موبایل خالی بود و کلید 0 فشارداده نشده بود نمیزاره مقداری غیر صفر وارد فیلد بشه
	if ( e.target.value == "" && codeToString != "0" && forEnableKey ) {
		e.preventDefault();
		showMessage( '#messagePhoneNumber', 'شماره موبایل با 09 شروع میشود' )
	} //اگر ولیو داخل فیلد 0 بود رقم بعدی باید 9 باشد
	if ( e.target.value == "0" && codeToString != "9" && forEnableKey ) {
		e.preventDefault()
		showMessage( '#messagePhoneNumber', 'شماره موبایل با 09 شروع میشود' )
	}
}
// #endregion
// #region Functions > validateField()
//  اتفاق افتاد این تابع اجرا میشود blur وقتی روی هر کدام از اینپوت های تل و تکست ایونت 
function validateField() {
	//شده blur اشاره میکنه به تگی که this
	//برای جلوگیری از تکرار phoneNumber رو بریز داخل متغیر true ||false بود phoneNumber اگر آی دی 
	let phoneNumber = (this.id == 'phoneNumber') //boolean 
	//شده blur اشاره میکنه به تگی که this
	//بود و داخل فیلد هیچی نبود وارد بلاک شرط بشه phoneNumber شرط چک میکنه اگر آی دی اینپوتی که بلر شده 
	if (phoneNumber && this.value == "" ) {
		//رو صدا میزنیم و پارامتر های نام آیدی و پیامی که قراره نمایش بده رو ارسال میکنیم showMessage تابع 
		showMessage( '#messagePhoneNumber', 'شماره موبایل نمیتواند خالی باشد' )
	}
	//  بین یک تا 10 بود وارد بلاک شرط میشهvalue بود و طول phoneNumber شرط چک میکنه اگر اینپوت ما آیدیش 
	if ( phoneNumber && this.value.length >= 1 && this.value.length <= 10 ) {
		//رو صدا میزنیم و پارامتر های نام آیدی و پیامی که قراره نمایش بده رو ارسال میکنیم showMessage تابع 
		showMessage( '#messagePhoneNumber', 'شماره موبایل 11 رقمی وارد کنید' )
	}
	//هست و دو رقم اول ولیوی داخل فیلد 09 نبود میره داخل بلاک phoneNumber شرط چک میکنه اگر اینپوت ما که بلر شده آی دیش 
	if ( phoneNumber && this.value !="" && this.value[ 0 ] != "0" && this.value[ 1 ] != "9" ) {
		//رو صدا میزنیم و پارامتر های نام آیدی و پیامی که قراره نمایش بده رو ارسال میکنیم showMessage تابع 
		showMessage( '#messagePhoneNumber', 'شماره موبایل با 09 شروع میشود' )
	}
	//که همان اینپوت تایپ تکست هست بود  و داخل فیلد هیچی وارد نشده بود وارد بلاک شرط میشه userName شده blur اگر آی دی فیلد 
	if ( this.id == 'userName' && this.value == "" ) {
		//رو صدا میزنیم و پارامتر های نام آیدی و پیامی که قراره نمایش بده رو ارسال میکنیم showMessage تابع 
		showMessage( '#messageUserName', 'نام و نام خانوادگی نمیتواند خالی باشد' )
	}
	//تابع زیر رو فراخوانی میکنیم هر دفعه که بلر شد
	saveUserBtn()
}
// #endregion
// #region Functions > saveUserBtn()
function saveUserBtn() {
	//این تابع اجرا شده تا اگر طول ورودی فیلد شماره موبایل 11 رقم بود و داخل اسم چیزی نوشته شده بود و خالی نبود بره داخل بلاک شرط
	if ( phoneNumberInput.value.length == 11 && userNameInput.value != '' && phoneNumberInput.value[ 0 ] == "0" && phoneNumberInput.value[ 1 ] == "9" ) {
		// دکمه ذخیره فعال میشود
		saveBtn.disabled = false
	} else {
		//در غیر انصورت غیر فعال
		saveBtn.disabled = true
	}
}
// #endregion
// #region Functions > closePopupBtn()
// کلیک شود این تابع اجرا میشود X اگر دکمه 
function closePopupBtn() {
	window.close()
}
// #endregion
// #region Functions > addContactPageBtn()
//اگر دکمه نمایش فرم کلیک شد این تابع اجرا میشه
function addContactPageBtn() {
	//با زدن روی دکمه افزودن مخاطب به صفحه افزودن مخاطب هدایت میشویم
	location.href = "../addContact/addContact.html"
}
// #endregion
// #region Functions > showMessage()
//مورد نظر برای نمایش پیام و دومی پیام میباشد div برای نمایش پیام خطا از این تابع استفاده میشود که پارامتر های ورودی آیدی 
function showMessage( idDiv, message ) {
	//div دیو با آی دی مورد نظر رو انتساب میدیم به متغیر 
	let div = document.querySelector( idDiv )
	div.classList.add( "messageBox" )
	//پیام رو داخل دیو میریزیم
	div.innerHTML = message
	//بگ گراند برای دیو تعیین میکنیم
	div.style.background = '#ff4f4f'
	// رنکگ متن رو سفید کردم
	div.style.color = '#fff'
	// با استفاده از این متد میتونیم یک عمل خاص رو در پس از گذشت 3 ثانیه که خودمون تعیین کردیم انجام بدیم
	setTimeout( () => {
		//محتوای دیو رو خالی میکنیم
		div.innerHTML = ""
		//برای نمایش ندادن پدینگ با بک گراند مشخص شده
		div.classList.remove( "messageBox" )
	}, 5000 );
}
// #endregion
// #region Functions > checkUserName()
// این تابع هنگامی که روی دکمه ذخیره کلیک شد اجرا میشه
function checkUserName( e ) {
	//دکمه ذخیره اگر کلیک شود اتفاقی نمی افتد و جلوی کار پیشفرض رو گرفتم 
	e.preventDefault()
	//تعریف کردم تا در داخل بلاک  به مقدار آن دسترسی داشته باشم و در خط های بعدی بتونم مقدارشو عوض کنم var برای فهمیدن وجود داشتن نام کاربری کانتر رو 0 در نظر میگیریم و با 
	var counter = 0
	//forof توسط حلقه  usersName پیمایش میکنیم روی آرایه  
	for ( const userName of usersName ) {
		//شرط چک میکنه ولیو فیلد نام کاربری با مقدار یکی از خانه های آرایه نام کاربران مطابقت دارد یانه 
		if ( userNameInput.value == userName ) {
			//اگر داشت پیغام نمایش داده می شود
			alert( "این نام کاربری در سیتم وجود دارد" )
			//به کانتر ما یکی اضافه می شود
			counter++ // counter++  || counter = counter + 1
		}
	}
	//از حلقه بیرون آمدم تا چک کنم اگر کانتر صفر بود یعنی نام کاربری در آرایه نبود بره داخل بلاک شرط
	if ( counter == 0 ) {
		//پیغام نام کاربری جدید نمایش داده شود
		alert( "نام کاربری جدید به لیست اضافه شد" )
		//به انتهای آرایه ما نام جدید اضافه گردد
		usersName.push( userNameInput.value )
		//آرایه نام کاربران در کنسول نمایش داده می شود
		console.log( usersName )
	}
	form.reset()
}
// #endregion
// #endregion