Ext.define('MyAdd.model.Etalase', {
    extend: 'Ext.data.Model',

    fields: [
        { name: 'id', type: 'int' },
        { name: 'no', type: 'int' },
        { name: 'name', type: 'auto' },
        { name: 'description', type: 'auto' },
        { name: 'image', type: 'auto' },
        { name: 'price', type: 'int' },
        { name: 'shopee_url', type: 'auto' },
        { name: 'lazada_url', type: 'auto' }
    ]
});
