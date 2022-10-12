import React from 'react'

function Setting({setOrder}) {
  return (
    <div onClick={setOrder("SETTING")}>Setting</div>
  )
}

export default Setting