
var switchButton = document.getElementsByClassName("switch-btn")[0];
var innerText = document.querySelector(".inner-text");
var arrow = document.getElementsByClassName("fa-arrow-right")[0];

// navbar animation
var tl = gsap.timeline();

tl.from(".nav-bar",{
    x:"-100%",
    delay:0.5,
    ease:"back"
})

tl.from(".nav-bar>h1 , .nav-last-div",{
    y:"-120%",
    duration:0.5,
    ease:"bounce"
})


switchButton.onclick = function () { 
    if (innerText.innerHTML != "Sign Up Instead ") {
        innerText.innerHTML = "Sign Up Instead ";
    
        gsap.to(".fa-arrow-right",{
             rotate:0,
             duration:0.4
        })  

        gsap.to(".blur-cont",{
            x:"0",
            borderTopRightRadius: "20px",
            borderBottomRightRadius: "20px",
            borderTopLeftRadius: "0px",
            borderBottomLeftRadius: "0px",
            duration:0.5
        })  
    }
    else{
        innerText.innerHTML = "Log In Instead ";
        
        gsap.to(".fa-arrow-right",{
            rotate:-180,
            duration:0.4
        })   
        
        gsap.to(".blur-cont",{
            x:"-410",
            borderTopRightRadius: "0px",
            borderBottomRightRadius: "0px",
            borderTopLeftRadius: "20px",
            borderBottomLeftRadius: "20px",
            duration:0.4
        })  
    }
}; 