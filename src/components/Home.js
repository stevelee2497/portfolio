import React from "react";
import Lottie from "react-lottie";
import dev from "../assets/lottie/dev.json";
import facebook from "../assets/images/facebook.svg";
import github from "../assets/images/github.svg";
import linkedin from "../assets/images/linkedin.svg";
import email from "../assets/images/email.svg";
import phone from "../assets/images/phone.svg";

const Home = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: dev,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div>
      <div className="h-screen relative flex items-center bg-gray-100 text-white justify-center">
        <div className="h-full w-full bg-gradient-to-tr from-purple-700 via-indigo-500 to-blue-500 absolute"></div>
        <p className="z-10 absolute bottom-4 left-4">From @steven with love 💛</p>
        <div className="z-10 flex flex-col md:flex-row p-10 md:p-20 justify-around">
          <div className="font-extralight text-2xl md:text-3xl lg:text-4xl flex flex-col justify-center">
            <p>Hello there.</p>
            <p className="pt-4">
              I'm <span className="font-bold text-3xl md:text-4xl lg:text-5xl">Steven Tran</span>
            </p>
            <p className="pt-4">I'm a Full Stack Developer.</p>
            <p className="pt-8">Find Me on</p>
            <div className="flex pt-4">
              <a href="https://github.com/stevelee2497/" className="flex">
                <img src={github} alt="" className="w-8" />
              </a>
              <a href="https://www.facebook.com/Quoc.de.tien/" className="flex">
                <img src={facebook} alt="" className="w-10 mx-3" />
              </a>
              <a href="https://www.linkedin.com/in/quoc-tran-999a1317b/" className="flex">
                <img src={linkedin} alt="" className="w-7 mx-1" />
              </a>
              <a href="tel:+84-784-836-358" className="flex">
                <img src={phone} alt="" className="w-7 mx-4" />
              </a>
              <a href="mailto:quoctran2124@gmail.com" className="flex">
                <img src={email} alt="" className="w-10 mx-1" />
              </a>
            </div>
          </div>
          <div className="w-full md:w-2/5">
            <Lottie options={defaultOptions} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
