// 滑動動畫 - 普通 section
document.querySelectorAll(".section:not(.skills-section)").forEach((sec) => {
    sec.addEventListener("mouseover", () => {
        sec.style.transition = "0.3s";
        sec.style.background = "#4d85aaff";
    });
    sec.addEventListener("mouseout", () => {
        sec.style.background = "#9e9e9e";
    });
});

// 技能區動畫
const skillsSection = document.querySelector(".skills-section");
if (skillsSection) {
    skillsSection.addEventListener("mouseover", () => {
        skillsSection.style.transition = "0.3s";
        skillsSection.style.background = "linear-gradient(135deg, #764ba2 0%, #667eea 100%)";
        skillsSection.style.transform = "scale(0.99)";
    });
    skillsSection.addEventListener("mouseout", () => {
        skillsSection.style.background = "#667eea";
        skillsSection.style.transform = "scale(1)";
    });
}

// 進度條動畫 - 按點擊時進度條自動增長
document.querySelectorAll(".progress").forEach((progress) => {
    const skillBar = progress.closest(".skill-bar");
    if (skillBar) {
        skillBar.addEventListener("click", () => {
            const currentWidth = parseInt(progress.style.width) || 0;
            const newWidth = Math.min(currentWidth + 10, 100);
            progress.style.width = newWidth + "%";
        });
    }
});

