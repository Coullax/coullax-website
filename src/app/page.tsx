
import Image from 'next/image';

export default function Home() {
  return (
    <div className=" w-full">
      <div className=" w-full">
        <div className="w-[90%] max-w-[1200px] flex items-center justify-between py-8 mx-auto px-[100px]">
          <div>
            <div >

              <Image
                src="/logo.png"
                alt="logo"
                width={197}
                height={33}
                className="cursor-pointer"
              />
            </div>


          </div>

          <div className="flex justify-center items-center">
            <div className="flex justify-center items-center gap-4">
              <h5>Home</h5>
              <h5>Features</h5>
              <h5>About</h5>

            </div>


          </div>
        </div>
      </div>

      <div className="w-full relative  overflow-hidden">
        <div className=" w-[90%] max-w-[1200px] mx-auto ">
          <div className='min-h-[435px] bg-[#eff4f2] flex items-center justify-center my-[140px] rounded-[25px] py-[57px]'>
            <h1 className='text-[45px] font-bold text-center text-black tracking-[-2.25px]'>Making Tech Work Smarter<br/>
              and Safer for Everyone
            </h1>
          </div>

        </div>
      </div>


      <div className="w-full relative overflow-hidden">
        <div className=" w-[90%] max-w-[1200px] mx-auto ">
          <div className='flex items-center justify-center my-[140px] rounded-[25px] py-[57px]'>

          </div>

        </div>
      </div>
    </div>
  );
}
