import Database from "../Database/index.js";

export function enroll(userId, courseId) {
  const exist = Database.enrollments.some(
    (e) => e.user === userId && e.course === courseId
  );
  if (exist) {
    throw new Error("Enrollment already exists.");
  }
  const enrollment = {
    _id: Date.now().toString(),
    user: userId,
    course: courseId,
  };
  Database.enrollments.push(enrollment);
  return enrollment;
}

export function unenroll(userId, courseId) {
  const { enrollments } = Database;
  Database.enrollments = enrollments.filter(
    (e) => !(e.user == userId && e.course == courseId)
  );
}
export function filterEnroll(userId) {
  const enrollments = Database.enrollments.filter((e) => e.user === userId);
  return enrollments;
}
