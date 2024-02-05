import React from "react";

import { Img, Text } from "components";

const Footer = (props) => {
  return (
    <>
      <footer className={props.className}>
        <div className="flex md:flex-col flex-row md:gap-5 items-center justify-center mb-[116px] ml-[143px] mr-[137px] mt-16 w-[79%]">
          <Img
            className="h-[146px] sm:h-auto object-cover w-[47%] md:w-full"
            src="images/img_logoecesi.png"
            alt="logoecesi"
          />
          <div className="flex flex-col gap-[11px] items-start justify-start md:ml-[0] ml-[67px]">
            <Text
              className="capitalize text-white-A700 text-xl"
              size="txtPlusJakartaSansRomanBold20"
            >
              About
            </Text>
            <Text
              className="leading-[120.00%] text-sm text-white-A700"
              size="txtPlusJakartaSansMedium14"
            >
              <>
                The Eastasouth Conference on Environmental and Sustainability
                Issues is an international conference organized by the
                Eastasouth Institute. The event serves as a platform for
                experts, academics, researchers, and practitioners in the field
                of environment and sustainability to present and discuss
                innovative solutions and current challenges related to
                environmental issues.
                <br />
                The conference focuses on discussing environmental issues
                involving aspects such as climate change, natural resource
                conservation, waste management, biodiversity, renewable energy,
                and sustainability policies. Participants will gain a deep
                understanding of the complexity of these issues and various
                applicable solutions to achieve environmental sustainability.
                <br />
                By bringing together leading thinkers, experienced researchers,
                and proficient practitioners, the conference provides a platform
                for the presentation of the latest research, workshops, and
                panel discussions aimed at advancing understanding and
                collaboration in the field of environment and sustainability.
                Through the Eastasouth Conference on Environmental and
                Sustainability Issues, participants can network with fellow
                professionals, share insights, and foster collaborations to
                address global environmental challenges.
              </>
            </Text>
          </div>
          <div className="flex flex-col gap-[11px] items-center justify-start md:ml-[0] ml-[68px] w-[17%] md:w-full">
            <Text
              className="capitalize text-white-A700 text-xl"
              size="txtPlusJakartaSansRomanBold20"
            >
              More Information
            </Text>
            <div className="flex flex-row gap-[15px] items-center justify-start w-full">
              <Img
                className="h-[26px] w-[26px]"
                src="images/img_call.svg"
                alt="call_One"
              />
              <Text
                className="capitalize leading-[120.00%] text-lg text-white-A700"
                size="txtPoppinsSemiBold18"
              >
                <span className="text-white-A700 font-poppins text-left text-base font-medium">
                  <>
                    Maresta:
                    <br />
                  </>
                </span>
                <span className="text-white-A700 font-poppins text-left font-semibold">
                  0821
                </span>
                <span className="text-white-A700 font-poppins text-left font-semibold">
                  {" "}
                </span>
                <span className="text-white-A700 font-poppins text-left font-semibold">
                  2121
                </span>
                <span className="text-white-A700 font-poppins text-left font-semibold">
                  {" "}
                </span>
                <span className="text-white-A700 font-poppins text-left font-semibold">
                  4028
                </span>
              </Text>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

Footer.defaultProps = {};

export default Footer;
