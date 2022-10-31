import { TabsContainer, Tab } from "./styles";

interface TabsProps {
  tabs: {
    label: string;
  }[]
  tabActive: string;
  setTabActive: (value: string) => void;
}

export function Tabs({ tabs, tabActive, setTabActive }: TabsProps) {
  return (
    <TabsContainer>
      {
        tabs.map(tab => (
            <Tab 
              onClick={() => setTabActive(tab.label)}
              data-active={tabActive === tab.label}
            >
              <span>{tab.label}</span>
            </Tab>
          ))
      }
    </TabsContainer>
  )
}