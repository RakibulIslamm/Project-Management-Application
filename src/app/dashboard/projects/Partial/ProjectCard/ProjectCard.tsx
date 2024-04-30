import Image from "next/image";
import { Poppins } from "next/font/google";
import Footer from "./Footer";
import Header from "./Header";
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const ProjectCard = () => {
  return (
    <div className={`bg-gray-200 rounded-lg ${poppins.className}`}>
      <Header />
      <div className="p-3 flex flex-col gap-5">
        <div className="flex items-center gap-3">
          <Image
            width={110}
            height={110}
            src="/images/company_logo.webp"
            alt=""
          />
          <div>
            <h3 className="text-lg font-bold text-gray-700 line-clamp-1">
              Website Redesign
            </h3>
            <p className="text-sm line-clamp-3 break-word">
              Redesign our company website to improve user experience.
            </p>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
