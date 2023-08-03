import type {Skill} from "$lib/types";

const skills: Skill[] = [
    {
        title: "Typescript",
        description: "web開発でいつも使っている",
        level: 2,
        category: "language",
        icon: "/icons/skills/typescript.png"
    },
    {
        title: "Neovim",
        description: "最近vscodeから乗り換えた。軽くて良い。",
        level: 2,
        category: "tool",
        icon: "/icons/skills/neovim.png"
    },
    {
        title: "Javascript",
        description: "typescriptを使うようになってからは最近は全く使っていない。",
        level: 2,
        category: "language",
        icon: "/icons/skills/javascript.png"
    },
    {
        title: "Rust",
        description: "最近はなにかプログラムを書こうと思ったらだいたいRustで書いている。言語仕様もrust-analyzerもとても良い。",
        level: 3,
        category: "language",
        icon: "/icons/skills/rust.png"
    },
    {
        title: "Svelte",
        description: "めっちゃ書きやすくていい。初見でもまとまった学習無しですぐに書くことができたから生産性が高い。",
        level: 2,
        category: "framework&library",
        icon: "/icons/skills/svelte.png"
    },
    {
        title: "Sveltekit",
        description: "Nextjsより使いやすい。ちなみにこのサイトはsveltekitで作っている。",
        level: 2,
        category: "framework&library",
        icon: "/icons/skills/sveltekit.png"
    },
    {
        title: "Git",
        description: "高校生になって半年ぐらいでやっと使い始めた。使わないで開発していたのが信じられない。",
        level: 3,
        category: "tool",
        icon: "/icons/skills/git.png"
    },
    {
        title: "React",
        description: "前までwebとデスクトップアプリ開発にこれを使ってた。最近は全く使っていない。",
        level: 3,
        category: "framework&library",
        icon: "/icons/skills/react.png"
    },
    {
        title: "C",
        description: "Cと同様で書くことは殆どないが、バイナリ解析について勉強していたときによく読んでいた。",
        level: 3,
        category: "language",
        icon: "/icons/skills/c.png",
    },
    {
        title: "C++",
        description: "同じく書くとは殆どないが、読むことはよくあった。",
        level: 4,
        category: "language",
        icon: "/icons/skills/cpp.svg"
    },
    {
        title: "Go",
        description: "Exploitや簡単なツールを書くときに使っている。",
        level: 3,
        category: "language",
        icon: "/icons/skills/go.png"
    },
    {
        title: "Python",
        description: "Exploitを書くときに使っている。デフォルトで巨大な整数を扱えるのは便利。",
        level: 2,
        category: "language",
        icon: "/icons/skills/python.png"
    },
    {
        title: "MariaDB",
        description: "MySQLとほぼ変わらないが、自分がメインで使っているosがArchlinuxとManjaroなのでMysqlよりもMariaDBのほうが使う。",
        level: 3,
        category: "tool",
        icon: "/icons/skills/maria.png"
    },
    {
        title: "Nasm",
        description: "少しなら読めた(今はできるかわからない。)",
        level: 4,
        category: "language",
        icon: "/icons/skills/nasm.svg"
    },
    {
        title: "Archlinux",
        description: "archlinuxをメインのosとして使っている。laptopではmanjaroを使っている。もうwindowsには戻れそうもない。",
        level: 2,
        category: "tool",
        icon: "/icons/skills/archlinux.png"
    },
    {
        title: "Tauri",
        description: "デスクトップアプリの開発に使っている。electronより大幅に軽くなってるしサイズも小さい。",
        level: 3,
        category: "framework&library",
        icon: "/icons/skills/tauri.png"
    },
    {
        title: "sqlite",
        description: "セキュリティとかあんまり考えなくて良いアプリを作るときはお手軽だから結構便利。",
        level: 2,
        category: "tool",
        icon: "/icons/skills/sqlite.png"
    }
]

export default skills;
