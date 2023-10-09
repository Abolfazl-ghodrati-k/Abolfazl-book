import React, { useEffect, useState } from 'react'
import MusicContainer from '../Musics/MusicContainer'

function Content({type,field}) {
    return(
        <div className='w-full h-full flex justify-start items-start'>
            {type == "music" ?  <MusicContainer Type={field}/> : 'there is an error go back to previous page'}
        </div>
    )
}

export default Content