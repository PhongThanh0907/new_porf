import React from "react";

interface CardProps {
  children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ children }) => {
  return (
    <div className="item-card">
      <div
        style={{
          background:
            "radial-gradient(50% 50% at 50% 50%, #70befabf 0%, rgba(10, 10, 10, 0) 100%)",
        }}
        className="h-[1px] absolute top-0 left-0 right-0"
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default Card;
