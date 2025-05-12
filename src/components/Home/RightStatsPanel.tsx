import React, { useRef, useState, useEffect } from "react";
import "../../styles/components/Home/HomeContent.css";

const completed = 12;
const total = 20;
const percent = Math.min(completed / total, 1);

const RADIUS = 52;
const STROKE = 12;

function polarToCartesian(cx: number, cy: number, r: number, angle: number) {
  const rad = ((angle - 90) * Math.PI) / 180.0;
  return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) };
}

/**
 * Describes an SVG arc.
 * @param cx - Center x
 * @param cy - Center y
 * @param r - Radius
 * @param angleDegreesVisualEnd - Angle in degrees where the arc visually ends.
 * @param angleDegreesVisualStart - Angle in degrees where the arc visually starts (for M command).
 * @param sweepFlag - "0" for counter-clockwise, "1" for clockwise.
 */
function describeArc(
  cx: number,
  cy: number,
  r: number,
  angleDegreesVisualEnd: number,
  angleDegreesVisualStart: number,
  sweepFlag: "0" | "1"
) {
  const startPoint = polarToCartesian(cx, cy, r, angleDegreesVisualStart);
  const endPoint = polarToCartesian(cx, cy, r, angleDegreesVisualEnd);

  // For a 180-degree arc (semi-circle), largeArcFlag is "0"
  const largeArcFlag = "0";

  return [
    "M", startPoint.x, startPoint.y,
    "A", r, r,
    0, // x-axis-rotation
    largeArcFlag,
    sweepFlag,
    endPoint.x, endPoint.y
  ].join(" ");
}

