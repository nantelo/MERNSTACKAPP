
import './App.css';
import Navbar from './component/Navbar';
import Hero from './component/Hero';
import List from './component/List';
import Counter from './component/Counter';
import Calculator from './component/Calculator';
function App() {
  return (
    <div className="App">

      <Navbar />
      <Hero />
      <Calculator />
      <Counter/>
      <List />

    </div>
  );
}

export default App;
