import { Container } from 'react-bootstrap';
import './App.css';
import Home from './Home';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h3 className="my-3"> 📿 مسبحة الكترونية 📿</h3>
        <p>❤️ إجعل التسبيح والإستغفار من عاداتك ولاتنسى الدعاء لنا</p>
        <Container>
          <div className="row">
            <div className="col-md-3">
              <Home word="سبحان الله" />
            </div>
            <div className="col-md-3">
              <Home word="الحمد الله" />
            </div>
            <div className="col-md-3">
              <Home word=" الله أكبر" />
            </div>
            <div className="col-md-3">
              <Home word="لااله الا الله" />
            </div>
            <div className="col-md-3">
              <Home word="سبحان الله وبحمده" />
            </div>
            <div className="col-md-3">
              <Home word="سبحان الله العظيم" />
            </div>
            <div className="col-md-3">
              <Home word="لاحول ولاقوة الا بالله" />
            </div>
            <div className="col-md-3">
              <Home word="أشهد أن لا اله إلا الله" />
            </div>
            <div className="col-md-3">
              <Home word="اللهم صلِ على نبينا محمد" />
            </div>
            <div className="col-md-3">
              <Home word="أشهد أن محمد رسول الله" />
            </div>
            <div className="col-md-3">
              <Home word="لاحول ولاقوة الا بالله العلي العظيم" />
            </div>
            <div className="col-md-3">
              <Home word="لا إله الا أنت سبحانك اني كنت من الظالمين" />
            </div>
          </div>
        </Container>
      </header>
    </div>
  );
}

export default App;
