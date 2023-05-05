import React, { useState } from "react";
import BasicInfo from "../../../../model/basicInfo";

export default function BasicInfoForm() {
  const [language, setLanguage] = useState(["", "", ""]);
  const [library, setLibrary] = useState(["", "", ""]);
  const [basicInfo, setBasicInfo] = useState<BasicInfo>({
    company: "",
    title: "",
    salary: {
      monthly: 0,
      bonus: 0,
      yearly: 0,
    },
    skills: {
      language: [],
      toolAndLibrary: [],
    },
    tenure: {
      tenureInCompany: 0,
      tenureAllTime: 0,
    },
  });

  const handleLanguageChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const newLanguage = [...language];
    newLanguage[index] = e.target.value;
    setLanguage(newLanguage);
  };

  const handleLibraryChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const newLibrary = [...library];
    newLibrary[index] = e.target.value;
    setLibrary(newLibrary);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name } = e.target;
    let value: string | number = e.target.value;
    
    // if the input type is number, convert string to number
    if (e.target.type === "number") {
      value = Number(value);
    }
    
    const keys = name.split(".");
  
    if (keys.length === 2) {
      // if nested
      const [firstKey, secondKey] = keys;
  
      setBasicInfo((prevInfo) => ({
        ...prevInfo,
        [firstKey as keyof BasicInfo]: {
          ...(prevInfo[firstKey as keyof BasicInfo] as object),
          [secondKey]: value,
        },
      }));
    } else {
      setBasicInfo((prevInfo) => ({
        ...prevInfo,
        [name as keyof BasicInfo]: value,
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setBasicInfo((prevInfo) => ({
      ...prevInfo,
      skills: {
        language: [...language],
        toolAndLibrary: [...library],
      },
    }));

    setTimeout(() => {
      console.log(basicInfo);
    }, 0);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full	p-8 flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <h3 className="text-marineBlue text-lg font-medium">Company Name</h3>
        <div className="w-full p-2 border border-coolGray rounded">
          <input
            type="text"
            id="company"
            name="company"
            value={basicInfo.company}
            onChange={handleChange}
            className="w-full outline-none text-marineBlue font-medium"
          ></input>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-marineBlue text-lg font-medium">Job Title</h3>
        <div className="w-full p-2 border border-coolGray rounded">
          <input
            type="text"
            id="title"
            name="title"
            value={basicInfo.title}
            onChange={handleChange}
            className="w-full outline-none text-marineBlue font-medium"
          ></input>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-marineBlue text-lg font-medium">Salary</h3>
        <div className="grid grid-cols-auto-repeat gap-4">
          <div>
            <label className="text-marineBlue text-sm">Monthly</label>
            <div className="w-full p-2 border border-coolGray rounded">
              <input
                type="number"
                id="monthly"
                name="salary.monthly"
                value={basicInfo.salary.monthly}
                onChange={handleChange}
                className="w-full outline-none text-marineBlue text-sm font-medium"
              ></input>
            </div>
          </div>
          <div>
            <label className="text-marineBlue text-sm">Bonus</label>
            <div className="w-full p-2 border border-coolGray rounded">
              <input
                type="number"
                id="bonus"
                name="salary.bonus"
                value={basicInfo.salary.bonus}
                onChange={handleChange}
                className="w-full outline-none text-marineBlue text-sm font-medium"
              ></input>
            </div>
          </div>
          <div>
            <label className="text-marineBlue text-sm">Yearly</label>
            <div className="w-full p-2 border border-coolGray rounded">
              <input
                type="number"
                id="yearly"
                name="salary.yearly"
                value={basicInfo.salary.yearly}
                onChange={handleChange}
                className="w-full outline-none text-marineBlue font-medium"
              ></input>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h3 className="text-marineBlue text-lg font-medium"></h3>
        <div className="mt-4">
          <h3 className="text-marineBlue text-lg font-medium">Language</h3>
          <div className="mt-2 grid grid-cols-auto-repeat gap-4">
            <div>
              <label className="text-marineBlue text-sm">Language 1</label>
              <div className="w-full p-2 border border-coolGray rounded">
                <input
                  type="text"
                  value={language[0]}
                  onChange={(e) => handleLanguageChange(e, 0)}
                  className="w-full outline-none text-marineBlue text-sm font-medium"
                ></input>
              </div>
            </div>
            <div>
              <label className="text-marineBlue text-sm">Language 2</label>
              <div className="w-full p-2 border border-coolGray rounded">
                <input
                  type="text"
                  value={language[1]}
                  onChange={(e) => handleLanguageChange(e, 1)}
                  className="w-full outline-none text-marineBlue text-sm font-medium"
                ></input>
              </div>
            </div>
            <div>
              <label className="text-marineBlue text-sm">Language 3</label>
              <div className="w-full p-2 border border-coolGray rounded">
                <input
                  type="text"
                  value={language[2]}
                  onChange={(e) => handleLanguageChange(e, 2)}
                  className="w-full outline-none text-marineBlue font-medium"
                ></input>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-4">
          <h3 className="text-marineBlue text-lg font-medium">
            Library or Framework
          </h3>
          <div className="mt-2 grid grid-cols-auto-repeat gap-4">
            <div>
              <label className="text-marineBlue text-sm">
                Library or Framework 1
              </label>
              <div className="w-full p-2 border border-coolGray rounded">
                <input
                  type="text"
                  value={library[0]}
                  onChange={(e) => handleLibraryChange(e, 0)}
                  className="w-full outline-none text-marineBlue text-sm font-medium"
                ></input>
              </div>
            </div>
            <div>
              <label className="text-marineBlue text-sm">
                Library or Framework 2
              </label>
              <div className="w-full p-2 border border-coolGray rounded">
                <input
                  type="text"
                  value={library[1]}
                  onChange={(e) => handleLibraryChange(e, 1)}
                  className="w-full outline-none text-marineBlue text-sm font-medium"
                ></input>
              </div>
            </div>
            <div>
              <label className="text-marineBlue text-sm">
                Library or Framework 3
              </label>
              <div className="w-full p-2 border border-coolGray rounded">
                <input
                  type="text"
                  value={library[2]}
                  onChange={(e) => handleLibraryChange(e, 2)}
                  className="w-full outline-none text-marineBlue font-medium"
                ></input>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <label className="text-marineBlue text-sm">Tenure In Company Now</label>
        <div className="w-full p-2 border border-coolGray rounded">
          <input
            type="number"
            name="tenure.tenureInCompany"
            value={basicInfo.tenure.tenureInCompany}
            onChange={handleChange}
            className="w-full outline-none text-marineBlue text-sm font-medium"
          ></input>
        </div>
      </div>
      <div>
        <label className="text-marineBlue text-sm">Total Tenure</label>
        <div className="w-full p-2 border border-coolGray rounded">
          <input
            type="number"
            name="tenure.tenureAllTime"
            value={basicInfo.tenure.tenureAllTime}
            onChange={handleChange}
            className="w-full outline-none text-marineBlue text-sm font-medium"
          ></input>
        </div>
      </div>

      <button type="submit">Submit</button>
    </form>
  );
}
