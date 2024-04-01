import React from 'react';

const SearchBar = () => {
    const categories = [
        'Natureza',
        'Pessoas',
        'Tecnologia',
        'Animais',
        'Esportes',
    ]
    return (
        <div className="searchBar">
            <input type="text" placeholder='Pesquise por algumas fotos' />
            <button>Pesquisar</button>
            <select>
                {categories.map((category) => (
                    <option key={category} value={category}>
                        {category}
                    </option>
                ))}
            </select>
        </div>
    )
};

export default SearchBar;