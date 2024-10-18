import React from 'react'

const Main = () => {
  return (
    <div>
      <div className="header">
     <div className="bg-container">
     <img src={require('../assets/images/8-things-to-know-about-money.jpg')} alt="" />
     </div>
     <div className='apply'>
        <p>Apply for the Dual Diploma Program</p>
      </div>
      </div>
      <section className='mid-section'>
        <div className="applicants">
          <h1>First Time Applicants</h1>
          <p>To be accepted to study at Binghamton University, interested applicants must currently be a matriculated student in one of our partner institutions.</p>
          <h3>Admission Process</h3>
          <p>1. Please submit ALL required documents to the <a href="https://www.youtube.com/">Dual-Diploma Programs office</a>
          </p>
          <ul>
            <li>Admission Form</li>
            <li>Financial Statement (Don't forget to sign and date.)</li>
            <li>Bank Statement</li>
            <li>Official Copy of High School Transcript</li>
            <li>Official Copy of TOEFL/IELTS Score Report (Minimum requirements: TOEFL IBT 83/IELTS 6.5)</li>
          </ul>
          <p>2. After receiving all the documents from you, our office will request your I-20 from the Office of International Student and Scholar Services (ISSS). ISSS will email you your I-20. Be sure to set up access to your new Binghamton email and check it in order to receive your I-20.</p>
          <p>3. The DDP office will email you a letter of admission, with instructions for how to access your Binghamton email and preliminary instructions on other processes.</p>
          <p>4. After receiving you I-20, you may begin to apply for your F-1 VISA</p>
          <ul>
            <li><a href="https://www.youtube.com/">VISA Application Instructions in English</a></li>
            <li><a href="https://www.youtube.com/">VISA Application Instructions in Turkish</a></li>
          </ul>
          <p>5. <a href="https://www.youtube.com>">Complete Health Forms</a></p>
          <p>6. <a href="https://www.youtube.com">Email your flight information to DDP</a></p>
        </div>
      </section>
    </div>
   
  )
}

export default Main