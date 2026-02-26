const productos = [
    {
        id: 1,
        nombre: "Hamburguesa Clásica",
        precio: 12.99,
        descripcion: "Carne de res a la parrilla, queso cheddar fundido, lechuga fresca, tomate y nuestra salsa especial en pan brioche.",
        imagen: "images/hamburguesa.jpg", 
        idPrice: "prod_U2yvDdQcJSriIG"
    },
    {
        id: 2,
        nombre: "Pizza Margherita",
        precio: 14.50,
        descripcion: "Masa artesanal con salsa de tomate San Marzano, mozzarella fresca y albahaca del huerto.",
        imagen: "images/pizza.jpg",
        idPrice: "prod_U2yvDdQcJSriIG"
    },
    {
        id: 3,
        nombre: "Ensalada Caesar",
        precio: 10.99,
        descripcion: "Pollo a la parrilla sobre una cama de lechuga romana, crutones dorados, parmesano y aderezo caesar.",
        imagen: "images/caesar.jpg",
        idPrice: "prod_U2yvDdQcJSriIG"
    },
    {
        id: 4,
        nombre: "Pasta Bolognesa",
        precio: 13.50,
        descripcion: "Spaghetti al dente con nuestra salsa bolognesa casera de carne, tomate y hierbas finas.",
        imagen: "images/bolognesa.jpg",
        idPrice: "prod_U2yvDdQcJSriIG"
    },
    {
        id: 5,
        nombre: "Salmon a la Plancha",
        precio: 18.99,
        descripcion: "Filete de salmon fresco con esparragos, limon y hierbas mediterraneas. Servido con arroz al vapor.",
        imagen: "images/salmon.jpg",
        idPrice: "prod_U2yvDdQcJSriIG"
    },
    {
        id: 6,
        nombre: "Tacos al Pastor",
        precio: 11.50,
        descripcion: "Tres tacos de cerdo marinado con pina, cilantro, cebolla y salsa verde en tortilla de maiz.",
        imagen: "images/tacos.jpg",
        idPrice: "prod_U2yvDdQcJSriIG"
    },
];

const d = document,
    contenedor = document.getElementById('contenedor-productos');

function renderizarProductos(lista) {
    contenedor.innerHTML = "";

    lista.forEach(producto => {
        const card = document.createElement('article');
        card.classList.add('producto-card');

        card.innerHTML = `
            <div class="card-img-container">
                <img src="${producto.imagen}" alt="${producto.name}">
            </div>            
            <div class="card-content">
                <div class="card-header">
                    <h2>${producto.nombre}</h3>
                    <span class="precio">$${producto.precio.toFixed(2)}</span>
                </div>
                <p class="descripcion">${producto.descripcion}</p>
                <button class="btn-add" data-id="${producto.id}" data-price="${producto.idPrice}">&#128179; &nbsp; Comprar</button>
            </div>
        
        `;

        contenedor.appendChild(card);
    });
}

d.addEventListener("DOMContentLoaded", () => {
    renderizarProductos(productos);
})