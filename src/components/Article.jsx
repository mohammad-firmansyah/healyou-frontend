import"react";

export default function Article({title,img}) {
  return (
    <div className="items-stretch border border-[color:var(--cool-gray-20,#DDE1E6)] shadow-sm  overflow-hidden bg-white flex grow flex-col w-full mx-auto rounded-3xl border-solid max-md:mt-9">
      <img
        loading="lazy"
        srcSet={"assets/"+img}
        height="220"
        className="object-center object-contain"
      />
      
      <div className="p-3">

        <div className="text-zinc-800 text-base font-medium leading-5 mt-6">
          Article
        </div>
        <div className="text-zinc-800 text-xl font-bold leading-6 mt-1 mb-10">
          {title}
        </div>
      <button className="px-4 py-1 text-sm w-24 text-indigo-900 font-semibold rounded-full border border-indigo-900 hover:text-white hover:bg-indigo-900 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-indigo-900 focus:ring-offset-2">
        Baca
      </button>
      </div>

    </div>
  );
}


