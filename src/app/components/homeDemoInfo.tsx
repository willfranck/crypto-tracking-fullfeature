export default function DemoInfo() {
  return (
    <article className='flex flex-col md:flex-row justify-center items-center w-full pt-36 pb-14 text-gray-300 bg-gray-700'>
      <div className='p-8 space-y-2 md:text-right'>
        <p>This is my first project using NextJS, TypeScript, and Tailwind CSS</p>
        <p>I built this demo to showcase my ability to adapt and learn new frameworks and libraries</p>
        <p>Thanks for testing it out.&ensp;All feedback is appreciated</p>
      </div>

      <ul className='flex flex-col justify-center list-disc w-5/6 max-w-infoCard space-y-4 pt-6 pl-10 md:pt-0 border-white border-t-2 md:border-l-2 md:border-t-0'>
        <h2><li>Create an account</li></h2>
        <h2><li>Search currencies</li></h2>
        <h2><li>Bookmark favorites</li></h2>
      </ul>
    </article>
  )
}