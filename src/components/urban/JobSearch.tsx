import { Search } from "lucide-react";
import { useNavigate } from "@tanstack/react-router";
import type { FormEvent } from "react";

function JobSearch({ defaultValue }: { defaultValue?: string }) {
  const navigate = useNavigate();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const q = String(data.get("q") ?? "").trim();
    navigate({ to: "/jobs", search: q ? { q } : {} });
  };

  return (
    <div className="jobSearchWrap">
      <form className="jobsHiringBtnCont" onSubmit={handleSubmit}>
        <div className="searchInputCont">
          <Search className="seach-icon" aria-hidden="true" />
          <input
            className="searchInput"
            type="search"
            name="q"
            defaultValue={defaultValue}
            placeholder="Search jobs or companies"
          />
        </div>
        <input className="searchSubmitBtn" type="submit" value="Search" />
      </form>
    </div>
  );
}

export default JobSearch;
