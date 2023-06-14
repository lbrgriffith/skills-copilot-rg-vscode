function skillsMember() {
    var member = document.getElementById("member");
    var memberSkills = document.getElementById("memberSkills");
    var memberSkillsBtn = document.getElementById("memberSkillsBtn");
    var memberSkillsBtnIcon = document.getElementById("memberSkillsBtnIcon");
    var memberSkillsBtnText = document.getElementById("memberSkillsBtnText");
    if (memberSkills.style.display === "none") {
        memberSkills.style.display = "block";
        memberSkillsBtnIcon.className = "fa fa-minus";
        memberSkillsBtnText.innerHTML = "Hide";
        member.style.height = "auto";
    } else {
        memberSkills.style.display = "none";
        memberSkillsBtnIcon.className = "fa fa-plus";
        memberSkillsBtnText.innerHTML = "Show";
        member.style.height = "auto";
    }
}