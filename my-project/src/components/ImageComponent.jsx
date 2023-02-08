import React from 'react'

export const ImageComponent = () => {
    return (
        <div className="rounded max-w-sm overflow-hidden shadow-lg ">
            <img src="https:/source.unsplash.com/random" className='w-full' />
            <div className='px-6 py-4'>
                <div className=' font-bold text-xl text-purple-500'>Photo by John Doe
                </div>
                <ul className=''>
                    <li><strong>Views:</strong> 4000</li>
                    <li><strong>Downloads:</strong> 4000</li>
                    <li><strong>Votes:</strong> 4000</li>
                </ul>
                <div className='px-6 py-4 '>
                    <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2'>#tag1</span>
                    <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 '>#tag2</span>
                    <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2'>#tag3</span>
                </div>


            </div>

        </div>
    )
}
