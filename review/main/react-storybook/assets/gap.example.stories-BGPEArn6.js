import{n as e}from"./chunk-DnJy8xQt.js";import{t}from"./jsx-runtime-DC6t-S6Q.js";import{f as n,k as r,t as i}from"./src-Dg0IbgPT.js";var a,o,s,c,l,u;e((()=>{i(),a=t(),{fn:o}=__STORYBOOK_MODULE_TEST__,s={title:`Components/DBPopover/Gap`,component:n,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{id:{control:`text`},spacing:{control:`select`,options:[`medium`,`small`,`large`,`none`]},placement:{control:`select`,options:[`top`,`bottom`,`top-start`,`top-end`,`bottom-start`,`bottom-end`,`left`,`right`,`left-start`,`left-end`,`right-start`,`right-end`]},gap:{control:`boolean`},animation:{control:`boolean`},delay:{control:`select`,options:[`none`,`slow`,`fast`]},width:{control:`select`,options:[`auto`,`fixed`]},open:{control:`boolean`},autofocus:{control:`boolean`}}},c={args:{id:`popover-11`,gap:!1,trigger:(0,a.jsx)(r,{children:`(Default) False`}),children:(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(`ul`,{className:`popover-list`,children:[(0,a.jsx)(`li`,{children:`Popover Custom Item 1`}),(0,a.jsx)(`li`,{children:`Popover Custom Item 2`})]}),(0,a.jsx)(r,{children:`Popover Custom Item 3`})]})},render:e=>(0,a.jsx)(n,{...e})},l={args:{id:`popover-12`,gap:!0,trigger:(0,a.jsx)(r,{children:`True`}),children:(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(`ul`,{className:`popover-list`,children:[(0,a.jsx)(`li`,{children:`Popover Custom Item 1`}),(0,a.jsx)(`li`,{children:`Popover Custom Item 2`})]}),(0,a.jsx)(r,{children:`Popover Custom Item 3`})]})},render:e=>(0,a.jsx)(n,{...e})},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    "id": "popover-11",
    "gap": false,
    "trigger": <DBButton>(Default) False</DBButton>,
    "children": <><ul className="popover-list"><li>Popover Custom Item 1</li><li>Popover Custom Item 2</li></ul>
<DBButton>Popover Custom Item 3</DBButton></>
  },
  render: (properties: any) => <DBPopover {...properties} />
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "id": "popover-12",
    "gap": true,
    "trigger": <DBButton>True</DBButton>,
    "children": <><ul className="popover-list"><li>Popover Custom Item 1</li><li>Popover Custom Item 2</li></ul>
<DBButton>Popover Custom Item 3</DBButton></>
  },
  render: (properties: any) => <DBPopover {...properties} />
}`,...l.parameters?.docs?.source}}},u=[`DefaultFalse`,`True`]}))();export{c as DefaultFalse,l as True,u as __namedExportsOrder,s as default};