import React from 'react'

const ShotBy = (props) => {
  return (
    <div className="flex items-center gap-x-4 mb-4 ">
              <span className="font-regular inline-block font-dm text-base text-[#767676]">
                {" "}
                Sort by:
              </span>
              <select
                id="countries"
                class="focus:border-black-500 font-regular block md:w-[239px] w-[110px] border border-[#F0F0F0] bg-gray-50 p-1.5 font-dm text-sm text-base text-[#767676] "
              >
                <option selected className="font-regular font-dm text-base">
                  Featured
                </option>
                <option value="US" className="font-regular font-dm text-base">
                  United States
                </option>
                <option value="CA" className="font-regular font-dm text-base">
                  Canada
                </option>
                <option value="FR" className="font-regular font-dm text-base">
                  France
                </option>
                <option value="DE" className="font-regular font-dm text-base">
                  Germany
                </option>
              </select>
            </div>
  )
}

export default ShotBy