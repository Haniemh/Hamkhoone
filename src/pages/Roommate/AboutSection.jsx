export default function AboutSection({
    about
  }) {
    return (
      <div
        className="
          bg-white
          rounded-[28px]
          p-5
        "
      >
        <h2
          className="
            font-bold
            text-lg
            mb-4
          "
        >
          درباره من
        </h2>
  
        <div
          className="
            bg-indigo-50
            rounded-2xl
            p-4
          "
        >
          <p
            className="
              leading-8
              text-gray-700
            "
          >
            {about}
          </p>
        </div>
      </div>
    );
  }