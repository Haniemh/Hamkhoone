export default function SearchFilters({
    gender,
    setGender,
    search,
    setSearch
  }) {
    return (
      <div className="space-y-4">
  
        <input
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
          placeholder="جستجوی هم اتاقی..."
          className="
            w-full
            h-12
            rounded-2xl
            border
            px-4
            outline-none
          "
        />
  
        <div className="flex gap-2">
  
          <button
            onClick={() =>
              setGender("all")
            }
            className={`
              px-4 py-2 rounded-xl
              ${
                gender === "all"
                  ? "bg-indigo-600 text-white"
                  : "bg-white"
              }
            `}
          >
            همه
          </button>
  
          <button
            onClick={() =>
              setGender("مرد")
            }
            className={`
              px-4 py-2 rounded-xl
              ${
                gender === "مرد"
                  ? "bg-indigo-600 text-white"
                  : "bg-white"
              }
            `}
          >
            آقا
          </button>
  
          <button
            onClick={() =>
              setGender("زن")
            }
            className={`
              px-4 py-2 rounded-xl
              ${
                gender === "زن"
                  ? "bg-indigo-600 text-white"
                  : "bg-white"
              }
            `}
          >
            خانم
          </button>
  
        </div>
      </div>
    );
  }