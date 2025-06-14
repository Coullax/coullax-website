import React from "react";
import { gsap } from "gsap";

import "@/style/FlowingMenu.css";

interface MenuItemProps {
  link: string;
  text: string;
  image: string;
  ind: string;
}

interface FlowingMenuProps {
  items?: MenuItemProps[];
}

const FlowingMenu: React.FC<FlowingMenuProps> = ({ items = [] }) => {
  return (
    <div className="menu-wrap my-[6.711vh]">
      <nav className="menu">
        {items.map((item, idx) => (
          <MenuItem key={idx} {...item} />
        ))}
      </nav>
    </div>
  );
};

const MenuItem: React.FC<MenuItemProps> = ({ link, text, image, ind }) => {
  const itemRef = React.useRef<HTMLDivElement>(null);
  const marqueeRef = React.useRef<HTMLDivElement>(null);
  const marqueeInnerRef = React.useRef<HTMLDivElement>(null);

  const animationDefaults: gsap.TweenVars = { duration: 0.6, ease: "expo" };

  const distMetric = (x: number, y: number, x2: number, y2: number): number => {
    const xDiff = x - x2;
    const yDiff = y - y2;
    return xDiff * xDiff + yDiff * yDiff;
  };

  const findClosestEdge = (
    mouseX: number,
    mouseY: number,
    width: number,
    height: number
  ): "top" | "bottom" => {
    const topEdgeDist = distMetric(mouseX, mouseY, width / 2, 0);
    const bottomEdgeDist = distMetric(mouseX, mouseY, width / 2, height);
    return topEdgeDist < bottomEdgeDist ? "top" : "bottom";
  };

  const handleMouseEnter = (ev: React.MouseEvent<HTMLAnchorElement>) => {
    if (!itemRef.current || !marqueeRef.current || !marqueeInnerRef.current)
      return;
    const rect = itemRef.current.getBoundingClientRect();
    const x = ev.clientX - rect.left;
    const y = ev.clientY - rect.top;
    const edge = findClosestEdge(x, y, rect.width, rect.height);

    const tl = gsap.timeline({ defaults: animationDefaults });

    tl.set(marqueeRef.current, { y: edge === "top" ? "-101%" : "101%" }, 0)
      .set(marqueeInnerRef.current, { y: edge === "top" ? "101%" : "-101%" }, 0)
      .to([marqueeRef.current, marqueeInnerRef.current], { y: "0%" }, 0);
  };

  const handleMouseLeave = (ev: React.MouseEvent<HTMLAnchorElement>) => {
    if (!itemRef.current || !marqueeRef.current || !marqueeInnerRef.current)
      return;
    const rect = itemRef.current.getBoundingClientRect();
    const x = ev.clientX - rect.left;
    const y = ev.clientY - rect.top;
    const edge = findClosestEdge(x, y, rect.width, rect.height);

    const tl = gsap.timeline({ defaults: animationDefaults });

    tl.to(marqueeRef.current, { y: edge === "top" ? "-101%" : "101%" }, 0).to(
      marqueeInnerRef.current,
      { y: edge === "top" ? "101%" : "-101%" },
      0
    );
  };

  const repeatedMarqueeContent = React.useMemo(() => {
    return Array.from({ length: 8 }).map((_, idx) => (
      <React.Fragment key={idx}>
        <span className=" text-[3.221vh] !font-special-gothic-expanded-one leading-[4.174vh] !text-[#e0ef29]">
          {text}
        </span>
        <div className=" text-[3.221vh] min-w-[11.745vh] rounded-full text-center font-special-gothic-expanded-one leading-[4.174vh] bg-[#e0ef29] text-[#0505cb]">
          {ind.length === 1 ? 0 + ind : ind}
        </div>
      </React.Fragment>
    ));
  }, [text, image, ind]);

  return (
    <div className="menu__item" ref={itemRef}>
      <a
        className="menu__item-link !font-special-gothic-expanded-one pt-[2.785vh]"
        href={link}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className=" flex flex-row justify-start items-center">
          <div className=" min-w-[100px] mr-4">
            {ind.length === 1 ? 0 + ind : ind}
          </div>
          <div>{text}</div>
        </div>
      </a>
      <div className="marquee" ref={marqueeRef}>
        <div className="marquee__inner-wrap" ref={marqueeInnerRef}>
          <div className="marquee__inner" aria-hidden="true">
            {repeatedMarqueeContent}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlowingMenu;
