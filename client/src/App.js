import { useEffect } from 'react';
import { Provider } from 'react-redux';
import store from 'src/store';
import { GET_CONDITIONS } from 'src/constants/conditionConstants';
import ConditionsListComponent from 'src/components/ConditionsListComponent';
import './App.css';

function App() {
  useEffect(() => {
    store.dispatch({ type: GET_CONDITIONS });
  }, []);  
  return (
    <Provider store={store}>
      <ConditionsListComponent />
    </Provider>
  );
}

export default App;
