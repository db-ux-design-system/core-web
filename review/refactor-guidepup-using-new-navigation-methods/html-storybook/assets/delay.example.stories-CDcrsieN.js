import{n as e}from"./iframe-CF6fiXBv.js";import{n as t,t as n}from"./button-D6hXM_-l.js";import{n as r,t as i}from"./popover-R3GzVQRR.js";import{n as a}from"./rolldown-runtime-DkW27tQK.js";var o,s,c,l,u,d,f;function p(){return(p=a((()=>{t(),r(),o=e(),{fn:s}=__STORYBOOK_MODULE_TEST__,c={title:`Components/DBPopover/Delay`,component:i,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{id:{control:`text`},spacing:{control:`select`,options:[`medium`,`small`,`large`,`none`]},placement:{control:`select`,options:[`top`,`bottom`,`top-start`,`top-end`,`bottom-start`,`bottom-end`,`left`,`right`,`left-start`,`left-end`,`right-start`,`right-end`]},gap:{control:`boolean`},animation:{control:`boolean`},delay:{control:`select`,options:[`none`,`slow`,`fast`]},width:{control:`select`,options:[`auto`,`fixed`]},open:{control:`boolean`},autofocus:{control:`boolean`}}},l={args:{id:`popover-133`,delay:`none`,trigger:(0,o.jsx)(n,{children:`(Default) None`}),children:(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(`ul`,{className:`popover-list`,children:[(0,o.jsx)(`li`,{children:`Popover Custom Item 1`}),(0,o.jsx)(`li`,{children:`Popover Custom Item 2`})]}),(0,o.jsx)(n,{children:`Popover Custom Item 3`})]})},render:e=>(0,o.jsx)(i,{...e})},u={args:{delay:`slow`,id:`popover-14`,trigger:(0,o.jsx)(n,{children:`Slow`}),children:(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(`ul`,{className:`popover-list`,children:[(0,o.jsx)(`li`,{children:`Popover Custom Item 1`}),(0,o.jsx)(`li`,{children:`Popover Custom Item 2`})]}),(0,o.jsx)(n,{children:`Popover Custom Item 3`})]})},render:e=>(0,o.jsx)(i,{...e})},d={args:{delay:`fast`,id:`popover-15`,trigger:(0,o.jsx)(n,{children:`Fast`}),children:(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(`ul`,{className:`popover-list`,children:[(0,o.jsx)(`li`,{children:`Popover Custom Item 1`}),(0,o.jsx)(`li`,{children:`Popover Custom Item 2`})]}),(0,o.jsx)(n,{children:`Popover Custom Item 3`})]})},render:e=>(0,o.jsx)(i,{...e})},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "id": "popover-133",
    "delay": "none",
    "trigger": <DBButton>(Default) None</DBButton>,
    "children": <><ul className="popover-list"><li>Popover Custom Item 1</li><li>Popover Custom Item 2</li></ul>
<DBButton>Popover Custom Item 3</DBButton></>
  },
  render: (properties: any) => <DBPopover {...properties} />
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    "delay": "slow",
    "id": "popover-14",
    "trigger": <DBButton>Slow</DBButton>,
    "children": <><ul className="popover-list"><li>Popover Custom Item 1</li><li>Popover Custom Item 2</li></ul>
<DBButton>Popover Custom Item 3</DBButton></>
  },
  render: (properties: any) => <DBPopover {...properties} />
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    "delay": "fast",
    "id": "popover-15",
    "trigger": <DBButton>Fast</DBButton>,
    "children": <><ul className="popover-list"><li>Popover Custom Item 1</li><li>Popover Custom Item 2</li></ul>
<DBButton>Popover Custom Item 3</DBButton></>
  },
  render: (properties: any) => <DBPopover {...properties} />
}`,...d.parameters?.docs?.source}}},f=[`DefaultNone`,`Slow`,`Fast`]})))()}p();export{l as DefaultNone,d as Fast,u as Slow,f as __namedExportsOrder,c as default};