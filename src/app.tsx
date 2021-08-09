import React from 'react';
import {VerticalLayout} from 'Todo/src/components/index';
import {Provider} from 'react-redux';
import RootNavigation from './navigation/navigation';
import store from './redux/store/store';

function App() {
  return (
    <Provider store={store}>
      <VerticalLayout style={{flex: 1}}>
        <RootNavigation />
      </VerticalLayout>
    </Provider>
  );
}
export default App;
