// import fs from "fs";
// const filename = 'src/contents/posts/test.md';

// function read() {
//     return new Promise((resolve, reject) => {
//         fs.readFile(filename, 'utf-8', (err, data) => {
//             if (err) {
//                 reject(err);
//             }
//             resolve(data);
//         });
//     });
// }

/** @type {import('./$types').PageLoad} */
export async function load({params}) {
    try {
        const data = "test";
        console.log(data);
        return {
            content: data,
        }
    } catch {
        return {
            content: "エラー",
        }
    }
}
