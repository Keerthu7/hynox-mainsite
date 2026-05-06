const fs = require('fs');
const path = require('path');

const dir = path.join(process.cwd(), 'app', 'services');
const files = fs.readdirSync(dir)
    .filter(d => fs.statSync(path.join(dir, d)).isDirectory())
    .map(d => path.join(dir, d, 'page.tsx'))
    .filter(f => fs.existsSync(f));

// Regex to match emojis and common dingbats
const emojiRegex = /[\p{Emoji_Presentation}\p{Extended_Pictographic}◈◉⬡✦⊞◎✨]/gu;

for (const file of files) {
    const content = fs.readFileSync(file, 'utf8');
    const matches = content.match(emojiRegex);
    if (matches) {
        const unique = [...new Set(matches)];
        console.log(`\n--- ${path.basename(path.dirname(file))} ---`);
        console.log(unique.join(' '));
    }
}
