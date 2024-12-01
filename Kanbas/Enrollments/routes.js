import * as enrollmentsDao from "./dao.js";

export default function EnrollmentRoutes(app) {
  app.get("/api/courses/enroll/:userId", async (req, res) => {
    const { userId } = req.params;
    try {
      const enrollments = await enrollmentsDao.filterEnroll(userId);
      res.json(enrollments);
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  });

  app.post("/api/courses/enroll", async (req, res) => {
    console.log("Request body:", req.body);
    const { userId, courseId } = req.body;
    if (!userId || !courseId) {
      return res.status(400).json({ error: "Missing userId or courseId" });
    }
    try {
      const enrollment = await enrollmentsDao.enroll(userId, courseId);
      res.status(201).json(enrollment);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  });

  app.delete("/api/courses/enroll", async (req, res) => {
    const { userId, courseId } = req.body;
    if (!userId || !courseId) {
      return res.status(400).json({ error: "Missing userId or courseId" });
    }
    try {
      await enrollmentsDao.unenroll(userId, courseId);
      res.status(204).send();
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  });
}
