const generateTeam = (team) => {
    const generateManager = (manager) => {
        return `
        <div class="card emp-card">
        <div class="card-header">
            <h3 class="card-title"><span class="material-icons">local_cafe</span>${manager.getName()}</h3>
            <h4 class="card-subtitle">${manager.getRole()}</h4>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">ID: ${manager.getId()}</li>
                <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
                <li class="list-group-item">Office number: ${manager.getOfficeNumber()}</li>
            </ul>
        </div>
        </div>
        `;
    };

    const generateEngineer = (engineer) => {
        return `
        <div class="card emp-card">
        <div class="card-header">
            <h3 class="card-title"><span class="material-icons">engineering</span>${engineer.getName()}</h3>
            <h4 class="card-subtitle">${engineer.getRole()}</h4>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">ID: ${engineer.getId()}</li>
                <li class="list-group-item">Email: <a href="mailto:${engineer.getEmail()}">${manager.getEmail()}</a></li>
                <li class="list-group-item">Github: <a href="https://github.com/${engineer.getGithub()}" target="_blank">${engineer.getGithub()}</a></li>
            </ul>
        </div>
        </div>
        `;
    };

    
    const generateIntern = (intern) => {
        return `
        <div class="card emp-card">
        <div class="card-header">
            <h3 class="card-title"><span class="material-icons">school</span>${intern.getName()}</h3>
            <h4 class="card-subtitle">${intern.getRole()}</h4>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">ID: ${intern.getId()}</li>
                <li class="list-group-item">Email: <a href="mailto:${intern.getEmail()}">${manager.getEmail()}</a></li>
                <li class="list-group-item">Office number: ${intern.getSchool()}</li>
            </ul>
        </div>
        </div>
        `;
    };

    const arrHtml = [];

    arrHtml.push(
        team.filter((member) => member.getRole() === "Manager")
            .map((manager) => generateManager(manager))
    );
    
    arrHtml.push(
        team.filter((member) => member.getRole() === "Engineer")
            .map((engineer) => generateEngineer(engineer))
            .join("")
    );

    arrHtml.push(
        team.filter((member) => member.getRole() === "Intern")
            .map((intern) => generateEngineer(intern))
            .join("")
    );
    return arrHtml.join("");
    
};


module.exports = (team) => {
  return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Team Portfolio</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
</head>
<body>
    <div class="container-fluid">
        <div class="row">
            <div class="col-12 jumbotron mb-3 team-heading">
                <h1 class="text-center">My Team</h1>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="row">
            <div class="team-area col-12 d-flex justify-content-center">
                ${generateTeam(team)}
            </div>
        </div>
    </div>
</body>
</html>
    `;
};