import { Provider } from 'react-redux';
import LocalStorageServiceContext from '../utils/context';
import localStorageService from '../utils/local-storage-service';
import store from '../redux/store';

import '../styles/globals.scss'

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <LocalStorageServiceContext.Provider value={localStorageService}>
        return <Component {...pageProps} />
      </LocalStorageServiceContext.Provider>
    </Provider>
  );
}

export default MyApp
