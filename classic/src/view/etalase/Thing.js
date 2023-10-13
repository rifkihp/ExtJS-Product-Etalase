
Ext.define('MyAdd.view.etalase.Thing',{
    extend: 'Ext.panel.Panel',

    requires: [
        'MyAdd.view.etalase.ThingController',
        'MyAdd.view.etalase.ThingModel',
        'Ext.view.View'
    ],

    controller: 'etalase-thing',
    viewModel: {
        type: 'etalase-thing'
    },

    layout: {
        type: 'vbox',
        pack: 'center',
        align: 'center'
    },

    cls: 'etalse',

    items: [{
        xtype: 'panel',
        width: '50%',
        flex: 1,
        layout: {
            type: 'hbox',
            pack: 'center',
            align: 'stretch'
        },

        items: [{
            xtype: 'dataview',
            flex: 1, 
            bind: '{allEtalase}',
            scrollable: true,
                
            listeners: {
                select: 'onSelect'
            },
            
            //selectedCls: 'ujian-item-selected',
            itemTpl:
                new Ext.XTemplate(
                    
                    '<tpl for=".">',
                        '<div class="cards__item">',
                            '<div class="card">',
                                '<div class="card__image">',
                                    '<img  name="gambar" src="{image}" />',
                                '</div>',

                                '<div class="card__content">',
                                    '<div class="card__title">{name}</div>',
                                    '<div class="card__text">{description}</div>',
                                '</div>',

                                '<div class="card__button">',
                                    '<div class="card__etalase">{no}</div>',
                                    '<button class="btn__shopee" name="link_shopee">Shopee</button>',
                                    '<button class="btn__lazada" name="link_lazada">Lazada</button>',
                                '</div>',
                            '</div>',
                        '</div>',
                    '</tpl>'
                )

        }]
    }]
});
