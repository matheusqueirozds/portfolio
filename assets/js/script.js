const activeClass = "ativo";

function initSelecionarLink() {
    const linksInternos = document.querySelectorAll('.js a[href^="#"]');

    if (linksInternos.length) {
        function handleLink(e) {
            linksInternos.forEach((link) => {
                link.classList.remove(activeClass);
            });

            this.classList.add(activeClass);
        }

        linksInternos.forEach((link) => {
            link.addEventListener("click", handleLink);
        });
    }
}
initSelecionarLink();

function initMenuMobile() {
    const browserSmall = matchMedia("(max-width: 600px)").matches;

    if (browserSmall) {
        const menu = document.querySelector(".js .menu");
        menu.classList.add("menu-mobile");
    }
}
initMenuMobile();
