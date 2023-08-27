import express from "express";
import dotenv from "dotenv";
import router from "./Routes/route.js";
import cors from "cors";
import bodyParser from "body-parser";
//Mention "type": "module" if you use the first method
//or
// const express= require('express')

import connection from "./Database/db.js";
import Defaultdata from "./Default.js";
import {v4 as uuid} from 'uuid';

const app = express();

const corsOptions = {
  origin: 'https://flipkart-mern-stack-clone.vercel.app',
  methods: ["POST", "GET"],
  credentials: true,
  //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};

dotenv.config();
app.use(cors(corsOptions));
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", router);

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'https://flipkart-mern-stack-clone.vercel.app');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

const userName = process.env.MONGO_USERNAME;
const password = process.env.MONGO_PASSWORD;

const url =`mongodb+srv://${userName}:${password}@flipkartclone.79pb8by.mongodb.net/FlipkartClone?retryWrites=true&w=majority`;

connection(url);

if(process.env.NODE_ENV === 'production'){
  app.use(express.static('client/build'));
}
// const HOST = '0.0.0.0'; 
const port = process.env.port || 8000;
// const server = http.createServer(app);
app.listen(port, () => {
  console.log(`Server is running successfully on port ${port}`);
});
Defaultdata();

export let paytmMerchantKey= process.env.PAYTM_MERCHANT_KEY;
export let paytmParams= {};
paytmParams['MID']= process.env.PAYTM_MID;
paytmParams['WEBSITE']= process.env.PAYTM_WEBSITE;
paytmParams['CHANNEL_ID']= process.env.PAYTM_CHANNEL;
paytmParams['INDUSTRY_TYPE_ID']= process.env.PAYTM_INDUSTRY_TYPE;
paytmParams['ORDER_ID']= uuid();
paytmParams['CUST_ID']= process.env.PAYTM_CUST_ID;
// paytmParams['CALLBACK_URL']= 'callback';
paytmParams['EMAIL']= 'ghoshdodo995@gmail.com';
paytmParams['MOBILE_NO']= '1234567890';
