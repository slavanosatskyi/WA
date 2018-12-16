import * as React from 'react';

import { Autocompliter } from '../../Helpers/autocompliter';
import { StarButton } from './StarButton/StarButton.jsx';
import { SelectionList } from './SelectionList/SelectionList.jsx';
import { VerticalDotsButton } from './VerticalDotsButton/VerticalDotsButton.jsx';

import './CitySearch.scss';

//TODO: move list time into separate component

export class CitySearch extends React.Component {
    constructor(props) {
        super();
        this.onChange = this.onChange.bind(this);
        this.onListItemClick = this.onListItemClick.bind(this);
        this.clickFavorite = this.clickFavorite.bind(this);
        this.onVerticalButtonClick = this.onVerticalButtonClick.bind(this); 
        this.state = {
            predictions: []
        }
    }

    render() {
        const favoriteClassName = "autocomplete__favorite";
        const favoriteVisibleClassName = favoriteClassName + "_visible";
        return (
            <div className="autocomplete">
                <input className="autocomplete__input"
                    type="text"
                    placeholder='Enter city here...'
                    value={this.props.value}
                    onChange={this.onChange} 
                />
                <div className="autocomplete__favorite-list-button">
                    <VerticalDotsButton 
                        onClick={this.props.onFavoritesListButtonClick}
                    />
                </div>
                <div className={this.props.value !== '' ? favoriteClassName + " " + favoriteVisibleClassName : favoriteClassName}>
                    <StarButton 
                        onClick={this.clickFavorite}
                        isSelected={this.props.isCityInFavorites} 
                    />
                </div>
                <SelectionList  
                    isOpened={this.props.isAutoCompleteOpened}
                    listItems={this.state.predictions}
                    onListItemClick={this.onListItemClick} 
                />
                <SelectionList
                    isOpened={this.props.isFavoriteListOpened}
                    listItems={this.props.favoritesList}
                    onListItemClick={this.onListItemClick}
                />
            </div>
        );
    }

    onVerticalButtonClick() {
        if (this.props.isFavoriteListOpened) {
            this.props.closeFavoritesList();
        } else {
            this.props.openFavoritesList();
        }
    }

    clickFavorite() {
        if (this.props.isCityInFavorites) {
            this.props.deleteFavorite(this.props.value);
        } else {
            this.props.addFavorite(this.props.value);
        }
    }

    onListItemClick(e) {
        this.props.onListItemClick(e.target.innerText);
    }

    onChange(e) {
        let autocompliter = new Autocompliter();
        autocompliter.getSuggestions(e.target.value, (data) => {
            let cities = [];
            data.predictions.forEach((prediction) => {
                cities.push(prediction.description)
            });
            this.setState({ predictions: cities });
        });
        this.props.onChange(e, this.state.predictions.size === 0);
    }
}