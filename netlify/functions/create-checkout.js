const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

exports.handler = async (event) => {
    if (event.httpMethod !== "POST") {
        return { statusCode: 405, body: "Method not allowed" };
    }

    try {
        const { priceId } = JSON.parse(event.body);
        console.log("Cuerpo recibido:", event.body);

        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            line_items: [{
                price: priceId,
                quantity: 1
            }],
            mode: 'payment',
            success_url: `${"https://saborymesa.netlify.app/"}/success.html`,
            cancel_url: `${"https://saborymesa.netlify.app/"}/index.html`,
        });

        return {
            statusCode: 200,
            body: JSON.stringify({ url: "https://saborymesa.netlify.app/" }),
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: error.message }),
        };
    }
};