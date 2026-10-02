type StarIconProps = {
  filled: boolean;
};

export function StarIcon({ filled }: StarIconProps) {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24">
      <path
        d="M12 3.6l2.4 4.9 5.4.8-3.9 3.8.9 5.4L12 16l-4.8 2.5.9-5.4L4.2 9.3l5.4-.8L12 3.6z"
        fill={filled ? "#f5c542" : "none"}
        stroke={filled ? "#f5c542" : "#c5cad6"}
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}
