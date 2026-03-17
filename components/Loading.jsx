import React from 'react'

const Loading = () => {
  return (
    
    <div className='flex justify-center items-center w-fit  h-fit absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-amber-400  '>
        <div className='border-t-2 border-t-blue-500 border-blue-200 border-b-2 border-l-2 border-r-2 animate-spin rounded-full bg-transparent h-8 w-8'>

        </div>
    </div>
  )
}

export default Loading