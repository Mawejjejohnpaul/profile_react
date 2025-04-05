// src/components.js
import React from 'react';

// PrivateDetails Component
export const PrivateDetails = () => {
  return (
    <div>
      <h2>Private Details</h2>
      <ul>
        <li><strong>Full Name:</strong> MAWEJJE JOHNPAUL</li>
        <li><strong>Student ID:</strong> M23B23/049</li>
        <li><strong>Course and Year:</strong> Bachelor of Science in Computer Science (BSCS), Year: 2,2</li>
        <li><strong>Hobbies and Interests:</strong> Embedded systems, Playing Football</li>
      </ul>
    </div>
  );
};

// Hobby Component
export const Hobby = () => {
  return (
    <div>
      <h2>My Hobby - Video</h2>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/3v0J0Em02FM?si=UumRUbiGQYqAgx8s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      <hr />
      <iframe 
        width="560" 
        height="315" 
        src="https://www.youtube.com/embed/ocBwLIDEHGY?si=mNFUg3VjD09T9pr3" 
        title="YouTube video player" 
        frameBorder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        referrerPolicy="strict-origin-when-cross-origin" 
        allowFullScreen
      ></iframe>
    </div>
  );
};

// ResultsTable Component
export const ResultsTable = () => {
  return (
    <div>
      <h2>Year 1 Semester 1 Results</h2>
      <table border="1">
        <thead>
          <tr>
            <th>Course Code</th>
            <th>Course Title</th>
            <th>Grade</th>
            <th>Credit Units</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>CSC1101</td>
            <td>Computer essentials</td>
            <td>A</td>
            <td>4</td>
          </tr>
          <tr>
            <td>CSC1102</td>
            <td>Discrete math</td>
            <td>A</td>
            <td>4</td>
          </tr>
          <tr>
            <td>CSC1103</td>
            <td>Data Structures and algorithms</td>
            <td>A</td>
            <td>4</td>
          </tr>
          <tr>
            <td>CSC1104</td>
            <td>Computer Organization</td>
            <td>A</td>
            <td>3</td>
          </tr>
          <tr>
            <td>CSC1105</td>
            <td>Ethics</td>
            <td>A</td>
            <td>4</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

// ContactInfo Component
export const ContactInfo = () => {
  return (
    <div>
      <h2>Contact Information</h2>
      <p>Email: <a href="mailto:jonpol3636@gmail.com">jonpol3636@gmail.com</a></p>
      <p>GitHub: <a href="https://github.com/mawejje-johnpaul" target="_blank" rel="noopener noreferrer">My GitHub</a></p>
    </div>
  );
};


