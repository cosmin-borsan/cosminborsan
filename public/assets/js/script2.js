"use strict";

// Get a reference to the container element
const container = document.querySelector("[data-testimonials-scrollbar]");

// Flag to track whether the mouse is down
let isMouseDown = false;

// Initialize the starting position
let startX;
let scrollLeft;

// Add event listeners to the container element
container.addEventListener("mousedown", (e) => {
    isMouseDown = true;
    startX = e.pageX - container.offsetLeft;
    scrollLeft = container.scrollLeft;
});
container.addEventListener("mouseleave", () => {
    isMouseDown = false;
});
container.addEventListener("mouseup", () => {
    isMouseDown = false;
});
container.addEventListener("mousemove", (e) => {
    if (!isMouseDown) return;
    e.preventDefault();
    const x = e.pageX - container.offsetLeft;
    const walk = (x - startX) * 3; // Scroll speed
    container.scrollLeft = scrollLeft - walk;
});

// Add a scroll event listener to the window
window.addEventListener("scroll", (e) => {
    if (!isMouseDown) return;
    e.preventDefault();
    container.scrollLeft += e.deltaY;
});

// // Get a reference to the container element
// const container = document.querySelector("[data-testimonials-scrollbar]");

// // Get a reference to the scrollable element
// const scrollable = document.querySelector(".scrollable");

// // Flag to track whether the mouse is down
// let isMouseDown = false;

// // Initialize the starting position
// let startX;
// let scrollLeft;

// // Add event listeners to the container element
// container.addEventListener("mousedown", (e) => {
//     isMouseDown = true;
//     startX = e.pageX - container.offsetLeft;
//     scrollLeft = container.scrollLeft;
// });
// container.addEventListener("mouseleave", () => {
//     isMouseDown = false;
// });
// container.addEventListener("mouseup", () => {
//     isMouseDown = false;
// });
// container.addEventListener("mousemove", (e) => {
//     if (!isMouseDown) return;
//     e.preventDefault();
//     const x = e.pageX - container.offsetLeft;
//     const walk = (x - startX) * 3; // Scroll speed
//     container.scrollLeft = scrollLeft - walk;
//     scrollable.style.transform = `translateX(${walk}px)`;
// });

// // Add a scroll event listener to the window
// window.addEventListener("scroll", (e) => {
//     if (!isMouseDown) return;
//     e.preventDefault();
//     container.scrollLeft += e.deltaY;
//     scrollable.style.transform = `translateX(${e.deltaY}px)`;
// });
