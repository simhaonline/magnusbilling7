/**
 * Class to define list of "Module"
 *
 * Adilson L. Magnus <info@magnussolution.com> 
 * 15/04/2013
 */
Ext.define('MBilling.view.module.List', {
    extend: 'Ext.ux.grid.Panel',
    alias: 'widget.modulelist',
    store: 'Module',
    initComponent: function() {
        var me = this;
        me.buttonCsv = false;
        me.allowPrint = false;
        me.buttonUpdateLot = false;
        me.allowCreate = false;
        me.allowDelete = false;
        me.columns = [{
            text: t('Id'),
            dataIndex: 'id',
            hidden: true
        }, {
            text: t('menu_text'),
            dataIndex: 'text'
        }, {
            text: t('IconCls'),
            dataIndex: 'icon_cls'
        }, {
            xtype: 'templatecolumn',
            tpl: '{idModuletext}',
            text: t('main_menu'),
            dataIndex: 'id_module',
            comboFilter: 'modulecombo'
        }, {
            text: t('Order'),
            dataIndex: 'priority'
        }];
        me.callParent(arguments);
    }
});