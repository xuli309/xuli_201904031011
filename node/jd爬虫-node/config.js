const pageSize = 60,

    url2 = 'ajia',

    // 如果时分页的需要修改
    pageIndex = 3,

    //发生错误时这个数字界定再开始下载的位置
    againIndex = 0,

    startIndex = (pageIndex - 1) * pageSize + againIndex % pageSize,

    //此次下载所有商品的开始id
    id = 7000,

    //生成在此目录下
    url3 = 'xiandaijianyue',

    // 需要爬的页面url
    basicPath = '' +
        'https://mall.jd.com/advance_search-328820-99037-96908-5-0-0-1-3-60.html?other=&ext_attr=872:42294';

module.exports = {
    pageIndex,
    pageSize,
    startIndex,
    againIndex,
    id,
    url2,
    url3,
    basicPath
};