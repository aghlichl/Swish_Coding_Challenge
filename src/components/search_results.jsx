import React from 'react';
import merge from 'lodash/merge';
import FilterModal from './filter_modal';
import { players } from '../api';

export default class SearchResults extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputBox: '',
            userControl: [],
            show: false,
            filters: {
                team: '',
                opp_team: '',
                points: [0, 100],
                rebounds: [0, 100],
                assists: [0, 100],
                active: '',
                starter: ''
            }
        }

        this.onToggle = this.onToggle.bind(this);
        this.setFilter = this.setFilter.bind(this);
        this.formatTeamPhoto = this.formatTeamPhoto.bind(this);
    }

    setFilter(filters) {
        this.setState({ filters });
    }

    componentDidMount() {
        let url = 'http://localhost:3000/api.json';
        let that = this;
        fetch(url)
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                that.setState({ userControl: data });
            })
            .catch(err => { console.log("The error is:", err) })
    }

    handleChange(e, id, attribute) {
        let newUserControl = merge([], this.state.userControl);
        if (attribute === 'POINTS') {
            newUserControl[id - 1].points = e.target.value;

            this.setState({ userControl: newUserControl });
        }
        else if (attribute === 'ASSISTS') {
            newUserControl[id - 1].assists = e.target.value;

            this.setState({ userControl: newUserControl });
        }
        else if (attribute === 'REBOUNDS') {
            newUserControl[id - 1].rebounds = e.target.value;

            this.setState({ userControl: newUserControl });
        }
    }

    onToggle(id, field) {
        let currPlayer = this.state.userControl[id - 1]
        let newUserControl = merge([], this.state.userControl);
        if (currPlayer[field] === 1) {
            newUserControl[id - 1][field] = 0;
            this.setState({ userControl: newUserControl });
        }
        else {
            newUserControl[id - 1][field] = 1;
            this.setState({ userControl: newUserControl });
        }
    }

    handleReset(id) {
        let defaultPlayer = this.props.masterList[id - 1]
        let newUserControl = merge([], this.state.userControl);
        newUserControl[id - 1] = defaultPlayer;
        this.setState({ userControl: newUserControl });
    }

    handleSearch(e) {
        this.setState({ inputBox: e.target.value })
    }

    showModal(){
        this.setState({
            ...this.state,
            show: !this.state.show
        })
    }

    formatTeamPhoto(team) {
        return `https://a.espncdn.com/combiner/i?img=/i/teamlogos/nba/500/${team.toLowerCase()}.png&h=80&w=80&scale=crop`;
    }

    applyFilters(playerList) {
        let filters = this.state.filters;

        
            let team = filters['team'].toLowerCase();
            let opp_team = filters['opp_team'].toLowerCase();
            let points_range = [filters['points'][0], filters['points'][1]]; 
            let rebounds_range = [filters['rebounds'][0], filters['rebounds'][1]]; 
            let assists_range = [filters['assists'][0], filters['assists'][1]];
            let active = filters['active'];
            let starter = filters['starter'];

            playerList = playerList.filter(p => {
                return (
                    (p.team_abbr.toLowerCase() === team || team === '') && 
                    (p.opp_abbr.toLowerCase() === opp_team || opp_team === '') &&
                    (((p.points >= points_range[0]) && (p.points <= (points_range[1]))) || (typeof p.points === 'string')) &&
                    (((p.assists >= assists_range[0]) && (p.assists <= (assists_range[1]))) || (typeof p.assists === 'string')) &&
                    (((p.rebounds >= rebounds_range[0]) && (p.rebounds <= (rebounds_range[1]))) || (typeof p.rebounds === 'string'))&&
                    ((p.starter.toString() === starter) || starter === '')&&
                    ((p.active.toString() === active) || active === '')
                )
            });
        return playerList;
    }

    render() {
        let playerList = this.state.userControl.filter(player => {
            return ((player.name.toLowerCase()).indexOf(this.state.inputBox.toLowerCase())) !== -1
        })
        playerList = this.applyFilters(playerList);


        return (
            <>  
                    <img className='swish-logo'
                        src='https://swishanalytics.com/style/assets/img/homepage/planet-swish-modal.png'
        alt='swish-logo' /> 
                <div className='search-filter'>
                <div className='blank-div'></div>
                <input className="search-bar"
                    placeholder="🔍 Search Player"
                    onChange={(e) => this.handleSearch(e)}
                     />
                    <button id='filter-button' onClick={() => { this.showModal() }}><i className="fas fa-filter"></i>Filter</button>
                </div> 
                <FilterModal masterList={players} onClose={() => { this.showModal() }} show={this.state.show} setFilter={this.setFilter}/>

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
                            return (<tr key={i} className={'row' + (i % 2 === 0 ? '-even' : '-odd')}>
                                <td>
                                    <img className='team-photo' 
                                        src={this.formatTeamPhoto(p.team_abbr)}
                                        alt={p.team_abbr}></img>
                                </td>
                                <td id='player-name'>{p.name}</td>
                                <td>
                                    <img className='team-photo' 
                                        src={this.formatTeamPhoto(p.opp_abbr)}
                                        alt={p.opp_abbr}></img>
                                </td>
                                <td>
                                    <input className='input-stat' 
                                        onChange={(e) => this.handleChange(e, p.player_id, 'POINTS')} 
                                        value={p.points}></input>
                                </td>
                                <td>
                                    <input className='input-stat' 
                                        onChange={(e) => this.handleChange(e, p.player_id, 'REBOUNDS')} 
                                        value={p.rebounds}></input>
                                </td>
                                <td>
                                    <input className='input-stat' 
                                        onChange={(e) => this.handleChange(e, p.player_id, 'ASSISTS')} 
                                        value={p.assists}></input>
                                </td>
                                <td>
                                    <div id='checkbox' className='pretty p-switch p-fill p-bigger p-success'>
                                    <input onChange={() => this.onToggle(p.player_id, 'starter')} 
                                        type="checkbox" 
                                        checked={p.starter === 1}></input>
                                        <div className="state">
                                            <label></label>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div className='pretty p-switch p-fill p-bigger'>
                                    <input onChange={() => this.onToggle(p.player_id, 'active')} 
                                        type="checkbox" 
                                        checked={p.active === 1}></input>
                                        <div className="state">
                                            <label></label>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <button className='slide_from_left' 
                                        onClick={() => this.handleReset(p.player_id)}>
                                        <i className="fas fa-redo-alt"></i>
                                    </button>
                                </td>
                            </tr>)
                        })}
                    </tbody>
                </table>
            </>
        )
    }
}
