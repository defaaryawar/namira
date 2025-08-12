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
  margin: "100px auto",
  maxWidth: 500,
  paddingBottom: 100,
  width: "100%",
};

const header: React.CSSProperties = {
  textAlign: "center",
  padding: "0px 20px",
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
  padding: "80px 20px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

const footerText: React.CSSProperties = {
  fontSize: "clamp(1.3rem, 4vw, 1.8rem)",
  color: "#be185d",
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
  marginBottom: -50,
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
};

const textContainer: React.CSSProperties = {
  textAlign: "center",
  zIndex: 10,
  paddingLeft: 6,
  paddingRight: 6,
  width: "100%",
};

const cardTitle: React.CSSProperties = {
  fontSize: "clamp(1.2rem, 4vw, 1.5rem)",
  fontWeight: "bold",
  color: "#1f2937",
  marginBottom: 15,
  fontFamily: "serif",
  lineHeight: "1.3",
};

const cardMessage: React.CSSProperties = {
  fontSize: "clamp(0.85rem, 2.5vw, 1rem)",
  color: "#4b5563",
  lineHeight: "1.5",
  fontWeight: "200",
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
    <Heart className="w-8 h-8" />,
    "Pertama Bertemu",
    "Waktu pertama lihat kamu, Najmita, rasanya dunia berhenti sebentar. Ada sesuatu di senyummu yang bikin hati ini yakin, kamu orang yang selama ini aku tunggu.",
    340,
    10,
  ],
  [
    <div
      style={{
        width: "120px",
        height: "80px",
        borderRadius: "8px",
        background: "linear-gradient(45deg, #ffeaa7, #fab1a0)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "2rem",
      }}
    >
      ☀️
    </div>,
    "Kenangan Indah",
    "Setiap momen sama kamu itu berharga. Tawa kamu bikin hari berat jadi ringan, dan sikapmu yang pengertian selalu bikin aku merasa dimengerti sepenuhnya.",
    20,
    60,
  ],
  [
    <div
      style={{
        width: "120px",
        height: "80px",
        borderRadius: "8px",
        background: "linear-gradient(45deg, #e84393, #fd79a8)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "2rem",
      }}
    >
      💕
    </div>,
    "Cinta yang Tulus",
    "Aku sayang kamu bukan cuma karena kamu cantik, tapi juga karena hatimu yang tulus. Kamu itu rumah teraman buat semua lelah dan bahagiaku.",
    60,
    120,
  ],
  [
    <Camera className="w-8 h-8" />,
    "Momen Bersama",
    "Setiap foto kita adalah potongan cerita yang nggak akan pernah aku lupa. Aku mau simpan semua momen ini, sampai kita tua nanti.",
    100,
    160,
  ],
  [
    <div
      style={{
        width: "120px",
        height: "80px",
        borderRadius: "8px",
        background: "linear-gradient(45deg, #a29bfe, #6c5ce7)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "2rem",
      }}
    >
      🎵
    </div>,
    "Lagu Cinta Kita",
    "Suara kamu itu melodi yang nggak pernah bosen aku denger. Sama kamu, hidupku rasanya kayak lagu yang nadanya selalu pas.",
    180,
    220,
  ],
  [
    <div
      style={{
        width: "120px",
        height: "80px",
        borderRadius: "8px",
        background: "linear-gradient(45deg, #00cec9, #55efc4)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "2rem",
      }}
    >
      🌟
    </div>,
    "Masa Depan Kita",
    "Mau kemana pun langkah kita, aku cuma mau satu hal: bareng kamu. Kita tulis cerita, jelajahi dunia, dan bikin kenangan yang nggak akan pernah selesai.",
    260,
    320,
  ],
  [
    <div
      style={{
        width: "120px",
        height: "80px",
        borderRadius: "8px",
        background: "linear-gradient(45deg, #ff7675, #ff6b6b)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "2rem",
      }}
    >
      🌹
    </div>,
    "Janji Cinta",
    "Aku berjanji akan selalu ada buat kamu. Lewat susah senang, gelap terang, aku akan pegang tanganmu dan nggak akan pernah lepas.",
    300,
    340,
  ],
  [
    <MapPin className="w-8 h-8" />,
    "Perjalanan Bersama",
    "Setiap tempat yang kita kunjungi bersama jadi spesial. Bukan tempatnya yang bikin berkesan, tapi karena ada kamu di sampingku.",
    140,
    180,
  ],
];
