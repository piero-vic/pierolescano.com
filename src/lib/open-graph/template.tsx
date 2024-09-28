import React from "react";

interface Props {
  title: string;
  date: Date;
}

const Template: React.FC<Props> = ({ title, date }) => (
  <div tw="flex h-full w-full bg-[#0d0c0c] p-6 text-[#8ba4b0]" style={{ fontFamily: "JetBrainsMono" }}>
    <div tw="flex h-full w-full flex-col justify-between border border-[#8ba4b0] p-4">
      <div tw="leading-1.5 flex text-4xl">{title}</div>
      <div tw="flex items-center justify-between">
        <div>{date.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</div>
        <div>Piero Lescano</div>
      </div>
    </div>
  </div>
);

export default Template;
