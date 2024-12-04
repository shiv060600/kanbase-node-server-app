import Database from "../Database/index.js";
import model from "./model.js";
export function findAssignmentsForCourse(courseId) {
    //const {assignments} = Database
    //return assignments.filter((assignment) => assignment.courseId === courseId);
    return model.find({ course: courseId });
}
export function createAssignment(assignment){
    delete assignment._id
    return model.create(assignment);
    //const {assignments} = Database;
    //const newAssignment = {...assignment, _id : Date.now().toString()};
    //Database.assignments = [...Database.assignments,newAssignment]
    //return newAssignment
}
export function deleteAssignment(assignmentId){
    //const {assignments} = Database
    //Database.assignments = Database.assignments.filter((assignment) => assignment._id !== assignmentId )
    return model.deleteOne({ _id: assignmentId });
}
export function updateAssignment(assignmentId, assignmentUpdates){
    //const {assignments} = Database
    //const assignment = assignments.find((assignment) => assignment._id === assignmentId);
    //Object.assign(assignment,assignmentUpdates);
    //return assignment
    return model.updateOne({ _id: assignmentId }, assignmentUpdates);
}
