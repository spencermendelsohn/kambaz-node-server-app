import * as enrollmentsDao from './dao.js';

export default function EnrollmentsRoutes(app) {
    app.get('/api/enrollments', (req, res) => {
        const enrollments = enrollmentsDao.fetchEnrollments();
        res.send(enrollments);
    });
    app.post('/api/enrollments/:userId/:courseId', (req, res) => {
        const { userId, courseId } = req.params;
        const status = enrollmentsDao.enrollUserInCourse(userId, courseId);
        res.send(status);
    });
    app.delete('/api/enrollments/:userId/:courseId', (req, res) => {
        const { userId, courseId } = req.params;
        const status = enrollmentsDao.unEnrollUserInCourse(userId, courseId);
        res.send(status);
    });
}