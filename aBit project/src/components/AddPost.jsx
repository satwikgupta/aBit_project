import React from 'react'

function AddPost() {
  return (
    <div
      className="flex  justify-center items-center h-[320px] bg-zinc-200 w-72 p-2 bg-scroll bg-top bg-cover rounded-3xl relative text-zinc-400"
      
    >
        <div className='items-center  text-7xl font-inter'>+</div>
        <div className='absolute bottom-0 w-full p-8 items-center text-center'>
            You haven't uploaded any videos with aBit yet. Add now!</div>
    </div>
  )
}

export default AddPost