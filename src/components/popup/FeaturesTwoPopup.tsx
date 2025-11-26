"use client";
import dynamic from "next/dynamic";

const Popup = dynamic(() => import("reactjs-popup"), { ssr: false });
const FeaturesTwoPopup: React.FC = () => {
  return (
    <Popup
      trigger={
        <button className='play-button bg-light-animation tw-w-80-px tw-h-80-px d-inline-flex justify-content-center align-items-center bg-white text-base-two-600 hover-text-base-two-600 rounded-circle tw-text-xl position-absolute tw-start-50 tw--translate-middle top-50 z-1'>
          <i className='ph-fill ph-play' />
        </button>
      }
      modal
    >
      <div>
        <iframe
          width='950'
          height='550'
          src='https://www.youtube.com/embed/_qZI6i21jB4?si=wIfHbzECyIGTfp6z'
          title='YouTube video player'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
          referrerPolicy='strict-origin-when-cross-origin'
          allowFullScreen
        ></iframe>
      </div>
    </Popup>
  );
};

export default FeaturesTwoPopup;
