import{n as e}from"./iframe-HOdhQ6g9.js";import{n as t,t as n}from"./infotext-CFfa-7aO.js";import{n as r,t as i}from"./stack-Cg0T0MOv.js";import{n as a}from"./rolldown-runtime-DkW27tQK.js";var o,s,c,l,u,d;function f(){return(f=a((()=>{t(),r(),o=e(),{fn:s}=__STORYBOOK_MODULE_TEST__,c={title:`Components/DBStack/Direction`,component:i,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{variant:{control:`select`,options:[`simple`,`divider`]},gap:{control:`select`,options:[`none`,`3x-large`,`2x-large`,`x-large`,`large`,`medium`,`small`,`x-small`,`2x-small`,`3x-small`]},direction:{control:`select`,options:[`row`,`column`]},wrap:{control:`boolean`},alignment:{control:`select`,options:[`stretch`,`start`,`end`,`center`]},justifyContent:{control:`select`,options:[`space-between`,`start`,`end`,`center`]},id:{control:`text`},autofocus:{control:`boolean`}}},l={args:{style:{padding:`var(--db-spacing-fixed-xs)`},children:(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(`span`,{className:`dummy-component`,children:(0,o.jsx)(`a`,{href:`#`,children:`Content 1`})}),(0,o.jsx)(`span`,{className:`dummy-component`,children:`Content 2`}),(0,o.jsx)(`span`,{className:`dummy-component`,children:`Content 3`})]})},render:e=>(0,o.jsxs)(`div`,{style:{alignItems:`flex-start`,alignSelf:`flex-start`,display:`flex`,flexWrap:`nowrap`,flexDirection:`column`,gap:`var(--db-spacing-fixed-sm)`,width:`200px`},children:[(0,o.jsx)(n,{size:`small`,icon:`none`,semantic:`informational`,children:`(Default) Column`}),(0,o.jsx)(i,{...e})]})},u={args:{direction:`row`,style:{padding:`var(--db-spacing-fixed-xs)`},children:(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(`span`,{className:`dummy-component`,children:(0,o.jsx)(`a`,{href:`#`,children:`Content 1`})}),(0,o.jsx)(`span`,{className:`dummy-component`,children:`Content 2`}),(0,o.jsx)(`span`,{className:`dummy-component`,children:`Content 3`})]})},render:e=>(0,o.jsxs)(`div`,{style:{alignItems:`flex-start`,alignSelf:`flex-start`,display:`flex`,flexWrap:`nowrap`,flexDirection:`column`,gap:`var(--db-spacing-fixed-sm)`,height:`100px`},children:[(0,o.jsx)(n,{size:`small`,icon:`none`,semantic:`informational`,children:`Row`}),(0,o.jsx)(i,{...e})]})},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "style": {
      padding: 'var(--db-spacing-fixed-xs)'
    },
    "children": <><span className="dummy-component"><a href="#">Content 1</a></span><span className="dummy-component">Content 2</span><span className="dummy-component">Content 3</span></>
  },
  render: (properties: any) => <div style={{
    alignItems: 'flex-start',
    alignSelf: 'flex-start',
    display: 'flex',
    flexWrap: 'nowrap',
    flexDirection: 'column',
    gap: 'var(--db-spacing-fixed-sm)',
    width: '200px'
  }}><DBInfotext size="small" icon="none" semantic="informational">
                    (Default) Column
                </DBInfotext><DBStack {...properties} /></div>
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    "direction": "row",
    "style": {
      padding: 'var(--db-spacing-fixed-xs)'
    },
    "children": <><span className="dummy-component"><a href="#">Content 1</a></span><span className="dummy-component">Content 2</span><span className="dummy-component">Content 3</span></>
  },
  render: (properties: any) => <div style={{
    alignItems: 'flex-start',
    alignSelf: 'flex-start',
    display: 'flex',
    flexWrap: 'nowrap',
    flexDirection: 'column',
    gap: 'var(--db-spacing-fixed-sm)',
    height: '100px'
  }}><DBInfotext size="small" icon="none" semantic="informational">
                    Row
                </DBInfotext><DBStack {...properties} /></div>
}`,...u.parameters?.docs?.source}}},d=[`DefaultColumn`,`Row`]})))()}f();export{l as DefaultColumn,u as Row,d as __namedExportsOrder,c as default};