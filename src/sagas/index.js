//import * as testSaga from './testSaga'
import * as skillSaga from './skillSaga'

export function* initSagas(sagaMiddleware){
    //Object.values(testSaga).forEach(sagaMiddleware.run.bind(sagaMiddleware))
    Object.values(skillSaga).forEach(sagaMiddleware.run.bind(sagaMiddleware))
}