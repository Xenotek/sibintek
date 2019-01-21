import React, {Component} from 'react'
import moment from 'moment'
import ItemsList from '../components/ItemsList'
import SearchBar from '../components/SearchBar'
import Toolbar from '../components/Toolbar'

class Items extends Component {
    state = {
        items: this.props.items,
        filterKey: 'all',
        term: ''
    }

    filterByKey = (filteredList, filterKey)=>{
        switch (filterKey){
            case 'lastmonth':
                return filteredList.filter(function (item) {
                    const time = moment(item.date)
                    return time.month()===moment().month() && time.year()===moment().year()
                })
            case 'lastyear':
                return filteredList.filter(function (item) {
                    return moment(item.date).year()===2018
                })
            default: return filteredList
        }
    }

    filterListByTerm = (term) => {
        let filteredList = [...this.props.items]

        let filterKey = this.state.filterKey;
        if (filterKey !== 'all') {
            filteredList = this.filterByKey(filteredList, filterKey)
        }

        if (term) {
            filteredList = filteredList.filter(function (item) {
                return item.title.toLowerCase().includes(term)
            })
        }

        this.setState({
            items: filteredList,
            term
        })
    }

    filterListByKey = (filterKey) => {
        let filteredList = [...this.props.items]

        if (filterKey !== 'all') {
            filteredList = this.filterByKey(filteredList, filterKey)
        }

        let term = this.state.term;
        if (term) {
            filteredList = filteredList.filter(function (item) {
                return item.title.toLowerCase().includes(term)
            })
        }

        this.setState({
            items: filteredList,
            filterKey
        })

    }

    render() {
        return (
            <div>
                <Toolbar setFilter={this.filterListByKey}/>
                <SearchBar filter={this.filterListByTerm}/>
                { this.state.items.length ? <ItemsList items={this.state.items}/> : <div>Не найдено</div> }
            </div>
        )
    }
}

export default Items
