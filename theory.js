// ============================================
// TEORIE - DAS DEUTSCHE ALPHABET
// Claudia Toth · Curs A0.1 · Lecția 1 din 7
// ============================================

const theoryHTML = `
    <!-- 0: Alfabetul german (26 litere) -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(0)">
            <span>🔤 1. Alfabetul german (26 de litere)</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-0">
            <div class="lesson-audio">
                <div class="audio-player">
                    <button class="audio-btn" onclick="toggleAudio(event, 'audio-0')" id="btn-audio-0">▶</button>
                    <audio id="audio-0" preload="none"><source src="audio/01-alphabet.mp3" type="audio/mpeg"></audio>
                </div>
                <span class="lesson-audio-label">🔊 Ascultă tot alfabetul</span>
            </div>
            <div class="theory-box">
                <h4>De la A la Z — exact ca alfabetul latin, dar cu pronunție diferită</h4>
                <p>Alfabetul german are <strong>26 de litere</strong>, ca cel latin / românesc. Diferența e că <strong>numele literelor</strong> și <strong>pronunția lor în cuvinte</strong> nu sunt la fel ca în limba română.</p>
                <p style="margin-top: 8px;">În tabelul de mai jos vezi: <strong>litera</strong> · <strong>cum se citește numele literei</strong> (cum o pronunți când spui pe litere) · <strong>simbolul fonetic IPA</strong>.</p>
            </div>

            <table class="theory-table">
                <thead><tr><th>Litera</th><th>Numele literei</th><th>IPA</th><th>Litera</th><th>Numele literei</th><th>IPA</th></tr></thead>
                <tbody>
                    <tr><td><strong>A / a</strong></td><td>a</td><td>[a:]</td><td><strong>N / n</strong></td><td>en</td><td>[ɛn]</td></tr>
                    <tr><td><strong>B / b</strong></td><td>be</td><td>[be:]</td><td><strong>O / o</strong></td><td>o</td><td>[o:]</td></tr>
                    <tr><td><strong>C / c</strong></td><td>țe</td><td>[tse:]</td><td><strong>P / p</strong></td><td>pe</td><td>[pe:]</td></tr>
                    <tr><td><strong>D / d</strong></td><td>de</td><td>[de:]</td><td><strong>Q / q</strong></td><td>cu</td><td>[ku:]</td></tr>
                    <tr><td><strong>E / e</strong></td><td>e</td><td>[e:]</td><td><strong>R / r</strong></td><td>er (ușor nazal)</td><td>[ɛʁ]</td></tr>
                    <tr><td><strong>F / f</strong></td><td>ef</td><td>[ɛf]</td><td><strong>S / s</strong></td><td>es</td><td>[ɛs]</td></tr>
                    <tr><td><strong>G / g</strong></td><td>ghe</td><td>[ge:]</td><td><strong>T / t</strong></td><td>te</td><td>[te:]</td></tr>
                    <tr><td><strong>H / h</strong></td><td>ha</td><td>[ha:]</td><td><strong>U / u</strong></td><td>u</td><td>[u:]</td></tr>
                    <tr><td><strong>I / i</strong></td><td>i</td><td>[i:]</td><td><strong>V / v</strong></td><td>fau</td><td>[faʊ]</td></tr>
                    <tr><td><strong>J / j</strong></td><td>iot</td><td>[jɔt]</td><td><strong>W / w</strong></td><td>ve</td><td>[ve:]</td></tr>
                    <tr><td><strong>K / k</strong></td><td>ca</td><td>[ka:]</td><td><strong>X / x</strong></td><td>iks</td><td>[iks]</td></tr>
                    <tr><td><strong>L / l</strong></td><td>el</td><td>[ɛl]</td><td><strong>Y / y</strong></td><td>ipsilon</td><td>[ˈʏpsilɔn]</td></tr>
                    <tr><td><strong>M / m</strong></td><td>em</td><td>[ɛm]</td><td><strong>Z / z</strong></td><td>țet</td><td>[tsɛt]</td></tr>
                </tbody>
            </table>

            <div class="theory-box" style="background: #fef3c7; border-color: #f59e0b;">
                <h4>⚠️ Atenție la cele 6 litere „cu surprize"</h4>
                <ul>
                    <li><strong>C</strong> = „<u>țe</u>" (NU „che" / „si")</li>
                    <li><strong>G</strong> = „<u>ghe</u>" (NU „ge" / „dji")</li>
                    <li><strong>J</strong> = „<u>iot</u>" (în cuvinte se citește ca „i" românesc: <em>ja</em> = „ia")</li>
                    <li><strong>V</strong> = „<u>fau</u>" (în cuvinte se citește ca „f": <em>Vater</em> = „fater")</li>
                    <li><strong>W</strong> = „<u>ve</u>" (în cuvinte se citește ca „v": <em>Wasser</em> = „vasăr")</li>
                    <li><strong>Z</strong> = „<u>țet</u>" (în cuvinte se citește ca „ț": <em>Zeit</em> = „țait")</li>
                </ul>
            </div>
        </div>
    </div>

    <!-- 1: Sonderzeichen -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(1)">
            <span>✨ 2. Sonderzeichen — caracterele speciale ale germanei (ä, ö, ü, ß)</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-1">
            <div class="lesson-audio">
                <div class="audio-player">
                    <button class="audio-btn" onclick="toggleAudio(event, 'audio-1')" id="btn-audio-1">▶</button>
                    <audio id="audio-1" preload="none"><source src="audio/02-sonderzeichen.mp3" type="audio/mpeg"></audio>
                </div>
                <span class="lesson-audio-label">🔊 Ascultă caracterele speciale</span>
            </div>
            <div class="theory-box">
                <h4>4 caractere speciale care nu există în română</h4>
                <p>Pe lângă cele 26 de litere clasice, germana folosește <strong>3 umlaute</strong> (vocale cu două puncte deasupra) și o literă unică numită <strong>Eszett</strong> sau <strong>scharfes S</strong> (s ascuțit).</p>
                <p style="margin-top: 8px;">Aici doar le cunoști. <strong>Pronunția detaliată</strong> a umlautelor o vei învăța în <strong>Lecția 4</strong>.</p>
            </div>

            <table class="theory-table">
                <thead><tr><th>Caracter</th><th>Nume</th><th>IPA</th><th>Exemplu</th><th>Traducere</th></tr></thead>
                <tbody>
                    <tr><td><strong>Ä / ä</strong></td><td>a-umlaut</td><td>[ɛ:]</td><td>der Bär</td><td><span class="ro-translation">ursul</span></td></tr>
                    <tr><td><strong>Ö / ö</strong></td><td>o-umlaut</td><td>[ø:]</td><td>schön</td><td><span class="ro-translation">frumos</span></td></tr>
                    <tr><td><strong>Ü / ü</strong></td><td>u-umlaut</td><td>[y:]</td><td>die Tür</td><td><span class="ro-translation">ușa</span></td></tr>
                    <tr><td><strong>ß</strong></td><td>Eszett (es-țet)</td><td>[ɛsˈtsɛt]</td><td>die Straße</td><td><span class="ro-translation">strada</span></td></tr>
                </tbody>
            </table>

            <div class="theory-box" style="background: #dbeafe; border-color: #3b82f6;">
                <h4>💡 Bun de știut despre ß</h4>
                <ul>
                    <li><strong>ß</strong> apare doar la <u>literele mici</u> — NU există majusculă uzuală</li>
                    <li><strong>ß</strong> înlocuiește un <strong>„ss"</strong> după o vocală lungă sau diftong: <em>die Straße</em>, <em>weiß</em>, <em>groß</em></li>
                    <li>Dacă tastatura ta nu are ß, poți scrie <strong>„ss"</strong> — toți germanii vor înțelege</li>
                    <li>Umlautele se pot scrie și ca: <strong>ä → ae</strong>, <strong>ö → oe</strong>, <strong>ü → ue</strong> (de exemplu pe tastaturi engleze)</li>
                </ul>
            </div>
        </div>
    </div>

    <!-- 2: Reguli generale de citire -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(2)">
            <span>📖 3. 4 reguli generale de citire — bazele pronunției germane</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-2">
            <div class="lesson-audio">
                <div class="audio-player">
                    <button class="audio-btn" onclick="toggleAudio(event, 'audio-2')" id="btn-audio-2">▶</button>
                    <audio id="audio-2" preload="none"><source src="audio/03-reguli-citire.mp3" type="audio/mpeg"></audio>
                </div>
                <span class="lesson-audio-label">🔊 Ascultă regulile</span>
            </div>
            <div class="theory-box">
                <h4>🎯 Regula 1 — germana se citește aproape cum se scrie</h4>
                <p>Spre deosebire de engleză sau franceză, în germană <strong>fiecare literă se aude</strong> și pronunția e foarte consecventă. După ce înveți câteva reguli (în lecțiile următoare), poți citi <strong>orice cuvânt</strong> chiar dacă nu îl cunoști.</p>
                <div class="example-box">
                    <p class="de"><strong>Hund</strong> → „hund" (toate literele se aud)</p>
                    <p class="ro">câinele</p>
                </div>
            </div>

            <div class="theory-box">
                <h4>🎯 Regula 2 — vocalele pot fi lungi sau scurte</h4>
                <p>În germană fiecare vocală are <strong>două variante</strong>: una <strong>lungă</strong> (ținută mai mult timp) și una <strong>scurtă</strong> (rapidă). Lungimea schimbă sensul cuvântului!</p>
                <table class="theory-table">
                    <thead><tr><th>Vocală scurtă</th><th>Vocală lungă</th></tr></thead>
                    <tbody>
                        <tr>
                            <td><strong>im</strong> = în<br><span class="ro-translation">i scurt</span></td>
                            <td><strong>ihm</strong> = lui<br><span class="ro-translation">i lung (cu „h" surd)</span></td>
                        </tr>
                        <tr>
                            <td><strong>Bett</strong> = pat<br><span class="ro-translation">e scurt</span></td>
                            <td><strong>Beet</strong> = strat de flori<br><span class="ro-translation">e lung (dublat)</span></td>
                        </tr>
                    </tbody>
                </table>
                <p style="margin-top: 10px;">📌 <strong>Detalii complete</strong> despre vocale lungi/scurte vin în Lecția 2 (despre litera „e") și Lecția 4 (umlautele).</p>
            </div>

            <div class="theory-box">
                <h4>🎯 Regula 3 — substantivele se scriu cu MAJUSCULĂ</h4>
                <p>Asta e <strong>unic în germană</strong>: orice substantiv (nume de obiect, ființă, idee) începe cu <u>majusculă</u> — chiar și în mijlocul propoziției!</p>
                <div class="example-box">
                    <p class="de">Ich kaufe ein <strong>Buch</strong> und einen <strong>Apfel</strong>.</p>
                    <p class="ro">Eu cumpăr o carte și un măr.</p>
                </div>
                <p>Așa recunoști imediat substantivele într-un text: încep cu literă mare.</p>
            </div>

            <div class="theory-box">
                <h4>🎯 Regula 4 — accentul cade de obicei pe prima silabă</h4>
                <p>În cuvintele germane „pure" (nu de origine străină), <strong>silaba accentuată</strong> e prima.</p>
                <div class="example-box">
                    <p class="de"><u>MUT</u>ter, <u>VA</u>ter, <u>HUN</u>d, <u>SCHU</u>le, <u>BUCH</u>staben</p>
                    <p class="ro">mama, tatăl, câinele, școala, literele</p>
                </div>
                <p>📌 Excepții: cuvinte din alte limbi (Computer, Restaurant) sau cu prefixe neseparabile (verlaufen, beschreiben) — vor fi explicate la nivelele următoare.</p>
            </div>
        </div>
    </div>

    <!-- 3: Wie buchstabiert man -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(3)">
            <span>🗣️ 4. „Wie buchstabiert man …?" — cum spui un cuvânt pe litere</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-3">
            <div class="lesson-audio">
                <div class="audio-player">
                    <button class="audio-btn" onclick="toggleAudio(event, 'audio-3')" id="btn-audio-3">▶</button>
                    <audio id="audio-3" preload="none"><source src="audio/04-buchstabieren.mp3" type="audio/mpeg"></audio>
                </div>
                <span class="lesson-audio-label">🔊 Ascultă dialogul</span>
            </div>
            <div class="theory-box">
                <h4>De ce e important?</h4>
                <p>Când îți rezervi o cameră de hotel, semnezi un contract sau te prezinți la telefon, germanii cer foarte des: <strong>„Wie buchstabiert man das?"</strong> = „Cum se scrie pe litere?"</p>
                <p style="margin-top: 8px;">Răspunzi <strong>literă cu literă</strong>, folosind numele german al fiecărei litere (din tabelul de la §1).</p>
            </div>

            <div class="theory-box" style="background: #ecfdf5; border-color: #10b981;">
                <h4>💬 Dialog model</h4>
                <p><strong>A:</strong> Ich heiße Andreea.<br>
                <span class="ro-translation">Eu mă numesc Andreea.</span></p>
                <p style="margin-top: 8px;"><strong>B:</strong> Wie buchstabiert man das?<br>
                <span class="ro-translation">Cum se scrie pe litere?</span></p>
                <p style="margin-top: 8px;"><strong>A:</strong> A — N — D — R — E — E — A.<br>
                <span class="ro-translation">a — en — de — er — e — e — a.</span></p>
            </div>

            <div class="theory-box">
                <h4>🎯 3 exemple practice (citește cu voce tare)</h4>
                <table class="theory-table">
                    <thead><tr><th>Numele</th><th>Cum îl buchstabiezi</th></tr></thead>
                    <tbody>
                        <tr>
                            <td><strong>Mihai</strong></td>
                            <td>em — i — ha — a — i<br><span class="ro-translation">M — I — H — A — I</span></td>
                        </tr>
                        <tr>
                            <td><strong>Petra</strong></td>
                            <td>pe — e — te — er — a<br><span class="ro-translation">P — E — T — R — A</span></td>
                        </tr>
                        <tr>
                            <td><strong>Anna</strong></td>
                            <td>a — en — en — a<br><span class="ro-translation">A — N — N — A</span></td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div class="theory-box" style="background: #fef3c7; border-color: #f59e0b;">
                <h4>💡 Trucuri utile la buchstabieren</h4>
                <ul>
                    <li><strong>Litere duble</strong> = se spun de două ori: „Anna" = a — en — <u>en</u> — a</li>
                    <li><strong>ß</strong> = se spune <strong>„Eszett"</strong> sau „scharfes Es": „Straße" = es — te — er — a — <u>Eszett</u> — e</li>
                    <li><strong>Umlaut</strong> = se spune <strong>„a-umlaut" / „o-umlaut" / „u-umlaut"</strong>: „Müller" = em — <u>u-umlaut</u> — el — el — e — er</li>
                    <li>Sau spui: <strong>„a wie Anton"</strong>, <strong>„be wie Berta"</strong> — cu nume cunoscute, ca să fii înțeles clar la telefon (alfabetul fonetic german)</li>
                </ul>
            </div>
        </div>
    </div>

    <!-- 4: Verbele heißen + buchstabieren -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(4)">
            <span>📝 5. Verbele „heißen" și „buchstabieren" — primele tale verbe</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-4">
            <div class="lesson-audio">
                <div class="audio-player">
                    <button class="audio-btn" onclick="toggleAudio(event, 'audio-4')" id="btn-audio-4">▶</button>
                    <audio id="audio-4" preload="none"><source src="audio/05-verbe.mp3" type="audio/mpeg"></audio>
                </div>
                <span class="lesson-audio-label">🔊 Ascultă conjugarea</span>
            </div>
            <div class="theory-box">
                <h4>2 verbe pe care le folosești la fiecare prezentare</h4>
                <p>În germană verbele se conjugă <strong>la 6 forme</strong>: ich (eu), du (tu), er/sie/es (el/ea), wir (noi), ihr (voi), sie/Sie (ei/ele/Dvs.).</p>
                <p style="margin-top: 8px;">Aici învățăm <strong>Präsens</strong> (prezentul) pentru cele două verbe pe care le auzi tot timpul în primele lecții: <strong>heißen</strong> (a se numi) și <strong>buchstabieren</strong> (a spune pe litere).</p>
            </div>

            <table class="theory-table">
                <thead><tr><th>Pronume</th><th>heißen<br><span style="font-weight: normal; color: rgba(255,255,255,0.85);">a se numi</span></th><th>buchstabieren<br><span style="font-weight: normal; color: rgba(255,255,255,0.85);">a spune pe litere</span></th></tr></thead>
                <tbody>
                    <tr><td><strong>ich</strong> <span class="ro-translation">eu</span></td><td><span class="verb">heiße</span></td><td><span class="verb">buchstabiere</span></td></tr>
                    <tr><td><strong>du</strong> <span class="ro-translation">tu</span></td><td><span class="verb">heißt</span></td><td><span class="verb">buchstabierst</span></td></tr>
                    <tr><td><strong>er / sie / es</strong> <span class="ro-translation">el / ea</span></td><td><span class="verb">heißt</span></td><td><span class="verb">buchstabiert</span></td></tr>
                    <tr><td><strong>wir</strong> <span class="ro-translation">noi</span></td><td><span class="verb">heißen</span></td><td><span class="verb">buchstabieren</span></td></tr>
                    <tr><td><strong>ihr</strong> <span class="ro-translation">voi</span></td><td><span class="verb">heißt</span></td><td><span class="verb">buchstabiert</span></td></tr>
                    <tr><td><strong>sie / Sie</strong> <span class="ro-translation">ei, ele / Dvs.</span></td><td><span class="verb">heißen</span></td><td><span class="verb">buchstabieren</span></td></tr>
                </tbody>
            </table>

            <div class="theory-box">
                <h4>💬 Exemple în propoziții</h4>
                <div class="example-box">
                    <p class="de">Ich <strong>heiße</strong> Claudia. Wie <strong>heißt</strong> du?</p>
                    <p class="ro">Eu mă numesc Claudia. Tu cum te numești?</p>
                </div>
                <div class="example-box">
                    <p class="de">Wie <strong>heißen</strong> Sie?</p>
                    <p class="ro">Cum vă numiți Dvs.? <em>(formal, politicos)</em></p>
                </div>
                <div class="example-box">
                    <p class="de"><strong>Buchstabiere</strong> bitte deinen Namen!</p>
                    <p class="ro">Spune-ți te rog numele pe litere!</p>
                </div>
                <div class="example-box">
                    <p class="de">Ich <strong>buchstabiere</strong>: M — I — H — A — I.</p>
                    <p class="ro">Eu spun pe litere: M — I — H — A — I.</p>
                </div>
            </div>

            <div class="theory-box" style="background: #fef3c7; border-color: #f59e0b;">
                <h4>⚠️ Atenție la „heißen"</h4>
                <ul>
                    <li>Conține caracterul special <strong>ß</strong> — la „du / er / sie / es / ihr" devine <strong>heißt</strong> (ß rămâne, NU devine „ss")</li>
                    <li>Forma „ich heiße" se citește <strong>„iș <u>haisă</u>"</strong> (ei = „ai", ß = „s")</li>
                    <li>Nu confunda cu <strong>heißen</strong> (a se numi) și <strong>heiß</strong> (fierbinte) — se scriu aproape la fel, dar înseamnă altceva!</li>
                </ul>
            </div>
        </div>
    </div>
`;

document.getElementById('theory-container').innerHTML = theoryHTML;
