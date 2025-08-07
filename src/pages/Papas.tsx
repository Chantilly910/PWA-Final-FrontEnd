import comidas from '../data/comidas.json';

interface Producto {
  id: number;
  nombre: string;
  tipo: string;
  precio: number;
}

const Papas = () => {
  const items = (comidas as Producto[]).filter((c: Producto) => c.tipo === 'papas');

  return (
    <div>
      <h2>Papas</h2>
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

export default Papas;
