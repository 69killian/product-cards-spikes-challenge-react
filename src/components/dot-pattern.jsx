import { useState, useEffect } from "react";

/**
 * Composant DotPattern - Génère un motif SVG avec des cercles.
 * 
 * @param {Object} props - Propriétés du composant
 * @param {number|string} [props.width=16] - Largeur du motif
 * @param {number|string} [props.height=16] - Hauteur du motif
 * @param {number|string} [props.x=0] - Décalage horizontal
 * @param {number|string} [props.y=0] - Décalage vertical
 * @param {number} [props.cx=1] - Position horizontale du centre des cercles
 * @param {number} [props.cy=1] - Position verticale du centre des cercles
 * @param {number} [props.cr=1] - Rayon des cercles
 * @param {string} [props.className] - Classes CSS supplémentaires
 * @param {Object} [props.props] - Autres propriétés passées au SVG
 */
export function DotPattern({
  width = 16,
  height = 16,
  x = 0,
  y = 0,
  cx = 1,
  cy = 1,
  cr = 1,
  className,
  ...props
}) {
  const [id] = useState(`dot-pattern-${Math.random().toString(36).substr(2, 9)}`); // Génère un identifiant unique pour le motif

  return (
    <svg
      aria-hidden="true"
      className={`pointer-events-none absolute opacity-15 inset-0 h-full w-full fill-neutral-400/80 ${className}`}
      {...props}
    >
      <defs>
        <pattern
          id={id}
          width={width}
          height={height}
          patternUnits="userSpaceOnUse"
          patternContentUnits="userSpaceOnUse"
          x={x}
          y={y}
        >
          <circle id="pattern-circle" cx={cx} cy={cy} r={cr} />
        </pattern>
      </defs>
      <rect width="100%" height="100%" strokeWidth={0} fill={`url(#${id})`} />
    </svg>
  );
}
