import ServicesCard from "./ServicesCard"

const Services = () => {
    const services = [
        {
            image: "promotion.png",
            title: "Title",
            description: "Hello this is the demo description of the component this is some more text to test it"
        },
        {
            image: "promotion.png",
            title: "Title",
            description: "Hello this is the demo description of the component this is some more text to test it"
        },
        {
            image: "promotion.png",
            title: "Title",
            description: "Hello this is the demo description of the component this is some more text to test it"
        },
        {
            image: "promotion.png",
            title: "Title",
            description: "Hello this is the demo description of the component this is some more text to test it"
        }
    ]
  return (
    <div>
        <h1 className="text-3xl md:text-4xl sm:text-3xl font-bold text-black-800 mb-6 text-center ">
            Services
        </h1>
        <div className='flex justify-center mb-12'>
            <img src="rectangle.png" alt="" />
        </div>
        <div className='grid grid-cols-2 mx-20'>
            {
                // margin top for second card only

                services.map(({image, title, description}, index) => (
                    <div className={`col-span-1 ${index %2 == 0 ? "" : "my-20"}`}>
                        <ServicesCard
                        image={image}   
                        title={title}
                        description={description}
                        />
                    </div>
                )
                )}
                </div>
    </div>
  )
}

export default Services