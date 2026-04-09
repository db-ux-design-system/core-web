import{n as e}from"./chunk-BneVvdWh.js";import{t}from"./jsx-runtime-DnaggZxp.js";import{O as n,t as r}from"./src-C7TXoUjo.js";var i,a,o,s,c,l,u;e((()=>{r(),i=t(),{fn:a}=__STORYBOOK_MODULE_TEST__,o={title:`Components/DBCard/Density`,component:n,parameters:{layout:`centered`},tags:[`autodocs`],args:{onClick:a()},argTypes:{behavior:{control:`select`,options:[`static`,`interactive`]},elevationLevel:{control:`select`,options:[`1`,`2`,`3`]},spacing:{control:`select`,options:[`medium`,`small`,`large`,`none`]},id:{control:`text`},autofocus:{control:`boolean`},onClick:{action:`onClick`}}},s={args:{"data-density":`functional`,children:(0,i.jsx)(`strong`,{children:`Functional`})},render:e=>(0,i.jsx)(n,{...e})},c={args:{"data-density":`regular`,children:(0,i.jsx)(`strong`,{children:`(Default) Regular`})},render:e=>(0,i.jsx)(n,{...e})},l={args:{"data-density":`expressive`,children:(0,i.jsx)(`strong`,{children:`Expressive`})},render:e=>(0,i.jsx)(n,{...e})},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    "data-density": "functional",
    "children": <strong>Functional</strong>
  },
  render: (properties: any) => <DBCard {...properties} />
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    "data-density": "regular",
    "children": <strong>(Default) Regular</strong>
  },
  render: (properties: any) => <DBCard {...properties} />
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "data-density": "expressive",
    "children": <strong>Expressive</strong>
  },
  render: (properties: any) => <DBCard {...properties} />
}`,...l.parameters?.docs?.source}}},u=[`Functional`,`DefaultRegular`,`Expressive`]}))();export{c as DefaultRegular,l as Expressive,s as Functional,u as __namedExportsOrder,o as default};