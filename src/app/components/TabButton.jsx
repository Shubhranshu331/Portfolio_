import React from 'react'

const TabButton = ({ active, selectTab, children }) => {
    const buttonClasses = active ? "text-white border-b border-blue-500" : "text-[#ADB7BE]"
    return (
        <button onClick={selectTab}>
            <p className={`mr-3 font-semibold hover:text-blue-500  ${buttonClasses}`}>
                {children}
            </p>
        </button>
    )
}

export default TabButton