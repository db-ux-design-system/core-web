import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{t as n}from"./jsx-runtime-MKhVqBIO.js";import{n as r,t as i}from"./infotext-BrqREugs.js";import{n as a,t as o}from"./divider-ClGwNHOV.js";var s=t({DefaultWeak:()=>d,Strong:()=>f,__namedExportsOrder:()=>p,default:()=>u}),c,l,u,d,f,p;function m(){return(m=e((()=>{r(),a(),c=n(),{fn:l}=__STORYBOOK_MODULE_TEST__,u={title:`Components/DBDivider/Emphasis`,component:o,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{width:{control:`select`,options:[`full`,`auto`]},variant:{control:`select`,options:[`horizontal`,`vertical`]},emphasis:{control:`select`,options:[`weak`,`strong`]},margin:{control:`select`,options:[`medium`,`small`,`large`,`none`,`_`]},id:{control:`text`},autofocus:{control:`boolean`}}},d={args:{width:`full`},render:e=>(0,c.jsxs)(`div`,{style:{width:`200px`,height:`200px`,display:`grid`,gridTemplateRows:`auto 1fr`},children:[(0,c.jsx)(i,{size:`small`,semantic:`informational`,children:`(Default) Weak`}),(0,c.jsx)(o,{...e})]})},f={args:{emphasis:`strong`,width:`full`},render:e=>(0,c.jsxs)(`div`,{style:{width:`200px`,height:`200px`,display:`grid`,gridTemplateRows:`auto 1fr`},children:[(0,c.jsx)(i,{size:`small`,semantic:`informational`,children:`Strong`}),(0,c.jsx)(o,{...e})]})},p=[`DefaultWeak`,`Strong`],d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    "width": "full"
  },
  render: (properties: any) => <div style={{
    width: '200px',
    height: '200px',
    display: 'grid',
    gridTemplateRows: 'auto 1fr'
  }}><DBInfotext size="small" semantic="informational">
                    (Default) Weak
                </DBInfotext><DBDivider {...properties} /></div>
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    "emphasis": "strong",
    "width": "full"
  },
  render: (properties: any) => <div style={{
    width: '200px',
    height: '200px',
    display: 'grid',
    gridTemplateRows: 'auto 1fr'
  }}><DBInfotext size="small" semantic="informational">
                    Strong
                </DBInfotext><DBDivider {...properties} /></div>
}`,...f.parameters?.docs?.source}}}})))()}export{m as i,f as n,s as r,d as t};