import"react";

export default function Article() {
  return (
    <div className="items-stretch border border-[color:var(--cool-gray-20,#DDE1E6)] shadow-sm bg-white flex grow flex-col w-full mx-auto pb-12 rounded-3xl border-solid max-md:mt-9">
      <img
        loading="lazy"
        srcSet="..."
        className="aspect-[1.09] object-contain object-center w-full justify-center items-center overflow-hidden"
      />
      <div className="text-zinc-800 text-base font-medium leading-5 mt-6">
        Artikel
      </div>
      <div className="text-zinc-800 text-xl font-bold leading-6 mt-1 mb-10">
        Perjuangan Relawan bandung dalam menyelamatkan kucing
      </div>
    </div>
  );
}


