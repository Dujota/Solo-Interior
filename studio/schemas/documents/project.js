import { HiOutlineDocumentAdd } from "react-icons/hi";

export default {
    name: "project",
    title: "Project",
    icon: HiOutlineDocumentAdd,
    type: "document",
    fields: [
        {
            name: "title",
            title: "Title",
            type: "string",
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
        // {
        //     name: "author",
        //     title: "Author",
        //     type: "reference",
        //     to: { type: "author" },
        //     validation: Rule => Rule.required()
        // },
        {
            name: "heroImage",
            type: "mainImage",
            title: "Hero image",
            description: 'The highest resolution'
        },
        {
            name: "images",
            title: "Gallery Images",
            description: "Add a set of images for displaying in the slider gallery",
            type: "array",
            of: [{ type: "mainImage" }]

        },
        {
            name: "keywords",
            type: "keywords",
            title: "Keywords",
            description: 'Add keywords that describe the project'
        },
        // {
        //     name: 'keywords',
        //     type: 'array',
        //     title: 'Keywords',
        //     description: 'Add keywords that describes your event.',
        //     of: [{ type: 'string' }],
        //     options: {
        //         layout: 'tags'
        //     }
        // },
        // {
        //     name: "categories",
        //     title: "Categories",
        //     type: "array",
        //     of: [{ type: "reference", to: { type: "category" } }],
        //     validation: Rule => Rule.required()
        // },
        {
            name: "publishedAt",
            title: "Published at",
            // type: "datetime",
            type: "date",
            options:{
                dateFormat: 'YYYY-MM-DD',
            }
        }
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