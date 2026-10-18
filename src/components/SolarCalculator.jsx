// import React, { useState } from "react";

// export default function SolarSharePage() {
//   const [bill, setBill] = useState("");
//   const [result, setResult] = useState(null);

//   // ⚡ SLAB BILL CALC
//   const calculateBill = (units) => {
//     let cost = 0;

//     if (units <= 100) {
//       cost += units * 3.65;
//     } else if (units <= 200) {
//       cost += 100 * 3.65 + (units - 100) * 5.35;
//     } else if (units <= 400) {
//       cost += 100 * 3.65 + 100 * 5.35 + (units - 200) * 7.15;
//     } else {
//       cost +=
//         100 * 3.65 +
//         100 * 5.35 +
//         200 * 7.15 +
//         (units - 400) * 7.8;
//     }

//     return cost;
//   };

//   const calculate = () => {
//     if (!bill) return;

//     // 👇 Approx reverse logic (simple mapping)
//     const units = bill / 6; // avg assumption
//     const kw = units / (4.15 * 30);

//     const plantSize = Math.ceil(kw);

//     // 🌞 REAL GENERATION
//     const monthlyGeneration = Math.round(plantSize * 4.15 * 30);

//     // 💰 REAL BILL
//     const billWithoutSolar = calculateBill(monthlyGeneration);

//     // ⚡ FIXED CHARGE
//     const fixedCharge = plantSize * 85;

//     const saving = Math.round(billWithoutSolar + fixedCharge);

//     const cost = plantSize * 60000;

//     setResult({
//       plantSize,
//       monthlyGeneration,
//       saving,
//       cost,
//       lifetimeSaving: saving * 12 * 25,
//     });
//   };

//   const sendWhatsApp = () => {
//     const msg = `Mera solar result:

// Bijli Bill: ₹${bill}
// System: ${result.plantSize} kW
// Saving: ₹${result.saving}/month

// Mujhe full details bhejo`;

//     window.open(
//       `https://wa.me/917302528798?text=${encodeURIComponent(msg)}`
//     );
//   };

//   return (
//     <div style={styles.page}>
//       <div style={styles.card}>
//         <h1>
//           ⚡ Aapka Bijli Bill <span style={styles.highlight}>₹0</span> ho sakta hai?
//         </h1>

//         <p>Sirf 10 second me check karein</p>

//         <input
//           type="number"
//           placeholder="Apna monthly bill likhein (₹)"
//           value={bill}
//           onChange={(e) => setBill(e.target.value)}
//           style={styles.input}
//         />

//         <button style={styles.button} onClick={calculate}>
//           🔥 Calculate Savings
//         </button>
//       </div>

//       {result && (
//         <div style={styles.result}>
//           <h3>📊 Aapka Result</h3>

//           <p>🔋 System Size: <b>{result.plantSize} kW</b></p>
//           <p>⚡ Generation: <b>{result.monthlyGeneration} units/month</b></p>
//           <p>📉 Saving: <b>₹{result.saving}/month</b></p>

//           <div style={styles.highlightBox}>
//             💰 25 saal me approx ₹
//             {result.lifetimeSaving.toLocaleString("en-IN")} bach sakte hain!
//           </div>

//           <p style={{ color: "green", fontWeight: "bold" }}>
//             ⚡ Aapka bill ₹{result.saving} se ₹0 ho sakta hai!
//           </p>

//           <button style={styles.whatsapp} onClick={sendWhatsApp}>
//             📲 WhatsApp par full report paayein
//           </button>

//           <p style={styles.warning}>
//             ⚠️ Limited subsidy available
//           </p>
//         </div>
//       )}
//     </div>
//   );
// }

// const styles = {
//   page: {
//     fontFamily: "Arial",
//     background: "#f0f9ff",
//     minHeight: "100vh",
//     padding: "20px",
//   },
//   card: {
//     maxWidth: "400px",
//     margin: "auto",
//     background: "#fff",
//     padding: "20px",
//     borderRadius: "12px",
//     textAlign: "center",
//     boxShadow: "0 0 15px rgba(0,0,0,0.05)",
//   },
//   highlight: {
//     color: "#f59e0b",
//   },
//   input: {
//     width: "100%",
//     padding: "12px",
//     marginTop: "10px",
//     borderRadius: "8px",
//     border: "1px solid #ccc",
//   },
//   button: {
//     width: "100%",
//     padding: "12px",
//     marginTop: "15px",
//     background: "#f59e0b",
//     color: "#fff",
//     border: "none",
//     borderRadius: "8px",
//     fontSize: "16px",
//     cursor: "pointer",
//   },
//   result: {
//     maxWidth: "400px",
//     margin: "20px auto",
//     background: "#fff",
//     padding: "20px",
//     borderRadius: "12px",
//   },
//   highlightBox: {
//     background: "#ecfdf5",
//     padding: "12px",
//     borderRadius: "8px",
//     marginTop: "10px",
//     fontWeight: "bold",
//     color: "#065f46",
//   },
//   whatsapp: {
//     width: "100%",
//     padding: "14px",
//     marginTop: "15px",
//     background: "#25D366",
//     color: "#fff",
//     border: "none",
//     borderRadius: "10px",
//     fontWeight: "700",
//     cursor: "pointer",
//   },
//   warning: {
//     marginTop: "10px",
//     fontSize: "13px",
//     color: "#b91c1c",
//     textAlign: "center",
//   },
// };


