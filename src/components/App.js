import 'regenerator-runtime/runtime'
import React from 'react';
import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';

import sagas from '../sagas/sagas';
import reducers from '../reducers/index';
import MainContainer from '../containers/MainContainer';

const App = () => {
	const devTools = window.devToolsExtension ? window.devToolsExtension() : f => f;
	const sagaMiddleware = createSagaMiddleware();
	const store = createStore(reducers, compose(applyMiddleware(sagaMiddleware), devTools));
	sagaMiddleware.run(sagas);

	return (
		<Provider store={store}>
			<MainContainer />
		</Provider>
	);
};

export default App;
