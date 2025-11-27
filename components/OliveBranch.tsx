export function OliveBranch({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 120"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Main branch */}
      <path
        d="M20 100 Q60 80, 100 60 Q140 40, 180 20"
        stroke="#6B7F5E"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
      
      {/* Leaves - left side */}
      <ellipse
        cx="45"
        cy="82"
        rx="18"
        ry="6"
        transform="rotate(-35 45 82)"
        fill="#7d9a72"
        opacity="0.9"
      />
      <ellipse
        cx="38"
        cy="90"
        rx="15"
        ry="5"
        transform="rotate(-55 38 90)"
        fill="#6B7F5E"
        opacity="0.85"
      />
      
      {/* Leaves - middle left */}
      <ellipse
        cx="70"
        cy="68"
        rx="20"
        ry="6"
        transform="rotate(-30 70 68)"
        fill="#6B7F5E"
        opacity="0.9"
      />
      <ellipse
        cx="65"
        cy="78"
        rx="16"
        ry="5"
        transform="rotate(-50 65 78)"
        fill="#7d9a72"
        opacity="0.8"
      />
      
      {/* Leaves - center */}
      <ellipse
        cx="100"
        cy="52"
        rx="22"
        ry="6"
        transform="rotate(-28 100 52)"
        fill="#7d9a72"
        opacity="0.9"
      />
      <ellipse
        cx="95"
        cy="64"
        rx="18"
        ry="5"
        transform="rotate(-48 95 64)"
        fill="#6B7F5E"
        opacity="0.85"
      />
      
      {/* Leaves - middle right */}
      <ellipse
        cx="130"
        cy="38"
        rx="20"
        ry="6"
        transform="rotate(-25 130 38)"
        fill="#6B7F5E"
        opacity="0.9"
      />
      <ellipse
        cx="125"
        cy="50"
        rx="17"
        ry="5"
        transform="rotate(-45 125 50)"
        fill="#7d9a72"
        opacity="0.8"
      />
      
      {/* Leaves - right side */}
      <ellipse
        cx="158"
        cy="26"
        rx="18"
        ry="5"
        transform="rotate(-22 158 26)"
        fill="#7d9a72"
        opacity="0.9"
      />
      <ellipse
        cx="152"
        cy="36"
        rx="15"
        ry="5"
        transform="rotate(-42 152 36)"
        fill="#6B7F5E"
        opacity="0.85"
      />
      
      {/* Tip leaves */}
      <ellipse
        cx="175"
        cy="18"
        rx="14"
        ry="4"
        transform="rotate(-20 175 18)"
        fill="#6B7F5E"
        opacity="0.9"
      />
      <ellipse
        cx="172"
        cy="26"
        rx="12"
        ry="4"
        transform="rotate(-40 172 26)"
        fill="#7d9a72"
        opacity="0.8"
      />
    </svg>
  )
}