import { useState } from "react";
const WHATSAPP = "917302528798";

const prizes = [
  {
    rank: "1st PRIZE | प्रथम पुरस्कार",
    title: "Electric Scooty",
    hindi: "इलेक्ट्रिक स्कूटी",
    detail: "1 Winner | 1 विजेता",
    emoji: "🛵",
    color: "from-rose-500 to-orange-500",
  },
  {
    rank: "2nd PRIZE | द्वितीय पुरस्कार",
    title: "LCD / Smart TV",
    hindi: "एलसीडी / स्मार्ट टीवी",
    detail: "1 Winner | 1 विजेता",
    emoji: "📺",
    color: "from-blue-500 to-indigo-600",
  },
  {
    rank: "3rd PRIZE | तृतीय पुरस्कार",
    title: "Smartphone",
    hindi: "स्मार्टफोन",
    detail: "1 Winner | 1 विजेता",
    emoji: "📱",
    color: "from-emerald-500 to-teal-600",
  },
  {
    rank: "GIFT PRIZE | उपहार",
    title: "Induction Cooktop",
    hindi: "इंडक्शन कुकटॉप",
    detail: "27 Winners | 27 विजेता",
    emoji: "🎁",
    color: "from-purple-500 to-fuchsia-600",
  },
];

const benefits = [
  {
    icon: "☀️",
    title: "Solar Solutions",
    hindi: "सोलर समाधान",
    text: "आपके बिजली बिल के अनुसार मार्गदर्शन",
  },
  {
    icon: "₹",
    title: "Subsidy Guidance",
    hindi: "सब्सिडी की जानकारी",
    text: "योजना और पात्रता संबंधी जानकारी",
  },
  {
    icon: "🏠",
    title: "Free Site Visit",
    hindi: "निःशुल्क साइट विजिट",
    text: "सेवा क्षेत्र और उपलब्धता के अनुसार",
  },
  {
    icon: "🛡️",
    title: "Expert Support",
    hindi: "विशेषज्ञ सहायता",
    text: "सोलर सिस्टम और इंस्टॉलेशन संबंधी मदद",
  },
];

const billOptions = [
  "₹1,000 से कम",
  "₹1,000 – ₹2,000",
  "₹2,000 – ₹3,000",
  "₹3,000 – ₹5,000",
  "₹5,000 से अधिक",
];

const capacities = [
  "2 kW",
  "3 kW",
  "4 kW",
  "5 kW",
  "अभी तय नहीं है",
];

