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
import './components.css';

import { SidePanel2 } from './SidePanel2';

const UseCase2: React.FC<{
  title: string;
  tabs: any;
  description: string;
  index: number;
}> = ({ title, tabs, description, index }) => {
  const [selected, setSelected] = useState(0);
  const [translation, setTranslation] = useState('translate-x-0');

  useEffect(() => {
    setTranslation('translate-x-[150%]');
    setTimeout(() => {
      setTranslation('translate-x-0');
    }, 700);
  }, [selected]);

  return (
    <div className='text-left flex flex-row p-container relative  rounded-md'>
      <SidePanel2
        description={description}
        selected={selected}
        setSelected={setSelected}
        tabs={tabs}
        title={title}
        index={index}
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
      <div className='w-[60%] h-auto flex flex-col justify-center align-middle items-center'>
        {/* <CustomTabs selected={false} text='' /> */}
        <Example img={tabs[selected].img} />
      </div>
    </div>
  );
};
export default UseCase2;
