//toggle navi menu icons (header)

const menuToggleButton=document.querySelector('.menu-toggle-button');
const menuElement=document.querySelector('.menu');


const toggleMenu=()=>{
    menuToggleButton.classList.toggle('active')
    menuElement.classList.toggle('active');
};


menuToggleButton.addEventListener('click',toggleMenu);
 

// closed icon changing

const removeActiveLinkClass = e =>{

    if(e.target.classList.contains('list-link')){
        menuElement.classList.remove('active');
        menuToggleButton.classList.remove('active');
       
    }
}


document.addEventListener('click',removeActiveLinkClass);


//local storage

const themeToggleButton=document.querySelector('.theme-toggle-button');
const bodyElement=document.body;
const currentTheme=localStorage.getItem('darkTheme');
if(currentTheme){
    bodyElement.classList.add('dark-theme')
};

const toggleTheme =()=>{
        bodyElement.classList.toggle('dark-theme');
    if(bodyElement.classList.contains('dark-theme')){
    localStorage.setItem('darkTheme','active');


}else{
    localStorage.removeItem('darkTheme');
}
};

themeToggleButton.addEventListener('click',toggleTheme)