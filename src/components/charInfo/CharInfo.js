import { Component } from 'react';
import PropTypes from 'prop-types';
import Spinner from '../spinner/spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';
import Sceleton from '../skeleton/Skeleton'
import './charInfo.scss';
import MarvelService from '../../services/MarvelService';

class CharInfo extends Component {

    state = {
        char: null,
        loading: false,
        error: false,
    }

    
    marvelService = new MarvelService();

    componentDidMount(){
        this.updateChar();
    }

    

    componentDidUpdate(prevProps, prevState){
        if (this.props.charId !== prevProps.charId){
            this.updateChar()
        }
    }

    
    updateChar = () => {
        const {charId} = this.props
        if (!charId){return}

        this.onCharLoading()

        this.marvelService
            .getCharacter(charId)
            .then(this.onCharLoaded)
            .catch(this.onError)

    }

    onCharLoaded = (char) => {
        this.setState({char, loading: false});
    }

    onCharLoading = () => {
        this.setState({
            loading: true,
        })
    }

    onError = () => {
        this.setState({loading: false, error: true});
    }

    render () {

        const {char, loading, error} = this.state

        const sceleton = char || loading || error ? null : <Sceleton/>
        const errorMessage = error ? <ErrorMessage/> : null;
        const spinner = loading ? <Spinner/> : null;
        const content = !(loading || error || !char) ? <View char={char}/> : null;

        return (
            <div className="char__info">
                {sceleton}
                {errorMessage}
                {spinner}
                {content}
            </div>
        )
    }
}

const View = ({char}) => {

    const {name, description, homepage, wiki, thumbnail, comics} = char;



    return (
        <>
            <div className="char__basics">
                <img src={thumbnail} alt={name}/>
                <div>
                    <div className="char__info-name">{name}</div>
                    <div className="char__btns">
                        <a href={homepage} className="button button__main">
                            <div className="inner">homepage</div>
                        </a>
                        <a href={wiki} className="button button__secondary">
                            <div className="inner">Wiki</div>
                        </a>
                    </div>
                </div>
            </div>
            <div className="char__descr">
                {description}
            </div>
            <div className="char__comics">Comics:</div>
            <ul className="char__comics-list">
                {
                    comics.length > 0 ? null : 'There is no comics with this character'

                }
                {
                    comics.map((item, i) => {
                        // eslint-disable-next-line
                        if (i > 9) return;
                        return (
                            <li key={i} className="char__comics-item">
                                    {item.name}
                            </li>
                        )
                    })
                }
            </ul>
        </>
    )
}

CharInfo.propTypes = {
    charId: PropTypes.number
}

export default CharInfo;