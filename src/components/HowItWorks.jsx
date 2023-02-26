import React from 'react'
import HowItWorksCard from './HowItWorksCard'

const HowItWorks = () => {
    const options = [
        {
            illustration: 'Goal.svg',
            title: 'Title',
            description: 'Hello this is the demo description of the component this is some more text to test it'
        },
        {
            illustration: 'Goal.svg',
            title: 'Title',
            description: 'Hello this is the demo description of the component this is some more text to test it'
        },
        {
            illustration: 'Goal.svg',
            title: 'Title',
            description: 'Hello this is the demo description of the component this is some more text to test it'
        },
        {
            illustration: 'Goal.svg',
            title: 'Title',
            description: 'Hello this is the demo description of the component this is some more text to test it'
        }
]

  return (
    <div className='bg-hero-pattern pb-12'>
        <p className="text-3xl md:text-4xl sm:text-3xl font-bold text-black-800 mb-6 text-center ">
            How it works
        </p>

        <div className='flex justify-center mb-12'>
            <img src="rectangle.png" alt="" />
        </div>

        {options.map(({illustration , title , description}, index) => (
                    <div className=' grid grid-cols-6'>
                    <div className={`col-span-${index % 2 == 0 ? "1" : "2"}`}>
        
                    </div>
                    <div className='col-span-3'>
                        <HowItWorksCard 
                        illustration={illustration} 
                        title={title}
                        description={description}
                        />
                    </div>
                    <div className={`col-span-${index % 2 == 0 ? "2" : "1"}`}></div>
                </div>
        ))}
    </div>
  )
}

export default HowItWorks