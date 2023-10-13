Ext.define('MyAdd.store.Etalase', {
    extend: 'Ext.data.Store',

    alias: 'store.etalase',

    model: 'MyAdd.model.Etalase',

    /*data: { items: [
        { id: 1, no: 1, name: 'Wilona Set Gamis Outer Jubah Busui Premium', description: "This is the shorthand for flex-grow, flex-shrink and flex-basis combined. The second and third parameters are optional.", image: 'https://down-id.img.susercontent.com/file/id-11134207-7r991-lmg43yt6ozd334', harga: 229000, link_shopee: 'https://shope.ee/4fUcfh1w4P', link_lazada: '' },
        { id: 2, no: 2, name: '(AZIZAHZI) INARA GAMIS SET SYARI BUSUI PREMIUM', description: "This defines the ability for a flex item to grow if necessary. It accepts a unitless value that serves as a proportion.", image: 'https://down-id.img.susercontent.com/file/id-11134207-7r98y-lmgvnfl43auj16', harga: 229000, link_shopee: 'https://shope.ee/9UZr2wCIjQ', link_lazada: '' },
        { id: 3, no: 3, name: 'Flex Shrink', description: "This defines the ability for a flex item to shrink if necessary. Negative numbers are invalid.", image: 'https://down-id.img.susercontent.com/file/id-11134207-7r98x-lm6uww707r8rf2', harga: 229000, link_shopee: '', link_lazada: '' },
        { id: 4, no: 4, name: 'Flex Basis', description: "This defines the default size of an element before the remaining space is distributed. It can be a length (e.g. 20%, 5rem, etc.) or a keyword. ", image: 'https://unsplash.it/800/600?image=82', harga: 229000, link_shopee: '', link_lazada: '' }
    ]},*/

    pageSize: 100,

    proxy: {
        type: 'ajax',
        url: './server/public/etalase',
        reader: {
            type: 'json',
            rootProperty: 'data'
        }
    },

    autoLoad: true
});
