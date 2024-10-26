"use strict";
const eduAdd = document.querySelector(`#addInputEdu`);
const workAdd = document.querySelector(`#addInputWork`);
const skillAdd = document.querySelector(`#addInputSkills`);
const output = document.querySelector(`#resumeOutput`);
const Input = document.querySelector(`#resumeInput`);
const PDFprint = document.querySelector("#PDF");
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
    const username = document.querySelector("#userName").value;
    const fName = document.querySelector(`#firstName`).value;
    const lName = document.querySelector(`#lastName`).value;
    const email = document.querySelector(`#email`).value;
    const education = document.querySelector(`#education`).value;
    const work = document.querySelector(`#workExperiance`).value;
    const skills = document.querySelector(`#skills`).value;
    const decription = document.querySelector(`#des`).value;
    const moreEducation = document.querySelectorAll(".education");
    const moreWork = document.querySelectorAll(".workExperiance");
    const moreSkills = document.querySelectorAll(".skills");
    let valueEducation = "";
    let valueWork = "";
    let valueSkills = "";
    moreEducation.forEach((element) => {
        valueEducation += `<p> <b>•</b><span contenteditable="true"> ${element.value}<br></span></p>`;
    });
    moreWork.forEach((element) => {
        valueWork += ` <p><b>•</b><span contenteditable="true"> ${element.value}<br></span></p>`;
    });
    moreSkills.forEach((element) => {
        valueSkills += ` <p><b>•</b> <span contenteditable="true">${element.value}<br></span></p>`;
    });
    if (fName.trim() !== "" &&
        lName.trim() !== "" &&
        email.trim() !== "" &&
        education.trim() !== "" &&
        work.trim() !== "" &&
        skills.trim() !== "") {
        let result = `
  <form class="result"> 
  <div class="h2">
    <h1>Resume</h1>
  </div>

  <fieldset>
    <h3>Basic Information</h3>
    <p>
      <strong>Name:</strong> 
      <span contenteditable="true">${fName} ${lName}</span>
    </p>
    <p>
      <strong>Email:</strong> 
      <span contenteditable="true">${email}</span>
    </p>
    <p>
      <strong>Description:</strong>
    </p>
    <p class="control"><span contenteditable="true" maxlength="500">${decription}</span></p>

    <h3>Education & Work</h3>
    
    <h4>Education:</h4>
    <p>
      <b>&#8226;</b><span contenteditable="true"> ${education}<br>${valueEducation}</span>
    </p>

    <h4>Work:</h4>
    <p >
      <b>&#8226;</b><span contenteditable="true"> ${work}<br>${valueWork}</span>
    </p>

    <h3>Skills:</h3>
    <p>
      <b>&#8226;</b> <span contenteditable="true">${skills}<br>${valueSkills}</span>
    </p>
  </fieldset>
</form>
`;
        //Sharable link
        localStorage.setItem(`${username}`, result);
        const Divlink = document.getElementById("link").style.display = "block";
        if (username) {
            const url = `${window.location.origin}/index.html?username=${username}`;
            let link = document.getElementById("shareableLink");
            link.href = url;
            link.innerText = url;
            navigator.clipboard.writeText(url).then(() => alert(`link copied to clipboard! ${username}, check your resume NOW!`))
                .catch(err => console.error(`Failed to copy automatically!`));
        }
        //FOR PDF
        PDFprint.addEventListener('click', () => {
            window.print();
        });
        Input.innerHTML = "";
        output.innerHTML = result;
    }
    else {
        console.error("please fill out the required fields");
    }
}
window.onload = function () {
    const urlParams = new URLSearchParams(window.location.search);
    const username = urlParams.get('username');
    if (username) {
        Input.innerHTML = "";
        const savedResult = localStorage.getItem(`${username}`);
        if (savedResult) {
            output.innerHTML = savedResult;
        }
        else {
            console.error("404 no resume found!.");
        }
    }
};
document.querySelector("form")?.addEventListener("submit", (eve) => {
    eve.preventDefault();
    Submited();
});
