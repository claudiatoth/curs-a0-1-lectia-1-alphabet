// ============================================
// FLASHCARDS - DAS DEUTSCHE ALPHABET
// Claudia Toth · A0.1 · Lecția 1
// 26 litere + 4 Sonderzeichen + 2 verbe = 32 carduri
// ============================================

// Pronunția scrisă fonetic în germană (pentru ca TTS-ul să citească literele
// ca pe cuvinte naturale, nu ca pe sunete trunchiate).
const flashcardsData = [
    // ========== 26 litere ==========
    // Trimit la TTS doar caracterul literei — vocile germane le citesc ca nume de literă
    // ([a:], [be:], [tse:], ...) automat, fără ambiguitate.
    { de: "A / a", ro: "se citește „a\" [a:]", speak: "A" },
    { de: "B / b", ro: "se citește „be\" [be:]", speak: "B" },
    { de: "C / c", ro: "se citește „țe\" [tse:]", speak: "C" },
    { de: "D / d", ro: "se citește „de\" [de:]", speak: "D" },
    { de: "E / e", ro: "se citește „e\" [e:]", speak: "E" },
    { de: "F / f", ro: "se citește „ef\" [ɛf]", speak: "F" },
    { de: "G / g", ro: "se citește „ghe\" [ge:]", speak: "G" },
    { de: "H / h", ro: "se citește „ha\" [ha:]", speak: "H" },
    { de: "I / i", ro: "se citește „i\" [i:]", speak: "I" },
    { de: "J / j", ro: "se citește „iot\" [jɔt]", speak: "J" },
    { de: "K / k", ro: "se citește „ca\" [ka:]", speak: "K" },
    { de: "L / l", ro: "se citește „el\" [ɛl]", speak: "L" },
    { de: "M / m", ro: "se citește „em\" [ɛm]", speak: "M" },
    { de: "N / n", ro: "se citește „en\" [ɛn]", speak: "N" },
    { de: "O / o", ro: "se citește „o\" [o:]", speak: "O" },
    { de: "P / p", ro: "se citește „pe\" [pe:]", speak: "P" },
    { de: "Q / q", ro: "se citește „cu / ku\" [ku:]", speak: "Q" },
    { de: "R / r", ro: "se citește „er\" (ușor nazal) [ɛʁ]", speak: "R" },
    { de: "S / s", ro: "se citește „es\" [ɛs]", speak: "S" },
    { de: "T / t", ro: "se citește „te\" [te:]", speak: "T" },
    { de: "U / u", ro: "se citește „u\" [u:]", speak: "U" },
    { de: "V / v", ro: "se citește „fau\" [faʊ]", speak: "V" },
    { de: "W / w", ro: "se citește „ve\" [ve:]", speak: "W" },
    { de: "X / x", ro: "se citește „iks\" [iks]", speak: "X" },
    { de: "Y / y", ro: "se citește „ipsilon\" [ˈʏpsilɔn]", speak: "Y" },
    { de: "Z / z", ro: "se citește „țet\" [tsɛt]", speak: "Z" },

    // ========== 4 Sonderzeichen ==========
    { de: "Ä / ä", ro: "a-umlaut [ɛ:] · ex: der Bär (ursul)", speak: "A Umlaut, der Bär" },
    { de: "Ö / ö", ro: "o-umlaut [ø:] · ex: schön (frumos)", speak: "O Umlaut, schön" },
    { de: "Ü / ü", ro: "u-umlaut [y:] · ex: die Tür (ușa)", speak: "U Umlaut, die Tür" },
    { de: "ß", ro: "Eszett (es-țet) · ex: die Straße (strada)", speak: "Eszett, die Straße" },

    // ========== 2 verbe ==========
    { de: "heißen", ro: "a se numi · ich heiße, du heißt, er/sie heißt, wir heißen, ihr heißt, sie/Sie heißen", speak: "heißen, ich heiße, du heißt" },
    { de: "buchstabieren", ro: "a spune pe litere · ich buchstabiere, du buchstabierst, er buchstabiert, wir buchstabieren, ihr buchstabiert, sie/Sie buchstabieren", speak: "buchstabieren, ich buchstabiere" }
];

let currentCardIndex = 0;
let preferredGermanVoice = null;

