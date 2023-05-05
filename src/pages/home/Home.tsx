import Navbar from "../../share/Navbar";
import Focus from "./component/Focus";
import Card from "./component/Card";
import BasicInfoForm from "../share/component/form-component/BasicInfoForm";


import workData from "../../mock/workData";

export default function Home() {

  const card = workData.map(item => {
    return(
      <Card 
        key={workData.indexOf(item)}
        {...item}
      />
    )
  })

  return (
    <>
      <Navbar />
      <div className="mt-16 flex flex-col justify-center items-center gap-6">
        {card}
      </div>
    </>
  );
}
