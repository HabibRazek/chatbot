import React from 'react'
import { FaArrowRight } from 'react-icons/fa';


const Presentation = () => {
    return (
        <div className="container mx-auto mt-[-150px]  px-4 py-8">
            <div className=" mt-20 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
                <div className="md:w-1/2">
                    <h1 className=" text-gray-800 text-6xl mb-10 font-extrabold">Bienvenue à<span className=" text-orange-500 "> ATPPT21</span></h1>

                    <p className="text-gray-600 text-xl mt-10">
                    L'Association Tunisienne des Personnes Porteuses de Trisomie 21 (ATPPT 21) Filiale de <span className="text-gray-600 text-xl font-bold "> Nabeul</span> est une organisation caritative qui se consacre à aider et soutenir les personnes atteintes de trisomie 21. Son principal objectif est de favoriser l'intégration à l'école, dans la société et au travail en offrant des moyens pour un accompagnement éducatif et thérapeutique efficace. L'association met l'accent sur la formation précoce, la réadaptation et la création d'un environnement favorable à l'autonomie, contribuant ainsi à une société plus inclusive.
                    </p>
                    <button className=" mt-10 inline-flex items-center border-2 border-[#0F0A3C] text-[#0F0A3C] font-semibold py-2 px-4 rounded-full transition-colors duration-300 ease-in-out hover:bg-orange-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0F0A3C]">
                        S’inscrire <FaArrowRight className="ml-2" />
                    </button>
                    <img src="/vector.png" alt="vector" className="max-w-sm mt-3" />
                </div>


                <div className=" md:w-1/2 flex justify-center md:justify-end">
                    <img src='/child.png' alt="Intro" className="max-w-sm mt-10  md:max-w-md lg:max-w-lg xl:max-w-xl " />
                </div>
            </div>
        </div>
    )
}

export default Presentation
