const orderService = require("../services/order.service");


//get all orders
const getAllOrders = async(req,res)=>{
    try{
        const orders = await orderService.getAllOrders();
        return res.status(200).send(orders);
    }catch(error){
        res.status(500).send({error: error.message});
    }
}

//confirmed orders
const getConfirmedOrders = async(req,res)=>{
    const orderId = await req.params.orderId;
    try{
        const orders = await orderService.confirmedOrder(orderId);
        return res.status(200).send(orders);
    }catch(error){
        res.status(500).send({error: error.message});
    }
}

//shipped orders
const getShippedOrders = async(req,res)=>{
    const orderId = await req.params.orderId;
    try{
        const orders = await orderService.shipOrder(orderId);
        return res.status(200).send(orders);
    }catch(error){
        res.status(500).send({error: error.message});
    }
}


//deliver orders
const getDeliveredOrders = async(req,res)=>{
    const orderId = await req.params.orderId;
    try{
        const orders = await orderService.deliverOrder(orderId);
        return res.status(200).send(orders);
    }catch(error){
        res.status(500).send({error: error.message});
    }
}

//cancel orders
const cancelOrders = async(req,res)=>{
    const orderId = await req.params.orderId;
    try{
        const orders = await orderService.cancelOrder(orderId);
        return res.status(200).send(orders);
    }catch(error){
        res.status(500).send({error: error.message});
    }
}

//delete orders
const deleteOrders = async(req,res)=>{
    const orderId = await req.params.orderId;
    try{
        await orderService.deleteOrder(orderId);
        return res.status(204).send({message: 'Order deleted successfully'});
    }catch(error){
        res.status(500).send({error: error.message});
    }
}

module.exports = {
    getAllOrders,
    getConfirmedOrders,
    getShippedOrders,
    getDeliveredOrders,
    cancelOrders,
    deleteOrders,
}