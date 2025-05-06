// Aguarda o carregamento completo do DOM antes de executar o script
document.addEventListener("DOMContentLoaded", () => {

    // Seleciona todos os links do menu de navegação
    const links = document.querySelectorAll("nav a");

    // Seleciona o elemento onde o conteúdo dinâmico será exibido
    const conteudo = document.getElementById("conteudo-dinamico");

    // Seleciona o botão do tema (claro/escuro)
    const toggleBtn = document.getElementById("toggleTheme");

    // Objeto que contém os conteúdos de cada sessão
    const paginas = {
        formacao: `
            <h2>Formação Acadêmica</h2>
            <img src="imagem-3.png" alt="Beatriz" class="imagem-3">
            <p><strong>Ciência da Computação</strong> – [Nome da Faculdade ou Universidade]<br>
            2024-2028 (cursando)</p>
            <p><strong>Enfermagem</strong> – Universidade Anhanguera de São Paulo<br>
            2018-2023 (concluído)</p>
            <h3>Idiomas</h3>
            <ul>
              <li>Português – Nativo</li>
              <li>Inglês – Intermediário/Avançado</li>
              <li>Espanhol – Básico</li>
            </ul>
        `,
        sobre: `
            <h2>Sobre Mim</h2>
            <img src="foto-inicial.png" alt="Beatriz" class="foto-inicial">
            <p>Oi! 👋 Eu sou a Beatriz, estudante de Ciência da Computação, e ultimamente tenho me aprofundado em bioinformática e análise de dados biomédicos 🧬💻 — duas áreas que têm tudo a ver comigo!
            <br><br>
            Antes de entrar no mundo da tecnologia, cursei Enfermagem 🩺, e foi aí que surgiu meu interesse por unir saúde e tecnologia. Desde então, venho explorando temas como programação voltada para a saúde, bancos de dados biomédicos e ciência de dados aplicada à área clínica 🧠📊.
            <br><br>
            Sou bem curiosa quando o assunto é tecnologia, principalmente se envolver biotecnologia, inteligência artificial e sistemas inteligentes para saúde 🤖🧪. Gosto de aprender coisas novas, testar linguagens de programação, ouvir música 🎶, ir na academia e criar projetos que me desafiem. Sempre busco aprender na prática e evoluir um pouquinho a cada dia ✨🚀.</p>
        `,
        portfolio: `
            <h2>Portfólio</h2>
            <img src="imagem-5.png" alt="Beatriz" class="imagem-5">
            <p>Em breve vou publicar aqui meus projetos de bioinformática e ciência de dados. Enquanto isso, você pode conferir alguns dos meus projetos finalizados e códigos no meu Google Drive e GitHub.</p>
            <ul>
              <li><a href="https://github.com/beatriz1692" target="_blank">GitHub: beatriz1692</a></li>
              <li><a href="https://drive.google.com/drive/folders/1223G645m8Wwn-6oAFYJKChHds1OJw3IV?usp=drive_link" target="_blank">Google Drive</a></li>
            </ul>
        `,
        contato: `
            <h2>Contato</h2>
            <img src="imagem-4.png" alt="Beatriz" class="imagem-4">
            <p>Você pode me encontrar no LinkedIn ou me enviar um e-mail:</p>
            <ul>
              <li><a href="https://www.linkedin.com/in/beatriz-saraiva-toneloto-7b8a40199/" target="_blank">LinkedIn</a></li>
              <li><a href="mailto:jornadadeumaenf@gmail.com">jornadadeumaenf@gmail.com</a></li>
            </ul>
        `
    };

    // Função para carregar o conteúdo clicado
    function carregarPagina(nome) {
        // Remove a classe de animação para reiniciar a animação
        conteudo.classList.remove("fade-in");

        // Aguarda 200ms para "esconder" o conteúdo anterior antes de carregar o novo
        setTimeout(() => {
            conteudo.innerHTML = paginas[nome]; // Insere o conteúdo HTML da página desejada
            conteudo.classList.add("fade-in"); // Adiciona a animação
        }, 200);
    }

    // Adiciona um event listener para cada link do menu
    links.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault(); // Impede o comportamento padrão do link (navegação da página)
            const pagina = link.dataset.page; // Obtém o nome da página a partir do atributo data-page
            carregarPagina(pagina); // Carrega o conteúdo da página
        });
    });

    // Adiciona evento para alternar o tema entre claro e escuro
    toggleBtn.addEventListener("click", () => {
        document.body.classList.toggle("dark"); // Adiciona ou remove a classe "dark" no <body>
    });
});
