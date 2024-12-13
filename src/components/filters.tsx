import React from 'react';

type QuoteFilterProps = {
  filters: QuoteFilters;
  setFilters: React.Dispatch<React.SetStateAction<QuoteFilters>>; // Changed!
};

const QuoteFilter = ({ filters, setFilters }: QuoteFilterProps) => {
  function handleFilter(e: React.ChangeEvent<HTMLInputElement>) {
    setFilters((filters: QuoteFilters) => ({
      ...filters,
      [e.target.name]: e.target.value,
    }));
  }
  return (
    <section className="flex gap-4">
      <label htmlFor="content-filter">
        Filter by quote content
        <input
          id="content-filter"
          name="content"
          value={filters.content}
          onChange={handleFilter}
          // 👆 This feels like duplicate code.
          placeholder="Filter by quote content"
        />
      </label>
      <label htmlFor="source-filter">
        Filter by source
        <input
          id="source-filter"
          name="source"
          value={filters.source}
          onChange={handleFilter}
          // 👆 This feels like duplicate code.
          placeholder="Filter by source"
        />
      </label>
    </section>
  );
};

export default QuoteFilter;
