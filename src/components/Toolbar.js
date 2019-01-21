import React, {Component} from 'react'

class Toolbar extends Component {
    state = {
        selected: 'all',
        showFilters: true
    }

    onRadioChanged = (e) => {
        this.setState({selected: e.target.value});
        this.props.setFilter(e.target.value);
    }

    toggleFilters = () => {
        this.setState({showFilters: !this.state.showFilters});
    }

    renderFilters(){
        return (
            <div className="toolbar__filters">
                <div className="toolbar__row">
                    <label><input type='radio' name='filterRadio' value='lastmonth'
                                  checked={this.state.selected === 'lastmonth'}
                                  onChange={this.onRadioChanged}/> За последний месяц</label>
                </div>
                <div className="toolbar__row">
                    <label><input type='radio' name='filterRadio' value='lastyear'
                                  checked={this.state.selected === 'lastyear'}
                                  onChange={this.onRadioChanged}/> В прошлом году</label>
                </div>
                <div className="toolbar__row">
                    <label><input type='radio' name='filterRadio' value='all'
                                  checked={this.state.selected === 'all'}
                                  onChange={this.onRadioChanged}/> Все</label>
                </div>
            </div>
        )
    }

    render() {
        return (
            <div className="toolbar">
                { this.state.showFilters ? this.renderFilters() : null }
                <div className="toolbar__button">
                    <button onClick={this.toggleFilters}>{this.state.showFilters ? 'Свернуть' : 'Развернуть'}</button>
                </div>
            </div>
        )
    }
}

export default Toolbar