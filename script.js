window.addEventListener("scroll", function () {
  const navbar = document.getElementById("mainNavbar");

  // Vérifie si la page a été défilée de plus de 50 pixels
  if (window.scrollY > 50) {
    // Ajoute une classe pour rendre la navbar visible ou avec un fond différent
    navbar.classList.add("scrolled");
  } else {
    // Retire la classe si on est revenu en haut de la page
    navbar.classList.remove("scrolled");
  }
});
