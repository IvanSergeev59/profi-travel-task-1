import React from "react";
import PhoneForm from "../phone-form"
import { Provider } from "react-redux";
import store from "../../store";


const App = ()  => {
  return (
    <Provider store={store}>
      <PhoneForm />
    </Provider>
  );
}

export default App;
