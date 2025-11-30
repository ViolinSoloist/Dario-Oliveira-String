const body = document.getElementsByTagName("body")[0];
const main = document.getElementsByTagName("main")[0];

const home = document.getElementsByClassName("navbtn")[0];
const about = document.getElementsByClassName('navbtn')[1];
const teaching = document.getElementsByClassName("navbtn")[2];
const testimony = document.getElementsByClassName("navbtn")[3];
const performances = document.getElementsByClassName("navbtn")[4];
const resources = document.getElementsByClassName("navbtn")[5];
const contact = document.getElementsByClassName("navbtn")[6];

//dropdown (teaching)
const teachingWrapper = document.createElement('div');
teachingWrapper.className = 'teaching-wrapper navbtn';
teaching.replaceWith(teachingWrapper);
teachingWrapper.appendChild(teaching);

const teachingDropdown = document.createElement('div');
teachingDropdown.className = 'teaching-dropdown';

teachingDropdown.innerHTML = `
  <div class="dropdown-option" data-page="philosophy">Teaching Philosophy</div>
  <div class="dropdown-option" data-page="priority">Teaching Overview</div>
`;

teachingWrapper.appendChild(teachingDropdown);

teachingWrapper.addEventListener('click', (e) => {
    e.stopPropagation();
    teachingWrapper.classList.toggle('active');
});

//Dropdown (resources)
const resourcesWrapper = document.createElement('div');
resourcesWrapper.className = 'teaching-wrapper navbtn';
resources.replaceWith(resourcesWrapper);
resourcesWrapper.appendChild(resources);

const resourcesDropdown = document.createElement('div');
resourcesDropdown.className = 'teaching-dropdown';

resourcesDropdown.innerHTML = `
  <div class="dropdown-option" data-page="group">Group Class</div>
  <div class="dropdown-option" data-page="violin">Violin Lesson Virtual</div>
`;

resourcesWrapper.appendChild(resourcesDropdown);

resourcesWrapper.addEventListener('click', (e) => {
    e.stopPropagation();
    resourcesWrapper.classList.toggle('active');
});

document.addEventListener('click', () => {
    teachingWrapper.classList.remove('active');
    resourcesWrapper.classList.remove('active');
});

teachingDropdown.querySelectorAll('.dropdown-option').forEach(option => {
    option.addEventListener('click', (e) => {
        e.stopPropagation();
        const page = e.target.dataset.page;

        if (page === 'philosophy') {
            carregarTeachingPhy();
        } else if (page === 'priority') {
            carregarTeachingPriorities();
        }
        teachingWrapper.classList.remove('active');
    });
});

resourcesDropdown.querySelectorAll('.dropdown-option').forEach(option => {
    option.addEventListener('click', (e) => {
        e.stopPropagation();
        const page = e.target.dataset.page;

        if (page === 'group') {
            carregarGroupClass();
        } else if (page === 'violin') {
            carregarViolinLesson();
        }
        resourcesWrapper.classList.remove('active');
    });
});

let brilho_inpage = 70;
carregarHome();

function carregarHome() {
    body.style.backgroundImage = `url("src/fundo.png")`;
    main.innerHTML = '';

    home.style.filter = `brightness(${brilho_inpage}%)`;
    about.style.filter = "brightness(100%)";
    teaching.style.filter = "brightness(100%)";
    testimony.style.filter = "brightness(100%)";
    performances.style.filter = "brightness(100%)";
    resources.style.filter = "brightness(100%)";
    contact.style.filter = "brightness(100%)";

    const Img = document.createElement("img");
    Img.id = "dario";
    Img.src = "src/dario.png";
    Img.classList.add('imagem', 'dario');

    const Artc = document.createElement("article");
    Artc.innerHTML = `
        <p id="intro">Welcome To</p>
        <p id="name">Dario Oliveira</p>
        <p id="frase">Music for life: performing, teaching and inspiring</p>
        <button onclick="carregarAboutme()">Next page</button>
    `;

    main.appendChild(Img);
    main.appendChild(Artc);
}

