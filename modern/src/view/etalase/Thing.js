
Ext.define('MyAdd.view.etalase.Thing',{
    extend: 'Ext.panel.Panel',

    requires: [
        'Ext.MessageBox',
        'MyAdd.view.etalase.ThingController',
        'MyAdd.view.etalase.ThingModel',
        'Ext.dataview.DataView'
    ],

    controller: 'etalase-thing',
    viewModel: {
        type: 'etalase-thing'
    },

    layout: {
        type: 'vbox',
        align: 'stretch'
    },

    cls: 'etalse',

    items: [{
        xtype: 'dataview',
        flex: 1, 
        bind: '{allEtalase}',
        scrollable: true,
        
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
            ),
            
        listeners: {
            childtap: 'onSelect'
        } 
    }]
});
