import { legacy_createStore as createStore } from "redux"
import CollectionOfReducers from "./reducers"
import { persistStore, persistReducer } from "redux-persist"
import storage from "redux-persist/lib/storage"

const persistConfig = {
  key: "root",
  storage: storage,
  manualPersistFallback: true,
}

const persistedReducer = persistReducer(persistConfig, CollectionOfReducers)

export const store = createStore(persistedReducer)
export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>
