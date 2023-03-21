// gsap.registerPlugin(scrollTrigger);

const cursor = document.querySelector('.cursor');

const tlmoto = gsap.timeline();
const heroTL = gsap.timeline();

const elements = document.querySelectorAll('.bubble1, .bubble2, .bubble3');
const bubbleOneTwo = document.querySelectorAll('.bubble1, .bubble2');
const bubbles = document.querySelectorAll('.bubble1, .bubble2, .bubble3, .bubble4, .bubble5, .bubble6, .bubble7, .bubble8');



const desktop1Query = window.matchMedia("(max-width: 2560px) and (max-height: 1440px)");
const desktop0Query = window.matchMedia("(max-width: 1920px) and (max-height: 1080px)");
const desktop2Query = window.matchMedia("(min-width: 1600px) and (max-width: 1919px) and (min-height: 900px) and (max-height: 1079px)");
const desktop3Query = window.matchMedia("(min-width: 1440px) and (max-width: 1599px) and (min-height: 900px) and (max-height: 900px)");
const desktop4Query = window.matchMedia("(max-width: 1366px) and (max-width: 1439px) and (max-height: 768px) and (max-height: 899px)");
const desktop5Query = window.matchMedia("(max-width: 1366px) and (max-width: 1365px) and (max-height: 720px) and (max-height: 767px)");
const desktop6Query = window.matchMedia("(max-width: 1280px) and (max-height: 800px)");
const mobile1Query = window.matchMedia("(max-width: 412px) and (max-height: 915px)");
const mobile2Query = window.matchMedia("(max-width: 390px) and (max-height: 844px)");
const mobile3Query = window.matchMedia("(max-width: 360px) and (max-height: 740px)");
const mobile4Query = window.matchMedia("(max-width: 414px) and (max-height: 736px)");
const mobile5Query = window.matchMedia("(max-width: 375px) and (max-height: 667px)");


let values = {
    orange_circle_from_top: "62%",
    orange_circle_from_left: "60%",
    orange_circle_to_top: "-50%",
    orange_circle_to_left: "-10%",
    tab_img_x: "70%",
    tab_img_y: "15%",
    tab_img_scale: 0.8,
    mbl_img_X: "-300%",
    mbl_img_Y: "12%",
    device_container_scale: 0.6,
    bubble_scale: 1.2,
};

if (desktop0Query.matches) {
    values.orange_circle_from_top = "62%";
    values.orange_circle_from_left = "60%";
    values.orange_circle_to_top = "-50%";
    values.orange_circle_to_left = "30%";
    values.tab_img_x = "70%";
    values.tab_img_y = "15%";
    values.mbl_img_X = "-300%";
    values.mbl_img_Y = "12%";

};
if (desktop1Query.matches) {
    values.orange_circle_from_top = "62%"
    values.orange_circle_from_left = "60%"
    values.orange_circle_to_top = "-50%"
    values.orange_circle_to_left = "-30%"

}

if (desktop2Query.matches) {
    values.orange_circle_from_top = "62%"
    values.orange_circle_from_left = "60%"
    values.orange_circle_to_top = "-70%"
    values.orange_circle_to_left = "-40%"
    values.tab_img_x = "70%";
    values.tab_img_y = "14%";
    values.mbl_img_X = "-300%";
    values.mbl_img_Y = "10%";

}

if (desktop3Query.matches) {
    values.orange_circle_from_top = "62%"
    values.orange_circle_from_left = "60%"
    values.orange_circle_to_top = "-70%"
    values.orange_circle_to_left = "-40%"
    values.tab_img_x = "68%";
    values.tab_img_y = "16%";
    values.mbl_img_X = "-300%";
    values.mbl_img_Y = "10%";

}

if (desktop4Query.matches) {
    values.orange_circle_from_top = "68%"
    values.orange_circle_from_left = "57%"
    values.orange_circle_to_top = "-100%"
    values.orange_circle_to_left = "-50%"
    values.tab_img_x = "10%";
    values.tab_img_y = "10%";
    values.mbl_img_X = "-288%";
    values.mbl_img_Y = "12%";

}
if (desktop5Query.matches) {
    values.orange_circle_from_top = "68%"
    values.orange_circle_from_left = "57%"
    values.orange_circle_to_top = "-100%"
    values.orange_circle_to_left = "-50%"
    values.tab_img_x = "60%";
    values.tab_img_y = "10%";
    values.mbl_img_X = "-288%";
    values.mbl_img_Y = "12%";

}

