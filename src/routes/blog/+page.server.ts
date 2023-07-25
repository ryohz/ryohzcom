import fs from 'fs';

/** @type {import('./$types').PageServerLoad} */
export async function read_md() {
    const filename = 'src/contents/posts/test.md';
    fs.readFile(filename, 'utf8', (err, data) => {
        if (err) {
            console.error('cannot read markdown file');
            return;
        }
        console.log(data);
    });
}
