import React from 'react'
import Skill from '../components/Skill';
import Tool from '../components/Tool';
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
      <Tool/>
    </div>
  }
}

class TabAbout extends React.Component {
  render() {
    return (
      <div id="skills-tool">
        <CoolTabs 
          tabKey={'1'}
          style={{ width: 'auto', height: 950, background: 'transparent' }}
          tabsHeaderStyle={{ height: 'auto', width: 'auto'}}
          activeTabStyle={{ background: 'transparent', color: '#0e1111' }}
          unActiveTabStyle={{ color: '#efefef', textShadow: '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000' }}
          rightTabTitle={<h4 className="section__title-tab bug_link" data-text="tools">tools </h4>}
          leftTabTitle={<h4 className="section__title-tab bug_link mr-3" data-text="skills">skills</h4>}
          leftContent={<Content1 />}
          rightContent={<Content2 />}
          contentTransitionStyle={'transform 0.3s ease-in'}
          borderTransitionStyle={'all 0.3s ease-in'} />
      </div>
    );
  }
}
export default TabAbout