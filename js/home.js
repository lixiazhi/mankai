$(function () {
    $('.company_more').on('click', function () {
        console.log('发送ajax请求')
        $.ajax({
            url: '../json/indexData.php',
            type: 'get',
            data: {
                page: 1,
                pageSize: 10
            },
            dataType: 'json',
            success: res => {
                console.log(res)
            }
        })
    })
})