function sendMessage() {
    chrome.runtime.sendMessage({action: 'openNewTab', url: 'http://ayongnice.love/chatgpt/'});
}

function jump() {
    alert(111)
}

function handleClick(event) {
    alert(event)
    if (event.target.id === 'label') {
        jump();
    }
}

/**
 * chrome 消息订阅与发送
 */

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    alert(request.sendMessage)
    // 处理接收到的消息，并返回响应
    sendResponse({farewell: '确实 自从关注来阿勇学前端,一口气可以上十层楼'});
});
