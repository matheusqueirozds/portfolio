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

function initTabMenuHardSkills() {
    const tabMenu = document.querySelectorAll(".js .hard.skill .js-tabmenu li");
    const tabContent = document.querySelectorAll(
        ".js .hard.skill .js-tabcontent p"
    );

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

        function mouseOver(index) {
            tabContent[index].classList.remove(activeClass);
            tabContent[tabContent.length - 1].classList.add(activeClass);
        }

        tabMenu.forEach((itemMenu, index) => {
            itemMenu.addEventListener("mouseout", () => {
                mouseOver(index);
            });
        });
    }
}
initTabMenuHardSkills();

function initTabMenuSoftSkills() {
    const tabMenu = document.querySelectorAll(".js .soft.skill .js-tabmenu li");
    const tabContent = document.querySelectorAll(
        ".js .soft.skill .js-tabcontent p"
    );

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

        function mouseOver(index) {
            tabContent[index].classList.remove(activeClass);
            tabContent[tabContent.length - 1].classList.add(activeClass);
        }

        tabMenu.forEach((itemMenu, index) => {
            itemMenu.addEventListener("mouseout", () => {
                mouseOver(index);
            });
        });
    }
}
initTabMenuSoftSkills();

const linksInternos = document.querySelectorAll(".js-menu a[href^='#']");

linksInternos.forEach((link) => {
    link.addEventListener("click", scrollToSection);
});

function scrollToSection(e) {
    e.preventDefault();
    const href = this.getAttribute("href");
    const section = document.querySelector(href);
    const topo = section.offsetTop - 88;
    scrollTo({ top: topo, behavior: "smooth" });

    /*     section.scrollIntoView({ behavior: "smooth", block: "start" }); */
}
