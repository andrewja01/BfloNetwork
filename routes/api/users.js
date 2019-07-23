const express = require('express');
const router = express.Router();
// const { check, validationResult } = require('express-validator');

// @route  POST api/users
// @desc   Register user
// @access Public
router.post('/', (req, res) => {
  console.log(req.body);
  res.send('User Route');
});
//   [
//     check('name', 'Name is required')
//       .not()
//       .isEmpty(),
//     check('email', 'Must be a valid email').isEmail(),
//     check('password', 'Password must be 6 or more characters').isLength({
//       min: 6
//     })
//   ],

module.exports = router;
