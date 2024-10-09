"use client"
import { useState } from 'react';
import Image from 'next/image';

export default function Accordion ({ title, content }) {
  const [isOpen, setIsOpen ] = useState(false);

  function toggleAccordion() {
    setIsOpen(!isOpen);
  }
  return (
    <div className="p-4 border-b">
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-semibold">{title}</h2>
        <button onClick={toggleAccordion} className="rounded-md w-10 h-10 flex items-center justify-center p-2">
          {isOpen ? <Image src="icon-minus.svg" width={20} height={20} /> : <Image src="icon-plus.svg" width={20} height={20} />}
        </button>
      </div>

      {isOpen && (
        <div className="p-4 bg-gray-100 mt-2">
          <p>{content}</p>
        </div>
      )}
    </div>
  );
}