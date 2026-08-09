import React from 'react'
import {ArrowRight} from 'lucide-react'


const RightCardContent = (props) => {
  return (
    <div>
      <div className='absolute top-0 left-0 h-full w-full p-8 flex flex-col justify-between'>
            <h2 className='bg-white rounded-full font-semibold h-10 w-10 flex justify-center items-center'>{props.id+1}</h2>
            <div>
                <p className='text-shadow-2xs text-white mb-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam illum voluptatem, harum odio nobis nemo suscipit eveniet delectus nostrum maxime?</p>
            </div>
            <div className='flex justify-between'>
                <button className='bg-black rounded-full px-8 py-2 text-white font-medium'>
                    {props.tag}
                </button>
                <button className='bg-blue-300 rounded-full px-4 py-2 text-white font-medium'>
                    <ArrowRight />
                </button>
            </div>

        </div>
    </div>
  )
}

export default RightCardContent
