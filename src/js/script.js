svg4everybody(); // иницализация полифила для IE

$(document).ready(function(){
  $('.room').hover(function() {
    $(this).addClass('showed');
},
function() {
    $(this).removeClass('showed');
}
);
});

// Если на проекте нет jQuery, но хочется $( document ).ready... (IE9+)
// function ready(fn) {
//   if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading"){
//     fn();
//   } else {
//     document.addEventListener('DOMContentLoaded', fn);
//   }
// }
//
// ready(function(){
//   // code
// });
