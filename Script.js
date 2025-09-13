const box = document.getElementById("box-two");

function startAnimation() {
    box.classList.add("animate");
}

function stopAnimation() {
    box.classList.remove("animate");
}

function calculateArea(width, height) {
    return width * height;
}

function createGreeting(name) {
    return "Hello, " + name + "!  Welcome to my animation page.";
}

let globalVar = "I am a global variable";

function scopeDemo() {
    let localVar = "I am local to scopeDemo()";
    console.log(globalVar);
    console.log(localVar);
}

scopeDemo();

function toggleAnimation(elementId, className) {
    const el = document.getElementById(elementId);
    if (el.classList.contains(className)) {
        el.classList.remove(className);
    } 
    else {
        el.classList.add(className);
    }
}
