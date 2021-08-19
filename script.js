AOS.init();

const nav = document.querySelector('#sideNav')
const navToggle = document.querySelector('#navToggle')

navToggle.addEventListener('click', () => {
    if(nav.classList.contains('hidden')){
        nav.classList.remove('hidden')
    }else{
        nav.classList.add('hidden')
    }
})

// var datepicker = new ej.calendars.DatePicker({
//     placeholder: 'Choose a date',
//     focus: function(){
//         datepicker.show();
//     }
// });
// datepicker.appendTo('#element');

// const datePickers = document.querySelectorAll('.ckeck-rates i')

// datePickers.forEach(ele => {
//     const dp = new ej.calcalendars.DatePicker
//     ele.addEventListener('click', () => {
//         dp.show()
//     })
// })