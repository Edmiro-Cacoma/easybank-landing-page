import * as data from "../../data";

const Articles = () => {
  return (
    <section className="px-5 py-5 cursor-pointer">
      <h3 className="text-4xl p-10">Latest Articles</h3>

      <article className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto bg-very-light-gray p-8">
        {data.articlesContent.map((item) => (
          <div className="bg-white rounded-md " key={item.title}>
            <img
              src={item.picture}
              alt={item.pictureAlt}
              className="rounded-t-lg md:h-56 md:object-cover w-full lg:w-72"
            />
            <div className="p-5">
              <h5 className="text-sm text-slate-800 opacity-75">
                By {item.author}
              </h5>

              <h4 className="text-xl mt-4 hover:text-lime-green">
                {item.title}
              </h4>

              <p className="mt-6  text-sm leading-6 text-slate-400">
                {item.description}
              </p>
            </div>
          </div>
        ))}

        </article>
      
    </section>
  );
};
export default Articles;
