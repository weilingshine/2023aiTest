// goTop
const goTop = document.getElementById("goTop");
  // 監聽卷軸滑到定位顯示goTop按鈕
  window.addEventListener("scroll", function() {
    if(window.pageYOffset > 700) {
      goTop.style.cssText = "opacity: 1; display: block; opacity: 1; transition: opacity .5s ease-in-out;";
    }
    else{
      goTop.style.cssText = "opacity: 0; display: none; opacity: 0; transition: opacity .5s ease-in-out;";
    }
  })
  // 監聽 goTop 點擊後 滑到最頂
  goTop.addEventListener("click", function() {
    window.scrollTo({ top: 0, behavior: 'smooth' }
  );
})
//  判斷瀏覽器 添加 body css 
// 影響範圍為 修正 chrome 的 clip-path 顯示模糊問題
const userAgent = window.navigator.userAgent;
const isChrome = /Chrome/.test(userAgent);
const isEdge = /Edg/.test(userAgent);
const body = document.body;
if(isChrome && !isEdge){
  body.style.overflow = "overlay";
} 

