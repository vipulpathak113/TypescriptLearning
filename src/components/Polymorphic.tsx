import React from "react";

type PolymorphicProps<T extends React.ElementType> = {
  size?: "lg" | "md" | "sm";
  color?: "primary" | "secondary";
  children: React.ReactNode;
  as?: T;
};

type CompProps<T extends React.ElementType>= PolymorphicProps<T> & Omit<React.ComponentProps<T>,keyof PolymorphicProps<T>>

function Polymorphic<T extends React.ElementType>({ size, color, children, as }: CompProps<T>) {
  const Component = as || "div";
  return (
    <Component className={`class-with-${size}-${color}`}>{children}</Component>
  );
}

export default Polymorphic;
