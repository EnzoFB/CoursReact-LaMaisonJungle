import {useState} from 'react'

function Categories({categoriesList, setSelectedCategory, selectedCategory}) {

    const displayPlantCategory = (categories) => <option key={categories}>{categories}</option>

    return <div className="categories">
        <select 
            className="categories-select"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
        >
            <option value=""> - - - </option>
            {categoriesList.map(displayPlantCategory)}
        </select>
    </div>
}

export default Categories