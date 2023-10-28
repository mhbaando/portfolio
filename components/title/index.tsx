import { cn } from "@/lib/utils";
import React from "react";

const TitleOrDescription = ({
  text,
  className,
  type = "heading",
  whiteWordsCount = 2, // Default to 2 white words
}: {
  text: string;
  className?: string;
  type?: string;
  whiteWordsCount?: number;
}) => {
  const words = text.split(" ");

  // Function to generate a random number between 0 and the word count
  const getRandomNumber = (max: number) => Math.floor(Math.random() * max);

  // Get unique random indexes for white words based on whiteWordsCount
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
        whiteWordIndexes.includes(index) ? "text-white" : "text-zinc-500"
      }
    >
      {word}{" "}
    </span>
  ));

  return type === "heading" ? (
    <h2 className={cn("font-medium leading-relaxed", className)}>{coloredWords}</h2>
  ) : (
    <p className={cn("leading-loose", className)}>{coloredWords}</p>
  );
};

export default TitleOrDescription;
