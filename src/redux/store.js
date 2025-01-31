// import { configureStore } from '@reduxjs/toolkit';
// import tripReducer from './tripSlice';

// export const store = configureStore({
//   reducer: {
//     trips: tripReducer,
//   },
// });

import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';  // استيراد الـ persist
import storage from 'redux-persist/lib/storage';  // استخدام localStorage كمخزن
import tripReducer from './tripSlice';  // استيراد الـ reducer الخاص بالـ trips

// إعداد persist
const persistConfig = {
  key: 'root',  // اسم المفتاح الذي سيتم تخزين البيانات تحته
  storage,  // يمكن تغييره إلى sessionStorage إذا كنت تريد تخزين البيانات في الجلسة فقط
};

const persistedReducer = persistReducer(persistConfig, tripReducer);  // دمج الـ persist مع الـ reducer

// إعداد الـ store
export const store = configureStore({
  reducer: {
    trips: persistedReducer,  // استخدام الـ persistedReducer
  },
});

export const persistor = persistStore(store);  // إعداد persistStore
