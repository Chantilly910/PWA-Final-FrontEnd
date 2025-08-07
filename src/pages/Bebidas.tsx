import comidas from '../data/comidas.json';


interface Producto {
  id: number;
  nombre: string;
  tipo: string;
  precio: number;
}


const Bebidas = () => {
  const items = (comidas as Producto[]).filter((c: Producto) => c.tipo === 'bebida');

  return (
    <div>
      <h2>Bebidas</h2>
      <ul>
        {items.map((item: Producto) => (
          <li key={item.id}>
            {item.nombre} - ${item.precio}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Bebidas;
