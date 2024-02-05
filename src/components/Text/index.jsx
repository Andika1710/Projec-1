import React from "react";

const sizeClasses = {
  txtRobotoSlabRegular24: "font-normal font-robotoslab",
  txtPlusJakartaSansBold36Black900: "font-bold font-plusjakartasans",
  txtPoppinsSemiBold72: "font-poppins font-semibold",
  txtPoppinsSemiBold30: "font-poppins font-semibold",
  txtPlusJakartaSansSemiBold20: "font-plusjakartasans font-semibold",
  txtPlusJakartaSansMedium20: "font-medium font-plusjakartasans",
  txtRobotoSlabBold60: "font-bold font-robotoslab",
  txtPlusJakartaSansSemiBold24: "font-plusjakartasans font-semibold",
  txtInterMedium30: "font-inter font-medium",
  txtPlusJakartaSansBold36: "font-bold font-plusjakartasans",
  txtPlusJakartaSansMedium16Black900: "font-medium font-plusjakartasans",
  txtPoppinsMedium18: "font-medium font-poppins",
  txtPoppinsSemiBold18: "font-poppins font-semibold",
  txtPlusJakartaSansBold36WhiteA700: "font-bold font-plusjakartasans",
  txtPlusJakartaSansSemiBold30: "font-plusjakartasans font-semibold",
  txtPlusJakartaSansMedium18: "font-medium font-plusjakartasans",
  txtPlusJakartaSansMedium16: "font-medium font-plusjakartasans",
  txtPlusJakartaSansRomanBold20: "font-bold font-plusjakartasans",
  txtPlusJakartaSansMedium14: "font-medium font-plusjakartasans",
  txtPoppinsSemiBold24: "font-poppins font-semibold",
  txtInterMedium30Black900: "font-inter font-medium",
  txtPlusJakartaSansSemiBold18: "font-plusjakartasans font-semibold",
  txtPlusJakartaSansBold24Black900: "font-bold font-plusjakartasans",
  txtPlusJakartaSansBold24: "font-bold font-plusjakartasans",
  txtPlusJakartaSansExtraBold36: "font-extrabold font-plusjakartasans",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
