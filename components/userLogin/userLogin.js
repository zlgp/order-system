//Component Object
Component({
    properties: {
    },
    data: {
        phone: '',
        code: '',
        areaCode: '' || '+86',
        areaId: '' || 1,
        show: false,
        list: [
            {
                name: '中国',
                code: '+86',
                id: 1
            },
            {
                name: '安哥拉',
                code: '+244',
                id: 2
            },
            {
                name: '阿富汗',
                code: '+93',
                id: 3
            },
            {
                name: '马尔代夫',
                code: '+960',
                id: 4
            },
        ],
    },
    methods: {
        showPopup() {
            this.setData({ show: true });
        },

        onClose() {
            this.setData({ show: false });
        },
        hanldeCell(e) {
            this.setData({
                areaCode: e.target.dataset.code,
                id: e.target.dataset.id,
                show: false
            });
        }
    },
    created: function () {

    },
    attached: function () {

    },
    ready: function () {

    },
    moved: function () {

    },
    detached: function () {

    },
});