import React, { useState } from 'react';
import './app.css'// Import your CSS file
import Navbar from './components/Navbar';

function App() {
  // State variables to store form inputs
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [websiteLink, setWebsiteLink] = useState('');
  const [imageLink, setImageLink] = useState('');
  const [gender, setGender] = useState('');
  const [skills, setSkills] = useState([]);

  // State variable to store form data to display

  const [displayData, setDisplayData] = useState([]);

  // Handle form submission

  const handleSubmit = (e) => {
    e.preventDefault();

    // Add current form data to displayData array

    setDisplayData([
      ...displayData,
      { fullName, email, websiteLink, imageLink, gender, skills }
    ]);

    // Reset form inputs

    setFullName('');
    setEmail('');
    setWebsiteLink('');
    setGender('');
    setSkills([]);
    setImageLink('');
  };

  return (
    <main className='w-full h-screen bg-gray-100'>
      <div className='w-full h-20'>

        {/* Navbar component */}

        <Navbar />
      </div>
      <div className='flex h-[calc(95vh-5rem)]'>
        {/* Left side: Form */}
        <div className='left w-1/2 bg-white flex justify-center items-center'>
          <form onSubmit={handleSubmit} className='w-[400px] rounded border-2 p-4 px-6'>
            <h1 className='text-3xl font-semibold text-center mb-4'>Registration Form</h1>
            {/* ... (rest of the form inputs) ... */}
            <div className='mb-3'>
              <label className='block mb-1' htmlFor="fullName">Full Name:</label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                required
                className='block w-full h-[2rem] rounded px-3 outline-0'
              />
            </div>

            <div className='mb-3'>
              <label className='block mb-1' htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className='block w-full h-[2rem] rounded px-3 outline-0'
              />
            </div>

            <div className='mb-3'>
              <label className='block mb-1' htmlFor="websiteLink">Website Link:</label>
              <input
                type="url"
                id="websiteLink"
                name="websiteLink"
                value={websiteLink}
                onChange={(e) => setWebsiteLink(e.target.value)}
                required
                className='block w-full h-[2rem] rounded px-3 outline-0'
              />
            </div>

            <div className='mb-3'>
              <label className='block mb-1' htmlFor="imageLink">Image Link:</label>
              <input
                type="url"
                id="imageLink"
                name="imageLink"
                value={imageLink}
                onChange={(e) => setImageLink(e.target.value)}
                className='block w-full h-[2rem] rounded outline-0 px-3'
              />
            </div>

            <div className='mb-3'>
              <label>Gender:</label>
              <div className="flex gap-5">
                <label className='flex items-center gap-1'>
                  <input
                    type="radio"
                    className='appearance-none w-4 h-4 bg-white checked:bg-gray-700 rounded-full'
                    name="gender"
                    value="Male"
                    checked={gender === 'Male'}
                    onChange={(e) => setGender(e.target.value)}
                    required
                  />
                  Male
                </label>

                <label className='flex items-center gap-1'>
                  <input
                    type="radio"
                    className='appearance-none w-4 h-4 bg-white checked:bg-gray-700 rounded-full'
                    name="gender"
                    value="Female"
                    checked={gender === 'Female'}
                    onChange={(e) => setGender(e.target.value)}
                  />
                  Female
                </label>

                <label className='flex items-center gap-1'>
                  <input
                    type="radio"
                    className='appearance-none w-4 h-4 bg-white checked:bg-gray-700 rounded-full'
                    name="gender"
                    value="Other"
                    checked={gender === 'Other'}
                    onChange={(e) => setGender(e.target.value)}
                  />
                  Other
                </label>
              </div>
            </div>

            <div className='mb-3'>
              <label>Skills:</label>
              <div className="flex flex-wrap gap-4">
                <label className='flex items-center gap-1'>
                  <input
                    className='appearance-none w-4 h-4 checked:bg-gray-700 bg-white rounded'
                    type="checkbox"
                    value="HTML"
                    checked={skills.includes('HTML')}
                    onChange={(e) => {
                      if (e.target.checked) {
                        setSkills([...skills, e.target.value]);
                      } else {
                        setSkills(skills.filter((skill) => skill !== e.target.value));
                      }
                    }}
                  />
                  HTML
                </label>
                <label className='flex items-center gap-1'>
                  <input
                    className='appearance-none w-4 h-4 checked:bg-gray-700 bg-white rounded'
                    type="checkbox"
                    value="CSS"
                    checked={skills.includes('CSS')}
                    onChange={(e) => {
                      if (e.target.checked) {
                        setSkills([...skills, e.target.value]);
                      } else {
                        setSkills(skills.filter((skill) => skill !== e.target.value));
                      }
                    }}
                  />
                  CSS
                </label>
                <label className='flex items-center gap-1'>
                  <input
                    className='appearance-none w-4 h-4 checked:bg-gray-700 bg-white rounded'
                    type="checkbox"
                    value="JavaScript"
                    checked={skills.includes('JavaScript')}
                    onChange={(e) => {
                      if (e.target.checked) {
                        setSkills([...skills, e.target.value]);
                      } else {
                        setSkills(skills.filter((skill) => skill !== e.target.value));
                      }
                    }}
                  />
                  JavaScript
                </label>
                <label className='flex items-center gap-1'>
                  <input
                    className='appearance-none w-4 h-4 checked:bg-gray-700 bg-white rounded'
                    type="checkbox"
                    value="ReactJS"
                    checked={skills.includes('ReactJS')}
                    onChange={(e) => {
                      if (e.target.checked) {
                        setSkills([...skills, e.target.value]);
                      } else {
                        setSkills(skills.filter((skill) => skill !== e.target.value));
                      }
                    }}
                  />
                  ReactJS
                </label>
                <label className='flex items-center gap-1'>
                  <input
                    className='appearance-none w-4 h-4 checked:bg-gray-700 bg-white rounded'
                    type="checkbox"
                    value="Python"
                    checked={skills.includes('Python')}
                    onChange={(e) => {
                      if (e.target.checked) {
                        setSkills([...skills, e.target.value]);
                      } else {
                        setSkills(skills.filter((skill) => skill !== e.target.value));
                      }
                    }}
                  />
                  Python
                </label>
                <label className='flex items-center gap-1'>
                  <input
                    className='appearance-none w-4 h-4 checked:bg-gray-700 bg-white rounded'
                    type="checkbox"
                    value="Java"
                    checked={skills.includes('Java')}
                    onChange={(e) => {
                      if (e.target.checked) {
                        setSkills([...skills, e.target.value]);
                      } else {
                        setSkills(skills.filter((skill) => skill !== e.target.value));
                      }
                    }}
                  />
                  Java
                </label>
              </div>
            </div>
            {/* Form submission button */}
            <button type='submit' className='bg-green-500 mt-5 px-7 py-2 rounded text-white'>
              Register
            </button>
          </form>
        </div>
        {/* Right side: Display Data */}
        <div className='right w-1/2 bg-gray-200 flex justify-center overflow-scroll'>
          <div className='w-[460px] mt-7'>
            {/* Loop through displayData and render each item */}
            {displayData.map((item, index) => (
              <div
                className='bg-gray-800 text-white rounded-xl mb-6 text-center p-5'
                key={index}
              >
                <img
                  src={item.imageLink}
                  alt="User's Photo"
                  className='mx-auto object-cover w-24 h-24 rounded-full'
                />
                <p className='font-semibold text-center'>{item.fullName}</p>
                <p>{item.email}</p>
                <a href={item.websiteLink} className='text-blue-300 hover:underline'>
                  {item.websiteLink}
                </a>

                <p className='mt-4'>
                  <strong>Gender:</strong> {item.gender}
                </p>
                <p>
                  <strong>Skills:</strong> {item.skills.join(', ')}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
