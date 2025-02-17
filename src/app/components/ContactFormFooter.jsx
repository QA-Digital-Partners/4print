'use client';

import React, { useRef, useState } from "react"
import emailjs from '@emailjs/browser';
import Button4P from "./Button";
import Image from "next/image";

const ContactFormFooter = (props) => {

    const servicesOptions = ['Commercial Vehicle Wrapping', 'Commercial Vehicle Lettering', 'Custom Car Wraps', 'Commercial Printing', 'Apparel', 'Stationery Printing']

    let formClass = false;
    const form = useRef();
    const phone = useRef();
    const [loading, setLoading] = useState(false);
    const statusRef = useRef(null);
    const pattern = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

    const [token, setToken] = useState("");
    const [refreshReCaptcha, setRefreshReCaptcha] = useState(false);

    const setTokenFunc = (getToken) => {
      setToken(getToken);
    };

    const handleChange = (phoneRef) => {
        const input = phoneRef.current;
        // Clear any old status
        input.setCustomValidity('');
      };

    const handleSubmit = (event, formRef, phoneRef, statusRef) => {
        event.preventDefault();

        const input = phoneRef.current;
        setLoading(true); // Mostrar loader

    // Clear any old status
    input.setCustomValidity('');

    // Check for invalid state(s)
    if (!pattern.test(input.value)) {
      input.setCustomValidity('Please enter a valid phone number');
      input.reportValidity();
    } else {
      input.setCustomValidity('');
      // Proceed with form submission if needed
      emailjs
      .sendForm('service_iyjzik5', '4print_temp', formRef.current, {
        publicKey: '25bO-dCc3QTCgWjyH',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          formRef.current.reset();
          formClass = true;
          statusRef.current.innerHTML = "Submition sent succesfully"
          setLoading(false); // Ocultar loader
        },
        (error) => {
          setRefreshReCaptcha(!refreshReCaptcha);
          console.log('FAILED...', error.text);
          formClass = false;
          statusRef.current.innerHTML = "There was an error. Please try again or call us!"
          setLoading(false); // Ocultar loader
        },
      );
    }
}

  return (
    <>
      <div className="container lh:mb-[100px] mb-16">
        <div className="bg-contact-form lg:px-32 px-8 pt-16 text-white rounded-lg pb-32">
            <h2 className="lg:text-[70px] lg:leading-[80px] text-[38px] leading-[45px] font-bold uppercase">Let's Start Your <span className="lg:text-[80px] leading-[62px] lg:leading-[80px] text-[65px] block">Project Today</span></h2>
            <p className="lg:w-[35rem] leading-[23px] py-4"> From design to installation, we're here to help your brand stand out on the road. Contact us now to discuss your vehicle wrapping needs or schedule a visit to our Glen Burnie facility.</p>
            <p className="font-bold text-[20px]">Serving Glen Burnie, and the entire DMV area with pride since 2021</p>
        </div>

        <div className="lg:mx-[78px] mx-8 bg-white rounded-lg border-[1px] border-4plight-grey flex flex-wrap lg:flex-nowrap relative mt-[-105px]">
            {loading && (
                <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-70">
                <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                </div>
            )}
            <div className="lg:w-[612px] p-8">
                <form className="pt-3 custom-form" ref={form} onSubmit={(e) => handleSubmit(e, form, phone, statusRef)}>
                <div className="grid grid-cols-1 gap-8">
                <div>
                        <input  type="text" 
                            className={`form-control p-2 border rounded-md w-full bg-4pgrey `} 
                            id="name"  
                            placeholder="Name"
                            name="name"
                            required
                            />
                </div>
                <div>
                        <input type="text"
                        className={`form-control p-2 border rounded-md w-full bg-4pgrey`}
                        id="phone"
                        aria-describedby="emailHelp" 
                        placeholder="Phone"
                        name="phone"
                        ref={phone}
                        onChange={() => handleChange(phone)}
                        required
                        />
                </div>
                <div>
                        <input type="email" 
                        className={`form-control p-2 border rounded-md w-full bg-4pgrey`}
                        id="email" 
                        placeholder="Email"
                        name="email"
                        required/>
                </div>
                <div>
                        <label htmlFor="service"></label>
                        <select 
                        name="service"
                        id="service"
                        className={`form-control p-2 rounded-md w-full bg-4pgrey`}>
                             <option value="" disabled defaultValue={''}>Choose a service</option>
                            {servicesOptions.map((data, index) => (
                                <option key={index} value={data} label={data}>{data}</option>
                            ))}
                        </select>
                </div>
                <div>
                        <textarea rows="3" 
                        type="" 
                        className={`form-control p-2 border rounded-md w-full bg-4pgrey`}
                        id="comment" 
                        placeholder="Tell Us about your Buiness!"
                        name="comment"/>
                </div>
                </div>
                    <div className="col-span-12 lg:pt-4 pt-8" >
                    <div className="w-full text-center">
                        <button className={`flex rounded-lg items-center font-bold shadow-[0_4px_4px_0px_rgba(0,0,0,0.1)] btn-animation btn-red-to-blue w-full text-center text-white`}>
                                <Image
                                    src={`/images/ib-link-blue-white.svg`} 
                                    alt="Button Icon"
                                    sizes="(min-width: 1024px) 1024px, (min-width: 768px) 768px, 100vw"
                                    srcSet={`/images/ib-link-blue-white.svg 768w, /images/ib-link-blue-white.svg 1024w`}
                                    width={44}
                                    height={46}
                                />
                                <p className={` w-full text-center`}>SEND</p>            
                        </button>
                    </div>
                    <p ref={statusRef} className={formClass ? "text-green-600 mb-0" : "text-red-700 mb-0"} ></p>
                    </div>
                </form> 
            </div>
            <div className="w-[432px]">
                <a href="/" target="_blank">
                    <Image
                        src={`/images/form-map.webp`} 
                        alt="Map image"
                        sizes="(min-width: 1024px) 1024px, (min-width: 768px) 768px, 100vw"
                        srcSet={`/images/form-map.webp 768w, /images/form-map.webp 1024w`}
                        width={435}
                        height={600}
                    />
                </a>
            </div>

        </div>
      </div>
    </>
  )
};

export default ContactFormFooter;
