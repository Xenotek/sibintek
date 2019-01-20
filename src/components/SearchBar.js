import React, { Component } from 'react'

class SearchBar extends Component{

    onTextChanged = (e) => {
        let text = e.target.value.trim().toLowerCase();   // удаляем пробелы
        this.props.filter(text); // передаем введенный текст в родительский компонент
    }

    render() {
        return <input placeholder="Поиск" onChange={this.onTextChanged} />;
    }
}

export default SearchBar