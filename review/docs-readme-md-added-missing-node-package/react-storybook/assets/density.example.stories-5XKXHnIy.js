import{n as e}from"./chunk-BneVvdWh.js";import{t}from"./jsx-runtime-DnaggZxp.js";import{t as n,y as r}from"./src-DK5dTc4z.js";var i,a,o,s,c,l,u;e((()=>{n(),i=t(),{fn:a}=__STORYBOOK_MODULE_TEST__,o={title:`Components/DBDrawer/Density`,component:r,parameters:{layout:`centered`},tags:[`autodocs`],args:{onClose:a()},argTypes:{open:{control:`boolean`},width:{control:`select`,options:[`full`,`auto`]},rounded:{control:`boolean`},spacing:{control:`select`,options:[`medium`,`small`,`large`,`none`]},backdrop:{control:`select`,options:[`none`,`strong`,`weak`,`invisible`]},direction:{control:`select`,options:[`left`,`right`,`up`,`down`]},variant:{control:`select`,options:[`modal`,`inside`]},position:{control:`select`,options:[`fixed`,`absolute`]},closeButtonId:{control:`text`},closeButtonText:{control:`text`},id:{control:`text`},autofocus:{control:`boolean`},onClose:{action:`onClose`}}},s={args:{open:!1,onClose:a(),children:`Functional`},render:e=>(0,i.jsxs)(`div`,{"data-density":`functional`,children:[`Open DBDrawer by switching open property`,(0,i.jsx)(r,{...e})]})},c={args:{open:!1,onClose:a(),children:`(Default) Regular`},render:e=>(0,i.jsxs)(`div`,{"data-density":`regular`,children:[`Open DBDrawer by switching open property`,(0,i.jsx)(r,{...e})]})},l={args:{open:!1,onClose:a(),children:`Expressive`},render:e=>(0,i.jsxs)(`div`,{"data-density":`expressive`,children:[`Open DBDrawer by switching open property`,(0,i.jsx)(r,{...e})]})},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    "open": false,
    "onClose": fn(),
    "children": "Functional"
  },
  render: (properties: any) => <div data-density="functional">Open DBDrawer by switching open property<DBDrawer {...properties} /></div>
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    "open": false,
    "onClose": fn(),
    "children": "(Default) Regular"
  },
  render: (properties: any) => <div data-density="regular">Open DBDrawer by switching open property<DBDrawer {...properties} /></div>
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "open": false,
    "onClose": fn(),
    "children": "Expressive"
  },
  render: (properties: any) => <div data-density="expressive">Open DBDrawer by switching open property<DBDrawer {...properties} /></div>
}`,...l.parameters?.docs?.source}}},u=[`Functional`,`DefaultRegular`,`Expressive`]}))();export{c as DefaultRegular,l as Expressive,s as Functional,u as __namedExportsOrder,o as default};