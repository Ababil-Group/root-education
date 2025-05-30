import { Study_Country } from "@/types/country";
import AdmissionForm from "./AdmissionForm";

const TopSection = ({ countryInfo }: { countryInfo: Study_Country }) => {
  return (
    <section className="pb-[50px] pt-[100px]">
      <div className="container flex flex-col gap-x-20 gap-y-20 lg:flex-row">
        <div className="basis-full space-y-6 lg:basis-[60%]">
          <h2 className="text-4xl font-semibold">{countryInfo.box1.title}</h2>
          <div className="space-y-3">
            {countryInfo.box1.descriptions?.map((description) => (
              <p className="text-sm font-medium" key={description.description}>
                {description.description}
              </p>
            ))}
          </div>
          <div className="inline-flex flex-col items-start justify-start gap-x-6 gap-y-4 rounded-lg border p-8 shadow-md md:flex-row">
            <div className="space-y-4">
              <div className="flex items-center justify-start gap-x-2">
                <div>
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.5 9C0.5 4.30558 4.30558 0.5 9 0.5C13.6944 0.5 17.5 4.30558 17.5 9C17.5 13.6944 13.6944 17.5 9 17.5C4.30558 17.5 0.5 13.6944 0.5 9Z"
                      stroke="#111111"
                    />
                    <circle cx="9" cy="9" r="6" fill="#111111" />
                  </svg>
                </div>
                <h6 className="text-sm font-semibold">
                  Why Study in {countryInfo.country}?
                </h6>
              </div>
              <div className="flex items-center justify-start gap-x-2">
                <div>
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.5 9C0.5 4.30558 4.30558 0.5 9 0.5C13.6944 0.5 17.5 4.30558 17.5 9C17.5 13.6944 13.6944 17.5 9 17.5C4.30558 17.5 0.5 13.6944 0.5 9Z"
                      stroke="#111111"
                    />
                    <circle cx="9" cy="9" r="6" fill="#111111" />
                  </svg>
                </div>
                <h6 className="text-sm font-semibold">
                  Cost of Study and Living
                </h6>
              </div>
              <div className="flex items-center justify-start gap-x-2">
                <div>
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.5 9C0.5 4.30558 4.30558 0.5 9 0.5C13.6944 0.5 17.5 4.30558 17.5 9C17.5 13.6944 13.6944 17.5 9 17.5C4.30558 17.5 0.5 13.6944 0.5 9Z"
                      stroke="#111111"
                    />
                    <circle cx="9" cy="9" r="6" fill="#111111" />
                  </svg>
                </div>
                <h6 className="text-sm font-semibold">Job Opportunity</h6>
              </div>
              <div className="flex items-center justify-start gap-x-2">
                <div>
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.5 9C0.5 4.30558 4.30558 0.5 9 0.5C13.6944 0.5 17.5 4.30558 17.5 9C17.5 13.6944 13.6944 17.5 9 17.5C4.30558 17.5 0.5 13.6944 0.5 9Z"
                      stroke="#111111"
                    />
                    <circle cx="9" cy="9" r="6" fill="#111111" />
                  </svg>
                </div>
                <h6 className="text-sm font-semibold">Scholarships</h6>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-start gap-x-2">
                <div>
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.5 9C0.5 4.30558 4.30558 0.5 9 0.5C13.6944 0.5 17.5 4.30558 17.5 9C17.5 13.6944 13.6944 17.5 9 17.5C4.30558 17.5 0.5 13.6944 0.5 9Z"
                      stroke="#111111"
                    />
                    <circle cx="9" cy="9" r="6" fill="#111111" />
                  </svg>
                </div>
                <h6 className="text-sm font-semibold">
                  Application Procedures
                </h6>
              </div>
              <div className="flex items-center justify-start gap-x-2">
                <div>
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.5 9C0.5 4.30558 4.30558 0.5 9 0.5C13.6944 0.5 17.5 4.30558 17.5 9C17.5 13.6944 13.6944 17.5 9 17.5C4.30558 17.5 0.5 13.6944 0.5 9Z"
                      stroke="#111111"
                    />
                    <circle cx="9" cy="9" r="6" fill="#111111" />
                  </svg>
                </div>
                <h6 className="text-sm font-semibold">
                  Admission Requirements
                </h6>
              </div>
              <div className="flex items-center justify-start gap-x-2">
                <div>
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.5 9C0.5 4.30558 4.30558 0.5 9 0.5C13.6944 0.5 17.5 4.30558 17.5 9C17.5 13.6944 13.6944 17.5 9 17.5C4.30558 17.5 0.5 13.6944 0.5 9Z"
                      stroke="#111111"
                    />
                    <circle cx="9" cy="9" r="6" fill="#111111" />
                  </svg>
                </div>
                <h6 className="text-sm font-semibold">Required Documents</h6>
              </div>
              <div className="flex items-center justify-start gap-x-2">
                <div>
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.5 9C0.5 4.30558 4.30558 0.5 9 0.5C13.6944 0.5 17.5 4.30558 17.5 9C17.5 13.6944 13.6944 17.5 9 17.5C4.30558 17.5 0.5 13.6944 0.5 9Z"
                      stroke="#111111"
                    />
                    <circle cx="9" cy="9" r="6" fill="#111111" />
                  </svg>
                </div>
                <h6 className="text-sm font-semibold">
                  Visa Procedures & Fees
                </h6>
              </div>
            </div>
          </div>
        </div>
        <div className="basis-full rounded-xl border p-10 shadow-md lg:basis-[40%]">
          <h2 className="mb-6 text-center text-2xl font-bold">
            Application for Admission
          </h2>
          <AdmissionForm />
        </div>
      </div>
    </section>
  );
};

export default TopSection;
