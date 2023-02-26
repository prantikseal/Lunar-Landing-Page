

const HowItWorksCard = ({illustration, title, description}) => {
  return (
    <div className='shadow-xl shadow-violet-600 backdrop-blur-lg flex gap-10 mx-10 rounded-md py-10 bg-white md:mx-0'>
        <img src={illustration} alt="" className='h-32 w-32' />
        <div>
            <p className='text-3xl font-bold mb-4 text-violet-600 md:text-4xl sm:text-3xl'>
                {title}
            </p>
            <img src="rectangle.png" alt="" />
            <p className='text-xl mt-4 text-semibold'>
                {description}
            </p>
        </div>
    </div>
  )
}

export default HowItWorksCard