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
    rank: "1st PRIZE",
    title: "Electric Scooty",
    detail: "1 Winner",
    emoji: "🛵",
    color: "from-rose-500 to-orange-500",
  },
  {
    rank: "2nd PRIZE",
    title: "LCD / Smart TV",
    detail: "1 Winner",
    emoji: "📺",
    color: "from-blue-500 to-indigo-600",
  },
  {
    rank: "3rd PRIZE",
    title: "Smartphone",
    detail: "1 Winner",
    emoji: "📱",
    color: "from-emerald-500 to-teal-600",
  },
  {
    rank: "GIFT PRIZE",
    title: "Induction Cooktop",
    detail: "27 Winners • Any Brand",
    emoji: "🎁",
    color: "from-purple-500 to-fuchsia-600",
  },
];

const benefits = [
  { icon: "☀️", title: "Solar Solutions", text: "Bill ke hisaab se guidance" },
  { icon: "₹85800", title: "Subsidy Guidance", text: "Eligibility ki jaankari" },
  { icon: "🏠", title: "Free Site Visit", text: "Subject to service area" },
  { icon: "🛡️", title: "Expert Support", text: "Installation se related help" },
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
    setForm((old) => ({ ...old, [e.target.name]: e.target.value }));
  }

  function submit(e) {
    e.preventDefault();

    if (!/^[6-9]\d{9}$/.test(form.phone)) {
      setError("Sahi 10-digit mobile number enter karein.");
      return;
    }

    setError("");

    const message = [
      "Namaste Aquaray Solar Solutions!",
      "Mujhe Diwali Mega Gift Dhamaka offer mein interest hai.",
      "",
      `Name: ${form.name}`,
      `Mobile: ${form.phone}`,
      `City / Area: ${form.city}`,
      `Monthly Bill: ${form.bill}`,
      `Solar Capacity: ${form.capacity}`,
      "",
      "Please contact me with offer details and eligibility terms.",
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
    <main className="min-h-screen overflow-hidden bg-white text-slate-900">
      {/* Announcement bar */}
      {/* <div className="bg-blue-950 px-4 py-2 text-center text-xs font-semibold text-white sm:text-sm">
        🪔 Aquaray Solar Solutions • Diwali Mega Gift Dhamaka 🪔
      </div> */}
      

      {/* Navigation */}
      <header className="sticky top-0 z-40 border-b border-slate-100 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-6">
          <a href="#home" className="leading-tight">
            <span className="text-xl font-black tracking-tight text-blue-900 sm:text-2xl">
              ☀ AQUARAY
            </span>
            <span className="block pl-7 text-[10px] font-bold tracking-[2px] text-slate-600">
              SOLAR SOLUTIONS
            </span>
          </a>

          <a
            href="#register"
            className="rounded-full bg-amber-400 px-4 py-2.5 text-sm font-extrabold text-blue-950 shadow-sm transition hover:bg-amber-300"
          >
            Register Now →
          </a>
        </div>
      </header>

              <div className="mb-12">
      <img
        src="/assets/diwali_slide.png"
        alt="Solar Street Light Types Overview"
      />
    </div>
      {/* Hero */}
      <section
        id="home"
        className="relative overflow-hidden bg-gradient-to-br from-sky-50 via-white to-amber-50"
      >
        <div className="pointer-events-none absolute -right-20 top-8 h-64 w-64 rounded-full bg-amber-200/40 blur-3xl" />
        <div className="pointer-events-none absolute -left-20 bottom-0 h-64 w-64 rounded-full bg-sky-200/50 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-8 px-5 py-12 sm:px-8 sm:py-16 lg:grid-cols-2 lg:py-20">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-amber-300 bg-amber-100 px-4 py-2 text-xs font-extrabold uppercase tracking-wide text-amber-900">
              ✨ Special Festive Campaign ✨
            </div>

            <p className="mb-2 font-bold text-blue-800">
              Is Diwali Ghar-Ghar Solar!
            </p>

            <h1 className="text-4xl font-black leading-[1.08] tracking-tight text-blue-950 sm:text-5xl lg:text-6xl">
              Diwali Mega
              <span className="block text-amber-500">Gift Dhamaka!</span>
            </h1>

            <p className="mt-5 max-w-xl text-base leading-7 text-slate-600 sm:text-lg">
              Solar installation ke liye enquiry karein aur Aquaray ke
              festive gift campaign ke baare mein jaanein.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#register"
                className="rounded-xl bg-blue-900 px-6 py-4 font-extrabold text-white shadow-lg shadow-blue-900/20 transition hover:bg-blue-800"
              >
                🎁 Offer Ke Liye Register Karein
              </a>
              <a
                href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(
                  "Namaste Aquaray, mujhe Diwali Solar Offer ki details chahiye."
                )}`}
                target="_blank"
                rel="noreferrer"
                className="rounded-xl border border-slate-300 bg-white px-5 py-4 font-bold text-slate-800 hover:bg-slate-50"
              >
                WhatsApp Enquiry
              </a>
            </div>

            <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm text-slate-600">
              <span>✓ Solar Consultation</span>
              <span>✓ Subsidy Guidance*</span>
              <span>✓ Festive Gifts*</span>
            </div>
          </div>

          {/* Hero visual */}
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
                  30 Lucky Winners
                </p>
                <p className="mt-2 text-sm text-slate-500">
                  Solar lagao • Bijli bachao • Future sanwaaro
                </p>
              </div>

              <div className="grid grid-cols-4 gap-2 border-t border-slate-100 pt-5 text-center">
                {["🛵", "📺", "📱", "🎁"].map((icon, i) => (
                  <div
                    key={icon}
                    className="rounded-xl bg-sky-50 py-3"
                  >
                    <div className="text-2xl">{icon}</div>
                    <p className="mt-1 text-[10px] font-bold text-blue-950 sm:text-xs">
                      {["Scooty", "TV", "Phone", "Induction"][i]}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Prize section */}
      <section id="gifts" className="bg-white px-5 py-14 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-10 max-w-2xl text-center">
            <p className="text-sm font-extrabold uppercase tracking-[3px] text-amber-600">
              Diwali Gift Collection
            </p>
            <h2 className="mt-3 text-3xl font-black text-blue-950 sm:text-4xl">
              Aapke Liye Bumper Gifts!
            </h2>
            <p className="mt-3 text-slate-600">
              3 grand prizes aur 27 additional gift prizes — campaign
              ki applicable conditions ke adheen.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {prizes.map((prize) => (
              <article
                key={prize.title}
                className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div
                  className={`bg-gradient-to-r ${prize.color} px-4 py-3 text-center text-sm font-black tracking-wide text-white`}
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
                  <p className="mt-2 inline-flex rounded-full bg-amber-100 px-3 py-1.5 text-xs font-bold text-amber-900">
                    {prize.detail}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <p className="mt-5 text-center text-xs leading-5 text-slate-500">
            Prize images are illustrative. Actual models, brands, selection
            process and eligibility will be governed by the published
            campaign terms.
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-sky-50 px-5 py-12 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 text-center">
            <h2 className="text-2xl font-black text-blue-950 sm:text-3xl">
              Solar Lagane Ke Fayde
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              Apne ghar ke liye sahi solar system choose karein.
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
                <p className="mt-1 text-xs leading-5 text-slate-500 sm:text-sm">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Registration */}
      <section
        id="register"
        className="scroll-mt-24 bg-gradient-to-br from-blue-950 via-blue-900 to-sky-900 px-5 py-14 text-white sm:px-8 sm:py-20"
      >
        <div className="mx-auto grid max-w-6xl items-start gap-10 lg:grid-cols-2">
          <div className="lg:pt-8">
            <span className="rounded-full bg-amber-400 px-4 py-2 text-xs font-black uppercase tracking-widest text-blue-950">
              Register Now
            </span>
            <h2 className="mt-6 text-3xl font-black leading-tight sm:text-5xl">
              Apni Details Bharein,
              <span className="block text-amber-400">
                Offer Ki Jaankari Paayein!
              </span>
            </h2>
            <p className="mt-5 max-w-lg leading-7 text-blue-100">
              Form fill karein. WhatsApp par message ready hoga, jise
              send karke hamari team se offer, solar system aur eligibility
              ke baare mein pooch sakte hain.
            </p>

            <div className="mt-8 space-y-4">
              {[
                "Aapke electricity bill ke hisaab se solar guidance",
                "Applicable subsidy aur finance information",
                "Diwali gift campaign ki terms aur eligibility",
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
              <p className="mt-2 text-sm text-slate-500">
                * Required fields fill karein.
              </p>
            </div>

            <div className="space-y-4">
              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-bold">
                  Full Name *
                </label>
                <input
                  id="name"
                  name="name"
                  className={inputClass}
                  placeholder="Apna poora naam"
                  value={form.name}
                  onChange={update}
                  autoComplete="name"
                  required
                />
              </div>

              <div>
                <label htmlFor="phone" className="mb-2 block text-sm font-bold">
                  Mobile Number *
                </label>
                <input
                  id="phone"
                  name="phone"
                  className={inputClass}
                  type="tel"
                  inputMode="numeric"
                  maxLength={10}
                  placeholder="10-digit mobile number"
                  value={form.phone}
                  onChange={update}
                  autoComplete="tel-national"
                  required
                />
              </div>

              <div>
                <label htmlFor="city" className="mb-2 block text-sm font-bold">
                  City / Area *
                </label>
                <input
                  id="city"
                  name="city"
                  className={inputClass}
                  placeholder="Jaise Haridwar, Roorkee, Dehradun"
                  value={form.city}
                  onChange={update}
                  autoComplete="address-level2"
                  required
                />
              </div>

              <div>
                <label htmlFor="bill" className="mb-2 block text-sm font-bold">
                  Monthly Electricity Bill *
                </label>
                <select
                  id="bill"
                  name="bill"
                  className={inputClass}
                  value={form.bill}
                  onChange={update}
                  required
                >
                  <option value="">Bill range select karein</option>
                  <option>Below ₹1,000</option>
                  <option>₹1,000 – ₹2,000</option>
                  <option>₹2,000 – ₹3,000</option>
                  <option>₹3,000 – ₹5,000</option>
                  <option>Above ₹5,000</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="capacity"
                  className="mb-2 block text-sm font-bold"
                >
                  Interested Solar Capacity
                </label>
                <select
                  id="capacity"
                  name="capacity"
                  className={inputClass}
                  value={form.capacity}
                  onChange={update}
                >
                  <option>2 kW</option>
                  <option>3 kW</option>
                  <option>4 kW</option>
                  <option>5 kW</option>
                  <option>Not Sure - Need Advice</option>
                </select>
              </div>
            </div>

            {error && (
              <p role="alert" className="mt-3 text-sm font-semibold text-red-600">
                {error}
              </p>
            )}

            <button
              type="submit"
              className="mt-6 w-full rounded-xl bg-emerald-600 px-5 py-4 font-extrabold text-white shadow-lg transition hover:bg-emerald-700 focus:outline-none focus:ring-4 focus:ring-emerald-200"
            >
              WhatsApp Par Register Karein →
            </button>

            <p className="mt-4 text-center text-xs leading-5 text-slate-500">
              Submit karne se WhatsApp khulega. Registration message tabhi
              bheja jayega jab aap WhatsApp par Send press karenge.
            </p>
          </form>
        </div>
      </section>

      {/* Terms */}
      <section className="bg-amber-50 px-5 py-10 sm:px-8">
        <div className="mx-auto max-w-5xl rounded-2xl border border-amber-200 bg-white p-5 sm:p-7">
          <h2 className="text-lg font-black text-blue-950">
            Offer Terms & Conditions
          </h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-6 text-slate-600">
            <li>
              Campaign mein total 30 gifts proposed hain: 1 electric scooty,
              1 TV, 1 smartphone aur 27 induction cooktops.
            </li>
            <li>
              Registration apne aap kisi prize ki guarantee nahi hai.
              Eligibility, winner selection, campaign dates aur prize
              distribution ke final rules Aquaray ke published terms ke
              mutabik honge.
            </li>
            <li>
              Prize model, brand aur availability badal sakti hai; final
              details campaign start hone se pehle confirm karein.
            </li>
            <li>
              Solar subsidy aur financing government scheme, bank approval
              aur individual eligibility par depend karti hai.
            </li>
            <li>
              Free site visit service area aur appointment availability
              ke adheen hai.
            </li>
          </ul>
        </div>
      </section>

      {/* Footer */}
      {/* <footer className="bg-slate-950 px-5 py-10 text-white sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <a href="#home" className="text-2xl font-black text-sky-400">
              ☀ AQUARAY
            </a>
            <p className="mt-1 text-xs font-bold tracking-[3px] text-slate-300">
              SOLAR SOLUTIONS
            </p>
            <p className="mt-4 max-w-xs text-sm leading-6 text-slate-400">
              Clean Energy | Better Tomorrow
              <br />
              Solar lagao, bijli bachao, future sanwaaro.
            </p>
          </div>

          <div>
            <h3 className="font-bold">Contact Us</h3>
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
            <h3 className="font-bold">Explore</h3>
            <a href="#gifts" className="mt-3 block text-sm text-slate-300 hover:text-amber-400">
              Gift Collection
            </a>
            <a href="#register" className="mt-2 block text-sm text-slate-300 hover:text-amber-400">
              Register for Offer
            </a>
            <div className="mt-4 flex flex-wrap gap-3 text-sm">
              <a href="https://www.facebook.com/" target="_blank" rel="noreferrer" className="text-sky-300 hover:text-white">Facebook</a>
              <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" className="text-sky-300 hover:text-white">Instagram</a>
              <a href="https://www.youtube.com/" target="_blank" rel="noreferrer" className="text-sky-300 hover:text-white">YouTube</a>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-8 max-w-7xl border-t border-white/10 pt-5 text-center text-xs text-slate-500">
          © {new Date().getFullYear()} Aquaray Solar Solutions. All rights reserved.
        </div>
      </footer> */}

      {/* Mobile bottom CTA */}
      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-slate-200 bg-white/95 p-3 backdrop-blur sm:hidden">
        <a
          href="#register"
          className="block rounded-xl bg-amber-400 px-4 py-3 text-center font-extrabold text-blue-950 shadow-md"
        >
          🎁 Register for Diwali Offer
        </a>
      </div>
    </main>
  );
}
