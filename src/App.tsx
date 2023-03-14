import { useState } from "react";
import "./App.scss";
import { MyGlobalContext } from "./Context";

import Routers from "./utils/Routers";

function App() {
  const [isLogin, setIsLogin] = useState<boolean>(false);
  return (
    <MyGlobalContext.Provider value={{ isLogin, setLogin : setIsLogin }}>
      <div className="App">
        <Routers />
      </div>
    </MyGlobalContext.Provider>
  );
}

export default App;
