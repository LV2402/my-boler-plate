// src/components/Home.jsx
import React from 'react';

function Home() {
  return (
    <div className="p-4 bg-gradient-to-r from-gray-100 to-yellow-200 min-h-screen">
      <h2 className="text-3xl font-semibold mb-4">Home Page</h2>
      <p className="text-lg mb-6">Welcome to the home page! Here you'll find an overview of our application and what you can do here.</p>

      <section className="mb-8 p-4 bg-white shadow-md rounded-lg">
        <h3 className="text-2xl font-bold mb-2">About Us</h3>
        <p>
          We are dedicated to providing a platform for effective collaboration among research interest groups (RIGs). 
          Each group consists of members working together to achieve common goals, share knowledge, and drive innovation. 
          Join us in our mission to foster collaboration and learning!
        </p>
      </section>

      <section className="mb-8 p-4 bg-white shadow-md rounded-lg">
        <h3 className="text-2xl font-bold mb-2">Features</h3>
        <ul className="list-disc list-inside">
          <li>Member management: Easily add or remove team members.</li>
          <li>Progress tracking: Keep track of each member's contributions and progress.</li>
          <li>Dashboard: Access all your RIG's information in one convenient location.</li>
          <li>User-friendly interface: Enjoy a seamless experience while navigating the platform.</li>
        </ul>
      </section>

      <section className="p-4 bg-white shadow-md rounded-lg">
        <h3 className="text-2xl font-bold mb-2">Get Started</h3>
        <p>
          Ready to make an impact? If you haven't registered yet, sign up now to join a research interest group and start collaborating with others.
          If you're already a member, log in to access your dashboard and see your team's progress!
        </p>
        <div className="mt-4">
          <a href="/register" className="inline-block bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-2 px-4 rounded transition duration-200 ease-in-out">
            Register
          </a>
          <a href="/login" className="inline-block ml-4 bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-2 px-4 rounded transition duration-200 ease-in-out">
            Login
          </a>
        </div>
      </section>
    </div>
  );
}

export default Home;
