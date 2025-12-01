let brilho_inpage = 70; // referência apenas, CSS Controla 

function carregarHome() {
    body.style.backgroundImage = `url("src/fundo.png")`;
    main.innerHTML = '';
    
    // brilho goes brrrr
    updateNavHighlight('home');

    const Img = document.createElement("img");
    Img.id = "dario";
    Img.src = "src/dario.png";
    Img.classList.add('imagem', 'dario');

    const Artc = document.createElement("article");
    Artc.style.marginTop = "13vh";
    Artc.style.marginTop = "13dvh";
    Artc.innerHTML = `
        <p id="intro">Welcome To</p>
        <p id="name">Dario Oliveira</p>
        <p id="frase">Music for life: performing, teaching and inspiring</p>
    `;

    const nextBtn = createNextButton('carregarHome');
    if(nextBtn) Artc.appendChild(nextBtn);

    main.appendChild(Img);
    main.appendChild(Artc);
}

function carregarAboutme() {
    document.body.style.backgroundImage = 'url("src/fundo2.png")';
    main.innerHTML = "";
    updateNavHighlight('about');

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
    Aboutmedescrp.innerText = `I’m Dario Oliveira Santos — violinist, violist, and passionate Suzuki educator dedicated to inspiring students and audiences through the power of music. With roots in Brazil and a journey that spans concert halls, classrooms, and communities across Brazil and the United States, my mission is simple: to share music that speaks to the soul and to nurture the next generation of musicians with heart, discipline, and joy. This space is a reflection of my life in music — a place where performance and pedagogy meet.`;

    // ADICIONANDO BOTÃO NEXT AUTOMÁTICO UHUL SO COOL
    const nextBtn = createNextButton('carregarAboutme');
    
    main.appendChild(Artc);
    main.appendChild(Img);
    Artc.appendChild(Title);
    Artc.appendChild(Aboutmedescrp);
    
    // nas páginas com article, o botão vai dentro do article para alinhar
    // sem gambiarra de position fixed 
    if(nextBtn) Artc.appendChild(nextBtn);
}

function carregarTeachingPhy() {
    document.body.style.backgroundImage = 'url("src/fundo2.png")';
    main.innerHTML = "";
    updateNavHighlight('teaching');

    const Img = document.createElement("img");
    Img.src = "src/dario3.png";
    Img.classList.add('imagem','dario2');

    const Artc = document.createElement("article");
    Artc.style.position = "fixed";
    Artc.style.top = "18vh";
    Artc.style.left = "10vw";
    Artc.style.width = "43vw";
    Artc.style.minWidth = "200px";

    const Title = document.createElement('p');
    Title.classList.add("title","slideLeftRightTitle");
    Title.innerText = "Philosophy";

    const Philosophy = document.createElement('p');
    Philosophy.classList.add('description');
    Philosophy.innerText = `I believe every child can learn music with the right support, consistency, and encouragement. Rooted in the Suzuki Method and Paul Rolland’s String Pedagogy, my teaching approach nurtures confidence, focus, discipline, and joy in each student.
        Through small, achievable steps and healthy, tension-free movement, students develop strong technique, musical expression, and a lifelong love for music. Parental involvement and community support are key—together, we create a learning environment where children thrive.`;

    const Quotes = document.createElement('p');
    Quotes.classList.add('description');
    Quotes.id = "frase2";
    Quotes.style.fontStyle = "italic";
    Quotes.style.color = "white";
    Quotes.style.fontSize = "clamp(10px, min(1.4vmax, 3vmin), 1.5vmax)";
    Quotes.style.margin = 0;
    Quotes.style.padding = "2vh 0";
    Quotes.innerText = `
        "Tell me and I forget.
        Teach me and I remember.
        Involve me and I learn."
    `;

    // NEXT BTN AUTO MÁTICO YAY
    const nextBtn = createNextButton('carregarTeachingPhy');
    nextBtn.style.marginTop = "max(1.1vh,1rem)";

    main.appendChild(Artc);
    main.appendChild(Img);
    Artc.appendChild(Title);
    Artc.appendChild(Philosophy);
    Artc.appendChild(Quotes);
    if(nextBtn) Artc.appendChild(nextBtn);
}

