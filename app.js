/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
    extend: 'MyAdd.Application',

    name: 'MyAdd',

    requires: [
        // This will automatically load all classes in the MyAdd namespace
        // so that application classes do not need to require each other.
        'MyAdd.*'
    ],

    // The name of the initial view to create.
    mainView: 'MyAdd.view.etalase.Thing'
});
