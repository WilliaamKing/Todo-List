import {createStore} from 'redux';
import RootReaducer from '../reducers/index';

const configureStore = PreloaderState =>(
    createStore(
        RootReaducer,
        PreloaderState,
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

const Store = configureStore({});
export default Store;