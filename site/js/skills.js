var skills = [
    { name: "HTML5", level: 4 },
    { name: "CSS3", level: 4 },
    { name: "JavaScript", level: 3 },
    { name: "TypeScript", level: 2 },
    { name: "React", level: 3 }
];
function renderSkills(rootId) {
    var root = document.getElementById(rootId);
    if (!root)
        return;
    var list = document.createElement("ul");
    skills.forEach(function (skill) {
        var li = document.createElement("li");
        li.textContent = "".concat(skill.name, ": ").concat("★".repeat(skill.level));
        list.appendChild(li);
    });
    root.appendChild(list);
}
document.addEventListener("DOMContentLoaded", function () {
    renderSkills("skills-widget");
});
