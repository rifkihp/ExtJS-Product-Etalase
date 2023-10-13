Ext.define('MyAdd.view.foo.ThingModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.foo-thing',
    
    stores: {
        allCourse: {
            type: 'course'
        }
    }

});
