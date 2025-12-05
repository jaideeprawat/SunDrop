import React, { useState } from "react";
import {
  FiZap,
  FiLayers,
  FiGrid,
  FiCpu,
  FiHome,
  FiDollarSign,
} from "react-icons/fi";
import { FaSolarPanel, FaRupeeSign } from "react-icons/fa";

export default function SolarCalculator() {
  const [monthlyBillRange, setMonthlyBillRange] = useState("");
  const [userType, setUserType] = useState("Residential");
  const [result, setResult] = useState(null);

  // Residential dropdown → mapping
  const residentialBillMapping = {
    "1000-2000": 1500,
    "2000-3000": 2500,
    "3000-4000": 3500,
    "4000-5000": 4500,
    "5000-6000": 5500,
    "6000-7000": 6500,
    "7000-8000": 7500,
    "8000-9000": 8500,
  };

  // Commercial dropdown → mapping
  const commercialBillMapping = {
    "2000-3000": 2500,
    "3000-4000": 3500,
    "4000-5000": 4500,
    "5000-6000": 5500,
    "6000-7000": 6500,
    "7000-8000": 7500,
    "8000-9000": 8500,
    "9000-10000": 9500,
  };

  // Plant size rule
  const residentialPlantSizeMapping = {
    "1000-2000": 3,
    "2000-3000": 4,
    "3000-4000": 5,
    "4000-5000": 6,
    "5000-6000": 7,
    "6000-7000": 8,
    "7000-8000": 9,
    "8000-9000": 10,
  };

  const commercialPlantSizeMapping = {
    "2000-3000": 3,
    "3000-4000": 4,
    "4000-5000": 5,
    "5000-6000": 6,
    "6000-7000": 7,
    "7000-8000": 8,
    "8000-9000": 9,
    "9000-10000": 10,
  };

  const panelWp = 550;
  const panelArea = 28.5;
  const bufferPercent = 12;

  const getCostPerKW = (kw) => {
    if (kw === 3) return userType === "Residential" ? 69000 : 59900;
    if (kw === 4) return userType === "Residential" ? 62000 : 54900;
    if (kw === 5) return userType === "Residential" ? 63000 : 54900;
    if (kw === 6) return userType === "Residential" ? 61500 : 54900;
    if (kw === 7) return userType === "Residential" ? 59800 : 54900;
    if (kw === 8) return userType === "Residential" ? 58500 : 54900;
    if (kw === 9) return userType === "Residential" ? 56500 : 54900;
    if (kw === 10) return userType === "Residential" ? 54900 : 54900;
    return 85000;
  };

  const getSubsidy = () => (userType === "Residential" ? 85800 : 0);

  const calculate = () => {
    if (!monthlyBillRange || !userType) return;

    const billMapping =
      userType === "Residential"
        ? residentialBillMapping
        : commercialBillMapping;

    const plantSizeMapping =
      userType === "Residential"
        ? residentialPlantSizeMapping
        : commercialPlantSizeMapping;

    const avgBill = billMapping[monthlyBillRange];
    const ratePerUnit = userType === "Residential" ? 6 : 8;
    // const monthlyUnits = Math.round(avgBill / ratePerUnit);

    const plantSize = plantSizeMapping[monthlyBillRange];
    const panelsNeeded = Math.ceil((plantSize * 1000) / panelWp);
    const rawArea = +(panelsNeeded * panelArea).toFixed(1);
    const bufferedArea = Math.ceil(rawArea * (1 + bufferPercent / 100));

    const estimatedCostNumber = plantSize * getCostPerKW(plantSize);
    const subsidy = getSubsidy();
    const netCost = estimatedCostNumber - subsidy;

    const monthlyGeneration = Math.round(plantSize * 120);
    // const dailyGeneration = Math.round(monthlyGeneration / 30);

    setResult({
      // monthlyUnits,
      plantSize,
      panelsNeeded,
      // rawArea,
      bufferedArea,
      estimatedCost: estimatedCostNumber.toLocaleString("en-IN"),
      subsidy,
      netCost,
      monthlyGeneration,
      // dailyGeneration,
      monthlySaving: Math.round(monthlyGeneration * ratePerUnit),
      costPerKW: getCostPerKW(plantSize),
    });
  };

  return (
    <section style={{ padding: "32px 18px", background: "#f4fbff" }}>
      <div
        style={{
          maxWidth: 940,
          margin: "auto",
          background: "#fff",
          padding: 20,
          borderRadius: 12,
          boxShadow: "0 6px 18px rgba(0,0,0,0.08)",
        }}
      >
        {/* ===== Heading ===== */}
        <h2
          style={{
            textAlign: "center",
            marginBottom: 10,
            fontSize: "30px",
            fontWeight: "800",
            color: "#0f172a",
          }}
        >
          ⭐ Solar On-Grid System Calculator
        </h2>

        <p
          style={{
            textAlign: "center",
            marginBottom: 4,
            fontSize: "16px",
            color: "#475569",
          }}
        >
          ⚡ Calculate your solar requirement, cost & subsidy instantly.
        </p>

        <p
          style={{
            textAlign: "center",
            marginBottom: 20,
            fontSize: "14px",
            color: "#64748b",
            maxWidth: "600px",
            marginInline: "auto",
          }}
        >
          Enter your electricity bill and get a complete breakdown — plant size,
          number of panels, rooftop area, cost, subsidy & savings.
        </p>

        {/* ===== Input Row (Select + Select + Button) ===== */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr auto",
            gap: 10,
            marginBottom: 20,
          }}
        >
          {/* Bill select */}
          <select
            value={monthlyBillRange}
            onChange={(e) => setMonthlyBillRange(e.target.value)}
            style={{
              padding: "10px",
              borderRadius: 8,
              border: "1px solid #d1d5db",
              fontSize: 14,
            }}
          >
            <option value="">Monthly Bill</option>

            {userType === "Residential" &&
              Object.keys(residentialBillMapping).map((r) => (
                <option key={r} value={r}>
                  ₹{r.replace("-", " – ")}
                </option>
              ))}

            {userType === "Commercial" &&
              Object.keys(commercialBillMapping).map((r) => (
                <option key={r} value={r}>
                  ₹{r.replace("-", " – ")}
                </option>
              ))}
          </select>

          {/* Type select */}
          <select
            value={userType}
            onChange={(e) => {
              setUserType(e.target.value);
              setMonthlyBillRange("");
            }}
            style={{
              padding: "10px",
              borderRadius: 8,
              border: "1px solid #d1d5db",
              fontSize: 14,
            }}
          >
            <option value="">Select Type</option>
            <option value="Residential">Residential</option>
            <option value="Commercial">Commercial</option>
          </select>

          {/* Button */}
          <button
            onClick={calculate}
            style={{
              backgroundColor: "#0284c7",
              color: "#fff",
              padding: "10px 18px",
              borderRadius: 8,
              fontWeight: 600,
              border: "none",
              cursor: "pointer",
              whiteSpace: "nowrap",
              transition: "0.3s",
            }}
            onMouseEnter={(e) => (e.target.style.background = "#facc15")}
            onMouseLeave={(e) => (e.target.style.background = "#0284c7")}
          >
            Calculate
          </button>
        </div>

        {/* ===== Results Section ===== */}
        {/* ===== Results Section (CARD UI) ===== */}
{result && (
  <div
    style={{
      marginTop: 20,
      background: "#ffffff",
      padding: 22,
      borderRadius: 14,
      boxShadow: "0 6px 18px rgba(0,0,0,0.08)",
      border: "1px solid #e5e7eb",
    }}
  >
    <h3
      style={{
        fontSize: 20,
        fontWeight: 700,
        marginBottom: 18,
        color: "#0f172a",
      }}
    >
      📊 Detailed Results
    </h3>

    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
        gap: 16,
      }}
    >
      {[
        ["Plant Size", result.plantSize + " kW", <FiLayers />],
        ["Panels Needed", result.panelsNeeded + " pcs", <FaSolarPanel />],
        ["Area Needed", result.bufferedArea + " sq ft", <FiGrid />],
        ["Estimated Cost", "₹ " + result.estimatedCost, <FaRupeeSign />],
        ["Subsidy", "₹ " + result.subsidy, <FiHome />],
        [
          "Net Cost After Subsidy",
          "₹ " + result.netCost.toLocaleString("en-IN"),
          <FiDollarSign />,
        ],
        [
          "Monthly Generation",
          result.monthlyGeneration + " units",
          <FiCpu />,
        ],
        [
          "Monthly Saving",
          "₹ " + result.monthlySaving.toLocaleString("en-IN"),
          <FaRupeeSign />,
        ],
      ].map(([label, value, icon], idx) => (
        <div
          key={idx}
          style={{
            padding: 16,
            borderRadius: 12,
            background: "#f9fafb",
            border: "1px solid #e2e8f0",
            boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              marginBottom: 6,
              color: "#475569",
              fontSize: 13,
            }}
          >
            <div
              style={{
                width: 32,
                height: 32,
                borderRadius: "50%",
                background: "#e0f2fe",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "#0284c7",
              }}
            >
              {icon}
            </div>
            {label}
          </div>

          <div
            style={{
              fontSize: 22,
              fontWeight: 700,
              color: "#0f172a",
            }}
          >
            {value}
          </div>
        </div>
      ))}
    </div>
  </div>
)}

      </div>
    </section>
  );
}
