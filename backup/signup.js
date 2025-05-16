const tabs = document.querySelectorAll('.tab_btn');
const all_content = document.querySelectorAll('.content');

const slide_content = document.querySelectorAll('.slide-show');

tabs.forEach((tab, index) => {
    tab.addEventListener('click', ()=>{
        tabs.forEach(tab =>{
            tab.classList.remove('active');
        });
        tab.classList.add('active');

        all_content.forEach(content =>{
            content.classList.remove('active');
        });
        all_content[index].classList.add('active');

        slide_content.forEach(slide =>{
            slide.classList.remove('active');
        });
        slide_content[index].classList.add('active');
    });
});

const progressBar = document.querySelectorAll('.progressBar li') , 
formGroup = document.querySelectorAll('.form-group'),
nextForm = document.querySelectorAll('.next'),
prevForm = document.querySelectorAll('.Prev');



nextForm.forEach((button, index) => {
    button.addEventListener("click", ()=>{
        formGroup.forEach((form) =>{
            form.classList.remove('form-active');
        });

        progressBar[1+ index].classList.add('active');
        formGroup[1+ index].classList.add('form-active');

        progressBar[index].classList.add('next');
    });
});

prevForm.forEach((button, index) => {
    button.addEventListener("click", ()=>{
        formGroup.forEach((form) =>{
            form.classList.remove('form-active');
        });
        progressBar.forEach((bar) =>{
            bar.classList.remove('active');
            bar.classList.remove('next');
        });

        for (let i = 0; i <= index; i++) {
            progressBar[i].classList.add('active');

        }
        for (let i = 0; i <= index-1; i++) {
            progressBar[i].classList.add('next');
        }

        formGroup[index].classList.add('form-active');
    });
});