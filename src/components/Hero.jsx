import React from 'react'

const Hero = () => {
  return (
    <>
     <section className="bg-cover bg-center h-[90vh] flex items-center justify-center text-white relative" style={{ backgroundImage: "url('/hero.png')" }}>
      <div className=" bg-opacity-50 p-6 rounded-lg text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Find Your Dream Home</h1>
        <p className="mb-6">Properties in Islamabad, Rawalpindi & Lahore</p>
        <button className="bg-blue-600 px-6 py-3 rounded-md text-white hover:bg-grey-700">Browse Listings</button>
      </div>
    </section>
    </>
  )
}

export default Hero
