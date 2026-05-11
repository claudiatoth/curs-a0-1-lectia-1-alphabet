// ============================================
// TEST FINAL - DAS DEUTSCHE ALPHABET
// Claudia Toth · A0 — Fonetică · Lecția 1 · 15 întrebări mixte
// ============================================

const finalTestData = [
    // 5x recunoaștere pronunție literă
    { type: 'multiple', category: '🔤 Pronunție litere', question: 'Cum se citește numele literei <strong>C</strong> în germană?', options: ['ce', 'țe', 'che', 'si'], correct: 'țe', explanation: 'C = „țe" [tse:]. NU „ce" ca în română.' },
    { type: 'multiple', category: '🔤 Pronunție litere', question: 'Cum se citește numele literei <strong>W</strong> în germană?', options: ['vu', 'we', 've', 'dublu-v'], correct: 've', explanation: 'W = „ve" [ve:]. În cuvinte se aude ca „v" românesc: Wasser = „vasăr".' },
    { type: 'multiple', category: '🔤 Pronunție litere', question: 'Cum se citește numele literei <strong>V</strong> în germană?', options: ['ve', 'fau', 'fe', 'vau'], correct: 'fau', explanation: 'V = „fau" [faʊ]. În cuvinte se aude ca „f": Vater = „fater".' },
    { type: 'multiple', category: '🔤 Pronunție litere', question: 'Cum se citește numele literei <strong>J</strong> în germană?', options: ['je', 'iot', 'dji', 'gh'], correct: 'iot', explanation: 'J = „iot" [jɔt]. În cuvinte se aude ca „i": ja = „ia".' },
    { type: 'multiple', category: '🔤 Pronunție litere', question: 'Cum se citește numele literei <strong>Z</strong> în germană?', options: ['zet', 'țet', 'set', 'zed'], correct: 'țet', explanation: 'Z = „țet" [tsɛt]. În cuvinte se aude ca „ț": Zeit = „țait".' },

    // 5x Sonderzeichen + reguli generale
    { type: 'multiple', category: '✨ Sonderzeichen + reguli', question: 'Caracterul <strong>ß</strong> se numește:', options: ['Eszett', 'Beta', 'Eszet-doi-s', 'a-umlaut'], correct: 'Eszett', explanation: 'ß = Eszett (sau scharfes S). Înlocuiește „ss" după vocală lungă.' },
    { type: 'multiple', category: '✨ Sonderzeichen + reguli', question: 'Care este un <strong>umlaut</strong>?', options: ['ß', 'ä', 'ç', 'â'], correct: 'ä', explanation: 'Umlautele sunt ä, ö, ü (vocale cu două puncte deasupra).' },
    { type: 'multiple', category: '✨ Sonderzeichen + reguli', question: 'Dacă tastatura nu are <strong>ü</strong>, cum scrii?', options: ['uu', 'ue', 'u:', 'oo'], correct: 'ue', explanation: 'ü → ue (la fel: ä → ae, ö → oe, ß → ss).' },
    { type: 'multiple', category: '✨ Sonderzeichen + reguli', question: 'Ce regulă <strong>UNICĂ</strong> are germana față de română?', options: ['Verbele se scriu cu majusculă', 'Substantivele se scriu cu majusculă', 'Adjectivele se scriu cu majusculă', 'Toate cuvintele se scriu cu majusculă'], correct: 'Substantivele se scriu cu majusculă', explanation: 'În germană TOATE substantivele se scriu cu majusculă, chiar și în mijlocul propoziției: Hund, Buch, Apfel.' },
    { type: 'multiple', category: '✨ Sonderzeichen + reguli', question: 'Câte litere are alfabetul german (fără caracterele speciale)?', options: ['24', '26', '28', '30'], correct: '26', explanation: 'Alfabetul german are 26 de litere (A-Z), exact ca cel latin. ä, ö, ü și ß sunt caractere speciale separate.' },

    // 3x buchstabieren (nume → litere despărțite cu cratimă)
    { type: 'spell', category: '🗣️ Buchstabieren', question: 'Buchstabiere numele:', word: 'Anna', accept: ['a-n-n-a', 'a n n a', 'anna'], correct: 'A-N-N-A', explanation: 'Anna se spune pe litere: A — N — N — A (literele duble se rostesc de două ori).' },
    { type: 'spell', category: '🗣️ Buchstabieren', question: 'Buchstabiere numele:', word: 'Klaus', accept: ['k-l-a-u-s', 'k l a u s', 'klaus'], correct: 'K-L-A-U-S', explanation: 'Klaus = K — L — A — U — S.' },
    { type: 'spell', category: '🗣️ Buchstabieren', question: 'Buchstabiere numele:', word: 'Müller', accept: ['m-ü-l-l-e-r', 'm-ue-l-l-e-r', 'm ü l l e r', 'm ue l l e r', 'müller', 'mueller'], correct: 'M-Ü-L-L-E-R', explanation: 'Müller = M — Ü (u-umlaut) — L — L — E — R. Poți scrie și „ue" în loc de „ü".' },

    // 2x conjugare verbe heißen + buchstabieren
    { type: 'luckentext', category: '📝 Verbe', question: 'Completează verbul „heißen" la persoana corectă:', sentence: 'Ich ______ Claudia.', translation: 'Eu mă numesc Claudia.', accept: ['heiße', 'heisse'], correct: 'heiße', explanation: '„ich" → „heiße" (cu ß, dar acceptăm și „heisse").' },
    { type: 'luckentext', category: '📝 Verbe', question: 'Completează verbul „buchstabieren" la persoana corectă:', sentence: 'Du ______ sehr deutlich!', translation: 'Tu spui pe litere foarte clar!', accept: ['buchstabierst'], correct: 'buchstabierst', explanation: '„du" → „buchstabierst" (cu „st" la final, ca toate verbele regulate la persoana a 2-a singular).' }
];

