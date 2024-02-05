import React from "react";

import { Img, Text } from "components";
import Footer from "components/Footer";

const DESKTOPECESIPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-plusjakartasans items-center justify-start mx-auto w-full">
        <div className="h-[544px] sm:h-[771px] md:px-5 relative w-full">
          <div className="flex flex-col h-full items-center justify-start m-auto w-full">
            <Img
              className="h-[544px] sm:h-auto object-cover rounded-bl-[1032px] rounded-br-[1032px] w-full"
              src="images/img_4_544x1280.png"
              alt="Four"
            />
          </div>
          <div className="absolute h-[544px] sm:h-[771px] inset-[0] justify-center m-auto w-full">
            <Img
              className="h-[544px] m-auto object-cover w-full"
              src="images/img_ellipse38.png"
              alt="ellipseThirtyEight"
            />
            <div className="absolute bottom-[7%] flex flex-col inset-x-[0] items-center justify-start mx-auto w-[74%]">
              <div className="flex sm:flex-col flex-row sm:gap-10 items-start justify-between w-full">
                <Text
                  className="capitalize text-green-800 text-lg"
                  size="txtPlusJakartaSansSemiBold18"
                >
                  call for paper
                </Text>
                <Text
                  className="capitalize text-green-800 text-lg"
                  size="txtPlusJakartaSansSemiBold18"
                >
                  paper submission
                </Text>
                <Text
                  className="capitalize text-green-800 text-lg"
                  size="txtPlusJakartaSansSemiBold18"
                >
                  important dates{" "}
                </Text>
                <Text
                  className="capitalize text-green-800 text-lg"
                  size="txtPlusJakartaSansSemiBold18"
                >
                  registration
                </Text>
                <Text
                  className="capitalize text-green-800 text-lg"
                  size="txtPlusJakartaSansSemiBold18"
                >
                  speakers
                </Text>
                <Text
                  className="capitalize text-green-800 text-lg"
                  size="txtPlusJakartaSansSemiBold18"
                >
                  comittees
                </Text>
                <Text
                  className="capitalize text-green-800 text-lg"
                  size="txtPlusJakartaSansSemiBold18"
                >
                  about{" "}
                </Text>
              </div>
              <Text
                className="mt-[71px] text-4xl sm:text-[32px] md:text-[34px] text-center text-green-800"
                size="txtPlusJakartaSansExtraBold36"
              >
                ABOUT
              </Text>
              <Img
                className="h-[200px] sm:h-auto mt-[53px] object-cover w-[57%] md:w-full"
                src="images/img_logocoverecesi.png"
                alt="logocoverecesi"
              />
            </div>
            <div className="absolute bg-green-800 flex flex-col inset-x-[0] items-center justify-start mx-auto p-[15px] top-[0] w-full">
              <Img
                className="h-[60px] md:h-auto object-cover w-[13%]"
                src="images/img_logoecesiw1.png"
                alt="logoecesiwOne"
              />
            </div>
          </div>
        </div>
        <Text
          className="leading-[150.00%] mt-14 text-base text-black-900 text-justify"
          size="txtPlusJakartaSansMedium16Black900"
        >
          <>
            The Eastasouth Conference on Environmental and Sustainability Issues
            is an international conference organized by the Eastasouth
            Institute. The event serves as a platform for experts, academics,
            researchers, and practitioners in the field of environment and
            sustainability to present and discuss innovative solutions and
            current challenges related to environmental issues.
            <br />
            The conference focuses on discussing environmental issues involving
            aspects such as climate change, natural resource conservation, waste
            management, biodiversity, renewable energy, and sustainability
            policies. Participants will gain a deep understanding of the
            complexity of these issues and various applicable solutions to
            achieve environmental sustainability.
            <br />
            By bringing together leading thinkers, experienced researchers, and
            proficient practitioners, the conference provides a platform for the
            presentation of the latest research, workshops, and panel
            discussions aimed at advancing understanding and collaboration in
            the field of environment and sustainability. Through the Eastasouth
            Conference on Environmental and Sustainability Issues, participants
            can network with fellow professionals, share insights, and foster
            collaborations to address global environmental challenges.
          </>
        </Text>
        <Footer className="bg-green-800 flex items-center justify-center mt-28 md:px-5 shadow-bs1 w-full" />
      </div>
    </>
  );
};

export default DESKTOPECESIPage;
