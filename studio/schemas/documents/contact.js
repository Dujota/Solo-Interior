import { MdContactMail } from "react-icons/md";

export default {
    name: "contact",
    title: "Contact Page",
    icon: MdContactMail,
    type: "document",
     __experimental_actions: [
    // /* "create", "delete", */ "update", "publish"
     "create", "delete", "update", "publish"
    ],
    fields: [
        {
            name: "title",
            title: "Title",
            type: "string",
            validation: Rule => Rule.required()
        },
        {
            name: "phone",
            title: "Phone Number",
            description:
                "Contact number",
            type: "string",
            validation: Rule => Rule.required()
        },
        {
            name: "email",
            title: "Email Address",
            description:
                "Email address",
            type: "string",
            validation: (Rule) => {
                Rule.regex(
                    /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
                    {
                        name: "email", // Error message is "Does not match email-pattern"
                        invert: false, // Boolean to allow any value that does NOT match pattern
                    }
                )

                Rule.required()
            }
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
            title: 'Address',
            name: 'address',
            type: 'address',
            validation: Rule => Rule.required()
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
            title: 'Social Media Links',
            name: 'socialMediaLinks',
            type: 'array',
            of: [{ type: 'cta' }]
        },
        // {
        //     name: "body",
        //     title: "Body",
        //     type: "contentBlock",
        //     validation: Rule => Rule.required()
        // },
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