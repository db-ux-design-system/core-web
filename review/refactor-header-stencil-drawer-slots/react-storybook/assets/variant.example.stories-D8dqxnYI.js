import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{n,t as r}from"./infotext-DKX_tuWw.js";import{n as i,t as a}from"./divider-vgvZDKvC.js";var o,s,c,l,u,d;function f(){return(f=e((()=>{n(),i(),o=t(),{fn:s}=__STORYBOOK_MODULE_TEST__,c={title:`Components/DBDivider/Variant`,component:a,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{width:{control:`select`,options:[`full`,`auto`]},variant:{control:`select`,options:[`horizontal`,`vertical`]},emphasis:{control:`select`,options:[`weak`,`strong`]},margin:{control:`select`,options:[`medium`,`small`,`large`,`none`,`_`]},id:{control:`text`},autofocus:{control:`boolean`}}},l={args:{width:`full`},render:e=>(0,o.jsxs)(`div`,{style:{width:`200px`},children:[(0,o.jsx)(r,{size:`small`,semantic:`informational`,children:`(Default) Adaptive - Horizontal`}),(0,o.jsx)(a,{...e})]})},u={args:{variant:`vertical`,width:`full`},render:e=>(0,o.jsxs)(`div`,{style:{height:`100px`},children:[(0,o.jsx)(r,{size:`small`,semantic:`informational`,children:`Adaptive - Vertical`}),(0,o.jsx)(a,{...e})]})},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "width": "full"
  },
  render: (properties: any) => <div style={{
    width: '200px'
  }}><DBInfotext size="small" semantic="informational">
                    (Default) Adaptive - Horizontal
                </DBInfotext><DBDivider {...properties} /></div>
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    "variant": "vertical",
    "width": "full"
  },
  render: (properties: any) => <div style={{
    height: '100px'
  }}><DBInfotext size="small" semantic="informational">
                    Adaptive - Vertical
                </DBInfotext><DBDivider {...properties} /></div>
}`,...u.parameters?.docs?.source}}},d=[`DefaultAdaptiveHorizontal`,`AdaptiveVertical`]})))()}f();export{u as AdaptiveVertical,l as DefaultAdaptiveHorizontal,d as __namedExportsOrder,c as default};