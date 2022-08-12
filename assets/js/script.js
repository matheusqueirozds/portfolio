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

function initTabMenu() {
    const tabMenu = document.querySelectorAll(".js .js-tabmenu li");
    const tabContent = document.querySelectorAll(".js .js-tabcontent p");

    if (tabMenu.length && tabContent.length) {
        tabContent[tabContent.length - 1].classList.add(activeClass);

        function activeTab(index) {
            tabContent.forEach((p) => {
                p.classList.remove(activeClass);
            });
            tabContent[index].classList.add(activeClass);
        }

        tabMenu.forEach((itemMenu, index) => {
            itemMenu.addEventListener("mouseover", () => {
                activeTab(index);
            });
        });
    }
}

initTabMenu();
