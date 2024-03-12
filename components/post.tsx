import Image from 'next/image'
import { FC } from 'react'

interface PostProps {}

const Post: FC<PostProps> = ({}) => {
  return (
    <article className="max-w-lg">
      <div className="flex hover:bg-gray-800/30 px-4 py-1 ">
        <div className="shrink-0 relative w-10 h-10 mr-4 rounded-full overflow-hidden">
          <Image fill className="" src="/Schopenhauer.webp" alt="profile" />
        </div>
        <div>
          <p className="items-baseline">
            <span className="text-green-500 mr-2 text-sm font-medium ">
              Saeedaam
            </span>
            <span className="text-xs text-muted">05/15/24</span>
          </p>
          <p className="text-gray-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque in,
            atque ipsum labore quod, rerum sint accusantium laudantium, eligendi
            ea eveniet optio.
          </p>
        </div>
      </div>
      <div className="mt-1 hover:bg-gray-800/30 px-4 py-1">
        <p className="text-gray-300 pl-14">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, facere,
          et dolorum rerum dolorem nam vitae doloremque totam possimus sapiente
          omnis, officiis magni. Alias odio labore fuga modi numquam. Vero!
        </p>
      </div>
      <div className="mt-1 hover:bg-gray-800/30 px-4 py-1">
        <p className="text-gray-300 pl-14">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, facere,
          et dolorum rerum dolorem nam vitae doloremque totam possimus sapiente.
        </p>
      </div>
    </article>
  )
}

export default Post
