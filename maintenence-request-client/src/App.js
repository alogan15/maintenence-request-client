import './App.css';
import AddRequest from './components/pages/AddRequest';
import UpdateRequest from './components/pages/UpdateRequest';
import DataTable from './components/RequestTable';

function App() {
  return (
    <div className="App">
      <DataTable />
      {/* <AddRequest /> */}
      {/* <UpdateRequest /> */}
    </div>
  );
}

export default App;
