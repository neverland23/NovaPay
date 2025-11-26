"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const Preloader: React.FC = () => {
  const [active, setActive] = useState<boolean>(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setActive(false);
    }, 500);

    // cleanup
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {active ? (
        <div className='preloder'>
          <div className='position-relative tw-w-76-px tw-h-76-px d-flex justify-content-center align-items-center'>
            <Image
              width={64}
              height={64}
              src='/assets/images/icon/preloder-img1.png'
              alt='Img'
              className='tw-w-8'
            />
            <div className='preloder__exchange__img w-100 h-100'>
              <Image
                width={128}
                height={128}
                src='/assets/images/icon/preloder-img2.png'
                alt='Img'
                className='w-100 h-100 animation-rotation'
              />
            </div>
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </>
  );
};

export default Preloader;
