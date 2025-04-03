// Kambaz/Assignments/dao.js
import Database from "../Database/index.js";
import { v4 as uuidv4 } from "uuid";


export function createAssignment(assignment) {
    const newAssignment = { ...assignment, _id: uuidv4() };
    Database.assignments = [...Database.assignments, newAssignment];
    return newAssignment;
}

export function findAssignments(courseId) {
    return Database.assignments.filter(
        assignment => assignment.course === courseId
    );
}

export function updateAssignment(assignmentId, updates) {
    const assignment = Database.assignments.find(
        assignment => assignment._id === assignmentId
    );
    Object.assign(assignment, updates);
    return assignment;
}

export function deleteAssignment(assignmentId) {
    Database.assignments = Database.assignments.filter(
        assignment => assignment._id !== assignmentId
    );
}