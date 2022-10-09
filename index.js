const faqs = document.querySelectorAll('.faq-container');
const answers = document.querySelectorAll('.answer');
faqs.forEach(faq =>{
    faq.addEventListener('click', ()=>{
        faq.classList.toggle('active');
    })
})