import {createStore} from 'redux';
import RootReaducer from '../reducers/index';

const configureStore = PreloaderState =>(
    createStore(
        RootReaducer,
        PreloaderState,
    )
);

const Store = configureStore({});
export default Store;