// ============================================
//   CROP LOGIC — Smart Crop Suggestion Engine
//   Soil Type Detection + Multi-Crop Ranking
// ============================================

// Import crop images
import maizeImg from "../assets/images/maize_farm.avif";
import wheatImg from "../assets/images/wheat_form.avif";
import riceImg from "../assets/images/rice_farm.avif";
import cottonImg from "../assets/images/cotton_farm.avif";
import sugarcaneImg from "../assets/images/sugarcane_farm.jpg";
import groundnutImg from "../assets/images/groundnut_farm.jpg";
import milletImg from "../assets/images/millet_farm.jpg";
import soybeanImg from "../assets/images/soybean_farm.jpg";
import tobaccoImg from "../assets/images/tobacco_farm.avif";
import barleyImg from "../assets/images/barley_farm.avif";
// import chickpeaImg  from '../assets/images/chickpea_farm.avif';
// import pigeonpeaImg from '../assets/images/pigeon_pea_farm.jpg';

// ============================================
//   SOIL TYPE DATABASE
// ============================================
export const soilTypes = [
  {
    name: "Alluvial Soil",
    emoji: "🟤",
    minN: 80,
    maxN: 180,
    minP: 30,
    maxP: 80,
    minK: 40,
    maxK: 100,
    minMoisture: 50,
    maxMoisture: 80,
    minPh: 6.0,
    maxPh: 7.5,
    description:
      "Fertile soil found near river plains. Rich in nutrients and ideal for a wide range of crops.",
  },
  {
    name: "Black Soil",
    emoji: "⚫",
    minN: 60,
    maxN: 140,
    minP: 20,
    maxP: 60,
    minK: 60,
    maxK: 120,
    minMoisture: 40,
    maxMoisture: 70,
    minPh: 7.0,
    maxPh: 8.5,
    description:
      "High water retention and rich in calcium. Best suited for cotton and drought-resistant crops.",
  },
  {
    name: "Red Soil",
    emoji: "🔴",
    minN: 30,
    maxN: 90,
    minP: 10,
    maxP: 40,
    minK: 20,
    maxK: 70,
    minMoisture: 30,
    maxMoisture: 60,
    minPh: 5.5,
    maxPh: 7.0,
    description:
      "Iron-rich soil with good drainage. Suitable for crops that tolerate low fertility.",
  },
  {
    name: "Laterite Soil",
    emoji: "🟠",
    minN: 20,
    maxN: 70,
    minP: 5,
    maxP: 30,
    minK: 10,
    maxK: 50,
    minMoisture: 35,
    maxMoisture: 65,
    minPh: 4.5,
    maxPh: 6.0,
    description:
      "Highly leached acidic soil. Low in nutrients but suitable for plantation crops.",
  },
  {
    name: "Desert (Arid) Soil",
    emoji: "🏜️",
    minN: 5,
    maxN: 40,
    minP: 5,
    maxP: 25,
    minK: 30,
    maxK: 80,
    minMoisture: 5,
    maxMoisture: 25,
    minPh: 7.5,
    maxPh: 9.0,
    description:
      "Sandy, dry soil with high salt content. Very limited crop options without irrigation.",
  },
  {
    name: "Forest Soil",
    emoji: "🌲",
    minN: 50,
    maxN: 120,
    minP: 20,
    maxP: 60,
    minK: 30,
    maxK: 80,
    minMoisture: 55,
    maxMoisture: 85,
    minPh: 4.5,
    maxPh: 6.5,
    description:
      "Rich in organic matter and humus. Good for shade-loving and plantation crops.",
  },
  {
    name: "Peaty Soil",
    emoji: "🟫",
    minN: 100,
    maxN: 200,
    minP: 10,
    maxP: 40,
    minK: 10,
    maxK: 50,
    minMoisture: 75,
    maxMoisture: 100,
    minPh: 3.5,
    maxPh: 5.5,
    description:
      "Very high organic content and moisture. Naturally acidic, requires liming for most crops.",
  },
  {
    name: "Saline Soil",
    emoji: "🧂",
    minN: 10,
    maxN: 60,
    minP: 5,
    maxP: 30,
    minK: 50,
    maxK: 120,
    minMoisture: 20,
    maxMoisture: 55,
    minPh: 8.0,
    maxPh: 10.0,
    description:
      "High salt concentration soil. Only salt-tolerant crops can survive in this soil.",
  },
];

