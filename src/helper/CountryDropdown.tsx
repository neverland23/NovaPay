"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

type Option = {
  label: string;
  flag: string;
};

const CountryDropdown: React.FC = () => {
  const options: Option[] = [
    { label: "USD", flag: "/assets/images/flag/iceland.png" },
    { label: "BAN", flag: "/assets/images/flag/bangladesh.png" },
    { label: "CHA", flag: "/assets/images/flag/china.png" },
    { label: "JAP", flag: "/assets/images/flag/japan.png" },
    { label: "PRANCE", flag: "/assets/images/flag/prance.png" },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<Option>(options[0]);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  // ✅ Toggle dropdown safely
  const toggleDropdown = () => setIsOpen((prev) => !prev);

  const handleSelect = (option: Option) => {
    setSelected(option);
    setIsOpen(false);
  };

  // ✅ React-safe outside click handler
  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    // ✅ Attach only when open
    window.addEventListener("mousedown", handleClickOutside);
    return () => window.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  return (
    <div className='select-dropdown-wrapper tw-ms-2 tw-ml-2' ref={dropdownRef}>
      <button
        type='button'
        onClick={toggleDropdown}
        className='select-button d-flex align-items-center tw-gap-105 position-absolute top-0 tw-end-0 top-50 translate-middle-y tw-me-4'
      >
        <span className='select-dropdown__flag mb-1'>
          <Image
            width={28}
            height={20}
            src={selected.flag}
            alt='Flag'
            className='tw-w-4 tw-h-3'
          />
        </span>
        <span className='select-button__text tw-text-sm fw-normal text-dark-500 text-uppercase fw-semibold'>
          {selected.label}
        </span>
        <span
          className='select-button__arrow tw-text-xs text-white-83 tw-leading-none tw-duration-200'
          style={{
            transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
          }}
        >
          <i className='ph-bold ph-caret-down' />
        </span>
      </button>
      <ul
        className={`select-dropdown bg-white tw-p-2 tw-rounded-md position-absolute top-100 tw-end-0 tw-z-99 min-w-max tw-mt-2 tw-duration-200 tw-max-h-400-px overflow-y-auto shadow ${
          isOpen ? "" : "invisible opacity-0"
        }`}
      >
        {options.map((option) => (
          <li
            key={option.label}
            className='select-dropdown__item d-flex align-items-center tw-gap-205 tw-py-1 tw-px-205 tw-rounded tw-duration-200 hover-bg-neutral-10 w-100'
            onClick={() => handleSelect(option)}
          >
            <span className='select-dropdown__flag'>
              <Image
                width={28}
                height={20}
                src={option.flag}
                alt='Flag'
                className='tw-w-4 tw-h-3'
              />
            </span>
            <span className='select-dropdown__text text-capitalize tw-text-sm text-neutral-600 fw-semibold'>
              {option.label}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CountryDropdown;
