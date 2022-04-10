const { Router } = require('express');
const router = Router();
const { personGet, personPost } = require('../controllers/user');



router.get("/", personGet);

router.post("/", personPost);



module.exports = router;