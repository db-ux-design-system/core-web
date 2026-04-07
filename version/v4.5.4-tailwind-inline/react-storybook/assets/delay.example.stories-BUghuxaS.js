import{n as e}from"./chunk-BneVvdWh.js";import{t}from"./jsx-runtime-Bn1Ys6_W.js";import{f as n,k as r,t as i}from"./src-BxDCfhU2.js";var a,o,s,c,l,u,d;e((()=>{i(),a=t(),{fn:o}=__STORYBOOK_MODULE_TEST__,s={title:`Components/DBPopover/Delay`,component:n,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{id:{control:`text`},spacing:{control:`select`,options:[`medium`,`small`,`large`,`none`]},placement:{control:`select`,options:[`top`,`bottom`,`top-start`,`top-end`,`bottom-start`,`bottom-end`,`left`,`right`,`left-start`,`left-end`,`right-start`,`right-end`]},gap:{control:`boolean`},animation:{control:`boolean`},delay:{control:`select`,options:[`none`,`slow`,`fast`]},width:{control:`select`,options:[`auto`,`fixed`]},open:{control:`boolean`},autofocus:{control:`boolean`}}},c={args:{id:`popover-133`,delay:`none`,trigger:(0,a.jsx)(r,{children:`(Default) None`}),children:(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(`ul`,{className:`popover-list`,children:[(0,a.jsx)(`li`,{children:`Popover Custom Item 1`}),(0,a.jsx)(`li`,{children:`Popover Custom Item 2`})]}),(0,a.jsx)(r,{children:`Popover Custom Item 3`})]})},render:e=>(0,a.jsx)(n,{...e})},l={args:{delay:`slow`,id:`popover-14`,trigger:(0,a.jsx)(r,{children:`Slow`}),children:(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(`ul`,{className:`popover-list`,children:[(0,a.jsx)(`li`,{children:`Popover Custom Item 1`}),(0,a.jsx)(`li`,{children:`Popover Custom Item 2`})]}),(0,a.jsx)(r,{children:`Popover Custom Item 3`})]})},render:e=>(0,a.jsx)(n,{...e})},u={args:{delay:`fast`,id:`popover-15`,trigger:(0,a.jsx)(r,{children:`Fast`}),children:(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(`ul`,{className:`popover-list`,children:[(0,a.jsx)(`li`,{children:`Popover Custom Item 1`}),(0,a.jsx)(`li`,{children:`Popover Custom Item 2`})]}),(0,a.jsx)(r,{children:`Popover Custom Item 3`})]})},render:e=>(0,a.jsx)(n,{...e})},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    "id": "popover-133",
    "delay": "none",
    "trigger": <DBButton>(Default) None</DBButton>,
    "children": <><ul className="popover-list"><li>Popover Custom Item 1</li><li>Popover Custom Item 2</li></ul>
<DBButton>Popover Custom Item 3</DBButton></>
  },
  render: (properties: any) => <DBPopover {...properties} />
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "delay": "slow",
    "id": "popover-14",
    "trigger": <DBButton>Slow</DBButton>,
    "children": <><ul className="popover-list"><li>Popover Custom Item 1</li><li>Popover Custom Item 2</li></ul>
<DBButton>Popover Custom Item 3</DBButton></>
  },
  render: (properties: any) => <DBPopover {...properties} />
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    "delay": "fast",
    "id": "popover-15",
    "trigger": <DBButton>Fast</DBButton>,
    "children": <><ul className="popover-list"><li>Popover Custom Item 1</li><li>Popover Custom Item 2</li></ul>
<DBButton>Popover Custom Item 3</DBButton></>
  },
  render: (properties: any) => <DBPopover {...properties} />
}`,...u.parameters?.docs?.source}}},d=[`DefaultNone`,`Slow`,`Fast`]}))();export{c as DefaultNone,u as Fast,l as Slow,d as __namedExportsOrder,s as default};