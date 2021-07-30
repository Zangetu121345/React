import {Provider} from 'react-redux';
import BallContainer from './BallContainer' 
import store from './redux/store'
import BatContainer from './BatContainer.';
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <BallContainer/>
        <BatContainer/>
      </div>
    </Provider>
  )
}

export default App;
