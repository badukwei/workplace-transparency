import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMessage, faMagnifyingGlass, faArrowUpFromBracket, faCircleInfo} from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  return (
    <div className="flex">
      <div className="w-36 h-18">
        <img
          src={require("../asset/logo.png")}
          alt="worktrans"
        />
      </div>
      <div className="p-4 pl-12 flex gap-8 items-center bg-white shadow-lg grow">
        <div className="self-center flex gap-8">
          <div className="basis-auto">
            <FontAwesomeIcon icon={faMagnifyingGlass} className="text-gray mr-2"/>
            <a href="/" className="text-lg font-normal text-gray">
              Search
            </a>
          </div>
          <div className="basis-auto">
          <FontAwesomeIcon icon={faArrowUpFromBracket} className="text-gray mr-2"/>
            <a href="/" className="text-lg font-normal text-gray">
              Share
            </a>
          </div>
          <div className="basis-auto">
            <FontAwesomeIcon icon={faMessage} className="text-gray mr-2"/>
            <a href="/" className="text-lg font-normal text-gray">
              Contact
            </a>
          </div>
          <div className="basis-auto">
            <FontAwesomeIcon icon={faCircleInfo} className="text-gray mr-2"/>
            <a href="/" className="text-lg font-normal text-gray">
              About us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
