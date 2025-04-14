const express = require("express");
const router = express.Router();
const {
    addJob,
    getJobs,
    updateJob,
    deleteJob
} = require("../controllers/jobController");

router.post('/', addJob);
router.get('/', getJobs);
router.patch('/:id', updateJob);
router.delete('/:id', deleteJob);

module.exports = router;
