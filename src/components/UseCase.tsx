import {
  Heading,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { CustomTabs } from './CustomTabs';
import { Example } from './Example';
import { HoveringCard } from './HoveringCard';
import { SidePanel } from './SidePanel';
import FigmaExample from '../assets/images/FigmaExample.png';
import './components.css';

const UseCase: React.FC<{ title: string; examples: string[] }> = ({
  title,
  examples,
}) => {
  const [selected, setSelected] = useState(0);
  const [translation, setTranslation] = useState('translate-x-0');

  useEffect(() => {
    setTranslation('translate-x-[150%]');
    setTimeout(() => {
      setTranslation('translate-x-0');
    }, 700);
  }, [selected]);

  const className = 'h-auto w-[1700px] drop-shadow-xl ';
  const tabs = [
    {
      title: 'For Writers',
      img: <img className={className} src={FigmaExample} />,
      description: 'Description of first use case',
    },
    {
      title: 'For Researchers',
      img: <img className={className} src={FigmaExample} />,
      description: 'Description of second use case',
    },
  ];
  return (
    <div className='text-left flex flex-row p-container relative  rounded-md'>
      <SidePanel
        selected={selected}
        setSelected={setSelected}
        tabs={tabs}
        title={title}
      />
      {/* <HoveringCard
        translation={translation}
        text={tabs[selected].description}
      /> */}
      {/* <Tabs variant='enclosed'>
        <TabList>
          {examples.map((example, i) => (
            <Tab className='bg-selected_white' key={i}>
              {example}
            </Tab>
          ))}
        </TabList>
        <TabPanels className='bg-selected_white rounded-lg'>
          <TabPanel>
            <Example title='' />
          </TabPanel>
          <TabPanel>
            <Example title='' />
          </TabPanel>
        </TabPanels>
      </Tabs> */}
      <div className='w-0.6 h-auto'>
        {/* <CustomTabs selected={false} text='' /> */}
        <Example img={tabs[selected].img} />
      </div>
    </div>
  );
};
export default UseCase;
