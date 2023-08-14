import {
  Budgeting,
  Onboarding,
  Online,
  Api,
} from "../../Assets/images/icons/icons";

import * as data from "../../data";

const Features = () => {
  return (
    <section className="flex flex-col  md:-mt-56 md:h-screen bg-light-grayish-blue cursor-pointer">
      <div className="relative flex flex-col mt-32 w-96 md:text-left text-center mx-auto md:mx-0 md:left-32 md:w-[44rem] md:mt-20">
        <h2 className="  text-5xl  md:text-4xl font-[300]">
          {data.featuresText[0]}
        </h2>
        <p className="text-grayish-Blue text-base md:w-[36.875rem] leading-6  mt-8 ">
          {data.featuresText[1]}
        </p>
      </div>

      <div className="grid md:grid-cols-4 text-center md:text-left mx-auto md:content-between gap-8 mt-20">
        {data.featuresContent.map((item) => (
          <div className="flex flex-col items-center md:items-start w-96 md:w-56">
            <img src={item.imageUrl} alt="" />
            <h3 className="mb-5 text-xl md:text-lg mt-5">{item.title}</h3>
            <p className="text-grayish-Blue text-base md:text-sm leading-6">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Features;
