import { useContext } from "react";
import { CountContext } from '../App'

const Card = () => {

    const {count, setCount} = useContext(CountContext);
    

    return (
        <div className="card">
            <h2>Card</h2>
            <h3>{count}</h3>
            <button onClick={() => setCount(count + 1)}>Increment</button>        
        </div>
    );
};

export default Card;