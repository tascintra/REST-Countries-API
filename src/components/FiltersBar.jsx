import React from 'react'

const FiltersBar = () => {
  return (
    <div className="h-36 px-16 flex items-center justify-between">
      <input className="shadow-components bg-white dark:bg-blue-300 transition-all duration-500" style={{height: "56px", borderRadius: "4px", width: "480px", padding: "8px"}} type="text" />
      <select name="" id="">
        <option value="">teste 1</option>
        <option value="">teste 2</option>
        <option value="">teste 3</option>
        <option value="">teste 4</option>
        <option value="">teste 5</option>
      </select>
    </div>
  )
}

export default FiltersBar
