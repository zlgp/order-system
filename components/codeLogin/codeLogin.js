//Component Object
Component({
    options: {
        multipleSlots: true // 在组件定义时的选项中启用多slot支持
    },
    // 接受父组件传过来的值
    properties: {
        innerText: {
            type: String,
            value: '',
        },

    },
    data: {
        username: '',
        password: '',
    },
    methods: {
        handleLogin() {
            wx.showLoading({
                title: '正在登录',
            })
            setTimeout(() => {
                wx.hideLoading()
                wx.showToast({
                    title: '成功',
                    icon: 'success',
                    duration: 2000
                })
            }, 2000)
        },
    },
    created: function () {
    },
    attached: function () {

    },
    ready: function () {
        console.log(this.data.innerText);
    },
    moved: function () {

    },
    detached: function () {

    },
});