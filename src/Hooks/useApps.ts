import React from 'react'
import { useSelector } from 'react-redux'

function useApps() {
   // @ts-expect-error TS(2339): Property 'cmd' does not exist on type 'unknown'.
   const cmd         = useSelector((state)=>state.cmd.isOpen)        
   // @ts-expect-error TS(2339): Property 'todo' does not exist on type 'unknown'.
   const todo        = useSelector((state)=>state.todo.isOpen)       
   // @ts-expect-error TS(2339): Property 'browser' does not exist on type 'unknown... Remove this comment to see the full error message
   const browser     = useSelector((state)=>state.browser.isOpen)    
   // @ts-expect-error TS(2339): Property 'fileManager' does not exist on type 'unk... Remove this comment to see the full error message
   const fileManager = useSelector((state)=>state.fileManager.isOpen)
   // @ts-expect-error TS(2339): Property 'contactme' does not exist on type 'unkno... Remove this comment to see the full error message
   const contactme   = useSelector((state)=>state.contactme.isOpen)  
   // @ts-expect-error TS(2339): Property 'portfolio' does not exist on type 'unkno... Remove this comment to see the full error message
   const portfolio   = useSelector((state)=>state.portfolio.isOpen)  
   // @ts-expect-error TS(2339): Property 'setting' does not exist on type 'unknown... Remove this comment to see the full error message
   const setting     = useSelector((state)=>state.setting.isOpen)    
   // @ts-expect-error TS(2339): Property 'shutdown' does not exist on type 'unknow... Remove this comment to see the full error message
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
  // console.log(AppList)

  return (
    AppList
  )
}

export default useApps