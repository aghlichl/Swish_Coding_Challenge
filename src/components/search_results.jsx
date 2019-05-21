import React from 'react';

export default class SearchResults extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputBox: '',
            userControl: this.props.masterList

            //defaultValues
            //values
        }
        // this.handleClick = this.handleClick.bind(this);
    }

    handleInput() {
        return (e) => {
            this.setState({ inputBox: e.target.value });
        };
    }

    handleChange() {
        return (e) => {
            console.log(this.state.userControl);
            this.setState({ userControl: e.target.value });
        }
    }



    render() {
        function handleClick(e) {
            e.preventDefault();
            console.log(e);
        }
        let playerList = this.props.masterList.filter(player => {
            return ((player.name.toLocaleLowerCase()).indexOf(this.state.inputBox)) !== -1
        })
        return (
            <>
                <input className="fund-page-search"
                    placeholder="Search Player"
                    onChange={this.handleInput()}
                    autoFocus
                />
                <table>
                    <thead>
                        <tr>
                            <th>Team</th>
                            <th>Player</th>
                            <th>Opponent</th>
                            <th>Points</th>
                            <th>Rebounds</th>
                            <th>Assists</th>
                            <th>Starter</th>
                            <th>Active</th>
                        </tr>
                    </thead>
                    <tbody>
                        {playerList.map(player => {
                            return (<tr>
                                <td>{player.team_abbr}</td>
                                <td>{player.name}</td>
                                <td>{player.opp_abbr}</td>
                                <td><input className='inputStat' onChange={this.handleChange(player.id)} defaultValue={player.points}></input></td>
                                <td><input className='inputStat' onChange={this.handleChange(player.id)} defaultValue={player.rebounds}></input></td>
                                <td><input className='inputStat' onChange={this.handleChange(player.id)} defaultValue={player.assists}></input></td>
                                <td>{player.starter === 1 ? <input type="checkbox" defaultChecked></input> : <input type="checkbox"></input>}</td>
                                <td>{player.active === 1 ? <input type="checkbox" defaultChecked></input> : <input type="checkbox"></input>}</td>
                                <td><button onClick={handleClick}>DEFAULT</button></td>
                            </tr>)
                        })}
                    </tbody>
                </table>
            </>
        )
    }
}
