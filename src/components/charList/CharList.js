import { Component } from 'react';
import './charList.scss';
import abyss from '../../resources/img/abyss.jpg';
import MarvelService from '../../services/MarvelService';

class CharList extends Component {
    state = {
        chars: [],
    }

    marvelService = new MarvelService();

    onCharsLoaded = (chars) => {
        this.setState({chars})
    }

    updateList = () => {    
        this.marvelService
            .getAllCharacters()
            .then(this.onCharsLoaded)
    }

    componentDidMount() {
        this.updateList()
    }

    render () {
        const {chars} = this.state;
        console.log(chars)

        const elements = chars.map((item, i) => {
            const {name, thumbnail} = item;

            return (
                <li key={i} className="char__item">
                    <img src={thumbnail} alt="abyss"/>
                    <div className="char__name">{name}</div>
                </li>
            )
        })


        return (
            <div className="char__list">
                <ul className="char__grid">
                    {elements}
                    {/* <li className="char__item char__item_selected">
                        <img src={abyss} alt="abyss"/>
                        <div className="char__name">Abyss</div>
                    </li> */}
        
                </ul>
                <button className="button button__main button__long">
                    <div className="inner">load more</div>
                </button>
            </div>
        )
    }
}

export default CharList;