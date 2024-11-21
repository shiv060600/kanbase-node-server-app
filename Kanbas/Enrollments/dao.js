import Database from "../Database/index.js";
export function enrollUserInCourse(userId, courseId) {
  const { enrollments } = Database;
  enrollments.push({ _id: Date.now().toString(), user: userId, course: courseId });
}

export function findEnrollmentsForCourse(courseId) {
    const enrollments = Database.enrollments;
    return enrollments.filter((enrollment) => enrollment.courseId === courseId);
}

export function deleteEnrollment(enrollmentId) {
    Database.enrollments = Database.enrollments.filter(
        (enrollment) => enrollment._id !== enrollmentId
    );
}

export function updateEnrollment(enrollmentId, enrollmentUpdates) {
    const enrollment = Database.enrollments.find(
        (enrollment) => enrollment._id === enrollmentId
    );
    if (enrollment) {
        Object.assign(enrollment, enrollmentUpdates);
    }
    return enrollment;
}

export function findAllEnrollments() {
    return Database.enrollments;
}