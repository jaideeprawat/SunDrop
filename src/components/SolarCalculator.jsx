import React, { useState, useEffect } from "react";
import {
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
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 640);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

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
    if (kw === 3) return userType === "Residential" ? 65000 : 59900;
    if (kw === 4) return userType === "Residential" ? 62000 : 54900;
    if (kw === 5) return userType === "Residential" ? 60000 : 54900;
    if (kw === 6) return userType === "Residential" ? 59000 : 54900;
    if (kw === 7) return userType === "Residential" ? 58700 : 54900;
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

    const plantSize = plantSizeMapping[monthlyBillRange];
    const panelsNeeded = Math.ceil((plantSize * 1000) / panelWp);
    const rawArea = +(panelsNeeded * panelArea).toFixed(1);
    const bufferedArea = Math.ceil(rawArea * (1 + bufferPercent / 100));

    const estimatedCostNumber = plantSize * getCostPerKW(plantSize);
    const subsidy = getSubsidy();
    const netCost = estimatedCostNumber - subsidy;

    const monthlyGeneration = Math.round(plantSize * 120);

    setResult({
      plantSize,
      panelsNeeded,
      bufferedArea,
      estimatedCost: estimatedCostNumber.toLocaleString("en-IN"),
      subsidy,
      netCost,
      monthlyGeneration,
      monthlySaving: Math.round(
        monthlyGeneration * ratePerUnit
      ),
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
        <h2
          style={{
            textAlign: "center",
            marginBottom: 10,
            fontSize: "30px",
            fontWeight: "800",
            color: "#0f172a",
          }}
        >
          ⭐ Solar On-Grid System Calculator (Topcon panel)
        </h2>

        <div
  style={{
    display: "grid",
    gap: isMobile ? 12 : 10, // Mobile me gap thoda bada (12px)
    marginBottom: 20,
    gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr auto",
  }}
>
  <select
    value={monthlyBillRange}
    onChange={(e) => setMonthlyBillRange(e.target.value)}
    style={{
      padding: "10px",
      borderRadius: 8,
      border: "1px solid #d1d5db",
      fontSize: 14,
      width: "100%", // Mobile: full width
    }}
  >
    <option value="">Monthly Bill</option>
    {userType === "Residential" &&
      Object.keys(residentialBillMapping).map((r) => (
        <option value={r} key={r}>
          ₹{r.replace("-", " – ")}
        </option>
      ))}
    {userType === "Commercial" &&
      Object.keys(commercialBillMapping).map((r) => (
        <option value={r} key={r}>
          ₹{r.replace("-", " – ")}
        </option>
      ))}
  </select>

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
      width: "100%", // Mobile: full width
    }}
  >
    <option value="Residential">Residential</option>
    <option value="Commercial">Commercial</option>
  </select>

  <button
    onClick={calculate}
    style={{
      backgroundColor: "#0284c7",
      color: "#fff",
      padding: "12px",
      borderRadius: 8,
      fontWeight: 600,
      border: "none",
      cursor: "pointer",
      width: "100%", // Mobile: full width
    }}
  >
    Calculate
  </button>
</div>


        {result && (
          <div
            style={{
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
                            gridTemplateColumns: isMobile ? "1fr 1fr" : "repeat(auto-fit, minmax(240px, 1fr))",

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
                    minWidth: 0, 
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 8,
                      marginBottom: 6,
                      color: "#475569",
                    }}
                  >
                    <div
                      style={{
                        width: 32,
                        height: 32,
                        borderRadius: "50%",
                        background: "#e0f2fe",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
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
