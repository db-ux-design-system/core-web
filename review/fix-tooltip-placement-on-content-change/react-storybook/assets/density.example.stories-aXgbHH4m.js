import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{n,t as r}from"./infotext-9gMHcqob.js";import{n as i,t as a}from"./divider-CURYNwQy.js";var o,s,c,l,u,d,f;function p(){return(p=e((()=>{n(),i(),o=t(),{fn:s}=__STORYBOOK_MODULE_TEST__,c={title:`Components/DBDivider/Density`,component:a,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{width:{control:`select`,options:[`full`,`auto`]},variant:{control:`select`,options:[`horizontal`,`vertical`]},emphasis:{control:`select`,options:[`weak`,`strong`]},margin:{control:`select`,options:[`medium`,`small`,`large`,`none`,`_`]},id:{control:`text`},autofocus:{control:`boolean`}}},l={args:{width:`full`},render:e=>(0,o.jsxs)(`div`,{"data-density":`functional`,style:{width:`200px`},children:[(0,o.jsx)(r,{size:`small`,semantic:`informational`,children:`Functional`}),(0,o.jsx)(a,{...e})]})},u={args:{width:`full`},render:e=>(0,o.jsxs)(`div`,{"data-density":`regular`,style:{width:`200px`},children:[(0,o.jsx)(r,{size:`small`,semantic:`informational`,children:`(Default) Regular`}),(0,o.jsx)(a,{...e})]})},d={args:{width:`full`},render:e=>(0,o.jsxs)(`div`,{"data-density":`expressive`,style:{width:`200px`},children:[(0,o.jsx)(r,{size:`small`,semantic:`informational`,children:`Expressive`}),(0,o.jsx)(a,{...e})]})},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "width": "full"
  },
  render: (properties: any) => <div data-density="functional" style={{
    width: '200px'
  }}><DBInfotext size="small" semantic="informational">
                    Functional
                </DBInfotext><DBDivider {...properties} /></div>
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    "width": "full"
  },
  render: (properties: any) => <div data-density="regular" style={{
    width: '200px'
  }}><DBInfotext size="small" semantic="informational">
                    (Default) Regular
                </DBInfotext><DBDivider {...properties} /></div>
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    "width": "full"
  },
  render: (properties: any) => <div data-density="expressive" style={{
    width: '200px'
  }}><DBInfotext size="small" semantic="informational">
                    Expressive
                </DBInfotext><DBDivider {...properties} /></div>
}`,...d.parameters?.docs?.source}}},f=[`Functional`,`DefaultRegular`,`Expressive`]})))()}p();export{u as DefaultRegular,d as Expressive,l as Functional,f as __namedExportsOrder,c as default};