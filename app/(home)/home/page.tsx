import React from 'react'

type Props = {}

function page({}: Props) {
  return (
    <div className="flex text-white h-screen">
      <div className="bg-gray-800 p-3 space-y-2 container-snap overflow-y-auto scrollbar-hide ">
        {[...Array(40)].map((_, i) => (
          <div
            key={i}
            className="bg-white text-gray-800 w-12 h-12 rounded-full flex items-center justify-center "
          >
            {i + 1}
          </div>
        ))}
      </div>
      <div className="bg-gray-700 w-60 flex flex-col ">
        <div className="px-3 h-12 flex items-center shadow-md  ">
          Tailwind CSS
        </div>
        <div className=" p-3 flex-1 container-snap overflow-y-auto scrollbar-hide">
          {[...Array(40)].map((_, i) => (
            <p key={i}>Channel {i + 1}</p>
          ))}
        </div>
      </div>
      <div className="bg-gray-600 flex flex-col flex-1">
        <div className="px-3 h-12 flex items-center shadow-md">General</div>
        <div className="p-3 flex-1 space-y-4 container-snap overflow-y-auto scrollbar-hide ">
          {[...Array(40)].map((_, i) => (
            <p key={i}>
              message {i + 1}. Lorem ipsum dolor sit amet, consectetur
              adipisicing elit. Inventore vel a vitae porro dolorem ab amet
              obcaecati asperiores eum est laborum incidunt unde, nesciunt
              perferendis voluptate distinctio quibusdam ea provident.{' '}
            </p>
          ))}
        </div>
      </div>
    </div>
  )
}

export default page
