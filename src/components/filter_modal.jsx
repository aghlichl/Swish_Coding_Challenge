import 'rc-slider/assets/index.css';
import React from 'react';
import Slider from 'rc-slider';

const Range = Slider.Range;
const style = { width: 400, margin: 10 };
const slide_style = { width: 350, margin: 10 };


export default class FilterModal extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            team: '',
            opp_team: '',
            points: [0,100],
            rebounds: [0,100],
            assists: [0,100],
            active: '',
            starter: ''
        }
    }

    showModal() {
        this.setState({
            ...this.state,
            show: true
        })
    }

    selectTeam(e, value) {
        switch(value){
            case 'team':
                this.setState({ team: e.target.value });
                break;
            case 'opp_team':
                this.setState({ opp_team: e.target.value });
                break;
            case 'points':
                this.setState({ points: [e[0], e[1]]});
                break;
            case 'rebounds':
                this.setState({ rebounds: [e[0], e[1]] });
                break;
            case 'assists':
                this.setState({ assists: [e[0], e[1]] });
                break;
            case 'active':
                this.setState({ active: e.target.value });
                break;
            case 'starter':
                this.setState({ starter: e.target.value });
                break;
        }
    }

    onClose(e) {
        this.props.onClose && this.props.onClose(e);
    }
    onSubmit(e) {
        this.props.onClose && this.props.onClose(e);
        this.props.setFilter({...this.state});
    }
    render() {
        if (!this.props.show) {
            return null;
        }
        return (
            
            <div onClick={(e) => { this.onClose(e)}} id="myModal" class="modal">
                <div onClick={(e) => {e.stopPropagation()}}id="internal-modal" >
                <div id='modal-header' className='modal-content'>
                    Advanced Search
                </div>
                <div class="modal-content">
                    <div className='filter-names'>
                        Team:
                    </div>
                    <div>
                    <select style={style} className='drop-down' value={this.state.team} onChange={(e) => this.selectTeam(e, 'team')}>
                            <option data-url="#" value="">Select Team</option>
                            <option data-url="#" value="atl">Atl</option>
                            <option data-url="#" value="bkn">Bkn</option>
                            <option data-url="#" value="bos">Bos</option>
                            <option data-url="#" value="cha">Cha</option>
                            <option data-url="#" value="chi">Chi</option>
                            <option data-url="#" value="cle">Cle</option>
                            <option data-url="#" value="dal">Dal</option>
                            <option data-url="#" value="den">Den</option>
                            <option data-url="#" value="det">Det</option>
                            <option data-url="#" value="gs">GS</option>
                            <option data-url="#" value="hou">Hou</option>
                            <option data-url="#" value="ind">Ind</option>
                            <option data-url="#" value="lac">LAC</option>
                            <option data-url="#" value="lal">LAL</option>
                            <option data-url="#" value="mem">Mem</option>
                            <option data-url="#" value="mia">Mia</option>
                            <option data-url="#" value="mil">Mil</option>
                            <option data-url="#" value="min">Min</option>
                            <option data-url="#" value="no">NO</option>
                            <option data-url="#" value="ny">NY</option>
                            <option data-url="#" value="okc">OKC</option>
                            <option data-url="#" value="orl">Orl</option>
                            <option data-url="#" value="phi">Phi</option>
                            <option data-url="#" value="phx">Phx</option>
                            <option data-url="#" value="por">Por</option>
                            <option data-url="#" value="sa">SA</option>
                            <option data-url="#" value="sac">Sac</option>
                            <option data-url="#" value="tor">Tor</option>
                            <option data-url="#" value="utah">Utah</option>
                            <option data-url="#" value="wsh">Wsh</option>
                    </select>
                    </div>
                </div>
                <div class="modal-content">
                <div>
                    Opposing Team:
                </div>
                <div>
                        <select style={style} className='drop-down' value={this.state.opp_team} onChange={(e) => this.selectTeam(e, 'opp_team')}>
                            <option data-url="#" value="">Select Team</option>
                            <option data-url="#" value="atl">Atl</option>
                            <option data-url="#" value="bkn">Bkn</option>
                            <option data-url="#" value="bos">Bos</option>
                            <option data-url="#" value="cha">Cha</option>
                            <option data-url="#" value="chi">Chi</option>
                            <option data-url="#" value="cle">Cle</option>
                            <option data-url="#" value="dal">Dal</option>
                            <option data-url="#" value="den">Den</option>
                            <option data-url="#" value="det">Det</option>
                            <option data-url="#" value="gs">GS</option>
                            <option data-url="#" value="hou">Hou</option>
                            <option data-url="#" value="ind">Ind</option>
                            <option data-url="#" value="lac">LAC</option>
                            <option data-url="#" value="lal">LAL</option>
                            <option data-url="#" value="mem">Mem</option>
                            <option data-url="#" value="mia">Mia</option>
                            <option data-url="#" value="mil">Mil</option>
                            <option data-url="#" value="min">Min</option>
                            <option data-url="#" value="no">NO</option>
                            <option data-url="#" value="ny">NY</option>
                            <option data-url="#" value="okc">OKC</option>
                            <option data-url="#" value="orl">Orl</option>
                            <option data-url="#" value="phi">Phi</option>
                            <option data-url="#" value="phx">Phx</option>
                            <option data-url="#" value="por">Por</option>
                            <option data-url="#" value="sa">SA</option>
                            <option data-url="#" value="sac">Sac</option>
                            <option data-url="#" value="tor">Tor</option>
                            <option data-url="#" value="utah">Utah</option>
                            <option data-url="#" value="wsh">Wsh</option>
                    </select>
                    </div>
                </div>
                
                <div class="modal-content">
                    <div>
                        Points:
                    </div>
                    <div className="sliders">
                        <div>{this.state.points[0]}</div>
                        <div>
                            <Range style={slide_style} onChange={(e) => this.selectTeam(e, 'points')}allowCross={false} defaultValue={[this.state.points[0], this.state.points[1]]} />
                        </div>
                        <div>{this.state.points[1]}</div>
                    </div>
                </div>
                <div class="modal-content">
                    <div>
                        Rebounds:
                    </div>

                    <div className="sliders">
                        <div>{this.state.rebounds[0]}</div>
                            <Range style={slide_style} onChange={(e) => this.selectTeam(e, 'rebounds')} allowCross={false} defaultValue={[this.state.rebounds[0], this.state.rebounds[1]]} />
                        <div>{this.state.rebounds[1]}</div>
                    </div>
                </div>
                <div class="modal-content">
                    <div>
                        Assists:
                    </div>
                    <div className="sliders">
                        <div>{this.state.assists[0]}</div>
                            <Range style={slide_style} onChange={(e) => this.selectTeam(e, 'assists')} allowCross={false} defaultValue={[this.state.assists[0], this.state.assists[1]]} />
                        <div>{this.state.assists[1]}</div>
                    </div>
                </div>
                <div class="modal-content">
                    <div>
                        Active:
                    </div>
                    <div>
                        <select style={style} value={this.state.active} onChange={(e) => this.selectTeam(e, 'active')} className='drop-down'>
                            <option data-url="#" value="">Select</option>
                            <option data-url="#" value="1">Active</option>
                            <option data-url="#" value="0">Inactive</option>
                        </select>
                    </div>
                </div>
                <div class="modal-content">
                    <div>
                        Starter:
                    </div>
                    <div>
                        <select style={style} value={this.state.starter} onChange={(e) => this.selectTeam(e, 'starter')} className='drop-down'>
                                <option data-url="#" value="">Select</option>
                                <option data-url="#" value="1">Starting</option>
                                <option data-url="#" value="0">Not Starting</option>
                            </select>
                    </div>
                </div>
                <div className='modal-buttons'>
                    <button onClick={(e) => { this.onClose(e) }} className='slide_from_left'> Cancel </button>
                    <button onClick={(e) => { this.onSubmit(e) }} className='slide_from_left'> Submit </button>
                </div>
                </div>
            </div>
        )
    }
}