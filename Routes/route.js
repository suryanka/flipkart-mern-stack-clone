import express from 'express'
import {usersignUp, userlogin} from '../controller/user-controller.js'
import { getProductById, getProducts } from '../controller/product-controller.js';
import { addPaymentGateway, paymentResponse } from '../controller/payment-controller.js';
// import { post } from '../../client/src/Utils/paytm.js';


const router= express.Router();
router.post('/signup',usersignUp);
router.post('/login',userlogin);
router.get('/products',getProducts);
router.get('/products/:id', getProductById);
router.post('/payment', addPaymentGateway);
router.post('/callback',paymentResponse);

export default router;