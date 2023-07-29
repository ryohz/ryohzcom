export interface Post {
    slug: string,
    title: string,
    description: string,
    date: string,
    categories: string[],
    published: boolean
}

export interface Profile {
    name: string,
    tags: string[],
    description: string,
    icon: string
}

export interface Skill {
    title: string,
    description: string,
    icon: string,
    level: number
    category: "language" | "framework&library" | "tool"
}

