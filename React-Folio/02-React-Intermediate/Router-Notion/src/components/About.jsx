import React from 'react'

function AboutUs() {
    return (
        <div className="py-14 ">
        <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
            <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                <div className="md:5/12 lg:w-5/12">
                    <img
                        src="https://tailus.io/sources/blocks/left-image/preview/images/startup.png"
                        alt="image"
                    />
                </div>
                <div className="md:7/12 lg:w-6/12">
                    <h2 className="text-2xl text-gray-100 font-bold md:text-4xl">
                    Driving Innovation in Online Education for a <span className=' text-yellow-600'> Brighter Future</span>
                    </h2>
                    <p className="mt-6 text-gray-400">
                    We are passionate about revolutionizing the way we learn. 
                    Our innovative platform combines technology , expertise, and community 
                    to create an unparalleled educational experience.
                    </p>
                    <p className="mt-4 text-gray-400">
                    Studynotion is at the forefront of driving innovation in online education.
                    We're passionate about creating a brighter future by offering cutting-edge courses,
                     leveraging emerging technologies, and nurturing a vibrant learning community.
                    </p>
                </div>
            </div>
        </div>
    </div>
        
    )
}

export default AboutUs