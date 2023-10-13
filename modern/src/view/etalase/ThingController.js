Ext.define('MyAdd.view.etalase.ThingController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.etalase-thing',

    onSelect: function( dataview, location, eOpts ) {
        var me     = this,
            target = location.source.target,
            record = location.record,
            view   = me.getView();
            
            if(target.name=='link_shopee') {
                var url = record.data['shopee_url'];
                
                //console.log(url);
                if(url!=null && url.length>0) {
                    window.open(url, '_blank').focus();    
                } else {
                    Ext.Msg.alert('Informasi', 'Saat ini belum tersedia.');
                }
            } else
            if(target.name=='link_lazada') {
                var url = record.data['lazada_url'];
                
                //console.log(url);
                if(url!=null && url.length>0) {
                    window.open(url, '_blank').focus();    
                } else {
                    Ext.Msg.alert('Informasi', 'Saat ini belum tersedia.');
                }
            } else
            if(target.name=='gambar') {
                var url = record.data['image'];
                
                //console.log(url);
                window.open(url, '_blank').focus();
                
            }    
    }

});
