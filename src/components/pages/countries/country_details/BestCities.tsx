import FadeInUpWithSlowBounce from "@/animation_wrappers/FadeInUpWithSlowBounce";
import Section from "@/components/common/Section";
import { Study_Country } from "@/types/country";
import Image from "next/image";

const BestCities = ({ countryInfo }: { countryInfo: Study_Country }) => {
  return (
    <Section
      sectionName="Best Cities Choose by students"
      title={`Best Cities for Studying ${countryInfo.country}`}
    >
      <div className="container">
        <div className="flex flex-wrap items-start justify-center gap-10">
          {countryInfo.cities.map((city) => (
            <FadeInUpWithSlowBounce
              className="min-h-[200px] w-[180px] space-y-4"
              key={city.name}
            >
              <div className="mx-auto size-[150px] rounded-full bg-white p-1">
                <div className="relative mx-auto min-h-full">
                  <Image
                    className="rounded-full border-2 border-dotted border-primary object-cover object-center"
                    src={city.logo as string}
                    alt={city.name}
                    fill
                  />
                </div>
              </div>
              <h3 className="text-center text-2xl font-bold">{city.name}</h3>
            </FadeInUpWithSlowBounce>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default BestCities;
