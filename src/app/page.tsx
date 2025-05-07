
import Image from 'next/image';

export default function Home() {
  return (
    <div className=" w-full">
      <div className=" w-full">
        <div className="w-[90%] max-w-[1200px] flex items-center justify-between py-8 mx-auto md:px-[100px] px-4">
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
            <div className="flex justify-center items-center gap-4 font-bold font-stretch-normal text-[20px]">
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
          <div className='h-[774.1px] flex-grow-0 flex flex-col justify-start items-start p-0'>

            <div className='md:w-[570px] w-full min-h-[156px]  flex flex-col justify-between items-start p-4 md:p-0'>
              <div className='w-[308.5px] h-[42.1px] flex-grow-0 flex flex-row justify-center items-center gap-[6.4px] px-[22.3px] py-[9.5px] rounded-[63.6px] bg-[#171717]'>
                <span className='w-[264px] h-[23px] flex-grow-0 text-[20px] not-italic leading-[1.16] tracking-[-1px] text-left text-[#fff]'>
                  This is where we  ace the game
                </span>
              </div>
              <div className='mt-[45px] h-[69px]  flex-grow-0 font-[PlusJakartaSans] text-[20px] font-medium [font-stretch:normal] not-italic leading-[1.16] tracking-[normal] text-left text-[#575757]'>
                Working with us is easy We follow a clear no fuss process that keeps things moving fast and smooth,fro first chat to final delivery.
              </div>
              </div>

              <div className='  h-[357px] flex-grow-0 flex flex-col md:flex-row justify-start items-center gap-[40px] p-0 my-[40px]'>
              <div className=' h-[355px] flex-grow-0 object-contain '>
                <Image
                  src="/Homepage/ArtificalInteligence.png"
                  alt="image1"
                  width={580}
                  height={357}
                  className="object-contain"
                />
              </div>
              <div className='w-[580px] h-[355px] flex-grow-0 object-contain'>
              <Image
                  src="/Homepage/BlockChaain.png"
                  alt="image1"
                  width={580}
                  height={357}
                  className="object-contain"
                />
              </div>
              </div>

              <div className='h-[181px] self-stretch flex-grow-0 flex flex-row justify-between items-center gap-[25px] p-0'>
                <div className='w-[383.4px] h-[181px] flex-grow-0 flex flex-col justify-start items-start gap-[20px] px-[25px] py-[24px] rounded-[25px] bg-[#def7ff]'>
                <span className='h-[23px] self-stretch flex-grow-0 font-[PlusJakartaSans] text-[20px] font-bold [font-stretch:normal] not-italic leading-[1.16] tracking-[-1px] text-left text-[#2a3b40]'>Web & Software Development
                </span>
                <div className='self-stretch w-[188px] h-[66.6px] flex-grow-0 flex flex-col justify-start items-stretch gap-[10.8px] p-0'>Automation Solutions Websites & Software Mobile Apps</div>
                </div>
                <div className='w-[383.4px] h-[181px] flex-grow-0 flex flex-col justify-start items-start gap-[20px] px-[25px] py-[24px] rounded-[25px] bg-[#e5e6ff]'>
                <span className='h-[23px] self-stretch flex-grow-0 font-[PlusJakartaSans] text-[20px] font-bold [font-stretch:normal] not-italic leading-[1.16] tracking-[-1px] text-left text-[#2a3b40]'>Web & Software Development
                </span>
                <div className='self-stretch w-[188px] h-[66.6px] flex-grow-0 flex flex-col justify-start items-stretch gap-[10.8px] p-0'>Automation Solutions Websites & Software Mobile Apps</div>
                </div>

                <div className='w-[383.4px] h-[181px] flex-grow-0 flex flex-col justify-start items-start gap-[20px] px-[25px] py-[24px] rounded-[25px] bg-[#effdf8]'>
                <span className='h-[23px] self-stretch flex-grow-0 font-[PlusJakartaSans] text-[20px] font-bold [font-stretch:normal] not-italic leading-[1.16] tracking-[-1px] text-left text-[#2a3b40]'>Web & Software Development
                </span>
                <div className='self-stretch w-[188px] h-[66.6px] flex-grow-0 flex flex-col justify-start items-stretch gap-[10.8px] p-0'>Automation Solutions Websites & Software Mobile Apps</div>
                </div>
              </div>

          </div>
        </div>
      </div>



      <div className="w-full relative  overflow-hidden ">
        <div className=" w-[90%] max-w-[1200px] mx-auto  ">
          <div className='h-[554.1px] flex-grow-0 flex flex-col justify-start items-start gap-[55px] p-0 my-[140px]'>
            <div className='h-[156.1px] self-stretch flex-grow-0 flex flex-col justify-between items-start p-0'>
              <div className='w-[310.5px] h-[42.1px] flex-grow-0 flex flex-row justify-center items-center gap-[6.4px] px-[22.3px] py-[9.5px] rounded-[63.6px] bg-[#171717]'>
              </div>
              <span className='w-[570px] h-[69px] flex-grow-0 font-[PlusJakartaSans] text-[20px] font-medium [font-stretch:normal] not-italic leading-[1.16] tracking-[normal] text-left text-[#575757]'>
              Working with us is easy. We follow a clear, no fuss process that keeps things moving fast and smooth, from first chat to final delivery.
                  </span>
            </div>
            <Image
              src="/Homepage/Arrow.png"
              alt="image1"
              width={1200}
              height={554}
              className="object-contain w-[346px]"
            />
            <div className='w-[1199px] h-[288px] flex-grow-0 flex flex-row justify-start items-start gap-[25px] p-0'>
              <div className='w-[281px] h-[288px] flex-grow-0 flex flex-col justify-start items-start gap-[120px] px-[25px] py-[24px] rounded-[25px] bg-[#f3f8f8]'>

              </div>

              <div className='w-[281px] h-[288px] flex-grow-0 flex flex-col justify-start items-start gap-[120px] px-[25px] py-[24px] rounded-[25px] bg-[#c5d7d8]'>

              </div>

              <div className='w-[281px] h-[288px] flex-grow-0 flex flex-col justify-start items-start gap-[120px] px-[25px] py-[24px] rounded-[25px] bg-[#163b31]'>

              </div>

              <div className='w-[281px] h-[288px] flex-grow-0 flex flex-col justify-start items-start gap-[120px] px-[25px] py-[24px] rounded-[25px] bg-[#f2fe65]'>

              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full relative overflow-hidden">
        <div className=" w-[90%] max-w-[1200px] mx-auto  ">
          <div className='w-[1198px] h-[783px] flex-grow-0 flex flex-col justify-start items-start gap-[60px] p-0'>
            <div className='w-[570px] h-[156.1px] flex-grow-0 flex flex-col justify-between items-start p-0'>
              <div className='w-[283.5px] h-[42.1px] flex-grow-0 flex flex-row justify-center items-center gap-[6.4px] px-[22.3px] py-[9.5px] rounded-[63.6px] bg-[#272626]'>
              </div>
              <span className='w-[570px] h-[69px] flex-grow-0 font-[PlusJakartaSans] text-[20px] font-medium [font-stretch:normal] not-italic leading-[1.16] tracking-[normal] text-left text-[#575757]'> Working with us is easy. We follow a clear, no fuss process that keeps things moving fast and smooth, from first chat to final delivery</span>
            </div>

            <div className='w-[1198px] h-[566.9px] flex-grow-0'>
            <div className='w-[256.3px] h-[374.3px] flex flex-col justify-start items-start gap-[29.8px] mt-[0] mr-[22.6px] mb-[22.6px] ml-[0] px-[25px] py-[23.8px] rounded-[17.9px] bg-[#163b31]'></div>
            <div className='w-[587.7px] h-[169.2px] flex flex-col justify-center items-center gap-[29.8px] mt-[23px] mr-[22.6px] mb-[0.4px] ml-[0] px-[25px] py-[23.8px] rounded-[17.9px] bg-[linear-gradient(112deg,_#7b7ee1_10%,_#43457b_60%)]'></div>
            </div>

          </div>
        </div>
      </div>





      <div className="w-full relative  overflow-hidden ">
        <div className=" w-[90%] max-w-[1200px] mx-auto ">
          <div className='w-[1200px] h-[457.1px] flex-grow-0 flex flex-col justify-start items-center gap-[45px] mt-[140px]'>
            <div className='w-[284.5px] h-[42.1px] flex-grow-0 flex flex-row justify-center items-center gap-[6.4px] px-[22.3px] py-[9.5px] rounded-[63.6px] bg-[#000]'>
            </div>
            <span className='w-[706px] h-[115px] flex-grow-0 font-[PlusJakartaSans] text-[20px] font-medium [font-stretch:normal] not-italic leading-[1.16] tracking-[normal] text-center text-[#575757] py-[45px]'>
            Our mission is to enhance efficiency, security, and transparency across industries. Making the world a smarter, more connected, and a safer placeTo achieve this, we believe in the power of Artificial intelligence’s efficiency and Blockchain technology’s security and transparency.
            </span>
            <div className='w-[1200px] h-[210px] flex-grow-0 flex flex-row justify-center items-start gap-[25px] p-0'>
              <div className='w-[280px] h-[210px] flex-grow-0 flex flex-col justify-start items-center gap-[15px] pt-[25px] px-[15px] pb-[15px] rounded-[20px] bg-[#f9f9f9]'></div>
              <div className='w-[280px] h-[210px] flex-grow-0 flex flex-col justify-start items-center gap-[15px] pt-[25px] px-[15px] pb-[15px] rounded-[20px] bg-[#f9f9f9]'></div>
              <div className='w-[280px] h-[210px] flex-grow-0 flex flex-col justify-start items-center gap-[15px] pt-[25px] px-[15px] pb-[15px] rounded-[20px] bg-[#f9f9f9]'></div>
              <div className='w-[280px] h-[210px] flex-grow-0 flex flex-col justify-start items-center gap-[15px] pt-[25px] px-[15px] pb-[15px] rounded-[20px] bg-[#f9f9f9]'></div>

            </div>
          </div>

        </div>
      </div>


      
      <div className="w-full relative  overflow-hidden">
        <div className=" w-[90%] max-w-[1200px] mx-auto ">
          <div className='w-[1200px] h-[584.6px] flex-grow-0 flex flex-col justify-start items-center gap-[20px] my-[140px]'>
            <div className='h-[367.1px] self-stretch flex-grow-0 flex flex-col justify-start items-start gap-[45px] p-0'>
              <div className='w-[355.5px] h-[42.1px] flex-grow-0 flex flex-row justify-center items-center gap-[6.4px] px-[22.3px] py-[9.5px] rounded-[63.6px] bg-[#000]'></div>
              <div className='w-[1200px] h-[280px] flex flex-col  md:flex-row justify-start items-stretch gap-[11px] p-[15px] rounded-[20px] '>
                <div className='w-[589px] h-[280px]  p-[15px] rounded-[20px] bg-[#f9f9f9]'></div>
                <div className='w-[589px] h-[280px]  p-[15px] rounded-[20px] bg-[#f9f9f9]'></div>
              </div>
            </div>

            <div className='w-[1200px] h-[160.5px] flex-grow-0 flex flex-row justify-start items-start gap-[20px] my-[40px]'>
              <div className='w-[335px] h-[160.5px] flex-grow-0 flex flex-col justify-start items-stretch gap-[11px] p-[15px] rounded-[20px] bg-[#f3f8f8]'></div>
              <div className='w-[335px] h-[160.5px] flex-grow-0 flex flex-col justify-start items-stretch gap-[11px] p-[15px] rounded-[20px] bg-[#f3f8f8]'></div>
              <div className='w-[335px] h-[160.5px] flex-grow-0 flex flex-col justify-start items-stretch gap-[11px] p-[15px] rounded-[20px] bg-[#f3f8f8]'></div>
              <div className='w-[335px] h-[160.5px] flex-grow-0 flex flex-col justify-start items-stretch gap-[11px] p-[15px] rounded-[20px] bg-[#f3f8f8]'></div>

            </div>
            <span className='w-[145px] h-[17px] flex-grow-0 font-[PlusJakartaSans] text-[16px] font-medium [font-stretch:normal] not-italic leading-[1.04] tracking-[normal] text-center text-[#5f90ef]'>
              Read more reviews
            </span>

          </div>
        </div>
      </div>

      <div className="w-full relative  overflow-hidden">
        <div className=" w-[90%] max-w-[1200px] mx-auto ">
        <div className='h-[186.1px] self-stretch flex-grow-0 flex flex-col justify-start items-center gap-[22px] p-[30px] rounded-[25px] bg-[#e5e6ff]'></div>
        </div>
      </div>

      <div className="w-full relative  overflow-hidden">
        <div className=" w-[90%] max-w-[1200px] mx-auto mt-[65px] mb-[50px]">
        <div className='h-[219px] self-stretch flex-grow-0 flex flex-col justify-center items-center gap-[41px] px-[0] py-[30px] rounded-[25px] bg-[#242546]'></div>
        </div>
      </div>











    </div>
  );
}
