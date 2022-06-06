import { BsPersonBadge } from "react-icons/bs";

export default {
    name: "about",
    title: "About",
    icon: BsPersonBadge,
    type: "document",
     __experimental_actions: [
    /* "create", "delete", */ "update", "publish"
    ],
    fields: [
        {
            name: "title",
            title: "Title",
            type: "string",
            validation: Rule => Rule.required()
        },
        {
            name: "header",
            title: "Header",
            type: "keywords",
            validation: Rule => Rule.required()
        },
        {
            name: "slug",
            title: "Slug",
            type: "slug",
            validation: Rule => Rule.required(),
            options: {
                source: "title",
                maxLength: 96
            }
        },
        {
            name: "excerpt",
            description:
                "Write a short pararaph of this post (For SEO Purposes)",
            title: "Excerpt",
            rows: 5,
            type: "text",
            validation: Rule =>
                Rule.max(160).error(
                    "SEO descriptions are usually better when its below 160"
                )
        },
        {
            name: "body",
            title: "Body",
            type: "contentBlock",
            validation: Rule => Rule.required()
        },
        {
            name: "heroImage",
            type: "mainImage",
            title: "Hero image",
            description: 'The highest resolution'
        },
        {
            name: "keywords",
            type: "keywords",
            title: "Keywords",
            description: 'Add keywords that describe the yourself'
        },
    ],

    preview: {
        select: {
            title: "title",
        //     author: "author.name",
        //     media: "mainImage"
        // },
        // prepare(selection) {
        //     const { author } = selection;
        //     return Object.assign({}, selection, {
        //         subtitle: author && `by ${author}`
        //     });
        }
    }
};