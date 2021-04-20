import React from 'react';
import StepsPanel from './components/StepsPanel';
import store from './redux/store';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
      <StepsPanel />
    </Provider>
  );  
}

export default App;
