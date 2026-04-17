import{n as e}from"./chunk-BneVvdWh.js";import{t}from"./jsx-runtime-DnaggZxp.js";import{A as n,t as r}from"./src-DK5dTc4z.js";var i,a,o,s,c,l,u;e((()=>{r(),i=t(),{fn:a}=__STORYBOOK_MODULE_TEST__,o={title:`Components/DBBrand/Variants`,component:n,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{hideLogo:{control:`boolean`},showIcon:{control:`boolean`},text:{control:`text`},id:{control:`text`},autofocus:{control:`boolean`}}},s={args:{children:`(Default) With Logo`},render:e=>(0,i.jsx)(n,{...e})},c={args:{hideLogo:!0,children:`No Logo`},render:e=>(0,i.jsx)(n,{...e})},l={args:{hideLogo:!0,children:(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(`img`,{alt:`this is a fancy placeholder logo`,src:getImage()}),`Custom Logo`]})},render:e=>(0,i.jsx)(n,{...e})},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    "children": "(Default) With Logo"
  },
  render: (properties: any) => <DBBrand {...properties} />
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    "hideLogo": true,
    "children": "No Logo"
  },
  render: (properties: any) => <DBBrand {...properties} />
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "hideLogo": true,
    "children": <><img alt="this is a fancy placeholder logo" src={getImage()} />Custom Logo</>
  },
  render: (properties: any) => <DBBrand {...properties} />
}`,...l.parameters?.docs?.source}}},u=[`DefaultWithLogo`,`NoLogo`,`CustomLogo`]}))();export{l as CustomLogo,s as DefaultWithLogo,c as NoLogo,u as __namedExportsOrder,o as default};