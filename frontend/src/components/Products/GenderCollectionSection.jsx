import { Link } from "react-router-dom"
import mensCollectionImage from "../../assets/mens-collection.webp"
import womensCollectionImage from "../../assets/womens-collection.webp"
import men_section from "../../assets/images/men_section.png"
import women_img  from "../../assets/women_img.png"
import men_img  from "../../assets/men_img.png"

export const GenderCollectionSection = () => {
  return (
    <section className="py-16 px-4 lg:px-0">
        <div  className="container mx-auto flex flex-col md:flex-row flex-wrap gap-8">
            <div className="relative flex-1">
                <img src={women_img} alt="Women's Collection" className="w-full h-[400px] sm:h-[500px] md:h-[700px] object-cover" />
                <div className="absolute bottom-8 left-8 bg-white bg-opacity-90 p-4">
                    <h2 className="text-2xl font-bold text-gray-900 mb-3">
                        Women's Collection
                    </h2>
                    <Link to="/collections/all?gender=Women" className="text-gray-900 underline" >Shop Now</Link>
                </div>
            </div>
            <div className="relative flex-1">
                <img src={men_img} alt="Men;s Collection" className="w-full h-[400px] sm:h-[500px] md:h-[700px] object-cover" />
                <div className="absolute bottom-8 left-8 bg-white bg-opacity-90 p-4">
                    <h2 className="text-2xl font-bold text-gray-900 mb-3">
                        Men's Collection
                    </h2>
                    <Link to="/collections/all?gender=Men" className="text-gray-900 underline" >Shop Now</Link>
                </div>
            </div>

        </div>
    </section>
  )
}
