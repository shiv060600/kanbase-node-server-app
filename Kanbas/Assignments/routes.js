import * as dao from "./dao.js";

export default function AssignmentRoutes(app) {
  app.post("/api/courses/:courseId/assignments", (req, res) => {
        const { courseId } = req.params;
        const assignment = {
          ...req.body,
          course: courseId,
        };
        console.log(assignment); 
        const newAssignment = dao.createAssignment(assignment);
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
    const assignments = dao.findAssignmentsForCourse(assignmentId);
    res.json(assignments);
  });
  app.delete("/api/assignments/:assignmentId",(req,res) => {
    const { assignmentId } = req.params;
    dao.deleteModule(assignmentId);
    res.sendStatus(204);
  });
}