let currentQuestionIndex = 0;
let userAnswers = {};
let testStarted = false;
let testCompleted = false;

function buildFinalTest() {
    const container = document.getElementById('final-test-container');
    if (!container) return;
    container.innerHTML = `
        <div id="test-intro" class="test-intro">
            <h3>🎯 Testează-ți cunoștințele!</h3>
            <p>Test final cu <strong>${finalTestData.length} întrebări</strong> despre alfabetul german, caracterele speciale și verbele „heißen" + „buchstabieren".</p>
            <ul class="test-info-list">
                <li>📋 Format: o întrebare pe pagină, cu navigare Înapoi / Următor</li>
                <li>✅ Feedback instant la fiecare întrebare</li>
                <li>🎓 Prag de promovare: 70%</li>
                <li>⏱️ Timp estimat: 8-10 minute</li>
            </ul>
            <button class="btn btn-check btn-large" onclick="startFinalTest()">▶ Începe testul</button>
        </div>
        <div id="test-wizard" class="test-wizard" style="display:none;">
            <div class="test-progress">
                <div class="test-progress-info">
                    <span id="progress-text">Întrebarea 1 / ${finalTestData.length}</span>
                    <span id="progress-category"></span>
                </div>
                <div class="test-progress-bar">
                    <div class="test-progress-fill" id="progress-fill"></div>
                </div>
            </div>
            <div id="question-container"></div>
            <div class="feedback" id="test-feedback"></div>
            <div class="test-controls">
                <button class="btn btn-secondary" onclick="prevQuestion()" id="test-prev-btn">← Înapoi</button>
                <button class="btn btn-check" onclick="checkCurrentQuestion()" id="test-check-btn">✓ Verifică</button>
                <button class="btn btn-check" onclick="nextQuestion()" id="test-next-btn">Următor →</button>
            </div>
        </div>
        <div id="test-results" class="test-results" style="display:none;"></div>
    `;
}

function startFinalTest() {
    testStarted = true;
    testCompleted = false;
    currentQuestionIndex = 0;
    userAnswers = {};
    document.getElementById('test-intro').style.display = 'none';
    document.getElementById('test-wizard').style.display = 'block';
    document.getElementById('test-results').style.display = 'none';
    showQuestion(0);
}

