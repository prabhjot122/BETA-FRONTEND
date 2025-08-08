
import './MeetOurTeam.css'
function MeetOurTeam() {
  return (
    <div className='meetourteam-container'>
      <div className='meetourteam-content'>
        <h1>Meet Our Team</h1>
        <div className='meetourteam-grid'>
          <div className='meetourteam-grid-item'>
            <img src='/public/person1.png' alt='Team Member 1' className='meetourteam-image' />
            <h2>Sahil Saurav</h2>
            <p>CEO</p>
          </div>
          <div className='meetourteam-grid-item'>
            <img src='/public/person2.png' alt='Team Member 2' className='meetourteam-image' />
            <h2>Prabhjot Jaswal</h2>
            <p>CTO</p>
          </div>
          <div className='meetourteam-grid-item'>
            <img src='/public/person3.png' alt='Team Member 3' className='meetourteam-image'/>
            <h2>Deepak Kumar</h2>
            <p>CMO</p>
          </div>
          <div className='meetourteam-grid-item'>
            <img src='/public/person4.png' alt='Team Member 4' className='meetourteam-image' />
            <h2>Udit Kumar</h2>
            <p>Legal Advisor</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MeetOurTeam