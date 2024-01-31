import { useState, useEffect } from 'react';
import './randomChar.scss';
import mjolnir from '../../resources/img/mjolnir.png';
import Spinner from '../spinner/spinner';
import useMarvelService from '../../services/MarvelService';
import ErrorMessage from '../errorMessage/ErrorMessage';


const RandomChar = () => {

    const [char, setChar] = useState({});

    const {loading, error, getCharacter, clearError} =  useMarvelService();

    const onCharLoaded = (char) => {
        setChar(char);
    }

    const updateChar = () => {
        clearError()
        const id = Math.floor(Math.random() * (1011400 - 1011000) + 1011000) //берём диапозон делаем из него рандом и прибавляем минимальное значение чтобы найти персонажа
        getCharacter(id)
            .then(onCharLoaded) //Когда метод вызывается так то в него сразу передаётся как аргумент результат от промиса
    }

    useEffect(() => {
        updateChar();
    }, [])

    let {description} = char
    if (description === ''){
        description = 'К сожалению на этого персонажа у нас нету данных';
    }

    
    const errorMessage = error ? <ErrorMessage/> : null;
    const spinner = loading ? <Spinner/> : null;
    const content = !(loading || error) ? <View char={char} /> : null;

    return (
        <div className="randomchar">
            {errorMessage}
            {spinner}
            {content}
            <div className="randomchar__static">
                <p className="randomchar__title">
                    Random character for today!<br/>
                    Do you want to get to know him better?
                </p>
                <p className="randomchar__title">
                    Or choose another one
                </p>
                <button className="button button__main" onClick={updateChar}>
                    <div className="inner">
                        try it
                    </div>
                </button>
                <img src={mjolnir} alt="mjolnir" className="randomchar__decoration"/>
            </div>
        </div>
    )

}

const View = ({char}) => {
    const {name, thumbnail, homepage, wiki} = char;
    let {description} = char;
    let emptyImg = false;
    if (thumbnail === 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg'){
        emptyImg = true;
    }
    if (description === ''){
        description = 'К сожалению на этого персонажа у нас нету данных';
    }

    const imgClasses = emptyImg ? 'randomchar__img error' : 'randomchar__img';

    return(
        <div className="randomchar__block">
            <img src={thumbnail} alt="Random character" className={imgClasses}/>
            <div className="randomchar__info">
                <p className="randomchar__name">{name}</p>
                <p className="randomchar__descr">
                    {description}
                </p>
                <div className="randomchar__btns">
                    <a href={homepage} className="button button__main">
                        <div className="inner">homepage</div>
                    </a>
                    <a href={wiki} className="button button__secondary">
                        <div className="inner">Wiki</div>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default RandomChar;