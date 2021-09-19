import express from 'express';

import { addUser, getUsers,getItems } from '../controller/userController.js';
import { payNow } from '../controller/paymentcontroller.js';




const route = express.Router();

route.post('/add', addUser);
route.get('/items',getItems)
route.get('/users', getUsers);
route.get('/order/:totalPrice', payNow);



export default route;