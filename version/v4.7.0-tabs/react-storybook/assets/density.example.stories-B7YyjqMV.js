import{n as e}from"./chunk-DnJy8xQt.js";import{t}from"./jsx-runtime-BpX3lQ6F.js";import{f as n,k as r,t as i}from"./src-CXJdFFf7.js";var a,o,s,c,l,u,d;e((()=>{i(),a=t(),{fn:o}=__STORYBOOK_MODULE_TEST__,s={title:`Components/DBPopover/Density`,component:n,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{id:{control:`text`},spacing:{control:`select`,options:[`medium`,`small`,`large`,`none`]},placement:{control:`select`,options:[`top`,`bottom`,`top-start`,`top-end`,`bottom-start`,`bottom-end`,`left`,`right`,`left-start`,`left-end`,`right-start`,`right-end`]},gap:{control:`boolean`},animation:{control:`boolean`},delay:{control:`select`,options:[`none`,`slow`,`fast`]},width:{control:`select`,options:[`auto`,`fixed`]},open:{control:`boolean`},autofocus:{control:`boolean`}}},c={args:{"data-density":`functional`,id:`popover-01`,trigger:(0,a.jsx)(r,{children:`Functional`}),children:(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(`ul`,{className:`popover-list`,children:[(0,a.jsx)(`li`,{children:`Popover Custom Item 1`}),(0,a.jsx)(`li`,{children:`Popover Custom Item 2`})]}),(0,a.jsx)(r,{children:`Popover Custom Item 3`})]})},render:e=>(0,a.jsx)(n,{...e})},l={args:{"data-density":`regular`,id:`popover-02`,trigger:(0,a.jsx)(r,{children:`(Default) Regular`}),children:(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(`ul`,{className:`popover-list`,children:[(0,a.jsx)(`li`,{children:`Popover Custom Item 1`}),(0,a.jsx)(`li`,{children:`Popover Custom Item 2`})]}),(0,a.jsx)(r,{children:`Popover Custom Item 3`})]})},render:e=>(0,a.jsx)(n,{...e})},u={args:{"data-density":`expressive`,id:`popover-03`,trigger:(0,a.jsx)(r,{children:`Expressive`}),children:(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(`ul`,{className:`popover-list`,children:[(0,a.jsx)(`li`,{children:`Popover Custom Item 1`}),(0,a.jsx)(`li`,{children:`Popover Custom Item 2`})]}),(0,a.jsx)(r,{children:`Popover Custom Item 3`})]})},render:e=>(0,a.jsx)(n,{...e})},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    "data-density": "functional",
    "id": "popover-01",
    "trigger": <DBButton>Functional</DBButton>,
    "children": <><ul className="popover-list"><li>Popover Custom Item 1</li><li>Popover Custom Item 2</li></ul>
<DBButton>Popover Custom Item 3</DBButton></>
  },
  render: (properties: any) => <DBPopover {...properties} />
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "data-density": "regular",
    "id": "popover-02",
    "trigger": <DBButton>(Default) Regular</DBButton>,
    "children": <><ul className="popover-list"><li>Popover Custom Item 1</li><li>Popover Custom Item 2</li></ul>
<DBButton>Popover Custom Item 3</DBButton></>
  },
  render: (properties: any) => <DBPopover {...properties} />
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    "data-density": "expressive",
    "id": "popover-03",
    "trigger": <DBButton>Expressive</DBButton>,
    "children": <><ul className="popover-list"><li>Popover Custom Item 1</li><li>Popover Custom Item 2</li></ul>
<DBButton>Popover Custom Item 3</DBButton></>
  },
  render: (properties: any) => <DBPopover {...properties} />
}`,...u.parameters?.docs?.source}}},d=[`Functional`,`DefaultRegular`,`Expressive`]}))();export{l as DefaultRegular,u as Expressive,c as Functional,d as __namedExportsOrder,s as default};