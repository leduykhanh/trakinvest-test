import DEV_STORE from './appStoreDev'
import PROD_STORE from './appStoreProd'
let store = ''
if (process.env.NODE_ENV === 'production') {
  store = PROD_STORE
} else {
  store = DEV_STORE
}

export default store