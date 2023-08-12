let time1= setTimeout(function () {
    var observer = new MutationObserver(function (mutationsList, observer) {
        let time2= setTimeout(() => {
            var vidoFollowButton = document.querySelector('.follow-btn-inner');
            var videoLike = document.querySelector('.video-like');
            var video = document.getElementsByTagName('video');
            var sendText = document.querySelector('.send-text');
            if (vidoFollowButton) {
                // alert("B站自动、关注、点赞、留言 互粉浏览器插件");
                videoLike.click()
                vidoFollowButton.click();
            }
            var reply = document.querySelector('.reply-box-textarea');
            if (reply) {
                var inputEvent = new Event('input', {bubbles: true});
                reply.focus();
                reply.value = '已关注、点赞;请回关,祝福UP主早日大火!';
                reply.dispatchEvent(inputEvent);
                sendText.click()
            }
            if (video && video.length) {
                video[0].currentTime = video[0].duration;
            }
        }, 1500)
        observer.disconnect();
    });
    observer.observe(document.documentElement, {childList: true, subtree: true});
}, 1000);