export default function DiwaliOffer() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    city: "",
    bill: "",
    capacity: "3 kW",
  });

  const [error, setError] = useState("");

  function update(e) {
    const { name, value } = e.target;

    setForm((old) => ({
      ...old,
      [name]: value,
    }));
  }

  function submit(e) {
    e.preventDefault();

    if (!/^[6-9]\d{9}$/.test(form.phone)) {
      setError("कृपया सही 10 अंकों का मोबाइल नंबर दर्ज करें।");
      return;
    }

    setError("");

    const message = [
      "नमस्ते Aquaray Solar Solutions!",
      "मुझे दिवाली मेगा गिफ्ट धमाका ऑफर की जानकारी चाहिए।",
      "",
      `नाम: ${form.name}`,
      `मोबाइल: ${form.phone}`,
      `शहर / क्षेत्र: ${form.city}`,
      `मासिक बिजली बिल: ${form.bill}`,
      `सोलर क्षमता: ${form.capacity}`,
      "",
      "कृपया मुझे सोलर ऑफर, पात्रता और गिफ्ट कैंपेन की शर्तों की जानकारी दें।",
    ].join("\n");

    window.open(
      `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer"
    );
  }

  const inputClass =
    "w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100";

  return (
    <main
      id="home"
      className="min-h-screen overflow-hidden bg-white pb-20 text-slate-900 sm:pb-0"
    >
      {/* Navigation / मुख्य मेन्यू */}
      <header className="sticky top-0 z-40 border-b border-slate-100 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-6">
          {/* <a href="#home" className="leading-tight">
            <span className="block text-xl font-black tracking-tight text-blue-900 sm:text-2xl">
              ☀ AQUARAY
            </span>

            <span className="block pl-7 text-[10px] font-bold tracking-[2px] text-slate-600">
              SOLAR SOLUTIONS
            </span>
          </a> */}

          <a
            href="#register"
            className="rounded-full bg-amber-400 px-4 py-2.5 text-center text-sm font-extrabold text-blue-950 shadow-sm transition hover:bg-amber-300"
          >
            रजिस्टर करें / Register →
          </a>
        </div>
      </header>

      {/* Optional Diwali banner image */}
      <div className="mx-auto max-w-7xl px-3 pt-4 sm:px-6">
        <img
          src="/assets/aquaray_diwali_pot.png"
          alt="Aquaray Solar Solutions Diwali Mega Offer | दिवाली मेगा ऑफर"
          className="h-auto w-full rounded-2xl object-cover"
          onError={(e) => {
            e.currentTarget.style.display = "none";
          }}
        />
      </div>
      <div className="mx-auto max-w-7xl px-3 pt-4 sm:px-6">
        <img
          src="/assets/residence.jpeg"
          alt="Aquaray Solar Solutions Diwali Mega Offer | दिवाली मेगा ऑफर"
          className="h-auto w-full rounded-2xl object-cover"
          onError={(e) => {
            e.currentTarget.style.display = "none";
          }}
        />
      </div>
 <section className="bg-gradient-to-b from-orange-50 to-white px-4 py-10 sm:py-14">
      <div className="mx-auto max-w-md overflow-hidden rounded-3xl border-2 border-amber-300 bg-white shadow-xl">

        <div className="bg-gradient-to-r from-orange-600 to-red-600 px-5 py-4 text-center text-white">
          <p className="text-sm font-bold tracking-widest">
            🪔 AQUARAY SOLAR • दिवाली ऑफर 2026
          </p>
          <h2 className="mt-2 text-3xl font-black">
            30 ग्राहक, 30 उपहार!
          </h2>
        </div>

        <div className="p-6 text-center">
          <span className="inline-block rounded-full bg-amber-100 px-5 py-2 font-extrabold text-amber-800">
            🥇 प्रथम पुरस्कार
          </span>

          <div className="my-6 rounded-3xl bg-gradient-to-br from-amber-100 via-orange-50 to-red-100 px-4 py-7">
            <div className="text-8xl drop-shadow-md sm:text-9xl">
              🛵
            </div>
            <p className="mt-3 text-sm font-bold text-orange-700">
              आपके घर आ सकती है...
            </p>
            <h3 className="mt-1 text-3xl font-black text-slate-900">
              इलेक्ट्रिक स्कूटी
            </h3>
          </div>

          <div className="rounded-2xl bg-slate-900 p-4 text-white">
            <p className="text-xl font-extrabold text-amber-400">
              1 भाग्यशाली विजेता
            </p>
            <p className="mt-2 text-sm text-slate-200">
              और बाकी 29 ग्राहकों को भी उपहार! 🎁
            </p>
          </div>

          <div className="mt-5 rounded-xl border border-green-200 bg-green-50 p-4">
            <p className="text-lg font-black text-green-800">
              🎁 हर पात्र ग्राहक को उपहार
            </p>
            <p className="mt-1 text-sm text-green-700">
              30 पात्र रजिस्ट्रेशन के प्रत्येक बैच में
            </p>
          </div>

          <a
            href="#register"
            className="mt-6 block rounded-xl bg-orange-600 px-6 py-4 text-lg font-extrabold text-white shadow-lg transition hover:bg-orange-700"
          >
            अभी रजिस्ट्रेशन करें →
          </a>

          <p className="mt-4 text-xs leading-5 text-slate-500">
            नियम एवं शर्तें लागू। उपहार की पात्रता और विजेता चयन
            योजना के नियमों के अनुसार होगा।
          </p>
        </div>
      </div>
    </section>
      {/* Hero / मुख्य ऑफर */}
      <section className="relative overflow-hidden bg-gradient-to-br from-sky-50 via-white to-amber-50">
        <div className="pointer-events-none absolute -right-20 top-8 h-64 w-64 rounded-full bg-amber-200/40 blur-3xl" />
        <div className="pointer-events-none absolute -left-20 bottom-0 h-64 w-64 rounded-full bg-sky-200/50 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-8 px-5 py-12 sm:px-8 sm:py-16 lg:grid-cols-2 lg:py-20">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-amber-300 bg-amber-100 px-4 py-2 text-xs font-extrabold text-amber-900">
              🪔 दिवाली स्पेशल ऑफर | FESTIVE SPECIAL 🪔
              
            </div>

            <p className="mb-2 font-bold text-blue-800">
              इस दिवाली, घर-घर सोलर!

            </p>

{/* Complete Diwali Scheme / पूरी स्कीम की जानकारी */}



            <h1 className="text-4xl font-black leading-[1.08] tracking-tight text-blue-950 sm:text-5xl lg:text-6xl">
              Diwali Mega
              <span className="block text-amber-500">
                Gift Dhamaka!
              </span>
              <span className="mt-3 block text-2xl leading-tight text-blue-900 sm:text-3xl">
                दिवाली मेगा गिफ्ट धमाका!
              </span>
            </h1>

            <p className="mt-5 max-w-xl text-base leading-7 text-slate-600 sm:text-lg">
              सोलर सिस्टम के बारे में जानकारी लें और Aquaray Solar Solutions
              के दिवाली गिफ्ट कैंपेन की शर्तों एवं पात्रता के बारे में जानें।
            </p>

            <p className="mt-3 max-w-xl text-sm leading-6 text-slate-500">
              Explore solar solutions and learn about our festive gift
              campaign, eligibility and applicable terms.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#register"
                className="rounded-xl bg-blue-900 px-6 py-4 font-extrabold text-white shadow-lg shadow-blue-900/20 transition hover:bg-blue-800"
              >
                🎁 ऑफर के लिए रजिस्टर करें
              </a>

              <a
                href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(
                  "नमस्ते Aquaray Solar Solutions, मुझे दिवाली सोलर ऑफर की जानकारी चाहिए।"
                )}`}
                target="_blank"
                rel="noreferrer"
                className="rounded-xl border border-slate-300 bg-white px-5 py-4 font-bold text-slate-800 hover:bg-slate-50"
              >
                WhatsApp Enquiry
              </a>
            </div>

            <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm text-slate-600">
              <span>✓ सोलर मार्गदर्शन</span>
              <span>✓ सब्सिडी की जानकारी*</span>
              <span>✓ गिफ्ट कैंपेन की जानकारी*</span>
            </div>
          </div>

          {/* Gift highlight / गिफ्ट हाइलाइट */}
          <div className="relative mx-auto w-full max-w-lg">
            <div className="absolute inset-5 rounded-full bg-amber-200/60 blur-3xl" />

            <div className="relative rounded-[2rem] border border-amber-200 bg-white/90 p-5 shadow-2xl shadow-blue-900/10 sm:p-8">
              <div className="flex items-center justify-between">
                <span className="rounded-full bg-blue-100 px-3 py-1.5 text-xs font-extrabold text-blue-900">
                  FESTIVE SPECIAL
                </span>
                <span className="text-2xl">🪔</span>
              </div>

              <div className="py-6 text-center">
                <div className="text-7xl sm:text-8xl">🎁</div>

                <h2 className="mt-4 text-3xl font-black text-blue-950 sm:text-4xl">
                  30 GIFTS
                </h2>

                <p className="mt-2 text-lg font-bold text-amber-600">
                  30 उपहार | 30 संभावित विजेता
                </p>

                <p className="mt-2 text-sm text-slate-500">
                  सोलर लगाएँ • बिजली बचाएँ • भविष्य सँवारें
                </p>
              </div>

              <div className="grid grid-cols-4 gap-2 border-t border-slate-100 pt-5 text-center">
                {[
                  ["🛵", "Scooty", "स्कूटी"],
                  ["📺", "TV", "टीवी"],
                  ["📱", "Phone", "फोन"],
                  ["🎁", "Induction", "इंडक्शन"],
                ].map(([icon, english, hindi]) => (
                  <div
                    key={english}
                    className="rounded-xl bg-sky-50 px-1 py-3"
                  >
                    <div className="text-2xl">{icon}</div>
                    <p className="mt-1 text-[10px] font-bold text-blue-950 sm:text-xs">
                      {english}
                    </p>
                    <p className="mt-1 text-[10px] text-slate-600">
                      {hindi}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Prizes / उपहार */}
      <section id="gifts" className="bg-white px-5 py-14 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-10 max-w-2xl text-center">
            <p className="text-sm font-extrabold uppercase tracking-[3px] text-amber-600">
              Diwali Gift Collection
            </p>

            <h2 className="mt-3 text-3xl font-black text-blue-950 sm:text-4xl">
              आपके लिए शानदार उपहार!
            </h2>

            <p className="mt-3 text-slate-600">
              Bumper Gifts for You! जानें गिफ्ट कैंपेन की शर्तें और पात्रता।
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {prizes.map((prize) => (
              <article
                key={prize.title}
                className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div
                  className={`bg-gradient-to-r ${prize.color} px-3 py-3 text-center text-xs font-black tracking-wide text-white sm:text-sm`}
                >
                  {prize.rank}
                </div>

                <div className="flex h-40 items-center justify-center bg-gradient-to-b from-sky-50 to-white">
                  <span className="text-7xl transition group-hover:scale-110">
                    {prize.emoji}
                  </span>
                </div>

                <div className="px-4 pb-6 text-center">
                  <h3 className="text-lg font-extrabold text-blue-950">
                    {prize.title}
                  </h3>

                  <p className="mt-1 font-semibold text-slate-600">
                    {prize.hindi}
                  </p>

                  <p className="mt-3 inline-flex rounded-full bg-amber-100 px-3 py-1.5 text-xs font-bold text-amber-900">
                    {prize.detail}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <p className="mt-5 text-center text-xs leading-5 text-slate-500">
            गिफ्ट के चित्र केवल उदाहरण के लिए हैं। वास्तविक मॉडल, ब्रांड,
            विजेता चयन और वितरण प्रकाशित नियमों के अनुसार होंगे।
          </p>
        </div>
      </section>

      {/* Solar benefits / सोलर के फायदे */}
      <section id="benefits" className="bg-sky-50 px-5 py-12 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 text-center">
            <h2 className="text-2xl font-black text-blue-950 sm:text-3xl">
              Solar Lagane Ke Fayde
            </h2>

            <p className="mt-2 text-lg font-bold text-blue-800">
              सोलर लगाने के फायदे
            </p>

            <p className="mt-2 text-sm text-slate-600">
              अपने घर की जरूरत के अनुसार सही सोलर सिस्टम चुनें।
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
            {benefits.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-sky-100 bg-white p-4 text-center shadow-sm sm:p-6"
              >
                <div className="text-3xl">{item.icon}</div>

                <h3 className="mt-3 font-extrabold text-blue-950">
                  {item.title}
                </h3>

                <p className="mt-1 text-sm font-semibold text-blue-800">
                  {item.hindi}
                </p>

                <p className="mt-2 text-xs leading-5 text-slate-500 sm:text-sm">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Registration / पंजीकरण */}
      <section
        id="register"
        className="scroll-mt-28 bg-gradient-to-br from-blue-950 via-blue-900 to-sky-900 px-5 py-14 text-white sm:px-8 sm:py-20"
      >
        <div className="mx-auto grid max-w-6xl items-start gap-10 lg:grid-cols-2">
          <div className="lg:pt-8">
            <span className="rounded-full bg-amber-400 px-4 py-2 text-xs font-black uppercase tracking-widest text-blue-950">
              Register Now | अभी रजिस्टर करें
            </span>

            <h2 className="mt-6 text-3xl font-black leading-tight sm:text-5xl">
              अपनी जानकारी भरें,
              <span className="block text-amber-400">
                ऑफर की जानकारी पाएँ!
              </span>
            </h2>

            <p className="mt-5 max-w-lg leading-7 text-blue-100">
              फॉर्म भरें। WhatsApp खुलेगा, जहाँ से आप हमारी टीम को अपनी
              जानकारी भेजकर सोलर ऑफर, गिफ्ट कैंपेन और पात्रता के बारे में
              पूछ सकते हैं।
            </p>

            <p className="mt-3 max-w-lg text-sm leading-6 text-blue-200">
              Fill out the form to contact our team on WhatsApp for solar
              offers and campaign information.
            </p>

            <div className="mt-8 space-y-4">
              {[
                "आपके बिजली बिल के अनुसार सोलर मार्गदर्शन",
                "लागू सब्सिडी और फाइनेंस की जानकारी",
                "दिवाली गिफ्ट कैंपेन की शर्तें और पात्रता",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-400 font-black text-blue-950">
                    ✓
                  </span>

                  <p className="text-sm leading-6 text-blue-50">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <form
            onSubmit={submit}
            className="rounded-3xl bg-white p-5 text-slate-900 shadow-2xl sm:p-8"
          >
            <div className="mb-6">
              <h3 className="text-2xl font-black text-blue-950">
                Diwali Offer Registration
              </h3>

              <p className="mt-1 text-lg font-bold text-blue-800">
                दिवाली ऑफर पंजीकरण
              </p>

              <p className="mt-2 text-sm text-slate-500">
                * वाले सभी फील्ड भरना अनिवार्य है।
              </p>
            </div>

            <div className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-bold"
                >
                  Full Name / पूरा नाम *
                </label>

                <input
                  id="name"
                  name="name"
                  className={inputClass}
                  placeholder="अपना पूरा नाम लिखें"
                  value={form.name}
                  onChange={update}
                  autoComplete="name"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="mb-2 block text-sm font-bold"
                >
                  Mobile Number / मोबाइल नंबर *
                </label>

                <input
                  id="phone"
                  name="phone"
                  className={inputClass}
                  type="tel"
                  inputMode="numeric"
                  maxLength={10}
                  placeholder="10 अंकों का मोबाइल नंबर"
                  value={form.phone}
                  onChange={update}
                  autoComplete="tel-national"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="city"
                  className="mb-2 block text-sm font-bold"
                >
                  City / Area / शहर या क्षेत्र *
                </label>

                <input
                  id="city"
                  name="city"
                  className={inputClass}
                  placeholder="जैसे हरिद्वार, रुड़की, देहरादून"
                  value={form.city}
                  onChange={update}
                  autoComplete="address-level2"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="bill"
                  className="mb-2 block text-sm font-bold"
                >
                  Monthly Electricity Bill / मासिक बिजली बिल *
                </label>

                <select
                  id="bill"
                  name="bill"
                  className={inputClass}
                  value={form.bill}
                  onChange={update}
                  required
                >
                  <option value="">बिजली बिल चुनें</option>
                  {billOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label
                  htmlFor="capacity"
                  className="mb-2 block text-sm font-bold"
                >
                  Interested Solar Capacity / सोलर क्षमता
                </label>

                <select
                  id="capacity"
                  name="capacity"
                  className={inputClass}
                  value={form.capacity}
                  onChange={update}
                >
                  {capacities.map((capacity) => (
                    <option key={capacity} value={capacity}>
                      {capacity}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {error && (
              <p
                role="alert"
                className="mt-3 text-sm font-semibold text-red-600"
              >
                {error}
              </p>
            )}

            <button
              type="submit"
              className="mt-6 w-full rounded-xl bg-emerald-600 px-5 py-4 font-extrabold text-white shadow-lg transition hover:bg-emerald-700 focus:outline-none focus:ring-4 focus:ring-emerald-200"
            >
              WhatsApp पर जानकारी भेजें →
            </button>

            <p className="mt-4 text-center text-xs leading-5 text-slate-500">
              बटन दबाने पर WhatsApp खुलेगा। आपका संदेश तभी भेजा जाएगा जब
              आप WhatsApp में Send दबाएँगे। यह फॉर्म अपने आप डेटाबेस में
              जानकारी सेव नहीं करता।
            </p>
          </form>
        </div>
      </section>

      {/* Terms / नियम और शर्तें */}
      {/* <section
        id="terms"
        className="scroll-mt-28 bg-amber-50 px-5 py-10 sm:px-8"
      >
        <div className="mx-auto max-w-5xl rounded-2xl border border-amber-200 bg-white p-5 sm:p-7">
          <h2 className="text-xl font-black text-blue-950">
            Offer Terms & Conditions
          </h2>

          <p className="mt-1 font-bold text-blue-800">
            ऑफर के नियम एवं शर्तें
          </p>

          <ul className="mt-4 list-disc space-y-3 pl-5 text-sm leading-6 text-slate-600">
            <li>
              प्रस्तावित गिफ्ट सूची में 1 इलेक्ट्रिक स्कूटी, 1 टीवी,
              1 स्मार्टफोन और 27 इंडक्शन कुकटॉप शामिल हैं।
            </li>

            <li>
              पंजीकरण करने से किसी पुरस्कार के जीतने की गारंटी नहीं है।
              विजेता चयन, पात्रता, अभियान की अवधि और पुरस्कार वितरण के
              नियम आधिकारिक रूप से प्रकाशित किए जाने चाहिए।
            </li>

            <li>
              गिफ्ट के मॉडल, ब्रांड और उपलब्धता में बदलाव हो सकता है।
              अंतिम विवरण अभियान के आधिकारिक नियमों के अनुसार होगा।
            </li>

            <li>
              सोलर सब्सिडी सरकारी योजना, स्वीकृति और व्यक्तिगत पात्रता पर
              निर्भर करती है। सब्सिडी या लोन की मंजूरी की गारंटी नहीं है।
            </li>

            <li>
              निःशुल्क साइट विजिट सेवा क्षेत्र और अपॉइंटमेंट की उपलब्धता
              के अनुसार होगी।
            </li>

            <li>
              कृपया पंजीकरण करने से पहले अभियान के आधिकारिक नियम पढ़ें।
              पुरस्कार जीतने और सोलर खरीदने की शर्तें स्पष्ट रूप से
              प्रकाशित की जानी चाहिए।
            </li>
          </ul>
        </div>
      </section> */}

{/* Offer Terms & Conditions */}
<section
  id="terms"
  className="bg-slate-50 px-4 py-12 sm:px-8 sm:py-16"
>
  <div className="mx-auto max-w-4xl">

    <div className="mb-8 text-center">
      <span className="inline-block rounded-full bg-amber-100 px-4 py-2 text-xs font-extrabold text-amber-800">
        🪔 AQUARAY SOLAR • DIWALI 2026
      </span>

      <h2 className="mt-4 text-2xl font-black text-slate-900 sm:text-4xl">
        ऑफर के नियम एवं शर्तें
      </h2>

      <p className="mt-3 text-sm text-slate-600 sm:text-base">
        दिवाली ऑफर में भाग लेने से पहले कृपया नियम ध्यान से पढ़ें।
      </p>
    </div>

    <div className="space-y-5 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-8">

      {/* Gifts */}
      <div>
        <h3 className="text-lg font-extrabold text-slate-900">
          🎁 1. उपहारों की सूची
        </h3>

        <p className="mt-2 leading-7 text-slate-600">
          प्रत्येक 30 पात्र ग्राहकों के बैच के लिए प्रस्तावित उपहार:
        </p>

        <ul className="mt-3 space-y-2 text-slate-700">
          <li>🛵 1 इलेक्ट्रिक स्कूटी — प्रथम पुरस्कार</li>
          <li>📺 1 एलसीडी / एलईडी टीवी — द्वितीय पुरस्कार</li>
          <li>📱 1 स्मार्टफोन — तृतीय पुरस्कार</li>
          <li>🍳 27 इंडक्शन कुकटॉप — अन्य 27 विजेताओं के लिए</li>
        </ul>
      </div>

      <div className="border-t border-slate-100 pt-5">
        <h3 className="text-lg font-extrabold text-slate-900">
          📋 2. पात्रता एवं पंजीकरण
        </h3>
        <p className="mt-2 leading-7 text-slate-600">
          प्रतिभागियों को अभियान की निर्धारित पात्रता शर्तें पूरी करनी होंगी।
          केवल पंजीकरण करने से किसी विशेष पुरस्कार को जीतने की गारंटी नहीं
          मिलती। प्रत्येक बैच में पात्रता और विजेता चयन आधिकारिक नियमों
          के अनुसार होगा।
        </p>
      </div>

      <div className="border-t border-slate-100 pt-5">
        <h3 className="text-lg font-extrabold text-slate-900">
          🎉 3. विजेता चयन एवं उपहार वितरण
        </h3>
        <p className="mt-2 leading-7 text-slate-600">
          विजेताओं के चयन की प्रक्रिया, चयन की तारीख और उपहार वितरण की
          समय-सीमा अभियान के आधिकारिक नियमों के अनुसार घोषित की जाएगी।
          उपहार प्राप्त करने के लिए विजेताओं को आवश्यक सत्यापन पूरा करना होगा।
        </p>
      </div>

      <div className="border-t border-slate-100 pt-5">
        <h3 className="text-lg font-extrabold text-slate-900">
          🛍️ 4. उपहारों से संबंधित शर्तें
        </h3>
        <p className="mt-2 leading-7 text-slate-600">
          उपहारों के ब्रांड, मॉडल और उपलब्धता का विवरण आधिकारिक नियमों
          में दिया जाएगा। किसी बदलाव की आवश्यकता होने पर प्रतिभागियों को
          इसकी जानकारी दी जाएगी।
        </p>
      </div>

      <div className="border-t border-slate-100 pt-5">
        <h3 className="text-lg font-extrabold text-slate-900">
          ☀️ 5. सोलर सब्सिडी एवं फाइनेंस
        </h3>
        <p className="mt-2 leading-7 text-slate-600">
          सरकारी सब्सिडी संबंधित योजना, ग्राहक की पात्रता और विभागीय
          स्वीकृति पर निर्भर करती है। लोन की मंजूरी बैंक या वित्तीय संस्था
          के नियमों के अनुसार होगी। सब्सिडी या लोन की मंजूरी की गारंटी
          नहीं दी जाती।
        </p>
      </div>

      <div className="border-t border-slate-100 pt-5">
        <h3 className="text-lg font-extrabold text-slate-900">
          🏠 6. निःशुल्क साइट विजिट
        </h3>
        <p className="mt-2 leading-7 text-slate-600">
          निःशुल्क साइट विजिट निर्धारित सेवा क्षेत्र और अपॉइंटमेंट की
          उपलब्धता के अनुसार प्रदान की जाएगी।
        </p>
      </div>

      <div className="rounded-2xl border border-amber-200 bg-amber-50 p-4">
        <h3 className="font-extrabold text-amber-900">
          महत्वपूर्ण सूचना
        </h3>
        <p className="mt-2 text-sm leading-6 text-amber-900">
          पंजीकरण करने से पहले अभियान के आधिकारिक नियम अवश्य पढ़ें।
          पुरस्कारों की संख्या, पात्रता, विजेता चयन और वितरण से संबंधित
          सभी शर्तें प्रतिभागियों के लिए स्पष्ट रूप से उपलब्ध कराई जाएंगी।
        </p>
      </div>

      <div className="text-center">
        <a
          href="#register"
          className="inline-flex w-full items-center justify-center rounded-xl bg-orange-600 px-6 py-3 font-extrabold text-white transition hover:bg-orange-700 sm:w-auto"
        >
          रजिस्ट्रेशन पर वापस जाएँ →
        </a>
      </div>

    </div>

    <p className="mt-5 text-center text-xs text-slate-500">
      © 2026 Aquaray Solar Solutions. सर्वाधिकार सुरक्षित।
    </p>

  </div>
</section>

      {/* Footer / संपर्क */}
      {/* <footer className="bg-slate-950 px-5 py-10 text-white sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <a href="#home" className="text-2xl font-black text-sky-400">
              ☀ AQUARAY
            </a>

            <p className="mt-1 text-xs font-bold tracking-[3px] text-slate-300">
              SOLAR SOLUTIONS
            </p>

            <p className="mt-1 text-sm font-semibold text-slate-300">
              एक्वारे सोलर सॉल्यूशंस
            </p>

            <p className="mt-4 max-w-xs text-sm leading-6 text-slate-400">
              Clean Energy | Better Tomorrow
              <br />
              स्वच्छ ऊर्जा, बेहतर कल।
              <br />
              सोलर लगाएँ, बिजली बचाएँ, भविष्य सँवारें।
            </p>
          </div>

          <div>
            <h3 className="font-bold">Contact Us | संपर्क करें</h3>

            <a
              className="mt-3 block text-sm text-slate-300 hover:text-amber-400"
              href={`https://wa.me/${WHATSAPP}`}
              target="_blank"
              rel="noreferrer"
            >
              WhatsApp: 7302528798
            </a>

            <a
              className="mt-2 block text-sm text-slate-300 hover:text-amber-400"
              href="https://aquaraysolar.in/"
              target="_blank"
              rel="noreferrer"
            >
              www.aquaraysolar.in
            </a>

            <a
              className="mt-2 block break-all text-sm text-slate-300 hover:text-amber-400"
              href="mailto:aquaraysolar@gmail.com"
            >
              aquaraysolar@gmail.com
            </a>
          </div>

          <div>
            <h3 className="font-bold">Quick Links | जरूरी लिंक</h3>

            <a
              href="#gifts"
              className="mt-3 block text-sm text-slate-300 hover:text-amber-400"
            >
              Gift Collection / उपहार
            </a>

            <a
              href="#benefits"
              className="mt-2 block text-sm text-slate-300 hover:text-amber-400"
            >
              Solar Benefits / सोलर फायदे
            </a>

            <a
              href="#register"
              className="mt-2 block text-sm text-slate-300 hover:text-amber-400"
            >
              Register for Offer / पंजीकरण
            </a>

            <a
              href="#terms"
              className="mt-2 block text-sm text-slate-300 hover:text-amber-400"
            >
              Terms & Conditions / नियम
            </a>

            <div className="mt-4 flex flex-wrap gap-4 text-sm">
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noreferrer"
                className="text-sky-300 hover:text-white"
              >
                Facebook
              </a>

              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
                className="text-sky-300 hover:text-white"
              >
                Instagram
              </a>

              <a
                href="https://www.youtube.com/"
                target="_blank"
                rel="noreferrer"
                className="text-sky-300 hover:text-white"
              >
                YouTube
              </a>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-8 max-w-7xl border-t border-white/10 pt-5 text-center text-xs text-slate-500">
          © {new Date().getFullYear()} Aquaray Solar Solutions.
          All rights reserved.
          <br />
          एक्वारे सोलर सॉल्यूशंस। सर्वाधिकार सुरक्षित।
        </div>
      </footer> */}

      {/* Mobile bottom CTA / मोबाइल रजिस्ट्रेशन बटन */}
      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-slate-200 bg-white/95 p-3 backdrop-blur sm:hidden">
        <a
          href="#register"
          className="block rounded-xl bg-amber-400 px-4 py-3 text-center font-extrabold text-blue-950 shadow-md"
        >
          🎁 दिवाली ऑफर के लिए रजिस्टर करें
        </a>
      </div>
    </main>
  );
}
