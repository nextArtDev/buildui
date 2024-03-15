import Link from 'next/link'
import React from 'react'

type Props = {}

function page({}: Props) {
  return (
    <>
      <div className="flex flex-col">
        <div className="px-3 h-12 flex items-center shadow-md  ">Dashboard</div>
        <div className="text-gray-300 p-3 flex-1 container-snap overflow-y-auto scrollbar-hide">
          <p className="text-white">friends</p>
        </div>
      </div>
      <div className="p-3 flex-1 space-y-4 container-snap overflow-y-auto scrollbar-hide ">
        friends
      </div>
    </>
  )
}

export default page
