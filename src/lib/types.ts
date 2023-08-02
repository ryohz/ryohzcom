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

export interface Achivement {
    title: string,
    description: string,
    year: number,
    future: boolean,
    blog: string | false,
}

export interface Link {
    name: string,
    class: string,
    href: string,
}

export interface Head {
    home_title: string,
    blog_title: string,
    links_title: string,
    portfolio_title: string,
}
