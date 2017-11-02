import { call, put, takeEvery, all } from 'redux-saga/effects';
import services from '../services/index';

function* fetchPic() {
  try {
    let response = yield services.fetchPic()
    yield put({type: 'FETCH_PIC_SUCCESS', payload: response.results})
  } catch (e) {
    console.log('图片error', e)
  }
}

export default function* rootSaga() {
  yield all([
    // takeEvery('FETCH_MOVIE_BEGIN', fetchMovie),
    takeEvery('FETCH_PIC_BEGIN', fetchPic)
  ])
}
