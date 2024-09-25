"use strict";
const eduAdd = document.querySelector(`#addInputEdu`);
const workAdd = document.querySelector(`#addInputWork`);
const skillAdd = document.querySelector(`#addInputSkills`);
function addEduCationField() {
    let createInput = document.createElement("input");
    let p = document.createElement("p");
    createInput.setAttribute("type", "text");
    createInput.setAttribute("placeholder", "Education");
    createInput.setAttribute("class", "education");
    createInput.setAttribute("name", "education");
    createInput.setAttribute("required", "");
    p.appendChild(createInput);
    eduAdd.appendChild(p);
}
function addWorkField() {
    let createInput = document.createElement("input");
    let p = document.createElement("p");
    createInput.setAttribute("type", "text");
    createInput.setAttribute("placeholder", "Work Experience");
    createInput.setAttribute("class", "workExperiance");
    createInput.setAttribute("name", "work");
    createInput.setAttribute("required", "");
    p.appendChild(createInput);
    workAdd.appendChild(p);
}
function addSkillField() {
    let createInput = document.createElement("input");
    let p = document.createElement("p");
    createInput.setAttribute("type", "text");
    createInput.setAttribute("placeholder", "Skill");
    createInput.setAttribute("class", "skills");
    createInput.setAttribute("name", "skills");
    createInput.setAttribute("required", "");
    p.appendChild(createInput);
    skillAdd.appendChild(p);
}
function Submited() {
    const Input = document.querySelector(`#resumeInput`);
    const output = document.querySelector(`#resumeOutput`);
    output.innerHTML = "";
    const fName = document.querySelector(`#firstName`)
        .value;
    const lName = document.querySelector(`#lastName`).value;
    const email = document.querySelector(`#email`).value;
    const education = document.querySelector(`#education`)
        .value;
    const work = document.querySelector(`#workExperiance`)
        .value;
    const skills = document.querySelector(`#skills`).value;
    const decription = document.querySelector(`#des`).value;
    const moreEducation = document.querySelectorAll(".education");
    const moreWork = document.querySelectorAll(".workExperiance");
    const moreSkills = document.querySelectorAll(".skills");
    let valueEducation = "";
    let valueWork = "";
    let valueSkills = "";
    moreEducation.forEach((element) => {
        valueEducation += ` <b>•</b> ${element.value}<br>`;
    });
    moreWork.forEach((element) => {
        valueWork += ` <b>•</b> ${element.value}<br>`;
    });
    moreSkills.forEach((element) => {
        valueSkills += ` <b>•</b> ${element.value}<br>`;
    });
    if (fName.trim() !== "" &&
        lName.trim() !== "" &&
        email.trim() !== "" &&
        education.trim() !== "" &&
        work.trim() !== "" &&
        skills.trim() !== "") {
        let result = `
  <form class="result"> 
 <div class="h2"> <h1>Resume</h1></div>
  <fieldset >
    <fieldset>
    <h3>Basic Information</h3>
    <p><strong>Name:</strong> ${fName} ${lName}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Description:</strong></p> <p class="control">${decription}</p>
    <h3>Education & Work </h3>
    <h4><p><strong>Education:</strong></p></h4> <p><b>•</b> ${education}<br> ${valueEducation}</p>

    <h4><p><strong>Work:</strong></p></h4> <p><b>•</b> ${work}<br> ${valueWork}</p>
   <p> <h3>Skills:</h3> </p><p><b>•</b> ${skills}<br>  ${valueSkills}</p>
   </ fieldset>
   </ fieldset>
</form>`;
        output.innerHTML = result;
        Input.innerHTML = "";
    }
    else {
        console.error("please fill out the required fields");
    }
}
document.querySelector("form")?.addEventListener("submit", (eve) => {
    eve.preventDefault();
    Submited();
});
