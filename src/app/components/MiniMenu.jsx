import React from "react"

const MiniMenu = ({toMap}) => {
  return (
    <><div className="flex flex-wrap lg:flex-nowrap justify-center">

      {toMap.map((data, index) => {
          let divider = true;   
          if(index === toMap.length-1) {
              divider = false;
            }
            return(
                <div key={index} className={`flex flex-wrap lg:flex-nowrap max-w-[190px]`}>
                <a href="" className="content-center text-[20px] font-semibold text-center leading-6">{data}</a>
                {divider ? (
                    <>
                  <div className="w-[3px] py-4 px-[1rem] content-evenly lg:block hidden">
                      <div className="bg-4plight-grey w-full min-w-[3px] min-h-[6rem] ">
                      </div>
                  </div>
                  <div className="w-full py-4 content-evenly lg:hidden block">
                      <div className="bg-4plight-grey w-full min-h-[2px] rounded-xl">
                      </div>
                  </div>
                  </>
                  
                ) : ('')
            }
            </div>
            )
        })
    }
    </div>
    </>
  )
};

export default MiniMenu;
