import style from './Search.module.css'
import PropTypes from 'prop-types';


export const Search = ({handleSearch}) => {
    return(
        <label className={style.label} htmlFor="">
            Find contacts by name
            <input className={style.input} onInput={handleSearch} name='filter'></input>
        </label>
    )
};


Search.propTypes = {
    handleSearch: PropTypes.func.isRequired
}