WORLD LAYOUT PATCH V5 — for the latest World Globe v4 app
This is a patch, not a replacement with older source files. It preserves your current questions.js, styles.css, globe and five-second quiz reveal.

INSTALL AUTOMATICALLY
1. Extract world-layout-fix.js and install_world_layout_fix.py into the folder containing your CURRENT index.html (the v4 app with world wonders).
2. Run: python install_world_layout_fix.py
3. Hard-refresh browser. Android: copy updated index.html and world-layout-fix.js into assets, keeping other files, and rebuild.
The installer backs up index.html and adds one script reference. It is safe to run again.

OR INSTALL MANUALLY
Place world-layout-fix.js alongside your current index.html. Insert this AFTER questions.js and immediately before </body>:
<script src="world-layout-fix.js?v=5"></script>
No need to replace questions.js or styles.css.

CHANGES
Globe section no longer flex-shrinks to a narrow strip. Full SVG aspect ratio preserved and world pages scroll vertically.
Mouse wheel scrolls the page instead of being captured for globe zoom; use +/- buttons for zoom.
On phones, default swipe scrolls. Tap Touch mode: Scroll to switch to Spin globe when rotating. Tap again to restore scrolling.
World Wonders removed from top navigation and accessible inside World Map. Both globe subviews include Home and World Map / World Wonders buttons.
Home opens a new simple menu for India Map, World Map, Quiz Time and Body Parts. Wonders is not a home tile.
Only applies layout changes to world, wonders and the new home page. Other page layouts are not altered.

VALIDATION
JavaScript syntax checked; Python installer syntax checked and tested for script insertion, backup preservation and safe repeat execution. Browser/Android visual and touch-device testing still required.
