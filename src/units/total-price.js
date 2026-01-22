export const totalPrice = (items) => {
    return items.reduce((a, c) => a + c.price * c.qty, 0);
}