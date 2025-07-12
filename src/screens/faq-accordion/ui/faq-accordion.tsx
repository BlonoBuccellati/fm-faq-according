import Image from "next/image";

import { iconMinus, iconPlus, iconStar } from "@/shared/assets";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/shared/ui/accordion";
import { Card, CardTitle, CardHeader, CardContent } from "@/shared/ui/card";

const FaqTitle = () => {
  return (
    <CardTitle className="flex items-center space-x-100">
      <Image
        src={iconStar}
        alt="star"
        width={100}
        height={100}
        className="size-[clamp(1.313rem,0.478rem+3.56vw,2.188rem)]"
      />
      <h1 className="typo-1 text-[clamp(2rem,0.569rem+6.11vw,3.5rem)]">FAQs</h1>
    </CardTitle>
  );
};

type FaqItemProps = {
  value: string;
  title: string;
  content: string;
};
const FaqItem = ({ value, title, content }: FaqItemProps) => {
  return (
    <AccordionItem value={value}>
      <AccordionTrigger
        className="group [&[data-state=closed]_[data-slot=open-icon]]:block [&[data-state=closed]_[data-slot=open-icon]]:rotate-180 [&[data-state=open]_[data-slot=close-icon]]:block [&[data-state=open]_[data-slot=close-icon]]:rotate-180"
        icon={
          <div className="size-[25px] flex-shrink-0">
            <Image
              data-slot="open-icon"
              alt="Expand"
              src={iconPlus}
              className="hidden transition-transform duration-200"
            />
            <Image
              data-slot="close-icon"
              alt="Collapse"
              src={iconMinus}
              className="hidden transition-transform duration-200"
            />
          </div>
        }
      >
        <p className="typo-2 text-[clamp(1rem,0.881rem+0.51vw,1.125rem)] text-purple-950 group-hover:text-[#AD28EB]">
          {title}
        </p>
      </AccordionTrigger>
      <AccordionContent>
        <p className="typo-3 pb-300 text-[clamp(0.875rem,0.756rem+0.51vw,1rem)] text-purple-600">
          {content}
        </p>
      </AccordionContent>
    </AccordionItem>
  );
};

const FaqAccordion = () => {
  return (
    <main className="flex min-h-screen items-center justify-center">
      <Card className="space-y-sm-300-to-md-400 mx-auto w-[clamp(20.438rem,4.156rem+69.47vw,37.5rem)] p-300">
        <CardHeader>
          <FaqTitle />
        </CardHeader>
        <CardContent>
          <Accordion type="single" defaultValue="item-1" collapsible>
            <FaqItem
              value="item-1"
              title="What is Frontend Mentor, and how will it help me?"
              content="Our flagship product combines cutting-edge technology with sleek
          design. Built with premium materials, it offers unparalleled
          performance and reliability."
            />
            <FaqItem
              value="item-2"
              title="Is Frontend Mentor free?"
              content="Yes, Frontend Mentor offers both free and premium coding challenges, with the free
  option providing access to a range of projects suitable for all skill levels."
            />
            <FaqItem
              value="item-3"
              title="Can I use Frontend Mentor projects in my portfolio?"
              content="Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent
  way to showcase your skills to potential employers!"
            />
            <FaqItem
              value="item-4"
              title="How can I get help if I'm stuck on a challenge?"
              content="The best place to get help is inside Frontend Mentor's Discord community. There's a help
  channel where you can ask questions and seek support from other community members."
            />
          </Accordion>
        </CardContent>
      </Card>
    </main>
  );
};

export default FaqAccordion;
