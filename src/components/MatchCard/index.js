import './index.css'

const MatchCard = props => {
  const {matchData} = props
  const {competingTeamLogo, competingTeam, result, matchStatus} = matchData

  return (
    <li className="bg-container-match-card">
      <figure className="figure-container-match-card">
        <img
          src={competingTeamLogo}
          alt={`competing team ${competingTeam}`}
          className="team-logo-match-card"
        />
      </figure>
      <div className="text-container-match-card">
        <p className="competing-team">{competingTeam}</p>
        <p className="match-result">{result}</p>
        <p className="match-status">{matchStatus}</p>
      </div>
    </li>
  )
}

export default MatchCard
