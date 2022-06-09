export default {
    title: 'Address',
    name: 'address',
    type: 'object',
    fieldsets: [
        {
            title: 'Address',
            name: 'address',
        },
    ],
    fields: [
        {
            title: 'Street Address',
            name: 'street',
            description:'Street address ex: 123 abc street',
            type: 'string',
            validation: Rule => Rule.required()
        },
        {
            title: 'Unit Number',
            name: 'unit',
            description:'optional',
            type: 'string',
        },
        {
            title: 'City',
            name: 'city',
            type: 'string',
            validation: Rule => Rule.required()
        },
        {
            title: 'Province/State',
            name: 'province',
            description:'Province or State',
            type: 'string',
            validation: Rule => Rule.required()
        },
        {
            title: 'Country',
            name: 'country',
            description:'optional',
            type: 'string',
        },
        {
            title: 'Postal Code',
            name: 'postal',
            description:'optional',
            type: 'string',
        },
    ],
    preview: {
        select: {
            title: 'Get in Touch',

        },
        prepare({ title, }) {
            return {
                title,
            };
        },
    },
};
