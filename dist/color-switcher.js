"use strict";

var ColorSwitcher = (function() {
    
    function initColorSwitcher(colorSheets) {
        var tempCon, colorSwitcher, controlBtn;

        // Optional: Skip if no colorSheets are provided (if you still want the gear)
        if (!colorSheets || Object.prototype.toString.call(colorSheets) !== "[object Array]") {
            colorSheets = []; // Empty array to avoid errors
        }

        tempCon = document.createDocumentFragment();
        
        colorSwitcher = document.createElement("div");
        colorSwitcher.classList.add("ColorSwitcher");

        controlBtn = document.createElement("button");
        controlBtn.classList.add("ColorSwitcher__control");

        // --- REMOVED: All dropdown panel logic (colorSwitchs) ---
        // --- REMOVED: Link holder logic (since no theme switching) ---

        // --- REMOVED: controlBtn click handler (no toggle behavior) ---

        // Just append the gear button
        colorSwitcher.appendChild(controlBtn);
        tempCon.appendChild(colorSwitcher);
        document.body.appendChild(tempCon);
    }

    return {
        init: initColorSwitcher
    };
})();