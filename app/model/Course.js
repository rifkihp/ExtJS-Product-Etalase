Ext.define('MyAdd.model.Course', {
    extend: 'Ext.data.Model',

    fields: [
        { name: 'id', type: 'int' },
        { name: 'name', type: 'auto' },
        { name: 'description', type: 'auto' },
        { name: 'image', type: 'auto' }

    ]
});
