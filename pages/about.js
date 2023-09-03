import React from "react";

const About = () => {
  return (
    <div className="main-body space-y-[30px] pb-[50px] inter">
      <div className="primary-heading capitalize">About hunting coder</div>
      <div className="space-y-[10px] card">
        <div className="secondary-heading capitalize">Introduction</div>
        <div className="primary-paragraph text-justify ">
          {" "}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad eaque
          cupiditate enim magnam adipisci ea? Hic facilis ea non dignissimos.
          Ad, optio quidem vel repellat officiis est autem soluta possimus,
          animi illum laboriosam harum dicta nam! Aperiam nostrum velit fuga
          reiciendis rem alias. Aperiam, exercitationem! Lorem, ipsum dolor sit
          amet consectetur adipisicing elit. Praesentium soluta similique sint
          dicta dolores neque quod eaque, cum commodi vero sapiente nesciunt
          ducimus ullam iusto, corporis incidunt reiciendis a nostrum suscipit
          atque. Officiis quos sunt illo aliquid eveniet esse itaque at
          inventore corporis.
        </div>
      </div>
      <div className=" space-y-[10px] card">
        <div className="secondary-heading capitalize">Service offered</div>
        <div className="primary-paragraph text-justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
          dignissimos repellendus quas nulla sunt beatae animi temporibus quo
          possimus ducimus, tenetur provident veniam placeat voluptatem deserunt
          facilis. Veritatis illum iusto voluptatibus quas enim, ipsa aut neque
          fugit perspiciatis ab numquam maiores ullam mollitia eveniet molestias
          veniam alias. Distinctio, aperiam sunt?
        </div>
        <div>
          <div className="section-heading mt-[20px]">
            We offer following services :
          </div>
            <div className="pl-[20px] py-[10px]">
              <ul className="primary-paragraph space-y-[5px] list-disc font-semibold">
                <li>Service 1</li>
                <li>Service 2</li>
                <li>Service 3</li>
                <li>Service 4</li>
                <li>Service 5</li>
                <li>Service 6</li>
                <li>Service 7</li>
              </ul>
            </div>
        </div>
      </div>
      <div className=" space-y-[10px] card">
        <div className="secondary-heading capitalize">Contact Us</div>
        <div className="primary-paragraph text-justify">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate
          blanditiis sapiente provident minima, quos quod pariatur consectetur
          nihil! Perspiciatis pariatur, omnis sunt magnam numquam quae nam
          adipisci, voluptatem earum, quia veritatis praesentium magni nesciunt
          animi corrupti a temporibus autem nisi esse ipsam delectus sequi!
          Distinctio illum consectetur officiis enim eius nulla sint deserunt
          minima nihil provident!
        </div>
      </div>
    </div>
  );
};

export default About;