function carregarSuzukiTriangle() {
    document.body.style.backgroundImage = 'url("src/fundo2.png")';
    main.innerHTML = "";
    updateNavHighlight('teaching');

    const Video = document.createElement("iframe");
    Video.src = "https://www.youtube.com/embed/78R6PEUmLVg?autoplay=1"; 
    Video.id = "ytvideo2";
    Video.style.boxShadow = "0 3px 5px rgb(0,0,0,0.4)"; 

    const Artc = document.createElement("article");
    Artc.style.position = "fixed";
    Artc.style.left = "14vw";
    Artc.style.width = "33vw";
    Artc.style.minWidth = "200px";

    const Title = document.createElement('p');
    Title.classList.add("title", "slideLeftRightTitle");
    Title.id = "triangle-title";
    Title.innerText = "The Suzuki Triangle";
    Title.style.whiteSpace = "nowrap";
    Title.style.overflowX = "visible";
    Title.style.fontSize = "clamp(3rem, min(10vmin, 5.5vmax),75px)"

    const TriangleDesc = document.createElement('p');
    TriangleDesc.classList.add('description');
    TriangleDesc.innerText = `
    At the heart of the Suzuki Method lies the "Suzuki Triangle": the Student, the Teacher, and the Parent. Just as a triangle relies on a strong base to support its peak, a child's musical success depends on the cooperative relationship between the teacher and the parents.
        
    While the teacher guides the path, the parent creates the nurturing environment at home—attending lessons, taking notes, and encouraging daily practice. Together, we build a foundation of love, discipline, and support, ensuring the student thrives not just as a musician, but as a confident individual.
    `;
    
    // NEXT BTN yay
    const nextBtn = createNextButton('carregarSuzukiTriangle');

    main.appendChild(Video);
    main.appendChild(Artc);
    Artc.appendChild(Title);
    Artc.appendChild(TriangleDesc);
    if(nextBtn) Artc.appendChild(nextBtn);
}

function carregarTeachingPriorities() {
    document.body.style.backgroundImage = 'url("src/fundo2.png")';
    main.innerHTML = "";
    updateNavHighlight('teaching');

    const Title = document.createElement('p');
    Title.classList.add("title","teachingTitle");
    Title.innerText = "Teaching Overview";
    Title.style.position = "fixed";
    Title.style.top = "20vh";
    Title.style.marginLeft = "auto";
    Title.style.minWidth = "360px";
    Title.style.height = "3vh";

    const Video = document.createElement('iframe');
    Video.id = "ytvideo";
    Video.src = "https://www.youtube.com/embed/N-CMq8Anfug?autoplay=1";
    Video.classList.add("video");
    Video.style.boxShadow = "0 3px 5px rgb(0,0,0,0.4)"; 

    main.appendChild(Title);
    main.appendChild(Video);
    
    // NEXT BTN
    const nextBtn = createNextButton('carregarTeachingPriorities');
    if(nextBtn) {
        const btnContainer = document.createElement('div');
        btnContainer.className = 'center-btn-container';
        btnContainer.id = 'btn-container-overview';
        // Ajuste fino para não sobrepor o vídeo fixo no Desktop
        // vídeo é fixed => botão precisa ser fixed OU ter um posicionamento esperto (o que com certeza não tem)
        // ent whatever, fixed
        btnContainer.style.position = "fixed";
        btnContainer.style.bottom = "80px";
        btnContainer.style.left = "0";
        
        btnContainer.appendChild(nextBtn);
        main.appendChild(btnContainer);
    }
}