if (desktop6Query.matches) {
    values.orange_circle_from_top = "68%"
    values.orange_circle_from_left = "57%"
    values.orange_circle_to_top = "-100%"
    values.orange_circle_to_left = "-50%"
    values.tab_img_x = "70%";
    values.tab_img_y = "14%";
    values.mbl_img_X = "-288%";
    values.mbl_img_Y = "12%";
}

if (mobile1Query.matches) {
    values.orange_circle_from_top = "58%"
    values.orange_circle_from_left = "70%"
    values.orange_circle_to_top = "-120%"
    values.orange_circle_to_left = "-200%"
    values.tab_img_x = "70%";
    values.tab_img_y = "-27%";
    values.tab_img_scale = 0.7,
        values.mbl_img_X = "-250%";
    values.mbl_img_Y = "22%";
    values.device_container_scale = 0.5;
    values.bubble_scale = 1;

}

if (mobile2Query.matches) {
    values.orange_circle_from_top = "58%"
    values.orange_circle_from_left = "70%"
    values.orange_circle_to_top = "-120%"
    values.orange_circle_to_left = "-200%"
    values.tab_img_x = "70%";
    values.tab_img_y = "20%";
    values.tab_img_scale = 0.7,
        values.mbl_img_X = "-250%";
    values.mbl_img_Y = "22%";
    values.device_container_scale = 0.5;
    values.bubble_scale = 1;

}
if (mobile3Query.matches) {
    values.orange_circle_from_top = "58%"
    values.orange_circle_from_left = "70%"
    values.orange_circle_to_top = "-120%"
    values.orange_circle_to_left = "-200%"
    values.tab_img_x = "70%";
    values.tab_img_y = "20%";
    values.tab_img_scale = 0.7,
        values.mbl_img_X = "-250%";
    values.mbl_img_Y = "22%";
    values.device_container_scale = 0.5;
    values.bubble_scale = 1;
}

if (mobile4Query.matches) {
    values.orange_circle_from_top = "58%"
    values.orange_circle_from_left = "70%"
    values.orange_circle_to_top = "-120%"
    values.orange_circle_to_left = "-200%"
    values.tab_img_x = "70%";
    values.tab_img_y = "20%";
    values.tab_img_scale = 0.7,
        values.mbl_img_X = "-250%";
    values.mbl_img_Y = "22%";
    values.device_container_scale = 0.5;
    values.bubble_scale = 1;
}

if (mobile5Query.matches) {
    values.orange_circle_from_top = "58%"
    values.orange_circle_from_left = "70%"
    values.orange_circle_to_top = "-120%"
    values.orange_circle_to_left = "-200%"
    values.tab_img_x = "15%";
    values.tab_img_y = "-30%";
    values.tab_img_scale = 0.7,
        values.mbl_img_X = "-250%";
    values.mbl_img_Y = "22%";
    values.device_container_scale = 0.5;
    values.bubble_scale = 1;
}

tlmoto.to('.un-hide', {
    y: '0%',
    duration: '1',
    stagger: '0.25',
    overflow: 'hidden',

})

tlmoto.fromTo('.orange-circle', 1, {
    height: '0%',
    backgroundColor: '#218c74',
    width: '0%',
    position: 'absolute',
    top: values.orange_circle_from_top,
    borderRadius: '50%',
    left: values.orange_circle_from_left,
    overflow: 'hidden',

}, {
    height: '200rem',
    backgroundColor: '##218c74',
    width: '200rem',
    position: 'absolute',
    top: values.orange_circle_to_top,
    borderRadius: '50%',
    left: values.orange_circle_to_left,
    overflow: 'hidden',
}
)

tlmoto.to(".moto-container", 0, {
    display: 'none',
    overflow: 'hidden'
})
    .fromTo(".tab-img", 1.5, {
        scale: 0.8,
        opacity: 0.3,

    }, {
        scale: 1,
        opacity: 1,
        ease: Back.easeOut.config(1.7)
    })


