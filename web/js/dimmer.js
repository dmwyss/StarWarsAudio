let timerDimmer = null;
const dimmer = {
    uiScrim: null,
    uiSensor: null,
    init: function() {
        //log("started dimmer");
        this.uiScrim = document.querySelector("div.dimmer");
        this.uiSensor = document.querySelector("body");
        this.uiSensor.addEventListener('mousemove', (event) => {
            dimmer.startTicker();
        });
        return this;
    },
    startTicker: function() {
        //log("restart timer");
        dimmer.wake();
        if (timerDimmer != null) {
            clearTimeout(timerDimmer);
        }
        timerDimmer = setTimeout(
            function() { dimmer.dim() },
            10000
        );
    },
    dim: function() {
        //log("dimmmmmm ");
        dimmer.uiScrim.style.opacity = 1.0
        dimmer.uiScrim.style.width = "100%";
        dimmer.uiScrim.style.height = "100%";
        document.body.style.cursor = 'none';
    },
    wake: function() {
        dimmer.uiScrim.style.opacity = 0.0;
        document.body.style.cursor = 'auto';
        setTimeout(
            function() { dimmer.uiScrim.style.height = "0%"; },
            1000
        )
    }
}
function doOnLoad(){
    dimmer.init();
}
