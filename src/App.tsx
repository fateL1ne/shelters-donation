import React from 'react';
import StepsPanel from './components/StepsPanel';
import store from './redux/store';
import { Provider } from 'react-redux';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const outerTheme = createMuiTheme({
  palette: {
    primary: {
      main: '#C4794F',
    }
  },
});

function App() {
  return (
    <ThemeProvider theme={outerTheme}>
      <Provider store={store}>
        <StepsPanel />
      </Provider>
    </ThemeProvider>
  );  
}

export default App;
