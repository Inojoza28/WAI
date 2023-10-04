 // Obtém a URL atual da página
 var currentPage = window.location.href;

 // Obtém todos os elementos de âncora com a classe "nav-link"
 var navLinks = document.querySelectorAll('.nav-link');

 // Itera sobre os links e adiciona/remova a classe "active" com base na URL atual
 navLinks.forEach(function(link) {
     if (link.href === currentPage) {
         link.classList.add('active'); // Adiciona a classe "active" se a URL corresponder
     } else {
         link.classList.remove('active'); // Remove a classe "active" se a URL não corresponder
     }
 });

//  feito por Carlos Gabriel J. I. Santos