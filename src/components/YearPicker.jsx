import React, { useState } from 'react';

const YearPicker = () => {
  const currentYear = new Date().getFullYear();
  const [selectedYear, setSelectedYear] = useState(currentYear);

  const years = Array.from({ length: 10 }, (_, index) => currentYear - index);

  const handleYearChange = (e) => {
    setSelectedYear(parseInt(e.target.value, 10));
  };

  return (
    <select className="yearPicker" value={selectedYear} onChange={handleYearChange}>
      {years.map((year) => (
        <option key={year} value={year}>
          {year}
        </option>
      ))}
    </select>
  );
};

export default YearPicker;
