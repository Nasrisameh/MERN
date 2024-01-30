import React from 'react'

function Display(props) {

    const {allTabs,setAllTabs,setText,text,currentTab}=props
    const saveCHanges=(value)=>{
        setText(value)
        // update the vaalue in the alltabs const
        allTabs[currentTab].content=value
        // using lefting state to update the data in the parent component
        setAllTabs(allTabs)
    }
    return (
        <div>
            <textarea onChange={(e)=>saveCHanges(e.target.value)} cols="30" rows="10" value={text} className='form-control'></textarea>
        </div>
    )
}

export default Display