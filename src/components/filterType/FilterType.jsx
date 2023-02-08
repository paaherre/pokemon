
import React, { useState } from 'react'
import './FilterType.css'

const FilterType = ({ pokeTypesFilter, type, idx }) => {

    const [styleFilter, setStyleFilter] = useState('unChecked');

    function changeHandler(e, idx) {
        pokeTypesFilter(e, idx)
        e.target.checked ? setStyleFilter('checked') : setStyleFilter('unChecked')
    }

    return (
        <label className='filterCheckbox'>
            <input type="checkbox" name="" id="" onChange={e => changeHandler(e, idx)} />
            <img className={styleFilter} src={require('../../assets/icons/' + type.name + '.webp')} alt="" />
        </label>
    )
}

export default FilterType