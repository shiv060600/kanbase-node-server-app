import * as dao from "./dao.js";

export default function AssignmentRoutes(app) {
  app.post("/api/courses/:courseId/assignments", async (req, res) => {
        const { courseId } = req.params;
        const assignment = {
          ...req.body,
          course: courseId,
        };
        const newAssignment = await dao.createAssignment(assignment);
        res.send(newAssignment);
    });
  app.put("/api/assignments/:assignmentId", async (req, res) => {
    const { assignmentId } = req.params;
    const assignmentUpdates = req.body;
    const status = await dao.updateAssignment(assignmentUpdates);
    res.sendStatus(status);
  });
  app.get("/api/courses/:courseId/assignments", async (req, res) => {
    const { assignmentId } = req.params;
    const assignments = await dao.findAssignmentsForCourse(assignmentId);
    res.json(assignments);
  });
  app.delete("/api/assignments/:assignmentId", async (req,res) => {
    const { assignmentId } = req.params;
    const status = await dao.deleteAssignment(assignmentId);
    res.sendStatus(status);
  });
}