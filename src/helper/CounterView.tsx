"use client";

import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

interface CounterViewProps {
  start: number;
  end: number;
  title?: string;
}

const CounterView: React.FC<CounterViewProps> = ({ start, end, title }) => {
  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: true, // ensures animation runs only once
  });

  return (
    <span ref={ref}>
      {inView && (
        <>
          <CountUp delay={0} start={start} end={end} />
          {title && <span>{title}</span>}
        </>
      )}
    </span>
  );
};

export default CounterView;
