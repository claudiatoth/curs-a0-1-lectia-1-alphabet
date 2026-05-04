// ============================================
// MAIN.JS - Funcții principale
// Claudia Toth · Untrennbare Verben (Teil 1)
// ============================================

// ============================================
// TOGGLE SECȚIUNI PRINCIPALE
// ============================================
function toggleMainSection(i) {
    const content = document.getElementById('main-section-' + i);
    const arrow = document.querySelectorAll('.arrow')[i];
    if (content) content.classList.toggle('active');
    if (arrow) arrow.classList.toggle('rotated');
}

// ============================================
// TOGGLE SUB-SECȚIUNI (în Teorie)
// ============================================
function toggleSubSection(i) {
    const content = document.getElementById('sub-section-' + i);
    const arrow = document.querySelectorAll('.sub-arrow')[i];
    if (content) content.classList.toggle('active');
    if (arrow) arrow.classList.toggle('rotated');
}

// ============================================
// OPEN SECTION FROM NAVBAR
// ============================================
function openSection(index) {
    const contents = document.querySelectorAll('.section-content');
    const arrows = document.querySelectorAll('.arrow');
    if (contents[index] && !contents[index].classList.contains('active')) {
        contents[index].classList.add('active');
        if (arrows[index]) arrows[index].classList.add('rotated');
    }
}

// ============================================
// AUDIO CONTROL - Play / Stop
// Oprește celelalte audio-uri când pornește unul nou
// ============================================
let currentAudioId = null;

function toggleAudio(event, audioId) {
    event.stopPropagation();  // nu deschide subsecțiunea
    
    const audio = document.getElementById(audioId);
    const btn = document.getElementById('btn-' + audioId);
    if (!audio || !btn) return;
    
    // Dacă alt audio cântă, îl oprim
    if (currentAudioId && currentAudioId !== audioId) {
        const prevAudio = document.getElementById(currentAudioId);
        const prevBtn = document.getElementById('btn-' + currentAudioId);
        if (prevAudio) {
            prevAudio.pause();
            prevAudio.currentTime = 0;
        }
        if (prevBtn) prevBtn.textContent = '▶';
    }
    
    if (audio.paused) {
        audio.play().then(() => {
            btn.textContent = '⏸';
            currentAudioId = audioId;
        }).catch(err => {
            console.log('Audio nu poate fi redat:', err);
            alert('Fișierul audio nu este disponibil. Verifică dacă MP3-ul a fost încărcat în folder.');
            btn.textContent = '▶';
        });
    } else {
        audio.pause();
        audio.currentTime = 0;
        btn.textContent = '▶';
        currentAudioId = null;
    }
    
    // Când audio-ul se termină, schimbă butonul înapoi
    audio.onended = function() {
        btn.textContent = '▶';
        currentAudioId = null;
    };
}

// ============================================
// VERIFICĂ EXERCIȚIU INDIVIDUAL
// ============================================
function checkExercise(num) {
    let result;
    
    switch(num) {
        case 1: result = checkEx1(); break;
        case 2: result = checkEx2(); break;
        case 3: result = checkEx3(); break;
        case 4: result = checkEx4(); break;
        case 5: result = checkEx5(); break;
        default: return;
    }
    
    const percentage = Math.round((result.correct / result.total) * 100);
    
    let message = '';
    let emoji = '';
    if (percentage === 100) {
        emoji = '🏆';
        message = 'Perfekt! / Perfect!';
    } else if (percentage >= 80) {
        emoji = '⭐';
        message = 'Sehr gut! / Foarte bine!';
    } else if (percentage >= 60) {
        emoji = '👍';
        message = 'Gut! / Bine!';
    } else if (percentage >= 40) {
        emoji = '📚';
        message = 'Übe noch! / Mai exersează!';
    } else {
        emoji = '💪';
        message = 'Wiederhole die Theorie! / Repetă teoria!';
    }
    
    const scoreDiv = document.getElementById('score-' + num);
    scoreDiv.className = 'score show';
    scoreDiv.innerHTML = `
        <div class="score-value">${emoji} ${result.correct} / ${result.total} (${percentage}%)</div>
        <div class="score-message">${message}</div>
    `;
    
    scoreDiv.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

// ============================================
// RESETEAZĂ EXERCIȚIU INDIVIDUAL
// ============================================
function resetExercise(num) {
    let data;
    
    switch(num) {
        case 1:
            // Ex1 - selects
            ex1Data.forEach(item => {
                const el = document.getElementById(`ex1-${item.id}`);
                const fb = document.getElementById(`ex1-f${item.id}`);
                if (el) el.value = '';
                if (fb) {
                    fb.className = 'feedback';
                    fb.textContent = '';
                }
            });
            break;
        case 2:
            // Ex2 - text inputs
            ex2Data.forEach(item => {
                const el = document.getElementById(`ex2-${item.id}`);
                const fb = document.getElementById(`ex2-f${item.id}`);
                if (el) el.value = '';
                if (fb) {
                    fb.className = 'feedback';
                    fb.textContent = '';
                }
            });
            break;
        case 3:
            // Ex3 - radio buttons
            ex3Data.forEach(item => {
                const radios = document.querySelectorAll(`input[name="ex3-${item.id}"]`);
                radios.forEach(r => r.checked = false);
                const fb = document.getElementById(`ex3-f${item.id}`);
                if (fb) {
                    fb.className = 'feedback';
                    fb.textContent = '';
                }
            });
            break;
        case 4:
            // Ex4 - text inputs
            ex4Data.forEach(item => {
                const el = document.getElementById(`ex4-${item.id}`);
                const fb = document.getElementById(`ex4-f${item.id}`);
                if (el) el.value = '';
                if (fb) {
                    fb.className = 'feedback';
                    fb.textContent = '';
                }
            });
            break;
        case 5:
            // Ex5 - text inputs
            ex5Data.forEach(item => {
                const el = document.getElementById(`ex5-${item.id}`);
                const fb = document.getElementById(`ex5-f${item.id}`);
                if (el) el.value = '';
                if (fb) {
                    fb.className = 'feedback';
                    fb.textContent = '';
                }
            });
            break;
    }
    
    // Reset score pentru exercițiul respectiv
    const scoreDiv = document.getElementById('score-' + num);
    if (scoreDiv) {
        scoreDiv.className = 'score';
        scoreDiv.innerHTML = '';
    }
    
    // Scroll la începutul exercițiului
    const exSection = document.getElementById('ex' + num);
    if (exSection) {
        exSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}
