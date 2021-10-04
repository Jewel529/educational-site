import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import ServiceDetails from '../ServiceDetails/ServiceDetails';
import './Services.css'

const Services = () => {
    const [servicesDetail,setservicesDetail]=useState()

    useEffect(()=>{
        fetch('Services.JSON')
        .then(res=>res.json())
        .then(data=>setservicesDetail(data))
    },[])
    return (
        <div >
              <h1 className="text-center ">Our Services</h1>
              <div className="services-container">
              {
               servicesDetail?.map(service=><ServiceDetails

                serviceDetail={service}
                key={Math.random()}
                >


               </ServiceDetails>)
            }
              </div>

        </div>
    );
};

export default Services;