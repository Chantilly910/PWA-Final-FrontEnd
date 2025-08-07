import comidas from '../data/comidas.json';

interface Producto {
  id: number;
  nombre: string;
  tipo: string;
  precio: number;
}

const Hamburguesas = () => {
  const hamburguesas = (comidas as Producto[]).filter((c: Producto) => c.tipo === 'hamburguesa');

  return (
    <div>
      <h2>Hamburguesas</h2>
      <ul>
        {hamburguesas.map((item: Producto) => (
          <li key={item.id}>
            {item.nombre} - ${item.precio}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Hamburguesas;
