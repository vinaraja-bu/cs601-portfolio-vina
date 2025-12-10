type Skill = {
    name: string;
    level: number; // 1–5
  };
  
  const skills: Skill[] = [
    { name: "HTML5", level: 4 },
    { name: "CSS3", level: 4 },
    { name: "JavaScript", level: 3 },
    { name: "TypeScript", level: 2 },
    { name: "React", level: 3 }
  ];
  
  function renderSkills(rootId: string): void {
    const root = document.getElementById(rootId);
    if (!root) return;
  
    const list = document.createElement("ul");
  
    skills.forEach(skill => {
      const li = document.createElement("li");
      li.textContent = `${skill.name}: ${"★".repeat(skill.level)}`;
      list.appendChild(li);
    });
  
    root.appendChild(list);
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    renderSkills("skills-widget");
  });