// const title = document.querySelector("#title");
// const display = document.querySelector("#display");

// let title_size = 2;
// title.style.fontSize = title_size + "rem";

// let display_size = 5;
// display.style.fontSize = display_size + "rem";

// // EVENT Listneres

// title.addEventListener("click", function() {

//     makeShitDifferentSize(title, title_size, 1, true);

// });

// display.addEventListener("click", function(){

//     makeShitDifferentSize(display, display_size, 0.9, false)
    
// });

// // ###################
// // ################# CORE CORE CORE CORE ####

// const unit = "rem";

// function makeShitDifferentSize(thing, size, sizeChange, increasing) {

//     // change the size
//     if (increasing) {
//         size += sizeChange;
//     } else {
//         size *= sizeChange;
//     }

//     // make it work
//     thing.style.fontSize = size + unit;

// }