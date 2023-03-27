import React from 'react'
import { AiOutlineCloseCircle } from 'react-icons/ai';

const FindModal = ({
    openModal,
    setOpenModal,
    purpose,
    completionStatus,
    rentFrequency,
    residentialInfo,
    commercialInfo,
    inputvalues,
    setInputvalues,
    bedInfo,
    bathInfo,
    armaxRightVal,
    arMinVal,
    priceMinVal,
    priceMaxVal,
    setPurpose,

    setCompletionStatus,
    setRentFrequency,
    setResidentialInfo,
    setCommercialInfo,
    setBedInfo,
    setBathInfo,
    setArMaxRightVal,
    setArMinVal,
    setPriceMinVal,
    setPriceMaxVal
}
) => {

    //close the modal and reset all info
    const handleClose = () => {
        setOpenModal(false);
        setPurpose('');
        setInputvalues([]);
        setCompletionStatus('');
        setRentFrequency('');
        setResidentialInfo(' ');
        setCommercialInfo('');
        setBedInfo('');
        setBathInfo('');
        setArMaxRightVal('');
        setArMinVal('');
        setPriceMinVal('');
        setPriceMaxVal('');
    }
    return (
        <div className={` ${openModal ? "flex items-center " : "hidden"}`}>
            <div className={openModal ? 'confirm show' : 'confirm'}>
                <div className="relative w-full h-full max-w-md md:h-auto">

                    <div className="relative bg-white rounded-lg shadow dark:bg-gray-700 pb-9">
                        <button type="button" className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" >

                            <span
                                onClick={() => setOpenModal(false)}
                                className="text-2xl text-dark"><AiOutlineCloseCircle /></span>
                        </button>

                        <div className="px-6 py-10 border-b rounded-t dark:border-gray-600">
                            <h3 className="text-base font-semibold text-gray-900 lg:text-xl dark:text-white">
                                All Search Data Info:-
                            </h3>
                        </div>

                        <div className="p-6 overflow-y-auto">
                            {/* rent info */}
                            <div className="mb-3 text-left">
                                <h3 className="text-lg font-semibold text-dark border-b border-gray-800">
                                    Rent Info
                                </h3>
                                <div className="flex items-center ">
                                    <span className="text-base font-medium text-dark">Purpose : </span>
                                    <span className="text-base text-gray-700 ml-2">{purpose ? purpose : "No data Available"}</span>
                                </div>
                                <div className="flex items-center ">
                                    <span className="text-base font-medium text-dark">Completion Status : </span>
                                    <span className="text-base text-gray-700 ml-2">{completionStatus ? completionStatus : "No data available"}</span>
                                </div>
                                <div className="flex items-center ">
                                    <span className="text-base font-medium text-dark">Rent Frequency : </span>
                                    <span className="text-base text-gray-700 ml-2">{rentFrequency ? rentFrequency : "No data available"}</span>
                                </div>
                            </div>
                            {/* locatins info */}
                            <div className="mb-3 text-left">
                                <h3 className="text-lg font-semibold text-dark border-b border-gray-800">
                                    Locations Info
                                </h3>
                                {
                                    inputvalues.length > 0 ?
                                        <ul className="flex items-center ">
                                            {
                                                inputvalues?.map((val) => (
                                                    <li className="text-base text-gray-700 ml-2 mr-2">{val?.location}</li>
                                                ))
                                            }


                                        </ul>
                                        : "No Data Available"
                                }

                            </div>
                            {/* Residential info */}
                            <div className="mb-3 text-left">
                                <h3 className="text-lg font-semibold text-dark border-b border-gray-800">
                                    Residential Info
                                </h3>

                                <div className="flex items-center ">
                                    <span className="text-base font-medium text-dark">Residentioal : </span>
                                    <span className="text-base text-gray-700 ml-2">{residentialInfo ? residentialInfo : ""}</span>
                                </div>
                                <div className="flex items-center ">
                                    <span className="text-base font-medium text-dark">Commercial Info : </span>
                                    <span className="text-base text-gray-700 ml-2">{commercialInfo ? commercialInfo : ""}</span>
                                </div>
                            </div>
                            {/* bed and baths info */}
                            <div className="mb-3 text-left">
                                <h3 className="text-lg font-semibold text-dark border-b border-gray-800">
                                    Beds and Baths Info
                                </h3>


                                <div className="flex items-center ">
                                    <span className="text-base font-medium text-dark">Beds : </span>
                                    <span className="text-base text-gray-700 ml-2">{bedInfo ? bedInfo : ""}</span>
                                </div>
                                <div className="flex items-center ">
                                    <span className="text-base font-medium text-dark">Baths : </span>
                                    <span className="text-base text-gray-700 ml-2">{bathInfo ? bathInfo : ""}</span>
                                </div>
                            </div>
                            {/* Area info */}
                            <div className="mb-3 text-left">
                                <h3 className="text-lg font-semibold text-dark border-b border-gray-800">
                                    Area Info
                                </h3>


                                <div className="flex items-center ">
                                    <span className="text-base font-medium text-dark">Minimum sqft :  </span>
                                    <span className="text-base text-gray-700 ml-2">{arMinVal ? arMinVal : ''}</span>
                                </div>
                                <div className="flex items-center ">
                                    <span className="text-base font-medium text-dark">Maximum sqft : </span>
                                    <span className="text-base text-gray-700 ml-2">{armaxRightVal ? armaxRightVal : ''}</span>
                                </div>
                            </div>

                            {/* Price info */}
                            <div className="mb-3 text-left">
                                <h3 className="text-lg font-semibold text-dark border-b border-gray-800">
                                    Price Info
                                </h3>


                                <div className="flex items-center ">
                                    <span className="text-base font-medium text-dark">Mininmun Sqft : </span>
                                    <span className="text-base text-gray-700 ml-2">{priceMinVal ? priceMinVal : ""}</span>
                                </div>
                                <div className="flex items-center ">
                                    <span className="text-base font-medium text-dark">Maxium sqft : </span>
                                    <span className="text-base text-gray-700 ml-2">{priceMaxVal ? priceMaxVal : ""}</span>
                                </div>
                            </div>
                        </div>
                        {/* close button */}
                        <div className="absolute bottom-5 right-6">
                            <button
                                className="py-2 5 px-8 text-base bg-[#111] font-normal text-[#fff] rounded-lg"
                                onClick={handleClose}
                            >Close</button>
                        </div>
                    </div>
                </div>
            </div>
            <div
                className="overlay"
                onClick={() => setOpenModal(false)}
            />
        </div>

    )
}

export default FindModal