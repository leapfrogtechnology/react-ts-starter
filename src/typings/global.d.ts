import { compose } from 'redux';

declare global {
  declare interface Window {
    __REDUX_DEVTOOLS_EXTENSION__?: typeof compose;
  }
}
