import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faBuilding} from "@fortawesome/free-solid-svg-icons";
import JobListing from "../../../model/card";

export default function Card(prop: JobListing) {
  return (
    <div className="w-4/5 p-6 flex flex-col justify-between gap-6 bg-white rounded shadow-lg">
      <div className="flex flex-col">
        <div className="flex justify-between items-center">
          <h1 className="text-marineBlue text-2xl font-medium">
            {prop.title}
          </h1>
          <div>
            <span className="text-gray text-xl font-bold mr-1">{prop.rating_this_job.overall}</span>
            <FontAwesomeIcon icon={faStar} className="text-gray text-xl" />
          </div>
        </div>
        <div className="flex items-center gap-2 mt-2">
          <FontAwesomeIcon icon={faBuilding} className="text-gray text-xl font-medium"/>
          <h1 className="text-gray text-xl font-medium">{prop.company}</h1>
        </div>
        <p className="text-gray mt-2">
          {prop.comment}
        </p>
      </div>
      <div className="flex gap-2">
          <div className="p-2 bg-purplishBlue rounded">
            <p className="text-magnolia text-sm font-medium">${prop.salary.yearly} / year</p>
          </div>
          <div className="p-2 bg-strawberryRed rounded">
            <p className="text-magnolia text-sm font-medium">{prop.work_time.everyday_work_time}hours / day</p>
          </div>
          <div className="p-2 bg-gray rounded">
            <p className="text-magnolia text-sm font-medium">{prop.location}</p>
          </div>
        </div>
    </div>
  );
}
