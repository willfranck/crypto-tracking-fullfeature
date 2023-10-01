import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'


export default function Footer() {
  return (
    <footer className='flex justify-center w-full p-10'>
      <div className='flex flex-col md:flex-row justify-around md:items-center space-y-4 md:space-y-0 md:space-x-8'>
        <span className='text-gray-400'>check me out on:</span>

        <Link 
          href={'https://github.com/willfranck'}
          className='flex items-center hover:text-indigo-500'
        >
          <FontAwesomeIcon icon={faGithubSquare} className='w-12 h-12' />
          <p>&ensp;Github</p>
        </Link>

        <Link 
          href={'https://linkedin.com/in/william-franck'}
          className='flex items-center hover:text-indigo-500'
        >
          <FontAwesomeIcon icon={faLinkedin} className='w-12 h-12' />
          <p>&ensp;LinkedIn</p>
        </Link>
      </div>
    </footer>
  )
}