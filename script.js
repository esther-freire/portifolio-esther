const botaoMenu = document.getElementById("botaoMenu");
const menu = document.getElementById("menu");


botaoMenu.addEventListener("click", function () {

    menu.classList.toggle("aberto");

    const menuAberto = menu.classList.contains("aberto");

    botaoMenu.setAttribute(
        "aria-expanded",
        menuAberto
    );


    if (menuAberto) {

        botaoMenu.textContent = "✕";

        botaoMenu.setAttribute(
            "aria-label",
            "Fechar menu"
        );

    } else {

        botaoMenu.textContent = "☰";

        botaoMenu.setAttribute(
            "aria-label",
            "Abrir menu"
        );
    }

});


const linksMenu = document.querySelectorAll(".link-menu");


linksMenu.forEach(function (link) {

    link.addEventListener("click", function () {

        menu.classList.remove("aberto");

        botaoMenu.textContent = "☰";

        botaoMenu.setAttribute(
            "aria-expanded",
            "false"
        );

        botaoMenu.setAttribute(
            "aria-label",
            "Abrir menu"
        );

    });

});


const botaoTema = document.getElementById("botaoTema");


const temaSalvo = localStorage.getItem("tema");


if (temaSalvo === "claro") {

    document.body.classList.add("tema-claro");

    botaoTema.textContent = "🌙";

    botaoTema.setAttribute(
        "aria-label",
        "Ativar tema escuro"
    );

} else {

    botaoTema.textContent = "☀️";

    botaoTema.setAttribute(
        "aria-label",
        "Ativar tema claro"
    );
}


botaoTema.addEventListener("click", function () {

    document.body.classList.toggle("tema-claro");


    const temaClaro =
        document.body.classList.contains("tema-claro");


    if (temaClaro) {

        botaoTema.textContent = "🌙";

        botaoTema.setAttribute(
            "aria-label",
            "Ativar tema escuro"
        );

        localStorage.setItem(
            "tema",
            "claro"
        );

    } else {

        botaoTema.textContent = "☀️";

        botaoTema.setAttribute(
            "aria-label",
            "Ativar tema claro"
        );

        localStorage.setItem(
            "tema",
            "escuro"
        );
    }

});


const secoes = document.querySelectorAll(
    "#inicio, #sobre, #projetos, #habilidades, #contato"
);


const observador = new IntersectionObserver(

    function (entradas) {

        entradas.forEach(function (entrada) {

            if (entrada.isIntersecting) {

                
                const idSecao =
                    entrada.target.getAttribute("id");
            

                linksMenu.forEach(function (link) {

                    link.classList.remove("ativo");

                });
                

                const linkAtivo =
                    document.querySelector(
                        `.link-menu[href="#${idSecao}"]`
                    );


                if (linkAtivo) {

                    linkAtivo.classList.add("ativo");

                }

            }

        });

    },

    {
        threshold: 0.35
    }

);


secoes.forEach(function (secao) {

    observador.observe(secao);

});