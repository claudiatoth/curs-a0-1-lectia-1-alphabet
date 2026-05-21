// ============================================
// PDF BUILDER — Das deutsche Alphabet (A0 · Lecția 1)
// Claudia Toth · model PDF brandat
// Extrage materia din JS-urile existente (zero duplicare)
// ============================================

(function () {
    if (typeof document === 'undefined') return;
    document.addEventListener('DOMContentLoaded', buildPDF);

    function buildPDF() {
        const root = document.getElementById('pdf-content');
        if (!root) return;
        let html = '';
        html += buildTheory();
        html += buildExercises();
        html += buildFlashcards();
        html += buildVerbs();
        root.innerHTML = html;
    }

    // ============================================
    // 1. TEORIE — curăță elementele interactive (audio, butoane)
    // ============================================
    function buildTheory() {
        if (typeof theoryHTML !== 'string') return '';
        let t = theoryHTML;
        // FIX: anchor precis pe </span></div> (finalul lesson-audio) — vezi AGENTS-README §🚨 Greșeala 2
        t = t.replace(/<div class="lesson-audio">[\s\S]*?<\/span>\s*<\/div>/g, '');
        // Scoate butoanele cu onclick (audio play, navigation etc.)
        t = t.replace(/<button[^>]*onclick="[^"]*"[^>]*>[^<]*<\/button>/g, '');
        // Înlocuiește header-ele subsecțiunilor cu h2.sub-chapter
        t = t.replace(/<div class="sub-section-header"[^>]*>\s*<span>([^<]+)<\/span>\s*<span class="sub-arrow">[^<]*<\/span>\s*<\/div>/g,
            '<h2 class="sub-chapter">$1</h2>');
        // Elimină wrapper-ele div sub-section / sub-section-content (păstrăm conținutul)
        t = t.replace(/<div class="sub-section">/g, '<div>');
        t = t.replace(/<div class="sub-section-content"[^>]*>/g, '<div>');
        // Clean inline styles pe box-uri
        t = t.replace(/<div class="theory-box"\s+style="background:\s*#dbeafe[^"]*"[^>]*>/g, '<div class="theory-box info-box">');
        t = t.replace(/<div class="theory-box"\s+style="background:\s*#fffbeb[^"]*"[^>]*>/g, '<div class="theory-box warn-box">');
        t = t.replace(/<div class="theory-box"\s+style="background:\s*#fef3c7[^"]*"[^>]*>/g, '<div class="theory-box warn-box">');
        return `<h1 class="chapter">📘 1. Teorie — Alfabetul german</h1>` + t;
    }

    // ============================================
    // 2. EXERCIȚII cu rezolvări complete
    // ============================================
    function buildExercises() {
        let html = `<h1 class="chapter new-section">📝 2. Exerciții — cu rezolvări complete</h1>`;

        // ----- Ex1: Completează literele lipsă -----
        html += `<div class="ex-block">
            <h3>Übung 1 — Completează literele lipsă din alfabet</h3>
            <div class="instruction">Scrie litera lipsă în șirul de litere. Majuscule sau minuscule la fel.</div>
            <div class="rezolvare-banner">✓ Rezolvare</div>`;
        if (typeof ex1Data !== 'undefined') {
            ex1Data.forEach((item, i) => {
                html += `<div class="ex-item">
                    <span class="ex-num">${i + 1}</span>
                    <div class="ex-body">
                        <div class="ex-q">${item.before}<strong style="color:#047857">[ ${item.missing} ]</strong>${item.after}</div>
                        <div class="ex-explanation">${item.hint}</div>
                    </div>
                </div>`;
            });
        }
        html += `</div>`;

        // ----- Ex2: Cum se citește litera (MC) -----
        html += `<div class="ex-block">
            <h3>Übung 2 — Cum se citește numele literei? (alegere multiplă)</h3>
            <div class="instruction">Sunt incluse litere cu „surprize" — cele care se citesc altfel decât în română.</div>
            <div class="rezolvare-banner">✓ Rezolvare</div>`;
        if (typeof ex2Data !== 'undefined') {
            ex2Data.forEach((item, i) => {
                html += `<div class="ex-item">
                    <span class="ex-num">${i + 1}</span>
                    <div class="ex-body">
                        <div class="ex-q">${item.question}</div>
                        <div class="options">`;
                item.options.forEach((opt, oi) => {
                    const letter = String.fromCharCode(65 + oi);
                    const isRight = opt === item.correct;
                    html += `<div class="${isRight ? 'right' : ''}">${letter}. ${opt}${isRight ? ' ✓' : ''}</div>`;
                });
                html += `</div>
                        <div class="ex-explanation">${item.explanation}</div>
                    </div>
                </div>`;
            });
        }
        html += `</div>`;

        // ----- Ex3: Sonderzeichen (MC) -----
        html += `<div class="ex-block">
            <h3>Übung 3 — Caractere speciale (Sonderzeichen)</h3>
            <div class="instruction">ä, ö, ü = umlaute · ß = Eszett.</div>
            <div class="rezolvare-banner">✓ Rezolvare</div>`;
        if (typeof ex3Data !== 'undefined') {
            ex3Data.forEach((item, i) => {
                html += `<div class="ex-item">
                    <span class="ex-num">${i + 1}</span>
                    <div class="ex-body">
                        <div class="ex-q">${item.question}</div>
                        <div class="options">`;
                item.options.forEach((opt, oi) => {
                    const letter = String.fromCharCode(65 + oi);
                    const isRight = opt === item.correct;
                    html += `<div class="${isRight ? 'right' : ''}">${letter}. ${opt}${isRight ? ' ✓' : ''}</div>`;
                });
                html += `</div>
                        <div class="ex-explanation">${item.explanation}</div>
                    </div>
                </div>`;
            });
        }
        html += `</div>`;

        // ----- Ex4: Buchstabieren (numele pe litere) -----
        html += `<div class="ex-block">
            <h3>Übung 4 — Buchstabieren (scrie numele pe litere)</h3>
            <div class="instruction">Despărțite cu cratimă (-). Ex.: „Andrei" → A-N-D-R-E-I. Pentru „Müller" acceptăm și M-UE-L-L-E-R.</div>
            <div class="rezolvare-banner">✓ Rezolvare</div>
            <table><thead><tr><th>Nume</th><th>Pe litere</th></tr></thead><tbody>`;
        if (typeof ex4Data !== 'undefined') {
            ex4Data.forEach(item => {
                html += `<tr><td><strong>${item.name}</strong></td><td class="verb">${item.correct}</td></tr>`;
            });
        }
        html += `</tbody></table></div>`;

        // ----- Ex5: Conjugare „heißen" + „buchstabieren" -----
        html += `<div class="ex-block">
            <h3>Übung 5 — Conjugarea verbelor „heißen" și „buchstabieren"</h3>
            <div class="instruction">Forma corectă a verbului din paranteze. Atenție la ß: „heiße" sau „heisse" — ambele se acceptă.</div>
            <div class="rezolvare-banner">✓ Rezolvare</div>`;
        if (typeof ex5Data !== 'undefined') {
            ex5Data.forEach((item, i) => {
                const filled = item.sentence.replace('____', `<strong style="color:#047857">${item.correct}</strong>`);
                html += `<div class="ex-item">
                    <span class="ex-num">${i + 1}</span>
                    <div class="ex-body">
                        <div class="ex-q">${filled} <em>(${item.verb})</em></div>
                    </div>
                </div>`;
            });
        }
        html += `</div>`;

        return html;
    }

    // ============================================
    // 3. FLASHCARDS — listă completă DE | RO
    // ============================================
    function buildFlashcards() {
        const count = (typeof flashcardsData !== 'undefined') ? flashcardsData.length : 0;
        let html = `<h1 class="chapter new-section">📇 3. Vocabular complet (Flashcards)</h1>
            <p style="margin-bottom:10px">Cele <strong>${count} carduri</strong> ale lecției (26 litere + 4 Sonderzeichen + 2 verbe). Folosește ca dicționar de referință.</p>
            <div class="flashcards-grid">`;
        if (typeof flashcardsData !== 'undefined') {
            flashcardsData.forEach(card => {
                html += `<div class="fc-row"><span class="de">${card.de}</span><span class="ro">— ${card.ro}</span></div>`;
            });
        }
        html += `</div>`;
        return html;
    }

    // ============================================
    // 4. VERBE — A0 doar Präsens (fără badge-uri tip/aux)
    // ============================================
    function buildVerbs() {
        let html = `<h1 class="chapter new-section">🔁 4. Verbele lecției — la prezent (Präsens)</h1>
            <div class="andreea-note">
                <div class="speaker">📌 Andreea îți spune:</div>
                <div>La A0 (fonetică) înveți verbele DOAR la prezent (Präsens) — atât îți trebuie ca să te prezinți. Trecutul (Präteritum/Perfekt) vine în A1+.</div>
            </div>`;

        if (typeof verbsData !== 'undefined') {
            verbsData.forEach((v, idx) => {
                html += `<div class="verb-card">
                    <div class="vh">
                        <span class="name">${idx + 1}. ${v.inf}</span>
                        <span class="ro">— ${v.ro}</span>
                    </div>
                    <h5>Präsens (prezent)</h5>
                    <table><thead><tr><th>Pronume</th><th>Germană</th><th>Traducere RO</th></tr></thead><tbody>`;
                v.praes.forEach(row => {
                    html += `<tr><td><strong>${row[0]}</strong></td><td class="verb">${row[1]}</td><td class="ro-text">${row[2]}</td></tr>`;
                });
                html += `</tbody></table>`;
                if (v.note) {
                    html += `<div class="note"><strong>⚠️ </strong>${v.note}</div>`;
                }
                html += `</div>`;
            });
        }

        return html;
    }
})();
