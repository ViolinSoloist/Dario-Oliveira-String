/* logic.js */

// global body main
const body = document.querySelector("body");
const main = document.querySelector("main");

// navmap (usado para colocar efeito de brilho na janela selecionada)
const navMap = {
    'home': document.getElementById('home'),
    'about': document.getElementById('about'),
    'teaching': document.getElementById('teaching'),
    'performance': document.getElementById('performance'),
    'contact': document.getElementById('contact')
};

/* FLUXO DE PÁGINAS */
/* BLOCO SENSÍVEL À MUDANÇA DE ESTRUTURA DE INFORMAÇÃO */
const pageFlow = [
    { id: 'home', funcName: 'carregarHome' },
    { id: 'about', funcName: 'carregarAboutme' },
    { id: 'teaching', funcName: 'carregarTeachingPhy' },
    { id: 'teaching', funcName: 'carregarSuzukiTriangle' },
    { id: 'teaching', funcName: 'carregarTeachingPriorities' },
    { id: 'teaching', funcName: 'carregarGroupClass' },
    { id: 'teaching', funcName: 'carregarViolinLesson' },
    { id: 'teaching', funcName: 'carregarTestimony' },
    { id: 'performance', funcName: 'carregarTeacherPerformance' },
    { id: 'performance', funcName: 'carregarStudentPerformance' },
    { id: 'contact', funcName: 'carregarContato' }
];

function updateNavHighlight(category) {
    Object.values(navMap).forEach(btn => {
        if(btn) {
            btn.classList.remove('active');
            btn.style.filter = ""; 
        }
    });
    if (navMap[category]) navMap[category].classList.add('active');
}

