import React, { useState } from 'react';

const RegistrationForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState('');
  const [skills, setSkills] = useState([]);
  const [submitted, setSubmitted] = useState(false);

  const handleSkillChange = (event) => {
    const value = event.target.value;
    const checked = event.target.checked;
    if (checked) {
      setSkills([...skills, value]);
    } else {
      setSkills(skills.filter((skill) => skill !== value));
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
    console.log(`First Name: ${firstName}\nLast Name: ${lastName}\nEmail: ${email}\nGender:${gender}\nSkills: ${skills}`);
  };

  return (
    <div>
      <h1>Registration Form</h1>
      <form onSubmit={handleSubmit}>
        <label>
          First Name:
          <input type="text" value={firstName} onChange={(event) => setFirstName(event.target.value)} />
        </label>
        <label>
          Last Name:
          <input type="text" value={lastName} onChange={(event) => setLastName(event.target.value)} />
        </label>
        <label>
          Email:
          <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
        </label>
        <label>
          Gender:
          <input type="radio" value="Male" name="gender" onChange={(event) => setGender(event.target.value)}/>Male
          <input type="radio" value="Female" name="gender" onChange={(event) => setGender(event.target.value)}/>Female
          <input type="radio" value="Other" name="gender" onChange={(event) => setGender(event.target.value)}/>Other
        </label>
        <label>
          Skills:
          <input type="checkbox" value="HTML"  onChange={(event) => setSkills(event.target.value)}/>HTML
          <input type="checkbox" value="CSS"  onChange={(event) => setSkills(event.target.value)}/>CSS
          <input type="checkbox" value="JavaScript" onChange= {(event) => setSkills(event.target.value)}/>JavaScript
          <input type="checkbox" value="React" onChange={(event) => setSkills(event.target.value)} />React
        </label>
        <button type="submit">Enrollment</button>
        
      </form>
      {submitted && (
        <div>
          <h2>Registration Details:</h2>
          <img src="https://images.hindustantimes.com/rf/image_size_640x362/HT/p1/2015/03/18/Incoming/Pictures/1327679_Wallpaper2.jpg" height="200" width="200"></img>
          <p>First Name: {firstName}</p>
          <p>Last Name: {lastName}</p>
          <p>Email: {email}</p>
          <p>Gender: {gender}</p>
          <p>Skills: {skills}</p>
        </div>
      )}
    </div>
  );
};

export default RegistrationForm;