function carregarGroupClass() {
    document.body.style.backgroundImage = 'url("src/fundo2.png")';
    main.innerHTML = "";
    updateNavHighlight('teaching');

    const Video = document.createElement("iframe");
    Video.src = "https://www.youtube.com/embed/cfHJ5AWJ6Kw?autoplay=1";
    Video.id="ytvideo2";
    Video.style.aspectRatio = "16/9";
    Video.style.width = "38vw";
    Video.style.left = "53%";
    
    const Artc = document.createElement("article");
    Artc.style.position = "fixed";
    Artc.style.top = "130px";
    Artc.style.left = "14vw";
    Artc.style.width = "33vw";
    Artc.style.minWidth = "200px";
    
    const Title = document.createElement('p');
    Title.classList.add("title","slideLeftRightTitle");
    Title.innerText = "Group Class";
    Title.style.whiteSpace = "nowrap";
    Title.style.overflowX = "visible";

    const Aboutmedescrp = document.createElement('p');
    Aboutmedescrp.classList.add('description');
    Aboutmedescrp.style.paddingTop = "20px";
    Aboutmedescrp.innerText = `
        Group violin lessons offer so much more than just learning to play notes together—they create a joyful and supportive environment where children grow in confidence, cooperation, and musicality. When students play side by side, they build a strong sense of teamwork, learn to listen closely, and develop a natural understanding of rhythm and pulse.
        In group settings, kids encourage one another, celebrate progress as a community, and learn that music is a shared emotional experience. These moments help shape not only great musicians but also empathetic, focused, and confident individuals.
    `;    
    // btn next
    Artc.appendChild(Title);
    Artc.appendChild(Aboutmedescrp);
    
    const nextBtn = createNextButton('carregarGroupClass');
    if(nextBtn) Artc.appendChild(nextBtn);
    
    main.appendChild(Video);
    main.appendChild(Artc);
}

function carregarViolinLesson() {
    document.body.style.backgroundImage = 'url("src/fundo2.png")';
    main.innerHTML = "";
    updateNavHighlight('teaching');

    const Video = document.createElement("iframe");
    Video.src = "https://www.youtube.com/embed/60UDYMsMdKM?autoplay=1";
    Video.classList.add("video");
    Video.style.aspectRatio = "16/9";
    Video.style.position = "fixed";
    Video.style.top = "50%";
    Video.style.left = "50%";
    Video.style.transform = "translateY(-45%)";

    const Artc = document.createElement("article");
    Artc.style.position = "fixed";
    Artc.style.top = "19vh";
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
        Virtual lessons have proven to be a powerful tool for serious musical development, bridging the gap between distance and high-level training. As seen here with Kreisler's "Preludium and Allegro", online instruction allows for precise work on advanced techniques, tone production, and artistic phrasing.
        
        Whether preparing for college auditions or refining complex repertoire, the screen is no barrier to detail. Through focused listening and clear demonstration, we ensure that advanced students receive the depth of guidance needed to reach professional standards from anywhere in the world.
    `;
    
    main.appendChild(Artc);
    Artc.appendChild(Title);
    Artc.appendChild(Aboutmedescrp);

    const nextBtn = createNextButton('carregarViolinLesson');
    if(nextBtn) Artc.appendChild(nextBtn);

    main.appendChild(Video);
}

function carregarTestimony() {
    document.body.style.backgroundImage = 'url("src/fundo2.png")';
    main.innerHTML = "";
    
    updateNavHighlight('teaching');

    const carouselContainer = document.createElement('div');
    carouselContainer.classList.add('carousel-container');

    // página sem título, carrossel ocupa um pouco mais de espaço vertical
    carouselContainer.style.marginTop = "clamp(10px, 2vh, 50px)"; 

    const prevBtn = document.createElement('button');
    prevBtn.classList.add('carousel-btn', 'prev-btn');
    prevBtn.innerHTML = '&#10094;';

    const nextBtn = document.createElement('button');
    nextBtn.classList.add('carousel-btn', 'next-btn');
    nextBtn.innerHTML = '&#10095;';

    const track = document.createElement('div');
    track.classList.add('carousel-track');
    
    const testimonials = [
        {
            type: 'image',
            src: 'src/testimony1.jpeg',
            title: 'Breaking Personal Records',
            desc: `Success is best measured by personal growth. In this text, a student celebrates a massive leap in their ranking—moving from the 40th chair in previous years to the 19th chair this season! 
            
            This moment captures the pure excitement of realizing that with the right guidance and structured practice, a student can transform their results and move from the bottom tier straight into the top half of the division.`,
            caption: 'Student celebrating a huge jump in ranking'
        },
        {
            type: 'video', 
            src: 'https://www.youtube.com/embed/7QmB36bMFYM', 
            title: 'Will\'s Achievement',
            desc: `Meet Will, a dedicated student who has been working hard for three months on his audition repertoire. 
            In this video, he shares the exciting news of passing the "All-West" auditions for the first time—a prestigious regional recognition for young musicians.
            His smile says it all: discipline and consistency truly pay off!`,
            caption: 'Student Will celebrating his audition results'
        },
        {
            type: 'image',
            src: 'src/erik.jpg',
            title: 'A Tribute in Code',
            desc: `I am currently a Computer Science student at USP, but my journey with Dario began way back when I was just 10 years old. This website is more than a portfolio; it is a gesture of gratitude for his incredible humility, skill, and kindness over the years.

            Dario doesn't just teach the violin; he builds character. Creating this platform was my way of honoring his professionalism and the profound impact he has had on my life, bridging my two passions: technology and music.`,
            caption: 'Erik, student since age 10 & Creator of this website'
        }
    ];

    testimonials.forEach((item) => {
        const slide = document.createElement('div');
        slide.classList.add('carousel-slide');

        const textWrapper = document.createElement('div');
        textWrapper.className = 'slide-text-content';
        textWrapper.innerHTML = `
            <div class="slide-title">${item.title}</div>
            <div class="slide-desc">${item.desc}</div>
        `;

        const mediaWrapper = document.createElement('div');
        mediaWrapper.className = 'slide-media-wrapper';

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

        mediaWrapper.appendChild(content);
        mediaWrapper.appendChild(caption);

        slide.appendChild(textWrapper);
        slide.appendChild(mediaWrapper);
        track.appendChild(slide);
    });

    carouselContainer.appendChild(prevBtn);
    carouselContainer.appendChild(track);
    carouselContainer.appendChild(nextBtn);

    main.appendChild(carouselContainer);

    // CARROSSEL 
    let currentIndex = 0;
    const slides = track.children;
    const totalSlides = slides.length;

    function updateCarousel() {
        track.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    function moveNext() {
        currentIndex = (currentIndex + 1) % totalSlides; 
        updateCarousel();
    }

    function movePrev() {
        currentIndex = (currentIndex - 1 + totalSlides) % totalSlides; 
        updateCarousel();
    }

    nextBtn.addEventListener('click', moveNext);
    prevBtn.addEventListener('click', movePrev);

    if (window.carouselKeysParams) {
        document.removeEventListener('keydown', window.carouselKeysParams);
    }

    window.carouselKeysParams = function(e) {
        if(!document.querySelector('.carousel-container')) return; 
        if (e.key === 'ArrowLeft') movePrev();
        else if (e.key === 'ArrowRight') moveNext();
    };

    document.addEventListener('keydown', window.carouselKeysParams);
    
    const nextPageBtn = createNextButton('carregarTestimony');
    if(nextPageBtn) {
        const btnContainer = document.createElement('div');
        btnContainer.className = 'center-btn-container';
        btnContainer.appendChild(nextPageBtn);
        main.appendChild(btnContainer);
    }
}

