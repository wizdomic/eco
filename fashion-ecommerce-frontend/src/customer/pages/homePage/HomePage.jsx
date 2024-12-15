import React from 'react'
import MainCarousel from '../../components/homeCarousal/MainCarousel'
import HomeSectionCardCarousel from '../../components/homeSectionCardCarousel/HomeSectionCardCarousel';
import { mens_kurta } from "../../../data/mens/MensKurta";

const HomePage =  ()=>{
        return(
                <div>
                        <MainCarousel/>
                        <div className='space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10'>
                                <HomeSectionCardCarousel data={mens_kurta} sectionName={"Men's Kurta"}/>
                                <HomeSectionCardCarousel data={mens_kurta} sectionName={"Men's Shoes"}/>
                                <HomeSectionCardCarousel data={mens_kurta} sectionName={"Men's Shirts"}/>
                                <HomeSectionCardCarousel data={mens_kurta} sectionName={"Women's Saree"}/>
                                <HomeSectionCardCarousel data={mens_kurta} sectionName={"Women's Dress"}/>

                                </div>
                </div>
        )
}

export default HomePage;