import React from 'react'
import Title from './Title';
import { servicesData } from '../data';
import Service from './Service';

const Services = () => {
  return (
    <section className="section services" id="services">
      <Title title="our" subTitle="servicess" />
      <div className="section-center services-center">
        {servicesData.map((data)=>{
          return (
           <Service data= {data} />
          )
        })}
      </div>
    </section>
  );
}

export default Services