// ============================================
//   CROP DATABASE
// ============================================
export const cropDatabase = [
  {
    name: "Maize",
    emoji: "🌽",
    image: maizeImg,
    origin: "Indian",
    idealN: 130,
    idealP: 45,
    idealK: 60,
    idealMoisture: 67,
    idealPh: 6.4,
    minN: 90,
    maxN: 170,
    minP: 25,
    maxP: 65,
    minK: 35,
    maxK: 85,
    minMoisture: 50,
    maxMoisture: 82,
    minPh: 5.8,
    maxPh: 7.2,
    reasons: [
      "Your soil has optimal Nitrogen levels ideal for Maize.",
      "Current Phosphorus and Potassium levels support Maize growth.",
      "pH and Moisture are in the perfect range for Maize.",
    ],
    tip: "Add a small amount of Phosphorus fertilizer. This will further boost the yield of Maize.",
    soilSuits: ["Alluvial Soil", "Red Soil", "Black Soil"],
  },
  {
    name: "Wheat",
    emoji: "🌾",
    image: wheatImg,
    origin: "Indian",
    idealN: 90,
    idealP: 35,
    idealK: 50,
    idealMoisture: 52,
    idealPh: 6.8,
    minN: 55,
    maxN: 125,
    minP: 15,
    maxP: 55,
    minK: 25,
    maxK: 75,
    minMoisture: 38,
    maxMoisture: 68,
    minPh: 6.0,
    maxPh: 7.5,
    reasons: [
      "Nitrogen level is well-suited for healthy wheat growth.",
      "Phosphorus supports strong root and grain development.",
      "pH is within the ideal wheat cultivation range.",
    ],
    tip: "Apply Urea during the tillering stage to improve grain count and yield.",
    soilSuits: ["Alluvial Soil", "Black Soil"],
  },
  {
    name: "Rice",
    emoji: "🌾",
    image: riceImg,
    origin: "Indian",
    idealN: 110,
    idealP: 40,
    idealK: 55,
    idealMoisture: 82,
    idealPh: 6.0,
    minN: 75,
    maxN: 145,
    minP: 20,
    maxP: 58,
    minK: 30,
    maxK: 78,
    minMoisture: 68,
    maxMoisture: 98,
    minPh: 5.5,
    maxPh: 6.8,
    reasons: [
      "High moisture content is perfect for paddy cultivation.",
      "Nitrogen and Phosphorus are balanced for rice.",
      "Slightly acidic pH is ideal for rice growth.",
    ],
    tip: "Maintain flooded conditions during vegetative stage. Add zinc sulfate for better tillering.",
    soilSuits: ["Alluvial Soil", "Peaty Soil", "Forest Soil"],
  },
  {
    name: "Cotton",
    emoji: "🌿",
    image: cottonImg,
    origin: "Indian",
    idealN: 75,
    idealP: 30,
    idealK: 70,
    idealMoisture: 57,
    idealPh: 6.4,
    minN: 45,
    maxN: 105,
    minP: 10,
    maxP: 48,
    minK: 45,
    maxK: 95,
    minMoisture: 40,
    maxMoisture: 72,
    minPh: 5.8,
    maxPh: 7.2,
    reasons: [
      "Soil Nitrogen and Potassium are at levels that promote healthy Cotton plants.",
      "pH levels are slightly acidic, which is beneficial for Cotton roots.",
      "Moisture content is ideal for Cotton cultivation.",
    ],
    tip: "Add 2/3rds more Potassium fertilizer to maximize Cotton yield and fiber quality.",
    soilSuits: ["Black Soil", "Alluvial Soil", "Red Soil"],
  },
  {
    name: "Sugarcane",
    emoji: "🎋",
    image: sugarcaneImg,
    origin: "Indian",
    idealN: 150,
    idealP: 55,
    idealK: 80,
    idealMoisture: 77,
    idealPh: 6.7,
    minN: 110,
    maxN: 190,
    minP: 35,
    maxP: 75,
    minK: 55,
    maxK: 105,
    minMoisture: 62,
    maxMoisture: 92,
    minPh: 6.0,
    maxPh: 7.5,
    reasons: [
      "High Nitrogen supports strong sugarcane stalk development.",
      "Potassium level is ideal for sugar content buildup.",
      "Moisture is well-suited for sugarcane cultivation.",
    ],
    tip: "Apply organic compost along with NPK to enhance juice quality and cane weight.",
    soilSuits: ["Alluvial Soil", "Black Soil"],
  },
  {
    name: "Groundnut",
    emoji: "🥜",
    image: groundnutImg,
    origin: "Indian",
    idealN: 55,
    idealP: 35,
    idealK: 45,
    idealMoisture: 52,
    idealPh: 6.2,
    minN: 25,
    maxN: 85,
    minP: 15,
    maxP: 55,
    minK: 20,
    maxK: 70,
    minMoisture: 38,
    maxMoisture: 68,
    minPh: 5.5,
    maxPh: 7.0,
    reasons: [
      "Nitrogen and Potassium levels are decent for Groundnut.",
      "Phosphorus is at a suitable moderate level.",
      "pH and Moisture are in the right range for healthy Groundnut growth.",
    ],
    tip: "Add balanced Nitrogen and Potassium fertilizers to enhance Groundnut yield.",
    soilSuits: ["Red Soil", "Alluvial Soil", "Black Soil"],
  },
  {
    name: "Soybean",
    emoji: "🫘",
    image: soybeanImg,
    origin: "Indian",
    idealN: 60,
    idealP: 35,
    idealK: 47,
    idealMoisture: 62,
    idealPh: 6.5,
    minN: 30,
    maxN: 95,
    minP: 15,
    maxP: 55,
    minK: 25,
    maxK: 68,
    minMoisture: 48,
    maxMoisture: 78,
    minPh: 6.0,
    maxPh: 7.0,
    reasons: [
      "Low Nitrogen is fine — soybean fixes its own Nitrogen naturally.",
      "Phosphorus supports good pod development.",
      "Moisture range and pH are optimal for soybean.",
    ],
    tip: "Use Rhizobium inoculant on seeds before planting to boost nitrogen fixation naturally.",
    soilSuits: ["Alluvial Soil", "Forest Soil", "Black Soil"],
  },
  {
    name: "Millet",
    emoji: "🌾",
    image: milletImg,
    origin: "Indian",
    idealN: 50,
    idealP: 25,
    idealK: 35,
    idealMoisture: 35,
    idealPh: 6.5,
    minN: 15,
    maxN: 80,
    minP: 8,
    maxP: 45,
    minK: 12,
    maxK: 60,
    minMoisture: 20,
    maxMoisture: 55,
    minPh: 5.5,
    maxPh: 7.5,
    reasons: [
      "Millet thrives in low-nutrient soils — your levels are sufficient.",
      "Low moisture is acceptable for drought-tolerant millet.",
      "pH range is within acceptable limits for millet.",
    ],
    tip: "Add a small dose of Phosphorus fertilizer during sowing for better germination.",
    soilSuits: ["Red Soil", "Desert (Arid) Soil", "Laterite Soil"],
  },
  {
    name: "Barley",
    emoji: "🌾",
    image: barleyImg,
    origin: "Foreign",
    idealN: 70,
    idealP: 30,
    idealK: 40,
    idealMoisture: 45,
    idealPh: 6.5,
    minN: 40,
    maxN: 100,
    minP: 15,
    maxP: 50,
    minK: 20,
    maxK: 65,
    minMoisture: 30,
    maxMoisture: 62,
    minPh: 6.0,
    maxPh: 7.8,
    reasons: [
      "Nitrogen and Phosphorus support barley grain development.",
      "Low to moderate moisture suits barley well.",
      "pH is within the acceptable range for barley cultivation.",
    ],
    tip: "Apply Potassium fertilizer before sowing to improve drought resistance in barley.",
    soilSuits: ["Alluvial Soil", "Desert (Arid) Soil"],
  },
  {
    name: "Tobacco",
    emoji: "🌿",
    image: tobaccoImg,
    origin: "Foreign",
    idealN: 65,
    idealP: 28,
    idealK: 55,
    idealMoisture: 50,
    idealPh: 5.8,
    minN: 35,
    maxN: 95,
    minP: 12,
    maxP: 45,
    minK: 35,
    maxK: 80,
    minMoisture: 35,
    maxMoisture: 65,
    minPh: 5.0,
    maxPh: 6.5,
    reasons: [
      "Potassium level supports good leaf quality for tobacco.",
      "Slightly acidic pH is preferred by tobacco plants.",
      "Moderate moisture helps controlled tobacco growth.",
    ],
    tip: "Avoid excess Nitrogen — it reduces leaf quality. Focus on Potassium for better yield.",
    soilSuits: ["Red Soil", "Laterite Soil", "Forest Soil"],
  },
];

