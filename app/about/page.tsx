import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="About Page"
        description="Vi ønsker løsninger som er enkle å bruke, og som gir deg som kunde en god opplevelse. Vi er opptatt av å levere kvalitet i alle ledd, og vi har fokus på å levere til avtalt tid og pris."
      />

      <AboutSectionTwo />
    </>
  );
};

export default AboutPage;
