import Navbar from "../../share/Navbar";
import ShareForm from "./component/ShareForm";

export default function Share() {

  return (
    <>
      <Navbar />
      <div className="mt-16 flex flex-col justify-center items-center gap-6">
        <ShareForm />
      </div>
    </>
  );
}
