import React from 'react'

// function Tab (props) {
//     var label = props.label
//     var x = props.x
//     //...

//     return ()

// }

const Tab = ({label, isActive, handleClick}) => {
    // let {} = props
  return (
    <div>
        <li className={isActive ? "is-active" : ""}
            onClick={() => handleClick()}>
            <a>{label}</a>
        </li>
    </div>
  )
}

export default Tab 