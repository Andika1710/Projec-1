import React from "react";

import { Button, Img, Line, List, Text } from "components";
import Footer from "components/Footer";

const DESKTOPECESIOnePage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-plusjakartasans items-center justify-start mx-auto w-full">
        <div className="bg-green-800 flex flex-col items-center justify-start p-[15px] w-full">
          <Img
            className="h-[60px] md:h-auto object-cover w-[13%]"
            src="images/img_logoecesiw1.png"
            alt="logoecesiwOne"
          />
        </div>
        <div className="flex flex-col items-center justify-start w-full">
          <div className="h-[678px] md:h-[889px] md:px-5 relative w-full">
            <Img
              className="h-[678px] m-auto object-cover w-full"
              src="images/img_4.png"
              alt="Four"
            />
            <div className="absolute bg-teal-900_16 flex flex-col h-full inset-[0] items-center justify-center m-auto p-[19px] w-full">
              <div className="flex flex-col md:gap-10 gap-[84px] items-center justify-start mb-[120px] w-[88%] md:w-full">
                <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-[87%] md:w-full">
                  <Text
                    className="capitalize text-green-800 text-lg"
                    size="txtPlusJakartaSansSemiBold18"
                  >
                    call for paper
                  </Text>
                  <Text
                    className="capitalize ml-8 md:ml-[0] text-green-800 text-lg"
                    size="txtPlusJakartaSansSemiBold18"
                  >
                    paper submission
                  </Text>
                  <Text
                    className="capitalize md:ml-[0] ml-[33px] text-green-800 text-lg"
                    size="txtPlusJakartaSansSemiBold18"
                  >
                    important dates{" "}
                  </Text>
                  <Text
                    className="capitalize ml-8 md:ml-[0] text-green-800 text-lg"
                    size="txtPlusJakartaSansSemiBold18"
                  >
                    registration
                  </Text>
                  <Text
                    className="capitalize ml-8 md:ml-[0] text-green-800 text-lg"
                    size="txtPlusJakartaSansSemiBold18"
                  >
                    speakers
                  </Text>
                  <Text
                    className="capitalize ml-8 md:ml-[0] text-green-800 text-lg"
                    size="txtPlusJakartaSansSemiBold18"
                  >
                    comittees
                  </Text>
                  <Text
                    className="capitalize ml-8 md:ml-[0] text-green-800 text-lg"
                    size="txtPlusJakartaSansSemiBold18"
                  >
                    about{" "}
                  </Text>
                </div>
                <Img
                  className="h-[410px] md:h-auto object-cover w-full"
                  src="images/img_logocoverecesi.png"
                  alt="logocoverecesi"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-green-800 flex md:flex-col flex-row md:gap-5 items-center justify-start p-[31px] sm:px-5 w-full">
          <div className="flex md:flex-1 flex-row gap-5 items-start justify-center md:ml-[0] ml-[133px] md:px-5 w-1/4 md:w-full">
            <Img
              className="h-20 mt-2.5"
              src="images/img_trophy.svg"
              alt="trophy"
            />
            <div className="md:h-[109px] h-[116px] relative w-[72%]">
              <div className="absolute bottom-[0] flex flex-row gap-2.5 inset-x-[0] items-center justify-start mx-auto w-full">
                <Text
                  className="capitalize md:text-5xl text-7xl text-white-A700"
                  size="txtPoppinsSemiBold72"
                >
                  21{" "}
                </Text>
                <Text
                  className="capitalize leading-[100.00%] text-3xl sm:text-[26px] md:text-[28px] text-white-A700"
                  size="txtPlusJakartaSansSemiBold30"
                >
                  <>
                    October <br />
                    2023
                  </>
                </Text>
              </div>
              <Text
                className="absolute capitalize left-[0] text-white-A700 text-xl top-[0]"
                size="txtPlusJakartaSansSemiBold20"
              >
                jakarta, Indonesia
              </Text>
            </div>
          </div>
          <Line className="bg-white-A700 md:h-0.5 h-[130px] md:ml-[0] ml-[81px] w-0.5 md:w-full" />
          <div className="flex md:flex-1 sm:flex-col flex-row font-robotoslab gap-14 items-center justify-center md:ml-[0] ml-[79px] md:px-5 w-[41%] md:w-full">
            <div className="flex flex-col items-center justify-start">
              <Text
                className="md:text-5xl text-6xl text-center text-white-A700 uppercase"
                size="txtRobotoSlabBold60"
              >
                00
              </Text>
              <Text
                className="text-2xl md:text-[22px] text-center text-white-A700 sm:text-xl"
                size="txtRobotoSlabRegular24"
              >
                days
              </Text>
            </div>
            <div className="flex flex-col items-center justify-start">
              <Text
                className="md:text-5xl text-6xl text-center text-white-A700 uppercase"
                size="txtRobotoSlabBold60"
              >
                00
              </Text>
              <Text
                className="text-2xl md:text-[22px] text-center text-white-A700 sm:text-xl"
                size="txtRobotoSlabRegular24"
              >
                hours
              </Text>
            </div>
            <div className="flex flex-col items-center justify-start">
              <Text
                className="md:text-5xl text-6xl text-center text-white-A700 uppercase"
                size="txtRobotoSlabBold60"
              >
                00
              </Text>
              <Text
                className="text-2xl md:text-[22px] text-center text-white-A700 sm:text-xl"
                size="txtRobotoSlabRegular24"
              >
                minutes
              </Text>
            </div>
            <div className="flex flex-col items-center justify-start">
              <Text
                className="md:text-5xl text-6xl text-center text-white-A700 uppercase"
                size="txtRobotoSlabBold60"
              >
                00
              </Text>
              <Text
                className="text-2xl md:text-[22px] text-center text-white-A700 sm:text-xl"
                size="txtRobotoSlabRegular24"
              >
                seconds
              </Text>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-[53px] items-center justify-start max-w-[946px] mt-[63px] mx-auto md:px-5 w-full">
          <Text
            className="text-4xl sm:text-[32px] md:text-[34px] text-center text-green-800"
            size="txtPlusJakartaSansBold36"
          >
            CALL FOR PAPER
          </Text>
          <div className="bg-white-A700 flex flex-col items-center justify-start outline outline-[2px] outline-gray-100 p-[43px] md:px-10 sm:px-5 rounded-[24px] w-full">
            <div className="flex flex-col items-center justify-start w-[33%] md:w-full">
              <div className="flex flex-col font-inter items-center justify-start">
                <Text
                  className="text-3xl sm:text-[26px] md:text-[28px] text-center text-green-800"
                  size="txtInterMedium30"
                >
                  Scientific Research
                </Text>
              </div>
              <Text
                className="mt-[25px] text-black-900 text-lg"
                size="txtPlusJakartaSansMedium18"
              >
                {" "}
                Ecology and Natural Ecosystems
              </Text>
              <Text
                className="mt-[31px] text-black-900 text-lg"
                size="txtPlusJakartaSansMedium18"
              >
                Sustainable Urban Planning
              </Text>
            </div>
            <Text
              className="mt-[31px] text-black-900 text-lg"
              size="txtPlusJakartaSansMedium18"
            >
              Energy Efficiency and Waste Reduction
            </Text>
            <Text
              className="mt-[29px] text-black-900 text-lg"
              size="txtPlusJakartaSansMedium18"
            >
              Natural Resource Economics
            </Text>
            <Text
              className="mb-0.5 mt-8 text-black-900 text-lg"
              size="txtPlusJakartaSansMedium18"
            >
              Biodiversity Conservation
            </Text>
          </div>
        </div>
        <div className="flex md:flex-col flex-row md:gap-10 gap-[100px] items-center justify-center max-w-[946px] mt-[63px] mx-auto md:px-5 w-full">
          <div className="flex flex-col gap-[7px] items-center justify-start">
            <Text
              className="text-4xl sm:text-[32px] md:text-[34px] text-green-800"
              size="txtPlusJakartaSansBold36"
            >
              SUBMIT YOUR PAPER NOW!
            </Text>
            <Text
              className="leading-[120.00%] text-black-900 text-xl w-full"
              size="txtPlusJakartaSansMedium20"
            >
              Eastasouth Conference On Environmental and Sustainability Issues{" "}
            </Text>
          </div>
          <Button
            className="capitalize cursor-pointer font-bold min-w-[364px] text-2xl md:text-[22px] text-center sm:text-xl"
            shape="round"
            size="md"
          >
            Submit your paper here !
          </Button>
        </div>
        <div className="bg-green-800 flex flex-col items-center justify-end mt-16 p-14 md:px-10 sm:px-5 w-full">
          <div className="flex flex-col gap-[53px] items-center justify-start max-w-[946px] mt-1.5 mx-auto w-full">
            <Text
              className="text-4xl sm:text-[32px] md:text-[34px] text-center text-white-A700"
              size="txtPlusJakartaSansBold36WhiteA700"
            >
              IMPORTANT DATE
            </Text>
            <div className="flex flex-col gap-[17px] items-center justify-start w-full">
              <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between w-[86%] md:w-full">
                <Text
                  className="text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                  size="txtPlusJakartaSansSemiBold24"
                >
                  14 Augustus 2023
                </Text>
                <Text
                  className="text-2xl md:text-[22px] text-right text-white-A700 sm:text-xl"
                  size="txtPlusJakartaSansSemiBold24"
                >
                  Full Paper Submission
                </Text>
              </div>
              <div className="flex flex-col items-center justify-start w-full">
                <Line className="bg-white-A700 h-0.5 w-full" />
                <div className="flex sm:flex-col flex-row sm:gap-10 items-start justify-between mt-[19px] w-[86%] md:w-full">
                  <Text
                    className="sm:mt-0 mt-0.5 text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                    size="txtPlusJakartaSansSemiBold24"
                  >
                    15 September 2023
                  </Text>
                  <Text
                    className="mb-0.5 text-2xl md:text-[22px] text-right text-white-A700 sm:text-xl"
                    size="txtPlusJakartaSansSemiBold24"
                  >
                    Decision Notification
                  </Text>
                </div>
                <Line className="bg-white-A700 h-0.5 mt-[17px] w-full" />
                <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between mt-[21px] w-[86%] md:w-full">
                  <Text
                    className="text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                    size="txtPlusJakartaSansSemiBold24"
                  >
                    17 September 2023
                  </Text>
                  <Text
                    className="text-2xl md:text-[22px] text-right text-white-A700 sm:text-xl"
                    size="txtPlusJakartaSansSemiBold24"
                  >
                    Final Registration
                  </Text>
                </div>
                <Line className="bg-white-A700 h-0.5 mt-4 w-full" />
                <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between mt-[21px] w-[86%] md:w-full">
                  <Text
                    className="text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                    size="txtPlusJakartaSansSemiBold24"
                  >
                    23 September 2023
                  </Text>
                  <Text
                    className="text-2xl md:text-[22px] text-right text-white-A700 sm:text-xl"
                    size="txtPlusJakartaSansSemiBold24"
                  >
                    Camera ready
                  </Text>
                </div>
                <Line className="bg-white-A700 h-0.5 mt-4 w-full" />
                <div className="flex sm:flex-col flex-row sm:gap-10 items-start justify-between mt-[19px] w-[86%] md:w-full">
                  <Text
                    className="mb-0.5 text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                    size="txtPlusJakartaSansSemiBold24"
                  >
                    21 October 2023
                  </Text>
                  <Text
                    className="sm:mt-0 mt-0.5 text-2xl md:text-[22px] text-right text-white-A700 sm:text-xl"
                    size="txtPlusJakartaSansSemiBold24"
                  >
                    Conference Day
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-start max-w-[946px] mt-[63px] mx-auto md:px-5 w-full">
          <div className="flex flex-col items-center justify-start w-full">
            <Text
              className="text-4xl sm:text-[32px] md:text-[34px] text-center text-green-800"
              size="txtPlusJakartaSansBold36"
            >
              REGISTRATION
            </Text>
            <Text
              className="mt-[46px] text-3xl sm:text-[26px] md:text-[28px] text-black-900 text-center"
              size="txtInterMedium30Black900"
            >
              Indonesia
            </Text>
            <List
              className="sm:flex-col flex-row font-plusjakartasans gap-6 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center mt-[37px] w-full"
              orientation="horizontal"
            >
              <div className="bg-white-A700 border border-gray-100 border-solid flex flex-1 flex-col items-center justify-start p-[41px] md:px-10 sm:px-5 rounded-[24px] shadow-bs2 w-full">
                <Text
                  className="text-2xl md:text-[22px] text-center text-green-800 sm:text-xl"
                  size="txtPlusJakartaSansBold24"
                >
                  PRESENTER
                </Text>
                <Text
                  className="mt-[37px] text-2xl md:text-[22px] text-black-900 text-center sm:text-xl"
                  size="txtPlusJakartaSansBold24Black900"
                >
                  IDR 3.000.000
                </Text>
                <Text
                  className="mt-[17px] text-base text-blue_gray-300 text-center"
                  size="txtPlusJakartaSansMedium16"
                >
                  onsite & online
                </Text>
                <Button
                  className="cursor-pointer font-bold leading-[normal] mb-0.5 min-w-[209px] mt-11 text-2xl md:text-[22px] text-center sm:text-xl"
                  shape="round"
                >
                  pay
                </Button>
              </div>
              <div className="bg-white-A700 border border-gray-100 border-solid flex flex-1 flex-col items-center justify-start p-[41px] md:px-10 sm:px-5 rounded-[24px] shadow-bs2 w-full">
                <Text
                  className="text-2xl md:text-[22px] text-center text-green-800 sm:text-xl"
                  size="txtPlusJakartaSansBold24"
                >
                  AUDIENCE
                </Text>
                <Text
                  className="mt-[37px] text-2xl md:text-[22px] text-black-900 text-center sm:text-xl"
                  size="txtPlusJakartaSansBold24Black900"
                >
                  IDR 1.000.000
                </Text>
                <Text
                  className="mt-[18px] text-base text-blue_gray-300 text-center"
                  size="txtPlusJakartaSansMedium16"
                >
                  onsite
                </Text>
                <Button
                  className="cursor-pointer font-bold leading-[normal] mb-0.5 min-w-[209px] mt-11 text-2xl md:text-[22px] text-center sm:text-xl"
                  shape="round"
                >
                  pay
                </Button>
              </div>
              <div className="bg-white-A700 border border-gray-100 border-solid flex flex-1 flex-col items-center justify-start p-[41px] md:px-10 sm:px-5 rounded-[24px] shadow-bs2 w-full">
                <Text
                  className="text-2xl md:text-[22px] text-center text-green-800 sm:text-xl"
                  size="txtPlusJakartaSansBold24"
                >
                  AUDIENCE
                </Text>
                <Text
                  className="mt-[37px] text-2xl md:text-[22px] text-black-900 text-center sm:text-xl"
                  size="txtPlusJakartaSansBold24Black900"
                >
                  IDR 100.000
                </Text>
                <Text
                  className="mt-[17px] text-base text-blue_gray-300 text-center"
                  size="txtPlusJakartaSansMedium16"
                >
                  online
                </Text>
                <Button
                  className="cursor-pointer font-bold leading-[normal] mb-0.5 min-w-[209px] mt-11 text-2xl md:text-[22px] text-center sm:text-xl"
                  shape="round"
                >
                  pay
                </Button>
              </div>
            </List>
            <Text
              className="mt-[49px] text-3xl sm:text-[26px] md:text-[28px] text-black-900 text-center"
              size="txtInterMedium30Black900"
            >
              International
            </Text>
            <List
              className="sm:flex-col flex-row font-plusjakartasans gap-6 grid sm:grid-cols-1 grid-cols-2 justify-center mt-[37px] w-[64%]"
              orientation="horizontal"
            >
              <div className="bg-white-A700 border border-gray-100 border-solid flex flex-col items-center justify-start p-[41px] md:px-10 sm:px-5 rounded-[24px] shadow-bs2 w-full">
                <Text
                  className="text-2xl md:text-[22px] text-center text-green-800 sm:text-xl"
                  size="txtPlusJakartaSansBold24"
                >
                  PRESENTER
                </Text>
                <Text
                  className="mt-[37px] text-2xl md:text-[22px] text-black-900 text-center sm:text-xl"
                  size="txtPlusJakartaSansBold24Black900"
                >
                  USD 250
                </Text>
                <Text
                  className="mt-[17px] text-base text-blue_gray-300 text-center"
                  size="txtPlusJakartaSansMedium16"
                >
                  onsite & online
                </Text>
                <Button
                  className="cursor-pointer font-bold leading-[normal] mb-0.5 min-w-[203px] mt-11 text-2xl md:text-[22px] text-center sm:text-xl"
                  shape="round"
                >
                  pay
                </Button>
              </div>
              <div className="bg-white-A700 border border-gray-100 border-solid flex flex-col items-center justify-start p-[41px] md:px-10 sm:px-5 rounded-[24px] shadow-bs2 w-full">
                <Text
                  className="text-2xl md:text-[22px] text-center text-green-800 sm:text-xl"
                  size="txtPlusJakartaSansBold24"
                >
                  AUDIENCE
                </Text>
                <Text
                  className="mt-[37px] text-2xl md:text-[22px] text-black-900 text-center sm:text-xl"
                  size="txtPlusJakartaSansBold24Black900"
                >
                  USD 75
                </Text>
                <Text
                  className="mt-[18px] text-base text-blue_gray-300 text-center"
                  size="txtPlusJakartaSansMedium16"
                >
                  onsite
                </Text>
                <Button
                  className="cursor-pointer font-bold leading-[normal] mb-0.5 min-w-[203px] mt-11 text-2xl md:text-[22px] text-center sm:text-xl"
                  shape="round"
                >
                  pay
                </Button>
              </div>
            </List>
          </div>
        </div>
        <div className="flex flex-col mt-16 md:px-5 relative w-full">
          <div className="h-[400px] mx-auto w-full">
            <Img
              className="h-[400px] m-auto object-cover w-full"
              src="images/img_287.png"
              alt="TwoHundredEightySeven"
            />
            <div className="absolute bg-teal-800_cc flex flex-col h-full inset-[0] items-center justify-center m-auto p-[60px] md:px-10 sm:px-5 w-full">
              <Text
                className="mb-[232px] text-4xl sm:text-[32px] md:text-[34px] text-white-A700"
                size="txtPlusJakartaSansBold36WhiteA700"
              >
                SPEAKER
              </Text>
            </div>
          </div>
          <div className="font-poppins md:h-[275px] h-[522px] ml-auto mr-[236px] mt-[-244px] w-[29%] sm:w-full z-[1]">
            <div className="absolute bg-white-A700 border border-gray-100 border-solid flex flex-col h-max inset-[0] items-center justify-center m-auto p-[7px] rounded-[24px] shadow-bs2 w-full">
              <div className="flex flex-col gap-[7px] items-center justify-start mb-[21px] mt-[374px]">
                <Text
                  className="capitalize text-2xl md:text-[22px] text-center text-green-800 sm:text-xl"
                  size="txtPoppinsSemiBold24"
                >
                  Dr. (cd) Yusuf Iskandar, M.M.
                </Text>
                <Text
                  className="capitalize leading-[120.00%] text-center text-green-800 text-lg w-[87%] sm:w-full"
                  size="txtPoppinsMedium18"
                >
                  Management Program Study, Universitas Pembangunan Jaya,
                  Indonesia
                </Text>
              </div>
            </div>
            <div className="absolute flex h-[366px] inset-x-[0] justify-end mx-auto top-[0] w-[73%]">
              <div className="bg-green-800 h-[269px] mt-auto mx-auto rounded-[134px] w-[269px]"></div>
              <Img
                className="absolute h-[366px] inset-[0] justify-center m-auto object-cover w-full"
                src="images/img_photoyusuf1.png"
                alt="photoyusufOne"
              />
            </div>
          </div>
          <div className="bg-white-A700 border border-gray-100 border-solid flex flex-col font-poppins gap-5 items-center justify-start ml-60 mt-[-242px] p-[29px] sm:px-5 rounded-[24px] shadow-bs2 w-[29%] z-[1]">
            <div className="flex h-[335px] justify-end relative w-[87%]">
              <div className="bg-green-800 h-[269px] mt-auto mx-auto rounded-[134px] w-[269px]"></div>
              <Img
                className="absolute h-[335px] inset-[0] justify-center m-auto object-cover w-full"
                src="images/img_photojimmy1.png"
                alt="photojimmyOne"
              />
            </div>
            <div className="flex flex-col items-center justify-start mb-[38px]">
              <Text
                className="capitalize text-2xl md:text-[22px] text-center text-green-800 sm:text-xl"
                size="txtPoppinsSemiBold24"
              >
                Dr. Jimmy Maming{" "}
              </Text>
              <Text
                className="capitalize mt-[3px] text-center text-green-800 text-lg"
                size="txtPoppinsMedium18"
              >
                Malay College, the Philippines
              </Text>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-start mt-[94px] w-full">
          <div className="h-[550px] md:px-5 relative w-full">
            <Img
              className="h-[550px] m-auto object-cover w-full"
              src="images/img_untitleddesign.png"
              alt="untitleddesign"
            />
            <div className="absolute bg-teal-800_b2 flex flex-row h-full inset-[0] items-center justify-center m-auto p-16 md:px-10 sm:px-5 w-full">
              <div className="flex md:flex-col flex-row md:gap-10 gap-[67px] items-center justify-center ml-[116px] w-[73%]">
                <Img
                  className="h-[422px] md:h-auto object-cover rounded-[24px] w-[422px] sm:w-full"
                  src="images/img_maps.png"
                  alt="maps"
                />
                <div className="flex flex-col items-center justify-start w-[42%] md:w-full">
                  <div className="flex flex-col gap-6 items-start justify-start w-full">
                    <Text
                      className="text-4xl sm:text-[32px] md:text-[34px] text-white-A700"
                      size="txtPlusJakartaSansBold36WhiteA700"
                    >
                      VENUE
                    </Text>
                    <div className="flex flex-row font-poppins gap-5 items-start justify-start md:ml-[0] ml-[5px] w-[99%] md:w-full">
                      <Img
                        className="h-[42px]"
                        src="images/img_linkedin.svg"
                        alt="linkedin"
                      />
                      <Text
                        className="capitalize text-3xl sm:text-[26px] md:text-[28px] text-white-A700"
                        size="txtPoppinsSemiBold30"
                      >
                        jakarta, Indonesia
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer className="bg-green-800 flex items-center justify-center md:px-5 shadow-bs1 w-full" />
      </div>
    </>
  );
};

export default DESKTOPECESIOnePage;
