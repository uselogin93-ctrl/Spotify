const fs = require('fs');
const path = require('path');

const publicDir = path.join(process.cwd(), 'main-code', 'public', 'data');

function getSongs(dir, category = '') {
    let songs = [];
    const items = fs.readdirSync(dir, { withFileTypes: true });

    for (const item of items) {
        const fullPath = path.join(dir, item.name);
        if (item.isDirectory()) {
            // If it's the top level 'data' folder, the first subdirectories are categories
            const nextCategory = category === '' ? item.name : category;
            songs = songs.concat(getSongs(fullPath, nextCategory));
        } else if (item.name.endsWith('.mp3')) {
            const title = item.name.replace('.mp3', '');
            const album = path.basename(dir);
            // Check for corresponding image
            const possibleExtensions = ['.png', '.jpg', '.jpeg', '.webp'];
            let coverImg = null;
            for (const ext of possibleExtensions) {
                const imgPath = path.join(dir, title + ext);
                if (fs.existsSync(imgPath)) {
                    // Convert to web path
                    coverImg = fullPath.replace(path.join(process.cwd(), 'main-code', 'public'), '').replace(/\\/g, '/').replace(title + '.mp3', title + ext);
                    break;
                }
            }

            // Fallback: search for any image in the directory if specific title match fails
            if (!coverImg) {
                const files = fs.readdirSync(dir);
                const firstImg = files.find(f => possibleExtensions.some(ext => f.endsWith(ext)));
                if (firstImg) {
                    coverImg = fullPath.replace(path.join(process.cwd(), 'main-code', 'public'), '').replace(/\\/g, '/').replace(item.name, firstImg);
                }
            }

            const audioUrl = fullPath.replace(path.join(process.cwd(), 'main-code', 'public'), '').replace(/\\/g, '/');

            songs.push({
                id: Buffer.from(audioUrl).toString('base64'),
                title: title,
                name: album,
                category: category,
                album: album,
                coverImg: coverImg || '/default-cover.png',
                audioUrl: audioUrl
            });
        }
    }
    return songs;
}

try {
    const songs = getSongs(publicDir);
    console.log(JSON.stringify(songs.slice(0, 5), null, 2));
    console.log(`Total songs found: ${songs.length}`);
} catch (error) {
    console.error(error);
}
