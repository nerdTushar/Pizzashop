// const express = require('express');
// const router = express.Router();
// const {v4 : uuidv4} = require('uuid');
// const stripe = require('stripe')('sk_test_51LUxClSJlCCtgp7YLmJz2p0K8J9z6li0KwTxpurWDe4MwI4a2DeW9eQbA0GWR1UOh0OIwYH7K4Ohjwf6cgW4quQe00NAZuwgy5');
// const Order = require('../models/orderModel');

// router.post('/placeorder', async (req,res) => {
//     const {token,subTotal,currentUser,cartItems} = req.body;
//     console.log(req.body);
//     try {
//         const customer = await stripe.customers.create({
//             email : token.email,
//             source : token.id
//         });
//         // const payment = await stripe.paymentIntents.create({
//         //     amount : subTotal * 100,
//         //     currency : 'inr',
//         //     customer : customer.id,
//         //     receipt_email : token.email,
//         // },{
//         //     idempotencyKey : uuidv4(),
//         // });
//         const payment = await stripe.charges.create({
//             amount : subTotal * 100,
//             currency : 'inr',
//             customer : customer.id,
//             receipt_email : token.email,

//         },{
//             idempotencyKey : uuidv4(),
//         });
//         if(payment){
//             const neworder = new Order({
//                 name : currentUser.name,
//                 email : currentUser.email,
//                 userid : currentUser._id,
//                 orderItems  : cartItems,
//                 orderAmount : subTotal,
//                 shippingAddress : {
//                     street : token.card.address_line1,
//                     city : token.card.address_city,
//                     country : token.card.address_country,
//                     pincode : token.card.address_zip,

//                 },
//                 transactionId : payment.source.id
//             })
//             neworder.save();
//            res.send('Payment Success');
//         }else{
//            res.send('Payment Failed');
//         }
//     } catch (error) {
//         res.status(400).json({
//             message : 'Something Went Wrong',
//             error : error.stack
            
//         });
//     }
// });

// module.exports = router;

const express = require('express');
const router = express.Router();
const {v4 : uuidv4} = require('uuid');
const Order = require('../models/orderModel');
const stripe = require('stripe')('sk_test_51LUxClSJlCCtgp7YLmJz2p0K8J9z6li0KwTxpurWDe4MwI4a2DeW9eQbA0GWR1UOh0OIwYH7K4Ohjwf6cgW4quQe00NAZuwgy5');
router.post('/placeorder', async (req,res)   =>{
    const {token , subTotal , currentUser , cartItems} = req.body
    try {
        const idempotencyKey = uuidv4();
        const neworder = new Order({
            name : currentUser.name,
            email : currentUser.email,
            userid : currentUser._id,
            orderItems : cartItems,
            orderAmount : subTotal,
            shippingAddress : {
                street : token.card.address_line1,
                city : token.card.address_city,
                country : token.card.address_country,
                pincode : token.card.address_zip,
            },
            transactionId : idempotencyKey, 
        })
        neworder.save()
        res.send('Order Placed Successfully');
    } catch (error) {
        // console.log(error);
        return res.status(400).json({
            message:'Something Went Wrong',
            error : error.stack
        });
    }
});

router.post('/getuserorder', async (req,res) => {
     const {userid} = req.body;
     try {
        const orders = await Order.find({userid}).sort({_id : '-1'});
        res.status(200).send(orders);
     } catch (error) {
        res.status(400).json({
            message : 'Something Went Wrong',
            error : error.stack
        })
     }
});

router.get('/alluserorder', async (req,res) => {
     try {
        const orders = await Order.find({});
        res.status(200).send(orders);
     } catch (error) {
        res.status(400).json({
            message : 'Something Went Wrong',
            error : error.stack
        })
     }
});

router.post('/deliverorder', async (req,res) => {
    const orderid = req.body.orderid;
     try {
        const order = await Order.findOne({_id : orderid});
        order.isDelivered = true;
        await order.save();
        res.status(200).send('Order Delivered Successfully');
     } catch (error) {
        res.status(400).json({
            message : 'Something Went Wrong',
            error : error.stack
        })
     }
});

module.exports = router;
