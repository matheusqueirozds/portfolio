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

function initScrollLinks() {
    const linksInternos = document.querySelectorAll(".js-menu a[href^='#']");

    if (linksInternos.length) {
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
    }
}
initScrollLinks();

function initMenuMobile() {
    const btnMobile = document.querySelector("#btn-mobile");

    function toggleMenu(e) {
        if (e.type === "touchstart") e.preventDefault();

        const nav = document.getElementById("nav");

        nav.classList.toggle(activeClass);

        const ativo = nav.classList.contains(activeClass);

        this.setAttribute("aria-expanded", ativo);

        if (ativo) {
            this.setAttribute("aria-label", "Fechar Menu");
        } else {
            this.setAttribute("aria-label", "Abrir Menu");
        }
    }

    btnMobile.addEventListener("click", toggleMenu);
    btnMobile.addEventListener("touchstart", toggleMenu, { passive: false });

    function scrollToID(event) {
        event.preventDefault();
        const ID = event.currentTarget.getAttribute("href");
        const target = document.querySelector(ID);

        const topo = target.offsetTop - 60;
        scrollTo({ top: topo, behavior: "smooth" });
        // fecha o menu
        btnMobile.click();
    }

    // Seleciona links internos
    const intLinks = document.querySelectorAll('[href^="#"]');
    intLinks.forEach((link) => {
        link.addEventListener("click", scrollToID);
    });
}
initMenuMobile();
