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
                style={{ transition: 'stroke-dashoffset 0.3s ease-in-out' }} // Optional: for smooth animation
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
            {/* Updated Fire Icon */}
            <svg
              width="38"
              height="38"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path
                d="M12 2c0 0-2.5 2.5-2.5 5S12 12.5 12 12.5s2.5-2.5 2.5-5S12 2 12 2z"
                fill="var(--color-rose-gold)"
                stroke="var(--color-rose-gold)"
              />
              <path
                d="M12 12.5c-2.5 2.5-2.5 6.25 0 8.75s6.25.0 6.25-3.75c0-3.75-3.75-5-6.25-5zM12 12.5c2.5 2.5 2.5 6.25 0 8.75s-6.25.0-6.25-3.75c0-3.75 3.75-5 6.25-5z"
                fill="rgba(170,0,255,0.2)"
                stroke="var(--color-neon-violet)"
              />
            </svg>
          </div>
          <div className="streak-value">8 days</div>
          <div className="streak-label">Current streak</div>
        </div>

        {/* Leaderboard Tile */}
        <div className="stats-tile stats-leaderboard">
          <div className="leaderboard-icon">
            {/* Updated Trophy Icon */}
            <svg
              width="38"
              height="38"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path
                d="M12 2L8 6H5v5l-3 3 3 3v5h3l4 4 4-4h3v-5l3-3-3-3V6h-3L12 2z"
                fill="rgba(170,0,255,0.15)"
                stroke="var(--color-neon-violet)"
              />
              <path
                d="M12 11a2 2 0 100-4 2 2 0 000 4z"
                fill="var(--color-rose-gold)"
                stroke="var(--color-rose-gold)"
              />
              <path d="M9 22V12h6v10" stroke="var(--color-neon-violet)" />
            </svg>
          </div>
          <div className="leaderboard-label">Mini Leaderboard</div>
          <div className="leaderboard-coming-soon">Coming soon</div>
        </div>
      </div>
    </div>
  );
};

export default RightStatsPanel;
