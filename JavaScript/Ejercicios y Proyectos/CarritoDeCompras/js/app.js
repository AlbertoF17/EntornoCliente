const carrito = [];

document.querySelectorAll('.agregar-carrito').forEach(btn => {
  btn.addEventListener('click', agregarProducto);
});

document.querySelector('#carrito').addEventListener('click', borrarProducto);

document.querySelector('#vaciar-carrito').addEventListener('click', vaciarCarrito);

function agregarProducto(e) {
  e.preventDefault();

  const producto = e.target.parentElement.parentElement;

  const infoProducto = {
    imagen: producto.querySelector('img').src,
    nombre: producto.querySelector('h4').textContent,
    precio: producto.querySelector('.precio span').textContent,
    id: producto.querySelector('a').getAttribute('data-id'),
  };

  carrito.push(infoProducto);

  agregarProductoAlCarrito(infoProducto);
}

function agregarProductoAlCarrito(producto) {
  const registroProducto = document.createElement('tr');
  registroProducto.innerHTML = `
    <td><img src="${producto.imagen}" width=100></td>
    <td>${producto.nombre}</td>
    <td>${producto.precio}</td>
    <td><a href="#" class="borrar-curso" data-id="${producto.id}">X</a></td>
  `;

  document.querySelector('#lista-carrito tbody').appendChild(registroProducto);
}

function borrarProducto(e) {
  e.preventDefault();

  if (e.target.classList.contains('borrar-curso')) {
    const productoId = e.target.getAttribute('data-id');
    carrito.forEach((producto, index) => {
      if (producto.id === productoId) {
        carrito.splice(index, 1);
      }
    });

    e.target.parentElement.parentElement.remove();
  }
}

function vaciarCarrito(e) {
  e.preventDefault();

  while (carrito.length > 0) {
    carrito.pop();
  }

  const tbody = document.querySelector('#lista-carrito tbody');
  while (tbody.firstChild) {
    tbody.removeChild(tbody.firstChild);
  }
}