/**
 * Constants Definitions
 */

Ext.define('Foo.Const', {
    singleton: true,
    urls: {
        media: {
            newMessage: '/media/messages/chin-up.ogg'
        }
    },
    events: {
        newMessage: 'NEW_MESSAGE',
        beforeclose: 'beforeclose',
        beforeHide: 'beforeHide',
        beforeSave: 'beforeSave',
        beforeCancel: 'beforeCancel',
        beforeDelete: 'beforeDelete',
        beforeEdit: 'beforeEdit',
        save: 'save',
        saved: 'saved',
        finish: 'finish',
        deleted: 'deleted',
        cancel: 'cancel',
        failure: 'failure'
    },
    positions: {
        absolute: 'abs',
        topLeft: 'tl',
        topCenter: 'tc',
        topRight: 'tr',
        middleLeft: 'ml',
        middleCenter: 'mc',
        middleRight: 'mr',
        bottomLeft: 'bl',
        bottomCenter: 'bc',
        bottomRight: 'br'
    },
    debug: {
        time: false,
        routing: true,
        app: false,
        style: { borderColor: '#ff6c22', borderStyle: 'solid', borderWidth: '1px' },
        style2: { borderColor: '#3138ff', borderStyle: 'solid', borderWidth: '1px' }
    }
});