const RightStatsPanel: React.FC = () => {
  const backgroundPathRef = useRef<SVGPathElement>(null);
  const [pathLength, setPathLength] = useState(0);

  const cx = RADIUS + STROKE;
  const cy = RADIUS + STROKE;

  // Define the path for a top semi-circle starting from Right (90deg) to Left (270deg), clockwise.
  // angleDegreesVisualEnd (A point): 270 (Left)
  // angleDegreesVisualStart (M point): 90 (Right)
  // sweepFlag: "1" (Clockwise)
  const arcPathD = describeArc(cx, cy, RADIUS, 90, 270, "1");

  useEffect(() => {
    if (backgroundPathRef.current) {
      setPathLength(backgroundPathRef.current.getTotalLength());
    }
  }, [arcPathD]); // arcPathD is stable, so this runs once after mount

  // stroke-dashoffset reveals the path.
  // When percent = 0, offset = pathLength (fully hidden).
  // When percent = 1, offset = 0 (fully shown).
  const dashOffset = pathLength > 0 ? pathLength * (1 - percent) : 0;

  return (
    <div className="right-stats-panel">
      {/* Progress Tile */}
      <div className="stats-tile stats-progress">
        <div className="progress-gauge">
          <svg
            width={2 * (RADIUS + STROKE)}
            height={RADIUS + STROKE + 10} // Height accommodates top semi-circle
            viewBox={`0 0 ${2 * (RADIUS + STROKE)} ${RADIUS + STROKE + 10}`}
            style={{ display: "block", margin: "0 auto" }}
          >
            {/* Background Arc Path (used for measurement) */}
            <path
              ref={backgroundPathRef}
              d={arcPathD}
              fill="none"
              stroke="var(--color-surface-2)"
              strokeWidth={STROKE}
              strokeLinecap="round"
            />
            {/* Progress Arc Path */}
            {percent > 0 && pathLength > 0 && (
              <path
                d={arcPathD}
                fill="none"
                stroke="var(--color-neon-violet)"
                strokeWidth={STROKE}
                strokeLinecap="round"
                strokeDasharray={pathLength}
                strokeDashoffset={dashOffset}
                style={{ transition: "stroke-dashoffset 0.3s ease-in-out" }} // Optional: for smooth animation
              />
            )}
          </svg>
          <div className="progress-text-container">
            <div className="progress-value">
              <span>{completed}</span>
              <span className="progress-separator">/</span>
              <span>{total}</span>
            </div>
            <div className="progress-label">Topics completed</div>
          </div>
        </div>
      </div>

      {/* Row for Streak and Leaderboard Tiles */}
      <div className="stats-row">
        {/* Streak Tile */}
        <div className="stats-tile stats-streak">
          <div className="streak-icon">
            {/* Fire Icon from provided SVG */}
            <svg
              width="48" // You can adjust this size as needed
              height="48" // You can adjust this size as needed
              viewBox="0 0 1200 1200" // ViewBox from the provided SVG
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M381.64,1200C135.779,1061.434,71.049,930.278,108.057,751.148 c27.321-132.271,116.782-239.886,125.36-371.903c38.215,69.544,54.183,119.691,58.453,192.364 C413.413,422.695,493.731,216.546,498.487,0c0,0,316.575,186.01,337.348,466.98c27.253-57.913,40.972-149.892,13.719-209.504 c81.757,59.615,560.293,588.838-64.818,942.524c117.527-228.838,30.32-537.611-173.739-680.218 c13.628,61.319-10.265,290.021-100.542,390.515c25.014-167.916-23.8-238.918-23.8-238.918s-16.754,94.054-81.758,189.065 C345.537,947.206,304.407,1039.291,381.64,1200L381.64,1200z"
                fill="var(--color-neon-violet)"
                stroke="var(--color-neon-violet)" // Optional: adjust or remove stroke
                strokeWidth="10" // Optional: adjust stroke width or remove
              />
            </svg>
          </div>
          <div className="streak-value">9 days</div>
          <div className="streak-label">streak</div>
        </div>

        {/* Leaderboard Tile */}
        <div className="stats-tile stats-leaderboard">
          <div className="leaderboard-icon">
            {/* New Trophy Icon */}
            <svg
              width="42" // Adjusted size for the new icon
              height="42" // Adjusted size for the new icon
              viewBox="0 0 32 32" // ViewBox from the provided SVG
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                id="XMLID_450_"
                style={{
                  fill: "none",
                  stroke: "var(--color-neon-violet)",
                  strokeWidth: 2,
                  strokeLinejoin: "round",
                  strokeMiterlimit: 10,
                }}
                d="M22.786,6 c0,0,0.715-1,2.214-1c1.377,0,3,1.05,3,3c0,3.21-5,4.242-5,8c0,0.982,1,1.993,1,1.993"
              />
              <path
                id="XMLID_365_"
                style={{
                  fill: "none",
                  stroke: "var(--color-neon-violet)",
                  strokeWidth: 2,
                  strokeLinejoin: "round",
                  strokeMiterlimit: 10,
                }}
                d="M8,17.993 c0,0,1-1.011,1-1.993c0-3.758-5-4.79-5-8c0-1.95,1.623-3,3-3c1.498,0,2.214,1,2.214,1"
              />
              <path
                id="XMLID_435_"
                style={{
                  fill: "rgba(170,0,255,0.15)", // Light fill for the cup body
                  stroke: "var(--color-neon-violet)",
                  strokeWidth: 2,
                  strokeMiterlimit: 10,
                }}
                d="M9,6c0,6.528,3.689,17,6.983,17 S23,12.568,23,6H9z"
              />
              <path
                id="XMLID_377_"
                style={{
                  fill: "rgba(170,0,255,0.15)", // Light fill for the base
                  stroke: "var(--color-neon-violet)",
                  strokeWidth: 2,
                  strokeMiterlimit: 10,
                }}
                d="M18,24h-4c-1.657,0-3,1.343-3,3v0 h10v0C21,25.343,19.657,24,18,24z"
              />
              <line
                id="XMLID_378_"
                style={{
                  fill: "none",
                  stroke: "var(--color-rose-gold)", // Accent color for the line
                  strokeWidth: 2,
                  strokeMiterlimit: 10,
                }}
                x1="16"
                y1="15"
                x2="16"
                y2="10"
              />
            </svg>
          </div>
          <div className="leaderboard-label">Leaderboard</div>
          <div className="leaderboard-coming-soon">Coming soon</div>
        </div>
      </div>
    </div>
  );
};

export default RightStatsPanel;
