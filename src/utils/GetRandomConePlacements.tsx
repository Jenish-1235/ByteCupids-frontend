// utils/conePlacement.ts
export function getRandomConePositions({
    count = 30,
    zStart = 0,
    zEnd = -15,
    maxRadius = 8,
  }) {
    const positions = [];
  
    for (let i = 0; i < count; i++) {
      const z = Math.random() * (zEnd - zStart) + zStart;
  
      // Calculate radius at this z (larger radius for further z)
      const t = Math.abs(z / zEnd); // normalize: 0 to 1
      const radius = t * maxRadius;
  
      const angle = Math.random() * Math.PI * 2; // 0 to 360 deg
      const x = Math.cos(angle) * radius;
      const y = Math.sin(angle) * radius;
  
      positions.push([x, y, z]);
    }
  
    return positions;
  }
  