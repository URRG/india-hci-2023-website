import React from 'react';
import Lottie from 'lottie-web';
import animationData from '../../public/images/Lego.json';

const LoadingScreen = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };
  return (
    <div className="flex items-center justify-center h-screen bg-gray-900">
      <Lottie options={defaultOptions} height={200} width={200} />
    </div>
  );
};

export default LoadingScreen;