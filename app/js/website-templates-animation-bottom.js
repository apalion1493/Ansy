var controller = new ScrollMagic.Controller();

// build tween
var tween = TweenMax.to(".site-templates-section__second-pattern", 1,
    {right: 0, top: 150},
    {right: -1800, yoyo: true, ease: Circ.easeInOut});

// build scene and set duration to window height
var scene = new ScrollMagic.Scene({triggerElement: "#trigger1", duration: 600})
    .setTween(tween)
    .addIndicators() // add indicators (requires plugin)
    .addTo(controller);