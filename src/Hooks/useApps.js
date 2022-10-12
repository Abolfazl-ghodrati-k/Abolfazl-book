import React from 'react'
import { useSelector } from 'react-redux'

function useApps() {
   const cmd         = useSelector((state)=>state.cmd.isOpen)        
   const todo        = useSelector((state)=>state.todo.isOpen)       
   const browser     = useSelector((state)=>state.browser.isOpen)    
   const fileManager = useSelector((state)=>state.fileManager.isOpen)
   const contactme   = useSelector((state)=>state.contactme.isOpen)  
   const portfolio   = useSelector((state)=>state.portfolio.isOpen)  
   const setting     = useSelector((state)=>state.setting.isOpen)    
   const shutdown    = useSelector((state)=>state.shutdown.isOpen)   
  const AppList = [
    {name:"CMD"        , status:cmd , icon: 'VscTerminalCmd'},
    {name:"Todo"       , status:todo , icon: 'VscTerminalCmd'},
    {name:"Browser"    , status:browser , icon: 'VscTerminalCmd'},
    {name:"FileManager", status:fileManager , icon: 'VscTerminalCmd'},
    {name:"ContactMe"  , status:contactme , icon: 'VscTerminalCmd'},
    {name:"Portfolio"  , status:portfolio , icon: 'VscTerminalCmd'},
    {name:"Setting"    , status:setting , icon: 'VscTerminalCmd'},
    {name:"ShtDown"    , status:shutdown , icon: 'VscTerminalCmd'},
  ]   
  console.log(AppList)

  return (
    AppList
  )
}

export default useApps