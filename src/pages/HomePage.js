// import React, { Component } from 'react'

import React from 'react'
import { Link } from "react-router-dom";


function Pro() {
  return (
    <div>
      <section>
     
        <div className="mx-auto max-w-screen-2xl px-4  sm:px-6 lg:px-8 mt-[8rem]">
          <div className="grid grid-cols-1 lg:h-screen lg:grid-cols-2">
            <div className="relative z-10 lg:py-16">
              <div className="relative h-64 sm:h-80 lg:h-full">
                <img
                  alt="House"
                  src="https://images.pexels.com/photos/2735970/pexels-photo-2735970.jpeg?auto=compress&cs=tinysrgb&w=600"
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>
            </div>
            <div className="relative flex items-center bg-gray-100">
              <span className="hidden lg:absolute lg:inset-y-0 lg:-start-16 lg:block lg:w-16 lg:bg-gray-100" />
              <div className="p-8 sm:p-16 lg:p-24">
                <h2 className="text-2xl font-bold sm:text-3xl text-neutral-900 ">
                Required tasks
                </h2>
                <p className="mt-4 text-black-600 ">
                "To-Do" refers to a list of tasks or activities that you need to accomplish or complete within a specific timeframe. It's a way to organize and keep track of the things you need to do, ensuring that you don't forget any important tasks and helping you prioritize your work effectively
                </p>
                <Link
                  to="product"
                  className="mt-8  inline-block rounded border border-neutral-900 bg-neutral-900 px-12 py-3 bg-neutral-900 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-neutral-900 hover:shadow-lg focus:bg-neutral-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-neutral-900 active:shadow-lg transition duration-150 ease-in-out"
                >
                  View more
                </Link>
              </div>
            </div>
          </div>
        </div>



</section>
        </div>
       
               
             
  );
}

export default Pro