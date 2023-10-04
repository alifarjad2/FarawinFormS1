// متغییر های خودم رو سلکت کردم
const form = document.querySelector('#form')
const contactName = document.querySelector('#inputName')
const numberPhone = document.querySelector('#inputNumberPhone')
const register = document.querySelector('#btn')


// با این تابع جلوی ریفرش شدن صفحه رو گرفتم 
form.addEventListener('submit', (event) => {
    event.preventDefault()
})

const error = ( input ,massage) => {
    let p = document.querySelector('#p')
    p.innerText = massage
}

register.addEventListener("click", validation)

function validation () {
    const contactNameValue = contactName.value.trim()
    const numberPhoneValue = numberPhone.value.trim()

     if(contactNameValue === '') {
        error(contactName,' نام کاربری را وارد نمیایید' )
    }else
        if(contactNameValue.length < 6){
        error(contactName, 'تعداد حروف نام کاربری حداقل باید ۶ حرف باشد')
        return false
    }
    
    if(numberPhoneValue === ''){
        error(numberPhone, 'شماره همراه خود را وارد نمایید')
    }else
    if(numberPhoneValue.length < 11){
        error(numberPhone, 'تعداد اعداد شماره تلفن باید 11 عدد باشد')
    }else
    if(numberPhoneValue.length >= 12){
        error(numberPhone, 'تعداد اعداد شماره تلفن باید 11 عدد باشد ')
    }else
    if(numberPhoneValue[1] !== 0 && numberPhoneValue[2] !== 9){
        error(numberPhone, 'فرم وارد کردن شماره تلفن اشتباه است')
    }


}
    

