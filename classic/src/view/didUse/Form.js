/**
 * Classe que define o form de "DidUse"
 *
 * =======================================
 * ###################################
 * MagnusBilling
 *
 * @package MagnusBilling
 * @author Adilson Leffa Magnus.
 * @copyright Copyright (C) 2005 - 2016 MagnusBilling. All rights reserved.
 * ###################################
 *
 * This software is released under the terms of the GNU Lesser General Public License v3
 * A copy of which is available from http://www.gnu.org/copyleft/lesser.html
 *
 * Please submit bug reports, patches, etc to https://github.com/magnusbilling/mbilling/issues
 * =======================================
 * Magnusbilling.org <info@magnussolution.com>
 * 24/09/2012
 */
Ext.define('MBilling.view.didUse.Form', {
    extend: 'Ext.ux.form.Panel',
    alias: 'widget.diduseform',
    initComponent: function() {
        var me = this;
        me.items = [{
            xtype: 'userlookup',
            ownerForm: me,
            hidden: App.user.isClient,
            readOnly: true
        }, {
            xtype: 'didcombo',
            readOnly: true
        }, {
            xtype: 'datefield',
            name: 'reservationdate',
            fieldLabel: t('reservationdate'),
            format: 'Y-m-d H:i:s'
        }];
        me.callParent(arguments);
    }
});