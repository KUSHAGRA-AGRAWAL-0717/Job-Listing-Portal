import express from 'express';
import { Apply, getApplicants, updateApplicantStatus } from '../controllers/applicant.js';

const router = express.Router();

// Route to apply
router.post('/apply', Apply);

// Route to get applicants
router.get('/applicants', getApplicants);

// Route to update applicant status
router.put('/:id/status', updateApplicantStatus);

export default router;
