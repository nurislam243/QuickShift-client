import React, { useState } from 'react';
import DistrictMap from './DistrictMap';

const Coverage = () => {
  const [searchText, setSearchText] = useState('');
  const [submittedText, setSubmittedText] = useState('');

  const handleSearch = () => {
    setSubmittedText(searchText);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-6 text-center text-primary">
        We are available in 64 districts
      </h2>

      {/* Search Box with Button */}
      <div className="flex justify-center gap-2 mb-6">
        <input
          type="text"
          placeholder="Search district..."
          className="input input-bordered w-full max-w-md"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          onClick={handleSearch}
          className="btn btn-primary"
        >
          Search
        </button>
      </div>

      {/* Map */}
      <DistrictMap searchText={submittedText} />
    </div>
  );
};

export default Coverage;
