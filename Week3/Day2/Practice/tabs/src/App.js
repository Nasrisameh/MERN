import './App.css';
// import useState
import { useState} from 'react';
import Tabs from './components/Tabs';
// import bootstrap 
import 'bootstrap/dist/css/bootstrap.min.css'
import Display from './components/Display';
function App() {
  // create the allTabs state to store an array of items
  const [allTabs,setAllTabs]=useState([
    {label:"Tab 1",content:"Tab 1 content"},
    {label:"Tab 2", content:"Tab 2 Content"},
    {label:"Tab 3", content:"Tab 3 content"}
  ])

  const [text,setText]=useState(allTabs[0].content)
  const [currentTab,setCurrentTab]=useState(0)

  return (
    <div className="mx-auto" style={{width:500}}>
      {/* call the tabs component and send the array of objects using props */}
      <Tabs allTabs={allTabs} setAllTabs={setAllTabs} setText={setText} setCurrentTab={setCurrentTab} currentTab={currentTab}/>
      <Display allTabs={allTabs} setAllTabs={setAllTabs} setText={setText} currentTab={currentTab} text={text}/>
    </div>
  );
}

export default App;
