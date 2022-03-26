import './App.css';
import Books from './Components/Books/Books';
import Header from './Components/Header/Header';
import ImportantQuestion from './Components/ImportantQuestion/ImportantQuestion';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Books></Books>
      <ImportantQuestion></ImportantQuestion>
    </div>
  );
}

export default App;
