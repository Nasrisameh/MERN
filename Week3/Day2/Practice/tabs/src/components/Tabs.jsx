import React from 'react'
// import useState
import { useState } from 'react';

// to be able to use props and read the data we have sent we need to put it in the parameters
function Tabs(props) {
    // deconstracting the data sent from App.js using props
    const {allTabs,setAllTabs,setText,setCurrentTab,currentTab}=props
    // create a state to store the content of the tab

    // by default we will give it the content of the first tab
    // const [text,setText]=useState(allTabs[0].content)

    // create a state to keep track of the current tab
    // const [currentTab,setCurrentTab]=useState(0)

    // create a function to change the displayed content of the clicked tab
    const tabChange =(i)=>{
        setCurrentTab(i)
        setText(allTabs[i].content)
    }
    // // create a function to save the data from the text area when modified by the user
    // const saveCHanges=(value)=>{
    //     setText(value)
    //     // update the vaalue in the alltabs const
    //     allTabs[currentTab].content=value
    //     // using lefting state to update the data in the parent component
    //     setAllTabs(allTabs)
    // }

    return (
        <>
        <div className='nav nav-tabs justify-content-center'>
            {/* use map function to iterate throw alltabs array dans display a button for every object */}
            {/* here we map through all tabs and generate a button for each one */}
            {/* map through all tabs and create a button for each one */}
            {allTabs.map((t,i)=>(
                <div className='nav-item'>
                {/* * when you click on a tab, setAllTabs will change its value */}
                {/* so that only the activeTab is true and others are false */}
                {/* use the onClick event to call tabChange function giving it the index of the clicked tab */}
                {/* using callBack function */}
                <button onClick={()=>tabChange(i)} className={i===currentTab?"nav-link active":"nav-link"}>{t.label}</button>
                </div>
            ))}
        </div>
        {/* create a text area to display the content of the tab and link it to the text state */}
        {/* use the onChanges event to call the saveChanges function giving it the value entred by the user */}
        {/* <textarea onChange={(e)=>saveCHanges(e.target.value)} cols="30" rows="10" value={text} className='form-control'></textarea> */}
        </>
    )
}

export default Tabs