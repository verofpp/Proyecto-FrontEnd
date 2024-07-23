// Hecho por José Correa

const express = require('express');
const router = express.Router();


const UserController = require('../controllers/user.controller');
const ProfessorController = require('../controllers/professor.controller');
const SubjectController = require('../controllers/subject.controller');
const SectionController = require('../controllers/section.controller');
const TrimesterController = require('../controllers/trimester.controller');
const ClassController = require('../controllers/class.controller');
const ActivityController = require('../controllers/activity.controller');
const EventController = require('../controllers/event.controller');


router.post('/user', async (req, res) => {
    const result = await UserController.insertUser(req.body);
    res.status(result.status).json(result);
});

router.post('/subjectinsert', async (req, res) => {
    const result = await SubjectController.insertSubject(req.body);
    res.status(result.status).json(result);
});

router.post('/sectioninsert', async (req, res) => {
    const result = await SectionController.insertSection(req.body);
    res.status(result.status).json(result);
});

router.post('/trimesterinsert', async (req, res) => {
    const result = await TrimesterController.insertTrimester(req.body);
    res.status(result.status).json(result);
});

router.post('/classinsert', async (req, res) => {
    const result = await ClassController.insertClass(req.body);
    res.status(result.status).json(result);
});

router.post('/activityinsert', async (req, res) => {
    const result = await ActivityController.insertActivity(req.body);
    res.status(result.status).json(result);
});

router.post('/eventinsert', async (req, res) => {
    const result = await EventController.insertEvent(req.body);
    res.status(result.status).json(result);
});


router.post('/login', async (req, res) => {
    const result = await UserController.loginUser(req.body);
    res.status(result.status).json(result);
});

router.get('/professors', async (req, res) => {
    const result = await ProfessorController.listProfessors();
    res.status(result.status).json(result);
});

router.get('/subjectslist', async (req, res) => {
    const result = await SubjectController.listSubject();
    res.status(result.status).json(result);
});

router.get('/subjectsdashboard', async (req, res) => {
    const result = await SubjectController.listDashboardSubjects();
    res.status(result.status).json(result);
});

router.get('/searchsubject', async (req, res) => {
    const result = await SubjectController.searchSubjectName(req.query);
    res.status(result.status).json(result);
});

router.get('/trimesterlist', async (req, res) => {
    const result = await TrimesterController.listTrimester();
    res.status(result.status).json(result);
});

router.get('/sectionslist', async (req, res) => {
    const result = await SectionController.listSections(req.query);
    res.status(result.status).json(result);
});

router.get('/classeslist', async (req, res) => {
    const result = await ClassController.listClasses(req.query);
    res.status(result.status).json(result);
});

router.get('/classeslistActivity', async (req, res) => {
    const result = await ClassController.listClassesByActivity(req.query);
    res.status(result.status).json(result);
});

router.get('/activitieslist', async (req, res) => {
    const result = await ActivityController.listActivities(req.query);
    res.status(result.status).json(result);
});

router.get('/activitylist', async (req, res) => {
    const result = await ActivityController.listActivity(req.query);
    res.status(result.status).json(result);
});

router.get('/eventlist', async (req, res) => {
    const result = await EventController.listEvents(req.query);
    res.status(result.status).json(result);
});




module.exports = router;
