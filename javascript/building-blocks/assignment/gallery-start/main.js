const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Looping through images */

for(let i = 1; i <= 5; i++){
    const newImage = document.createElement('img');
    newImage.setAttribute('src', `images/pic${i}.jpg`);
    thumbBar.appendChild(newImage);
    
}

thumbBar.addEventListener("click",function(e){
    displayedImage.setAttribute('src',e.target.src);
});

btn.addEventListener("click",function(e){
    button = e.target;
    if(button.className === "dark"){
        button.setAttribute("class","light");
        button.textContent = "Lighten";
        overlay.style.backgroundColor = "rgba(0,0,0,0.5)";
    }else{
        button.setAttribute("class","dark");
        button.textContent = "Darken";
        overlay.style.backgroundColor = "rgba(0,0,0,0)";
    }
})


/* Wiring up the Darken/Lighten button */
