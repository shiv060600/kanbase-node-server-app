import Database from "../Database/index.js";

export function findAssignmentsForCourse(courseId) {
    const {assignments} = Database
    return assignments.filter((assignment) => assignment.courseId === courseId);
}
export function createAssignment(assignment){
    const {assignments} = Database;
    const newAssignment = {...assignment, _id : Date.now().toString()};
    Database.assignments = [...Database.assignments,newAssignment]
    return newAssignment
}
export function deleteAssignment(assignmentId){
    const {assignments} = Database
    Database.assignments = Database.assignments.filter((assignment) => assignment._id !== assignmentId )
}
export function updateAssignment(assignmentId, assignmentUpdates){
    const {assignments} = Database
    const assignment = assignments.find((assignment) => assignment._id === assignmentId);
    Object.assign(assignment,assignmentUpdates);
    return assignment
}
