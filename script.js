// 點擊技能區塊滑動到技能學習經歷
document.getElementById("skills").onclick = function() {
    document.getElementById("learning").scrollIntoView({ behavior: "smooth" });
};

// 懸停效果
const sections = document.querySelectorAll(".section");

sections.forEach(function(sec) {
    sec.onmouseover = function() {
        this.style.background = "#4d85aaff";
    };
    
    sec.onmouseout = function() {
        this.style.background = "#9e9e9e";
    };
});

// 技能區塊指針樣式
document.getElementById("skills").style.cursor = "pointer";






