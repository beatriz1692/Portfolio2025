document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll("a[data-page]");
  const conteudo = document.getElementById("conteudo-dinamico");

  links.forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const page = this.getAttribute("data-page") + ".html";
      fetch(page)
        .then(response => response.text())
        .then(data => {
          conteudo.innerHTML = data;
        })
        .catch(error => {
          conteudo.innerHTML = "<p>Erro ao carregar conteúdo.</p>";
        });
    });
  });

  // Tema claro/escuro
  const toggleTheme = document.getElementById("toggleTheme");
  toggleTheme.addEventListener("click", () => {
    document.body.classList.toggle("dark");
  });
});
