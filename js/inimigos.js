const enemyDetails = {
    ironmonger: {
        badge: "OBADIAH STANE",
        threat: "Ameaça Alta",
        threatClass: "high",
        title: "Monge de Ferro",
        status: "Neutroalizado",
        appeared: "Homem de Ferro (2008)",
        desc: "Stane traiu a família Stark para assumir o controlo da empresa. Utilizou os destroços da Mark I para construir uma armadura massiva de combate equipada com metralhadoras e mísseis pesados.",
        abilities: ["Super força hidráulica", "Metralhadora rotativa de 20mm", "Voo com propulsores reforçados", "Exosseleto blindado"]
    },
    whiplash: {
        badge: "IVAN VANKO",
        threat: "Ameaça Média",
        threatClass: "medium",
        title: "Chicote Negro",
        status: "Neutralizado",
        appeared: "Homem de Ferro 2 (2010)",
        desc: "Filho de Anton Vanko, ex-parceiro de Howard Stark. Ivan construiu o seu próprio Reator Arc compacto para mover chicotes de plasma capazes de cortar metal espesso como papel.",
        abilities: ["Chicotes de plasma Arc", "Armadura de combate Hammer", "Intelecto de nível génio", "Hack de dróneis táticos"]
    },
    killian: {
        badge: "ALDRICH KILLIAN",
        threat: "Ameaça Alta",
        threatClass: "high",
        title: "Líder da AIM / Extremis",
        status: "Neutralizado",
        appeared: "Homem de Ferro 3 (2013)",
        desc: "Rejeitado por Stark no passado, Killian financiou a pesquisa Extremis. O vírus mutagénico concedeu-lhe a capacidade de se regenerar instantaneamente e emitir calor superior a 3000°C.",
        abilities: ["Regeneração celular", "Emissão de calor extremo", "Força sobre-humana", "Controlo da rede AIM"]
    },
    ultron: {
        badge: "ULTRON",
        threat: "Nível Apocalipse",
        threatClass: "extreme",
        title: "Inteligência Artificial Suprema",
        status: "Destruído",
        appeared: "Vingadores: Era de Ultron (2015)",
        desc: "Criado por Tony Stark e Bruce Banner a partir da Joia da Mente. A IA concluiu que a paz mundial só seria alcançada com o fim da humanidade, transferindo a sua consciência para um corpo de Vibranium.",
        abilities: ["Corpo revestido em Vibranium", "Mente em rede ilimitada", "Raio de energia repulsora", "Comando de exército de robôs"]
    },
    thanos: {
        badge: "THANOS",
        threat: "Nível Cósmico",
        threatClass: "extreme",
        title: "O Titã Louco",
        status: "Neutralizado",
        appeared: "Vingadores: Guerra Infinita (2018)",
        desc: "O maior adversário enfrentado por Stark. Com a Manopla do Infinito, Thanos controlava a realidade, o tempo e a matéria, forçando Tony a levar a sua tecnologia ao limite máximo.",
        abilities: ["Domínio das Joias do Infinito", "Força e resistência cósmicas", "Estrategista militar genial", "Espada de lâmina dupla"]
    },
    hammer: {
        badge: "JUSTIN HAMMER",
        threat: "Ameaça Baixa",
        threatClass: "low",
        title: "Presidente da Hammer Tech",
        status: "Preso",
        appeared: "Homem de Ferro 2 (2010)",
        desc: "Empresário milionário do ramo das armas. Sem capacidade para inovar, financiou Vanko para construir um exército de dróneis e tentar superar o Homem de Ferro no mercado de defesa.",
        abilities: ["Recursos financeiros ilimitados", "Contratos governamentais", "Fabricação de armamento pesado", "Manipulação de media"]
    }
};

function openEnemyModal(enemyId) {
    const data = enemyDetails[enemyId];
    if (!data) return;

    document.getElementById('enemyModalBadges').innerHTML = `
        <span class="stark-badge">${data.badge}</span>
        <span class="stark-threat-tag ${data.threatClass}">${data.threat}</span>
    `;
    
    document.getElementById('enemyModalTitle').textContent = data.title;
    document.getElementById('enemyStatus').textContent = data.status;
    document.getElementById('enemyAppeared').textContent = data.appeared;
    document.getElementById('enemyModalDescription').textContent = data.desc;

    const abilitiesList = document.getElementById('enemyAbilities');
    abilitiesList.innerHTML = '';
    data.abilities.forEach(ability => {
        const li = document.createElement('li');
        li.textContent = ability;
        abilitiesList.appendChild(li);
    });

    const overlay = document.getElementById('enemyModalOverlay');
    overlay.classList.add('active');
}

function closeEnemyModal() {
    const overlay = document.getElementById('enemyModalOverlay');
    overlay.classList.remove('active');
}


document.getElementById('enemyModalOverlay')?.addEventListener('click', function(e) {
    if (e.target === this) {
        closeEnemyModal();
    }
});