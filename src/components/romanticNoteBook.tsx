import React from "react";
import * as motion from "motion/react-client";
import type { Variants } from "motion/react";
import { Heart, Camera, MapPin } from "lucide-react";

export default function RomanticScrollNotebook() {
  return (
    <div style={container}>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        style={header}
      >
        <h1 style={headerTitle}>Untuk Najmita Zahira Dirgantoro</h1>
        <p style={headerSubtitle}>My Love Story in Motion 💕</p>
      </motion.div>

      {loveStories.map(([icon, title, message, hueA, hueB], i) => (
        <Card key={i} i={i} icon={icon} title={title} message={message} hueA={hueA} hueB={hueB} />
      ))}

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        style={footer}
      >
        <Heart className="w-8 h-8 text-red-500 animate-pulse" />
        <h2 style={footerText}>Forever Yours, Najmita 💍</h2>
      </motion.div>
    </div>
  );
}

interface CardProps {
  icon: React.ReactNode;
  title: string;
  message: string;
  hueA: number;
  hueB: number;
  i: number;
}

function Card({ icon, title, message, hueA, hueB, i }: CardProps) {
  const background = `linear-gradient(306deg, ${hue(hueA)}, ${hue(hueB)})`;

  return (
    <motion.div
      className={`card-container-${i}`}
      style={cardContainer}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ amount: 0.8 }}
    >
      <div style={{ ...splash, background }} />
      <motion.div style={card} variants={cardVariants} className="card">
        <motion.div style={iconContainer}>{icon}</motion.div>

        <motion.div
          style={textContainer}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <h3 style={cardTitle}>{title}</h3>
          <p style={cardMessage}>{message}</p>
        </motion.div>

        {/* Floating particles */}
        <motion.div style={particle1}>✨</motion.div>
        <motion.div style={particle2}>💖</motion.div>
      </motion.div>
    </motion.div>
  );
}

