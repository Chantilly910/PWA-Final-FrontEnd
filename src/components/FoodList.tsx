import axios from 'axios';

const FoodList = ({ cart, setCart }) => {
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/api/foods').then(res => setFoods(res.data));
  }, []);

  const addToCart = (food) => {
    setCart([...cart, food]);
  };

  return (
    <div>
      {foods.map(food => (
        <div key={food.id}>
          <h3>{food.name} - ${food.price}</h3>
          <button onClick={() => addToCart(food)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default FoodList;
