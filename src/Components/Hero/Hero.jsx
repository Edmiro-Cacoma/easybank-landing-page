import mockup from "../../Assets/images/image-mockups.png";
import * as data from "../../data";

const Hero = () => {
  return (
    <section className="relative bg-light-grayish-blue overflow-hidden introMobile md:intro h-full cursor-pointer">
      <article className="flex flex-col md:flex-row-reverse md:justify-between">
        <picture className="relative -top-32 ">
          <source
            media="min-width:768px"
            srcSet="../../Assets/images/bg-intro-desktop.svg"
          />

          <img
            src={mockup}
            alt=""
            className="hidden relative md:-right-28 md:top-24 md:flex "
            width={700}
          />
          <img src={mockup} alt="" className="md:hidden relative top-10 " />
        </picture>

        <article className="relative flex flex-col  items-center justify-center md:-top-44 text-center md:text-start md:left-28 p-3 md:w-[28rem] ">
          <h1 className=" text-5xl mb-5">{data.HeroText[0]}</h1>
          <p className="text-grayish-Blue text-base leading-6">
            {data.HeroText[1]}
          </p>

          <button
            type="button"
            className="relative md:-left-36 rounded-full bg-gradient-to-r from-lime-green to-bright-Cyan text-white p-4 mt-10"
          >
            Request Invite
          </button>
        </article>
      </article>
    </section>
  );
};
export default Hero;
