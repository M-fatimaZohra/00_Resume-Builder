function showSkills() {

  const skills = ["HTML", "CSS", "JS", "TS", "GITHUB", "NPM"];
  let main: HTMLElement | null = document.getElementById("Skills");

  if (main) {

    if (main.style.display == "none" || main.style.display == "") {

      let css = main.style;
      css.color = "#ffffff";
      css.backgroundColor = "#295F98";
      css.border = "1px solid #EAE4DD"
      css.display = "block";
      main.innerHTML = "";

      skills.forEach((skill) => {

        let element = document.createElement("li");
        let main = document.getElementById("Skills");
        let text = document.createTextNode(skill);
        element.appendChild(text);
        main?.appendChild(element);

      });
    } 
    else {
      
      main.style.display = "none";
    }
  }
}
