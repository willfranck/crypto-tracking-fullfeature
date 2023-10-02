import Image from 'next/image'


export default function Preview() {
  return (
    <article className='flex flex-col justify-center items-center w-full pt-14 pb-28 space-y-14 bg-slate-900'>
      <div className='flex flex-col lg:flex-row justify-center items-center md:w-5/6 md:h-[600px]'>
        <div className='max-w-md space-y-4 px-6 py-4 self-end lg:self-center text-right'>
          <h3>Create an account with your credentials or Google OAuth</h3>
          <span className='inline-block max-w-xs text-gray-400'>
            - Register and Sign In pages are custom made<br></br>
            - Next-Auth is configured to store user info in MongoDB and create a session token
          </span>
        </div>
      
        <div className='mx-4 rounded-2xl overflow-hidden'>
          <Image 
            src={'/page_register.webp'}
            alt='Screenshot of Register Page'
            width={550}
            height={300}
          />
        </div>
      </div>

      <div className='md:isolate flex flex-col-reverse lg:flex-row justify-center lg:items-center md:w-5/6 md:h-[750px]'>
        <div className='md:relative w-full lg:w-[780px] md:h-[500px] lg:h-[600px]'>
          <div className='md:absolute md:top-0 md:left-0 mx-4 rounded-2xl overflow-hidden'>
            <Image 
              src={'/page_dash_saved_empty.webp'}
              alt='Screenshot of Empty Saved Coins Page'
              width={550}
              height={372}
            />
          </div>
          <div className='md:absolute md:bottom-0 md:right-0 mx-4 mt-4 rounded-2xl overflow-hidden'>
            <Image 
              src={'/page_dash_saved.webp'}
              alt='Screenshot of Saved Coins Page'
              width={550}
              height={372}
            />
          </div>
        </div>

        <div className='max-w-md space-y-4 p-4 px-6 py-4'>
          <h3>Arrive at your dashboard</h3>
          <span className='inline-block max-w-sm text-gray-400'>
            - It'll look a bit barren at first<br></br>
            - Head over to the search tab to browse and bookmark some currencies<br></br>
            - Keep track of the currencies saved back in this tab<br></br>
            - Conditionally rendered components are based on saved currencies<br></br>
            - useState & useEffect modify the elements and components live in conjunction with internal API routes
          </span>
        </div>
      </div>

      <div className='flex flex-col lg:flex-row justify-center items-center md:w-5/6 lg:h-[600px]'>
        <div className='max-w-md space-y-4 px-6 py-4 self-end lg:self-center text-right'>
          <h3>Search for currencies</h3>
          <span className='inline-block max-w-sm text-gray-400'>
            - Search the top coins on the market<br></br>
            - Add or remove as many as you like<br></br>
            - Top 10 coins is the default<br></br>
            - Can be set to 20, 50, or 100 coins<br></br>
            - RapidAPI currencies are stored in their own state<br></br>
            - React hooks manage the changes made without mutating the original API data
          </span>
        </div>

        <div className='mx-4 rounded-2xl overflow-hidden'>
          <Image 
            src={'/page_dash_search.webp'}
            alt='Screenshot of Dashboard Search Page'
            width={550}
            height={300}
          />
        </div>
      </div>

      <div className='md:isolate flex flex-col-reverse lg:flex-row justify-center lg:items-center md:w-5/6 lg:h-[600px]'>
        <div className='md:relative flex flex-col items-center w-full lg:w-[650px] md:h-[600px]'>
          <div className='md:absolute md:top-0 md:left-0 w-[225px] mx-4 rounded-2xl overflow-hidden'>
            <Image 
              src={'/page_dash_mobile.webp'}
              alt='Screenshot of site on a phone'
              width={225}
              height={477}
            />
            <span className='inline-block w-full text-center text-gray-400 bg-black'>Mobile</span>
          </div>
          <div className='md:absolute md:bottom-0 md:right-0 w-[340px] md:mx-4 mt-4 rounded-2xl overflow-hidden'>
            <span className='inline-block w-full text-center text-gray-400 bg-black'>Tablet</span>
            <Image 
              src={'/page_dash_tablet.webp'}
              alt='Screenshot of site on a tablet'
              width={340}
              height={490}
            />
          </div>
        </div>

        <div className='max-w-md space-y-4 p-4 px-6 py-4'>
          <h3><span className='text-gray-400'>also:&ensp;</span>It's Responsive</h3>
          <span className='inline-block max-w-sm text-gray-400'>
            - Most content is viewed on mobile or tablet devices<br></br>
            - Screens of all sizes can enjoy this demo
          </span>
        </div>
      </div>
    </article>
  )
}
