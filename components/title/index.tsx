import { cn } from "@/lib/utils";
import React from "react";

const TitleOrDescription = ({
  text,
  className,
  type = "heading",
  whiteWordsCount = 2,
}: {
  text: string;
  className?: string;
  type?: string;
  whiteWordsCount?: number;
}) => {
  const words = text.split(" ");

  const getRandomNumber = (max: number) => Math.floor(Math.random() * max);

  let whiteWordIndexes: number[] = [];
  while (whiteWordIndexes.length < whiteWordsCount) {
    const index = getRandomNumber(words.length);
    if (!whiteWordIndexes.includes(index)) {
      whiteWordIndexes.push(index);
    }
  }

  const coloredWords = words.map((word, index) => (
    <span
      key={index}
      className={
        whiteWordIndexes.includes(index)
          ? "text-[#0071e3] font-semibold"
          : "text-[#86868b]"
      }
    >
      {word}{" "}
    </span>
  ));

  return type === "heading" ? (
    <h2 className={cn("font-semibold tracking-tight leading-snug", className)}>
      {coloredWords}
    </h2>
  ) : (
    <p className={cn("leading-relaxed", className)}>{coloredWords}</p>
  );
};

export default TitleOrDescription;
