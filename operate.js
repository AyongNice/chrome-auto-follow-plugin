document.addEventListener('DOMContentLoaded', function () {
    const button = document.getElementById('label');
    const label2 = document.getElementById('label2');
    button.addEventListener('click', function () {
        window.open('http://ayongnice.love/chatgpt/')
    });
    label2.addEventListener('click', function () {
        window.open('http://ayongnice.love/chatgpt/')
    });
});

// document.addEventListener('DOMContentLoaded', function () {
//     const button = document.getElementsByClassName('follow-btn-inner');
//     button.addEventListener('click', function () {
//         chrome.runtime.sendMessage({sendMessage: '关注微信号阿勇学前端!你将赢来人生巅峰'}, function (response) {
//             alert(response.farewell)
//         });
//
//     });
// });
