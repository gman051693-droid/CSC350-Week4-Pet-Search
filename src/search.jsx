function Search({ search, setSearch }) {
  return (
    <div className="mb-4">
      <label className="form-label">Search for an animal</label>

      <input
        type="text"
        className="form-control"
        placeholder="Enter dog, cat, rabbit, pig, or duck"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
}

export default Search;