function showQuestion(index) {
    const q = finalTestData[index];
    const container = document.getElementById('question-container');
    const feedback = document.getElementById('test-feedback');
    const checkBtn = document.getElementById('test-check-btn');
    const nextBtn = document.getElementById('test-next-btn');
    const prevBtn = document.getElementById('test-prev-btn');
    document.getElementById('progress-text').textContent = `Întrebarea ${index + 1} / ${finalTestData.length}`;
    document.getElementById('progress-category').textContent = q.category;
    document.getElementById('progress-fill').style.width = `${((index + 1) / finalTestData.length) * 100}%`;
    prevBtn.style.display = index === 0 ? 'none' : 'inline-block';
    nextBtn.textContent = index === finalTestData.length - 1 ? '🏁 Finalizează' : 'Următor →';
    feedback.className = 'feedback';
    feedback.textContent = '';
    let questionHTML = '';
    if (q.type === 'multiple') {
        let optionsHTML = '';
        q.options.forEach((opt, i) => { optionsHTML += `<div class="mc-option"><input type="radio" name="test-answer" value="${opt.replace(/"/g, '&quot;')}" id="test-opt-${i}"><label for="test-opt-${i}">${opt}</label></div>`; });
        questionHTML = `<div class="test-question"><div class="test-question-label">${q.question}</div><div class="mc-options test-mc">${optionsHTML}</div></div>`;
    } else if (q.type === 'luckentext') {
        questionHTML = `<div class="test-question"><div class="test-question-label">${q.question}</div><div class="test-question-content">${q.sentence}</div><small class="test-translation">💬 ${q.translation}</small><input type="text" id="test-answer" class="test-input" placeholder="Scrie răspunsul..."></div>`;
    } else if (q.type === 'spell') {
        questionHTML = `<div class="test-question"><div class="test-question-label">${q.question}</div><div class="test-question-content"><span class="nomen-highlight" style="font-size: 1.3rem;">${q.word}</span></div><small class="test-translation">💡 Scrie literele despărțite cu cratimă (ex: A-N-N-A)</small><input type="text" id="test-answer" class="test-input" placeholder="ex: A-N-N-A"></div>`;
    }
    container.innerHTML = questionHTML;
    if (userAnswers[index] !== undefined) {
        if (q.type === 'multiple') {
            document.querySelectorAll('input[name="test-answer"]').forEach(r => {
                if (r.value === userAnswers[index].answer) r.checked = true;
            });
        } else {
            const input = document.getElementById('test-answer');
            if (input) input.value = userAnswers[index].answer;
        }
        if (userAnswers[index].checked) {
            displayFeedback(index);
            checkBtn.disabled = true;
            setAnswerDisabled(q.type, true);
        } else {
            checkBtn.disabled = false;
            setAnswerDisabled(q.type, false);
        }
    } else {
        checkBtn.disabled = false;
        setAnswerDisabled(q.type, false);
    }
}

function setAnswerDisabled(type, disabled) {
    if (type === 'multiple') {
        document.querySelectorAll('input[name="test-answer"]').forEach(r => r.disabled = disabled);
    } else {
        const el = document.getElementById('test-answer');
        if (el) el.disabled = disabled;
    }
}

function checkCurrentQuestion() {
    const q = finalTestData[currentQuestionIndex];
    let userAnswer = '';
    if (q.type === 'multiple') {
        const selected = document.querySelector('input[name="test-answer"]:checked');
        userAnswer = selected ? selected.value : '';
    } else {
        const input = document.getElementById('test-answer');
        userAnswer = input ? input.value.trim() : '';
    }
    if (!userAnswer) {
        const feedback = document.getElementById('test-feedback');
        feedback.className = 'feedback incorrect';
        feedback.textContent = 'Te rog să răspunzi înainte de verificare!';
        return;
    }
    let isCorrect = false;
    if (q.type === 'multiple') {
        isCorrect = userAnswer.toLowerCase() === q.correct.toLowerCase();
    } else if (q.type === 'spell') {
        const norm = userAnswer.toLowerCase().replace(/\s+/g, '').replace(/-/g, '');
        isCorrect = q.accept.some(a => {
            const aNorm = a.toLowerCase().replace(/\s+/g, '').replace(/-/g, '');
            return aNorm === norm;
        });
    } else {
        const userAnswerNorm = userAnswer.toLowerCase().replace(/\s+/g, ' ');
        isCorrect = q.accept.some(a => {
            const aNorm = a.toLowerCase().replace(/\s+/g, ' ');
            return aNorm === userAnswerNorm;
        });
    }
    userAnswers[currentQuestionIndex] = { answer: userAnswer, correct: isCorrect, checked: true };
    displayFeedback(currentQuestionIndex);
    document.getElementById('test-check-btn').disabled = true;
    setAnswerDisabled(q.type, true);
}

function displayFeedback(index) {
    const q = finalTestData[index];
    const ans = userAnswers[index];
    const feedback = document.getElementById('test-feedback');
    if (ans.correct) {
        feedback.className = 'feedback correct';
        feedback.innerHTML = `<strong>${q.correct}</strong> &mdash; ${q.explanation}`;
    } else {
        feedback.className = 'feedback incorrect';
        feedback.innerHTML = `Răspuns corect: <strong>${q.correct}</strong> &mdash; ${q.explanation}`;
    }
}

function nextQuestion() {
    if (currentQuestionIndex === finalTestData.length - 1) {
        finishTest();
    } else {
        currentQuestionIndex++;
        showQuestion(currentQuestionIndex);
        scrollToTest();
    }
}

function prevQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        showQuestion(currentQuestionIndex);
        scrollToTest();
    }
}

