import React, { useState , useEffect } from 'react';
import axios from 'axios';
import PhoneInput , { formatPhoneNumber, formatPhoneNumberIntl, isValidPhoneNumber } from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import { isPossiblePhoneNumber } from 'react-phone-number-input';
import Swal from 'sweetalert2';

export const DonationForm = ({ closeModal }) => {

  const [nomPrenom, setnomPrenom] = useState('');
   const [email, setEmail] = useState('');
  const [telephone, setTelephone] = useState('');
  const [typeDon, setTypeDon] = useState([]);
  const [don, setDon] = useState('');
  const [montantDon, setMontantDon] = useState('');

  const [nomPrenomValid, setnomPrenomValid] = useState(true);
   const [emailValid, setEmailValid] = useState(true);
  const [telephoneValid, setTelephoneValid] = useState(true);
  const [typeDonValid, setTypeDonValid] = useState(true);
  const [donValid, setDonValid] = useState(true);
  const [montantDonValid, setMontantDonValid] = useState(true);
  const [value, setValue] = useState(true);
  const [isInitialRender, setIsInitialRender] = useState(true);
  const [status, setStatus] = useState('En cours');


  const handleTelephoneChange = (value) => {
    setPhoneNumber(value);
     setTelephoneValid(value ? isValidPhoneNumber(value) : false);
  };


  useEffect(() => {
    // Update isInitialRender after the first render
    setIsInitialRender(false);
  }, []);

  const handleChange = (value) => {
    setPhoneNumber(value);
    setValid(validatePhoneNumber(value));
  };


  const handleNomChange = (event) => {
    const value = event.target.value;

    const isValid = /^[A-Za-z\s]*$/.test(value) && value.trim().length >= 3;
     setnomPrenom(value);

    setnomPrenomValid(isValid);
  };






  const handleEmailChange = (event) => {
    const value = event.target.value;
    setEmail(value);
    setEmailValid(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value));
  };


 // Example in DonationForm
 const handleTypeDonChange = (event) => {
  const value = event.target.value;

  // Ensure that value is not undefined or null before performing operations
  if (value !== undefined && value !== null) {
    // If "argent_fourniture" is selected, set the typeDon to a string
    if (value === 'argent_fourniture') {
      setTypeDon(value);
    } else {
      setTypeDon(value);
      // Clear the 'don' state when switching to a different type of donation
      setDon('');
    }

    setTypeDonValid(value !== ''); // Update validity based on the presence of a value

    // Clear montantDon when switching away from 'argent'
    if (value !== 'argent') {
      setMontantDon('');
      setMontantDonValid(true); // Reset validation status
    }
    if (value !== 'fourniture') {
      setMontantDon('');
      setMontantDonValid(true); // Reset validation status
    }
    if (value !== 'argent_fourniture') {
      setMontantDon('');
      setMontantDonValid(true); // Reset validation status
    }
  }
};





useEffect(() => {
  // Update isInitialRender after the first render
  setIsInitialRender(false);
}, []);



const [phoneNumber, setPhoneNumber] = useState('');
const [valid, setValid] = useState(true);





