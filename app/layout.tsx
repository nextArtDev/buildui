'use client'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { ReactNode } from 'react'

const inter = Inter({ subsets: ['latin'] })

// export const metadata: Metadata = {
//   title: 'Create Next App',
//   description: 'Generated by create next app',
// }
let servers = [
  { id: '1', img: 'tailwind.png' },
  { id: '2', img: 'next.png' },
  { id: '3', img: 'mirage.png' },
]

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const pathname = usePathname()

  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex text-gray-100 h-screen">
          <div className="bg-gray-900 p-3 w-32  space-y-2 container-snap overflow-y-auto scrollbar-hide relative ">
            <NavLink href="/home">
              <DiscordIcon className="h-5 w-7" />
            </NavLink>

            <hr className="border-t-white/[.06] border-t-2 rounded mx-2" />
            {servers.map((server) => (
              <NavLink href={`/home/servers/${server.id}`} key={server.id}>
                <img src={`/servers/${server.img}`} alt="" />
              </NavLink>
            ))}
          </div>
          {/* <Link
              href={'/home'}
              className={`group ${
                pathname === '/home'
                  ? //     ? 'group-hover:bg-[#5865F2] group-hover:text-white bg-gray-700 rounded-2xl'
                    //     : 'rounded-2xl bg-[#5865F2] text-white'
                    // } flex items-center justify-center w-12 h-12 text-gray-800 bg-gray-700 rounded-3xl duration-300  `}
                    'rounded-2xl bg-[#5865F2] text-white'
                  : 'text-gray-100 group-hover:rounded-2xl group-hover:bg-[#5865F2] group-hover:text-white bg-gray-700 rounded-3xl'
              } flex items-center justify-center w-12 h-12 transition-all duration-200 overflow-hidden`}
            >
              <div className="absolute flex left-0 items-center  ">
                <div
                  className={`${'h-5 scale-0 opacity-0 group-hover:opacity-100 group-hover:scale-100'} w-1 transition-all duration-200 origin-left bg-white rounded-r`}
                  // className=" bg-white w-1 h-5 rounded-r-lg opacity-0 group-hover:opacity-100 transition-all duration-300 scale-0 group-hover:scale-100 origin-left "
                ></div>
              </div>
              LOGO
            </Link>
            <Link
              href={'/home/servers'}
              className="flex items-center justify-center w-12 h-12 text-gray-800 bg-gray-700 rounded-3xl hover:bg-[#5865F2] hover:text-white hover:rounded-2xl transition-all cursor-pointer duration-300"
            >
              S1
            </Link>
          </div> */}
          {children}
        </div>
      </body>
    </html>
  )
}

function NavLink({ href, children }: { href: string; children: ReactNode }) {
  const pathname = usePathname()

  return (
    <>
      <Link href={href} className="relative block group">
        <div className="absolute flex items-center h-full -left-3">
          <div
            className={`${
              pathname === href
                ? 'h-10'
                : 'h-5 scale-0 opacity-0 group-hover:opacity-100 group-hover:scale-100'
            } w-1 transition-all duration-200 origin-left bg-white rounded-r`}
          ></div>
        </div>

        <div className="group-active:translate-y-px">
          <div
            className={`${
              pathname === href
                ? 'rounded-2xl bg-[#5865F2] text-white'
                : 'text-gray-100 group-hover:rounded-2xl group-hover:bg-[#5865F2] group-hover:text-white bg-gray-700 rounded-3xl'
            } flex items-center justify-center w-12 h-12 transition-all duration-200 overflow-hidden`}
          >
            {children}
          </div>
        </div>
      </Link>
    </>
  )
}

function DiscordIcon(props: any) {
  return (
    <svg aria-hidden="false" viewBox="0 0 28 20" {...props}>
      <path
        fill="currentColor"
        d="M23.021 1.677A21.227 21.227 0 0017.658 0c-.252.462-.483.935-.687 1.418a19.931 19.931 0 00-5.943 0C10.82.935 10.59.462 10.337.005c-1.856.32-3.659.88-5.37 1.677C1.567 6.78.65 11.754 1.111 16.652A21.504 21.504 0 007.691 20c.532-.726 1.004-1.5 1.407-2.309a13.582 13.582 0 01-2.221-1.078c.188-.137.37-.274.547-.428a15.232 15.232 0 0013.152 0c.177.148.36.291.541.428-.707.424-1.453.787-2.22 1.078.408.808.875 1.578 1.405 2.303a21.5 21.5 0 006.58-3.347h.007c.541-5.674-.922-10.6-3.868-14.97zM9.681 13.638c-1.283 0-2.34-1.193-2.34-2.644S8.37 8.35 9.68 8.35c1.308 0 2.359 1.193 2.338 2.644 0 1.451-1.036 2.644-2.339 2.644zm8.635 0c-1.283 0-2.34-1.193-2.34-2.644s1.036-2.644 2.34-2.644c1.302 0 2.36 1.193 2.338 2.644 0 1.451-1.036 2.644-2.338 2.644z"
      />
    </svg>
  )
}
