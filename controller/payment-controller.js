import formidable from "formidable";
import { paytmMerchantKey, paytmParams } from "../server.js";
import PaytmChecksum from "../paytm/PaytmChecksum.js";
import https from 'https';

export const addPaymentGateway =  async (request, response) => {
    try{
        let paytmChecksum= await PaytmChecksum.generateSignature(paytmParams , paytmMerchantKey);

        let params = {...paytmParams, 'CHECKSUMHASH':paytmChecksum};
        response.status(200).json(params);
        
    }
    catch(error){
        response.status(500).json({error: error.message});
    }
    
}

export const paymentResponse = (request, response) => {

    const form = new formidable();
    const paytmCheckSum = request.body.CHECKSUMHASH;
    delete request.body.CHECKSUMHASH;

    const isVerifySignature = PaytmChecksum.verifySignature(request.body, paytmMerchantKey, paytmCheckSum);
    if (isVerifySignature) {
        let paytmParams = {};
        paytmParams["MID"] = request.body.MID;
        paytmParams["ORDERID"] = request.body.ORDERID;

        PaytmChecksum.generateSignature(paytmParams, paytmMerchantKey).then(function (checksum) {

            paytmParams["CHECKSUMHASH"] = checksum;

            const post_data = JSON.stringify(paytmParams);

            const options = {
                hostname: 'securegw-stage.paytm.in',
                port: 443,
                path: '/order/status',
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Content-Length': post_data.length
                }
            };

            let res = "";
            const post_req = https.request(options, function (post_res) {
                post_res.on('data', function (chunk) {
                    res += chunk;
                });

                post_res.on('end', function () {
                    let result = JSON.parse(res);
                    console.log(result);
                    response.redirect(`https://flipkart-mern-stack-clone.vercel.app/`)
                });
            });
            post_req.write(post_data);
            post_req.end();
        });
    } else {
        console.log("Checksum Mismatched");
    }
}
