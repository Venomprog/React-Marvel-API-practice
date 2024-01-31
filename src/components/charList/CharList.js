import { useState, useEffect, useRef } from 'react';
import './charList.scss';
import useMarvelService from '../../services/MarvelService';
import ErrorMessage from '../errorMessage/ErrorMessage';
import Spinner from '../spinner/spinner';
import PropTypes from 'prop-types'; 


const CharList = (props) => {

    const [chars, setChars] = useState([]);
    const [newItemLoading, setNewItenLoading] = useState(false);
    const [offset, setOffset] = useState(210);
    const [charEnded, setCharEnded] = useState(false);

    const {loading, error, getAllCharacters} =  useMarvelService();

    useEffect((offset, initial) => {
        onRequest(offset, true);
        console.log('request!')
    }, [])


    const onRequest = (offset, initial) => {
        initial ? setNewItenLoading(false) : setNewItenLoading(true)
        getAllCharacters(offset)
            .then(onCharsLoaded)
    }

    const onCharsLoaded = (newCharList) => {

        let ended = false;

        if (newCharList.length < 9) {
            ended = true;
        }

        setChars(chars => [...chars, ...newCharList]);
        setNewItenLoading(false);
        setOffset(offset => +offset + 9);
        setCharEnded(charEnded => ended);
    }
    console.log('Listing!')

    let itemRefs = useRef([]);


    const focusOnItem = (id) => {
        itemRefs.current.forEach(item => item.classList.remove('char__item_selected'));
        itemRefs.current[id].classList.add('char__item_selected');
        itemRefs.current[id].focus();
    }
    

    function renderItems(arr) {
        const items =  arr.map((item, i) => {
            let imgStyle = {'objectFit' : 'cover'};
            if (item.thumbnail === 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg') {
                imgStyle = {'objectFit' : 'unset'};
            }
            
            return (
                <li 
                    className="char__item"
                    tabIndex={0}
                    ref={el => itemRefs.current[i] = el}
                    key={item.id}
                    onClick={() => {
                        props.onCharSelected(item.id);
                        focusOnItem(i);
                    }}
                    onKeyPress={(e) => {
                        if (e.key === ' ' || e.key === "Enter") {
                            props.onCharSelected(item.id);
                            focusOnItem(i);
                        }
                    }}>
                        <img src={item.thumbnail} alt={item.name} style={imgStyle}/>
                        <div className="char__name">{item.name}</div>
                </li>
            )
        });
        // А эта конструкция вынесена для центровки спиннера/ошибки
        return (
            <ul className="char__grid">
                {items}
            </ul>
        )
    }

    const items = renderItems(chars);
    
    const spinner = loading && !newItemLoading ? <Spinner/> : null
    const errorMessage = error ? <ErrorMessage/> : null;


    return (
        <div className="char__list">
            <ul className="char__grid">
                {errorMessage}
                {spinner}
                {items}
            </ul>
            <button 
                className="button button__main button__long"
                disabled={newItemLoading}
                style={{
                    'display': charEnded ? 'none' : 'block'
                }}
                onClick={() => onRequest(offset)}>
                <div className="inner">load more</div>
            </button>
        </div>
    )
}

CharList.propTypes = {
    onCharSelected: PropTypes.func.isRequired
}

export default CharList;