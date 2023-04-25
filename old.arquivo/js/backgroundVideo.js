// // Selecionando o elemento p
// var typedText = document.querySelector(".typed-text");

// // Iniciando a animação do Typed.js
// var typed = new Typed(typedText, {
//     strings: [""],
//     typeSpeed: 60,
//     showCursor: false
// })

//     window.addEventListener('scroll', function() {
//         var menu = document.querySelector('.menu');
//         var introSection = document.querySelector('#intro');
//         var introSectionHeight = introSection.offsetHeight;
//         var introSectionTop = introSection.offsetTop;
//         var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

//         if (scrollTop < introSectionTop + introSectionHeight) {
//             // Se a posição atual da página está no início
//             menu.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
//             menu.style.opacity = '1';
//         } else {
//             // Se a posição atual da página está depois do início
//             menu.style.backgroundColor = 'green';
//             menu.style.opacity = '1';
//         }
//     });

    var menuToggle = document.querySelector('.menu-toggle');
    var menu = document.querySelector('.menu');
    
    menuToggle.addEventListener('click', function() {
      menu.classList.toggle('active');
    });
    