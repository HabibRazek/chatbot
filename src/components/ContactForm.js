import React from 'react';
import { FaPaperPlane } from 'react-icons/fa';
import { Link } from 'react-router-dom';



const ContactForm = () => {
  return (
    <section className="">
      <div className="container px-6 py-12 mx-auto">
        <div>
          <p className="font-medium text-orange-500 dark:text-orange-400">Contactez-nous</p>

          <h1 className="mt-2 text-2xl font-semibold text-gray-800 md:text-3xl">Contacter notre équipe amicale </h1>

          <p className="mt-3 text-gray-900 ">Nous aimerions recevoir de vos nouvelles. Veuillez envoyez-nous un e-mail.</p>
        </div>

        <div class="grid grid-cols-1 gap-12 mt-10 md:grid-cols-3">
         <div>
            <a href="mailto:atppt21@hotmail.com" class="inline-block p-3 text-orange-500 rounded-full bg-orange-100/80">
             </a>
            <h2 class="mt-4 text-base font-medium text-gray-800">Email</h2>
            <p class="mt-2 text-sm text-gray-500">Notre équipe amicale est là pour vous aider</p>
            <p class="mt-2 text-sm text-orange-500 dark:text-orange-400">
                <a href="mailto:atppt21@hotmail.com">atppt21@hotmail.com</a>
            </p>
        </div>

         <div>
            <a href="https://www.google.com/maps/search/..." target="_blank" class="inline-block p-3 text-orange-500 rounded-full bg-orange-100/80">
             </a>
            <h2 class="mt-4 text-base font-medium text-gray-800">Local</h2>
            <p class="mt-2 text-sm text-gray-500">Venez dire bonjour à notre siège social.</p>
            <p class="mt-2 text-sm text-orange-500 dark:text-orange-400">
                <a href="https://www.google.com/maps/search/..." target="_blank">Rue aslami lido dar chaabane 8011</a>
            </p>
        </div>

         <div>
            <span class="inline-block p-3 text-orange-500 rounded-full bg-orange-100/80">
             </span>
            <h2 class="mt-4 text-base font-medium text-gray-800">Telephone</h2>
            <p class="mt-2 text-sm text-orange-500 dark:text-orange-400">72271790</p>
        </div>
    </div>

      </div>


    </section>
  );
}

export default ContactForm;