function scrollToTest() {
    const wizard = document.getElementById('test-wizard');
    if (wizard) wizard.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function finishTest() {
    testCompleted = true;
    let correct = 0;
    finalTestData.forEach((q, i) => { if (userAnswers[i] && userAnswers[i].correct) correct++; });
    const total = finalTestData.length;
    const percentage = Math.round((correct / total) * 100);
    const passed = percentage >= 70;
    let emoji, message, messageRo, badge;
    if (percentage === 100) { emoji = '🏆'; badge = 'PERFEKT!'; message = 'Ausgezeichnet!'; messageRo = 'Performanță excelentă!'; }
    else if (percentage >= 90) { emoji = '⭐'; badge = 'AUSGEZEICHNET'; message = 'Sehr gut!'; messageRo = 'Foarte bine!'; }
    else if (percentage >= 80) { emoji = '🎓'; badge = 'SEHR GUT'; message = 'Sehr gute Leistung!'; messageRo = 'Performanță foarte bună!'; }
    else if (percentage >= 70) { emoji = '✅'; badge = 'BESTANDEN'; message = 'Bestanden!'; messageRo = 'Promovat! Mai exersează puțin.'; }
    else if (percentage >= 50) { emoji = '📚'; badge = 'NICHT BESTANDEN'; message = 'Wiederhole die Theorie!'; messageRo = 'Repetă teoria!'; }
    else { emoji = '💪'; badge = 'WEITER ÜBEN'; message = 'Mehr Übung nötig!'; messageRo = 'Mai exersează!'; }
    const categoryStats = {};
    finalTestData.forEach((q, i) => {
        const cat = q.category;
        if (!categoryStats[cat]) categoryStats[cat] = { correct: 0, total: 0 };
        categoryStats[cat].total++;
        if (userAnswers[i] && userAnswers[i].correct) categoryStats[cat].correct++;
    });
    let statsHTML = '<div class="test-stats"><h4>📊 Detalii pe categorii:</h4><ul>';
    for (const cat in categoryStats) {
        const s = categoryStats[cat];
        const catPct = Math.round((s.correct / s.total) * 100);
        statsHTML += `<li>${cat}: <strong>${s.correct}/${s.total}</strong> (${catPct}%)</li>`;
    }
    statsHTML += '</ul></div>';
    let mistakesHTML = '';
    const mistakes = [];
    finalTestData.forEach((q, i) => { if (userAnswers[i] && !userAnswers[i].correct) mistakes.push({ q, i, userAns: userAnswers[i].answer }); });
    if (mistakes.length > 0) {
        mistakesHTML = '<div class="test-mistakes"><h4>📝 Întrebările greșite:</h4>';
        mistakes.forEach(m => {
            mistakesHTML += `<div class="mistake-item"><strong>Întrebarea ${m.i + 1}</strong> - ${m.q.category}<br><span style="color: #991b1b;">Răspunsul tău: <em>${m.userAns}</em></span><br><span style="color: #065f46;">Corect: <strong>${m.q.correct}</strong></span><br><small style="color: #6b7280;">${m.q.explanation}</small></div>`;
        });
        mistakesHTML += '</div>';
    }
    const wizard = document.getElementById('test-wizard');
    const results = document.getElementById('test-results');
    wizard.style.display = 'none';
    results.style.display = 'block';
    results.innerHTML = `
        <div class="test-back-top"><button class="btn btn-back" onclick="goBackToTheory()">← Întoarcere la teorie</button></div>
        <div class="test-result-card ${passed ? 'passed' : 'failed'}">
            <div class="test-result-emoji">${emoji}</div>
            <div class="test-result-badge">${badge}</div>
            <div class="test-result-score">${correct} / ${total}</div>
            <div class="test-result-percentage">${percentage}%</div>
            <div class="test-result-message"><p><strong>${message}</strong></p><p style="margin-top: 8px;">${messageRo}</p></div>
            ${passed ? '<div class="pass-mark">✓ Prag promovare: 70% atins!</div>' : '<div class="fail-mark">✗ Prag promovare: 70% (lipsesc ' + (Math.ceil(total * 0.7) - correct) + ' răspunsuri corecte)</div>'}
        </div>
        ${statsHTML}
        ${mistakesHTML}
        <div class="test-final-actions">
            <button class="btn btn-check" onclick="restartTest()">🔄 Reia testul</button>
            <button class="btn btn-back" onclick="goBackToTheory()">← Întoarcere la teorie</button>
        </div>
    `;
    results.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function restartTest() {
    if (confirm('Sigur vrei să reiei testul?')) {
        currentQuestionIndex = 0;
        userAnswers = {};
        testCompleted = false;
        document.getElementById('test-results').style.display = 'none';
        document.getElementById('test-wizard').style.display = 'block';
        showQuestion(0);
        scrollToTest();
    }
}

function goBackToTheory() {
    const teorieContent = document.getElementById('main-section-0');
    const arrow = document.querySelectorAll('.arrow')[0];
    if (teorieContent && !teorieContent.classList.contains('active')) {
        teorieContent.classList.add('active');
        if (arrow) arrow.classList.add('rotated');
    }
    const teorieSection = document.getElementById('teorie');
    if (teorieSection) teorieSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

document.addEventListener('DOMContentLoaded', function() { buildFinalTest(); });
