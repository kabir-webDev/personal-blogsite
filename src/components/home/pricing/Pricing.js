import React from "react";
import "./price.css";
import Back from './../../../common/header/Back/Back';
import PriceCard from './PriceCard';
import Faq from './Faq';

const Pricing = () => {
  return (
    <>
      <Back title='Choose The Right Plan' />
      <section className='price padding'>
        <div className='container grid'>
          <PriceCard />
        </div>
      </section>
      <Faq />
    </>
  )
}

export default Pricing