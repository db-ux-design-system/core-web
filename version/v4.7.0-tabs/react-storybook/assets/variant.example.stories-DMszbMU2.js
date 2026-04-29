import{n as e}from"./chunk-DnJy8xQt.js";import{t}from"./jsx-runtime-BpX3lQ6F.js";import{D as n,b as r,t as i}from"./src-CXJdFFf7.js";var a,o,s,c,l,u;e((()=>{i(),a=t(),{fn:o}=__STORYBOOK_MODULE_TEST__,s={title:`Components/DBDivider/Variant`,component:r,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{width:{control:`select`,options:[`full`,`auto`]},variant:{control:`select`,options:[`horizontal`,`vertical`]},emphasis:{control:`select`,options:[`weak`,`strong`]},margin:{control:`select`,options:[`medium`,`small`,`large`,`none`,`_`]},id:{control:`text`},autofocus:{control:`boolean`}}},c={args:{width:`full`},render:e=>(0,a.jsxs)(`div`,{style:{width:`200px`},children:[(0,a.jsx)(n,{size:`small`,semantic:`informational`,children:`(Default) Adaptive - Horizontal`}),(0,a.jsx)(r,{...e})]})},l={args:{variant:`vertical`,width:`full`},render:e=>(0,a.jsxs)(`div`,{style:{height:`100px`},children:[(0,a.jsx)(n,{size:`small`,semantic:`informational`,children:`Adaptive - Vertical`}),(0,a.jsx)(r,{...e})]})},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    "width": "full"
  },
  render: (properties: any) => <div style={{
    width: '200px'
  }}><DBInfotext size="small" semantic="informational">
                    (Default) Adaptive - Horizontal
                </DBInfotext><DBDivider {...properties} /></div>
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "variant": "vertical",
    "width": "full"
  },
  render: (properties: any) => <div style={{
    height: '100px'
  }}><DBInfotext size="small" semantic="informational">
                    Adaptive - Vertical
                </DBInfotext><DBDivider {...properties} /></div>
}`,...l.parameters?.docs?.source}}},u=[`DefaultAdaptiveHorizontal`,`AdaptiveVertical`]}))();export{l as AdaptiveVertical,c as DefaultAdaptiveHorizontal,u as __namedExportsOrder,s as default};