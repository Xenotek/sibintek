import React, {Component} from 'react'
import '../style.css'
import {connect} from 'react-redux'
import {fetchItems} from '../actions'
import Items from '../components/Items'

class App extends Component {

    componentDidMount() {
        this.props.fetchItems()
    }

    render() {
        return (
            <div className="app">
                { this.props.loading ?
                    <div>Загрузка...</div> :
                    <Items items={this.props.items} /> }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        items: state.fetchItems.items,
        loading: state.fetchItems.isFetching
    }
}

export default connect(mapStateToProps, {fetchItems})(App)
