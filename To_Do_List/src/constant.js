export const routes = [{
        name: "Home",
        link: "/",
    },
    {
        name: "Services",
        link: "/services",

        subRoutes: [{
                name: "Web Development",
                link: "/service/web-development",
            },
            {
                name: "Mobile Development",
                link: "/service/mobile-development",
            },
            {
                name: "UI/UX Design",
                link: "/service/ui-ux-design",
            },
        ],
    },
    {
        name: "Products",
        link: "/products",
    },
    {
        name: "Contact Us",
        link: "/contact",
    },
    {
        name: "To Do List",
        link: "/to-do-list",
    },
    {
        name: "About",
        link: "/About",
    },
];