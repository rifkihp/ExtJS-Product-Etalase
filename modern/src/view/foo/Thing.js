
Ext.define('MyAdd.view.foo.Thing',{
    extend: 'Ext.panel.Panel',

    requires: [
        'MyAdd.view.foo.ThingController',
        'MyAdd.view.foo.ThingModel',
        'Ext.dataview.DataView'
    ],

    controller: 'foo-thing',
    viewModel: {
        type: 'foo-thing'
    },

    layout: {
        type: 'vbox',
        align: 'stretch'
    },

    cls: 'thing',

    items: [{
        xtype: 'dataview',
        flex: 1, 
        bind: '{allCourse}',
        scrollable: true,
        
        //selectedCls: 'ujian-item-selected',
        itemTpl:
            new Ext.XTemplate(
                
                    '<tpl for=".">',
                        '<div class="cards__item">',
                            '<div class="card">',
                                '<div class="card__image">',
                                    '<img src="{image}" />',
                                '</div>',

                                '<div class="card__content">',
                                    '<div class="card__title">{name}</div>',
                                    '<p class="card__text">{description}</p>',
                                    '<button class="btn btn--block card__btn">Button</button>',
                                '</div>',
                            '</div>',
                        '</div>',
                    '</tpl>'
            )

    }]
});
