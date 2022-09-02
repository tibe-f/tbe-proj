const colors=document.querySelectorAll(".color-box h2");
const generator=document.getElementById("generator");
generator.onclick =()=>{
    colors.forEach((colorss)=> {
       let hexcode="#"+Math.random().toString(16).substring(2,8);
        colorss.style.backgroundColor=hexcode;
        colorss.innerHTML=hexcode;


    });
}




