import React from "react";
import { gsap } from "gsap";

import "@/style/FlowingMenu.css";

interface MenuItemProps {
  link: string;
  text: string;
  image: string;
  ind: string;
  marqueeBackgroundColor?: string;
  spanTextColor?: string;
  roundedDivBackgroundColor?: string;
  roundedDivTextColor?: string;
}

interface FlowingMenuProps {
  items?: MenuItemProps[];
  marqueeBackgroundColor?: string;
  spanTextColor?: string;
  roundedDivBackgroundColor?: string;
  roundedDivTextColor?: string; 
}

const FlowingMenu: React.FC<FlowingMenuProps> = ({ items = [],  marqueeBackgroundColor,
  spanTextColor,
  roundedDivBackgroundColor, roundedDivTextColor}) => {
  return (
    <div className="menu-wrap lg:mb-[6.711vh] md:mb-[4.711vh] mb-[2.711vh]">
      <nav className="menu">
        {items.map((item, idx) => (
          <MenuItem key={idx} {...item} 
            marqueeBackgroundColor={marqueeBackgroundColor}
            spanTextColor={spanTextColor}
            roundedDivBackgroundColor={roundedDivBackgroundColor} 
            roundedDivTextColor={roundedDivTextColor}/>
        ))}
      </nav>
    </div>
  );
};

const MenuItem: React.FC<MenuItemProps> = ({ 
  link, 
  text, 
  image: _image, // eslint-disable-line @typescript-eslint/no-unused-vars
  ind,
  marqueeBackgroundColor,
  spanTextColor,
  roundedDivBackgroundColor,
  roundedDivTextColor
}) => {
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
        <span
          className="lg:!text-[3.221vh] md:!text-[2.821vh] !text-[2.021vh]  !font-special-gothic-expanded-one leading-[4.174vh]"
          style={{ color: spanTextColor || "#e0ef29" }}
        >
          {text}
        </span>
        <div
          className="lg:!text-[3.221vh] md:!text-[2.821vh] !text-[2.021vh] lg:min-w-[11.745vh] min-w-[7.745vh] md:min-w-[9.745vh] rounded-full text-center font-special-gothic-expanded-one leading-[4.174vh]"
          style={{
            backgroundColor: roundedDivBackgroundColor || "#e0ef29",
            color: roundedDivTextColor || "#0505cb",
          }}
        >
          {ind.length === 1 ? 0 + ind : ind}
        </div>
      </React.Fragment>
    ));
  }, [text, ind, spanTextColor, roundedDivBackgroundColor, roundedDivTextColor]);

  return (
    <div className="menu__item" ref={itemRef}>
      <a
        className="menu__item-link !font-special-gothic-expanded-one pt-[2.785vh]"
        href={link}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className=" flex flex-row justify-start items-center lg:text-[48px] md:text-[35px] text-[20px]">
          <div className="lg:min-w-[100px] md:min-w-[40px] min-w-[10px] mr-4">
            {ind.length === 1 ? 0 + ind : ind}
          </div>
          <div>{text}</div>
        </div>
      </a>
  <div
        className="marquee"
        ref={marqueeRef}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          overflow: "hidden",
          width: "100%",
          height: "100%",
          pointerEvents: "none",
          backgroundColor: marqueeBackgroundColor || "#0505cb",
          transform: "translate3d(0, 101%, 0)",
          transition: "transform 0.6s ease-expo",
        }}
      >
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
