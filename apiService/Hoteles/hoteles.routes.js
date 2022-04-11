const router = require('express').Router();
const { hotel, hoteles, addHotel, deteleHotel, updateHotel } = require('./hoteles.controller');

router.get('/', hoteles);
router.get('/:id', hotel);
router.post('/', addHotel);
router.delete('/:id', deteleHotel);
router.put('/:id', updateHotel);

module.exports = router;