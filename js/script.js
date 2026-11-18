const armorDetails = {
    mark1: {
        badge: "MARK I",
        tag: "PROTÓTIPO",
        title: "A Origem na Caverna",
        material: "Placas de Ferro e Sucata",
        ai: "Manual / Analógica",
        desc: "Construída secretamente enquanto Tony Stark era mantido em cativeiro. Possuía um sistema motorizado bruto, lança-chamas nos braços e capacidade para um único salto estendido com propulsores rudimentares.",
        weapons: ["Lança-chamas duplo", "Lança-foguetes simples", "Blindagem pesada de ferro", "Propulsores de salto"]
    },
    mark3: {
        badge: "MARK III",
        tag: "CLÁSSICA",
        title: "Vermelho e Dourado",
        material: "Liga de Titânio-Ouro",
        ai: "J.A.R.V.I.S.",
        desc: "A primeira armadura a resolver o problema de congelamento em altas altitudes e a adotar o icônico esquema de cores. Integra completamente a IA J.A.R.V.I.S. ao capacete com HUD de combate.",
        weapons: ["Repulsores nas palmas", "Unibeam no peito", "Micro-mísseis de ombro", "Flares de despiste"]
    },
    mark5: {
        badge: "MARK V",
        tag: "PORTÁTIL",
        title: "Armadura Maleta",
        material: "Placas Flexíveis Articuladas",
        ai: "J.A.R.V.I.S.",
        desc: "Focada em mobilidade e emergências. Transforma-se em uma maleta de transporte fácil. Sacrifica espessura de blindagem e capacidade de voo prolongado em troca de rápida implantação.",
        weapons: ["Repulsores leves", "Montagem rápida em 18s", "Flexibilidade aumentada", "Sistema de emergência"]
    },
    mark44: {
        badge: "MARK XLIV",
        tag: "PESADA",
        title: "Hulkbuster",
        material: "Blindagem Composta Reforçada",
        ai: "VERONICA / J.A.R.V.I.S.",
        desc: "Uma plataforma modular gigante implantada a partir do satélite VERONICA. Projetada especificamente para suportar o confronto direto e conter a força física do Hulk.",
        weapons: ["Braços de martelo hidráulicos", "Peças de reposição aéreas", "Múltiplos Reatores Arc", "Lança-redes elétricas"]
    },
    mark46: {
        badge: "MARK XLVI",
        tag: "GUERRA CIVIL",
        title: "Armadura Articulada Tática",
        material: "Titânio-Ouro Dobrável",
        ai: "F.R.I.D.A.Y.",
        desc: "Usada durante o conflito com os Vingadores. Apresenta design totalmente retrátil no capacete e miniaturização de reatores Arc por toda a estrutura para resposta tática rápida.",
        weapons: ["10 Mini-reatores Arc", "Laser cortante integrado", "Sonar e visores térmicos", "Sistemas de imobilização"]
    },
    mark85: {
        badge: "MARK LXXXV",
        tag: "NANOTECH",
        title: "Nanotecnologia Suprema",
        material: "Nanobots de Titânio Líquido",
        ai: "F.R.I.D.A.Y.",
        desc: "A culminação de toda a tecnologia de Tony Stark. Capaz de se materializar instantaneamente, criar escudos de energia, lâminas térmicas e canalizar a energia de todas as Joias do Infinito.",
        weapons: ["Manopla Nano-integrada", "Escudos de energia de fótons", "Canhões de energia focada", "Lâminas e construções nano"]
    }
};

function openArmorModal(armorId) {
    const data = armorDetails[armorId];
    if (!data) return;

    document.getElementById('modalBadges').innerHTML = `
        <span class="stark-badge">${data.badge}</span>
        <span class="stark-tag">${data.tag}</span>
    `;
    
    document.getElementById('modalTitle').textContent = data.title;
    document.getElementById('modalMaterial').textContent = data.material;
    document.getElementById('modalAI').textContent = data.ai;
    document.getElementById('modalDescription').textContent = data.desc;

    const weaponsList = document.getElementById('modalWeapons');
    weaponsList.innerHTML = '';
    data.weapons.forEach(weapon => {
        const li = document.createElement('li');
        li.textContent = weapon;
        weaponsList.appendChild(li);
    });

    const overlay = document.getElementById('starkModalOverlay');
    overlay.classList.add('active');
}

function closeArmorModal() {
    const overlay = document.getElementById('starkModalOverlay');
    if (overlay) overlay.classList.remove('active');
}


document.getElementById('starkModalOverlay')?.addEventListener('click', function(e) {
    if (e.target === this) {
        closeArmorModal();
    }
});



function filterGallery(category, activeBtn) {
    const items = document.querySelectorAll('.gallery-item');
    const buttons = document.querySelectorAll('.filter-btn');


    buttons.forEach(btn => btn.classList.remove('active'));
    

    if (activeBtn) {
        activeBtn.classList.add('active');
    }


    items.forEach(item => {
        if (category === 'all' || item.getAttribute('data-category') === category) {
            item.style.display = 'flex';
        } else {
            item.style.display = 'none';
        }
    });
}

function openGalleryModal(imgSrc, title, desc) {
    const modalOverlay = document.getElementById('galleryModalOverlay');
    const modalImg = document.getElementById('galleryModalImg');
    const modalTitle = document.getElementById('galleryModalTitle');
    const modalDesc = document.getElementById('galleryModalDesc');

    if (modalImg) modalImg.src = imgSrc;
    if (modalTitle) modalTitle.innerText = title;
    if (modalDesc) modalDesc.innerText = desc;
    
    if (modalOverlay) modalOverlay.classList.add('active');
}

function closeGalleryModal() {
    const modalOverlay = document.getElementById('galleryModalOverlay');
    if (modalOverlay) modalOverlay.classList.remove('active');
}

window.addEventListener('click', function(event) {
    const modalOverlay = document.getElementById('galleryModalOverlay');
    if (event.target === modalOverlay && modalOverlay.id === 'galleryModalOverlay') {
        closeGalleryModal();
    }
});


document.addEventListener('DOMContentLoaded', () => {
    const videos = document.querySelectorAll('video');
    videos.forEach(videoAtual => {
        videoAtual.addEventListener('play', () => {
            videos.forEach(outroVideo => {
                if (outroVideo !== videoAtual) {
                    outroVideo.pause();
                }
            });
        });
    });
});