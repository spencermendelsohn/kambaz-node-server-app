// Kambaz/Assignments/routes.js
import * as assignmentsDao from "./dao.js";

export default function AssignmentRoutes(app) {
    // Creates a new assignment
    app.post("/api/assignments/:courseId", (req, res) => {
        const assignment = {
            ...req.body,
            moduleId: req.params.courseId
        };
        const newAssignment = assignmentsDao.createAssignment(assignment);
        res.json(newAssignment);
    });

    // Gets all assignments for a course
    app.get("/api/assignments/:courseId", (req, res) => {
        const { courseId } = req.params;
        const assignments = assignmentsDao.findAssignments(courseId);
        res.json(assignments);
    });

    // Updates an assignment
    app.put("/api/assignments/:assignmentId", (req, res) => {
        const { assignmentId } = req.params;
        const status = assignmentsDao.updateAssignment(assignmentId, req.body);
        res.send(status);
    });

    // Deletes an assignment
    app.delete("/api/assignments/:assignmentId", (req, res) => {
        const { assignmentId } = req.params;
        assignmentsDao.deleteAssignment(assignmentId);
        res.sendStatus(200);
    });
}