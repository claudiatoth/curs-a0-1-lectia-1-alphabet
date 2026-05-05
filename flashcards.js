// ============================================
// FLASHCARDS - DAS DEUTSCHE ALPHABET
// Claudia Toth · A0.1 · Lecția 1
// 26 litere + 4 Sonderzeichen + 2 verbe = 32 carduri
// ============================================

// Pronunția scrisă fonetic în germană (pentru ca TTS-ul să citească literele
// ca pe cuvinte naturale, nu ca pe sunete trunchiate).
const flashcardsData = [
    // ========== 26 litere ==========
    { de: "A / a", ro: "se citește „a\" [a:]", audio: "audio/letters/a.wav" },
    { de: "B / b", ro: "se citește „be\" [be:]", audio: "audio/letters/b.wav" },
    { de: "C / c", ro: "se citește „țe\" [tse:]", audio: "audio/letters/c.wav" },
    { de: "D / d", ro: "se citește „de\" [de:]", audio: "audio/letters/d.wav" },
    { de: "E / e", ro: "se citește „e\" [e:]", audio: "audio/letters/e.wav" },
    { de: "F / f", ro: "se citește „ef\" [ɛf]", audio: "audio/letters/f.wav" },
    { de: "G / g", ro: "se citește „ghe\" [ge:]", audio: "audio/letters/g.wav" },
    { de: "H / h", ro: "se citește „ha\" [ha:]", audio: "audio/letters/h.wav" },
    { de: "I / i", ro: "se citește „i\" [i:]", audio: "audio/letters/i.wav" },
    { de: "J / j", ro: "se citește „iot\" [jɔt]", audio: "audio/letters/j.wav" },
    { de: "K / k", ro: "se citește „ca\" [ka:]", audio: "audio/letters/k.wav" },
    { de: "L / l", ro: "se citește „el\" [ɛl]", audio: "audio/letters/l.wav" },
    { de: "M / m", ro: "se citește „em\" [ɛm]", audio: "audio/letters/m.wav" },
    { de: "N / n", ro: "se citește „en\" [ɛn]", audio: "audio/letters/n.wav" },
    { de: "O / o", ro: "se citește „o\" [o:]", audio: "audio/letters/o.wav" },
    { de: "P / p", ro: "se citește „pe\" [pe:]", audio: "audio/letters/p.wav" },
    { de: "Q / q", ro: "se citește „cu / ku\" [ku:]", audio: "audio/letters/q.wav" },
    { de: "R / r", ro: "se citește „er\" (ușor nazal) [ɛʁ]", audio: "audio/letters/r.wav" },
    { de: "S / s", ro: "se citește „es\" [ɛs]", audio: "audio/letters/s.wav" },
    { de: "T / t", ro: "se citește „te\" [te:]", audio: "audio/letters/t.wav" },
    { de: "U / u", ro: "se citește „u\" [u:]", audio: "audio/letters/u.wav" },
    { de: "V / v", ro: "se citește „fau\" [faʊ]", audio: "audio/letters/v.wav" },
    { de: "W / w", ro: "se citește „ve\" [ve:]", audio: "audio/letters/w.wav" },
    { de: "X / x", ro: "se citește „iks\" [iks]", audio: "audio/letters/x.wav" },
    { de: "Y / y", ro: "se citește „ipsilon\" [ˈʏpsilɔn]", audio: "audio/letters/y.wav" },
    { de: "Z / z", ro: "se citește „țet\" [tsɛt]", audio: "audio/letters/z.wav" },

    // ========== 4 Sonderzeichen ==========
    { de: "Ä / ä", ro: "a-umlaut [ɛ:] · ex: der Bär (ursul)", audio: "audio/letters/ae.wav" },
    { de: "Ö / ö", ro: "o-umlaut [ø:] · ex: schön (frumos)", audio: "audio/letters/oe.wav" },
    { de: "Ü / ü", ro: "u-umlaut [y:] · ex: die Tür (ușa)", audio: "audio/letters/ue.wav" },
    { de: "ß", ro: "Eszett (es-țet) · ex: die Straße (strada)", audio: "audio/letters/ss.wav" },

    // ========== 2 verbe ==========
    { de: "heißen", ro: "a se numi · ich heiße, du heißt, er/sie heißt, wir heißen, ihr heißt, sie/Sie heißen", audio: "audio/letters/heissen.wav" },
    { de: "buchstabieren", ro: "a spune pe litere · ich buchstabiere, du buchstabierst, er buchstabiert, wir buchstabieren, ihr buchstabiert, sie/Sie buchstabieren", audio: "audio/letters/buchstabieren.wav" }
];

let currentCardIndex = 0;
let currentAudio = null;

function buildFlashcards() {
    const container = document.getElementById('flashcards-container');
    if (!container) return;
    container.innerHTML = `
        <div class="exercise-instruction">
            <strong>📇 ${flashcardsData.length} carduri:</strong> 26 litere + 4 caractere speciale (ä, ö, ü, ß) + 2 verbe (heißen, buchstabieren).<br>
            Click pe card pentru a vedea pronunția în română. Click pe 🔊 pentru a auzi pronunția germană (voce profesională înregistrată — funcționează la fel pe orice device).
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
    if (!card.audio) return;
    // Oprește audio-ul anterior dacă era încă în redare
    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
    }
    currentAudio = new Audio(card.audio);
    currentAudio.play().catch(err => {
        console.log('Audio nu poate fi redat:', err);
    });
}

document.addEventListener('DOMContentLoaded', function() {
    buildFlashcards();
});
