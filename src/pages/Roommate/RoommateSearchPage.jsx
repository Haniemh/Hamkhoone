import { useState } from "react";

import { roommates }
from "./fakeData";

import SearchHeader from "./SearchHeader";
import SearchFilters from "./SearchFilters";
import RoommateCard from "./RoommateCard";
import EmptyState from "./EmptyState";
import BottomNav from "../BottomNav";

export default function RoommateSearchPage() {

  const [search, setSearch] =
    useState("");

  const [gender, setGender] =
    useState("all");

  const filteredData =
    roommates.filter((item) => {

      const searchMatch =
        item.fullName
          .toLowerCase()
          .includes(
            search.toLowerCase()
          );

      const genderMatch =
        gender === "all"
          ? true
          : item.gender === gender;

      return (
        searchMatch &&
        genderMatch
      );
    });

  return (
    <div
      dir="rtl"
      className="
        min-h-screen
        bg-[#f5f6fa]
      "
    >
      <div
        className="
          max-w-5xl
          mx-auto
          p-4
          space-y-4
        "
      >

        <SearchHeader />

        <SearchFilters
          search={search}
          setSearch={setSearch}
          gender={gender}
          setGender={setGender}
        />

        {
          filteredData.length === 0
            ? (
              <EmptyState />
            )
            : (
              filteredData.map(
                (roommate) => (
                  <RoommateCard
                    key={roommate.id}
                    roommate={roommate}
                  />
                )
              )
            )
        }

      </div>
      <BottomNav />
    </div>
  );
}