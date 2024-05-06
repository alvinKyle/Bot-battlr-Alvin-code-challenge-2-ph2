import React from 'react'

function SortBar() {


    const handleSortChange = (e) => {
        const sort = e.target.value;
        onSortChange(sort);
    };

  return (
    <div className="sort-bar">
            <label htmlFor="sort">Sort by:</label>
            <select id="sort" onChange={handleSortChange}>
                <option value="health">Health</option>
                <option value="damage">Damage</option>
                <option value="armor">Armor</option>
            </select>
        </div>
  )
}

export default SortBar