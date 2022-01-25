import { useEffect, useState } from 'react';
import { getSanityContent } from '../../../utils/getSanityContent';
import { Loader } from '../../loader/loader';
import CertificationBlockItem, { CertificationBlockItemProps } from './certification-block.item';

export default function CertificationBlock() {
  const [items, setItems] = useState<CertificationBlockItemProps[]>([]);

  useEffect(() => {
    const fetchAllCertificationContent = async () => {
      const { allCertification } = await getSanityContent({
        query: `
          query AllCertificationContent {
            allCertification(sort: [{ date: DESC }]) {
              organization
              certification
              date
            }
          }
        `,
      });

      setItems(allCertification);
    };

    fetchAllCertificationContent();
  }, []);

  return items.length === 0 ? (
    <Loader />
  ) : (
    <ul className="-mx-6 grid list-none gap-2 p-0 md:gap-8">
      {items.map(({ certification, organization, date }, index) => (
        <CertificationBlockItem
          key={`${certification}-${index}`}
          certification={certification}
          organization={organization}
          date={date}
        />
      ))}
    </ul>
  );
}