// // Apply Same animation as The initial tabs
// tlmoto.fromTo(elements, 1, {
//     scale: 0.8,
//     opacity: 0,
// }, {
//     scale: 1,
//     opacity: 1,
//     ease: Back.easeOut.config(1.7)
// });

// // Making 3 users appear on Scroll
// .fromTo(elements, {
//     scale: 0.8,
//     opacity: 0,

// }, {
//     scale: 1,
//     opacity: 1,
//     scrollTrigger: {
//         trigger: ".bubble1",
//         start: "60% 40%",
//         end: "80% 25%",
//         toggleActions: "restart none none none",
//         scrub: 1,
//         // markers: true,

//     }
// })


gsap.set(cursor, {
    xPercent: -50,
    yPercent: -50
})

// Update the cursor's position on mouse move
document.addEventListener('mousemove', e => {
    gsap.to(cursor, {
        duration: 0.2,
        x: e.clientX,
        y: e.clientY
    });
});

// Show the cursor on mouse enter
document.addEventListener('mouseenter', e => {
    gsap.to(cursor, {
        duration: 0.2,
        opacity: 1
    });
});

// Hide the cursor on mouse leave
document.addEventListener('mouseleave', e => {
    gsap.to(cursor, {
        duration: 0.2,
        opacity: 0
    });
});



heroTL.to(".device-container", {
    scale: values.device_container_scale,
    transformOrigin: "center center",
    scrollTrigger: {
        trigger: ".hero-container",
        start: "60% 55%",
        end: "80% 10%",
        toggleActions: "restart none none none",
        scrub: 1,
        pin: [".device-container"],
        // markers: true,

    }
})
    .to(".tab-img", {
        x: values.tab_img_x,  //update
        y: values.tab_img_y,  //update
        scale: values.tab_img_scale,
        scrollTrigger: {
            trigger: ".hero-container",
            start: "60% 55%",
            end: "center 20%",
            toggleActions: "restart none none none",
            scrub: 1,
            // markers: true,

        }
    })
    .to(".mbl-img", {
        opacity: 1,
        scrollTrigger: {
            trigger: ".hero-container",
            start: "60% 55%",
            end: "center 35%",
            toggleActions: "restart none none none",
            scrub: 1,
            // markers: true,
        }
    })
    .to(".mbl-img", {
        x: values.mbl_img_X, //update
        y: values.mbl_img_Y,   //update
        scrollTrigger: {
            trigger: ".hero-container",
            start: "60% 55%",
            end: "center 20%",
            toggleActions: "restart none none none",
            scrub: 1,
            // markers: true,
        }
    })

