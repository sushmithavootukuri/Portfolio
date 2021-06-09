let projectsData =
    [
        {
            "title": "proj1",
            "description": "lorem ipsum lorem ipsum ;lorem psum sdv sdfsd f sdfsdf sdfsdgsfgv sfsdf",
            "img": "images/notes.png",
            "skills": "React, CSS, Node.js, Mongo DB.",
            "implemented": "Authentication, Jwt, CRUD operatiosns",
            "guthub": "#",
            "demo": "#"
        },
        {
            "title": "proj1",
            "description": "lorem ipsum lorem ipsum ;lorem psum sdv sdfsd f sdfsdf sdfsdgsfgv sfsdf",
            "img": "images/notes.png",
            "skills": "React, CSS, Node.js, Mongo DB.",
            "implemented": "Authentication, Jwt, CRUD operatiosns",
            "guthub": "#",
            "demo": "#"
        },
        {
            "title": "proj1",
            "description": "lorem ipsum lorem ipsum ;lorem psum sdv sdfsd f sdfsdf sdfsdgsfgv sfsdf",
            "img": "images/notes.png",
            "skills": "React, CSS, Node.js, Mongo DB.",
            "implemented": "Authentication, Jwt, CRUD operatiosns",
            "guthub": "#",
            "demo": "#"
        },
        {
            "title": "proj1",
            "description": "lorem ipsum lorem ipsum ;lorem psum sdv sdfsd f sdfsdf sdfsdgsfgv sfsdf",
            "img": "images/notes.png",
            "skills": "React, CSS, Node.js, Mongo DB.",
            "implemented": "Authentication, Jwt, CRUD operatiosns",
            "guthub": "#",
            "demo": "#"
        },
        {
            "title": "proj1",
            "description": "lorem ipsum lorem ipsum ;lorem psum sdv sdfsd f sdfsdf sdfsdgsfgv sfsdf",
            "img": "images/notes.png",
            "skills": "React, CSS, Node.js, Mongo DB.",
            "implemented": "Authentication, Jwt, CRUD operatiosns",
            "guthub": "#",
            "demo": "#"
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
    desc.innerText = "Description";
    let descText = document.createElement("p");
    descText.innerText = project.description;
    let skills = document.createElement("h3");
    skills.innerText = "Skills";
    let skillsText = document.createElement("p");
    skillsText.innerText = project.skills;
    let impl = document.createElement("h3");
    impl.innerText = "What is Implemented";
    let implText = document.createElement("p");
    implText.innerText = project.implemented;

    backFace.append(desc, descText, skills, skillsText, impl, implText);

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


projectsData.forEach(project => {

    let projectCard = createProjectCard(project);
    projects.append(projectCard);
});


