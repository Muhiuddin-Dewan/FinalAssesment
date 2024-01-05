// privateApi.js

const express = require('express');

const privateRouter = express.Router();

privateRouter.get('/members', (req, res) => {
  const members = {
    user_id_01: {
      first_name: 'John',
      last_name: 'Doe',
      gender: 'Male',
    },
    user_id_02: {
      first_name: 'Adam',
      last_name: 'Carry',
      gender: 'Male',
    },
  };

  res.json(members);
});

module.exports = privateRouter;

