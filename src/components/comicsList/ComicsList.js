import { useState, useEffect, useRef } from 'react';
import './comicsList.scss';
import useMarvelService from '../../services/MarvelService';
import ErrorMessage from '../errorMessage/ErrorMessage';
import Spinner from '../spinner/spinner';
import { Link } from 'react-router-dom';

const ComicsList = (props) => {

    const [comics, setComics]  = useState([]);
    const [newComicsLoading, setNewComicsLoading] = useState(false);
    const [offset, setOffset] = useState(210);
    const [comicsEnded, setComicsEnded] = useState(false);

    const {loading, error, getAllComics} = useMarvelService();

    useEffect((offset, initial) => {
        onRequest(offset, true)
        console.log('request')
    }, []);

    const onRequest = (offset, initial) => {
        initial ? setNewComicsLoading(false) : setNewComicsLoading(true)
        getAllComics(offset)
            .then(onComicsLoaded)
    }

    const onComicsLoaded = (newComicsList) => {

        let ended = false;

        if (newComicsList.length < 8) {
            ended = true;
        }

        setComics(comics => [...comics, ...newComicsList]);
        setNewComicsLoading(false);
        setOffset(offset => +offset + 8);
        setComicsEnded(comicsEnded => ended);
    }

    console.log('Listing!')

    let itemRefs = useRef([]);

    function renderItems(arr) {
        const items =  arr.map((item, i) => {

            
            return (
                <li 
                    className="comics__item"
                    tabIndex={0}
                    ref={el => itemRefs.current[i] = el}
                    key={i}>
                    
                    <Link to={`/comics/${item.id}`}>
                        <img src={item.thumbnail} alt="ultimate war" className="comics__item-img"/>
                        <div className="comics__item-name">{item.title}</div>
                        <div className="comics__item-price">{item.price}$</div>
                    </Link>
                </li>
            )
        });
        // А эта конструкция вынесена для центровки спиннера/ошибки
        return items
    }

    const items = renderItems(comics);
    
    const spinner = loading && !newComicsLoading ? <Spinner/> : null
    const errorMessage = error ? <ErrorMessage/> : null;


    return (
        <div className="comics__list">
            <ul className="comics__grid">
                {spinner}
                {errorMessage}
                {items}
            </ul>
            <button
                className="button button__main button__long"
                disabled={newComicsLoading}
                style={{
                    'display': comicsEnded ? 'none' : 'block'
                }}
                onClick={() => onRequest(offset)}
                >
                <div className="inner">load more</div>
            </button>
        </div>
    )
}

export default ComicsList;