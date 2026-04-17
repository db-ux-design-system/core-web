import{n as e}from"./chunk-BneVvdWh.js";import{t}from"./jsx-runtime-DnaggZxp.js";import{D as n,b as r,t as i}from"./src-DK5dTc4z.js";var a,o,s,c,l,u,d;e((()=>{i(),a=t(),{fn:o}=__STORYBOOK_MODULE_TEST__,s={title:`Components/DBDivider/Density`,component:r,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{width:{control:`select`,options:[`full`,`auto`]},variant:{control:`select`,options:[`horizontal`,`vertical`]},emphasis:{control:`select`,options:[`weak`,`strong`]},margin:{control:`select`,options:[`medium`,`small`,`large`,`none`,`_`]},id:{control:`text`},autofocus:{control:`boolean`}}},c={args:{width:`full`},render:e=>(0,a.jsxs)(`div`,{"data-density":`functional`,style:{width:`200px`},children:[(0,a.jsx)(n,{size:`small`,semantic:`informational`,children:`Functional`}),(0,a.jsx)(r,{...e})]})},l={args:{width:`full`},render:e=>(0,a.jsxs)(`div`,{"data-density":`regular`,style:{width:`200px`},children:[(0,a.jsx)(n,{size:`small`,semantic:`informational`,children:`(Default) Regular`}),(0,a.jsx)(r,{...e})]})},u={args:{width:`full`},render:e=>(0,a.jsxs)(`div`,{"data-density":`expressive`,style:{width:`200px`},children:[(0,a.jsx)(n,{size:`small`,semantic:`informational`,children:`Expressive`}),(0,a.jsx)(r,{...e})]})},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    "width": "full"
  },
  render: (properties: any) => <div data-density="functional" style={{
    width: '200px'
  }}><DBInfotext size="small" semantic="informational">
                    Functional
                </DBInfotext><DBDivider {...properties} /></div>
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "width": "full"
  },
  render: (properties: any) => <div data-density="regular" style={{
    width: '200px'
  }}><DBInfotext size="small" semantic="informational">
                    (Default) Regular
                </DBInfotext><DBDivider {...properties} /></div>
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    "width": "full"
  },
  render: (properties: any) => <div data-density="expressive" style={{
    width: '200px'
  }}><DBInfotext size="small" semantic="informational">
                    Expressive
                </DBInfotext><DBDivider {...properties} /></div>
}`,...u.parameters?.docs?.source}}},d=[`Functional`,`DefaultRegular`,`Expressive`]}))();export{l as DefaultRegular,u as Expressive,c as Functional,d as __namedExportsOrder,s as default};