function carregarTeacherPerformance() {
    document.body.style.backgroundImage = 'url("src/fundo2.png")'; 
    main.innerHTML = ""; 
    updateNavHighlight('performance');
    
    // do professor
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
            category: "Chamber Music Colaboration",
            videos: [
                { title: "Shostakovsky", id: "R1raSWDB710" }
            ]
        }
    ];

    renderPerformanceLayout(performanceData, "carregarTeacherPerformance");
}

function carregarStudentPerformance() {
    document.body.style.backgroundImage = 'url("src/fundo2.png")'; 
    main.innerHTML = ""; 
    updateNavHighlight('teaching');

    // dos alunos
    const performanceData = [
        {
            category: "Suzuki Book 1",
            videos: [
                { title: "Song of the Wind", id: "g-PaVs7ylhQ" }
            ]
        },
        {
            category: "Suzuki Book 2",
            videos: [
                { title: "Lully Gavotte", id: "MYWg_9Jeq78" }
            ]
        },
        {
            category: "Suzuki Book 3",
            videos: [
                { title: "Martini Gavotte", id: "QOfIk_hic_w" }
            ]
        },
        {
            category: "Suzuki Book 4",
            videos: [
                { title: "Seitz Violin Concerto No.5 3rd Mov", id: "OZ7m3hQGLh8" },
                { title: "Vivaldi Violin Concerto in a minor 1st mov", id: "b9bsJYeA8ig" }
            ]
        },
        {
            category: "Christian Congregation Hymns",
            videos: [
                { title: "Hymn 454", id: "iV2lY_uva4k" }
            ]
        },
        {
            category: "Advanced Repertoire",
            videos: [
                { title: "Preludium and Allegro - Kreisler", id: "k3SyYrq9-MI" },
                { title: "Allemande - Bach", id: "ETHPo_FJrg8" }
            ]
        },
        {
            category: "Online Recital",
            videos: [
                { title: "Online Recital", id: "HChaHqykWaI" }
            ]
        }
    ];

    renderPerformanceLayout(performanceData, "carregarStudentPerformance");
}

