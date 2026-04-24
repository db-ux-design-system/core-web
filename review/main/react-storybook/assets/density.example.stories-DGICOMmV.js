import{n as e}from"./chunk-DnJy8xQt.js";import{t}from"./jsx-runtime-DC6t-S6Q.js";import{m as n,t as r}from"./src-BRpYBxIs.js";var i,a,o,s,c,l,u;e((()=>{r(),i=t(),{fn:a}=__STORYBOOK_MODULE_TEST__,o={title:`Components/DBNavigationItem/Density`,component:n,parameters:{layout:`centered`},tags:[`autodocs`],args:{onClick:a()},argTypes:{disabled:{control:`boolean`},active:{control:`boolean`},showIcon:{control:`boolean`},width:{control:`select`,options:[`full`,`auto`]},wrap:{control:`boolean`},text:{control:`text`},subNavigationExpanded:{control:`boolean`},backButtonId:{control:`text`},backButtonText:{control:`text`},id:{control:`text`},autofocus:{control:`boolean`},onClick:{action:`onClick`}}},s={args:{"data-density":`functional`,children:(0,i.jsx)(`a`,{href:`#`,children:`Functional`})},render:e=>(0,i.jsx)(`ul`,{children:(0,i.jsx)(n,{...e})})},c={args:{"data-density":`regular`,children:(0,i.jsx)(`a`,{href:`#`,children:`(Default) Regular`})},render:e=>(0,i.jsx)(`ul`,{children:(0,i.jsx)(n,{...e})})},l={args:{"data-density":`expressive`,children:(0,i.jsx)(`a`,{href:`#`,children:`Expressive`})},render:e=>(0,i.jsx)(`ul`,{children:(0,i.jsx)(n,{...e})})},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    "data-density": "functional",
    "children": <a href="#">Functional</a>
  },
  render: (properties: any) => <ul><DBNavigationItem {...properties} /></ul>
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    "data-density": "regular",
    "children": <a href="#">(Default) Regular</a>
  },
  render: (properties: any) => <ul><DBNavigationItem {...properties} /></ul>
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "data-density": "expressive",
    "children": <a href="#">Expressive</a>
  },
  render: (properties: any) => <ul><DBNavigationItem {...properties} /></ul>
}`,...l.parameters?.docs?.source}}},u=[`Functional`,`DefaultRegular`,`Expressive`]}))();export{c as DefaultRegular,l as Expressive,s as Functional,u as __namedExportsOrder,o as default};