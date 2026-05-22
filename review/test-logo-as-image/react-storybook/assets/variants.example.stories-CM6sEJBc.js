import{i as e}from"./preload-helper-W_Yl5jtP.js";import{t}from"./jsx-runtime-BMeZs13F.js";import{A as n,t as r}from"./src-DP6S5rOF.js";var i,a,o,s,c,l,u;e((()=>{r(),i=t(),{fn:a}=__STORYBOOK_MODULE_TEST__,o={title:`Components/DBBrand/Variants`,component:n,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{noText:{control:`boolean`},text:{control:`text`},id:{control:`text`},autofocus:{control:`boolean`}}},s={args:{children:`(Default) With Logo`},render:e=>(0,i.jsx)(n,{...e})},c={args:{"data-logo":`db-systel`,noText:!0,children:`Logo Variant`},render:e=>(0,i.jsx)(n,{...e})},l={args:{children:(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(`img`,{alt:`this is a fancy placeholder logo`,src:getImage()}),`Custom Logo`]})},render:e=>(0,i.jsx)(n,{...e})},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    "children": "(Default) With Logo"
  },
  render: (properties: any) => <DBBrand {...properties} />
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    "data-logo": "db-systel",
    "noText": true,
    "children": "Logo Variant"
  },
  render: (properties: any) => <DBBrand {...properties} />
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "children": <><img alt="this is a fancy placeholder logo" src={getImage()} />Custom Logo</>
  },
  render: (properties: any) => <DBBrand {...properties} />
}`,...l.parameters?.docs?.source}}},u=[`DefaultWithLogo`,`LogoVariant`,`CustomLogo`]}))();export{l as CustomLogo,s as DefaultWithLogo,c as LogoVariant,u as __namedExportsOrder,o as default};