// Detectează cea mai bună voce germană disponibilă în browser
function pickGermanVoice() {
    const voices = window.speechSynthesis.getVoices();
    if (!voices || voices.length === 0) return null;
    // Prioritizează voci germane native cu calitate bună
    const preferences = [
        v => v.lang === 'de-DE' && /Anna|Hedda|Stefan|Markus|Katja|Conrad/i.test(v.name),
        v => v.lang === 'de-DE' && /Google|Microsoft/i.test(v.name),
        v => v.lang === 'de-DE',
        v => v.lang && v.lang.startsWith('de'),
    ];
    for (const pref of preferences) {
        const found = voices.find(pref);
        if (found) return found;
    }
    return null;
}

// Așteaptă încărcarea vocilor (în multe browsere lista vine asincron)
function initVoices() {
    preferredGermanVoice = pickGermanVoice();
    if (!preferredGermanVoice && window.speechSynthesis.onvoiceschanged !== undefined) {
        window.speechSynthesis.onvoiceschanged = () => {
            preferredGermanVoice = pickGermanVoice();
        };
    }
}

function buildFlashcards() {
    const container = document.getElementById('flashcards-container');
    if (!container) return;
    container.innerHTML = `
        <div class="exercise-instruction">
            <strong>📇 ${flashcardsData.length} carduri:</strong> 26 litere + 4 caractere speciale (ä, ö, ü, ß) + 2 verbe (heißen, buchstabieren).<br>
            Click pe card pentru a vedea pronunția în română. Click pe 🔊 pentru a auzi pronunția germană automată.<br>
            <small style="color:#6b7280;">💡 Pentru cea mai bună calitate audio, folosește Chrome sau Edge (au voci germane native). Dacă vocea sună metalic, instalează din Setări Windows: Time &amp; Language → Speech → Add voices → German (Germany).</small>
        </div>
        <div class="flashcard-counter" id="flashcard-counter">Card 1 / ${flashcardsData.length}</div>
        <div class="flashcard" id="flashcard" onclick="flipCard()">
            <button class="flashcard-audio-btn" onclick="playFlashcardAudio(event)" title="Ascultă pronunția">🔊</button>
            <div class="flashcard-content">
                <div class="de" id="flashcard-de">${flashcardsData[0].de}</div>
                <div class="ro" id="flashcard-ro">${flashcardsData[0].ro}</div>
            </div>
            <div class="flashcard-hint">👆 Click pentru pronunție</div>
        </div>
        <div class="flashcard-controls">
            <button class="flashcard-btn" onclick="prevCard()" id="prev-btn">← Anterior</button>
            <button class="flashcard-btn" onclick="nextCard()" id="next-btn">Următor →</button>
        </div>
    `;
    updateFlashcard();
}

function updateFlashcard() {
    const card = document.getElementById('flashcard');
    const de = document.getElementById('flashcard-de');
    const ro = document.getElementById('flashcard-ro');
    const counter = document.getElementById('flashcard-counter');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    if (!card || !de || !ro || !counter) return;
    const currentCard = flashcardsData[currentCardIndex];
    de.textContent = currentCard.de;
    ro.textContent = currentCard.ro;
    card.classList.remove('flipped');
    counter.textContent = `Card ${currentCardIndex + 1} / ${flashcardsData.length}`;
    if (prevBtn) prevBtn.disabled = currentCardIndex === 0;
    if (nextBtn) nextBtn.disabled = currentCardIndex === flashcardsData.length - 1;
}

function flipCard() {
    const card = document.getElementById('flashcard');
    if (card) card.classList.toggle('flipped');
}

function nextCard() {
    if (currentCardIndex < flashcardsData.length - 1) {
        currentCardIndex++;
        updateFlashcard();
    }
}

function prevCard() {
    if (currentCardIndex > 0) {
        currentCardIndex--;
        updateFlashcard();
    }
}

function playFlashcardAudio(event) {
    event.stopPropagation();
    const card = flashcardsData[currentCardIndex];
    const text = card.speak || card.de;
    if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
        // Re-pick voice in case voices loaded after init
        if (!preferredGermanVoice) preferredGermanVoice = pickGermanVoice();
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'de-DE';
        utterance.rate = 0.7;   // mai lent ca să se audă clar
        utterance.pitch = 1;
        utterance.volume = 1;
        if (preferredGermanVoice) utterance.voice = preferredGermanVoice;
        window.speechSynthesis.speak(utterance);
    } else {
        alert('Browser-ul tău nu suportă Text-to-Speech. Folosește Chrome, Edge sau Safari.');
    }
}

document.addEventListener('DOMContentLoaded', function() {
    initVoices();
    buildFlashcards();
});
