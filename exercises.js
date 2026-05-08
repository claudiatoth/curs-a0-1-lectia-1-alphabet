// ============================================
// EXERCIȚII - DAS DEUTSCHE ALPHABET
// Claudia Toth · A0.1 · Lecția 1 · 5 exerciții
// ============================================

// ============================================
// EXERCIȚIUL 1: Completează literele lipsă din alfabet
// ============================================
const ex1Data = [
    { id: 'a', before: 'A — B — ', missing: 'C', after: ' — D — E', hint: 'Litera dintre B și D' },
    { id: 'b', before: 'F — ', missing: 'G', after: ' — H — I', hint: 'Litera dintre F și H' },
    { id: 'c', before: 'I — J — ', missing: 'K', after: ' — L — M', hint: 'Litera dintre J și L' },
    { id: 'd', before: 'M — N — O — ', missing: 'P', after: ' — Q — R', hint: 'Litera dintre O și Q' },
    { id: 'e', before: 'P — Q — R — ', missing: 'S', after: ' — T — U', hint: 'Litera dintre R și T' },
    { id: 'f', before: 'T — U — ', missing: 'V', after: ' — W — X', hint: 'Litera dintre U și W' },
    { id: 'g', before: 'W — X — ', missing: 'Y', after: ' — Z', hint: 'Penultima literă a alfabetului' },
    { id: 'h', before: 'Sonderzeichen: ä — ', missing: 'ö', after: ' — ü — ß', hint: 'Litera „o" cu două puncte deasupra' }
];

function buildEx1() {
    const container = document.getElementById('ex1-container');
    if (!container) return;
    let html = `
        <div class="exercise-instruction">
            <strong>📝 Scrie litera lipsă din alfabet.</strong><br>
            <em>Atenție:</em> poți scrie majuscule sau minuscule — nu contează (ex. „c" sau „C" la fel).
        </div>
    `;
    ex1Data.forEach((item, index) => {
        html += `
            <div class="exercise-item">
                <span class="exercise-number">${index + 1}</span>
                <div class="input-group">
                    <label>${item.before}<input type="text" id="ex1-${item.id}" maxlength="2" style="width: 60px; display: inline-block; text-align: center; margin: 0 5px;" placeholder="?">${item.after}</label>
                    <small style="color: #6b7280;">💡 ${item.hint}</small>
                </div>
                <div class="feedback" id="ex1-f${item.id}"></div>
            </div>
        `;
    });
    container.innerHTML = html;
}

function checkEx1() {
    let correct = 0;
    const total = ex1Data.length;
    ex1Data.forEach(item => {
        const input = document.getElementById(`ex1-${item.id}`);
        const feedback = document.getElementById(`ex1-f${item.id}`);
        const userAnswer = (input.value || '').trim().toLowerCase();
        const expected = item.missing.toLowerCase();
        const accept = [expected];
        if (expected === 'ö') accept.push('oe');
        if (userAnswer === expected || accept.includes(userAnswer)) {
            feedback.className = 'feedback correct';
            feedback.textContent = `Litera corectă: ${item.missing}`;
            correct++;
        } else {
            feedback.className = 'feedback incorrect';
            feedback.textContent = `Litera corectă: ${item.missing}`;
        }
    });
    return { correct, total };
}

