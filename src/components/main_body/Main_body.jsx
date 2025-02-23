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
import Premium_Buttons from "../Buttons/Premium_Buttons";








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



  return (
    <div>
      <section className="main_body">
        <div className="contents flex flex-col items-center justify-center ">
          <div className="rounded border-2 border-solid pt-1 pb-1 pl-4 pr-4 rounded-4xl text-[12px] border-amber-50 mt-45">
            <h6 className="text-white">
              Finding Proffesional Web Developer???{" "}
            </h6>
          </div>

          <h1 className="text-[56px] text-white font-[Lexend] mt-[12px] text-center">
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

      <section className="bg-black h-[260vh] pt-[20px] pb-[60px] lg:h-[80vh]">
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

      <section className="bg-[#000000] h-[80vh] lg:hidden lg:h-[80vh] lg:flex lg:flex-col lg:items-center">
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
      <section className="bg-[#000000] lg:hidden h-[80vh] lg:h-[80vh] lg:flex lg:flex-col lg:items-center">
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

      <div className="css_frameworks_and_best_cms_for_you_box lg:grid lg:grid-cols-2 ">
        <section className="hidden bg-[#000000] h-[80vh] lg:flex lg:h-[80vh] lg:flex lg:flex-col lg:items-center">
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

      <div className="contact_with_us bg-[#000000] h-[100vh] text-white flex flex-col items-center ">
        <Headings title_pink="Contact" title_white="With Us" />

        <form
          className="flex flex-col mx-10  p-10  "
          action=""
        >
          <label
            htmlFor="name"
            className="absolute bg-black -my-2 px-2 text-[15px] ml-[20px]"
          >
            Name :
          </label>
          <input
            type="text"
            className="name w-[400px] lg:w-[600px] mb-6 p-4 rounded-2xl border-pink-400 border-dassed border-2"
            id="name"
            placeholder="Enter Your name"
          />
          <label
            htmlFor="name"
            className="absolute bg-black my-18 absolute bg-black -my-2 px-2 text-[15px] ml-[20px]"
          >
            Email :
          </label>
          <input
            type="text"
            className="email mb-6 p-4 rounded-2xl border-pink-400 border-dassed border-2"
            id="email"
            placeholder="Enter Your Email"
          />
          <label
            htmlFor="name"
            className="absolute bg-black my-40 px-2 text-[15px] ml-[20px]"
          >
            Phone :
          </label>
          <input
            type="text"
            className="name mb-6 p-4 rounded-2xl border-pink-400 border-dassed border-2"
            id="name"
            placeholder="Enter Your Phone Number"
          />
          <label
            htmlFor="messages"
            className="absolute bg-black my-60 rounded-2xl px-2 text-[15px] ml-[20px]"
          >
            Messages :
          </label>
          <input
            type="text"
            className=" p-4 rounded-2xl  border-pink-400 border-dassed border-2"
            name="messages"
            id="messages"
            maxLength="1000"
          />

<Premium_Buttons className="premium_buttons" name="Submit Now "/>
        </form>
      </div>
    </div>
  );
}

export default Main_body
