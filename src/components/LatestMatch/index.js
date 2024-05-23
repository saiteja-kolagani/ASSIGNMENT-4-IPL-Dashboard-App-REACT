import './index.css'

const LatestMatch = props => {
  const {data} = props
  const updatedLatestMatchDetails = {
    umpires: data.umpires,
    result: data.result,
    manOfTheMatch: data.man_of_the_match,
    id: data.id,
    date: data.date,
    venue: data.venue,
    competingTeam: data.competing_team,
    competingTeamLogo: data.competing_team_logo,
    firstInnings: data.first_innings,
    secondInnings: data.second_innings,
    matchStatus: data.match_status,
  }

  return (
    <div className="bg-container-latest-match">
      <div className="left-text-container-latest-match">
        <p className="team-name">{updatedLatestMatchDetails.competingTeam}</p>
        <p className="match-date">{updatedLatestMatchDetails.date}</p>
        <p className="match-venue">{updatedLatestMatchDetails.venue}</p>
        <p className="match-result">{updatedLatestMatchDetails.result}</p>
      </div>
      <figure className="team-logo-container-latest-match">
        <img
          src={updatedLatestMatchDetails.competingTeamLogo}
          alt={`latest match ${updatedLatestMatchDetails.competingTeam}`}
          className="team-logo-latest-match"
        />
      </figure>
      <div className="right-text-container-latest-match">
        <p className="innings-title">First Innings</p>
        <p className="innings-info">{updatedLatestMatchDetails.firstInnings}</p>
        <p className="innings-title">Second Innings</p>
        <p className="innings-info">
          {updatedLatestMatchDetails.secondInnings}
        </p>
        <p className="man-of-the-match">Man Of The Match</p>
        <p className="man-of-the-match-info">
          {updatedLatestMatchDetails.manOfTheMatch}
        </p>
        <p className="umpires-title">Umpires</p>
        <p className="umpires-info">{updatedLatestMatchDetails.umpires}</p>
      </div>
    </div>
  )
}

export default LatestMatch
