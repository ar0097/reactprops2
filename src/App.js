import './App.css';
import Image1 from './Images/image1.jpg';
import Image2 from './Images/image2.jpg';
import Moviecard from './component/Moviecard';

function App() {

  return (
    <div className="App">
    <Moviecard movie="Pirates of the Caribbean" yearAndAuthor="2003, Gore" images={Image1} />
    <Moviecard
      movie="Captain America"
      yearAndAuthor="20011, Joy Simens"
      images={Image2}
    />
  </div>
  );
}

export default App;