import * as dao from "./dao.js";
import * as assignmentsDao from "../Assignments/dao.js";
export default function AssignmentRoutes(app) {
  app.post("/api/courses/:courseId/assignments", (req, res) => {
        const { assignmentId } = req.params;
        const assignment = {
          ...req.body,
          course: assignmentId,
        };
        const newAssignment = assignmentsDao.createAssignment(assignment);
        res.send(newAssignment);
    });
  app.put("/api/assignments/:assignmentId", (req, res) => {
    const { assignmentId } = req.params;
    const assignmentUpdates = req.body;
    dao.updateAssignment(assignmentId, assignmentUpdates);
    res.sendStatus(204);
  });
  app.get("/api/courses/:courseId/assignments", (req, res) => {
    const { assignmentId } = req.params;
    const assignments = assignmentsDao.findAssignmentsForCourse(assignmentId);
    res.json(assignments);
  });
  app.delete("/api/assignments/:assignmentId",(req,res) => {
    const { assignmentId } = req.params;
    assignmentsDao.deleteModule(assignmentId);
    res.sendStatus(204);
  });
}