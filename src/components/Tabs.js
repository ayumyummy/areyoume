import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Skill from '../components/Skill';
import Tool from '../components/Tool';

class TabItems extends React.Component {

  // constructor() {
  //   super();
  //   this.state = { tabIndex: 0 };
  // }
  render() {
    return (
      <Tabs>
        <div>
          <TabList>
            <Tab className="section__title-tab bug_link mr-3" data-text="skills"><span className="numbering">#2</span>skills</Tab>
            <Tab className="section__title-tab bug_link" data-text="tools">tools</Tab>
          </TabList>
        </div>
        

        <TabPanel>
          <Content1/>
        </TabPanel>
        <TabPanel>
          <Content2/>
        </TabPanel>
        
        
       
       
      </Tabs>
    );
  }
}
const SKILLS = [
  { type: "HTML", level: 98 },
  { type: "CSS", level: 99 },
  { type: "JavaScript", level: 87 },
  { type: "jQuery", level: 92 },
  { type: "PHP", level: 70 },
  { type: "wordpress", level: 95 },
  { type: "BootStrap", level: 90 },
  { type: "React.js", level: 45 },
  { type: "Making popcorn", level: 100 },
];
class Content1 extends React.Component {
  render() {
    return <div className="">
      <Skill skills={SKILLS} />
    </div>
  }
}
class Content2 extends React.Component {
  render() {
    return <div>
      <Tool />
    </div>
  }
}


export default TabItems