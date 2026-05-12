import{n as e}from"./chunk-DnJy8xQt.js";import{t}from"./jsx-runtime-BpX3lQ6F.js";import{A as n,t as r}from"./src-DdVrbeF4.js";var i,a,o,s,c,l;e((()=>{r(),i=t(),{fn:a}=__STORYBOOK_MODULE_TEST__,o={title:`Components/DBBrand/Variants`,component:n,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{text:{control:`text`},id:{control:`text`},autofocus:{control:`boolean`}}},s={args:{children:`(Default) With Logo`},render:e=>(0,i.jsx)(n,{...e})},c={args:{children:(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(`img`,{alt:`this is a fancy placeholder logo`,src:getImage()}),`Custom Logo`]})},render:e=>(0,i.jsx)(n,{...e})},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    "children": "(Default) With Logo"
  },
  render: (properties: any) => <DBBrand {...properties} />
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    "children": <><img alt="this is a fancy placeholder logo" src={getImage()} />Custom Logo</>
  },
  render: (properties: any) => <DBBrand {...properties} />
}`,...c.parameters?.docs?.source}}},l=[`DefaultWithLogo`,`NoLogo`]}))();export{s as DefaultWithLogo,c as NoLogo,l as __namedExportsOrder,o as default};