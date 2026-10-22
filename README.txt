QUIZ SUBJECT CENTRING FIX — FULL REPLACEMENT FILES
Replace BOTH questions.js and styles.css with these files. Keep index.html, images and Quiz-Bank.xlsx. Hard-refresh browser (Ctrl+Shift+R); Android: replace both assets and rebuild.
The old grid rules inside the script and duplicated grid/flex centring attempts in styles.css have been removed. The replacement uses centred wrapping Flexbox rows in both quiz modes.
Wide screen: 4 columns. Medium: 3. Small: 2. Incomplete final rows are centred. Text is centred inside tiles.
No separate patch or updater needed. Remove separate quiz-centre-fix.js references if you added one earlier.
Browser verification: Chromium, with actual uploaded HTML and replacement JS/CSS, network disabled. Both Single Player and Arcade tested at widths 2488, 1366, 900 and 390 pixels. Row centres checked to within 1px. Ten-subject test confirmed centred final row of two. Picker hiding also checked. Online map loads and Android WebView were not tested in this run.
Existing map, flashcard, quiz logic and body features preserved; this update changes only quiz subject layout styles and its visibility class name.
