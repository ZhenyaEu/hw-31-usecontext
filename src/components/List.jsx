import Card from "./Card";
import { useContext } from "react";
import { CountContext } from '../App'

const List = () => {
    const { count } = useContext(CountContext);

    return (
        <div className="list">
            <div>List: {count}</div>
            <Card />
        </div>
    );
};

export default List;
