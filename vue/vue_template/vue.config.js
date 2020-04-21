module.exports = {
    configureWebpack: {
        devServer: {
            before(app) {
                app.get('/api/wheel', function (req, res) {
                    res.json({
                        list: [
                            { id: 1, name: '谢谢', val: 0 },
                            { id: 2, name: '云豆', val: 1 },
                            { id: 3, name: '电子券', val: 2  },
                            { id: 4, name: '礼品', val: 3  },
                            { id: 5, name: '50元京东卡', val: 4  },
                            { id: 6, name: 'iPhone手机', val: 5  }
                        ]
                    })
                })
            }
        }
    }
}