function createNextButton(currentFuncName) {
    const currentIndex = pageFlow.findIndex(p => p.funcName === currentFuncName);
    if (currentIndex === -1 || currentIndex === pageFlow.length - 1) return null;
    const nextStep = pageFlow[currentIndex + 1];
    const btn = document.createElement('button');
    btn.className = 'next-page-btn';
    btn.innerText = 'Next Page'; 
    btn.onclick = () => {
        if (typeof window[nextStep.funcName] === "function") {
            window[nextStep.funcName]();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };
    return btn;
}

function navegarPara(nomeFuncao) {
    if (typeof window[nomeFuncao] === "function") window[nomeFuncao]();
    closeMenu();
}

// Menu Mobile (Hamburguer aidebar)
const mobileBtn = document.getElementById('mobile-menu-btn');
const sidebar = document.getElementById('mobile-sidebar');
const closeBtn = document.getElementById('close-sidebar');
const backdrop = document.getElementById('overlay-backdrop');
const submenus = document.querySelectorAll('.has-submenu');

function openMenu() { sidebar.classList.add('open'); backdrop.classList.add('active'); }
function closeMenu() { sidebar.classList.remove('open'); backdrop.classList.remove('active'); }

if(mobileBtn) mobileBtn.addEventListener('click', openMenu);
if(closeBtn) closeBtn.addEventListener('click', closeMenu);
if(backdrop) backdrop.addEventListener('click', closeMenu);

submenus.forEach(link => {
    link.addEventListener('click', () => {
        const menu = link.nextElementSibling;
        menu.classList.toggle('show-submenu');
        link.textContent = link.textContent.includes('▾') ? link.textContent.replace('▾', '▴') : link.textContent.replace('▴', '▾');
    });
});

/* lógica: footer de contato dev site (eu hahahaha) */
const contactFooter = document.createElement('div');
contactFooter.id = 'contact-footer';
contactFooter.textContent = 'for website problems or suggestions, contact: erikmschung@usp.br';
document.body.appendChild(contactFooter);

document.addEventListener('mousemove', (e) => {
    const fromBottom = window.innerHeight - e.clientY;
    if (fromBottom < 30) {
        contactFooter.classList.add('visible');
    } else {
        contactFooter.classList.remove('visible');
    }
});

/*
==============================
DROPDOWN (EXECUTA AO CARREGAR)
============================== */
document.addEventListener('DOMContentLoaded', () => {
    
    // DROPDOWN TEACHING
    const teachingBtnOriginal = document.getElementById('teaching');
    if (teachingBtnOriginal) {
        const teachingWrapper = document.createElement('div');
        teachingWrapper.className = 'teaching-wrapper navbtn';
        teachingBtnOriginal.replaceWith(teachingWrapper);
        teachingWrapper.appendChild(teachingBtnOriginal);
        navMap['teaching'] = teachingWrapper;

        const teachingDropdown = document.createElement('div');
        teachingDropdown.className = 'teaching-dropdown';
        teachingDropdown.innerHTML = `
        <div class="dropdown-option" data-page="philosophy">Teaching Philosophy</div>
        <div class="dropdown-option" data-page="triangle">The Suzuki Triangle</div>
        <div class="dropdown-option" data-page="priority">Teaching Overview</div>
        <div class="dropdown-option" data-page="group">Group Class</div>
        <div class="dropdown-option" data-page="violin">Violin Lesson Virtual</div>
        <div class="dropdown-option" data-page="testimony">Students Stories</div>
        `;
        teachingWrapper.appendChild(teachingDropdown);

        teachingWrapper.addEventListener('click', (e) => {
            e.stopPropagation();
            teachingWrapper.classList.toggle('active');
            // Fecha o outro se estiver aberto
            if(navMap['performance']) navMap['performance'].classList.remove('active');
        });

        teachingDropdown.querySelectorAll('.dropdown-option').forEach(option => {
            option.addEventListener('click', (e) => {
                e.stopPropagation();
                const page = e.target.dataset.page;
                if (page === 'philosophy') carregarTeachingPhy();
                else if (page === 'triangle') carregarSuzukiTriangle();
                else if (page === 'priority') carregarTeachingPriorities();
                else if (page === 'group') carregarGroupClass();
                else if (page === 'violin') carregarViolinLesson();
                else if (page === 'testimony') carregarTestimony();
                teachingWrapper.classList.remove('active');
            });
        });
    }

    // DROPDOWN PERFORMANCE ---
    const perfBtnOriginal = document.getElementById('performance');
    if (perfBtnOriginal) {
        const perfWrapper = document.createElement('div');
        perfWrapper.className = 'performance-wrapper navbtn'; 
        
        perfBtnOriginal.replaceWith(perfWrapper);
        perfWrapper.appendChild(perfBtnOriginal);
        
        // atualiza navmap para o novo wrapper
        navMap['performance'] = perfWrapper;

        const perfDropdown = document.createElement('div');
        perfDropdown.className = 'performance-dropdown'; 

        perfDropdown.innerHTML = `
        <div class="dropdown-option" data-page="teacher">Teacher's Performances</div>
        <div class="dropdown-option" data-page="student">Students' Performances</div>
        `;

        perfWrapper.appendChild(perfDropdown);

        perfWrapper.addEventListener('click', (e) => {
            e.stopPropagation();
            perfWrapper.classList.toggle('active');
            // fecha teaching se aberto
            if(navMap['teaching']) navMap['teaching'].classList.remove('active');
        });

        perfDropdown.querySelectorAll('.dropdown-option').forEach(option => {
            option.addEventListener('click', (e) => {
                e.stopPropagation();
                const page = e.target.dataset.page;

                if (page === 'teacher') carregarTeacherPerformance();
                else if (page === 'student') carregarStudentPerformance();
                
                perfWrapper.classList.remove('active');
            });
        });
    }

    // fechar ao clicar fora global
    document.addEventListener('click', () => {
        if(navMap['teaching']) navMap['teaching'].classList.remove('active');
        if(navMap['performance']) navMap['performance'].classList.remove('active');
    });

    // event listeners
    if(navMap.home) navMap.home.addEventListener('click', carregarHome);
    if(navMap.about) navMap.about.addEventListener('click', carregarAboutme);
    if(navMap.contact) navMap.contact.addEventListener('click', carregarContato);

    // home (sempre que o site carrega, começa aqui)
    // IMPLEMENT: talvez no futuro implemente poder compatilhar as páginas individuais do site usando URL ID
    // mas por enquanto sempre vai começar em Home
    if (typeof carregarHome === 'function') carregarHome();
});