// Write your code here
import {Component} from 'react'

import Loader from 'react-loader-spinner'

import TeamCard from '../TeamCard'

import './index.css'

class Home extends Component {
  state = {iplTeams: [], isLoading: true}

  componentDidMount() {
    this.getIplTeams()
  }

  getIplTeams = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const {teams} = data
    const formatedData = teams.map(each => ({
      name: each.name,
      id: each.id,
      teamImageUrl: each.team_image_url,
    }))
    this.setState({
      iplTeams: formatedData,
      isLoading: false,
    })
  }

  render() {
    const {iplTeams, isLoading} = this.state

    return (
      <div className="bg-container-home">
        <div className="logo-container-home">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="ipl logo"
            className="logo-home"
          />
          <h1 className="heading-home">IPL Dashboard</h1>
        </div>
        {isLoading ? (
          <div testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} />
          </div>
        ) : (
          <ul className="teams-container-home">
            {iplTeams.map(each => (
              <TeamCard eachData={each} key={each.id} />
            ))}
          </ul>
        )}
      </div>
    )
  }
}

export default Home