function carregarContato() {
    document.body.style.backgroundImage = 'url("src/fundo2.png")';
    main.innerHTML = "";
    updateNavHighlight('contact');

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

    const Container3 = document.createElement("section");
    Container3.classList.add("containerInfo"); 
    Container3.innerHTML = `
    <div class="contentWrapper">
        <p class="containerSubtitle">E-mail</p>
        <figcaption id="phoneNumber" class="textoredesocial">dario.violino.santos@gmail.com</figcaption>
    </div>
    `;

    main.appendChild(Contatos);
    Contatos.appendChild(Container1);
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

    // sem next button (última página)
}


function renderPerformanceLayout(data, currentFuncName) {
    let currentCategoryIndex = 0;

    // container título
    const navContainer = document.createElement('div');
    navContainer.className = 'perf-nav-container';

    const categoryTitle = document.createElement('div');
    categoryTitle.className = 'perf-category-title';
    categoryTitle.innerText = data[0].category;

    navContainer.appendChild(categoryTitle);

    // container vídeos
    const videoGrid = document.createElement('div');
    videoGrid.className = 'perf-video-grid';

    // container botões
    const btnContainer = document.createElement('div');
    btnContainer.className = 'perf-buttons-container';

    const prevBtn = document.createElement('button');
    prevBtn.className = 'perf-nav-btn';
    prevBtn.innerHTML = '&#10094;'; 

    const nextBtn = document.createElement('button');
    nextBtn.className = 'perf-nav-btn';
    nextBtn.innerHTML = '&#10095;'; 

    btnContainer.appendChild(prevBtn);
    btnContainer.appendChild(nextBtn);

    function renderVideos() {
        videoGrid.innerHTML = ''; 
        const currentData = data[currentCategoryIndex];
        
        categoryTitle.style.opacity = 0;
        setTimeout(() => {
            categoryTitle.innerText = currentData.category;
            categoryTitle.style.opacity = 1;
        }, 200);

        currentData.videos.forEach(video => {
            const card = document.createElement('div');
            card.className = 'perf-video-card';
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

    prevBtn.addEventListener('click', () => {
        currentCategoryIndex = (currentCategoryIndex - 1 + data.length) % data.length;
        renderVideos();
    });

    nextBtn.addEventListener('click', () => {
        currentCategoryIndex = (currentCategoryIndex + 1) % data.length;
        renderVideos();
    });

    // inicialização
    main.appendChild(navContainer);
    main.appendChild(videoGrid);
    main.appendChild(btnContainer);
    renderVideos();
    
    const nextPageBtn = createNextButton(currentFuncName);
    if(nextPageBtn) {
        const nextContainer = document.createElement('div');
        nextContainer.className = 'center-btn-container';
        nextContainer.style.marginBottom = "0";
        nextContainer.appendChild(nextPageBtn);
        main.appendChild(nextContainer);
    }
}

// função do modal NECESSÁRIO ESTAR ACESSÍVEL GLOBALMENTE
function openVideoModal(videoId) {
    let modal = document.getElementById('video-modal');
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'video-modal';
        modal.className = 'video-modal';
        document.body.appendChild(modal);
        modal.addEventListener('click', (e) => {
            if (e.target === modal) closeVideoModal();
        });
    }
    modal.innerHTML = `
        <div class="video-modal-content">
            <span class="video-close-btn">&times;</span>
            <iframe width="100%" height="100%" src="https://www.youtube.com/embed/${videoId}?autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    `;
    setTimeout(() => modal.classList.add('active'), 10);
    modal.querySelector('.video-close-btn').addEventListener('click', closeVideoModal);
}

function closeVideoModal() {
    const modal = document.getElementById('video-modal');
    if (modal) {
        modal.classList.remove('active');
        setTimeout(() => modal.innerHTML = '', 300);
    }
}