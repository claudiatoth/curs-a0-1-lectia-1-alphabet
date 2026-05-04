// ============================================
// FLASHCARDS - DAS DEUTSCHE ALPHABET
// Claudia Toth · A0.1 · Lecția 1
// 26 litere + 4 Sonderzeichen + 2 verbe = 32 carduri
// ============================================

const flashcardsData = [
    // ========== 26 litere ==========
    { de: "A / a", ro: "se citește „a\" [a:]", speak: "a" },
    { de: "B / b", ro: "se citește „be\" [be:]", speak: "be" },
    { de: "C / c", ro: "se citește „țe\" [tse:]", speak: "ce" },
    { de: "D / d", ro: "se citește „de\" [de:]", speak: "de" },
    { de: "E / e", ro: "se citește „e\" [e:]", speak: "e" },
    { de: "F / f", ro: "se citește „ef\" [ɛf]", speak: "ef" },
    { de: "G / g", ro: "se citește „ghe\" [ge:]", speak: "ge" },
    { de: "H / h", ro: "se citește „ha\" [ha:]", speak: "ha" },
    { de: "I / i", ro: "se citește „i\" [i:]", speak: "i" },
    { de: "J / j", ro: "se citește „iot\" [jɔt]", speak: "jot" },
    { de: "K / k", ro: "se citește „ca\" [ka:]", speak: "ka" },
    { de: "L / l", ro: "se citește „el\" [ɛl]", speak: "el" },
    { de: "M / m", ro: "se citește „em\" [ɛm]", speak: "em" },
    { de: "N / n", ro: "se citește „en\" [ɛn]", speak: "en" },
    { de: "O / o", ro: "se citește „o\" [o:]", speak: "o" },
    { de: "P / p", ro: "se citește „pe\" [pe:]", speak: "pe" },
    { de: "Q / q", ro: "se citește „cu / ku\" [ku:]", speak: "ku" },
    { de: "R / r", ro: "se citește „er\" (ușor nazal) [ɛʁ]", speak: "er" },
    { de: "S / s", ro: "se citește „es\" [ɛs]", speak: "es" },
    { de: "T / t", ro: "se citește „te\" [te:]", speak: "te" },
    { de: "U / u", ro: "se citește „u\" [u:]", speak: "u" },
    { de: "V / v", ro: "se citește „fau\" [faʊ]", speak: "vau" },
    { de: "W / w", ro: "se citește „ve\" [ve:]", speak: "we" },
    { de: "X / x", ro: "se citește „iks\" [iks]", speak: "iks" },
    { de: "Y / y", ro: "se citește „ipsilon\" [ˈʏpsilɔn]", speak: "ypsilon" },
    { de: "Z / z", ro: "se citește „țet\" [tsɛt]", speak: "zett" },

    // ========== 4 Sonderzeichen ==========
    { de: "Ä / ä", ro: "a-umlaut [ɛ:] · ex: der Bär (ursul)", speak: "a Umlaut" },
    { de: "Ö / ö", ro: "o-umlaut [ø:] · ex: schön (frumos)", speak: "o Umlaut" },
    { de: "Ü / ü", ro: "u-umlaut [y:] · ex: die Tür (ușa)", speak: "u Umlaut" },
    { de: "ß", ro: "Eszett (es-țet) · ex: die Straße (strada)", speak: "Eszett" },

    // ========== 2 verbe ==========
    { de: "heißen", ro: "a se numi · ich heiße, du heißt, er/sie heißt, wir heißen, ihr heißt, sie/Sie heißen", speak: "heißen" },
    { de: "buchstabieren", ro: "a spune pe litere · ich buchstabiere, du buchstabierst, er buchstabiert, wir buchstabieren, ihr buchstabiert, sie/Sie buchstabieren", speak: "buchstabieren" }
];

let currentCardIndex = 0;

function buildFlashcards() {
    const container = document.getElementById('flashcards-container');
    if (!container) return;
    container.innerHTML = `
        <div class="exercise-instruction">
            <strong>📇 ${flashcardsData.length} carduri:</strong> 26 litere + 4 caractere speciale (ä, ö, ü, ß) + 2 verbe (heißen, buchstabieren).<br>
            Click pe card pentru a vedea pronunția. Click pe 🔊 pentru auzi pronunția germană automată.
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
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'de-DE';
        utterance.rate = 0.8;
        window.speechSynthesis.speak(utterance);
    } else {
        alert('Browser-ul tău nu suportă Text-to-Speech. Folosește Chrome, Edge sau Safari.');
    }
}

document.addEventListener('DOMContentLoaded', function() {
    buildFlashcards();
});
