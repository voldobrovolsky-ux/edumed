import { Router } from 'express';

const router = Router();

// Import module routes
// import authRoutes from './modules/auth/routes';
// import usersRoutes from './modules/users/routes';
// import rolesRoutes from './modules/roles/routes';
// import schoolRoutes from './modules/school/routes';
// import classesRoutes from './modules/classes/routes';
// import subjectsRoutes from './modules/subjects/routes';
// import timetableRoutes from './modules/timetable/routes';
// import journalRoutes from './modules/journal/routes';
// import filesRoutes from './modules/files/routes';
// import statsRoutes from './modules/stats/routes';

// Register routes
// router.use('/auth', authRoutes);
// router.use('/users', usersRoutes);
// router.use('/roles', rolesRoutes);
// router.use('/school', schoolRoutes);
// router.use('/classes', classesRoutes);
// router.use('/subjects', subjectsRoutes);
// router.use('/timetable', timetableRoutes);
// router.use('/journal', journalRoutes);
// router.use('/files', filesRoutes);
// router.use('/stats', statsRoutes);

// Placeholder route
router.get('/', (req, res) => {
  res.json({
    message: 'EduMed API v0.1',
    endpoints: [
      '/api/auth',
      '/api/users',
      '/api/roles',
      '/api/school',
      '/api/classes',
      '/api/subjects',
      '/api/timetable',
      '/api/journal',
      '/api/files',
      '/api/stats',
    ],
  });
});

export default router;
