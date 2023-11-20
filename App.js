import React, { useContext } from 'react';
import './App.scss';
import RightSection from './Components/RightCheckBox';
import LeftSection from './Components/LeftCheckBox';
import TopSection from './Components/TopCheckBox';
import BottomSection from './Components/BottomCheckBox';
import { TopSelectProvider } from './context/Selector';
import { SelectContext } from './context/Selector';

function App() {
  const selectContext = useContext(SelectContext);
  const selectValue = selectContext.top;

  const handleTopSectionChange = () => {
    // Add any logic you need here
    selectContext.toggleTop(!selectValue);
  };

  return (

    <div className="App outer-container">
      <div className='top-section'>
        <input type="checkbox" id="topSection" name="topSection" value="Bike"
          checked={selectValue}
          onChange={handleTopSectionChange}
        />
        <label htmlFor="topSection"> Top</label><br />
      </div>
      <section >
        <TopSection />
        <section className='left-right'>
          <LeftSection />
          <RightSection />
        </section>
        <BottomSection />
      </section>
    </div>

  );
}

const AppWithProvider = () => (
  <TopSelectProvider>
    <App />
  </TopSelectProvider>
);

export default AppWithProvider;