import type {Skill} from "$lib/types";

const skills: Skill[] = [
    {
        title: "Typescript",
        description: "web開発でいつも使っています",
        level: 2,
        category: "language",
        icon: "src/datas/icons/skills/typescript.png"
    },
    {
        title: "Neovim",
        description: "最近vscodeから乗り換えた。軽くて良い。",
        level: 3,
        category: "tool",
        icon: "src/datas/icons/skills/neovim.png"
    },
    {
        title: "Javascript",
        description: "typescriptを使うようになってからは最近は全く使っていない。",
        level: 3,
        category: "language",
        icon: "src/datas/icons/skills/javascript.png"
    },

]

export default skills;
