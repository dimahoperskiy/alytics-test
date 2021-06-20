import './App.css';
import Table from "./Table";
import state from "../state";

function App() {
    return (
        <div className="App">
            <Table {...state}/>
        </div>
    );
}

export default App;