bubbles.forEach((bubble) => {
    heroTL.to(".device-container", {
        scale: values.device_container_scale,
        transformOrigin: "center center",
        scrollTrigger: {
            trigger: ".hero-container",
            end: "center 10%",
            toggleActions: "restart none none none",
            scrub: 1,
            pin: bubble,
        }
    })
})
heroTL.to(".laptop-img", {
    opacity: 1,
    scale: 0.8,
    scrollTrigger: {
        trigger: ".hero-container",
        start: "60% 55%",
        end: "center 33%",
        toggleActions: "restart none none none",
        scrub: 1,
    }
})

    .to(".bubble1", {
        opacity: 0,
        x: 100,
        scale: 0.7,
        duration: 2,
        delay: 2,
        transformOrigin: "center center",
        scrollTrigger: {
            trigger: ".hero-container",
            start: "55% 45%",
            end: "center 30%",
            toggleActions: "restart none none none",
            scrub: 1,
        }
    })
    .to(".bubble2", {
        opacity: 0,
        scale: 0.7,
        x: -100,
        duration: 2,
        delay: 2,
        transformOrigin: "center center",
        scrollTrigger: {
            trigger: ".hero-container",
            start: "55% 45%",
            end: "center 30%",
            toggleActions: "restart none none none",
            scrub: 1,
            // markers: true,
        }
    })
    .to(".bubble3", {
        opacity: 1,
        scale: values.bubble_scale,
        transformOrigin: "center center",
        scrollTrigger: {
            trigger: ".hero-container",
            start: "55% 20%",
            end: "center 16%",
            toggleActions: "restart none none none",
            scrub: 1,
            // markers: true,
        }
    })
    .fromTo(".bubble4", {
        scale: 0.7,

    }, {
        opacity: 1,
        scale: values.bubble_scale,
        transformOrigin: "center center",
        scrollTrigger: {
            trigger: ".hero-container",
            start: "55% 45%",
            end: "center 16%",
            toggleActions: "restart none none none",
            scrub: 1,
            // markers: true,
        }
    })
    .fromTo(".bubble5", {
        scale: 0.7,

    }, {
        opacity: 1,
        scale: values.bubble_scale,
        transformOrigin: "center center",
        scrollTrigger: {
            trigger: ".hero-container",
            start: "55% 45%",
            end: "center 16%",
            toggleActions: "restart none none none",
            scrub: 1,
        }
    })
    .fromTo(".bubble6", {
        scale: 0.7,

    }, {
        opacity: 1,
        scale: values.bubble_scale,
        transformOrigin: "center center",
        scrollTrigger: {
            trigger: ".hero-container",
            start: "55% 45%",
            end: "center 16%",
            toggleActions: "restart none none none",
            scrub: 1,
        }
    })
    .fromTo(".bubble7", {
        scale: 0.7,

    }, {
        opacity: 1,
        scale: values.bubble_scale,
        // pointerEvent: "none",
        transformOrigin: "center center",
        scrollTrigger: {
            trigger: ".hero-container",
            start: "55% 45%",
            end: "center 16%",
            toggleActions: "restart none none none",
            scrub: 1,
            // markers: true,

        }
    })
    .fromTo(".bubble8", {
        scale: 0.7,

    }, {
        opacity: 1,
        scale: values.bubble_scale,
        transformOrigin: "center center",
        scrollTrigger: {
            trigger: ".hero-container",
            start: "55% 40%",
            end: "center 16%",
            toggleActions: "restart none none none",
            scrub: 1,
            // markers: true,
        }
    })

gsap.to(".heading-container", {
    y: -50,
    opacity: 0,
    duration: 2,
    scrollTrigger: {
        trigger: ".heading-container",
        start: "top 50%",
        end: "top 48%",
        toggleActions: "play none none none",
        scrub: 1,
        // markers: true,

    }
})

// const comTL = gsap.timeline();


// comTL.fromTo(".com-container", {
//     opacity: 0,
//     // scrollTrigger: {
//     //     trigger: ".hero-containerr",
//     //     start: "60% 50%",
//     //     end: "80% 30%",
//     //     toggleActions: "play none none none",
//     //     scrub: 1,
//     //     markers: true,

//     // }
// },
//     {
//         // y: -50,
//         opacity: 1,
//         duration: 2,
//         scrollTrigger: {
//             trigger: ".hero-containerr",
//             start: "60% 30%",
//             end: "60% 30%",
//             toggleActions: "play none none none",
//             scrub: 1,
//             markers: true,

//         }
//     })
// comTL.to(".com-container", {
//     y: -50,
//     opacity: 0,
//     duration: 2,
//     delay: 1,
//     scrollTrigger: {
//         trigger: ".hero-container",
//         start: "30% 80%",
//         end: "50% 30%",
//         toggleActions: "play none none none",
//         scrub: 1,
//         markers: true,

//     }
// })
const deveiceTl = gsap.timeline({
    scrollTrigger: {
        trigger: ".page1",
        start: "60% 62%",
        end: "50% top",
        toggleActions: "play none none none",
        scrub: 1,
        // markers: true,
        pin: ".page1"
    }
}
);

deveiceTl.to(".mobile-img", 2, {
    scale: 0.5,
    opacity: 0,
    display: "none",

})

    .to(".pc-img", 2, {
        scale: 1,
        display: "block",

    })

let section = gsap.utils.toArray(".page")
console.log(section);

section.forEach((element, index) => {
    let item = element.querySelectorAll(".item")
    let tl2 = gsap.timeline({
        scrollTrigger: {
            trigger: element,
            start: 'Top 80%',
            toggleActions: "restart none none none"
        }
    })
        .from(item, {
            xPercent: gsap.utils.wrap([-100, 100]),
            duration: 1
        })
});


