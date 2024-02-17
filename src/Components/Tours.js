import React from 'react'
import Title from './Title';
import { toursData } from '../data';
import Tour from './Tour';


const Tours = () => {
  return (
    <section className="section" id="tours">
      <Title title="featured" subTitle="tours" />
      <div className="section-center featured-center">
        {toursData.map((tdata) => {
          return <Tour {...tdata} key={tdata.id} />;
        })}
      </div>
    </section>
  );
}

export default Tours