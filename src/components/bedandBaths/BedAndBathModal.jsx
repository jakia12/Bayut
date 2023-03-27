import React, { useState } from 'react'
import { bathInfo, bathsInfo, bedsInfo } from '../../Data/Placeholder'

const BedAndBathModal = ({ bedInfo, setBedInfo, bathInfo, setBathInfo, setShowbeds }) => {

  const [selectedBed, setSelectedBed] = useState('');
  const [selectedBath, setSelectedBath] = useState('');

  //handle bed selected
  const handleBeditem = (bedItem) => {
    //   if(selectedComLeft){
    //     setSelectedComLeft('');
    // }

    selectedBed == bedItem.id ? setSelectedBed('') : setSelectedBed(bedItem.id)
    setBedInfo(bedItem.btnTxt);
  }

  //handle bath selected
  const handleBathItem = (bathInfo) => {
    selectedBath == bathInfo.id ? setSelectedBath('') : setSelectedBath(bathInfo.id)
    setBathInfo(bathInfo.btnTxt);
  }

  //handlre bed and bath reset
  const handleBedBathReset = () => {
    setSelectedBed('');
    setSelectedBath('');
    setBedInfo('');
    setBathInfo('');
  }

  //handre bed and bath dropdown closed
  const handleBedBathClosed = () => {
    setShowbeds(false);
  }
  console.log(bedInfo, bathInfo)
  return (
    <div className='bg-[#fff]'>
      <h3 className="text-lg font-semibold text-dark py-3 text-left my-1">Beds</h3>

      <ul className="text-left">
        {
          bedsInfo.map((bdInfo) => (
            <li
              key={bdInfo.id}
              className=" mb-[9px] inline-block mr-3"><a className={`rounded-full inline-block cursor-pointer px-5  text-[14px] py-1.5 border ${selectedBed == bdInfo.id ? "bg-[#e9f7f0] text-[#28b16d] border border-[#28b16d]" : "border border-[#dbdbdb]"} border-[#dbdbdb]  `}
                onClick={() => handleBeditem(bdInfo)}
              >{bdInfo.btnTxt}</a></li>
          ))
        }
      </ul>
      <h3 className="text-lg font-semibold text-dark py-3 text-left my-1">Baths</h3>
      <ul className="text-left">
        {
          bathsInfo.map((bthInfo) => (
            <li
              key={bthInfo.id}
              className="inline-block mb-[9px] mr-3"
              onClick={() => handleBathItem(bthInfo)}
            ><a className={`rounded-full inline-block cursor-pointer px-5  text-[14px] py-1.5 border ${selectedBath == bthInfo.id ? "bg-[#e9f7f0] text-[#28b16d] border border-[#28b16d]" : "border border-[#dbdbdb]"} border-[#dbdbdb]  `}>{bthInfo.btnTxt}</a></li>
          ))
        }
      </ul>

      {/* both button group */}


      <div className="text-left pt-4">
        <a
          className="py-2 cursor-pointer inline-block mr-3 px-8 uppercase text-sm text-[#006169] border border-[#006169] rounded-lg bg-[#fff] "
          onClick={handleBedBathReset}
        >
          Reset
        </a>
        <a className="py-2 cursor-pointer inline-block mr-3 px-8 uppercase text-sm text-[#fff] rounded-lg bg-[#191919] hover:bg-[#006169]"
          onClick={handleBedBathClosed}
        >
          Close
        </a>
      </div>
    </div>
  )
}

export default BedAndBathModal