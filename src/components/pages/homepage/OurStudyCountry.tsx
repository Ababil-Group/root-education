import Section from "@/components/common/Section";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import StudyCountryCard from "./StudyCountryCard";
import FadeInUpWithSlowBounce from "@/animation_wrappers/FadeInUpWithSlowBounce";
// import { getAllCountries } from "@/services/getAllCountries";
import { dummyCountries } from "@/services/Data";
import { Study_Country } from "@/types/country";

const OurStudyCountry = async () => {
  const countries: Study_Country[] = dummyCountries;

  return (
    <Section
      sectionName="Our Study Country"
      title="Explore top global study destinations"
      className="pb-[100px]"
    >
      <FadeInUpWithSlowBounce className="container px-20">
        <Carousel
          opts={{
            align: "start",
          }}
        >
          <CarouselContent>
            {countries.map((country: Study_Country) => (
              <CarouselItem
                className="basis-full md:basis-1/2 xl:basis-1/3"
                key={country.id}
              >
                <StudyCountryCard country={country} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </FadeInUpWithSlowBounce>
    </Section>
  );
};

export default OurStudyCountry;
