import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{t as n}from"./jsx-runtime-MKhVqBIO.js";import{n as r,t as i}from"./badge-DjgFuiB1.js";import{n as a,t as o}from"./custom-button-CPjPvBd9.js";import{n as s,t as c}from"./custom-heading-Ba121qaQ.js";import{n as l,t as u}from"./icon-CWm84KeR.js";var d=t({Bothslotswithanaction:()=>g,Endslotwithabadge:()=>h,__namedExportsOrder:()=>_,default:()=>m}),f,p,m,h,g,_;function v(){return(v=e((()=>{r(),a(),l(),s(),f=n(),{fn:p}=__STORYBOOK_MODULE_TEST__,m={title:`Components/DBCustomHeading/Start and end slot`,component:c,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{visualSize:{control:`select`,options:[`h1`,`h2`,`h3`,`h4`,`h5`,`h6`,`p-small`,`p-medium`,`p-large`]},fontWeight:{control:`select`,options:[`black`,`light`]},children:{control:`text`},className:{control:`text`},id:{control:`text`}}},h={args:{endSlot:(0,f.jsx)(i,{semantic:`critical`,emphasis:`strong`,children:`3`}),children:(0,f.jsx)(`h2`,{children:`Current disruptions`})},render:e=>(0,f.jsx)(c,{...e})},g={args:{startSlot:(0,f.jsx)(u,{icon:`x_placeholder`}),endSlot:(0,f.jsx)(o,{variant:`ghost`,icon:`more_vertical`,noText:!0,children:(0,f.jsx)(`button`,{type:`button`,children:`More options`})}),children:(0,f.jsx)(`h2`,{children:`Installation`})},render:e=>(0,f.jsx)(c,{...e})},_=[`Endslotwithabadge`,`Bothslotswithanaction`],h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    "endSlot": <DBBadge semantic="critical" emphasis="strong">
                        3
                    </DBBadge>,
    "children": <h2>Current disruptions</h2>
  },
  render: (properties: any) => <DBCustomHeading {...properties} />
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    "startSlot": <DBIcon icon="x_placeholder" />,
    "endSlot": <DBCustomButton variant="ghost" icon="more_vertical" noText={true}>
                        <button type="button">More options</button>
                    </DBCustomButton>,
    "children": <h2>Installation</h2>
  },
  render: (properties: any) => <DBCustomHeading {...properties} />
}`,...g.parameters?.docs?.source}}}})))()}export{d as i,h as n,v as r,g as t};