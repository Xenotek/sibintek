import React, {Component} from 'react'
import ItemsList from '../components/ItemsList'
import SearchBar from '../components/SearchBar'

class Items extends Component {
    state = {
        items: this.props.items
    }

    filterList = (text) => {
        let filteredList = this.props.items.filter(function (item) {
            return item.title.toLowerCase().search(text) !== -1
        })
        this.setState({
            items: filteredList
        })
    }

    render() {
        return (
            <div>
                <SearchBar filter={this.filterList}/>
                { this.props.loading ?
                    <div>Загрузка...</div> :
                    <ItemsList items={this.state.items} /> }

            </div>)
    }
}

export default Items