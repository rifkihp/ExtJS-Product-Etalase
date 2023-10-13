Ext.define('MyAdd.view.etalase.ThingModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.etalase-thing',
    
    stores: {
        allEtalase: {
            type: 'etalase'
        }
    }

});
