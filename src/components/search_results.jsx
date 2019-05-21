import React from 'react';
import merge from 'lodash/merge';


export default class SearchResults extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputBox: '',
            userControl: this.props.masterList

            //defaultValues
            //values
        }
        this.handleClick = this.handleClick.bind(this);
        this.onToggleStarter = this.onToggleStarter.bind(this);
        this.onToggleActive = this.onToggleActive.bind(this);
    }

    componentDidMount(){
        let url = 'http://localhost:3000/api.json';
        let that = this;
        fetch(url)
          .then(function(response) {
          return response.json();
        })
        .then(function(data) {
          that.setState({userControl:data});
        }).catch(err => {console.log("The error is:",err)})
    }
    



    handleClick(id) {
        console.log("Some id", id);
    }


    handleChange(e, id, attribute) {
        let newUserControl = merge([], this.state.userControl);
        if(attribute === 'POINTS'){
            newUserControl[id-1].points = e.target.value;

            this.setState({ userControl: newUserControl });
        }
        else if (attribute === 'ASSISTS'){
            newUserControl[id - 1].assists = e.target.value;

            this.setState({ userControl: newUserControl });
        }
        else if (attribute === 'REBOUNDS'){
            newUserControl[id - 1].rebounds = e.target.value;

            this.setState({ userControl: newUserControl });
        }
      
    }

    onToggleStarter(id) {
        let currPlayer = this.state.userControl[id - 1]
        let newUserControl = merge([], this.state.userControl);
        if (currPlayer.starter === 1) {
            newUserControl[id - 1].starter = 0;
            this.setState({ userControl: newUserControl });
        }
        else{
            newUserControl[id - 1].starter = 1;
            this.setState({ userControl: newUserControl });
        }
    }
    onToggleActive(id) {
        let currPlayer = this.state.userControl[id - 1]
        let newUserControl = merge([], this.state.userControl);
        if (currPlayer.active === 1) {
            newUserControl[id - 1].active = 0;
            this.setState({ userControl: newUserControl });
        }
        else {
            newUserControl[id - 1].active = 1;
            this.setState({ userControl: newUserControl });
        }
    }

    handleReset(id) {

            let defaultPlayer = this.props.masterList[id - 1]
        let newUserControl = merge([], this.state.userControl);  
        newUserControl[id - 1] = defaultPlayer;
            this.setState({ userControl: newUserControl });
    }

    handleSearch(e){
        this.setState({inputBox: e.target.value})
    }



    render() {
        let playerList = this.state.userControl.filter(player => {
            return ((player.name.toLowerCase()).indexOf(this.state.inputBox.toLowerCase())) !== -1
        })

        function formatTeamPhoto(team){
            if (team === "ATL") {
                return "https://a.espncdn.com/combiner/i?img=/i/teamlogos/nba/500/atl.png&h=80&w=80&scale=crop"
            }
            else if (team === "BOS") {
                return "https://a.espncdn.com/combiner/i?img=/i/teamlogos/nba/500/bos.png&h=80&w=80&scale=crop"
            }
            else if (team === "BKN") {
                return "https://a.espncdn.com/combiner/i?img=/i/teamlogos/nba/500/bkn.png&h=80&w=80&scale=crop"
            }
            else if (team === "CHA") {
                return "https://a.espncdn.com/combiner/i?img=/i/teamlogos/nba/500/cha.png&h=80&w=80&scale=crop"
            }
            else if (team === "CHI") {
                return "https://a.espncdn.com/combiner/i?img=/i/teamlogos/nba/500/chi.png&h=80&w=80&scale=crop"
            }
            else if (team === "CLE") {
                return "https://a.espncdn.com/combiner/i?img=/i/teamlogos/nba/500/cle.png&h=80&w=80&scale=crop"
            }
            else if (team === "DAL") {
                return "https://a.espncdn.com/combiner/i?img=/i/teamlogos/nba/500/dal.png&h=80&w=80&scale=crop"
            }
            else if (team === "DEN") {
                return "https://a.espncdn.com/combiner/i?img=/i/teamlogos/nba/500/den.png&h=80&w=80&scale=crop"
            }
            else if (team === "DET") {
                return "https://a.espncdn.com/combiner/i?img=/i/teamlogos/nba/500/det.png&h=80&w=80&scale=crop"
            }
            else if (team === "GSW") {
                return "https://a.espncdn.com/combiner/i?img=/i/teamlogos/nba/500/gs.png&h=80&w=80&scale=crop"
            }
            else if (team === "HOU") {
                return "https://a.espncdn.com/combiner/i?img=/i/teamlogos/nba/500/hou.png&h=80&w=80&scale=crop"
            }
            else if (team === "IND") {
                return "https://a.espncdn.com/combiner/i?img=/i/teamlogos/nba/500/ind.png&h=80&w=80&scale=crop"
            }
            else if (team === "LAC") {
                return "https://a.espncdn.com/combiner/i?img=/i/teamlogos/nba/500/lac.png&h=80&w=80&scale=crop"
            }
            else if (team === "LAL") {
                return "https://a.espncdn.com/combiner/i?img=/i/teamlogos/nba/500/lal.png&h=80&w=80&scale=crop"
            }
            else if (team === "MEM") {
                return "https://a.espncdn.com/combiner/i?img=/i/teamlogos/nba/500/mem.png&h=80&w=80&scale=crop"
            }
            else if (team === "MIA") {
                return "https://a.espncdn.com/combiner/i?img=/i/teamlogos/nba/500/mia.png&h=80&w=80&scale=crop"
            }
            else if (team === "MIL") {
                return "https://a.espncdn.com/combiner/i?img=/i/teamlogos/nba/500/mil.png&h=80&w=80&scale=crop"
            }
            else if (team === "MIN") {
                return "https://a.espncdn.com/combiner/i?img=/i/teamlogos/nba/500/min.png&h=80&w=80&scale=crop"
            }
            else if (team === "NO") {
                return "https://a.espncdn.com/combiner/i?img=/i/teamlogos/nba/500/no.png&h=80&w=80&scale=crop"
            }
            else if (team === "NYK") {
                return "https://a.espncdn.com/combiner/i?img=/i/teamlogos/nba/500/ny.png&h=80&w=80&scale=crop"
            }
            else if (team === "OKC") {
                return "https://a.espncdn.com/combiner/i?img=/i/teamlogos/nba/500/okc.png&h=80&w=80&scale=crop"
            }
            else if (team === "ORL") {
                return "https://a.espncdn.com/combiner/i?img=/i/teamlogos/nba/500/orl.png&h=80&w=80&scale=crop"
            }
            else if (team === "PHI") {
                return "https://a.espncdn.com/combiner/i?img=/i/teamlogos/nba/500/phi.png&h=80&w=80&scale=crop"
            }
            else if (team === "PHX") {
                return "https://a.espncdn.com/combiner/i?img=/i/teamlogos/nba/500/phx.png&h=80&w=80&scale=crop"
            }
            else if (team === "POR") {
                return "https://a.espncdn.com/combiner/i?img=/i/teamlogos/nba/500/por.png&h=80&w=80&scale=crop"
            }
            else if (team === "SAC") {
                return "https://a.espncdn.com/combiner/i?img=/i/teamlogos/nba/500/sac.png&h=80&w=80&scale=crop"
            }
            else if (team === "SA") {
                return "https://a.espncdn.com/combiner/i?img=/i/teamlogos/nba/500/sa.png&h=80&w=80&scale=crop"
            }
            else if (team === "TOR") {
                return "https://a.espncdn.com/combiner/i?img=/i/teamlogos/nba/500/tor.png&h=80&w=80&scale=crop"
            }
            else if (team === "UTH") {
                return "https://a.espncdn.com/combiner/i?img=/i/teamlogos/nba/500/utah.png&h=80&w=80&scale=crop"
            }
            else if (team === "WAS") {
                return "https://a.espncdn.com/combiner/i?img=/i/teamlogos/nba/500/wsh.png&h=80&w=80&scale=crop"
            }
        }
        console.log("player_list", playerList);
        return (
            <>
                <img className='swish-logo' src='https://swishanalytics.com/style/assets/img/homepage/planet-swish-modal.png'></img>
                <input className="search-bar"
                    placeholder="🔍Search Player"
                    onChange={(e) => this.handleSearch(e)}
                    autoFocus
                />
                <table>
                    <thead>
                        <tr className='tbl-header'>
                            <th>Team</th>
                            <th>Player</th>
                            <th>Opponent</th>
                            <th>Points</th>
                            <th>Rebounds</th>
                            <th>Assists</th>
                            <th>Starter</th>
                            <th>Active</th>
                            <th>Reset</th>
                        </tr>
                    </thead>

                    <tbody className='tbl-content'>
                        {playerList.map((p, i) => {
                            console.log(i);
                            return (<tr key={i} className={'row' + (i%2 === 0 ? '-even' : '-odd')}>
                                <td><img className='team-photo' src={formatTeamPhoto(p.team_abbr)}></img></td>
                                <td>{p.name}</td>
                                <td><img className='team-photo' src={formatTeamPhoto(p.opp_abbr)}></img></td>
                                <td><input className='input-stat' onChange={(e) => this.handleChange(e, p.player_id, 'POINTS')} value={p.points}></input></td>
                                <td><input className='input-stat' onChange={(e) => this.handleChange(e, p.player_id, 'REBOUNDS')} value={p.rebounds}></input></td>
                                <td><input className='input-stat' onChange={(e) => this.handleChange(e, p.player_id, 'ASSISTS')} value={p.assists}></input></td>
                                <td>{<input onChange={() => this.onToggleStarter(p.player_id)} type="checkbox" checked={p.starter === 1}></input>}</td>
                                <td>{<input onChange={() => this.onToggleActive(p.player_id)} type="checkbox" checked={p.active === 1}></input>}</td>
                                <td><button className='slide_from_left' onClick={() => this.handleReset(p.player_id)}><i class="fas fa-redo-alt"></i></button></td>
                            </tr>)
                        })}
                    </tbody>
                </table>
            </>
        )
    }
}
