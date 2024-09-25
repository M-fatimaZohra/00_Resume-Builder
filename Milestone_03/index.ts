const eduAdd = document.querySelector(`#addInputEdu`) as HTMLElement;
const workAdd = document.querySelector(`#addInputWork`) as HTMLElement;
const skillAdd = document.querySelector(`#addInputSkills`) as HTMLElement;

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
  const Input = document.querySelector(`#resumeInput`) as HTMLInputElement;
  const output = document.querySelector(`#resumeOutput`) as HTMLInputElement;

  output.innerHTML = "";

  const fName = (document.querySelector(`#firstName`) as HTMLInputElement)
    .value;
  const lName = (document.querySelector(`#lastName`) as HTMLInputElement).value;
  const email = (document.querySelector(`#email`) as HTMLInputElement).value;

  const education = (document.querySelector(`#education`) as HTMLInputElement)
    .value;
  const work = (document.querySelector(`#workExperiance`) as HTMLInputElement)
    .value;
  const skills = (document.querySelector(`#skills`) as HTMLInputElement).value;

  const decription = (document.querySelector(`#des`) as HTMLInputElement).value;

  const moreEducation = document.querySelectorAll(
    ".education"
  ) as NodeListOf<HTMLInputElement>;
  const moreWork = document.querySelectorAll(
    ".workExperiance"
  ) as NodeListOf<HTMLInputElement>;
  const moreSkills = document.querySelectorAll(
    ".skills"
  ) as NodeListOf<HTMLInputElement>;

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

  if (
    fName.trim() !== "" &&
    lName.trim() !== "" &&
    email.trim() !== "" &&
    education.trim() !== "" &&
    work.trim() !== "" &&
    skills.trim() !== ""
  ) {
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
  } else {
    console.error("please fill out the required fields");
  }
}

document.querySelector("form")?.addEventListener("submit", (eve) => {
  eve.preventDefault();
  Submited();
});
