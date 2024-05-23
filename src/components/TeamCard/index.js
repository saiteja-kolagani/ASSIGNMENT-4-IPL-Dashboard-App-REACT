// Write your code here
import {Link} from 'react-router-dom'

import './index.css'

const TeamCard = props => {
  const {eachData} = props
  const {teamImageUrl, name, id} = eachData

  return (
    <Link to={`/team-matches/${id}`}>
      <button type="button" className="btn-teamcard">
        <li className="team-container-teamcard">
          <img src={teamImageUrl} alt={name} className="team-image-teamcard" />
          <p className="team-name-teamcard">{name}</p>
        </li>
      </button>
    </Link>
  )
}

export default TeamCard