// ============================================
// EXERCIȚIUL 2: Cum se citește litera? (MC)
// ============================================
const ex2Data = [
    { id: 'a', letter: 'C', question: 'Cum se citește numele literei <strong>C</strong>?', options: ['ce', 'țe', 'ke'], correct: 'țe', explanation: 'C în germană se citește „țe" (NU „ce" ca în română).' },
    { id: 'b', letter: 'G', question: 'Cum se citește numele literei <strong>G</strong>?', options: ['ge', 'ghe', 'dji'], correct: 'ghe', explanation: 'G în germană se citește „ghe" (NU „ge" ca în română).' },
    { id: 'c', letter: 'J', question: 'Cum se citește numele literei <strong>J</strong>?', options: ['je', 'iot', 'dji'], correct: 'iot', explanation: 'J în germană se citește „iot". În cuvinte se aude ca „i" românesc.' },
    { id: 'd', letter: 'V', question: 'Cum se citește numele literei <strong>V</strong>?', options: ['ve', 'fau', 'fe'], correct: 'fau', explanation: 'V în germană se citește „fau". În cuvinte se pronunță ca „f": Vater = „fater".' },
    { id: 'e', letter: 'W', question: 'Cum se citește numele literei <strong>W</strong>?', options: ['vu', 've', 'we'], correct: 've', explanation: 'W în germană se citește „ve". În cuvinte se pronunță ca „v" românesc: Wasser = „vasăr".' },
    { id: 'f', letter: 'Y', question: 'Cum se citește numele literei <strong>Y</strong>?', options: ['igrec', 'ipsilon', 'i'], correct: 'ipsilon', explanation: 'Y în germană se numește „ipsilon".' },
    { id: 'g', letter: 'Z', question: 'Cum se citește numele literei <strong>Z</strong>?', options: ['țet', 'zet', 'set'], correct: 'țet', explanation: 'Z în germană se citește „țet". În cuvinte se pronunță ca „ț": Zeit = „țait".' },
    { id: 'h', letter: 'Q', question: 'Cum se citește numele literei <strong>Q</strong>?', options: ['ku', 'che', 'cve'], correct: 'ku', explanation: 'Q în germană se citește „cu" / „ku". Apare aproape mereu împreună cu u: „qu" = „cv".' }
];

function buildEx2() {
    const container = document.getElementById('ex2-container');
    if (!container) return;
    let html = `
        <div class="exercise-instruction">
            <strong>📝 Alege cum se citește numele literei în germană.</strong><br>
            <em>Atenție:</em> sunt incluse exact literele cu „surprize" — cele care se citesc altfel decât în română.
        </div>
    `;
    ex2Data.forEach((item, index) => {
        let optionsHTML = '';
        item.options.forEach((opt, i) => {
            optionsHTML += `
                <div class="mc-option">
                    <input type="radio" name="ex2-${item.id}" value="${opt.replace(/"/g, '&quot;')}" id="ex2-${item.id}-${i}">
                    <label for="ex2-${item.id}-${i}">${opt}</label>
                </div>
            `;
        });
        html += `
            <div class="exercise-item">
                <span class="exercise-number">${index + 1}</span>
                <div class="input-group">
                    <label>${item.question}</label>
                    <div class="mc-options">${optionsHTML}</div>
                </div>
                <div class="feedback" id="ex2-f${item.id}"></div>
            </div>
        `;
    });
    container.innerHTML = html;
}

function checkEx2() {
    let correct = 0;
    const total = ex2Data.length;
    ex2Data.forEach(item => {
        const selected = document.querySelector(`input[name="ex2-${item.id}"]:checked`);
        const feedback = document.getElementById(`ex2-f${item.id}`);
        const userAnswer = selected ? selected.value : '';
        if (userAnswer === item.correct) {
            feedback.className = 'feedback correct';
            feedback.textContent = `${item.correct} — ${item.explanation}`;
            correct++;
        } else {
            feedback.className = 'feedback incorrect';
            feedback.textContent = `Corect: ${item.correct} — ${item.explanation}`;
        }
    });
    return { correct, total };
}

// ============================================
// EXERCIȚIUL 3: Sonderzeichen (caractere speciale)
// ============================================
const ex3Data = [
    { id: 'a', question: 'Cum se numește litera <strong>ä</strong>?', options: ['a-umlaut', 'eszett', 'a-cu-două-puncte'], correct: 'a-umlaut', explanation: 'ä = a-umlaut (a cu două puncte = umlaut).' },
    { id: 'b', question: 'Cum se numește litera <strong>ö</strong>?', options: ['o-cedilla', 'o-umlaut', 'eszett'], correct: 'o-umlaut', explanation: 'ö = o-umlaut.' },
    { id: 'c', question: 'Cum se numește litera <strong>ü</strong>?', options: ['u-umlaut', 'u-grec', 'eszett'], correct: 'u-umlaut', explanation: 'ü = u-umlaut.' },
    { id: 'd', question: 'Cum se numește litera <strong>ß</strong>?', options: ['eszett (es-țet)', 'beta', 'b-special'], correct: 'eszett (es-țet)', explanation: 'ß = Eszett, sau „scharfes S" (s-ascuțit). Înlocuiește „ss" după vocală lungă.' },
    { id: 'e', question: 'Dacă tastatura ta nu are <strong>ä</strong>, cum poți să o scrii?', options: ['ae', 'a:', 'aa'], correct: 'ae', explanation: 'ä → ae (la fel: ö → oe, ü → ue).' },
    { id: 'f', question: 'Dacă tastatura ta nu are <strong>ß</strong>, cum poți să o scrii?', options: ['ss', 'b', 'sz'], correct: 'ss', explanation: 'ß → ss. Toți germanii înțeleg.' },
    { id: 'g', question: 'Cuvântul „<strong>schön</strong>" (frumos) conține:', options: ['un eszett', 'un o-umlaut', 'un a-umlaut'], correct: 'un o-umlaut', explanation: 'schön conține ö = o-umlaut.' },
    { id: 'h', question: 'Cuvântul „<strong>Straße</strong>" (stradă) conține:', options: ['un u-umlaut', 'un eszett', 'doi „s"'], correct: 'un eszett', explanation: 'Straße conține ß = Eszett.' }
];

