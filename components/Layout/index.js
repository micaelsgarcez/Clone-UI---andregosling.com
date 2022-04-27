import Image from 'next/image'
import {
  AiOutlineLinkedin,
  AiOutlineInstagram,
  AiOutlineGithub
} from 'react-icons/ai'

export default function Layout({ children }) {
  return (
    <div className='flex min-h-screen w-full relative text-white'>
      <aside className='w-32 flex-none bg-[#0d0d0d] flex flex-col justify-between py-8 border-r border-[rgba(250,250,250,0.03)]'>
        <div className='flex items-center justify-center flex-col'>
          <Image src='/logo.svg' layout='fixed' width={45} height={45} />
          <span className='font-extralight mt-3 block text-xl'>André</span>
        </div>
        <div>
          <ul>
            <li>
              <a
                className='block w-full text-center py-4 border-y border-[rgba(250,250,250,0.5)] text-[#d7d7d7]'
                href='#'
              >
                Início
              </a>
            </li>
            <li>
              <a
                className='block w-full text-center py-4 border-b border-[rgba(250,250,250,0.03)] text-[#d7d7d7] font-extralight'
                href='#'
              >
                Techs
              </a>
            </li>
            <li>
              <a
                className='block w-full text-center py-4 border-b border-[rgba(250,250,250,0.03)] text-[#d7d7d7] font-extralight'
                href='#'
              >
                Projetos
              </a>
            </li>
            <li>
              <a
                className='block w-full text-center py-4 border-b border-[rgba(250,250,250,0.03)] text-[#d7d7d7] font-extralight'
                href='#'
              >
                Contato
              </a>
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <li>
              <a href='#'>
                <AiOutlineGithub />
              </a>
            </li>
            <li>
              <a href='#'>
                <AiOutlineInstagram />
              </a>
            </li>
            <li>
              <a href='#'>
                <AiOutlineLinkedin />
              </a>
            </li>
          </ul>
        </div>
      </aside>
      <main className='flex-1'>{children}</main>
    </div>
  )
}
