// Blog Configuration
export const blogConfig = {
    postsPerPage: 6,
    showReadTime: true,
    enableComments: false,
    categories: ["devlog", "tutorial", "personal", "tech", "projects"],
    defaultThumbnail: "/images/blog/default.png",
    author: {
        name: "Puppy-Z4nx",
        avatar: "/images/avatar.png",
    },
};

const blogPosts = [
    {
        id: "hello-world",
        title: "Hello World!: My first blog post",
        description: "Welcome to my devlog! Here, I will share my journey of exploring web development.",
        date: "2026-04-27",
        tags: ["general", "intro","The First Post"],
        filename: "hello-world.md",
        thumbnail: "/images/blog/",
        readTime: "2 min",
        author: "ethpr",
        featured: true,
        category: "personal",
    },
];

export default blogPosts;
