import React, { useState } from 'react'
import { buyInfo, rentInfo } from '../../../Data/Placeholder';

const RentTabs = ({ setPurpose, setRentFrequency, setShowRent, setCompletionStatus, purpose }) => {
  const [toggleRent, setToggleRent] = useState(1);
  const [seletedItem, setSelectedItem] = useState('');
  const [selectedRentItem, setSelectedRentitem] = useState('');


  const toggleTab = (index, purposeInfo) => {
    setToggleRent(index);
    setPurpose(purposeInfo);
  };
  console.log(purpose)

  const getActiveClass = (index, className) =>
    toggleRent === index ? className : "";


  //handle rent  item clicked
  const handleBuyItemClicked = (buyItem) => {
    seletedItem == buyItem.id ? setSelectedItem('') : setSelectedItem(buyItem.id)
    setCompletionStatus(buyItem.btnText);
  }

  //handle rent item clicked
  const handleRentItemClicked = (rentItem) => {
    console.log('clicked')
    selectedRentItem == rentItem.id ? setSelectedRentitem('') : setSelectedRentitem(rentItem.id)
    setRentFrequency(rentItem.btnText);
  }


  //handle rent reset
  const handleRentReset = () => {
    setSelectedItem('');
    setSelectedRentitem('');

  }

  //handle rent close
  const handleRentClose = () => {
    setShowRent(false);
  }

  return (
    <div className='p-2'>
      <h3 className="text-lg font-semibold text-dark pb-3 text-left">Purpose</h3>
      <ul className="tab-list">
        <li
          className={`tabs ${getActiveClass(1, "active-tabs")}`}
          onClick={() => toggleTab(1, "Buy")}
        >
          Buy
        </li>
        <li
          className={`tabs ${getActiveClass(2, "active-tabs")}`}
          onClick={() => toggleTab(2, "Rent")}
        >
          Rent
        </li>

      </ul>
      <div className="content-container">
        <h3 className="text-lg font-semibold text-dark py-3 text-left">Completion Status</h3>
        <div className={`content ${getActiveClass(1, "active-content")}`}>

          <ul className='text-left'>
            {
              buyInfo.map((rnInfo) => (
                <li
                  key={rnInfo.id}
                  className="inline-block m-[6px]"
                  onClick={() => handleBuyItemClicked(rnInfo)}
                >
                  <a className={`px-4 py-2  rounded-full text-sm inline-block ${seletedItem == rnInfo.id ? "bg-[#e9f7f0] text-[#28b16d] border border-[#28b16d]" : "border border-[#dbdbdb]"} `}>{rnInfo.btnText}</a>
                </li>
              ))
            }
          </ul>
        </div>
        <div className={`content ${getActiveClass(2, "active-content")}`}>
          <ul className='text-left'>
            {
              rentInfo.map((rntInfo) => (
                <li
                  key={rntInfo.id}
                  onClick={() => handleRentItemClicked(rntInfo)}
                  className="inline-block m-[6px]"><a className={`px-4 py-2  rounded-full text-sm inline-block ${selectedRentItem == rntInfo.id ? "bg-[#e9f7f0] text-[#28b16d] border border-[#28b16d]" : "border border-[#dbdbdb]"} `}

                  >{rntInfo.btnText}</a></li>
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
          onClick={handleRentReset}
        >
          Reset
        </a>
        <a
          className="py-2 mr-3 cursor-pointer inline-block px-8 uppercase text-sm text-[#fff] rounded-lg bg-[#191919] hover:bg-[#006169]"
          onClick={handleRentClose}
        >
          Close
        </a>
      </div>
    </div>
  )
}

export default RentTabs