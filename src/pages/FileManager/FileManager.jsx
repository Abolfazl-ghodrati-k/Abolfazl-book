import React from 'react'
import './style.css'

function FileManager({setOrder}) {
  return (
    <div onClick={setOrder("FILE_MANAGER")}>FileManager</div>
  )
}

export default FileManager