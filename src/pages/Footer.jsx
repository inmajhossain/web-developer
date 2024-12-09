import { AiOutlineBehanceSquare } from "react-icons/ai";
import { AiOutlineFacebook } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillTwitterSquare } from "react-icons/ai";

export default function Footer() {
  return (
    <>
      <footer className="w-[1400px] mx-auto footer flex justify-around text-base-content p-10">
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Personal Website</a>
          <a className="link link-hover">Business Website</a>
          <a className="link link-hover">Landing Page</a>
          <a className="link link-hover">Ecommerce Website</a>
          <a className="link link-hover">Redesign Website</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About me</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Project</a>
          <a className="link link-hover">Locate me</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
        <form>
          <h6 className="footer-title">Queries</h6>
          <fieldset className="form-control w-80">
            <label className="label">
              <span className="label-text">Enter your email address</span>
            </label>
            <div className="join">
              <input
                type="text"
                placeholder="username@site.com"
                className="input input-bordered join-item"
              />
              <button className="btn btn-primary join-item">Subscribe</button>
            </div>
          </fieldset>
          <div className="flex items-center justify-between gap-[10px] mt-[20px]">
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
        </form>
      </footer>
      <div className="max-w-full bg-black text-white text-center p-[15px]">
        Made By Inmaj Hossain Shahin (Call or WhatsApp for your website
        +8801515212670)
      </div>
    </>
  );
}
