import {
  Heading,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from '@chakra-ui/react';
import React, { useState } from 'react';
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
  const tabs = [
    {
      title: 'For Writers',
      img: <img src={FigmaExample} />,
      description: 'Description of first use case',
    },
    {
      title: 'For Researchers',
      img: <img src={FigmaExample} />,
      description: 'Description of second use case',
    },
  ];
  return (
    <div className='text-left flex flex-row py-container'>
      <SidePanel
        selected={selected}
        setSelected={setSelected}
        tabs={tabs}
        title={title}
      />
      <HoveringCard text={tabs[selected].description} />
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
      <div>
        {/* <CustomTabs selected={false} text='' /> */}
        <Example img={tabs[selected].img} />
      </div>
    </div>
  );
};
export default UseCase;
