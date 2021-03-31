import React from "react";
import IconChevronDoubleRight from "../icon/icon.chevronDoubleRight";
import IconChevronDoubleLeft from "../icon/icon.chevronDoubleLeft";
import IconChevronLeft from "../icon/icon.chevronLeft";
import IconChevronRight from "../icon/icon.chevronRight";
import PagerItem from "./pager.item";
import Spacer from "../spacer/spacer";

interface PagerProps {
  contentType: string;
  currentPage: number;
  limit: number;
  numPages: number;
  skip: number;
}

const Pager = ({
  contentType,
  currentPage,
  numPages,
}: PagerProps): JSX.Element => {
  const firstPage = `/${contentType}`;
  const isFirst = currentPage === 1;
  const isLast = currentPage === numPages;
  const lastPage = `/${contentType}/${numPages}`;
  const nextPage = `/${contentType}/${(currentPage + 1).toString()}`;
  const prevPage =
    currentPage - 1 === 1
      ? `/${contentType}`
      : `/${contentType}/${(currentPage - 1).toString()}`;

  return (
    <Spacer>
      <ul className="grid grid-flow-col gap-4 justify-center">
        <PagerItem title="Go to first page" link={firstPage} disabled={isFirst}>
          <IconChevronDoubleLeft className="w-5 h-5" />
        </PagerItem>
        <PagerItem
          title="Go to previous page"
          link={prevPage}
          disabled={isFirst}
        >
          <IconChevronLeft className="w-5 h-5" />
        </PagerItem>
        {[...Array(numPages)].map((_, count) => {
          const number = count + 1;
          const url =
            number === 1 ? `/${contentType}` : `/${contentType}/${number}`;
          return (
            <PagerItem
              title={`Go to page ${number}`}
              link={url}
              disabled={number === currentPage}
              isActive={number === currentPage}
              key={number}
              isHiddenMobile
            >
              {number}
            </PagerItem>
          );
        })}
        <PagerItem title="Go to next page" link={nextPage} disabled={isLast}>
          <IconChevronRight className="w-5 h-5" />
        </PagerItem>
        <PagerItem title="Go to last page" link={lastPage} disabled={isLast}>
          <IconChevronDoubleRight className="w-5 h-5" />
        </PagerItem>
      </ul>
    </Spacer>
  );
};

export default Pager;
