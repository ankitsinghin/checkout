'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import Address from './components/Address';

import CheckOut from './components/CheckOut'
import MobileOverlay from './components/MobileOverlay';
import Multistep from './components/Multistep';
import Payment from './components/Payment';
import PageFour from './components/PageFour';
// import MobileOverlay from './components/MobileOverlay'

export default function Home() {
  // const [page, setPage] = useState("pageone");

  // const nextPage = (page) => {
  //   setPage(page);
  // };

  // const nextPageNumber = (pageNumber) => {
  //   switch (pageNumber) {
  //     case "1":
  //       setPage("pageone");
  //       break;
  //     case "2":
  //       setPage("pagetwo");
  //       break;
  //     case "3":
  //       setPage("pagethree");
  //       break;
  //     case "4":
  //       alert("Ooops! Seems like you did not fill the form.");
  //       break;
  //     default:
  //       setPage("1");
  //   }
  // };

  return (
    <div className="">

      <CheckOut />
      {/* <Multistep page={page} onPageNumberClick={nextPageNumber} />

      {
        {
          pagetwo: <Address onButtonClick={nextPage} />,
          pageone: <MobileOverlay onButtonClick={nextPage} />,
          
          pagethree: <Payment onButtonClick={nextPage} />,
          pagefour: <PageFour />,
        }[page]
      } */}
      <MobileOverlay />
    </div>
  )
}
