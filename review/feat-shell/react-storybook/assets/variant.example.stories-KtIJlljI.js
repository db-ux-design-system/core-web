import{i as e}from"./preload-helper-DKtw6Osp.js";import{t}from"./jsx-runtime-CFNnYeT5.js";import{It as n,Mt as r,t as i}from"./src-DSVT3FO0.js";var a,o,s,c,l,u,d;e((()=>{i(),a=t(),{fn:o}=__STORYBOOK_MODULE_TEST__,s={title:`Components/DBControlPanelBrand/Variants`,component:r,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{id:{control:`text`},autofocus:{control:`boolean`}}},c={args:{},render:e=>(0,a.jsxs)(`div`,{children:[(0,a.jsx)(n,{semantic:`informational`,size:`small`,icon:`none`,children:`(Default) With Logo`}),(0,a.jsx)(r,{...e})]})},l={args:{"data-logo":`db-systel`},render:e=>(0,a.jsxs)(`div`,{children:[(0,a.jsx)(n,{semantic:`informational`,size:`small`,icon:`none`,children:`Logo Variant`}),(0,a.jsx)(r,{...e})]})},u={args:{children:(0,a.jsx)(`a`,{href:`#`,children:`Home`})},render:e=>(0,a.jsxs)(`div`,{children:[(0,a.jsx)(n,{semantic:`informational`,size:`small`,icon:`none`,children:`As Link`}),(0,a.jsx)(r,{...e})]})},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {},
  render: (properties: any) => <div><DBInfotext semantic="informational" size="small" icon="none">
                    (Default) With Logo
                </DBInfotext><DBControlPanelBrand {...properties} /></div>
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "data-logo": "db-systel"
  },
  render: (properties: any) => <div><DBInfotext semantic="informational" size="small" icon="none">
                    Logo Variant
                </DBInfotext><DBControlPanelBrand {...properties} /></div>
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    "children": <a href="#">Home</a>
  },
  render: (properties: any) => <div><DBInfotext semantic="informational" size="small" icon="none">
                    As Link
                </DBInfotext><DBControlPanelBrand {...properties} /></div>
}`,...u.parameters?.docs?.source}}},d=[`DefaultWithLogo`,`LogoVariant`,`AsLink`]}))();export{u as AsLink,c as DefaultWithLogo,l as LogoVariant,d as __namedExportsOrder,s as default};