const handleDonChange = (event) => {
  const value = event.target.value;
  // Use a regex that matches letters and spaces
  const isValid = /^[A-Za-z\s]*$/.test(value) && value.trim().length >= 3;

  setDon(value);
  setDonValid(isValid);
};

  const handleMontantDonChange = (event) => {
    const enteredValue = event.target.value;
    setMontantDon(enteredValue);
    setMontantDonValid(enteredValue.trim().length > 0 && parseFloat(enteredValue) >= 10);
  };

  const handleSubmit = async () => {
    // Ensure validation checks for non-empty values as well
    const isnomPrenomValid = nomPrenom.trim().length > 0 && nomPrenomValid;
    const isEmailValid = email.trim().length > 0 && emailValid;
    const isTelephoneValid = phoneNumber.trim().length > 0 && telephoneValid;
    const isTypeDonValid = typeDon.length > 0 && typeDonValid;
    const isDonValid = typeDon.includes('fourniture') ? don.trim().length > 0 && donValid : true;
    const isMontantDonValid = typeDon.includes('argent') ? montantDon.trim().length > 0 && montantDonValid : true;

    setnomPrenomValid(isnomPrenomValid);
    setEmailValid(isEmailValid);
    // Explicitly setTelephoneValid to enforce non-empty check
    setTelephoneValid(isTelephoneValid);
    setTypeDonValid(isTypeDonValid);
    setDonValid(isDonValid);
    setMontantDonValid(isMontantDonValid);

    if (
      isnomPrenomValid &&
      isEmailValid &&
      isTelephoneValid && // Ensure this condition is checked
      isTypeDonValid &&
      isDonValid &&
      isMontantDonValid
    ) {
      try {
        const apiUrl = 'http://localhost:3000/api/addDon';
        const response = await axios.post(apiUrl, {
          nomPrenom,
          email,
          phoneNumber, // Make sure this matches the state variable used to store the phone number
          typeDon,
          don,
          montantDon,
        });
        // Popup de succès
        Swal.fire({
          position: 'top-end',
          title: 'Succès!',
          text: 'Votre don a été enregistré avec succès.',
          icon: 'success',
          confirmButtonText: 'OK',
          toast: true,
          timer: 5000, // Le message reste visible pendant 60 secondes
          timerProgressBar: true,
          showConfirmButton: false,
        });

        console.log('Donation added successfully:', response.data);
        closeModal();
       }
       catch (error) {
        console.error('Error adding donation:', error);
      }
    } else {
      console.error('Veuillez remplir correctement tous les champs');
    }
  };


  const validatePhoneNumber = (phoneNumber) => {
    const phoneNumberPattern = /^\+?[1-9]\d{1,14}$/;
    return phoneNumberPattern.test(phoneNumber);
  };

  return (
    <div className="max-w-md mx-auto mt-4 p-2 bg-white rounded-md z-10">
      <h2 className="text-2xl font-bold text-black-500 mb-4 font-arial">
        <img
          src="https://cdn1.iconfinder.com/data/icons/love-and-valentines-day-color-line-set/64/love-09-512.png"
          alt="Donate Image"
          className="mx-auto mb-4"
          style={{ maxWidth: '10%', height: 'auto' }}
        />
      </h2>
      <p className="text-gray-500 mt-2 text-center">
      <b>NB:</b> Si votre don n'est pas reçu dans un mois , il sera automatiquement rejeté.
    </p>
      <div className="max-w-md mx-auto mt-4 p-2 bg-white rounded-md z-10">
        <div>
          <label htmlFor="Nom" className="block text-sm text-gray-600 font-medium dark:text-gray-600">
            Nom et Prénom
          </label>
          <input
            type="text"
            placeholder="Enter votre nom"
            className={`mt-2 block w-full placeholder-gray-400/70 rounded-lg border ${
              nomPrenomValid ? 'border-gray-200' : 'border-red-500'
            } bg-white px-5 py-2.5 text-gray-600 focus:border-orange-400 focus:outline-none focus:ring focus:ring-orange-300 focus:ring-opacity-40 dark:border-gray-600 white:bg-gray-900 dark:text-gray-600 dark:focus:border-orange-300`}
            onChange={handleNomChange}
          />

           {!nomPrenomValid && (
            <span className="text-red-500 text-sm">Veuillez entrer un nom valide.</span>
          )}

        </div>





        <div className="mt-4">
          <label htmlFor="Email" className="block text-sm text-gray-600 font-medium dark:text-gray-600 ">
            Email
          </label>
          <input
            type="text"
            placeholder="Enter votre email"
            className={`mt-2 block w-full placeholder-gray-400/70 rounded-lg border ${
              emailValid ? 'border-gray-200' : 'border-red-500'
            } bg-white px-5 py-2.5 text-gray-600 focus:border-orange-400 focus:outline-none focus:ring focus:ring-orange-300 focus:ring-opacity-40 dark:border-gray-600 white:bg-gray-900 dark:text-gray-600 dark:focus:border-orange-300`}
            onChange={handleEmailChange}
          />
          {!emailValid && <span className="text-red-500 text-sm">Veuillez entrer une adresse email valide.</span>}
        </div>

        <div className="mt-4">
        <label htmlFor="telephone" className="block text-sm text-gray-600 font-medium dark:text-gray-600">
          Téléphone:
          <PhoneInput
            className={`mt-2 block w-full placeholder-gray-400/70 rounded-lg border ${
              telephoneValid ? 'border-gray-200' : 'border-red-500'
            } bg-white px-5 py-2.5 text-gray-600 focus:border-orange-400 focus:outline-none focus:ring focus:ring-orange-300 focus:ring-opacity-40 dark:border-gray-600 white:bg-gray-900 dark:text-gray-600 dark:focus:border-orange-300`}
            defaultCountry='TN'
            value={phoneNumber}
            onChange={handleTelephoneChange}
          />
        </label>
        {!telephoneValid && (
          <span className="text-red-500 text-sm">
            Veuillez entrer un numéro de téléphone valide pour ce pays.
          </span>
        )}
      </div>



        <div className="mb-4 mt-4">
          <label className="block text-sm font-medium text-gray-600 mb-4">Type de don</label>
          <select
          className={`mt-2 block w-full placeholder-gray-400/70 rounded-lg border ${
            typeDonValid ? 'border-gray-200' : 'border-red-500'
          } bg-white px-5 py-2.5 text-gray-600 focus:border-orange-400 focus:outline-none focus:ring focus:ring-orange-300 focus:ring-opacity-40 dark:border-gray-600 white:bg-gray-900 dark:text-gray-600 dark:focus:border-orange-300`}
          onChange={handleTypeDonChange}
          value={typeDon}
        >
          <option value="" disabled>Selectionner le type de don</option>
          <option value="argent">Argents</option>
          <option value="fourniture">Fournitures</option>
          <option value="argent_fourniture">Argents et Fournitures</option>
        </select>

          {!typeDonValid && <span className="text-red-500 text-sm">Veuillez sélectionner le type de don.</span>}
        </div>

        {typeDon.includes('argent') && (
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">Montant du don</label>
            <input
            type="number"
            className={`mt-2 block w-full placeholder-gray-400/70 rounded-lg border ${
              montantDonValid ? 'border-gray-200' : 'border-red-500'
            } bg-white px-5 py-2.5 text-gray-600 focus:border-orange-400 focus:outline-none focus:ring focus:ring-orange-300 focus:ring-opacity-40 dark:border-gray-600 white:bg-gray-900 dark:text-gray-600 dark:focus:border-orange-300`}
            placeholder="Saisir ici le montant(Minimum 10 Dinars Tunisiens)"
            onChange={handleMontantDonChange}
            value={montantDon}
          />
          {!montantDonValid && montantDon.trim().length > 0 && (
            <span className="text-red-500 text-sm">Veuillez entrer un montant supérieur ou égal à 10 TND.</span>
          )}
          {!montantDonValid && montantDon.trim().length === 0 && (
            <span className="text-red-500 text-sm">Veuillez entrer le montant du don.</span>
          )}
            <p className="text-gray-500 mt-2">
              Vous devez envoyer le montant sur ce RIB 0730000061554362623 par virement bancaire.
            </p>
          </div>
        )}

        {typeDon.includes('fourniture') && (
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">Détails du don</label>

            <textarea
              className={`mt-2 block w-full placeholder-gray-400/70 rounded-lg border ${
                donValid ? 'border-gray-200' : 'border-red-500'
              } bg-white px-5 py-2.5 text-gray-600 focus:border-orange-400 focus:outline-none focus:ring focus:ring-orange-300 focus:ring-opacity-40 dark:border-gray-600 white:bg-gray-900 dark:text-gray-600 dark:focus:border-orange-300`}
              placeholder="Saisir ici de quoi s'agit votre don"
              onChange={handleDonChange}
              value={don}
            ></textarea>
            {!donValid && don.trim().length === 0 && (
              <span className="text-red-500 text-sm">Veuillez entrer les composants du don.</span>
            )}
            {!donValid && don.trim().length < 3 && don.trim().length > 0 && (
              <span className="text-red-500 text-sm">Veuillez entrer au moins 3 caractères pour les composants du don.</span>
            )}
            {!donValid && don.trim().length >= 3 && (
              <span className="text-red-500 text-sm">Veuillez entrer des composants valides du don. Seules les lettres et les espaces sont autorisées.</span>
            )}

          </div>
        )}

        <button onClick={handleSubmit} className="bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600 mx-40">
          Valider
        </button>
      </div>
    </div>
  );
}