// ============================================
//   detectSoilType()
//   Auto-detects soil from input values
// ============================================
export const detectSoilType = (n, p, k, moisture, ph) => {
  for (let soil of soilTypes) {
    if (
      n >= soil.minN &&
      n <= soil.maxN &&
      p >= soil.minP &&
      p <= soil.maxP &&
      k >= soil.minK &&
      k <= soil.maxK &&
      moisture >= soil.minMoisture &&
      moisture <= soil.maxMoisture &&
      ph >= soil.minPh &&
      ph <= soil.maxPh
    ) {
      return soil;
    }
  }
  return {
    name: "Unknown Soil",
    emoji: "❓",
    description:
      "Soil type could not be determined. Values may be out of known ranges.",
  };
};

// ============================================
//   calcMatchScore()
//   Calculates how close input is to ideal
// ============================================
const calcMatchScore = (val, ideal, min, max) => {
  if (val < min || val > max) return 0;
  const range = max - min;
  const diff = Math.abs(val - ideal);
  return Math.max(0, 100 - (diff / (range / 2)) * 100);
};

// ============================================
//   getMatchLabel()
//   Returns badge label based on score
// ============================================
export const getMatchLabel = (score) => {
  if (score >= 85) return { label: "BEST MATCH", color: "#b45309" };
  if (score >= 65) return { label: "GOOD MATCH", color: "#b45309" };
  if (score >= 45) return { label: "FAIR MATCH", color: "#6b7280" };
  return null;
};

