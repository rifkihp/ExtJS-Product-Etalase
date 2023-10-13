Ext.define('MyAdd.store.Course', {
    extend: 'Ext.data.Store',

    alias: 'store.course',

    model: 'MyAdd.model.Course',

    data: { items: [
        { id: 1, name: 'Flex', description: "This is the shorthand for flex-grow, flex-shrink and flex-basis combined. The second and third parameters are optional.", image: 'https://unsplash.it/800/600?image=59' },
        { id: 2, name: 'Flex Grow', description: "This defines the ability for a flex item to grow if necessary. It accepts a unitless value that serves as a proportion.", image: 'https://unsplash.it/800/600?image=11' },
        { id: 3, name: 'Flex Shrink', description: "This defines the ability for a flex item to shrink if necessary. Negative numbers are invalid.", image: 'https://unsplash.it/800/600?image=39' },
        { id: 4, name: 'Flex Basis', description: "This defines the default size of an element before the remaining space is distributed. It can be a length (e.g. 20%, 5rem, etc.) or a keyword. ", image: 'https://unsplash.it/800/600?image=82' }
    ]},

    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    }
});
