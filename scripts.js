document.addEventListener('DOMContentLoaded', function() {
    console.log('网页加载完成！');
});
window.onload = function() {
    var footer = document.querySelector('footer');
    var contentHeight = document.body.offsetHeight; // 获取页面内容的高度
    var windowHeight = window.innerHeight; // 获取视口的高度

    if (contentHeight < windowHeight) {
        // 如果内容高度小于视口高度，则固定footer在底部
        footer.style.position = 'fixed';
        footer.style.bottom = 0;
        footer.style.left = 0;
        footer.style.width = '100%';
    } else {
        // 如果内容高度大于或等于视口高度，则让footer随页面滚动
        footer.style.position = 'static';
    }
};