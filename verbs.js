// ============================================
// VERB-KONJUGATION (A0 — DOAR Präsens) - Lecția 1: Alphabet
// Claudia Toth · A0 Fonetică (începători absoluți) · referință prezent
// La A0: NUMAI Präsens (Präteritum/Perfekt vin în A1+). Format simplificat.
// REGULĂ: NU backticks, NU ghilimele interne care rup template literal!
// ============================================

const verbsData = [
    {
        inf: 'heißen', ro: 'a se numi', praes: [
            ['ich','heiße','mă numesc'],['du','heißt','te numești'],['er/sie/es','heißt','se numește'],
            ['wir','heißen','ne numim'],['ihr','heißt','vă numiți'],['sie/Sie','heißen','se numesc']
        ],
        note: 'Radical în -ß → du heißt = er heißt (NU „heißst"). Primul verb la prezentare: „Ich heiße Andreea."'
    },
    {
        inf: 'buchstabieren', ro: 'a silabisi (a spune pe litere)', praes: [
            ['ich','buchstabiere','silabisesc'],['du','buchstabierst','silabisești'],['er/sie/es','buchstabiert','silabisește'],
            ['wir','buchstabieren','silabisim'],['ihr','buchstabiert','silabisiți'],['sie/Sie','buchstabieren','silabisesc']
        ],
        note: 'Verb în -ieren (regulat). „Wie buchstabiert man das?" = Cum se scrie pe litere?'
    }
];

function praesTable(rows) {
    let r = '';
    rows.forEach(function (x) {
        r += '<tr><td><strong>' + x[0] + '</strong></td><td>' + x[1] + '</td><td><em style="color:#6b7280;">' + x[2] + '</em></td></tr>';
    });
    return '<div class="theory-box" style="margin:8px 0;"><h4>Präsens (prezent)</h4><table class="grammar-table"><tr><th>Pronume</th><th>Germană</th><th>Traducere RO</th></tr>' + r + '</table></div>';
}

function buildVerbs() {
    const container = document.getElementById('verbs-container');
    if (!container) return;
    let html = '' +
        '<div class="exercise-instruction">' +
        '<strong>🔁 Verbele lecției — la prezent (Präsens)</strong><br>' +
        'Click pe un verb ca să-i vezi conjugarea. Instrument de <strong>referință</strong>.' +
        '</div>';

    html += '<div class="andreea-note" style="margin:12px 0;">' +
        '<img src="images/andreea.png" alt="Andreea" class="andreea-note-avatar">' +
        '<div class="andreea-note-content">' +
        '<div class="speaker">Andreea îți spune:</div>' +
        '<div class="text">„La A0 (fonetică) înveți verbele DOAR la prezent (Präsens) — atât îți trebuie ca să te prezinți. Trecutul (Präteritum/Perfekt) vine mai târziu, în A1+. Aici ai verbele lecției, gata de căutat. 🦋"</div>' +
        '</div></div>';

    verbsData.forEach(function (v, i) {
        html += '' +
            '<div class="sub-section">' +
            '<div class="sub-section-header" onclick="toggleVerb(' + i + ')">' +
            '<span>🔹 ' + v.inf + ' — <em>' + v.ro + '</em></span>' +
            '<span class="sub-arrow">▼</span>' +
            '</div>' +
            '<div class="sub-section-content" id="verb-' + i + '">' +
            praesTable(v.praes) +
            (v.note ? '<div class="theory-box" style="background:#fef3c7;"><p style="margin:0;"><strong>⚠️ </strong>' + v.note + '</p></div>' : '') +
            '</div></div>';
    });
    container.innerHTML = html;
}

function toggleVerb(i) {
    const c = document.getElementById('verb-' + i);
    if (c) c.classList.toggle('active');
    const headers = document.querySelectorAll('#verbs-container .sub-section-header .sub-arrow');
    if (headers[i]) headers[i].classList.toggle('rotated');
}

buildVerbs();
