


const eduAdd = document.querySelector(`#addInputEdu`) as HTMLElement;
const workAdd = document.querySelector(`#addInputWork`) as HTMLElement;
const skillAdd = document.querySelector(`#addInputSkills`) as HTMLElement;
const output = document.querySelector(`#resumeOutput`) as HTMLInputElement;
const Input = document.querySelector(`#resumeInput`) as HTMLInputElement;
const PDFprint = document.querySelector("#PDF") as HTMLButtonElement


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
  const username = (document.querySelector("#userName") as HTMLInputElement).value;

  

  const fName = (document.querySelector(`#firstName`) as HTMLInputElement).value;

  const lName = (document.querySelector(`#lastName`) as HTMLInputElement).value;

  const email = (document.querySelector(`#email`) as HTMLInputElement).value;

  const education = (document.querySelector(`#education`) as HTMLInputElement).value;

  const work = (document.querySelector(`#workExperiance`) as HTMLInputElement).value;
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
    valueEducation += `<p> <b>•</b><span contenteditable="true"> ${element.value}<br></span></p>`;
  });

  moreWork.forEach((element) => {
    valueWork += ` <p><b>•</b><span contenteditable="true"> ${element.value}<br></span></p>`;
  });

  moreSkills.forEach((element) => {
    valueSkills += ` <p><b>•</b> <span contenteditable="true">${element.value}<br></span></p>`;
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

    const Divlink = (document.getElementById("link") as HTMLElement).style.display = "block";

    if (username) {
      const url = `${window.location.origin}/index.html?username=${username}`;

      let link = document.getElementById("shareableLink") as HTMLAnchorElement;

      link.href = url;
      link.innerText = url;

      navigator.clipboard.writeText(url).then(() => alert(`link copied to clipboard! ${username}, check your resume NOW!`))
        .catch(err => console.error(`Failed to copy automatically!`));

    }
 //FOR PDF
    PDFprint.addEventListener('click', () => {
      window.print();})
    
Input.innerHTML =""
    output.innerHTML = result;

  } else {
    console.error("please fill out the required fields");
  }


}

window.onload = function() {

  
  const urlParams = new URLSearchParams(window.location.search);
  const username = urlParams.get('username');

  if (username) {
    Input.innerHTML = ""
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
