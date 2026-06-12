export default function AdInfoSection({ ad }) {

    return (
      <div className="bg-white rounded-[35px] p-6">
  
        <h2 className="font-bold text-xl mb-4">
          توضیحات
        </h2>
  
        <p className="leading-9">
          {ad.about}
        </p>
  
      </div>
    );
  }