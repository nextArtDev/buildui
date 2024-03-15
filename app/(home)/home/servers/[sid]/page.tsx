import React from 'react'

type Props = {
  params: {
    sid: string
  }
}

function page({ params }: Props) {
  return (
    <div className="flex flex-col">
      <div className="bg-gray-800 w-60 flex flex-col ">
        <div className="px-3 h-12 flex items-center shadow-md  ">
          Server {params.sid}
        </div>
        <div className="text-gray-300 p-3 flex-1 container-snap overflow-y-auto scrollbar-hide">
          <div className="text-white">channel (unread)</div>
          {/* {[...Array(40)].map((_, i) => (
            <p key={i}>Channel {i + 1}</p>
          ))} */}
        </div>
      </div>
      <div className="bg-gray-700 flex flex-col flex-1">
        <div className="px-3 h-12 flex items-center shadow-md">General</div>
        <div className="p-3 flex-1 space-y-4 container-snap overflow-y-auto scrollbar-hide ">
          {/* {[...Array(40)].map((_, i) => (
            <p key={i}>
              message {i + 1}. Lorem ipsum dolor sit amet, consectetur
              adipisicing elit. Inventore vel a vitae porro dolorem ab amet
              obcaecati asperiores eum est laborum incidunt unde, nesciunt
              perferendis voluptate distinctio quibusdam ea provident.{' '}
            </p>
          ))} */}
        </div>
      </div>
    </div>
  )
}

export default page