const cardVariants: Variants = {
  offscreen: {
    y: 300,
  },
  onscreen: {
    y: 50,
    rotate: -10,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

const hue = (h: number) => `hsl(${h}, 100%, 50%)`;

/**
 * ==============   Styles   ================
 */

const container: React.CSSProperties = {
  width: "100%",
};

const header: React.CSSProperties = {
  textAlign: "center",
  padding: "10px 20px",
};

const headerTitle: React.CSSProperties = {
  fontSize: "clamp(1.8rem, 5vw, 2.5rem)",
  fontWeight: "bold",
  color: "#be185d",
  fontFamily: "serif",
  textShadow: "2px 2px 4px rgba(0,0,0,0.1)",
  lineHeight: "1.2",
};

const headerSubtitle: React.CSSProperties = {
  fontSize: "clamp(1rem, 3vw, 1.2rem)",
  color: "#ec4899",
  fontStyle: "italic",
  fontWeight: "300",
};

const footer: React.CSSProperties = {
  textAlign: "center",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

const footerText: React.CSSProperties = {
  fontSize: "clamp(1.3rem, 4vw, 1.8rem)",
  color: "#be185d",
  marginTop: 30,
  fontWeight: "bold",
  fontFamily: "serif",
};

const cardContainer: React.CSSProperties = {
  overflow: "hidden",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "relative",
  paddingTop: 20,
  marginBottom: -20,
};
const splash: React.CSSProperties = {
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  clipPath: `path("M 0 303.5 C 0 292.454 8.995 285.101 20 283.5 L 460 219.5 C 470.085 218.033 480 228.454 480 239.5 L 500 430 C 500 441.046 491.046 450 480 450 L 20 450 C 8.954 450 0 441.046 0 430 Z")`,
};

const card: React.CSSProperties = {
  fontSize: 164,
  width: 300,
  height: 430,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: 20,
  background: "#f5f5f5",
  boxShadow:
    "0 0 1px hsl(0deg 0% 0% / 0.075), 0 0 2px hsl(0deg 0% 0% / 0.075), 0 0 4px hsl(0deg 0% 0% / 0.075), 0 0 8px hsl(0deg 0% 0% / 0.075), 0 0 16px hsl(0deg 0% 0% / 0.075)",
  transformOrigin: "10% 60%",
};

const iconContainer: React.CSSProperties = {
  marginBottom: 20,
  color: "#be185d",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  minHeight: 150,
  flexShrink: 0,
};

const textContainer: React.CSSProperties = {
  textAlign: "center",
  zIndex: 10,
  width: "100%",
};

const cardTitle: React.CSSProperties = {
  fontSize: "clamp(1.2rem, 4vw, 1.5rem)",
  fontWeight: "bold",
  color: "#1f2937",
  fontFamily: "serif",
};

const cardMessage: React.CSSProperties = {
  fontSize: "clamp(1rem, 2.5vw, 1rem)",
  color: "#4b5563",
  lineHeight: "1.5",
  fontWeight: "200",
  padding: 10,
  textAlign: "center",
  maxWidth: "100%",
  wordBreak: "break-word",
  hyphens: "auto",
};

const particle1: React.CSSProperties = {
  position: "absolute",
  top: "10%",
  right: "15%",
  fontSize: "clamp(1rem, 3vw, 1.5rem)",
  pointerEvents: "none",
  zIndex: 5,
};

const particle2: React.CSSProperties = {
  position: "absolute",
  bottom: "15%",
  left: "10%",
  fontSize: "clamp(0.8rem, 2.5vw, 1.2rem)",
  pointerEvents: "none",
  zIndex: 5,
};

/**
 * ==============   Data   ================
 */
const loveStories: [React.ReactNode, string, string, number, number][] = [
  [
    <div
      style={{
        width: "120px",
        height: "150px",
        borderRadius: "8px",
        overflow: "hidden",
      }}
    >
      <img
        src="/images/keenam.jpg"
        alt="Pertemuan Pertama"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />
    </div>,
    "ketemu lagi setelah lama gaketemu",
    "waktu pertama ketemu lagi, kayanya aku beneran suka dan jatuh hati, wkwkwkwkwkw, kesanya alay ya, tapi emang beneran itu yang terjadi, dan ya, aku memutuskan untuk berani nyatain kalo aku suka sama kamu",
    340,
    10,
  ],
  [
    <div
      style={{
        width: "120px",
        height: "150px",
        borderRadius: "8px",
        overflow: "hidden",
      }}
    >
      <img
        src="/images/pertama.jpg"
        alt="Pertemuan Pertama"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />
    </div>,
    "gatau apa",
    "intinya gni, aku selalu sayang kamu, kamu tau ga, aku ini banyak egonya, tapi makasih udah bertahan dan selalu jadi yang terbaik",
    20,
    60,
  ],

  [
    <div
      style={{
        width: "120px",
        height: "150px",
        borderRadius: "8px",
        overflow: "hidden",
      }}
    >
      <img
        src="/images/kedua.jpg"
        alt="Pertemuan Pertama"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />
    </div>,
    "alasan kenapa sayang",
    "aku sayang sama kamu bukan karena kamu cantik, aku gatau kenapa bisa suka dan sayang, yang jelas aku suka kamu, karena kamu baik, tolong jangan berubah jadi orang jahat ya sayang 😘",
    60,
    120,
  ],
  [
    <div
      style={{
        width: "120px",
        height: "150px",
        borderRadius: "8px",
        overflow: "hidden",
      }}
    >
      <img
        src="/images/ketujuh.jpg"
        alt="Pertemuan Pertama"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />
    </div>,
    "pap",
    "sayang pap ke aku yang banyak ya sayang, biar kalo kangen gampang, sekalian memperbanyak foto orang cantik 😋, ",
    100,
    160,
  ],
  [
    <div
      style={{
        width: "120px",
        height: "150px",
        borderRadius: "8px",
        overflow: "hidden",
      }}
    >
      <img
        src="/images/ketiga.jpg"
        alt="Pertemuan Pertama"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />
    </div>,
    "lagu yang kamu suka",
    "kamu suka lagu indo yang berkaitan dengan hubungan, aku tau itu, aku awalnya gasuka, tapi udh mulai menerima hal itu, apalagi kalo kamu nyanyi juga, aku mau denger sampe ayam beranak",
    180,
    220,
  ],
  [
    <div
      style={{
        width: "120px",
        height: "150px",
        borderRadius: "8px",
        overflow: "hidden",
      }}
    >
      <img
        src="/images/kelima.jpg"
        alt="Pertemuan Pertama"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />
    </div>,
    "masa depan",
    "mau kemana pun langkah kita, aku cuma mau satu hal: bareng kamu. Kita tulis cerita, jelajahi dunia, dan bikin kenangan yang nggak akan pernah selesai.",
    260,
    320,
  ],
  [
    <div
      style={{
        width: "120px",
        height: "150px",
        borderRadius: "8px",
        overflow: "hidden",
      }}
    >
      <img
        src="/images/keempat.jpg"
        alt="Pertemuan Pertama"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />
    </div>,
    "janji aku ke kamu",
    "aku janji akan selalu ada buat kamu. aku akan selalu pegang tangan kamu dan nggak akan pernah lepas, jani ku ini ga akan pernah selesai selama kamu bareng aku dan selalu cukup sama aku",
    300,
    340,
  ],
  [
    <div
      style={{
        width: "120px",
        height: "150px",
        borderRadius: "8px",
        overflow: "hidden",
      }}
    >
      <img
        src="/images/terakhir.jpg"
        alt="Pertemuan Pertama"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />
    </div>,
    "note terakhir",
    "jangan lupa diett sayanggggggggg😁😁🤣",
    140,
    180,
  ],
];
