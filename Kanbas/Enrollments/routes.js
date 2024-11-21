import * as dao from "./dao.js";

export default function EnrollmentRoutes(app) {
  app.post("/api/courses/:courseId/enrollments", (req, res) => {
    const { courseId } = req.params;
    const { userId } = req.body;
    const enrollment = dao.enrollUserInCourse(userId, courseId);
    res.json(enrollment);
  });

  app.get("/api/courses/:courseId/enrollments", (req, res) => {
    const { courseId } = req.params;
    const enrollments = dao.findEnrollmentsForCourse(courseId);
    res.json(enrollments);
  });

  app.get("/api/enrollments", (req, res) => {
    const enrollments = dao.findAllEnrollments();
    res.json(enrollments);
  });

  app.delete("/api/enrollments/:enrollmentId", (req, res) => {
    const { enrollmentId } = req.params;
    dao.deleteEnrollment(enrollmentId);
    res.sendStatus(204);
  });

  app.put("/api/enrollments/:enrollmentId", (req, res) => {
    const { enrollmentId } = req.params;
    const updates = req.body;
    const enrollment = dao.updateEnrollment(enrollmentId, updates);
    res.json(enrollment);
  });
}