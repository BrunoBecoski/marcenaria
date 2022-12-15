import { TabsContainer, Tab } from "./styles";

interface TabsProps {
  tabs: {
    id: string;
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
              type="button"
              key={tab.id}
              onClick={() => setTabActive(tab.id)}
              data-active={tabActive === tab.id}
            >
              <span>{tab.label}</span>
            </Tab>
          ))
      }
    </TabsContainer>
  )
}