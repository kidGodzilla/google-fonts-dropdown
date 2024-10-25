class FontPreviewDropdown {
    constructor(selector, fontNames, callback, imagesPath = '../images/') {
        this.container = document.querySelector(selector);
        this.fontNames = fontNames.sort();
        this.popularity = fontNames;
        this.callback = callback; // Callback function for font selection
        this.imagesPath = imagesPath;
        this.popularityThreshold = 250;
        this.selectedFont = 'Select a font';
        this.init();
    }

    init() {
        this.createDropdown();
        this.populateOptions();
        this.setupEvents();
    }

    createDropdown() {
        this.container.innerHTML = `
            <div class="google-font-preview-dropdown">
                <div class="font-dropdown">
                    <div class="selected-font">
                        <span class="selected-font-display">${this.selectedFont}</span>
                        <span class="dropdown-caret"></span>
                    </div>
                    <div class="font-options">
                        <input type="text" class="font-search-input" placeholder="Search fonts...">
                    </div>
                </div>
                <div class="font-preview"></div>
            </div>
        `;
        this.fontOptions = this.container.querySelector('.font-options');
        this.selectedFontDisplay = this.container.querySelector('.selected-font-display');
        this.searchInput = this.container.querySelector('.font-search-input');
        this.previewDiv = this.container.querySelector('.font-preview');
    }

    populateOptions() {
        this.fontNames.forEach(fontName => {
            if (this.popularity.indexOf(fontName) < this.popularityThreshold && !fontName.toLowerCase().includes('icon')) {
                const option = document.createElement('div');
                const imagePath = `${this.imagesPath}${fontName.replace(/ /g, '_')}.png`;

                option.innerHTML = `<img src="${imagePath}" alt="${fontName}" loading="lazy" onerror="this.parentElement.remove();">`;
                option.setAttribute('data-font-name', fontName);

                option.onclick = (e) => {
                    e.stopPropagation();
                    this.selectedFontDisplay.textContent = fontName;
                    this.updatePreview(imagePath);
                    this.fontOptions.style.display = 'none';

                    // Call the callback function with the selected font and image path
                    if (this.callback) {
                        this.callback(fontName, imagePath);
                    }
                };

                this.fontOptions.appendChild(option);
            }
        });
    }

    setupEvents() {
        const dropdown = this.container.querySelector('.font-dropdown');

        dropdown.onclick = (e) => {
            this.fontOptions.style.display = this.fontOptions.style.display === 'block' ? 'none' : 'block';
            this.searchInput.focus();
        };

        this.searchInput.addEventListener('input', () => {
            const searchTerm = this.searchInput.value.toLowerCase();
            const options = this.fontOptions.querySelectorAll('div');

            options.forEach(option => {
                const fontName = option.getAttribute('data-font-name').toLowerCase();
                option.style.display = fontName.includes(searchTerm) ? 'flex' : 'none';
            });
        });

        window.onclick = (event) => {
            if (!dropdown.contains(event.target)) {
                this.fontOptions.style.display = 'none';
            }
        };
    }

    updatePreview(imagePath) {
        this.previewDiv.innerHTML = `<img src="${imagePath}" alt="Font Preview">`;
    }
}

// Export the library if using modules
if (typeof module !== 'undefined') {
    module.exports = FontPreviewDropdown;
}
