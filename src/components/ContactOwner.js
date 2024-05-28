import React from 'react';
import person from './person.jpg';


export default function ContactOwner() {
  return (
    <div className="bg-gray-100 flex items-center justify-center min-h-screen">
      <div className="bg-white p-6 rounded-lg shadow-lg text-center">
        <h1 className="text-2xl font-bold mt-4">Chat With Landlord</h1>
        <p className="text-gray-600">Welcome to chat with landlord</p>
        <img className="w-20 h-20 rounded-full mx-auto" src={person} alt="Landlord" />
        <h2 className="text-xl font-semibold mt-2">Brian Apawo</h2>
        <h3 className="text-black-900">Landlord</h3>
        <h4 className="text-xl font-bold mt-3">APAWO COMPOUND</h4>
        <div className="flex justify-center space-x-4 mt-6">
          <a href="https://wa.me/Landlord's phone number" className="bg-green-500 text-white px-4 py-2 rounded-full font-semibold hover:bg-green-600">WhatsApp</a>
          <a href="tel:Landlord's phone number" className="bg-blue-500 text-white px-4 py-2 rounded-full font-semibold hover:bg-blue-600">Call</a>
          <a href="mailto:Landlord123@gamil.com" className="bg-gray-500 text-white px-4 py-2 rounded-full font-semibold hover:bg-gray-600">Email</a>
        </div>
        <p className="text-gray-600 mt-6">This page will allow you to directly talk to our trusted landlords so as you can secure and book your accomodation.</p>
      </div>
    </div>
  );
}