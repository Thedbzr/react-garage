const express = require('express');
const router = express.Router();
const carsCtrl = require('../../controllers/api/cars');


router.get('/', carsCtrl.index);
router.post('/', carsCtrl.create);
router.get('/:id', carsCtrl.show);
router.put("/:id", carsCtrl.update);
router.delete("/:id", carsCtrl.delete);


module.exports = router;
