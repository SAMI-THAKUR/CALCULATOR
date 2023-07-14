var themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
var themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');

// Change the icons inside the button based on previous settings
if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    themeToggleLightIcon.classList.remove('hidden');
} else {
    themeToggleDarkIcon.classList.remove('hidden');
}

var themeToggleBtn = document.getElementById('theme-toggle');

themeToggleBtn.addEventListener('click', function() {

    // toggle icons inside button
    themeToggleDarkIcon.classList.toggle('hidden');
    themeToggleLightIcon.classList.toggle('hidden');

    // if set via local storage previously
    if (localStorage.getItem('color-theme')) {
        if (localStorage.getItem('color-theme') === 'light') {
            document.documentElement.classList.add('dark');
            localStorage.setItem('color-theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('color-theme', 'light');
        }

    // if NOT set via local storage previously
    } else {
        if (document.documentElement.classList.contains('dark')) {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('color-theme', 'light');
        } else {
            document.documentElement.classList.add('dark');
            localStorage.setItem('color-theme', 'dark');
        }
    }
    
});




let string = ""
let buttons = document.getElementById("buttons")
let button = buttons.querySelectorAll("button");
Array.from(button).forEach((element) => {
    element.addEventListener("click", (e) => {
        console.log(e.target.querySelector("span").innerHTML);
        if(e.target.querySelector("span").innerHTML == "="){
            string = eval(string).toFixed(2)
            document.getElementById("result").innerHTML = string
        }
        else if(e.target.querySelector("span").innerHTML == "c"){
         string = ""
        document.getElementById("result").innerHTML = string
        document.getElementById("operation").innerHTML = string
        }else if(e.target.querySelector("span").innerHTML == "d"){
            string = string.slice(0, string.length - 1)
            document.getElementById("operation").innerHTML = string
        }
        else{
            string += e.target.querySelector("span").innerHTML
            document.getElementById("operation").innerHTML = string
        }
    })
});






