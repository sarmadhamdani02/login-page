
var switchButton = document.getElementsByClassName("switch-btn")[0];
var innerText = document.querySelector(".inner-text");
var arrow = document.getElementsByClassName("fa-arrow-right")[0];
var cursor = document.querySelector(".cursor");
var cursorBlur = document.querySelector(".cursor-blur");

// adding cursor
document.addEventListener("mousemove", (dets) => {
    cursor.style.left = (dets.x) + "px";
    cursor.style.top = (dets.y) + "px";
    cursorBlur.style.left = (dets.x - 120) + "px";
    cursorBlur.style.top = (dets.y - 120) + "px";
})

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
             duration:0.4,
            ease:"back"
            
        })  

        gsap.to(".blur-cont",{
            x:"0",
            borderTopRightRadius: "20px",
            borderBottomRightRadius: "20px",
            borderTopLeftRadius: "0px",
            borderBottomLeftRadius: "0px",
            duration:0.5,
            ease:"back"
        })  
    }
    else{
        innerText.innerHTML = "Log In Instead ";
        
        gsap.to(".fa-arrow-right",{
            rotate:-180,
            duration:0.4,
            ease:"back"

        })   
        
        gsap.to(".blur-cont",{
            x:"-410",
            borderTopRightRadius: "0px",
            borderBottomRightRadius: "0px",
            borderTopLeftRadius: "20px",
            borderBottomLeftRadius: "20px",
            duration:0.5,
            ease:"back"
            
        })  
    }
}; 

// night mode

var sunIcon = document.querySelector(".fa-sun");
var moonIcon = document.querySelector(".fa-moon");
var main = document.querySelector(".main");

moonIcon.onclick = function () {

    gsap.to(".cursor",{
        backgroundColor:"yellowgreen",
        duration:0.2,
    })

    gsap.to(".cursor-blur",{
        backgroundColor:"rgba(153, 205, 50, 0.3)",
        duration:0.2,
    })

    sunIcon.style.display = "inline-block";
    moonIcon.style.display = "none";
    gsap.to(".main-dark",{
        width:"100vw",
    });

    gsap.to(".container",{
        backgroundColor:"#111",
        color:"white",
        border:"1px solid white"

    });

    gsap.to(".container .form>input",{
        borderColor:"white",
        color:"white"

    });

    gsap.to(".nav-bar h3, .nav-bar i",{
        color:"white"
    })

    gsap.to(".nav-dark",{
        width:"100vw",
        delay:0.2,
        ease:"power2"

    })

    gsap.to(".fa-sun",{
        rotate:360,
        // stagger:0.2
    })

    gsap.to(".fa-moon",{
        rotate:0,
        // stagger:0.2
    })

}

sunIcon.onclick = function () {

    
    gsap.to(".cursor",{
        backgroundColor:"crimson",
        duration:0.2,
    })

    gsap.to(".cursor-blur",{
        backgroundColor:"rgba(220, 20, 60, 0.494)",
        duration:0.2,
    })

    sunIcon.style.display = "none";
    moonIcon.style.display = "inline-block";
    gsap.to(".main-dark",{
        width:"0",

    });

    gsap.to(".container",{
        backgroundColor:"white",
        color:"#333",
        border:"none",
    });

    gsap.to(".container .form input",{
        borderColor:"#333",
        color:"#333",

    });

    gsap.to(".nav-bar h3, .nav-bar i",{
        color:"#333"
    });

    gsap.to(".nav-dark",{
        width:0,
        delay:0.2,
    })

    gsap.to(".fa-moon",{
        rotate:360,
        // stagger:0.2
    });

    gsap.to(".fa-sun",{
        rotate:0,
        // stagger:0.2
    })

}