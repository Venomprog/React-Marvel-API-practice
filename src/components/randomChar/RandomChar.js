import { Component } from 'react';
import './randomChar.scss';
import mjolnir from '../../resources/img/mjolnir.png';
import Spinner from '../spinner/spinner';
import MarvelService from '../../services/MarvelService';
import ErrorMessage from '../errorMessage/ErrorMessage';


class RandomChar extends Component {

    state = {
        char: {},
        loading: true,
        error: false,
        img: true,
    }

    marvelService = new MarvelService();

    onCharLoaded = (char) => {
        this.setState({char, loading: false});
    }

    onError = () => {
        this.setState({loading: false, error: true});
    }

    updateChar = () => {
        const id = Math.floor(Math.random() * (1011400 - 1011000) + 1011000) //берём диапозон делаем из него рандом и прибавляем минимальное значение чтобы найти персонажа
        this.marvelService
            .getCharacter(id)
            .then(this.onCharLoaded) //Когда метод вызывается так то в него сразу передаётся как аргумент результат от промиса
            .catch(this.onError)
    }

    componentDidMount () {
        this.updateChar();
    }



    render(){
        const {char, loading, error, img} = this.state //Деструктуризация из свойства чар достаём все сущности
        let {description} = char
        if (description === ''){
            description = 'К сожалению на этого персонажа у нас нету данных';
        }

        const errorMessage = error ? <ErrorMessage/> : null;
        const spinner = loading ? <Spinner/> : null;
        const content = !(loading || error) ? <View char={char} img={img}/> : null;

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
                    <button className="button button__main" onClick={this.updateChar}>
                        <div className="inner">
                            try it
                        </div>
                    </button>
                    <img src={mjolnir} alt="mjolnir" className="randomchar__decoration"/>
                </div>
            </div>
        )
    }

}


const View = ({char}) => {
    const {name, description, thumbnail, homepage, wiki} = char;
    let emptyImg = false;
    if (thumbnail === 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg'){
        emptyImg = true;
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