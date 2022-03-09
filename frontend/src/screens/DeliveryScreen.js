import { useState,useRef } from "react";
import emailjs from '@emailjs/browser';
import "./DeliveryScreen.scss";

export default function DeliveryScreen()
{
const form = useRef();
  const [message, setMessage] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();
        emailjs.sendForm('service_l80o2zq', 'template_2ovmozw', form.current, '1ANCPJQw80Fs6qrIy')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          setMessage(true);
          form.current.reset();
      }
      
return (
<div class="wrapper">
    <h2>Make an order</h2>
    <form ref={form} onSubmit={sendEmail}>
      <div class="input-box">
        <input type="text" placeholder="Enter your name" required name="name"/>
      </div>
      <div class="input-box">
        <input type="text" placeholder="Phone Contact and email" required name="email"/>
      </div>
      <div class="input-box">
        <input type="text" placeholder="GPS-Address/Location" required name="location"></input>
        </div>
      <div class="input-box">
        <input type="text" placeholder="Recipients Name" required name="namer"/>
      </div>
      <div class="input-box">
        <input type="text" placeholder="Recipients Phone Contact and Email" required name="emailr"/>
      </div>
      <div class="input-box">
        <input type="text" placeholder="GPS-Address/Recipients Location" required name="locationr"/>
      </div>
      <div class="input-box">
        <input type="text" placeholder="Description and Quantity of Item " required name="descr"/>
      </div>
      <div class="input-box button">
        <input type="submit" value="Order Now" />
      </div>
      {message && <span><p className="spar">Order Successfully Made, Contact you soon.</p></span>}
    </form>
  </div>
)
}
