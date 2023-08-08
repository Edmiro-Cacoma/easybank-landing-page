import mockup from "../../Assets/images/image-mockups.png";

const Hero = () => {
  return (
    <section className="relative bg-light-grayish-blue overflow-hidden introMobile h-screen md:intro">
      <div className="flex flex-col md:flex-row-reverse md:justify-between">
        <div className="relative -top-32 ">
          <img
            src={mockup}
            alt=""
            className="hidden relative md:-right-28 md:top-3 md:flex "
            width={700}
          />
          <img src={mockup} alt="" className="md:hidden relative -top-8 " />
        </div>
        <div className="relative flex flex-col -top-32 items-center justify-center md:-top-56 text-center md:text-start md:left-28 p-3 md:w-[28rem] ">
          <h1 className=" text-5xl mb-5">Next generation digital banking</h1>
          <p className="text-grayish-Blue text-base">
            Take your financial life online. Your Easybank account will be a
            one-stop-shop for spending, saving, budgeting, investing, and much
            more.
          </p>

          <div className="relative top-10 md:-left-36">
            <button type="button" className="rounded-full bg-gradient-to-r from-lime-green to-bright-Cyan text-white p-2 "> Request Invite</button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