function buildEx3() {
    const container = document.getElementById('ex3-container');
    if (!container) return;
    let html = `
        <div class="exercise-instruction">
            <strong>📝 Recunoaște caracterele speciale ale germanei.</strong><br>
            <em>Reține:</em> ä, ö, ü = umlaute · ß = Eszett.
        </div>
    `;
    ex3Data.forEach((item, index) => {
        let optionsHTML = '';
        item.options.forEach((opt, i) => {
            optionsHTML += `
                <div class="mc-option">
                    <input type="radio" name="ex3-${item.id}" value="${opt.replace(/"/g, '&quot;')}" id="ex3-${item.id}-${i}">
                    <label for="ex3-${item.id}-${i}">${opt}</label>
                </div>
            `;
        });
        html += `
            <div class="exercise-item">
                <span class="exercise-number">${index + 1}</span>
                <div class="input-group">
                    <label>${item.question}</label>
                    <div class="mc-options">${optionsHTML}</div>
                </div>
                <div class="feedback" id="ex3-f${item.id}"></div>
            </div>
        `;
    });
    container.innerHTML = html;
}

function checkEx3() {
    let correct = 0;
    const total = ex3Data.length;
    ex3Data.forEach(item => {
        const selected = document.querySelector(`input[name="ex3-${item.id}"]:checked`);
        const feedback = document.getElementById(`ex3-f${item.id}`);
        const userAnswer = selected ? selected.value : '';
        if (userAnswer === item.correct) {
            feedback.className = 'feedback correct';
            feedback.textContent = `${item.correct} — ${item.explanation}`;
            correct++;
        } else {
            feedback.className = 'feedback incorrect';
            feedback.textContent = `Corect: ${item.correct} — ${item.explanation}`;
        }
    });
    return { correct, total };
}

// ============================================
// EXERCIȚIUL 4: Buchstabieren — scrie numele pe litere
// ============================================
const ex4Data = [
    { id: 'a', name: 'Mihai', correct: 'M-I-H-A-I' },
    { id: 'b', name: 'Anna', correct: 'A-N-N-A' },
    { id: 'c', name: 'Petra', correct: 'P-E-T-R-A' },
    { id: 'd', name: 'Klaus', correct: 'K-L-A-U-S' },
    { id: 'e', name: 'Maria', correct: 'M-A-R-I-A' },
    { id: 'f', name: 'Müller', correct: 'M-Ü-L-L-E-R' },
    { id: 'g', name: 'Andreea', correct: 'A-N-D-R-E-E-A' },
    { id: 'h', name: 'Goethe', correct: 'G-O-E-T-H-E' }
];

function buildEx4() {
    const container = document.getElementById('ex4-container');
    if (!container) return;
    let html = `
        <div class="exercise-instruction">
            <strong>📝 Scrie numele pe litere, despărțite cu cratimă (-).</strong><br>
            <em>Exemplu:</em> „Andrei" → <strong>A-N-D-R-E-I</strong><br>
            <em>Atenție:</em> pentru „Müller" poți scrie <strong>M-Ü-L-L-E-R</strong> sau <strong>M-UE-L-L-E-R</strong> (ambele acceptate).
        </div>
    `;
    ex4Data.forEach((item, index) => {
        html += `
            <div class="exercise-item">
                <span class="exercise-number">${index + 1}</span>
                <div class="input-group">
                    <label>Buchstabiere: <span class="nomen-highlight">${item.name}</span></label>
                    <input type="text" id="ex4-${item.id}" placeholder="ex: M-I-H-A-I">
                </div>
                <div class="feedback" id="ex4-f${item.id}"></div>
            </div>
        `;
    });
    container.innerHTML = html;
}

