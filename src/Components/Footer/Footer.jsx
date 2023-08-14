import * as data from "../../data"

const Footer = () => {
  return (
    <footer className="bg-dark-blue cursor-pointer text-white py-12 px-8 flex items-center justify-center flex-col lg:flex-row lg:px-20 xl:px-40">
      <div>
        <img
          src={data.menus[1]}
          alt={data.altText[0]}
          className="mx-auto mb- lg:ml-0"
        />
        <ul className="flex justify-center mt-10 gap-5">
          {data.socialIcons.map((item) => (
            <li key={data.socialIcons.indexOf(item)} >
              <a href="/">
                <span className="sr-only">{item["name"]}</span>
                {item["html"]}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <nav aria-label="footer navigation">
        <ul className="py-8 lg:flex lg:flex-col text-center lg:flex-wrap lg:text-left lg:py-0 lg:h-[120px] lg:mx-16">
          {data.footerMenu.map((item) => (
            <li key={item} className="py-1 lg:mx-8">
              <a
                href="/"
                className="text-gray-light transition hover:text-lime-green hover:cursor-pointer"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <div className="flex flex-col lg:ml-auto">
        <button
          type="button"
          className="bg-gradient-to-r from-lime-green to-bright-cyan text-white my-2 px-6 py-3 rounded-full self-center transition lg:self-end hover:brightness-105"
        >
          Request Invite
        </button>
        <p className="text-grayish-blue my-4">{data.copyright}</p>
      </div>
    </footer>
  );
};
export default Footer;
