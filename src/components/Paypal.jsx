export const PaypalButtons = (total, setPaidFor) => {
    window.paypal.Buttons({
        createOrder: function (data, actions) {
            return actions.order.create({
                purchase_units: [{
                    amount: {
                        value: total
                    }
                }]
            });
        },
        onApprove: async (data, actions) => {
            const order = await actions.order.capture();
            setPaidFor(true);
            console.log(order);
        }
    }).render('#paypal-button-container')
}