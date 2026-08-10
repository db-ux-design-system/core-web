import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{n,t as r}from"./infotext-Dp-pa13o.js";import{n as i,t as a}from"./divider-CFHalj63.js";var o,s,c,l,u,d;function f(){return(f=e((()=>{n(),i(),o=t(),{fn:s}=__STORYBOOK_MODULE_TEST__,c={title:`Components/DBDivider/Emphasis`,component:a,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{width:{control:`select`,options:[`full`,`auto`]},variant:{control:`select`,options:[`horizontal`,`vertical`]},emphasis:{control:`select`,options:[`weak`,`strong`]},margin:{control:`select`,options:[`medium`,`small`,`large`,`none`,`_`]},id:{control:`text`},autofocus:{control:`boolean`}}},l={args:{width:`full`},render:e=>(0,o.jsxs)(`div`,{style:{width:`200px`},children:[(0,o.jsx)(r,{size:`small`,semantic:`informational`,children:`(Default) Weak`}),(0,o.jsx)(a,{...e})]})},u={args:{emphasis:`strong`,width:`full`},render:e=>(0,o.jsxs)(`div`,{style:{width:`200px`},children:[(0,o.jsx)(r,{size:`small`,semantic:`informational`,children:`Strong`}),(0,o.jsx)(a,{...e})]})},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "width": "full"
  },
  render: (properties: any) => <div style={{
    width: '200px'
  }}><DBInfotext size="small" semantic="informational">
                    (Default) Weak
                </DBInfotext><DBDivider {...properties} /></div>
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    "emphasis": "strong",
    "width": "full"
  },
  render: (properties: any) => <div style={{
    width: '200px'
  }}><DBInfotext size="small" semantic="informational">
                    Strong
                </DBInfotext><DBDivider {...properties} /></div>
}`,...u.parameters?.docs?.source}}},d=[`DefaultWeak`,`Strong`]})))()}f();export{l as DefaultWeak,u as Strong,d as __namedExportsOrder,c as default};