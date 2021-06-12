let allProjects =
    [
        {
            "title": "proj1",
            "description": "lorem ipsum lorem ipsum ;lorem psum sdv sdfsd f sdfsdf sdfsdgsfgv sfsdf,  lorem ipsum lorem ipsum ;lorem psum sdv sdfsd f sdfsdf sdfsdgsfgv sfsdf",
            "img": "images/notes.png",
            "skills": "React, CSS, Node.js, Mongo DB.",
            "implemented": "Authentication, Jwt, CRUD operatiosns",
            "guthub": "#",
            "demo": "#",
            "type": "fullstack"
        },
        {
            "title": "Pizza Delivery",
            "description": "lorem ipsum lorem ipsum ;lorem psum sdv sdfsd f sdfsdf sdfsdgsfgv sfsdf",
            "img": "images/pizza-delivery.png",
            "skills": "React, CSS, Node.js, Mongo DB.",
            "implemented": "Authentication, Jwt, CRUD operatiosns",
            "guthub": "#",
            "demo": "#",
            "type": "frontend"
        },
        {
            "title": "proj3",
            "description": "lorem ipsum lorem ipsum ;lorem psum sdv sdfsd f sdfsdf sdfsdgsfgv sfsdf",
            "img": "images/notes.png",
            "skills": "React, CSS, Node.js, Mongo DB.",
            "implemented": "Authentication, Jwt, CRUD operatiosns",
            "guthub": "#",
            "demo": "#",
            "type": "fullstack"
        },
        {
            "title": "proj4",
            "description": "lorem ipsum lorem ipsum ;lorem psum sdv sdfsd f sdfsdf sdfsdgsfgv sfsdf",
            "img": "images/notes.png",
            "skills": "React, CSS, Node.js, Mongo DB.",
            "implemented": "Authentication, Jwt, CRUD operatiosns",
            "guthub": "#",
            "demo": "#",
            "type": "fullstack"
        },
        {
            "title": "proj5",
            "description": "lorem ipsum lorem ipsum ;lorem psum sdv sdfsd f sdfsdf sdfsdgsfgv sfsdf",
            "img": "images/notes.png",
            "skills": "React, CSS, Node.js, Mongo DB.",
            "implemented": "Authentication, Jwt, CRUD operatiosns",
            "guthub": "#",
            "demo": "#",
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
    let githubIcon = getImgElement("images/github.png", "Github Icon");
    github.append(githubIcon);


    let demoLink = document.createElement("a");
    demoLink.setAttribute("href", project.demo);
    let deployIcon = getImgElement("images/cloud.png", "Cloud Icon");
    demoLink.append(deployIcon);

    projectTitleDiv.append(projectTitle, github, demoLink);

    projectContainer.append(projectBody, projectTitleDiv);

    return projectContainer;
}

let projects = document.getElementById("projects");


allProjects.forEach(project => {
    let projectCard = createProjectCard(project);
    projects.append(projectCard);
});


let fullstackProjects = allProjects.filter((project) => project.type === "fullstack");
let frontendProjects = allProjects.filter((project) => project.type === "frontend");

let allBtn = document.getElementById("all-btn");
let fullstackBtn = document.getElementById("fullstack-btn");
let frontendBtn = document.getElementById("frontend-btn");

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