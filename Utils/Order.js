export const FormatOrderItemToCart = (order_items) => {
    let cart = [];

    order_items.forEach(item => {
        cart.push({
            id: item.product_id,
            price: item.subtotal,
            title: item.name
        });
    });

    return cart;
}

export const FormatUserDataOrderItemToCheckout = (order) => {
    const user_data = {
        user_id: order.customer_id,
        first_name: order.billing.first_name,
        phone: order.billing.phone,
        email: order.billing.email,
        myself: false
    };

    return user_data;
}

export const FormatMetaDataOrderItemToCheckout = (order) => {
    const meta_data = {
        order_cloned_id: order.id,
        clone: true
    };

    return meta_data;
}