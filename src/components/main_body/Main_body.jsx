import Card from "../Card/Card";
import Headings from "../Headings/Headings";
import "./Main_body.css"
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { BiLogoMongodb } from "react-icons/bi";
import { SiExpress } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaWordpress } from "react-icons/fa";
import My_Name_Logo from "../../assets/images/logo 6.66666.png"
import My_pic from "../../assets/images/mypic.jpg"
import { ImHappy } from "react-icons/im";
import Packages from "../Packages/Packages";
import { FaCartShopping } from "react-icons/fa6";
import { GrBlog } from "react-icons/gr";
import { FaPersonChalkboard } from "react-icons/fa6";
import { useState } from "react";









function Main_body() {

  const ecommerch_ok_services = [
    "User-Friendly Product Browsing",
    "Secure Payment Gateway Integration",
    "Real-Time Order Tracking",
    "Mobile-Responsive Design",
    "Discount and Coupon Management",
   
  ];
  const ecommerch_not_ok_services = [
  "24/7 Live Customer Support",
  "AI-Powered Product Recommendations",
  "Custom Mobile App Integration", 
  ];
  
const blog_ok_services = [
  "SEO-Optimized Content Management",
  "Responsive and Mobile-Friendly Design",
  "Built-in Comment System",
  "Social Media Sharing Integration",
];


  const blog_not_ok_services = [
    "Advanced Analytics and Reporting",
    "Membership/Subscription System",
  ];

  const portfolio_ok_services = [
    "Modern and Responsive Design",
    "Project Showcase with Details",
    "Contact Form Integration",
    "SEO Optimization",
  ];


  const portfolio_not_ok_services = [
    "E-commerce Integration",
    "Client Login Dashboard",
  ];


const [carecterNumber , SetCarecterNumber] = useState(0);

const OncarecterChangeOfTextArea = (e) =>{
  const carecterNumber = e.target.value.length; 
  SetCarecterNumber(carecterNumber);
}

  return (
    <div>
      <section className="main_body w-[100%]">
        <div className="contents flex flex-col items-center justify-center ">
          <div className="rounded border-2 border-solid pt-1 pb-1 pl-4 pr-4 rounded-4xl text-[12px] border-amber-50 mt-40 lg:mt-45">
            <h6 className="text-white ">
              Finding Proffesional Web Developer???{" "}
            </h6>
          </div>

          <h1 className=" text-[40px] lg:text-[56px] text-white font-[Lexend] mt-[12px] text-center">
            Your Passionate Web Developer
          </h1>
          <div className="max-w-[600px]">
            <p className="text-white text-[16px] text-center">
              Hello , I Am Shatadhru Acharjee , A proffesional Web developer .
              Expart in React JS ,Node Js , Express Js , Mongo DB And Wordpress{" "}
            </p>
          </div>

          <div className="gradiant_button justify-center">
            <button className=" get_started_buttons ">Get Started</button>
          </div>
        </div>
      </section>

      <section className="bg-black flex flex-col items-center h-[260vh] pt-[20px] pb-[60px] lg:h-[80vh]">
        <Headings title_pink="Our" title_white="Services" />

        <div className="grid grid-cols-1 grid-rows-6 lg:grid md:grid-cols-2 md:grid md:grid-rows-2 lg:grid-cols-4 lg:flex lg:pr-10 lg:items-center lg:justify-center">
          <Card
            Icon={FaReact}
            size={60}
            name="React JS"
            description="React.js is a JavaScript library for building user interfaces, particularly for single-page applications, using reusable components."
            color="#FF00AA"
            color2="#B3027AFF"
          />
          <Card
            Icon={FaNodeJs}
            size={60}
            name="Node JS"
            description="Node.js is a JavaScript runtime built on Chrome's V8 engine, designed for building scalable network applications with an event-driven, non-blocking I/O model."
            color="#FF00AA"
            color2="#B3027AFF"
          />
          <Card
            Icon={BiLogoMongodb}
            size={60}
            name="Mongo Db"
            description="MongoDB is a NoSQL database that stores data in flexible, JSON-like documents, enabling fast, scalable, and high-performance data storage for modern applications."
            color="#FF00AA"
            color2="#B3027AFF"
          />
          <Card
            Icon={SiExpress}
            size={60}
            name="Express Js"
            description="Express.js is a minimal and flexible Node.js web application framework that simplifies routing, middleware handling, and server-side development for web apps and APIs."
            color="#FF00AA"
            color2="#B3027AFF"
          />
        </div>
      </section>

      <section className="bg-[#000000]  flex flex-col items-center  h-[80vh] lg:hidden lg:h-[80vh] lg:flex lg:flex-col lg:items-center">
        <Headings title_pink="Css" title_white="Frameworks" />
        <Card
          Icon={RiTailwindCssFill}
          size={60}
          name="Tailwind Css"
          description="Tailwind CSS is a utility-first CSS framework that allows you to build custom designs quickly by applying pre-defined utility classes directly in your HTML, giving you full control over styling without writing custom CSS."
          color="#FF00AA"
          color2="#B3027AFF"
        />
      </section>
      <section className="bg-[#000000] flex flex-col items-center  lg:hidden h-[80vh] lg:h-[80vh] lg:flex lg:flex-col lg:items-center">
        <Headings title_pink="Perfect CMS" title_white="For You" />
        <Card
          Icon={FaWordpress}
          size={60}
          name="Wordpress"
          description="WordPress is a popular open-source content management system (CMS) that allows users to create, manage, and publish websites with ease, offering themes and plugins."
          color="#FF00AA"
          color2="#B3027AFF"
        />
      </section>

      <div className="css_frameworks_and_best_cms_for_you_box  lg:grid lg:grid-cols-2 ">
        <section className="hidden bg-[#000000] flex flex-col items-center  h-[80vh] lg:flex lg:h-[80vh] lg:flex lg:flex-col lg:items-center">
          <Headings title_pink="Css" title_white="Frameworks" />
          <Card
            Icon={RiTailwindCssFill}
            size={60}
            name="Tailwind Css"
            description="Tailwind CSS is a utility-first CSS framework that allows you to build custom designs quickly by applying pre-defined utility classes directly in your HTML, giving you full control over styling without writing custom CSS."
            color="#FF00AA"
            color2="#B3027AFF"
          />
        </section>
        <section className=" hidden bg-[#000000] lg:flex h-[80vh] lg:h-[80vh] lg:flex lg:flex-col lg:items-center">
          <Headings title_pink="Perfect CMS" title_white="For You" />
          <Card
            Icon={FaWordpress}
            size={60}
            name="Wordpress"
            description="WordPress is a popular open-source content management system (CMS) that allows users to create, manage, and publish websites with ease, offering themes and plugins."
            color="#FF00AA"
            color2="#B3027AFF"
          />
        </section>
      </div>

      <section className="h-[140vh] bg-[#000000] flex flex-col items-center">
        <Headings title_pink="About" title_white="Me" />
        <img
          src={My_pic}
          className="rounded-[100%] max-w-[260px] mt-4"
          alt=""
        />
        <img src={My_Name_Logo} className="mt-6" alt="" />
        <div className="about_me_paragraphj_box max-w-[1080px]">
          <p className="text-white p-6 text-center text-[12px] lg:text-[16px] ">
            I’m Shatadhru Acharjee, a web developer and UI/UX designer with 4+
            years of experience. As the CEO of Digitalix Bangladesh, I
            specialize in MERN stack development (MongoDB, Express, React,
            Node.js), WordPress development, and SEO strategies that drive
            organic traffic. With expertise in Tailwind CSS, Node.js, MongoDB,
            and Express.js, I build fast, scalable, and user-friendly websites.
            My designs focus on modern UI/UX principles, ensuring a seamless
            experience across devices. I’m passionate about creating dynamic web
            applications and custom websites, delivering high-performance
            solutions for businesses. On my personal site, shatadhru.online, I
            share my work and knowledge to help other developers and designers
            grow. Let's connect for web development, custom WordPress sites, or
            UI/UX design projects!
          </p>
        </div>

        <button
          className="mt-2 flex text-white gap-2 items-center px-6 py-2 rounded-2xl hover:shadow hover:shadow-lg hover:transition-all hover:ease-in-out hover:duration-200 cursor-pointer"
          style={{
            background: `linear-gradient(45deg,#FF00AA,#B3027AFF )`, // Dynamic gradient
          }}
        >
          Hire Me <ImHappy />{" "}
        </button>
      </section>

      <div className="packages bg-black h-auto pb-20 flex flex-col items-center text-white ">
        <Headings title_pink="Special" title_white="Packages" />
        <div className="packages_box lg:grid lg:grid-cols-3">
          <Packages
            name="Ecommerch"
            ok_service={ecommerch_ok_services}
            Not_ok_service={ecommerch_not_ok_services}
            Icon={FaCartShopping}
          />
          <Packages
            name="Blog"
            ok_service={blog_ok_services}
            Not_ok_service={blog_not_ok_services}
            Icon={GrBlog}
          />
          <Packages
            name="Portofolio Website"
            ok_service={portfolio_ok_services}
            Not_ok_service={portfolio_not_ok_services}
            Icon={FaPersonChalkboard}
          />
        </div>
      </div>
      <section className="contact-section bg-gradient-to-b from-gray-900 to-black min-h-screen text-gray-100 flex flex-col items-center py-20 px-6">
        <Headings title_pink="Contact" title_white="Us" />

        <form className="w-full max-w-2xl space-y-8 mt-10">
          {/* Name Field */}
          <div className="relative group">
            <input
              type="text"
              id="name"
              className="w-full px-6 py-4 bg-gray-800/50 border border-gray-700 rounded-lg text-gray-100 placeholder-transparent 
                 focus:border-pink-500 focus:ring-2 focus:ring-pink-500/30 peer transition-all duration-300
                 backdrop-blur-sm hover:border-gray-600"
              placeholder="John Doe"
              required
            />
            <label
              htmlFor="name"
              className="absolute left-6 top-10 text-gray-400 text-sm transition-all duration-200 
                   peer-placeholder-shown:text-base peer-placeholder-shown:top-4
                   peer-focus:top-3 peer-focus:-mt-6 peer-focus:px-2 peer-focus:bg-[#0E1525] peer-focus:text-sm peer-focus:text-pink-400"
            >
              Full Name
            </label>
          </div>

          {/* Contact Group */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Email Field */}
            <div className="relative group">
              <input
                type="email"
                id="email"
                className="w-full px-6 py-4 bg-gray-800/50 border border-gray-700 rounded-lg text-gray-100 placeholder-transparent 
                   focus:border-pink-500 focus:ring-2 focus:ring-pink-500/30 peer transition-all duration-300
                   backdrop-blur-sm peer-focus:-mt-6 peer-focus:px-2 peer-focus:bg-[#0E1525] hover:border-gray-600"
                placeholder="john@company.com"
                required
              />
              <label
                htmlFor="email"
                className="absolute left-6 top-3 text-gray-400 text-sm transition-all duration-200 
                     peer-placeholder-shown:text-base peer-placeholder-shown:top-4
                     peer-focus:top-3 peer-focus:-mt-6 peer-focus:px-2 peer-focus:bg-[#0E1525] peer-focus:text-sm peer-focus:text-pink-400"
              >
                Email Address
              </label>
            </div>

            {/* Phone Field */}
            <div className="relative group">
              <input
                type="tel"
                id="phone"
                className="w-full px-6 py-4 bg-gray-800/50 border border-gray-700 rounded-lg text-gray-100 placeholder-transparent 
                   focus:border-pink-500 focus:ring-2 focus:ring-pink-500/30 peer transition-all duration-300
                   backdrop-blur-sm peer-focus:-mt-6 peer-focus:px-2 peer-focus:bg-[#0E1525] peer-focus:-mt-6 peer-focus:px-2 peer-focus:bg-[#0E1525] hover:border-gray-600"
                placeholder="+1 (555) 000-0000"
              />
              <label
                htmlFor="phone"
                className="absolute left-6 top-3 text-gray-400 text-sm transition-all duration-200 
                     peer-placeholder-shown:text-base peer-placeholder-shown:top-4
                     peer-focus:top-3 peer-focus:-mt-6 peer-focus:px-2 peer-focus:bg-[#0E1525] peer-focus:-mt-6 peer-focus:px-2 peer-focus:bg-[#0E1525] peer-focus:text-sm peer-focus:text-pink-400"
              >
                Phone Number
              </label>
            </div>
          </div>

          {/* Message Field */}
          <div className="relative group">
            <textarea
              id="message"
              rows="6"
              className="w-full px-6 py-4 bg-gray-800/50 border border-gray-700 rounded-lg text-gray-100 placeholder-transparent 
                 focus:border-pink-500 focus:ring-2 focus:ring-pink-500/30 peer resize-y transition-all duration-300
                 backdrop-blur-sm peer-focus:-mt-6 peer-focus:px-2 peer-focus:bg-[#0E1525] hover:border-gray-600"
              placeholder="Enter your message..."
              maxLength="1000"
              onChange={OncarecterChangeOfTextArea}
              required
            ></textarea>
            <label
              htmlFor="message"
              className="absolute left-6 top-3 text-gray-400 text-sm transition-all duration-200 
                   peer-placeholder-shown:text-base peer-placeholder-shown:top-4
                   peer-focus:top-3 peer-focus:-mt-6 peer-focus:px-2 peer-focus:bg-[#0E1525] peer-focus:text-sm peer-focus:text-pink-400"
            >
              Project Details
            </label>
            <span className="absolute right-4 bottom-3 text-sm text-gray-500">
              <span className="text-pink-400">{carecterNumber}</span>/1000
            </span>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="px-8  lg:mr-60 py-3.5 text-lg bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold rounded-lg 
                 hover:scale-[1.02] transition-transform duration-300 shadow-lg hover:shadow-pink-500/20"
            >
              Send Message
            </button>
          </div>
        </form>

        <footer className="mt-20 w-full max-w-7xl border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-gray-400">
            <p className="text-sm mb-4 md:mb-0 text-[12px]">
              © 2025 Shatadhru Innovations. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a
                href="#"
                className="hover:text-pink-400 text-[12px] transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="hover:text-pink-400 text-[12px] transition-colors"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="hover:text-pink-400  text-[12px] transition-colors"
              >
                Contact Support
              </a>
            </div>
          </div>
        </footer>
      </section>
    </div>
  );
}

export default Main_body
