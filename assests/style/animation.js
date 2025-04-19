let lights = document.getElementsByClassName("color");
let activeIndex = 0;
let direction = 1; // 1 for right, -1 for left

const updateLights = () => {
    // Reset all lights to white
    for (let i = 0; i < lights.length; i++) {
        lights[i].style.backgroundColor = 'white';
    }

    // Set current active light to red
    lights[activeIndex].style.backgroundColor = 'red';

    // Set neighbors to pink (if they exist)
    if (activeIndex - 1 >= 0) {
        lights[activeIndex - 1].style.backgroundColor = 'pink';
    }
    if (activeIndex + 1 < lights.length) {
        lights[activeIndex + 1].style.backgroundColor = 'pink';
    }

    // Move the light
    activeIndex += direction;

    // Reverse direction at ends
    if (activeIndex === lights.length - 1 || activeIndex === 0) {
        direction *= -1;
    }
};

setInterval(updateLights, 200);