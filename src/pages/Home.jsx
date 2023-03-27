import React, { useEffect, useRef, useState } from 'react'
import bgImg from '../images/bg.jpg';
import { AiFillCaretUp, AiFillCaretDown, AiOutlineCloseCircle } from 'react-icons/ai';
import { IoLocationSharp } from 'react-icons/io';
import RentTabs from '../components/tabs/rentTabs/RentTabs';
import ResidentialTabs from '../components/tabs/rentTabs/residentialTabs/ResidentialTabs';
import BedAndBathModal from '../components/bedandBaths/BedAndBathModal';
import { areaMaxValues, areaMinValues, locations } from '../Data/Placeholder';
import FindModal from '../components/findModal/FindModal';
import SectionTxt from '../components/sectionTxt/SectionTxt';


const Home = () => {

  //store location state
  const [locationData, setLocationData] = useState('');
  const [locationsFiltered, setLocationsFiltered] = useState([]);
  const [inputvalues, setInputvalues] = useState([]);
  const [isValueDisPlayed, setIsValueDisplayed] = useState(false);
  //const [is]=useState(false);

  //store all the rent data to the state
  const [completionStatus, setCompletionStatus] = useState('');
  const [rentFrequency, setRentFrequency] = useState('');

  // all residential info
  const [residentialInfo, setResidentialInfo] = useState('');
  const [commercialInfo, setCommercialInfo] = useState('');

  //bed and bath state
  const [bedInfo, setBedInfo] = useState('');
  const [bathInfo, setBathInfo] = useState('');

  //to display rent tab
  const [showRent, setShowRent] = useState(false);

  //save purpose or rent
  const [purpose, setPurpose] = useState('');

  //to display residential modal
  const [showResidential, setShowResidential] = useState(false);

  //to display beds and baths
  const [showBeds, setShowbeds] = useState(false);

  //to display area dropdown
  const [showArea, setShowArea] = useState(false);
  const [showAreaDropDown, setShowAreaDropDown] = useState(false);


  //to display price dropdown
  const [showPrice, setShowPrice] = useState(false);
  const [priceMinVal, setPriceMinVal] = useState('');
  const [priceMaxVal, setPriceMaxVal] = useState('');

  //open find Modal
  const [openModal, setOpenModal] = useState(false);

  //dom reference
  const wrapper = useRef();

  //const wrapperResident = useRef();

  //show rent dropdown on toggle
  const handleShow = () => {
    console.log('clicked')
    //setShowRent(true);
    showRent === true ? setShowRent(false) : setShowRent(true);
  }
  //show beds on click
  const handleOpenBeds = () => {
    showBeds === true ? setShowbeds(false) : setShowbeds(true);
  }
  const handleOpenResidential = () => {
    showResidential === true ? setShowResidential(false) : setShowResidential(true);
  }

  //handle open showArea on click
  const handleOpenArea = () => {
    console.log('clicked')
    showArea === true ? setShowArea(false) : setShowArea(true);
  }

  //handle open showPrice on Click
  const handleOpenPrice = () => {
    showPrice === true ? setShowPrice(false) : setShowPrice(true);
  }
  //hide the modal on click



  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    }


  }, []);

  // useEffect(()=>{
  //   document.addEventListener("mousedown", handleResidentClick);

  // return ()=>{
  //   document.removeEventListener("mousedown", handleResidentClick);
  // }

  // },[])

  const handleClickOutside = (event) => {
    if (
      wrapper.current &&
      !wrapper.current.contains(event.target)
    ) {

      setShowResidential(false);

    }
  };

  // const handleResidentClick = (event)=>{
  //   if (
  //     wrapperResident.current &&
  //     !wrapperResident.current.contains(event.target)
  //   ) {

  //     setShowResidential(false);

  //   }
  // }

  const handleLocationChange = (e) => {
    setLocationData(e.target.value);
  }

  //get selected button




  useEffect(() => {
    //filter the location data 

    const filteredLocations = locations.filter((lction) => lction.location.toLowerCase().includes(locationData.toLowerCase()));
    setLocationsFiltered(filteredLocations);
  }, [locationData, locationsFiltered]);


  //handle input values
  const handleInputValues = (lctItem) => {
    setIsValueDisplayed(true);
    setInputvalues([...inputvalues, lctItem]);
    setLocationData('');
  }

  //delete the input value
  const handleInputDelete = (inpValItem) => {
    const deletedvalues = inputvalues.filter((lct) => lct.id !== inpValItem.id);
    setInputvalues(deletedvalues);
  }

  //display area min drow down
  const handleArMinVal = () => {
    setShowAreaDropDown(true);
  }

  const [arMinVal, setArMinVal] = useState('');
  const [showArDropRight, setShowArDropRight] = useState(false);
  const [armaxRightVal, setArMaxRightVal] = useState('');

  //save area min values in a state
  const handleSelectedMinVal = (item) => {
    setArMinVal(item.value);
    setShowAreaDropDown(false);
  }


  //display area max value
  const handleArmaxVal = () => {
    setShowArDropRight(true);
  }

  //save area max value in a state

  const handleSelectedArRightMaxVal = (rightitem) => {
    setArMaxRightVal(rightitem.value)
    setShowArDropRight(false);
  }

  //handle ar value reset
  const handleReset = () => {
    setArMinVal('');
    setArMaxRightVal('');
  }

  //handle ar drop down closed
  const handleArDropClosed = () => {

    setShowArea(false);
  }

  //display value min dropdown

  const handlePriceMinVal = () => {
    setShowAreaDropDown(true);
  }
  //display price max val
  const handlePriceMaxVal = () => {
    setShowArDropRight(true);
  }
  //save price min value data
  const handleSelectedPriceMinVal = (item) => {
    setPriceMinVal(item.value);
    setShowAreaDropDown(false);
  }

  const handleSelectedPriceMaxVal = (item) => {
    setPriceMaxVal(item.value);
    setShowArDropRight(false);
  }


  //handle reset price value
  const handleResetPrice = () => {
    setPriceMinVal('');
    setPriceMaxVal('');
  }

  //close price dropdown
  const handlePriceDropClosed = () => {
    setShowPrice(false);
  }

  return (
    <>
      <section className="py-14 relative" style={{
        background: `url(${bgImg})`,
        backgroundPosition: 'center center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: 90 + "vh"
      }}>
        <div className="container px-6 w-full max-auto md:max-w-3xl">

          <div className="md:flex md:items-center md:justify-center w-full md:h-[90vh] ">
            <div className="p-4 bg-[#000000bd] rounded-lg">
              <form action="" className='w-full px-2 md:px-0 md:max-w-3xl'>
                {/* form first row */}
                <div className="md:flex items-center">
                  <div className="w-full md:w-[16rem] bg-[#fff] p-[8px] rounded-lg relative cursor-pointer">

                    <div
                      className="flex items-center justify-between bg-white cursor-pointer "
                      onClick={handleShow}
                    >
                      <span className='text-white text-dark text-sm'>Rent</span>
                      <span className='text-sm'>

                        {
                          showRent ?
                            <AiFillCaretDown /> : <AiFillCaretUp />
                        }
                      </span>


                    </div>
                    <div
                      className="absolute top-12 z-10 left-0 w-full md:w-[24.2rem] p-5 rounded shadow-lg shadow-gray-300 bg-[#fff] "
                      style={{ display: showRent === true ? "block" : "none" }}>
                      <RentTabs
                        completionStatus={completionStatus}
                        setCompletionStatus={setCompletionStatus}
                        rentFrequency={rentFrequency}
                        setRentFrequency={setRentFrequency}
                        setShowRent={setShowRent}
                        setPurpose={setPurpose}
                        use={purpose}
                      />
                    </div>
                  </div>
                  <div className="w-full relative md:mx-3 bg-[#fff] rounded-lg my-3 md:my-0">
                    {inputvalues.length > 0 ?
                      (<div className={`bg-[#fff] ${isValueDisPlayed ? "p-2 rounded-lg flex items-center" : "hidden"}`}>
                        {
                          inputvalues?.map((inpVal) => (
                            <>
                              <button className="text-dark flex items-center justify-between  text-sm rounded-lg w-fit  px-[8px] py-[7px] bg-[#dbdbdba9] mr-2">
                                <span >{inpVal.location} </span>
                                <span
                                  className='ml-1 text-lg'
                                  onClick={() => handleInputDelete(inpVal)}
                                ><AiOutlineCloseCircle /></span>
                              </button>

                            </>

                          ))
                        }

                      </div>)
                      :
                      ''
                    }

                    <input
                      type="text"
                      value={locationData}
                      onChange={handleLocationChange}
                      className="placeholder-[#191919] location_input bg-[#fff]  text-dark text-sm rounded-lg  block w-full px-[15px] py-[8px]" placeholder="Enter Location" required />


                    <div
                      className="absolute top-auto z-10 left-0 w-full p-5 rounded shadow-lg shadow-gray-300 bg-[#fff] overflow-hidden mt-3"
                      style={{ display: locationData ? "block" : "none" }}>
                      <div className=" w-full">
                        <ul>
                          {
                            locationsFiltered.map((lct) => (
                              <li
                                className='p-2 mb-2 bg-[#dbdbdb94] rounded-md text-sm font-medium text-dark no_border block'
                                onClick={() => handleInputValues(lct)}
                              >{lct.location}</li>

                            ))
                          }
                          <li></li>
                        </ul>
                      </div>

                    </div>
                  </div>
                  <div ref={wrapper} className="">
                    <div className="w-full md:w-[16rem] bg-[#fff] p-[8px] rounded-lg relative cursor-pointer mb-3 md:mb-0">
                      <div

                        className="flex items-center justify-between bg-white"
                        onClick={handleOpenResidential}
                      >

                        <span className='text-white text-dark text-sm'>{residentialInfo ? residentialInfo : commercialInfo ? commercialInfo : "Residential"}</span>
                        <span className='text-sm'>

                          {
                            showResidential ?
                              <AiFillCaretDown /> : <AiFillCaretUp />
                          }
                        </span>
                      </div>
                      <div
                        className="absolute top-12 z-10 left-0 md:right-0 w-full md:w-[28rem] p-5 rounded shadow-lg shadow-gray-300 bg-[#fff] "
                        style={{ display: showResidential === true ? "block" : "none" }}>
                        <ResidentialTabs
                          residentialInfo={residentialInfo}
                          setResidentialInfo={setResidentialInfo}
                          commercialInfo={commercialInfo}
                          setCommercialInfo={setCommercialInfo}
                          setShowResidential={setShowResidential}
                        // setShowResidential={setShowResidential}
                        />
                      </div>
                    </div>
                  </div>

                </div>
                {/* form second row  */}

                {/* beds and baths */}
                <div className="md:flex items-center md:mt-4">
                  <div className="w-full md:w-[16rem] bg-[#fff] p-[8px] rounded-lg relative cursor-pointer mb-3 md:mb-0">

                    <div
                      onClick={handleOpenBeds}
                      className="flex items-center justify-between bg-white">
                      <span className='text-white text-dark text-sm'>{bedInfo || bathInfo ? `${bedInfo ? `${bedInfo}bed` : ""} ${bathInfo ? `${bathInfo}bath` : ""}` : "Beds&Baths"}</span>
                      <span className='text-sm'>

                        {
                          showBeds ?
                            <AiFillCaretDown /> : <AiFillCaretUp />
                        }
                      </span>
                    </div>
                    {/* beds and baths dropdown */}
                    <div
                      className="absolute top-12 z-10 left-0 w-full md:w-[25rem] p-5 rounded shadow-lg shadow-gray-300 bg-[#fff] "
                      style={{ display: showBeds === true ? "block" : "none" }}>
                      <BedAndBathModal
                        bedInfo={bedInfo}
                        setBedInfo={setBedInfo}
                        setBathInfo={setBathInfo}
                        bathInfo={bathInfo}
                        setShowbeds={setShowbeds}
                      />
                    </div>
                  </div>

                  <div className="w-full relative md:mx-3">
                    <div className="md:flex items-center">
                      <div className="w-full md:w-[13rem] bg-[#fff] p-[8px] rounded-lg mr-4 relative cursor-pointer md:mb-0 mb-3">

                        <div
                          onClick={handleOpenArea}
                          className="flex items-center justify-between bg-white">
                          <span className='text-white text-dark text-sm'>
                            {arMinVal || armaxRightVal ? `${arMinVal}-${armaxRightVal}` : " Area(Sqft))"
                            }</span>
                          <span className='text-sm'>

                            {
                              showArea ?
                                <AiFillCaretDown /> : <AiFillCaretUp />
                            }
                          </span>
                        </div>
                        {/* area dropdown */}
                        <div
                          className="absolute top-12 z-10 left-0 w-full md:w-[26rem] p-3 rounded shadow-lg shadow-gray-300 bg-[#fff] "
                          style={{ display: showArea === true ? "block" : "none" }}>
                          <div className="p-3">
                            <div className="flex items-center mb-4">
                              <div className="mr-3">
                                <h3 className="text-sm font-semibold text-dark my-2">Minimum sqft</h3>
                                <div className="w-full md:w-[11rem] relative">
                                  <input
                                    type="text"
                                    name="" id=""
                                    className='input_focus rounded-lg bg-[#fff] border border-[#dbdbdb] px-3 py-2.5 w-full ' placeholder='0'
                                    value={arMinVal ? arMinVal : ""}
                                    onFocus={handleArMinVal}
                                  />

                                  <div className={`absolute top-auto left-0 w-full p-2 mt-[15px] shadow-lg shadow-gray-200 rounded-lg bg-[#fff] ${showAreaDropDown === true ? "block" : "hidden"}`}>
                                    <ul>

                                      {areaMinValues.map((minVal) => (
                                        <li
                                          key={minVal.id}
                                          className='p-2 mb-2 bg-[#dbdbdb94] text-sm font-medium text-dark no_border block cursor-pointer'
                                          onClick={() => handleSelectedMinVal(minVal)}
                                        > {minVal.value}</li>
                                      ))}
                                    </ul>
                                  </div>
                                </div>
                              </div>
                              <div className="">
                                <h3 className="text-sm font-semibold text-dark my-2">Maximum sqft</h3>
                                <div className="w-full md:w-[11rem] relative">
                                  <input
                                    type="text"
                                    name="" id=""
                                    placeholder='Any'
                                    className='input_focus rounded-lg bg-[#fff] border border-[#dbdbdb] px-3 py-2.5 w-full '
                                    value={armaxRightVal ? armaxRightVal : ""}
                                    onFocus={handleArmaxVal}
                                  />
                                  <div className={`absolute top-auto left-0 w-full p-2 mt-[15px] shadow-lg shadow-gray-200 rounded-lg bg-[#fff] ${showArDropRight === true ? "block" : "hidden"}`}>
                                    <ul>

                                      {areaMaxValues.map((maxVal) => (
                                        <li
                                          key={maxVal.id}
                                          className='p-2 mb-2 bg-[#dbdbdb94] text-sm font-medium text-dark no_border block cursor-pointer'
                                          onClick={() => handleSelectedArRightMaxVal(maxVal)}
                                        > {maxVal.value}</li>
                                      ))}
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="text-left pt-2">
                              <a
                                className="py-2 inline-block cursor-pointer  mr-3 px-8 uppercase text-sm text-[#006169] border border-[#006169] rounded-lg bg-[#fff] "
                                onClick={handleReset}
                              >

                                Reset
                              </a>
                              <a
                                className="py-2 inline-block cursor-pointer mr-3 px-8 uppercase text-sm text-[#fff] rounded-lg bg-[#191919] hover:bg-[#1111 ]"
                                onClick={handleArDropClosed}
                              >
                                Close
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="w-full md:w-[13rem] bg-[#fff] p-[8px] rounded-lg relative cursor-pointer md:mb-0 mb-3">

                        <div

                          className="flex items-center justify-between bg-white"
                          onClick={handleOpenPrice}
                        >
                          <span className='text-white text-dark text-sm'>
                            {priceMinVal || priceMaxVal ? `${priceMinVal}-${priceMaxVal}` : "Price(AED)"}
                          </span>
                          <span className='text-sm'>

                            {
                              showPrice ?
                                <AiFillCaretDown /> : <AiFillCaretUp />
                            }
                          </span>
                        </div>

                        {/* price dropdown */}
                        <div
                          className="absolute top-12 z-10 left-0 w-full md:w-[26rem] p-3 rounded shadow-lg shadow-gray-300 bg-[#fff] "
                          style={{ display: showPrice === true ? "block" : "none" }}>
                          <div className="p-3">
                            <div className="flex items-center mb-4">
                              <div className="mr-3">
                                <h3 className="text-sm font-semibold text-dark my-2">Minimum sqft</h3>
                                <div className="w-full md:w-[11rem] relative">
                                  <input
                                    type="text"
                                    name="" id=""
                                    className='input_focus rounded-lg bg-[#fff] border border-[#dbdbdb] px-3 py-2.5 w-full ' placeholder='0'
                                    value={priceMinVal ? priceMinVal : ""}
                                    onFocus={handlePriceMinVal}
                                  />

                                  <div className={`absolute top-auto left-0 w-full p-2 mt-[15px] shadow-lg shadow-gray-200 rounded-lg bg-[#fff] ${showAreaDropDown === true ? "block" : "hidden"}`}>
                                    <ul>

                                      {areaMinValues.map((minVal) => (
                                        <li
                                          key={minVal.id}
                                          className='p-2 mb-2 bg-[#dbdbdb94] text-sm font-medium text-dark no_border block cursor-pointer'
                                          onClick={() => handleSelectedPriceMinVal(minVal)}
                                        > {minVal.value}</li>
                                      ))}
                                    </ul>
                                  </div>
                                </div>
                              </div>
                              <div className="">
                                <h3 className="text-sm font-semibold text-dark my-2">Maximum sqft</h3>
                                <div className="w-full md:w-[11rem] relative">
                                  <input
                                    type="text"
                                    name="" id=""
                                    placeholder='Any'
                                    className='input_focus rounded-lg bg-[#fff] border border-[#dbdbdb] px-3 py-2.5 w-full '
                                    value={priceMaxVal ? priceMaxVal : ""}
                                    onFocus={handlePriceMaxVal}
                                  />
                                  <div className={`absolute top-auto left-0 w-full p-2 mt-[15px] shadow-lg shadow-gray-200 rounded-lg bg-[#fff] ${showArDropRight === true ? "block" : "hidden"}`}>
                                    <ul>

                                      {areaMaxValues.map((maxVal) => (
                                        <li
                                          key={maxVal.id}
                                          className='p-2 mb-2 bg-[#dbdbdb94] text-sm font-medium text-dark no_border block cursor-pointer'
                                          onClick={() => handleSelectedPriceMaxVal(maxVal)}
                                        > {maxVal.value}</li>
                                      ))}
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="text-left pt-2">
                              <a
                                className="py-2 inline-block cursor-pointer  mr-3 px-8 uppercase text-sm text-[#006169] border border-[#006169] rounded-lg bg-[#fff] "
                                onClick={handleResetPrice}
                              >

                                Reset
                              </a>
                              <a
                                className="py-2 inline-block cursor-pointer mr-3 px-8 uppercase text-sm text-[#fff] rounded-lg bg-[#191919] hover:bg-[#1111 ]"
                                onClick={handlePriceDropClosed}
                              >
                                Close
                              </a>
                            </div>
                          </div>
                        </div>

                      </div>
                    </div>

                  </div>
                  <div
                    className="w-full md:w-[16rem] bg-[#28b16d] text-[#fff] hover:bg-[#22965d] p-[8px] rounded-lg cursor-pointer text-center"
                    onClick={() => setOpenModal(true)}
                  >
                    <a
                      className=''

                    >Find</a>

                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        {/* find modal */}
        <FindModal
          setOpenModal={setOpenModal}
          openModal={openModal}
          purpose={purpose}
          completionStatus={completionStatus}
          rentFrequency={rentFrequency}
          residentialInfo={residentialInfo}
          commercialInfo={commercialInfo}
          bedInfo={bedInfo}
          bathInfo={bathInfo}
          armaxRightVal={armaxRightVal}
          arMinVal={arMinVal}
          priceMinVal={priceMinVal}
          priceMaxVal={priceMaxVal}
          inputvalues={inputvalues}
          setPurpose={setPurpose}
          setCompletionStatus={setCompletionStatus}
          setRentFrequency={setRentFrequency}
          setResidentialInfo={setResidentialInfo}
          setCommercialInfo={setCommercialInfo}
          setBedInfo={setBedInfo}
          setBathInfo={setBathInfo}
          setArMaxRightVal={setArMaxRightVal}
          setArMinVal={setArMinVal}
          setPriceMinVal={setPriceMinVal}
          setPriceMaxVal={setPriceMaxVal}
          setInputvalues={setInputvalues}

        />
      </section>

      {/* section text dummy */}
      <section className="py-14 px-10">
        <SectionTxt />
      </section>

    </>

  )
}

export default Home