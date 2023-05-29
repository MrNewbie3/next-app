"use client";
import "./globals.css";
import "@fontsource/open-sans/400.css";
import "@fontsource/open-sans/500.css";
import "@fontsource/open-sans/700.css";
import "@fontsource/open-sans/800.css";
import reducer from "@/hooks/reducer";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { PersistGate } from "redux-persist/integration/react";
import UserAuth from "@/components/client/user_auth";

const persistConfig = {
  key: "root",
  storage,
};
const persistedReducer = persistReducer(persistConfig, reducer);

const store = createStore(persistedReducer, applyMiddleware(thunk));
const persistor = persistStore(store);
export default function RootLayout({ children }: { children: React.ReactNode }) {
  const data = typeof window !== undefined ? localStorage.getItem("login") : undefined;

  return (
    <html lang="en">
      <head></head>
      <body className="bg-light-grey ">
        <Provider store={store}>
          {data !== undefined ? <UserAuth></UserAuth> : ""}
          <PersistGate loading={null} persistor={persistor}>
            {children}
          </PersistGate>
        </Provider>
      </body>
    </html>
  );
}
