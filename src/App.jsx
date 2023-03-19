import { useState, createContext } from "react";
import Layout from "./components/Layout";


export const CountContext = createContext(null);

const App = () => {

const [count, setCount] = useState(0);

const value = {
    count,
    setCount
}

return (
    <CountContext.Provider value={value}>
        <div className="app">
            App component
            <Layout />
        </div>
    </CountContext.Provider>
);
};

export default App;