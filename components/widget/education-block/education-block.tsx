import { useEffect, useState } from 'react';
import { getSanityContent } from '../../../utils/getSanityContent';
import { Loader } from '../../loader/loader';
import EducationBlockItem, { EducationBlockItemProps } from './education-block.item';

export default function EducationBlock() {
  const [items, setItems] = useState<EducationBlockItemProps[]>([]);

  useEffect(() => {
    const fetchAllEducationContent = async () => {
      const { allEducation } = await getSanityContent({
        query: `
          query AllEducationContent {
            allEducation(sort: [{ start_date: DESC }]) {
              degree
              organization
              start_date
              end_date
              description
            }
          }
        `,
      });

      setItems(allEducation);
    };

    fetchAllEducationContent();
  }, []);

  return items.length === 0 ? (
    <Loader />
  ) : (
    <ul className="grid gap-2 md:gap-8 -mx-6 list-none p-0">
      {items.map(({ degree, organization, description, start_date, end_date }, index) => (
        <EducationBlockItem
          key={`${degree}-${index}`}
          degree={degree}
          organization={organization}
          start_date={start_date}
          end_date={end_date}
          description={description}
        />
      ))}
    </ul>
  );
}
