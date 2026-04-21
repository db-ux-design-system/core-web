import{n as e}from"./chunk-BneVvdWh.js";import{t}from"./jsx-runtime-DnaggZxp.js";import{D as n,b as r,t as i}from"./src-DK5dTc4z.js";var a,o,s,c,l,u;e((()=>{i(),a=t(),{fn:o}=__STORYBOOK_MODULE_TEST__,s={title:`Components/DBDivider/Emphasis`,component:r,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{width:{control:`select`,options:[`full`,`auto`]},variant:{control:`select`,options:[`horizontal`,`vertical`]},emphasis:{control:`select`,options:[`weak`,`strong`]},margin:{control:`select`,options:[`medium`,`small`,`large`,`none`,`_`]},id:{control:`text`},autofocus:{control:`boolean`}}},c={args:{width:`full`},render:e=>(0,a.jsxs)(`div`,{style:{width:`200px`},children:[(0,a.jsx)(n,{size:`small`,semantic:`informational`,children:`(Default) Weak`}),(0,a.jsx)(r,{...e})]})},l={args:{emphasis:`strong`,width:`full`},render:e=>(0,a.jsxs)(`div`,{style:{width:`200px`},children:[(0,a.jsx)(n,{size:`small`,semantic:`informational`,children:`Strong`}),(0,a.jsx)(r,{...e})]})},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    "width": "full"
  },
  render: (properties: any) => <div style={{
    width: '200px'
  }}><DBInfotext size="small" semantic="informational">
                    (Default) Weak
                </DBInfotext><DBDivider {...properties} /></div>
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "emphasis": "strong",
    "width": "full"
  },
  render: (properties: any) => <div style={{
    width: '200px'
  }}><DBInfotext size="small" semantic="informational">
                    Strong
                </DBInfotext><DBDivider {...properties} /></div>
}`,...l.parameters?.docs?.source}}},u=[`DefaultWeak`,`Strong`]}))();export{c as DefaultWeak,l as Strong,u as __namedExportsOrder,s as default};