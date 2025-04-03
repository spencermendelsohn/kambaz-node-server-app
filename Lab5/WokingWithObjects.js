const assignment = {
    id: 1, title: "NodeJS Assignment",
    description: "Create a NodeJS server with ExpressJS",
    due: "2021-10-10", completed: false, score: 0,
};

const module = {
    id: "CS101",
    name: "Introduction to Computer Science",
    description: "This module covers the basics of computer science.",
    course: "Computer Science"
};

export default function WorkingWithObjects(app) {
    app.get("/lab5/assignment", (req, res) => {
        res.json(assignment);
    });
    app.get("/lab5/assignment/title", (req, res) => {
        res.json(assignment.title);
    });

    app.get("/lab5/assignment/title/:newTitle", (req, res) => {
        const { newTitle } = req.params;
        assignment.title = newTitle;
        res.json(assignment);
    });

    app.get("/lab5/assignment/completed/:complete", (req, res) => {
        const { complete } = req.params;
        if (complete === "true") assignment.completed = true;
        else if (complete === "false") assignment.completed = false;
        res.json(assignment);
    });

    app.get("/lab5/assignment/score/:score", (req, res) => {
        const { score } = req.params;
        assignment.score = parseInt(score);
        res.json(assignment);
    });

    app.get("/lab5/module", (req, res) => {
        res.json(module);
    });
    app.get("/lab5/module/name", (req, res) => {
        res.json(module.name);
    });

    app.get("/lab5/module/name/:newModule", (req, res) => {
        const { newModule } = req.params;
        module.name = newModule;
        res.json(module);
    });
};
