const cartService = require("../services/cart.service");
const Address = require("../models/address.model");
const Order = require("../models/order.model");

const OrderItem = require("../models/orderItem.model"); // Import OrderItem model

async function createOrder(user, shipAddress) {
  try {
    let address;

    if (shipAddress._id) {
      let existingAddress = await Address.findById(shipAddress._id);
      address = existingAddress;
    } else {
      address = new Address(shipAddress);
      address.user = user;
      await address.save();

      // Save the address ID in the user document
      user.address.push(address);
      await user.save();
    }

    const cart = await cartService.findUserCart(user._id);
    const orderItems = [];

    for (const item of cart.cartItems) {
      const orderItem = new OrderItem({
        // Corrected here to use OrderItem instead of orderItems
        product: item.product,
        quantity: item.quantity,
        size: item.size,
        userId: item.userId,
        price: item.price,
        discountedPrice: item.discountedPrice,
        address: address._id,
      });

      const createdOrderItem = await orderItem.save();
      orderItems.push(createdOrderItem);
    }

    const createdOrder = new Order({
      user: user._id,
      cart: cart._id,
      orderItems: orderItems,
      totalPrice: cart.totalPrice,
      totalDiscountedPrice: cart.totalDiscountedPrice,
      discount: cart.discount,
      totalItem: cart.totalItem,
      shipAddress: address,
    });

    const savedOrder = await createdOrder.save();

    return savedOrder;
  } catch (error) {
    throw new Error(error.message);
  }
}

//placed order
async function placedOrder(orderId) {
  const order = await findOrderById(orderId);

  order.orderStatus = "PLACED";
  order.paymentDetails.status = "PAID";

  return await order.save();
}

//confirmed order
async function confirmedOrder(orderId) {
  const order = await findOrderById(orderId);

  order.orderStatus = "CONFIRMED";
  return await order.save();
}

//ship order
async function shipOrder(orderId) {
  const order = await findOrderById(orderId);

  order.orderStatus = "SHIPPED";

  return await order.save();
}

//deliver order
//placed order
async function deliverOrder(orderId) {
  const order = await findOrderById(orderId);

  order.orderStatus = "DELIVERED";

  return await order.save();
}

//cancel order
async function cancelOrder(orderId) {
  const order = await findOrderById(orderId);

  order.orderStatus = "CANCELLED";

  return await order.save();
}

//find order by id
async function findOrderById(orderId) {
  const order = await Order.findById(orderId)
    .populate("user")
    .populate({ path: "orderItems", populate: { path: "product" } })
    .populate("shippingAddress");
  if (!order) {
    throw new Error(`Order not found with id: ${orderId}`);
  }
  return order;
}

// user order history
async function usersOrderHistory(userId) {
  try {
    const orders = await Order.find({ user: userId, orderStatus: "PLACED" })
      .populate({ path: "orderItems", populate: { path: "product" } })
      .lean();

    return orders;
  } catch (error) {
    throw new Error(error.message);
  }
}

//get specific user order for admin
async function getAllOrders(orderId) {
  try {
    const order = await Order.findById(orderId)
      .populate({ path: "user", select: "name email" })
      .populate({ path: "orderItems", populate: { path: "product" } })
      .populate("shippingAddress");
    if (!order) {
      throw new Error(`Order not found with id: ${orderId}`);
    }
    return order;
  } catch (error) {
    throw new Error(error.message);
  }
}

//function for delete order
async function deleteOrder(orderId) {
  try {
    const order = await findOrderById(orderId);
    await Order.findByIdAndDelete(order._id);
  } catch (error) {
    throw new Error(error.message);
  }
}

module.exports = {
  createOrder,
  placedOrder,
  confirmedOrder,
  shipOrder,
  deliverOrder,
  cancelOrder,
  findOrderById,
  usersOrderHistory,
  getAllOrders,
  deleteOrder,
};
