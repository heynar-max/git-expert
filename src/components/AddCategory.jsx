import React from 'react'
import { useState } from 'react'

export const AddCategory = ({onNewCategory}) => {
    const [ inputValue, setInputValue ] = useState('');

    const onInputChange = ({ target }) => {
        setInputValue( target.value );
    }

    const onSubmit = ( event ) => {
        event.preventDefault();
        if(inputValue.trim().length <=1 ) return;  //esta funcion se cumple si tiene mas de un caratcer

        // AddCategories(categories =>[ inputValue, ...categories]);
        setInputValue('');
        onNewCategory(inputValue.trim()) ;          //para dejar el label vacio, limpiar input caja de texto
    }
    return (
        <form onSubmit={ onSubmit }>
        <input 
            type="text"
            placeholder="Buscar gifs"
            value={ inputValue }
            onChange={ onInputChange }
        />
    </form>
)
}
