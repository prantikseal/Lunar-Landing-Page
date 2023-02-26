const ServicesCard = ({image, title, description}) => {
  return (
    <div className="rounded-3xl bg-white flex flex-col shadow-2xl shadow-violet-600 p-8 mx-6">
        <img src={image} alt="" className="h-16 w-16" />
        <p className="text-2xl font-bold text-black-800 mt-4">{title}</p>
        <p className="text-md text-black-800 mt-4 mb-4">
            {description}
        </p>
        <a href="" className="bg-violet-600 text-white rounded-lg w-full py-4 text-sm text-center">
            Book a 30 min free meeting
        </a>
    </div>
  )
}

export default ServicesCard