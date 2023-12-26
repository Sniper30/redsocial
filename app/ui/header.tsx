export default function HeaderApp() {
  return (
    <header className='flex justify-between p-6'>
      <div className='flex justify-between items-center gap-5 w-3/12 '>
        <strong className='w-1/12'>Logo</strong>
        <search className='flexjustify-between w-11/12'>
          <input type='text' placeholder='Search...' className='w-full rounded-lg p-1 pl-3 shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500' />
        </search>
      </div>
      <ul className='flex justify-around gap-10'>
        <li>Home</li>
        <li>Posts</li>
        <li>status</li>
        <li>log out</li>
      </ul>

      <ul className='flex justify-around gap-10'>
        <li>Home</li>
        <li>Posts</li>
        <li>status</li>
        <li>log out</li>
      </ul>
    </header>
  );
}
