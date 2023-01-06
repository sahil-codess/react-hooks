import React from 'react'
import './App.css'
import ComponentF from './components/ComponentF';

export const UserContext = React.createContext()
export const ChannelContext = React.createContext()

function App() {

  return (
    <div className="App">
      <UserContext.Provider value={'Sahilkhan'}>
        <ChannelContext.Provider value={'Code Evolution'}>
          <ComponentF />
        </ChannelContext.Provider>
      </UserContext.Provider>
    </div>
  );
}

export default App;
