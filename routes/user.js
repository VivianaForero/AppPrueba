const { Router } = require('express');
const { personGet, personPost } = require('../controllers/user');
const router = Router();


router.get("/", personGet);

router.post("/", personPost);



module.exports = router;