import React from 'react';
import Feature1DesktopImage from '@assets/images/salesPage/Sales-Page-Desktop-Image-1.png';
import Feature2DesktopImage from '@assets/images/salesPage/Sales-Page-Desktop-Image-2.png';
import Feature3DesktopImage from '@assets/images/salesPage/Sales-Page-Desktop-Image-3.png';
import Feature4DesktopImage from '@assets/images/salesPage/Sales-Page-Desktop-Image-4.png';
import Feature1MobileImage from '@assets/images/salesPage/Sales-Page-Mobile-Image-1.png';
import Feature2MobileImage from '@assets/images/salesPage/Sales-Page-Mobile-Image-2.png';
import Feature3MobileImage from '@assets/images/salesPage/Sales-Page-Mobile-Image-3.png';
import Feature4MobileImage from '@assets/images/salesPage/Sales-Page-Mobile-Image-4.png';

const FeatureCardImage = ({ name, deviceType, ...restProps }) => {
  switch (name) {
    case 'feature-1':
      return (
        <img
          src={
            deviceType === 'mobile' ? Feature1MobileImage : Feature1DesktopImage
          }
          {...restProps}
          alt="Feature-1"
        />
      );
    case 'feature-2':
      return (
        <img
          src={
            deviceType === 'mobile' ? Feature2MobileImage : Feature2DesktopImage
          }
          {...restProps}
          alt="Feature-2"
        />
      );
    case 'feature-3':
      return (
        <img
          src={
            deviceType === 'mobile' ? Feature3MobileImage : Feature3DesktopImage
          }
          {...restProps}
          alt="Feature-3"
        />
      );
    case 'feature-4':
      return (
        <img
          src={
            deviceType === 'mobile' ? Feature4MobileImage : Feature4DesktopImage
          }
          {...restProps}
          alt="Feature-4"
        />
      );
    default:
  }
};

export default FeatureCardImage;
