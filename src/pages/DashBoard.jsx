import React, { useState } from "react";
import "../styles/dashboard.css";
import InputField from "../components/InputField";
import Button from "../components/Button";
import {
  recommendCrops,
  detectSoilType,
  getGreeting,
  getMatchLabel,
} from "../utils/cropLogic";
import { FaFlask, FaTint, FaLeaf } from "react-icons/fa";
import {
  MdBarChart,
  MdSpeed,
  MdDelete,
  MdExpandMore,
  MdExpandLess,
} from "react-icons/md";
import { GiChemicalDrop } from "react-icons/gi";
import { RiPlantFill } from "react-icons/ri";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";
//115 41 58 82 6.1 -rice
const DashBoard = () => {
  const [nitrogen, setNitrogen] = useState("115");
  const [phosphorus, setPhosphorus] = useState("41");
  const [potassium, setPotassium] = useState("58");
  const [moisture, setMoisture] = useState("82");
  const [ph, setPh] = useState("6.1");
  const [crops, setCrops] = useState([]);
  const [soilType, setSoilType] = useState(null);
  const [lastUpdated, setLastUpdated] = useState("Just now");
  const [analyzed, setAnalyzed] = useState(false);
  const [showMore, setShowMore] = useState(false); // ✅ show more state

  const handleAnalyze = () => {
    const n = parseFloat(nitrogen);
    const p = parseFloat(phosphorus);
    const k = parseFloat(potassium);
    const m = parseFloat(moisture);
    const ph_ = parseFloat(ph);

    setSoilType(detectSoilType(n, p, k, m, ph_));
    setCrops(recommendCrops(n, p, k, m, ph_, 3));
    setAnalyzed(true);
    setShowMore(false); // reset show more on new analysis
    setLastUpdated(new Date().toLocaleTimeString());
  };

  const handleReset = () => {
    setNitrogen("");
    setPhosphorus("");
    setPotassium("");
    setMoisture("");
    setPh("");
    setCrops([]);
    setSoilType(null);
    setAnalyzed(false);
    setShowMore(false);
    setLastUpdated("Just now");
  };

  const chartData = [
    {
      name: "Nitrogen (N)",
      value: parseFloat(nitrogen) || 0,
      color: "#2e7d52",
    },
    {
      name: "Phosphorus (P)",
      value: parseFloat(phosphorus) || 0,
      color: "#f59e0b",
    },
    {
      name: "Potassium (K)",
      value: parseFloat(potassium) || 0,
      color: "#92400e",
    },
    { name: "pH Level", value: parseFloat(ph) || 0, color: "#3b82f6" },
    {
      name: "Moisture (%)",
      value: parseFloat(moisture) || 0,
      color: "#06b6d4",
    },
  ];

  // ✅ Show only 1 crop first, show all 3 after clicking Show More
  const visibleCrops = showMore ? crops : crops.slice(0, 1);

  // ✅ Single crop card — reusable
  const CropCard = ({ crop }) => (
    <div className="crop-rec-card">
      {/* CROP NAME + IMAGE */}
      <div className="crop-name-img-row">
        <div className="crop-text-side">
          <h2 className="crop-rec-name">{crop.name}</h2>

          <p className="why-title">Why it is recommended:</p>
          <ul className="crop-reasons">
            {/* ✅ Match % as first bullet */}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             
            <li>
              <span className="reason-dot match-dot"></span>
              <span>
                Crop matching with your soil :
                <strong className="match-score-inline">
                  {" "}
                  {crop.matchScore}%
                </strong>
              </span>
            </li>

            {/* Remaining reasons */}
            {crop.reasons.map((r, i) => (
              <li key={i}>
                <span className="reason-dot"></span>
                {r}
              </li>
            ))}
          </ul>
        </div>

        {/* ✅ Crop image — no badge, no circle */}
        <div className="crop-img-box">
          <img
            src={crop.image}
            alt={crop.name}
            className="crop-img"
            onError={(e) => {
              e.target.style.display = "none";
            }}
          />
        </div>
      </div>

      {/* ✅ TIP ONLY — no select button */}
      <div className="tip-box">
        <p className="tip-title">
          <RiPlantFill className="tip-icon" />
          TIP FOR HIGHER YIELD
        </p>
        <p className="tip-text">{crop.tip}</p>
      </div>
    </div>
  );

  return (
    <div className="dashboard-page">
      {/* GREETING */}
      <h2 className="dash-greeting">{getGreeting()}, Vijay! 👋</h2>

      {/* ── SOIL ANALYZER ── */}
      <section className="analyzer-section">
        <h3 className="section-heading">Manual Soil Analyzer</h3>
        <p className="section-sub">
          Enter Nutrients Below to Simulate Analysis.
        </p>
        <div className="inputs-grid">
          <InputField
            label="Nitrogen (N)"
            unit="mg/kg"
            icon={<FaFlask color="#3b82f6" />}
            value={nitrogen}
            onChange={(e) => setNitrogen(e.target.value)}
          />
          <InputField
            label="Phosphorus (P)"
            unit="mg/kg"
            icon={<GiChemicalDrop color="#8b5cf6" />}
            value={phosphorus}
            onChange={(e) => setPhosphorus(e.target.value)}
          />
          <InputField
            label="Potassium (K)"
            unit="mg/kg"
            icon={<MdBarChart color="#f59e0b" />}
            value={potassium}
            onChange={(e) => setPotassium(e.target.value)}
          />
          <InputField
            label="Soil Moisture"
            unit="%"
            icon={<FaTint color="#06b6d4" />}
            value={moisture}
            onChange={(e) => setMoisture(e.target.value)}
          />
          <InputField
            label="pH Level"
            unit="scale 1-14"
            icon={<MdSpeed color="#ef4444" />}
            value={ph}
            onChange={(e) => setPh(e.target.value)}
          />
        </div>
      </section>

      {/* ── CONTROL PANEL ── */}
      <section className="control-panel">
        <div className="control-panel-header">
          <h3 className="section-heading">Control Panel.</h3>
          <p className="last-updated">Last Updated: {lastUpdated}</p>
        </div>
        <div className="control-btns">
          <Button
            label="ANALYZE SOIL"
            icon={<FaLeaf />}
            onClick={handleAnalyze}
            variant="primary"
          />
          <Button
            label="RESET VALUES"
            icon={<MdDelete />}
            onClick={handleReset}
            variant="outline"
          />
        </div>
      </section>

      {/* ── RESULTS ── */}
      {analyzed && (
        <>
          {/* SOIL TYPE */}
          {soilType && (
            <section className="soil-type-section">
              <div className="soil-type-card">
                <span className="soil-emoji">{soilType.emoji}</span>
                <div>
                  <p className="soil-detected-label">Detected Soil Type</p>
                  <h3 className="soil-name">{soilType.name}</h3>
                  <p className="soil-desc">{soilType.description}</p>
                </div>
              </div>
            </section>
          )}

          {/* ANALYSIS & RECOMMENDATIONS */}
          {crops.length > 0 ? (
            <section className="analysis-section">
              <div className="analysis-header">
                <h3 className="section-heading">Analysis & Recommendations</h3>
                <p className="last-updated">Last Updated: {lastUpdated}</p>
              </div>

              {/* LEFT + RIGHT LAYOUT */}
              <div className="analysis-grid">
                {/* ── LEFT — CROP CARDS ── */}
                <div className="crop-suggestions-left">
                  <div className="rec-header">
                    <RiPlantFill className="rec-header-icon" />
                    <h3>
                      Suggested Crops <span>(Based on Your Soil)</span>
                    </h3>
                  </div>

                  {/* ✅ Show 1 or 3 crops */}
                  <div className="crop-cards-list">
                    {visibleCrops.map((crop, index) => (
                      <CropCard key={index} crop={crop} />
                    ))}
                  </div>

                  {/* ✅ Show More / Show Less button */}
                  {crops.length > 1 && (
                    <button
                      className="show-more-btn"
                      onClick={() => setShowMore(!showMore)}
                    >
                      {showMore ? (
                        <>
                          <MdExpandLess className="show-more-icon" />
                          Show Less
                        </>
                      ) : (
                        <>
                          <MdExpandMore className="show-more-icon" />
                          Show More Recommendations ({crops.length - 1} more)
                        </>
                      )}
                    </button>
                  )}
                </div>

                {/* ── RIGHT — CHART ── */}
                <div className="chart-card">
                  <h4>📊 Soil Nutrient Levels</h4>

                  <ResponsiveContainer width="100%" height={280}>
                    <BarChart
                      data={chartData}
                      margin={{ top: 10, right: 10, left: -10, bottom: 60 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
                      <XAxis
                        dataKey="name"
                        tick={{ fontSize: 11 }}
                        angle={-35}
                        textAnchor="end"
                        interval={0}
                      />
                      <YAxis tick={{ fontSize: 11 }} />
                      <Tooltip />
                      <Bar dataKey="value" name="Value" radius={[4, 4, 0, 0]}>
                        {chartData.map((entry, i) => (
                          <Cell key={i} fill={entry.color} />
                        ))}
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>

                  <div className="chart-legend">
                    <span>
                      <span
                        className="dot"
                        style={{ background: "#2e7d52" }}
                      ></span>
                      N {nitrogen} mg/kg
                    </span>
                    <span>
                      <span
                        className="dot"
                        style={{ background: "#f59e0b" }}
                      ></span>
                      P {phosphorus} mg/kg
                    </span>
                    <span>
                      <span
                        className="dot"
                        style={{ background: "#92400e" }}
                      ></span>
                      K {potassium} mg/kg
                    </span>
                    <span>
                      <span
                        className="dot"
                        style={{ background: "#3b82f6" }}
                      ></span>
                      pH {ph}
                    </span>
                    <span>
                      <span
                        className="dot"
                        style={{ background: "#06b6d4" }}
                      ></span>
                      Moisture {moisture}%
                    </span>
                  </div>
                </div>
              </div>
            </section>
          ) : (
            <div className="no-crop-msg">
              <p>⚠️ No matching crops found for the given soil values.</p>
              <p>Please adjust your nutrient inputs and try again.</p>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default DashBoard;
