const puppeteer = require('puppeteer');
const fs = require('fs');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  // Load your HTML file with the font rendering script
  await page.goto('./index.html'); // I actually used file:// absolute paths here

  // Wait for at least one img tag to be created in the #images div
  await page.waitForFunction(() => {
    const imagesContainer = document.getElementById('images');
    return imagesContainer && imagesContainer.querySelectorAll('img').length > 0;
  }, { timeout: 50000 }); // Adjust timeout as needed

  // Take screenshots of each generated image
  const images = await page.$$eval('#images img', imgs => {
    return imgs.map(img => {
      return { src: img.src, alt: img.alt }; // Use alt attribute for the font name
    });
  });

  // Save each image as a PNG file using font names as filenames
  for (const image of images) {
    const base64Data = image.src.replace(/^data:image\/png;base64,/, "");
    const fileName = `images/${image.alt.replace(/[^a-zA-Z0-9]/g, '_')}.png`; // Replace invalid characters with underscores
    fs.writeFileSync(fileName, base64Data, 'base64');
    console.log(`Saved ${fileName}`);
  }

  await browser.close();
})();