// ============================================
//   recommendCrops()
//   Returns top matched crops sorted by score
// ============================================
export const recommendCrops = (n, p, k, moisture, ph, topN = 3) => {
  const scored = cropDatabase.map((crop) => {
    const nScore = calcMatchScore(n, crop.idealN, crop.minN, crop.maxN);
    const pScore = calcMatchScore(p, crop.idealP, crop.minP, crop.maxP);
    const kScore = calcMatchScore(k, crop.idealK, crop.minK, crop.maxK);
    const mScore = calcMatchScore(
      moisture,
      crop.idealMoisture,
      crop.minMoisture,
      crop.maxMoisture
    );
    const phScore = calcMatchScore(ph, crop.idealPh, crop.minPh, crop.maxPh);

    const avg = (nScore + pScore + kScore + mScore + phScore) / 5;

    return { ...crop, matchScore: Math.round(avg) };
  });

  return scored
    .filter((c) => c.matchScore >= 30)
    .sort((a, b) => b.matchScore - a.matchScore)
    .slice(0, topN);
};

// ============================================
//   getGreeting()
// ============================================
export const getGreeting = () => {
  const hour = new Date().getHours();
  if (hour < 12) return "Good Morning";
  if (hour < 17) return "Good Afternoon";
  return "Good Evening";
};
