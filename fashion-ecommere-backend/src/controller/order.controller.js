const orderService = require("../services/order.service");

//create order
const createOrder = async(req,res)=>{
    const user = await req.user;
    try{
        let createdOrder = await orderService.createOrder(user,req.body);
        return res.status(201).send(createdOrder);
    }
    catch(error){
        return res.status(500).send({error: error.message});
    }
}


//find order by id
const findOrderById = async(req,res)=>{
    const user = await req.user;
    try{
        const order = await orderService.findOrderById(req.params.id);
        if(!order){
            return res.status(404).send({message: "Order not found"});
        }
        return res.status(200).send(order);
    }
    catch(error){
        return res.status(500).send({error: error.message});
    }
}

//find order history
const orderHistory = async(req,res)=>{
    const user = await req.user;
    try{
        const orders = await orderService.usersOrderHistory(user._id);
        return res.status(200).send(orders);
    }
    catch(error){
        return res.status(500).send({error: error.message});
    }
}

module.exports = {
    createOrder,
    findOrderById,
    orderHistory,
}