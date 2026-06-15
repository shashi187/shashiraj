import React from 'react'
import { FaShopify } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { FaWordpress } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNode } from "react-icons/fa";
import { SiNestjs } from "react-icons/si";

const logos = [
  { icon: SiMongodb,   label: "MongoDB"   },
  { icon: SiExpress,   label: "Express"   },
  { icon: FaReact,     label: "React"     },
  { icon: FaNode,      label: "Node"      },
  { icon: FaWordpress, label: "WordPress" },
  { icon: FaShopify,   label: "Shopify"   },
  { icon: SiNextdotjs, label: "Next.js"   },
  { icon: SiNestjs,    label: "NestJS"    },
];

const BottomLogos = () => {
  return (
    <div className="w-full py-16">
      <div className="flex animate-scroll">
        {[...logos, ...logos].map((item, index) => (
          <div
            key={index}
            style={{ width: "calc(100vw / 8)" }}   // exactly 8 visible at all times
            className="flex flex-col items-center justify-center gap-2 flex-shrink-0"
          >
            <item.icon className="h-10 w-10 md:h-12 md:w-12 text-white opacity-80 hover:opacity-100 hover:scale-110 transition-all duration-300" />
            <span className="text-xs text-white/60">{item.label}</span>
          </div>
        ))}

      </div>
    </div>
  );
};

export default BottomLogos;