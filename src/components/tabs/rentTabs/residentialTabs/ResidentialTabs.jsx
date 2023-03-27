import React, { useState } from 'react'
import { commercialLeftInfo, commercialRighttInfo, residentialLeftInfo, residentialRightInfo } from '../../../../Data/Placeholder';

const ResidentialTabs = ({setResidentialInfo,setCommercialInfo,setShowResidential}) => {
    const [toggleResidential, settoggleResidential] = useState(1);

    //residential state
    const [selectedResiItem,setSelectedResiItem]=useState('');
    const [selectedRightItem,setSelectedRightItem]=useState('');

   
    //commercial state
    const [selectedComLeft,setSelectedComLeft]=useState('');
    const [selectedComRight,setSelectedComRight]=useState('');



    const toggleResidentialTab = (index) => {
        settoggleResidential(index);
    };
  
    const getActiveClass = (index, className) =>
    toggleResidential === index ? className : "";

    //get the residentia data
    const handleResidential = (resiItem) =>{
        if(selectedRightItem){
            setSelectedRightItem('');
        }
        selectedResiItem == resiItem.id ? setSelectedResiItem('') : setSelectedResiItem(resiItem.id)
        setResidentialInfo(resiItem.btnText);
        setShowResidential(false);
    }

    //get residential  right data
    const handleResidentialRight = (rightItem) =>{
        setSelectedResiItem('');
        selectedRightItem == rightItem.id ? setSelectedRightItem('') : setSelectedRightItem(rightItem.id)
        setResidentialInfo(rightItem.btnText);
        setShowResidential(false);
    }


    //get the commmercial left data
    const handleCommercialLeft = (leftItem) => {
        if(selectedComRight){
            setSelectedComRight('');
        }
       
        selectedComLeft == leftItem.id ? setSelectedComLeft('') : setSelectedComLeft(leftItem.id)
        setCommercialInfo(leftItem.btnText);
        setShowResidential(false);
    }

    //get the commercial right data
    const handleComRight = (rightItem) => {
        if(selectedComLeft){
            setSelectedComLeft('');
        }
       
        selectedComRight == rightItem.id ? setSelectedComRight('') : setSelectedComRight(rightItem.id)
        setCommercialInfo(rightItem.btnText);
        setShowResidential(false);
    }
    //console.log(residentialInfo)
   // console.log(commercialInfo)
   

   //handle residential reset

   const handleResidentialreset= () => {
    setResidentialInfo('');
    setCommercialInfo('');
    setShowResidential(false);
   }

   //handle residential closed
   const handleResidentialClose = () =>{
    setShowResidential(false);
   }
  
  return (
    <div className='p-2'>
    
     <ul className="tab-list ">
        <li
        className={`tabs ${getActiveClass(1, "active-tabs")}`}
        onClick={() => toggleResidentialTab(1)}
        >
        Residential
        </li>
        <li
        className={`tabs ${getActiveClass(2, "active-tabs")}`}
        onClick={() => toggleResidentialTab(2)}
        >
        Commercial
        </li>
    
  </ul>
  <div className="content-container mt-5">
  
    <div className={`content ${getActiveClass(1, "active-content")}`}>
<div className="flex justify-center">
<ul className='mr-3'>
        {
            residentialLeftInfo.map((rslInfo)=>(
                <li 
                onClick={() => handleResidential(rslInfo)}
                key={rslInfo.id} 
                className="block mb-[9px]"
                ><a className={`text-center cursor-pointer px-4 w-full md:w-[187px] inline-block text-[14px] py-2 border border-[#dbdbdb] rounded-full ${selectedResiItem == rslInfo.id ? "bg-[#e9f7f0] text-[#28b16d] border border-[#28b16d]":"border border-[#dbdbdb]" }`}>{rslInfo.btnText}</a></li>
            ))
        }
     </ul>
     <ul className=''>
        {
            residentialRightInfo.map((rsrInfo)=>(
                <li 
                key={rsrInfo.id} 
                className="block mb-[9px] "
                onClick={() => handleResidentialRight(rsrInfo)}
                ><a className={`text-center cursor-pointer px-4 w-full md:w-[187px] inline-block text-[14px] py-2 border border-[#dbdbdb] rounded-full ${selectedRightItem == rsrInfo.id ? "bg-[#e9f7f0] text-[#28b16d] border border-[#28b16d]":"border border-[#dbdbdb]" }`}>{rsrInfo.btnText}</a></li>
            ))
        }
     </ul>
</div>
    
    </div>
    <div className={`content ${getActiveClass(2, "active-content")}`}>
        <div className="flex justify-center">

        </div>
    <ul className='text-left mr-3'>
        {
            commercialLeftInfo.map((comlInfo)=>(
                <li 
                key={comlInfo.id} 
                className="block mb-[9px]"
                onClick={() => handleCommercialLeft(comlInfo)}
                ><a className={`cursor-pointer px-4 w-full md:w-[187px] inline-block text-[14px] py-2 border border-[#dbdbdb] rounded-full ${selectedComLeft == comlInfo.id ? "bg-[#e9f7f0] text-[#28b16d] border border-[#28b16d]":"border border-[#dbdbdb]" }`}>{comlInfo.btnText}</a></li>
            ))
        }
     </ul>
     <ul className='text-left'>
        {
            commercialRighttInfo.map((comrInfo)=>(
                <li 
                key={comrInfo.id} 
                className="block mb-[9px]"
                onClick={() => handleComRight(comrInfo)}
                ><a className={`cursor-pointer px-4 w-full md:w-[187px] inline-block text-[14px] py-2 border border-[#dbdbdb] rounded-full ${selectedComRight == comrInfo.id ? "bg-[#e9f7f0] text-[#28b16d] border border-[#28b16d]":"border border-[#dbdbdb]" }`}>{comrInfo.btnText}</a></li>
            ))
        }
     </ul>      

    </div>
    <div className={`content ${getActiveClass(3, "active-content")}`}>
      <h2>Dolor</h2>
    </div>
  </div>

  <div className="text-left pt-2">
  
   
  <a 
  className="py-2 mr-3 cursor-pointer inline-block px-8 uppercase text-sm text-[#006169] border border-[#006169] rounded-lg bg-[#fff] "
  onClick={handleResidentialreset}
  >
        Reset
    </a>
    <a 
    className="py-2 mr-3 cursor-pointer inline-block px-8 uppercase text-sm text-[#fff] rounded-lg bg-[#191919] hover:bg-[#006169]"
    onClick={handleResidentialClose}
    >
        Close
    </a>
  </div>
</div>
  )
}

export default ResidentialTabs