function carregarAboutme() {
    document.body.style.backgroundImage = 'url("src/fundo2.png")';
    main.innerHTML = "";

    home.style.filter = "brightness(100%)";
    about.style.filter = `brightness(${brilho_inpage}%)`;
    teaching.style.filter = "brightness(100%)";
    testimony.style.filter = "brightness(100%)";
    performances.style.filter = "brightness(100%)";
    resources.style.filter = "brightness(100%)";
    contact.style.filter = "brightness(100%)";

    const Img = document.createElement("img");
    Img.src = "src/dario2.png";
    Img.classList.add('imagem','dario2');

    const Artc = document.createElement("article");
    Artc.style.position = "fixed";
    Artc.style.top = "120px";
    Artc.style.left = "10vw";
    Artc.style.width = "43vw";
    Artc.style.minWidth = "200px";

    const Title = document.createElement('p');
    Title.classList.add("title","slideLeftRightTitle");
    Title.innerText = "About me";

    const Aboutmedescrp = document.createElement('p');
    Aboutmedescrp.classList.add('description');
    Aboutmedescrp.innerText = `
    I’m Dario Oliveira Santos — violinist, violist, and passionate Suzuki educator dedicated to inspiring students and audiences through the power of music. With roots in Brazil and a journey that spans concert halls, classrooms, and communities across Brazil and the United States, my mission is simple: to share music that speaks to the soul and to nurture the next generation of musicians with heart, discipline, and joy. This space is a reflection of my life in music — a place where performance and pedagogy meet.
    `;

    main.appendChild(Artc);
    main.appendChild(Img);
    Artc.appendChild(Title);
    Artc.appendChild(Aboutmedescrp);
}

function carregarTeachingPhy() {
    document.body.style.backgroundImage = 'url("src/fundo2.png")';
    main.innerHTML = "";

    home.style.filter = "brightness(100%)";
    about.style.filter = "brightness(100%)";
    teaching.style.filter = `brightness(${brilho_inpage}%)`;
    testimony.style.filter = "brightness(100%)";
    performances.style.filter = "brightness(100%)";
    resources.style.filter = "brightness(100%)";
    contact.style.filter = "brightness(100%)";

    const Img = document.createElement("img");
    Img.src = "src/dario3.png";
    Img.classList.add('imagem','dario2');

    const Artc = document.createElement("article");
    Artc.style.position = "fixed";
    Artc.style.top = "120px";
    Artc.style.left = "10vw";
    Artc.style.width = "43vw";
    Artc.style.minWidth = "200px";

    const Title = document.createElement('p');
    Title.classList.add("title","slideLeftRightTitle");
    Title.innerText = "Philosophy";

    const Philosophy = document.createElement('p');
    Philosophy.classList.add('description');
    Philosophy.innerText = `
        I believe every child can learn music with the right support, consistency, and encouragement. Rooted in the Suzuki Method and Paul Rolland’s String Pedagogy, my teaching approach nurtures confidence, focus, discipline, and joy in each student.
        Through small, achievable steps and healthy, tension-free movement, students develop strong technique, musical expression, and a lifelong love for music. Parental involvement and community support are key—together, we create a learning environment where children thrive.
    `;

    const Quotes = document.createElement('p');
    Quotes.classList.add('description');
    Quotes.style.fontStyle = "italic";
    Quotes.style.color = "white";
    Quotes.style.fontSize = "clamp(20px,1.8vw,1.8vw)";
    Quotes.style.margin = 0;
    Quotes.innerText = `
        "Tell me and I forget.
        Teach me and I remember.
        Involve me and I learn."
    `;

    main.appendChild(Artc);
    main.appendChild(Img);
    Artc.appendChild(Title);
    Artc.appendChild(Philosophy);
    Artc.appendChild(Quotes);
}

