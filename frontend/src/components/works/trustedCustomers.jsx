import React from "react";
import "./trustedCustomers.scss";
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import customers from "./customers.js"
export default function TrustedCustomers() {
  
  return (<div>
    <span><p  className="centre">Trusted Customers</p></span>
    <Carousel autoPlay={true} showThumbs={false} interval={1500} infiniteLoop={true}>
      {customers.map(customer => (<div  key={customer.key}  class="crn">

<p className="te">{customer.name}</p>
<p className="te">{customer.description}</p>
<p className="te">{customer.location}</p>
<img src={customer.img} alt={customer.name}></img>
      </div>))}
    </Carousel>
    </div>
  );
}
