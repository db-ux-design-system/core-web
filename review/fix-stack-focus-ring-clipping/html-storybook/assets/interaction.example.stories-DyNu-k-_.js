import{n as e}from"./iframe-AzLnhEsm.js";import{n as t,t as n}from"./button-AfvSPKwJ.js";import{n as r,t as i}from"./stack-Ds8YuMmo.js";import{n as a}from"./rolldown-runtime-DkW27tQK.js";var o,s,c,l,u,d;function f(){return(f=a((()=>{t(),r(),o=e(),{fn:s}=__STORYBOOK_MODULE_TEST__,c={title:`Components/DBStack/Interaction`,component:i,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{variant:{control:`select`,options:[`simple`,`divider`]},gap:{control:`select`,options:[`none`,`3x-large`,`2x-large`,`x-large`,`large`,`medium`,`small`,`x-small`,`2x-small`,`3x-small`]},direction:{control:`select`,options:[`row`,`column`]},wrap:{control:`boolean`},alignment:{control:`select`,options:[`stretch`,`start`,`end`,`center`]},justifyContent:{control:`select`,options:[`space-between`,`start`,`end`,`center`]},id:{control:`text`},autofocus:{control:`boolean`}}},l={args:{"data-testid":`default-stack`,children:(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n,{children:`Focusable`}),(0,o.jsx)(`span`,{className:`dummy-component`,children:`Content 2`})]})},render:e=>(0,o.jsx)(`div`,{className:`fit-content-container`,children:(0,o.jsx)(i,{...e})})},u={args:{"data-testid":`wrap-stack`,wrap:!0,children:(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n,{children:`Focusable`}),(0,o.jsx)(`span`,{className:`dummy-component`,children:`Content 2`}),(0,o.jsx)(`span`,{className:`dummy-component`,children:`Content 3`})]})},render:e=>(0,o.jsx)(`div`,{className:`fit-content-container`,style:{width:`160px`,height:`88px`},children:(0,o.jsx)(i,{...e})})},d=[`Interaction`,`StackInteraction1`],l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "data-testid": "default-stack",
    "children": <><DBButton>Focusable</DBButton><span className="dummy-component">Content 2</span></>
  },
  render: (properties: any) => <div className="fit-content-container"><DBStack {...properties} /></div>
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    "data-testid": "wrap-stack",
    "wrap": true,
    "children": <><DBButton>Focusable</DBButton><span className="dummy-component">Content 2</span><span className="dummy-component">Content 3</span></>
  },
  render: (properties: any) => <div className="fit-content-container" style={{
    width: '160px',
    height: '88px'
  }}><DBStack {...properties} /></div>
}`,...u.parameters?.docs?.source}}}})))()}f();export{l as Interaction,u as StackInteraction1,d as __namedExportsOrder,c as default};