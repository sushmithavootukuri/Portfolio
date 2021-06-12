let allProjects =
    [
        {
            "title": "Pizza Delivery",
            "description": "A delivery app where user can customise and order a pizza. Admin has ability to track all the ingredients, orders and update the current status",
            "img": "images/pizza-delivery.png",
            "skills": "React, CSS, Bootstrap, Node Js, Express and Mongo DB.",
            "implemented": "Authentication, Form validations, Jwt, private routes,authorize Admin and User roles",
            "github": "https://github.com/sushmithavootukuri/Pizza-delivery",
            "demo": "https://s-pizza-paradise.herokuapp.com/",
            "type": "fullstack"
        },
        {
            "title": "Notepad App",
            "description": "A simple Notepad application that allows users to register, create, update and delete the notes",
            "img": "images/notes.png",
            "skills": "React, CSS, Node Js, Express and Mongo DB.",
            "implemented": "Authentication, Jwt, CRUD operations, timeago",
            "github": "https://github.com/sushmithavootukuri/Notes-App-Client",
            "demo": "https://s-notes.netlify.app/",
            "type": "fullstack"
        },
       
        {
            "title": "Secret Messenger",
            "description": "Secret Messenger is designed to let users send or view secret messages anonymously",
            "img": "images/secret-message.png",
            "skills": "React, CSS, Bootstrap, Node Js, Express and Mongo DB",
            "implemented": "Nodemailer, create, read and delete operations",
            "github": "https://github.com/sushmithavootukuri/secret-message-client",
            "demo": "https://secret-messenger.netlify.app/",
            "type": "fullstack"
        },
        {
            "title": "Tic Tac Toe Game",
            "description": "An online Two player Tic Tac Toe Game",
            "img": "images/tictactoe.png",
            "skills": "HTML, CSS, Bootstrap4, Typescript",
            "implemented": "Tic Tac Toe Game logic in typescript",
            "github": "https://github.com/sushmithavootukuri/Tik-Tak-Toe",
            "demo": "https://sushmithavootukuri.github.io/Tik-Tak-Toe/",
            "type": "frontend"
        },
        {
            "title": "Recipe App",
            "description": "Recipe App that displays various recipes and allows user to create custom recipes",
            "img": "images/recipes.png",
            "skills": "React, Routes, CSS, Bootstrap, Axios",
            "implemented": "Axios,  create and delete custom recipe",
            "github": "https://github.com/sushmithavootukuri/Recipies",
            "demo": "https://app-recipe-box.netlify.app/",
            "type": "frontend"
        },
        {
            "title": "Trivia Quiz",
            "description": "Quiz app developed with questions from triviaDB Api that lets user to play quiz and view their high scores",
            "img": "images/trivia.png",
            "skills": "HTML, CSS, Bootstrap4, JavaScript",
            "implemented": "Fetching data from api, local storage to display high score",
            "github": "https://github.com/sushmithavootukuri/Trivia-quiz",
            "demo": "https://trivia-quiz-sushmitha.netlify.app/",
            "type": "frontend"
        },
      
        {
            "title": "Simple Calculator",
            "description": "An online calculator with basic Mathematical operations",
            "img": "images/calculator.png",
            "skills": "HTML, CSS, Javascript",
            "implemented": "Calculator designed without using in built eval function",
            "github": "https://github.com/sushmithavootukuri/Simple-calculator",
            "demo": "https://sushmitha-calculator.netlify.app/",
            "type": "frontend"
        },
        {
            "title": "Weather Studio",
            "description": "Website that displays weather info of all the countries",
            "img": "images/weather.png",
            "skills": "HTML, CSS, Bootstrap4, JavaScript",
            "implemented": "Fetching data from openweather api, Bootstrap card design",
            "github": "#",
            "demo": "https://weather-studio.netlify.app/",
            "type": "frontend"
        }
    ]


//Creates and returns an image element with src,class and alt as attributes
const getImgElement = (srcPath, altText) => {
    let img = document.createElement("img");

    img.setAttribute("src", srcPath);
    img.setAttribute("alt", altText);

    return img;
};

//Creates and returns html element with tagname,id and class as attributes
const getElement = (tag, className) => {
    let element = document.createElement(tag);
    element.setAttribute("class", className);

    return element;
};

const createProjectCard = (project) => {
    let projectContainer = getElement("div", "project-container");

    let projectBody = getElement("div", "project-body");

    let frontFace = getElement("div", "front face");
    let projectImage = getImgElement(project.img, project.title);

    frontFace.append(projectImage);


    let backFace = getElement("div", "back face");
    let desc = document.createElement("h3");
    desc.innerText = "Description : ";
    let descText = document.createElement("p");
    descText.innerText = project.description;
    let skills = document.createElement("h3");
    skills.innerText = "Skills : ";
    let skillsText = document.createElement("p");
    skillsText.innerText = project.skills;
    let impl = document.createElement("h3");
    impl.innerText = "Implemented : ";
    let implText = document.createElement("p");
    implText.innerText = project.implemented;
    let brTag1 = document.createElement("br");
    let brTag2 = document.createElement("br");
    let brTag3 = document.createElement("br");
    let brTag4 = document.createElement("br");
    backFace.append(desc, descText, brTag1, brTag2, skills, skillsText, brTag3, brTag4, impl, implText);

    projectBody.append(frontFace, backFace);



    let projectTitleDiv = getElement("div", "project-title");
    let projectTitle = document.createElement("h1");
    projectTitle.innerText = project.title;

    let github = document.createElement("a");
    github.setAttribute("href", project.github);
    github.setAttribute("target","_blank");
    let githubIcon = getImgElement("images/github.png", "Github Icon");
    github.append(githubIcon);


    let demoLink = document.createElement("a");
    demoLink.setAttribute("href", project.demo);
    demoLink.setAttribute("target","_blank");
    let deployIcon = getImgElement("images/cloud.png", "Cloud Icon");
    demoLink.append(deployIcon);

    projectTitleDiv.append(projectTitle, github, demoLink);

    projectContainer.append(projectBody, projectTitleDiv);

    return projectContainer;
}

let projects = document.getElementById("projects");


let fullstackProjects = allProjects.filter((project) => project.type === "fullstack");
let frontendProjects = allProjects.filter((project) => project.type === "frontend");

let allBtn = document.getElementById("all-btn");
let fullstackBtn = document.getElementById("fullstack-btn");
let frontendBtn = document.getElementById("frontend-btn");

allProjects.forEach(project => {
    let projectCard = createProjectCard(project);
    projects.append(projectCard);
});



fullstackBtn.onclick = () => {

    allBtn.classList.remove("active");
    fullstackBtn.classList.add("active");
    frontendBtn.classList.remove("active");

    projects.innerHTML = '';
    fullstackProjects.forEach(project => {
        let projectCard = createProjectCard(project);
        projects.append(projectCard);
    });

}

frontendBtn.onclick = () => {

    allBtn.classList.remove("active");
    fullstackBtn.classList.remove("active");
    frontendBtn.classList.add("active");

    projects.innerHTML = '';
    frontendProjects.forEach(project => {
        let projectCard = createProjectCard(project);
        projects.append(projectCard);
    });

}

allBtn.onclick = () => {


    allBtn.classList.add("active");
    fullstackBtn.classList.remove("active");
    frontendBtn.classList.remove("active");

    projects.innerHTML = '';
    allProjects.forEach(project => {
        let projectCard = createProjectCard(project);
        projects.append(projectCard);
    });
}