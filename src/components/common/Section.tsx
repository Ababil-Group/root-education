import { ReactNode } from "react";
import SectionName from "../ui/SectionName";
import FadeInDownWithSlowBounce from "@/animation_wrappers/FadeInDownWithSlowBounce";

type TSectionProps = {
  children: ReactNode;
  className?: string;
  sectionName: string;
  title: string;
};

const Section = ({
  children,
  className,
  sectionName,
  title,
}: TSectionProps) => {
  return (
    <section className={`py-[50px] ${className}`}>
      <div className="container">
        <FadeInDownWithSlowBounce>
          <SectionName name={sectionName} position="center" />
        </FadeInDownWithSlowBounce>

        <FadeInDownWithSlowBounce>
          <h2 className="mx-auto mb-10 mt-5 text-center text-4xl font-semibold text-secondary lg:text-4xl">
            {title}
          </h2>
        </FadeInDownWithSlowBounce>
      </div>
      <div>{children}</div>
    </section>
  );
};

export default Section;
