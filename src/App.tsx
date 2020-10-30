import React from 'react';
import './App.css';
import { AddHouse } from './components/AddHouse/AddHouse';
import { HouseList } from './components/HouseList/HouseList';

function App() {
  return (
    <>
   <AddHouse />
   <HouseList />
   </>
  );
}

export default App;
