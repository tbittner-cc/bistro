const fs = require('fs');
const path = require('path');

const inputFile = 'recipe-stubs.txt'; 
const outputDir = './src/data/recipes'; 

// Function to parse input file content
function parseInputFile(content) {
    const entries = content.trim().split('\n\n');
    return entries.map(entry => {
        const  [title, categories, slug] = entry.split('\n');
        const data = {};
        data.title = title;
        data.categories = categories;
        data.slug = slug;
        return data;
    });
}

function generateOutputFiles(entries) {
    if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir);
    }

    entries.forEach(entry => {
        const filePath = path.join(outputDir, `${entry.slug}.md`);
        const fileContent = `---
title: "${entry.title}"
categories: [${entry.categories}]
slug: "${entry.slug}"
---
\n`;
        fs.writeFileSync(filePath, fileContent);
    });
}

fs.readFile(inputFile, 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    const entries = parseInputFile(data);
    generateOutputFiles(entries);
});
