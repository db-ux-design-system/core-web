import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{t as n}from"./jsx-runtime-MKhVqBIO.js";import{n as r,t as i}from"./infotext-DWUtRaHE.js";import{n as a,t as o}from"./table-Bhb1ONAD.js";import{a as s,t as c}from"./data-C0P0p_BJ.js";var l=t({Auto:()=>m,DefaultFull:()=>p,__namedExportsOrder:()=>h,default:()=>f}),u,d,f,p,m,h;function g(){return(g=e((()=>{r(),a(),s(),u=n(),{fn:d}=__STORYBOOK_MODULE_TEST__,f={title:`Components/DBTable/Width`,component:o,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{id:{control:`text`},caption:{control:`text`},captionPlain:{control:`text`},data:{control:`object`},divider:{control:`select`,options:[`none`,`both`,`horizontal`,`vertical`]},showCaption:{control:`boolean`},size:{control:`select`,options:[`x-small`,`small`,`medium`,`large`]},variant:{control:`select`,options:[`flat`,`zebra`,`spaced`]},mobileVariant:{control:`select`,options:[`table`,`list`]},stickyHeader:{control:`select`,options:[`none`,`both`,`horizontal`,`vertical`]},columnSizes:{control:`object`}}},p={args:{width:`full`,captionPlain:`(Default) Full`,data:c},render:e=>(0,u.jsxs)(`div`,{style:{inlineSize:`300px`,display:`flex`,flexDirection:`column`},children:[(0,u.jsx)(i,{semantic:`informational`,size:`small`,icon:`none`,children:`(Default) Full`}),(0,u.jsx)(o,{...e})]})},m={args:{width:`auto`,captionPlain:`Auto`,data:c},render:e=>(0,u.jsxs)(`div`,{style:{inlineSize:`300px`,display:`flex`,flexDirection:`column`},children:[(0,u.jsx)(i,{semantic:`informational`,size:`small`,icon:`none`,children:`Auto`}),(0,u.jsx)(o,{...e})]})},h=[`DefaultFull`,`Auto`],p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    "width": "full",
    "captionPlain": "(Default) Full",
    "data": defaultTable
  },
  render: (properties: any) => <div style={{
    inlineSize: '300px',
    display: 'flex',
    flexDirection: 'column'
  }}><DBInfotext semantic="informational" size="small" icon="none">
                    (Default) Full
                </DBInfotext><DBTable {...properties} /></div>
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    "width": "auto",
    "captionPlain": "Auto",
    "data": defaultTable
  },
  render: (properties: any) => <div style={{
    inlineSize: '300px',
    display: 'flex',
    flexDirection: 'column'
  }}><DBInfotext semantic="informational" size="small" icon="none">
                    Auto
                </DBInfotext><DBTable {...properties} /></div>
}`,...m.parameters?.docs?.source}}}})))()}export{l as i,p as n,g as r,m as t};