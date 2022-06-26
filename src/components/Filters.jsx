import { useState, useEffect } from 'react';

const Filters = ({ filter, setFilter }) => {
  return (
    <div className='filter shade container'>
      <form action=''>
        <div className='field'>
          <label>Spends Filter</label>
          <select value={filter} onChange={(e) => setFilter(e.target.value)}>
            <option value=''>-- All --</option>
            <option value='food'>Food</option>
            <option value='health'>Health</option>
            <option value='home'>Home</option>
            <option value='leisure'>Leisure</option>
            <option value='saving'>Saving</option>
            <option value='subscriptions'>Subscriptions</option>
            <option value='various'>Various</option>
          </select>
        </div>
      </form>
    </div>
  );
};

export default Filters;
