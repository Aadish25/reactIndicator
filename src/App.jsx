import { useState } from "react";
import GaugeComponent from "react-gauge-component";

export default function App() {
  const [colorDetails, setColorDetails] = useState([]);
  const [value, setValue] = useState(15);
  const handleColor = (color) => {
    if (color === "pink") {
      setColorDetails(["Compassion", "Sincerity", "Sophistication", "Sweet"]);
      setValue(4.5);
    } else if (color === "green") {
      setColorDetails(["Nature", "Healing", "Freshness", "Quality"]);
      setValue(13.5);
    } else if (color === "orange") {
      setColorDetails(["Confidence", "Success", "Bravery", "Sociability"]);
      setValue(22.5);
    } else {
      setColorDetails(["Trust", "Peace", "Loyalty", "Competence"]);
      setValue(31.5);
    }
  };
  return (
    <div className="w-full h-screen flex items-center justify-center bg-gray-200">
      <div className="flex flex-col gap-5 bg-pink-100 p-2 rounded-xl sm:w-1/2 ">
        <div className="text-xl text-purple-500 font-semibold border-b-2 text-center border-gray-300">
          <h5>Match Making</h5>
        </div>
        <div className=" border-b-2 border-black flex flex-col justify-center items-center">
          <h3 className="font-semibold">Compatibility Score</h3>

          <GaugeComponent
            labels={{ valueLabel: { hide: true } }}
            type="semicircle"
            maxValue={36}
            value={value}
            arc={{
              subArcs: [
                {
                  length: 9,
                  color: "#f0a3e7",
                  onClick: () => handleColor("pink"),
                },
                {
                  length: 9,
                  color: "#5BE12C",
                  onClick: () => handleColor("green"),
                },
                {
                  length: 9,
                  color: "#f2b21b",
                  onClick: () => handleColor("orange"),
                },
                {
                  length: 9,
                  color: "#1182ab",
                  onClick: () => handleColor("blue"),
                },
              ],
              cornerRadius: 0,
              width: 0.4,
              padding: 0,
            }}
          />
          <h5 className="text-3xl font-bold">{value}/36</h5>
        </div>
        <div className="flex flex-col gap-3 justify-center items-center">
          <h3 className="font-semibold">Details</h3>

          {colorDetails.length == 0 ? (
            <p>Click on any Color to get Details</p>
          ) : (
            <ul>
              {colorDetails.map((item, index) => {
                return <li key={index}>{item}</li>;
              })}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
