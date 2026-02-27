d.addEventListener("click", async (e) => {
    if (e.target.matches(".btn-add")) {
        const btn = e.target;
        const priceId = btn.getAttribute("data-price");
        
        btn.disabled = true;
        btn.textContent = "Cargando...";

        try {
            const response = await fetch('/.netlify/functions/create-checkout', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ priceId: priceId})
            });

            const data = await response.json();

            if (data.url) {
                window.location.href = data.url;
            } else {
                throw new Error("No se recibió la URL de Stripe");
            }
        } catch (error) {
            console.error("Error al procesar el pago:", error);
            alert("Hubo un error al conectar con la caja. Intenta de nuevo.");
            btn.disabled = false;
            btn.innerHTML = "&#128179; &nbsp; Comprar"
        }
    }
});