function carregarTeachingPriorities() {
    document.body.style.backgroundImage = 'url("src/fundo2.png")';
    main.innerHTML = "";

    home.style.filter = "brightness(100%)";
    about.style.filter = "brightness(100%)";
    teaching.style.filter = `brightness(${brilho_inpage}%)`;
    testimony.style.filter = "brightness(100%)";
    performances.style.filter = "brightness(100%)";
    resources.style.filter = "brightness(100%)";
    contact.style.filter = "brightness(100%)";

    const Title = document.createElement('p');
    Title.classList.add("title","teachingTitle");
    Title.innerText = "Teaching Overview";
    Title.style.position = "fixed";
    Title.style.top = "140px";
    Title.style.minWidth = "440px";

    const Video = document.createElement('iframe');
    Video.id = "ytvideo";
    Video.src = "https://www.youtube.com/embed/N-CMq8Anfug?autoplay=1";
    Video.classList.add("video");
    Video.style.boxShadow = "0 3px 5px rgb(0,0,0,0.4)"; 

    main.appendChild(Title);
    main.appendChild(Video);
}

function carregarTestimony() {
    document.body.style.backgroundImage = 'url("src/fundo2.png")';
    main.innerHTML = "";

    home.style.filter = "brightness(100%)";
    about.style.filter = "brightness(100%)";
    teaching.style.filter = "brightness(100%)";
    testimony.style.filter = `brightness(${brilho_inpage}%)`;
    performances.style.filter = "brightness(100%)";
    resources.style.filter = "brightness(100%)";
    contact.style.filter = "brightness(100%)";

    const Title = document.createElement('p');
    Title.classList.add("title", "teachingTitle");
    Title.id = "testimony-page-title-mobile";
    Title.innerText = "Students & Parents Stories"; 
    Title.style.position = "relative";
    Title.style.marginTop = "clamp(30px, 2vw, 60px)";
    Title.style.marginBottom = "clamp(30px, 2vw, 60px)";
    Title.style.textAlign = "center";
    Title.style.width = "100%";

    // carousel vs carrossel vs carrocel vs karrosel vs carroçel ????
    const carouselContainer = document.createElement('div');
    carouselContainer.classList.add('carousel-container');

    // prev
    const prevBtn = document.createElement('button');
    prevBtn.classList.add('carousel-btn', 'prev-btn');
    prevBtn.innerHTML = '&#10094;'; // simbolo seta esquerda

    // next
    const nextBtn = document.createElement('button');
    nextBtn.classList.add('carousel-btn', 'next-btn');
    nextBtn.innerHTML = '&#10095;'; // simbolo seta direita

    // area slide
    const track = document.createElement('div');
    track.classList.add('carousel-track');

    // -----------------------------------------------------
    // --- DADOS DOS DEPOIMENTOS (DICIONARIO PARA ADICIONAR MAIS) ---
    // -----------------------------------------------------

    const testimonials = [
        {
            type: 'image',
            src: 'src/testimony1.jpeg',
            caption: 'Results and progress celebration'
        },
        {
            type: 'video', // ID = 78R6PEUmLVg
            src: 'https://www.youtube.com/embed/78R6PEUmLVg', 
            caption: 'Student Performance'
        },
        {
            type: 'video', // ID = 7QmB36bMFYM
            src: 'https://www.youtube.com/embed/7QmB36bMFYM',
            caption: 'Lesson Moments'
        }
    ];

    // gera slides dinamicamente, a partir do dicionário
    testimonials.forEach((item) => {
        const slide = document.createElement('div');
        slide.classList.add('carousel-slide');

        let content;
        if (item.type === 'image') {
            content = document.createElement('img');
            content.src = item.src;
            content.alt = "Testimonial Image";
            content.classList.add('testimonial-media');
        } else if (item.type === 'video') {
            content = document.createElement('iframe');
            content.src = item.src;
            content.classList.add('testimonial-media');
            content.setAttribute('allowfullscreen', '');
            content.setAttribute('frameborder', '0');
        }

        const caption = document.createElement('p');
        caption.classList.add('testimonial-caption');
        caption.innerText = item.caption;

        slide.appendChild(content);
        slide.appendChild(caption);
        track.appendChild(slide);
    });

    // HTML
    carouselContainer.appendChild(prevBtn);
    carouselContainer.appendChild(track);
    carouselContainer.appendChild(nextBtn);

    main.appendChild(Title);
    main.appendChild(carouselContainer);

    // LÓGICA DO CARROSSEL
    let currentIndex = 0;
    const slides = track.children;
    const totalSlides = slides.length;

    function updateCarousel() {
        // faz update do track e move pra mostrar o slide atual
        track.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    nextBtn.addEventListener('click', () => {
        // loop infinito com aritmética modular (AAAAAAAAAAAAA EUGÊNIO MASSA)
        currentIndex = (currentIndex + 1) % totalSlides; 
        updateCarousel();
    });

    prevBtn.addEventListener('click', () => {
        // mesma coisa só que ao contrário (AAAAAA n = a => n = a + kd em Z_d AAAAAAA)
        currentIndex = (currentIndex - 1 + totalSlides) % totalSlides; 
        updateCarousel();
    });
}

function carregarPerformance()
{
    document.body.style.backgroundImage = 'url("src/fundo2.png")'; 
    main.innerHTML = ""; 

    home.style.filter = "brightness(100%)";
    about.style.filter = "brightness(100%)";
    teaching.style.filter = "brightness(100%)";
    testimony.style.filter = "brightness(100%)";
    performances.style.filter = `brightness(${brilho_inpage}%)`;
    resources.style.filter = "brightness(100%)";
    contact.style.filter = "brightness(100%)";

    // BANCO DE DADOS (vídeos são guardados apenas pelo ID)
    const performanceData = [
        {
            category: "Solo Performance",
            videos: [
                { title: "Bach Chaconne", id: "zXkzvv1f2Z0" },
                { title: "Ao pé da fogueira", id: "VY8s_PICtp4" },
                { title: "Sibelius Violin Concert", id: "N39Hwb2t_NA" },
                { title: "Mozart Violin Concert 5", id: "DmWlUAtysk0" }
            ]
        },
        {
            category: "Duo: Violin & Piano",
            videos: [
                { title: "Brahms Sonata", id: "Twm0qu5SP_U" }
            ]
        },
        {
            category: "Duo: Viola & Piano",
            videos: [
                { title: "Glinka Sonata", id: "JjldyF-TeVk" }
            ]
        },
        {
            category: "String Quartet",
            videos: [
                { title: "Shostakovsky", id: "R1raSWDB710" }
            ]
        }
    ];

    let currentCategoryIndex = 0;

    // ESTRUTURA DOM
    
    // container principal navegação (título + setas)
    const navContainer = document.createElement('div');
    navContainer.className = 'perf-nav-container';

    const prevBtn = document.createElement('button');
    prevBtn.className = 'perf-nav-btn';
    prevBtn.innerHTML = '&#10094;'; // Seta esquerda

    const categoryTitle = document.createElement('div');
    categoryTitle.className = 'perf-category-title';
    categoryTitle.innerText = performanceData[0].category;

    const nextBtn = document.createElement('button');
    nextBtn.className = 'perf-nav-btn';
    nextBtn.innerHTML = '&#10095;'; // Seta direita

    navContainer.appendChild(prevBtn);
    navContainer.appendChild(categoryTitle);
    navContainer.appendChild(nextBtn);

    // container dos vídeos (Grid)
    const videoGrid = document.createElement('div');
    videoGrid.className = 'perf-video-grid';

    function renderVideos() {
        videoGrid.innerHTML = ''; 
        const currentData = performanceData[currentCategoryIndex];
        
        //atualiza título com animação simples
        categoryTitle.style.opacity = 0;
        setTimeout(() => {
            categoryTitle.innerText = currentData.category;
            categoryTitle.style.opacity = 1;
        }, 200);

        // cria cards
        currentData.videos.forEach(video => {
            const card = document.createElement('div');
            card.className = 'perf-video-card';
            
            // thumbnail
            const thumbUrl = `https://img.youtube.com/vi/${video.id}/hqdefault.jpg`;
            
            card.innerHTML = `
                <div class="video-thumb-container">
                    <img src="${thumbUrl}" alt="${video.title}">
                    <div class="play-icon">▶</div>
                </div>
                <p>${video.title}</p>
            `;

            card.addEventListener('click', () => openVideoModal(video.id));
            
            videoGrid.appendChild(card);
        });
    }

    // navegação
    prevBtn.addEventListener('click', () => {
        currentCategoryIndex = (currentCategoryIndex - 1 + performanceData.length) % performanceData.length;
        renderVideos();
    });

    nextBtn.addEventListener('click', () => {
        currentCategoryIndex = (currentCategoryIndex + 1) % performanceData.length;
        renderVideos();
    });

    function openVideoModal(videoId) {
        // cria o modal se não existir, ou limpa se existir
        let modal = document.getElementById('video-modal');
        if (!modal) {
            modal = document.createElement('div');
            modal.id = 'video-modal';
            modal.className = 'video-modal';
            document.body.appendChild(modal);
            
            // close click out
            modal.addEventListener('click', (e) => {
                if (e.target === modal) closeVideoModal();
            });
        }

        modal.innerHTML = `
            <div class="video-modal-content">
                <span class="video-close-btn">&times;</span>
                <iframe 
                    width="100%" 
                    height="100%" 
                    src="https://www.youtube.com/embed/${videoId}?autoplay=1" 
                    title="YouTube video player" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen>
                </iframe>
            </div>
        `;

        setTimeout(() => modal.classList.add('active'), 10);
        
        modal.querySelector('.video-close-btn').addEventListener('click', closeVideoModal);
    }

    function closeVideoModal() {
        const modal = document.getElementById('video-modal');
        if (modal) {
            modal.classList.remove('active');
            // limpar o HTML para parar o som do vídeo
            setTimeout(() => modal.innerHTML = '', 300);
        }
    }

    main.appendChild(navContainer);
    main.appendChild(videoGrid);
    renderVideos();
}

function carregarGroupClass() {
    document.body.style.backgroundImage = 'url("src/fundo2.png")';
    main.innerHTML = "";

    home.style.filter = "brightness(100%)";
    about.style.filter = "brightness(100%)";
    teaching.style.filter = "brightness(100%)";
    testimony.style.filter = "brightness(100%)";
    performances.style.filter = "brightness(100%)";
    resources.style.filter = `brightness(${brilho_inpage}%)`;
    contact.style.filter = "brightness(100%)";

    const Video = document.createElement("iframe");
    Video.src = "https://www.youtube.com/embed/cfHJ5AWJ6Kw?autoplay=1";
    Video.id="ytvideo2";
    Video.style.boxShadow = "0 3px 5px rgb(0,0,0,0.4)"; 

    const Artc = document.createElement("article");
    Artc.style.position = "fixed";
    Artc.style.top = "130px";
    Artc.style.left = "14vw";
    Artc.style.width = "33vw";
    Artc.style.minWidth = "200px";

    const Title = document.createElement('p');
    Title.classList.add("title","slideLeftRightTitle");
    Title.innerText = "Group Class";

    const Aboutmedescrp = document.createElement('p');
    Aboutmedescrp.classList.add('description');
    Aboutmedescrp.style.paddingTop = "20px";
    Aboutmedescrp.innerText = `
        Group violin lessons offer so much more than just learning to play notes together—they create a joyful and supportive environment where children grow in confidence, cooperation, and musicality. When students play side by side, they build a strong sense of teamwork, learn to listen closely, and develop a natural understanding of rhythm and pulse.
        In group settings, kids encourage one another, celebrate progress as a community, and learn that music is a shared emotional experience. These moments help shape not only great musicians but also empathetic, focused, and confident individuals.
    `;

    main.appendChild(Video);
    main.appendChild(Artc);
    Artc.appendChild(Title);
    Artc.appendChild(Aboutmedescrp);
}

function carregarViolinLesson() {
    document.body.style.backgroundImage = 'url("src/fundo2.png")';
    main.innerHTML = "";

    home.style.filter = "brightness(100%)";
    about.style.filter = "brightness(100%)";
    teaching.style.filter = "brightness(100%)";
    testimony.style.filter = "brightness(100%)";
    performances.style.filter = "brightness(100%)";
    resources.style.filter = `brightness(${brilho_inpage}%)`;
    contact.style.filter = "brightness(100%)";

    const Video = document.createElement("video");
    Video.src = "src/virtual_lessons.mp4";
    Video.classList.add("video");
    Video.controls = true;

    Video.style.width = "42%";
    Video.style.position = "fixed";
    Video.style.top = "50%";
    Video.style.left = "50%";
    Video.style.transform = "translateY(-45%)";

    const Artc = document.createElement("article");
    Artc.style.position = "fixed";
    Artc.style.top = "160px";
    Artc.style.left = "10vw";
    Artc.style.width = "33vw";
    Artc.style.minWidth = "200px";

    const Title = document.createElement('p');
    Title.classList.add("title","slideLeftRightTitle");
    Title.innerText = "Violin Lesson virtual";
    Title.style.fontSize = "clamp(20px,3vw,3vw)";

    const Aboutmedescrp = document.createElement('p');
    Aboutmedescrp.classList.add('description');
    Aboutmedescrp.style.paddingTop = "20px";
    Aboutmedescrp.innerText = `
        Online violin lessons are a great way to introduce young children to music in a flexible and focused environment. With strong parent involvement and fun, age-appropriate activities, even 4-year-olds can develop coordination, listening skills, and confidence. Lessons build discipline, spark creativity, and keep learning consistent—no matter where you are.
        Music starts at home, and online learning makes it possible!
    `;

    main.appendChild(Video);
    main.appendChild(Artc);
    Artc.appendChild(Title);
    Artc.appendChild(Aboutmedescrp);
}

function carregarContato() {
    document.body.style.backgroundImage = 'url("src/fundo2.png")';
    main.innerHTML = "";

    home.style.filter = "brightness(100%)";
    about.style.filter = "brightness(100%)";
    teaching.style.filter = "brightness(100%)";
    testimony.style.filter = "brightness(100%)";
    performances.style.filter = "brightness(100%)";
    resources.style.filter = "brightness(100%)";
    contact.style.filter = `brightness(${brilho_inpage}%)`;

    const Contatos = document.createElement("article");
    Contatos.classList.add("containerGeralInfos");

    const Container1 = document.createElement("section");
    Container1.classList.add("containerInfo"); 
    Container1.innerHTML = `
        <p class="containerSubtitle">Social Media</p>
        <figure class="redeSocial">
            <img class="logo" src="src/youtube_logo.png">
            <figcaption class="textoredesocial">Dario Oliveira - Youtube</figcaption>
        </figure>
        <figure class="redeSocial">
            <img class="logo" src="src/facebook_logo.png">
            <figcaption class="textoredesocial">Facebook - Dario Oliveira Santos</figcaption>
        </figure>
        <figure class="redeSocial">
            <img class="logo" src="src/instagram_logo.png">
            <figcaption class="textoredesocial">Educando.o.talento - Instagram</figcaption>
        </figure>
    `;

    const Container2 = document.createElement("section");
    Container2.classList.add("containerInfo"); 
    Container2.innerHTML = `
        <p class="containerSubtitle">Services List</p>
        <figcaption class="textoredesocial">Individual Lessons</figcaption>
        <figcaption class="textoredesocial">Group Lessons</figcaption>
        <figcaption class="textoredesocial">Virtual Lessons</figcaption>
        <figcaption class="textoredesocial">Chamber Collaboration</figcaption>
        <figcaption class="textoredesocial">Violin/Viola Orchestra</figcaption>
    `;

    const Container3 = document.createElement("section");
    Container3.classList.add("containerInfo"); 
    Container3.innerHTML = `
    <div class="contentWrapper">
        <p class="containerSubtitle">Phone Number</p>
        <figcaption id="phoneNumber" class="textoredesocial">+1 (901) 679-0094</figcaption>
    </div>
    `;

    main.appendChild(Contatos);
    Contatos.appendChild(Container1);
    Contatos.appendChild(Container2);
    Contatos.appendChild(Container3);

    const YT = document.getElementsByClassName("redeSocial")[0];
    const FB = document.getElementsByClassName("redeSocial")[1];
    const INSTA = document.getElementsByClassName("redeSocial")[2];

    YT.addEventListener("click",()=> {
        window.open("https://www.youtube.com/@darioliveira.violin","_blank");
    });
    FB.addEventListener("click",()=> {
        window.open("https://www.associacaomusicalsuzuki.com.br/member/dario-oliveira-santos/","_blank");
    });
    INSTA.addEventListener("click",()=> {
        window.open("https://www.instagram.com/educando.o.talento/","_blank");
    });
}

home.addEventListener('click', carregarHome);
about.addEventListener('click', carregarAboutme);
testimony.addEventListener('click', carregarTestimony);
performances.addEventListener('click', carregarPerformance);
contact.addEventListener('click', carregarContato);

//ABA EXTRA (contato)
const contactFooter = document.createElement('div');
contactFooter.id = 'contact-footer';
contactFooter.textContent = 'for website problems or suggestions, contact: erikmschung@usp.br';
document.body.appendChild(contactFooter);

function isContactVisible() {
    const contactSection = document.getElementById('contact');
    if (!contactSection) return false;

    const rect = contactSection.getBoundingClientRect();
    return rect.top < window.innerHeight && rect.bottom > 0;
}

document.addEventListener('mousemove', (e) => {
    const fromBottom = window.innerHeight - e.clientY;

    if (isContactVisible() && fromBottom < 100) {
        contactFooter.classList.add('visible');
    } else {
        contactFooter.classList.remove('visible');
    }
});

/*
=====================
LÓGICA DO MENU MOBILE
===================== */

const mobileBtn = document.getElementById('mobile-menu-btn');
const sidebar = document.getElementById('mobile-sidebar');
const closeBtn = document.getElementById('close-sidebar');
const backdrop = document.getElementById('overlay-backdrop');
const submenus = document.querySelectorAll('.has-submenu');

// abrir o menu mobile
function openMenu() {
    sidebar.classList.add('open');
    backdrop.classList.add('active');
}

// fechar o menu mobile
function closeMenu() {
    sidebar.classList.remove('open');
    backdrop.classList.remove('active');
}

// event Listeners
if(mobileBtn) mobileBtn.addEventListener('click', openMenu);
if(closeBtn) closeBtn.addEventListener('click', closeMenu);
if(backdrop) backdrop.addEventListener('click', closeMenu);
// ia botar a tecla "esc" mas eu lembrei que isso só apareceria pra usuários mobile...

// lógica para abrir/fechar submenus (Teaching/Resources) dentro do menu lateral
// "empurra" o resto ("insert" numa lista)
submenus.forEach(link => {
    link.addEventListener('click', () => {
        const menu = link.nextElementSibling;
        menu.classList.toggle('show-submenu');
        // Muda a setinha (opcional)
        link.textContent = link.textContent.includes('▾') 
            ? link.textContent.replace('▾', '▴') 
            : link.textContent.replace('▴', '▾');
    });
});

// função auxiliar: navegar (ir para página clicada) e fechar o menu automaticamente
// função chamada no HTML: onclick="triggerMobileNav('carregarHome')"
function triggerMobileNav(functionName) {   
    // função global existente (todas as funções estão num "array" window, DOM/heritage stuff and shit) (ex: carregarHome())
    if (typeof window[functionName] === "function") {
        window[functionName]();
    }
    // fecha o menu mobile
    closeMenu();
}