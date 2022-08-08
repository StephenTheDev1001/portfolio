import mongo from '../assets/db.png'

const ShowCase = () => {
  return (
    <div className="bg-slate-300 block sm:flex justify-around h-[800px] mt-[-50px]">

      <div className="flex flex-col m-10 justify-center sm:w-[50%]">
        <h1 className="text-gray-800 text-3xl my-5 text-center sm:text-left">
          Stephen S.<br />
          Full Stack Developer
        </h1>
        <p className='px-10'>I enjoy working with the logic that goes into web technologies.

          It takes times to get things done, but when I get it to work

          there's no other feeling like it.

          <span className="hidden sm:inline">Even the little things, click on a top corner logo to see a showcase of TailwindCSS animations.</span>
        </p>
      </div>

      <div className="flex flex-col justify-center items-center mx-10">
        <h1 className="underline font-black text-4xl mb-5">Experience</h1>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-10 justify-items-center">
          <div>
            <i class="fa-brands fa-node fa-5x"></i>
            <p className='text-center mt-1'>Node JS</p>
          </div>
          <div>
            <i className="fa-brands fa-js fa-5x"></i>
            <p className='text-center mt-1'>JavaScript</p>
          </div>
          <div>
            <i className='fab fa-github fa-5x'></i>
            <p className='text-center mt-1'>Git</p>
          </div>
          <div>
            <i class="fa-brands fa-react fa-5x animate-spin"></i>
            <p className='text-center mt-1'>React JS</p>
          </div>
          <div>
            <i class="fa-brands fa-css3-alt fa-5x"></i>
            <p className='text-center mt-1'>CSS</p>
          </div>
          <div>
            <img src={mongo} alt="mongo logo" className='h-[80px]' />
            <p className='text-center mt-1'>MongoDB</p>
          </div>
        </div>
      </div>

    </div>
  )
}
export default ShowCase