//tabela rotinas
var id = 6;

mobiscroll.listview('#demo', {
    theme: 'material',
    themeVariant: 'light',
    lang: 'pt-BR',
    sortable: {
        handle: 'left'
    },
    stages: {
        left: [{
            key: 'stage1',
            icon: 'plus',
            color: '#31c6e7',
            text: 'Add',
            action: function (event, inst) {
                inst.add(null, '<input mbsc-checkbox type="checkbox" /> New Todo', event.index + 1);
            }
        }],
        right: [{
            key: 'stage2',
            color: '#009688',
            text: 'Remove',
            icon: 'remove',
            action: function (event, inst) {
                inst.remove(event.target);
                return false;
            }
        }]
    }
});

