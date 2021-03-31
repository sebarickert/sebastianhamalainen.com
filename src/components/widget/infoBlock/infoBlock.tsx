import React from "react";

interface InfoBlockProps {
  children?: string;
  organization: string;
  title: string;
  timeframe?: string;
  isTimeframeActive?: boolean;
}

const InfoBlock = ({
  children = "",
  title,
  organization,
  timeframe,
  isTimeframeActive = false,
}: InfoBlockProps): JSX.Element => {
  const badgeElementClasses = [
    "!m-0 inline-flex items-center px-2.5 py-0.5 rounded-md !text-xs sm:!text-sm font-medium uppercase",
  ];

  if (isTimeframeActive) {
    badgeElementClasses.push("bg-green-100 text-green-800");
  } else {
    badgeElementClasses.push("bg-gray-200 text-gray-800");
  }

  return (
    <div className="bg-gray-50 p-4 rounded-md">
      <div className="grid sm:items-center grid-flow-col auto-cols-auto gap-4">
        <h3 className="font-extrabold !text-xl !m-0">{organization}</h3>
        {timeframe && (
          <div className="justify-self-end">
            <p className={badgeElementClasses.join(" ")}>{timeframe}</p>
          </div>
        )}
      </div>
      <p className="text-gray-500 !text-base !mb-0 !mt-1">{title}</p>
      {children && (
        <div className="mt-4">
          <hr className="!mt-0 !mb-4"></hr>
          <p className="!m-0 !text-base !leading-loose">{children}</p>
        </div>
      )}
    </div>
  );
};

export default InfoBlock;
