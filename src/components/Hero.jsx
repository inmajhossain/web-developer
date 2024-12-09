import Heroimg from "../assets/Heroimg.png";
import { AiOutlineBehanceSquare } from "react-icons/ai";
import { AiOutlineFacebook } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillTwitterSquare } from "react-icons/ai";
export default function Hero() {
  return (
    <>
      <section className="w-100vh bg-amber-50 bg-opacity-5 p-[50px] flex items-center justify-between gap-[50px] mx-auto mt-[10px]">
        <div className="lg:w-[1400px] mx-auto lg:flex items-center justify-between">
          <div className="w-[390px] lg:w-[650px]">
            <h1 className="text-[50px] lg:text-[100px] text-center font-bold lg:leading-[100px]">
              WEBSITE DEVELOPER
            </h1>
            <p className="text-center lg:w-[500px] mx-auto text-white text-[20px] mt-[30px]">
              Premium web design, custom, wordpress, and SEO services to help
              your business stand out.
            </p>
            <div className="w-[250px] mx-auto flex items-center justify-between gap-[10px] mt-[30px]">
              <a href="https://www.behance.net/inmajhossain" className="">
                <AiOutlineBehanceSquare className="w-[30px] h-[30px]" />
              </a>
              <a href="https://www.facebook.com/home.php" className="">
                <AiOutlineFacebook className="w-[30px] h-[30px]" />
              </a>
              <a href="https://github.com/inmajhossain" className="">
                <AiFillGithub className="w-[30px] h-[30px]" />
              </a>
              <a href="" className="">
                <AiFillInstagram className="w-[30px] h-[30px]" />
              </a>
              <a href="https://www.linkedin.com/in/inmajhossain/" className="">
                <AiFillLinkedin className="w-[30px] h-[30px]" />
              </a>
              <a href="https://x.com/inmajhossain0" className="">
                <AiFillTwitterSquare className="w-[30px] h-[30px]" />
              </a>
            </div>
          </div>
          <div className="lg:w-[650px] mt-[50px] lg:mt-0">
            <img
              src={Heroimg}
              alt=""
              className="border-[2px] border-amber-100 rounded-full"
            />
          </div>
        </div>
      </section>
    </>
  );
}
