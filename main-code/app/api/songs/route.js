import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
    try {
        const publicDir = path.join(process.cwd(), 'public', 'data');

        if (!fs.existsSync(publicDir)) {
            return NextResponse.json({ error: 'Data directory not found' }, { status: 404 });
        }

        const getAllSongs = (dir, category = '') => {
            let songs = [];
            const items = fs.readdirSync(dir, { withFileTypes: true });

            for (const item of items) {
                const fullPath = path.join(dir, item.name);

                if (item.isDirectory()) {
                    // If top level, first level is category
                    const nextCategory = category === '' ? item.name : category;
                    songs = songs.concat(getAllSongs(fullPath, nextCategory));
                } else if (item.name.toLowerCase().endsWith('.mp3')) {
                    const title = item.name.replace(/\.[^/.]+$/, "");
                    const album = path.basename(dir);
                    const possibleExtensions = ['.png', '.jpg', '.jpeg', '.webp'];

                    let coverImg = null;

                    // 1. Try to find image with exact same name as song
                    for (const ext of possibleExtensions) {
                        const imgPath = path.join(dir, title + ext);
                        if (fs.existsSync(imgPath)) {
                            coverImg = fullPath
                                .replace(path.join(process.cwd(), 'public'), '')
                                .replace(/\\/g, '/')
                                .replace(item.name, title + ext);
                            break;
                        }
                    }

                    // 2. Try to find any image in the same directory if title-match fails
                    if (!coverImg) {
                        const files = fs.readdirSync(dir);
                        const firstImg = files.find(f => {
                            const ext = path.extname(f).toLowerCase();
                            return possibleExtensions.includes(ext);
                        });

                        if (firstImg) {
                            coverImg = fullPath
                                .replace(path.join(process.cwd(), 'public'), '')
                                .replace(/\\/g, '/')
                                .replace(item.name, firstImg);
                        }
                    }

                    const audioUrl = fullPath
                        .replace(path.join(process.cwd(), 'public'), '')
                        .replace(/\\/g, '/');

                    songs.push({
                        id: Buffer.from(audioUrl).toString('base64').substring(0, 10), // Shorten ID
                        title: title,
                        name: album,
                        category: category,
                        album: album,
                        coverImg: coverImg || '/next.svg', // Fallback to next.svg or a placeholder if no image found
                        audioUrl: audioUrl
                    });
                }
            }
            return songs;
        };

        const songs = getAllSongs(publicDir);

        return NextResponse.json(songs);
    } catch (error) {
        console.error('API Error:', error);
        return NextResponse.json({ error: 'Internal Server Error', message: error.message }, { status: 500 });
    }
}
