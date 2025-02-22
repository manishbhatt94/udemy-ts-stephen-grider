import React, { useState } from "react";

import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";

export const RepositoriesList: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { searchRepositories } = useActions();
  const { data, error, loading } = useTypedSelector(
    (state) => state.repositories
  );

  const handleRepositorySearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    searchRepositories(searchTerm);
  };

  return (
    <article>
      <form onSubmit={handleRepositorySearch}>
        <label htmlFor="searchTerm"></label>
        <input
          type="search"
          name="searchTerm"
          id="searchTerm"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type="submit">Search 🔍</button>
      </form>
      <section>
        {error && <h3>{error}</h3>}
        {loading && <h3>Loading...</h3>}
        {!error && !loading && (
          <ul>
            {data.map((name) => (
              <li key={name}>{name}</li>
            ))}
          </ul>
        )}
      </section>
    </article>
  );
};
