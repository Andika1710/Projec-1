import React from "react";

import { Button, CheckBox, Img, Input, SelectBox, Text } from "components";
import Footer from "components/Footer";

const professionOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const languageTwoOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const presenterAudienceOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const onsiteOnlineOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const DESKTOPECESITwoPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-plusjakartasans items-center justify-start mx-auto w-full">
        <div className="flex flex-col items-center justify-start w-full">
          <div className="bg-green-800 flex flex-col items-center justify-start p-[15px] w-full">
            <Img
              className="h-[60px] md:h-auto object-cover w-[13%]"
              src="images/img_logoecesiw1.png"
              alt="logoecesiwOne"
            />
          </div>
          <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-center max-w-[946px] mt-[19px] mx-auto md:px-5 w-full">
            <Text
              className="capitalize text-green-800 text-lg"
              size="txtPlusJakartaSansSemiBold18"
            >
              call for paper
            </Text>
            <Text
              className="capitalize ml-8 sm:ml-[0] text-green-800 text-lg"
              size="txtPlusJakartaSansSemiBold18"
            >
              paper submission
            </Text>
            <Text
              className="capitalize sm:ml-[0] ml-[33px] text-green-800 text-lg"
              size="txtPlusJakartaSansSemiBold18"
            >
              important dates{" "}
            </Text>
            <Text
              className="capitalize ml-8 sm:ml-[0] text-green-800 text-lg"
              size="txtPlusJakartaSansSemiBold18"
            >
              registration
            </Text>
            <Text
              className="capitalize ml-8 sm:ml-[0] text-green-800 text-lg"
              size="txtPlusJakartaSansSemiBold18"
            >
              speakers
            </Text>
            <Text
              className="capitalize ml-8 sm:ml-[0] text-green-800 text-lg"
              size="txtPlusJakartaSansSemiBold18"
            >
              comittees
            </Text>
            <Text
              className="capitalize ml-8 sm:ml-[0] text-green-800 text-lg"
              size="txtPlusJakartaSansSemiBold18"
            >
              about{" "}
            </Text>
          </div>
          <Text
            className="mt-[71px] text-4xl sm:text-[32px] md:text-[34px] text-center text-green-800"
            size="txtPlusJakartaSansExtraBold36"
          >
            REGISTRATION
          </Text>
          <div className="bg-white-A700 flex flex-col gap-10 items-start justify-end max-w-[946px] mt-[45px] mx-auto outline outline-[1px] outline-indigo-50 p-12 md:px-5 rounded-[24px] w-full">
            <Text
              className="text-2xl md:text-[22px] text-green-800 sm:text-xl"
              size="txtPlusJakartaSansBold24"
            >
              Identity
            </Text>
            <Input
              name="groupTen"
              placeholder="Name"
              className="font-medium p-0 placeholder:text-blue_gray-300_01 text-left text-lg w-full"
              wrapClassName="flex w-full"
              type="text"
              suffix={
                <div className="ml-[35px] sm:w-full sm:mx-0 w-[3%] outline-blue_gray-300_01 outline-[1.5px] outline">
                  <Img
                    className="my-auto"
                    src="images/img_lock.svg"
                    alt="lock"
                  />
                </div>
              }
            ></Input>
            <Input
              name="groupNine"
              placeholder="Email"
              className="font-medium p-0 placeholder:text-blue_gray-300_01 text-left text-lg w-full"
              wrapClassName="flex w-full"
              type="email"
              suffix={
                <div className="mt-[3px] mb-px ml-[35px] sm:w-full sm:mx-0 w-[3%] bg-blue_gray-300_01">
                  <Img
                    className="my-auto"
                    src="images/img_lock_blue_gray_300_01.svg"
                    alt="lock"
                  />
                </div>
              }
            ></Input>
            <Input
              name="groupEight"
              placeholder="Phone"
              className="font-medium p-0 placeholder:text-blue_gray-300_01 text-left text-lg w-full"
              wrapClassName="flex w-full"
              type="number"
              suffix={
                <div className="h-[19px] ml-[35px] w-[19px] bg-blue_gray-300_01 my-px">
                  <Img
                    className="h-[19px] my-auto"
                    src="images/img_call_blue_gray_300_01.svg"
                    alt="call"
                  />
                </div>
              }
            ></Input>
            <Input
              name="groupSeven"
              placeholder="Country"
              className="font-medium p-0 placeholder:text-blue_gray-300_01 text-left text-lg w-full"
              wrapClassName="flex w-full"
              suffix={
                <div className="h-6 mb-px ml-[35px] w-6 bg-blue_gray-300_01">
                  <Img
                    className="h-6 my-auto"
                    src="images/img_globe.svg"
                    alt="globe"
                  />
                </div>
              }
            ></Input>
            <SelectBox
              className="font-medium text-left text-lg w-full"
              placeholderClassName="text-blue_gray-300_01"
              indicator={
                <Img
                  className="h-[7px] mr-[0] border-blue_gray-300_01 border-[3px] border-solid w-[18px]"
                  src="images/img_arrowdown.svg"
                  alt="arrow_down"
                />
              }
              isMulti={false}
              name="groupSix"
              options={professionOptionsList}
              isSearchable={false}
              placeholder="Profession"
              shape="round"
              color="blue_gray_300_01"
              variant="outline"
            />
            <Input
              name="groupFive"
              placeholder="Institution"
              className="font-medium p-0 placeholder:text-blue_gray-300_01 text-left text-lg w-full"
              wrapClassName="flex w-full"
              suffix={
                <div className="ml-[35px] sm:w-full sm:mx-0 w-[3%] outline-blue_gray-300_01 outline-[1px] outline">
                  <Img
                    className="my-auto"
                    src="images/img_menu.svg"
                    alt="menu"
                  />
                </div>
              }
            ></Input>
          </div>
          <div className="flex md:flex-col flex-row gap-6 items-center justify-center max-w-[946px] mt-6 mx-auto md:px-5 w-full">
            <div className="bg-white-A700 flex md:flex-1 flex-col gap-10 items-start justify-end outline outline-[1px] outline-indigo-50 p-12 md:px-10 sm:px-5 rounded-[24px] w-[52%] md:w-full">
              <Text
                className="text-2xl md:text-[22px] text-green-800 sm:text-xl"
                size="txtPlusJakartaSansBold24"
              >
                Category
              </Text>
              <SelectBox
                className="font-medium text-left text-lg w-full"
                placeholderClassName="text-blue_gray-300_01"
                indicator={
                  <Img
                    className="h-[7px] mr-[0] border-blue_gray-300_01 border-[3px] border-solid w-[18px]"
                    src="images/img_arrowdown.svg"
                    alt="arrow_down"
                  />
                }
                isMulti={false}
                name="language_Two"
                options={languageTwoOptionsList}
                isSearchable={false}
                placeholder="Indonesia / International "
                shape="round"
                color="blue_gray_300_01"
                variant="outline"
              />
              <SelectBox
                className="font-medium text-left text-lg w-full"
                placeholderClassName="text-blue_gray-300_01"
                indicator={
                  <Img
                    className="h-[7px] mr-[0] border-blue_gray-300_01 border-[3px] border-solid w-[18px]"
                    src="images/img_arrowdown.svg"
                    alt="arrow_down"
                  />
                }
                isMulti={false}
                name="group221"
                options={presenterAudienceOptionsList}
                isSearchable={false}
                placeholder="Presenter / Audience"
                shape="round"
                color="blue_gray_300_01"
                variant="outline"
              />
              <SelectBox
                className="font-medium text-left text-lg w-full"
                placeholderClassName="text-blue_gray-300_01"
                indicator={
                  <Img
                    className="h-[7px] mr-[0] border-blue_gray-300_01 border-[3px] border-solid w-[18px]"
                    src="images/img_arrowdown.svg"
                    alt="arrow_down"
                  />
                }
                isMulti={false}
                name="group222"
                options={onsiteOnlineOptionsList}
                isSearchable={false}
                placeholder="Onsite / Online"
                shape="round"
                color="blue_gray_300_01"
                variant="outline"
              />
            </div>
            <div className="bg-white-A700 flex md:flex-1 flex-col gap-7 items-center justify-center outline outline-[1px] outline-indigo-50 p-[38px] sm:px-5 rounded-[24px] w-[47%] md:w-full">
              <div className="flex flex-col items-start justify-start mt-[7px] w-[92%] md:w-full">
                <Text
                  className="text-2xl md:text-[22px] text-green-800 sm:text-xl"
                  size="txtPlusJakartaSansBold24"
                >
                  Price
                </Text>
                <Text
                  className="mt-[31px] text-4xl sm:text-[32px] md:text-[34px] text-black-900"
                  size="txtPlusJakartaSansBold36Black900"
                >
                  USD 250
                </Text>
                <CheckBox
                  className="font-medium leading-[150.00%] mt-[89px] text-base text-left"
                  inputClassName="h-5 mr-[5px] w-5"
                  name="sayamenyetujui"
                  id="sayamenyetujui"
                  label="Saya menyetujui Syarat dan Ketentuan dan Kebijakan Privasi yang berlaku"
                ></CheckBox>
              </div>
              <Button
                className="cursor-pointer font-bold mb-2.5 min-w-[360px] rounded-[30px] text-2xl md:text-[22px] text-center sm:text-xl"
                size="sm"
              >
                pay
              </Button>
            </div>
          </div>
          <Footer className="bg-green-800 flex items-center justify-center mt-14 md:px-5 shadow-bs1 w-full" />
        </div>
      </div>
    </>
  );
};

export default DESKTOPECESITwoPage;
