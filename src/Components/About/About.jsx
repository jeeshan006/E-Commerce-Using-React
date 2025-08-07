import React from 'react'

export default function About() {
  return (
      <div className="py-16 bg-white">
          <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
              <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                  <div className="md:5/12 lg:w-5/12">
                      <img
                          src="https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg"
                          alt="image"
                      />
                  </div>
                  <div className="md:7/12 lg:w-6/12">
                      <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                        SAMDELL ONLINE SHOPPING
                      </h2>
                      <p className="mt-6 text-gray-600">
                           Your trusted destination for high-quality electronics that make life smarter, faster, and more connected. From the latest gadgets to everyday essentials, we bring you cutting-edge technology at your fingertips.
                      </p>
                      <p className="mt-4 text-gray-600">
                          SAMDELL Online Shopping a one-stop destination for cutting-edge electronics and smart solutions designed to simplify and enhance your everyday life. With a passion for technology and a commitment to excellence, we bring you the latest innovations across a wide range of products — all in one place.
                      </p>
                  </div>
              </div>
          </div>
      </div>
  );
}
