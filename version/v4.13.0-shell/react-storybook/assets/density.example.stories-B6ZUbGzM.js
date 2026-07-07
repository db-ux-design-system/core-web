import{i as e}from"./preload-helper-BnONUx6D.js";import{t}from"./jsx-runtime-CFzn-uRL.js";import{It as n,Mt as r,t as i}from"./src-D6Eh5bMC.js";var a,o,s,c,l,u,d;e((()=>{i(),a=t(),{fn:o}=__STORYBOOK_MODULE_TEST__,s={title:`Components/DBControlPanelBrand/Density`,component:r,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{id:{control:`text`},autofocus:{control:`boolean`}}},c={args:{"data-density":`functional`},render:e=>(0,a.jsxs)(`div`,{children:[(0,a.jsx)(n,{semantic:`informational`,size:`small`,icon:`none`,children:`Functional`}),(0,a.jsx)(r,{...e})]})},l={args:{"data-density":`regular`},render:e=>(0,a.jsxs)(`div`,{children:[(0,a.jsx)(n,{semantic:`informational`,size:`small`,icon:`none`,children:`(Default) Regular`}),(0,a.jsx)(r,{...e})]})},u={args:{"data-density":`expressive`},render:e=>(0,a.jsxs)(`div`,{children:[(0,a.jsx)(n,{semantic:`informational`,size:`small`,icon:`none`,children:`Expressive`}),(0,a.jsx)(r,{...e})]})},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    "data-density": "functional"
  },
  render: (properties: any) => <div><DBInfotext semantic="informational" size="small" icon="none">
                    Functional
                </DBInfotext><DBControlPanelBrand {...properties} /></div>
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "data-density": "regular"
  },
  render: (properties: any) => <div><DBInfotext semantic="informational" size="small" icon="none">
                    (Default) Regular
                </DBInfotext><DBControlPanelBrand {...properties} /></div>
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    "data-density": "expressive"
  },
  render: (properties: any) => <div><DBInfotext semantic="informational" size="small" icon="none">
                    Expressive
                </DBInfotext><DBControlPanelBrand {...properties} /></div>
}`,...u.parameters?.docs?.source}}},d=[`Functional`,`DefaultRegular`,`Expressive`]}))();export{l as DefaultRegular,u as Expressive,c as Functional,d as __namedExportsOrder,s as default};