gsap.to(".main",{width:window.innerWidth,duration:1})
gsap.to(".cont",{opacity:1, y:0, duration:1,delay:1,ease:Power4.easeOut});
gsap.to(".img",{opacity:1,x:0,duration:1,delay:1.5})
gsap.registerPlugin(ScrollTrigger);

gsap.to(".show-in h1",{
    scrollTrigger:{
        trigger:".home",
        start:"bottom start",
    },y:0,duration:1,opacity:1,ease:"in-out"
})
gsap.to(".show-in p",{
    scrollTrigger:{
        trigger:".home",
        start:"bottom start",
        
    },y:0,duration:1,opacity:1,ease:"in-out"
})
gsap.to(".slider",{
    scrollTrigger:{
        trigger:".showcase",
        start:"top start",
        
    },y:0,opacity:1,duration:1
})
gsap.to(".popup-2",{ 
    scrollTrigger:{
        trigger:".home",
        start:"bottom start",
        
    },x:0,duration:1,opacity:1
})
gsap.to(".d-about h1, p",{
    scrollTrigger:{
        trigger:".showcase",
        start:"bottom start",
        
    },y:0,duration:1,opacity:1
})
gsap.to(".d-contact h1, p",{
    scrollTrigger:{
        trigger:".about",
        start:"bottom start",
    },y:0,duration:1,opacity:1
})
gsap.to(".bar",{
    scrollTrigger:{
        trigger:".home",
        start:"top start",
        endTrigger:".about",
        end:"bottom start",
        scrub:true
    },height:window.innerHeight
})

let x = true;
function openmenu(){

    if(x)
    {
    
        gsap.to('.menu',{display:"flex",duration:1,opacity:1,x:0,background:"black"});

    x=false;
    }
    else
    {
        gsap.to('.menu',{display:"none",duration:1,x:window.innerWidth*-1});
    x=true
    }
}