function checkEx4() {
    let correct = 0;
    const total = ex4Data.length;
    ex4Data.forEach(item => {
        const input = document.getElementById(`ex4-${item.id}`);
        const feedback = document.getElementById(`ex4-f${item.id}`);
        const raw = (input.value || '').trim().toUpperCase().replace(/\s+/g, '');
        const expected = item.correct.toUpperCase();
        const expectedAlt = expected
            .replace(/Ä/g, 'AE')
            .replace(/Ö/g, 'OE')
            .replace(/Ü/g, 'UE')
            .replace(/ß/g, 'SS');
        // de asemenea acceptă fără cratime
        const noHyphen = raw.replace(/-/g, '');
        const expNoHyphen = expected.replace(/-/g, '');
        const expAltNoHyphen = expectedAlt.replace(/-/g, '');
        if (raw === expected || raw === expectedAlt || noHyphen === expNoHyphen || noHyphen === expAltNoHyphen) {
            feedback.className = 'feedback correct';
            feedback.textContent = `Corect: ${item.correct}`;
            correct++;
        } else {
            feedback.className = 'feedback incorrect';
            feedback.textContent = `Corect: ${item.correct}`;
        }
    });
    return { correct, total };
}

// ============================================
// EXERCIȚIUL 5: Conjugare „heißen" + „buchstabieren"
// ============================================
const ex5Data = [
    { id: 'a', sentence: 'Ich ____ Claudia.', verb: 'heißen', correct: 'heiße', accept: ['heiße', 'heisse'] },
    { id: 'b', sentence: 'Wie ____ du?', verb: 'heißen', correct: 'heißt', accept: ['heißt', 'heisst'] },
    { id: 'c', sentence: 'Sie (ea) ____ Petra.', verb: 'heißen', correct: 'heißt', accept: ['heißt', 'heisst'] },
    { id: 'd', sentence: 'Wir ____ Müller.', verb: 'heißen', correct: 'heißen', accept: ['heißen', 'heissen'] },
    { id: 'e', sentence: 'Wie ____ Sie? (formal)', verb: 'heißen', correct: 'heißen', accept: ['heißen', 'heissen'] },
    { id: 'f', sentence: 'Ich ____ meinen Namen: A-N-N-A.', verb: 'buchstabieren', correct: 'buchstabiere', accept: ['buchstabiere'] },
    { id: 'g', sentence: 'Du ____ sehr deutlich!', verb: 'buchstabieren', correct: 'buchstabierst', accept: ['buchstabierst'] },
    { id: 'h', sentence: 'Er ____ sein Wort: H-U-N-D.', verb: 'buchstabieren', correct: 'buchstabiert', accept: ['buchstabiert'] }
];

function buildEx5() {
    const container = document.getElementById('ex5-container');
    if (!container) return;
    let html = `
        <div class="exercise-instruction">
            <strong>📝 Completează cu forma corectă a verbului din paranteze.</strong><br>
            <em>Atenție la „ß"</em>: poți scrie „heiße" sau „heisse" — ambele se acceptă.
        </div>
    `;
    ex5Data.forEach((item, index) => {
        html += `
            <div class="exercise-item">
                <span class="exercise-number">${index + 1}</span>
                <div class="input-group">
                    <label>${item.sentence} <em>(${item.verb})</em></label>
                    <input type="text" id="ex5-${item.id}" placeholder="forma corectă">
                </div>
                <div class="feedback" id="ex5-f${item.id}"></div>
            </div>
        `;
    });
    container.innerHTML = html;
}

function checkEx5() {
    let correct = 0;
    const total = ex5Data.length;
    ex5Data.forEach(item => {
        const input = document.getElementById(`ex5-${item.id}`);
        const feedback = document.getElementById(`ex5-f${item.id}`);
        const userAnswer = (input.value || '').trim().toLowerCase();
        if (item.accept.some(a => a.toLowerCase() === userAnswer)) {
            feedback.className = 'feedback correct';
            feedback.textContent = `Corect: ${item.correct}`;
            correct++;
        } else {
            feedback.className = 'feedback incorrect';
            feedback.textContent = `Corect: ${item.correct}`;
        }
    });
    return { correct, total };
}

// ============================================
// INIT EXERCIȚII
// ============================================
buildEx1();
buildEx2();
buildEx3();
buildEx4();
buildEx5();
