// Create food_carousel array
image_source_array = ["images/thomas-marban-EHK-EH1SRzQ-unsplash.jpg", "images/kelly-visel-MIMgqOQLnOc-unsplash.jpg", 
    "images/mahmoud-fawzy-Dbx6-XZY6Dg-unsplash.jpg", "images/mahmoud-fawzy-MgvByrhYz24-unsplash.jpg", 
    "images/mahmoud-fawzy-YnVaHqgpPLA-unsplash.jpg"
]

// Get image element, left and right element, and timer element
const food_carousel_image = document.querySelector(".food_carousel img");
const left_carousel_div = document.querySelector(".food_carousel .left");
const right_carousel_div = document.querySelector(".food_carousel .right");
const timer_element = document.querySelector(".timer");

// Create index for images, and interval variable, create time elapsed variable
let index = 0;
let timeElapsed = 0;
let interval;

// Event listeners for left and right divs
// They will each loop through image array,
// then play the sound effect.
left_carousel_div.addEventListener("click", () => {
    moveCarouselBackward();
    playSoundEffect("sound/pop-39222.mp3");
});
right_carousel_div.addEventListener("click", () => {
    moveCarouselForward();
    playSoundEffect("sound/bubble-pop-293342.mp3");
});

// Upon loading webpage, updateImage(), and set interval for automatic scrolling
// Update timer element immediately
updateImage();
resetInterval();
updateTimer();

// The main automatically running carousel function.  Works in tandem with
// the variable interval, to run every second
function runCarousel() {

    // Increment time elasped
    timeElapsed++;

    // If it has been 3 seconds, move carousel forward
    if (timeElapsed === 3) {
        moveCarouselForward();
    }

    updateTimer();
}

// Updates the image on the DOM
function updateImage() {
    food_carousel_image.src = image_source_array[index];
}

// Update timer text content
function updateTimer() {
    timer_element.textContent = `${timeElapsed}`;
}

// Moves the index forward by one, or loops
function moveCarouselForward() {
    // Check to see if at end of index
    if (index === image_source_array.length - 1) {
        index = 0;
    }
    else {
        index++;
    }

    // Reset time to 0, update timer DOM element, reset the automatically
    // moving interval time, and update the image on screen
    timeElapsed = 0;
    updateTimer();
    resetInterval();
    updateImage();
}

// Moves the index back by one, or loops
function moveCarouselBackward() {
    if (index === 0) {
        index = image_source_array.length - 1;
    }
    else {
        index--;
    }

    // Reset time to 0, update timer DOM element, reset the automatically
    // moving interval time, and update the image on screen
    timeElapsed = 0;
    updateTimer();
    resetInterval();
    updateImage();
}

// Resets interval time to run runCarousel() every second.  runCarousel()
// is the main function to control automatic moving of images
function resetInterval() {
    clearInterval(interval);
    interval = setInterval(runCarousel, 1000);
}

// Plays the given sound effect
function playSoundEffect(sound_file_path) {
    const sound = new Audio(sound_file_path);
    sound.play();
}