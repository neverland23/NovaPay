"use client";

import dynamic from "next/dynamic";

const Popup = dynamic(() => import("reactjs-popup"), { ssr: false });
const PopupVideoOne: React.FC = () => {
  return (
    <Popup
      trigger={
        <span className='play-button bg-light-animation tw-w-13 tw-h-13 d-inline-flex justify-content-center align-items-center bg-white text-base-two-600 hover-text-base-two-600 rounded-circle tw-text-xl position-absolute tw-start-50 tw--translate-middle top-50 z-1'>
          <i className='ph-fill ph-play' />
        </span>
      }
      modal
    >
      <div>
        <iframe
          width='560'
          height='315'
          src='https://www.youtube.com/embed/_qZI6i21jB4?si=B3DKJleTi_2wA48l'
          title='YouTube video player'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
          referrerPolicy='strict-origin-when-cross-origin'
          allowFullScreen
        ></iframe>
      </div>
    </Popup>
  );
};

export default PopupVideoOne;
