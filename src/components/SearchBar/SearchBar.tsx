import React from "react";
import css from "./SearchBar.module.css";
import { toast } from "react-hot-toast";

interface Props {
  onSetQuery: (query: string) => void;
}

function SearchBar({ onSetQuery }: Props) {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const searchValue = formData.get("search") as string;
    if (!searchValue.trim()) {
      toast.error("Please enter a search term!");
      return;
    }
    onSetQuery(searchValue);
  };

  return (
    <header>
      <form className={css.searchBar} onSubmit={handleSubmit}>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images..."
          name="search"
        />
        <button type="submit">Search</button>
      </form>
    </header>
  );
}

export default SearchBar;
