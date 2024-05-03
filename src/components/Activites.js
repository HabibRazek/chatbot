import React from 'react';




const Activities = () => {
  const cards = [
    {
      imgSrc:
          '4.png',
      title: 'Activités éducatives',
      info: ' Notre programme éducatif dédié aux enfants trisomiques crée un environnement bienveillant favorisant l apprentissage et le développement global. Conçu pour les enfants de tous niveaux, nous mettons l accent sur l inclusion, offrant des activités éducatives adaptées qui stimulent la curiosité, encouragent la créativité et renforcent les compétences cognitives',
      altTitle: 'Lorem ipsum dolor sit',
  },
    {
      imgSrc:
          '2.png',
      title: 'Activités sportives',
      info: ' Notre programme sportif dédié aux enfants atteints de trisomie 21 offre une expérience unique, axée sur le développement moteur et la socialisation. Conçu spécialement pour les enfants de tous niveaux d aptitude, nous mettons l accent sur l inclusion, le renforcement des compétences physiques et la création de liens durables au sein de notre communauté sportive adaptée. Rejoignez-nous pour une aventure enrichissante où chaque enfant peut s épanouir et explorer son potentiel sportif',
      altTitle: 'Lorem ipsum dolor sit',
  },
    {
      imgSrc:
          '3.jpg',
      title: 'Activités pédagogiques spécialisées',
      info: 'Notre atelier pédagogique spécialisé offre une éducation sur mesure aux enfants trisomiques. Avec des méthodes adaptées et une équipe dédiée, nous créons un environnement inclusif favorisant l apprentissage personnalisé et l autonomie. Rejoignez-nous pour une expérience éducative unique, où chaque enfant peut s épanouir à son rythme.',
      altTitle: 'Lorem ipsum dolor sit',
  },
    {
      imgSrc:
          '5.jpg',
      title: 'Activités extérieures',
      info: ' Explorez le monde avec nos activités extérieures que ce soit à travers des sorties nature, des jeux adaptés en plein air ou des excursions éducatives, notre programme favorise l inclusion et le développement physique. ',
      altTitle: 'Lorem ipsum dolor sit',
  },
    {
      imgSrc:
          '111.jpg',
      title: 'Orthophonie',
      info: ' Le rôle de l orthophoniste est: l intervention précoce auprès des enfants atteints de trisomie 21 ,L évaluation en effectuant des examens ou des tests dans le but d établir un diagnostic, et sur la base des résultats de l évaluation et du diagnostic, le traitement est mis en œuvre.Réhabilitation par des séances thérapeutiques selon un plan de traitement individualisé pour chaque bénéficiaire dans le but de développer et d améliorer les capacités de langage et de communication.',
      altTitle: 'Lorem ipsum dolor sit',
  },
    {
      imgSrc:
          '6.png',
      title: 'Ateliers de formation ',
      info: ' Découvrez notre série d ateliers de formation stimulants, offrant aux enfants trisomiques une expérience créative enrichissante. Au sein de ces ateliers, les participants explorent diverses formes d expression artistique, de la peinture à la fabrication d accessoires tels que des bijoux, en passant par la pâtisserie.',
      altTitle: 'Lorem ipsum dolor sit',
  },
  ];


  return (
    <div className="max-w-[85rem] px-4 py-10 sm:px-5 lg:px-8 lg:py-14 mx-auto">
      {/* Header Section */}
      <div className="text-center">
        <h2 className="text-3xl lg:text-4xl text-gray-800 font-bold">
          Nos activités
        </h2>
        <hr className='w-28 h-2 rounded-lg mt-2 bg-orange-500 mx-auto mb-10' />
        <p className="text-xl text-gray-700 max-w-2xl mb-5 mx-auto">

          Découvrez nos efforts dédiés à l'amélioration de la vie des personnes atteintes de trisomie. Chaque initiative est un pas vers un monde plus inclusif et bienveillant.
        </p>
      </div>

      {/* Cards Section */}
      <div className="grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 mb-8">
        {cards.map((card, index) => (
          <div key={index} className="card rounded-lg overflow-hidden shadow-lg">
            <img
              src={card.imgSrc}
              className="card-img "
              alt={card.altTitle}
              width={370}
              height={370}
              style={{ width: 'auto', height: 'auto' }}
            />
            <div className="card-body p-4">
              <h3 className="card-title text-xl text-gray-900 font-semibold mb-2">{card.title}</h3>
              <p className="card-info text-gray-900 ">{card.info}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );


};

export default Activities;
