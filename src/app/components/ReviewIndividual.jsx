import React from "react"

const ReviewIndividual = ({slide, heightMod}) => {
  return (
    <>
        <div className={`p-4 border-[1px] h-fit divpath lg:min-h-[274px] lg:max-w-[387px] w-full lg:min-w-[387px] max-w-[400px] min-h-[30vh]`}>
          <div className='flex items-center'>
              <div>
                  <p className='py-2 lg:leading-[22px]'>{slide.review}</p>
              </div>
           </div>
        </div>
        <p className='font-bold lg:text-[18px] text-xl text-4pblue mt-[-40px] pb-[25px]'>{slide.title}</p>
    </>
  )
};

export default ReviewIndividual;
