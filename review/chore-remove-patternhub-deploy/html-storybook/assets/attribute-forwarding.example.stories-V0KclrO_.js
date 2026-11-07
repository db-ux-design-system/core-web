import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{t as n}from"./jsx-runtime-MKhVqBIO.js";import{n as r,t as i}from"./custom-heading-CyIA4gG_.js";import{n as a,t as o}from"./heading-h2-qq-qvRT8.js";var s=t({NativeIDclassARIAdataandstyle:()=>d,WrapperIDclassdataandstyle:()=>f,__namedExportsOrder:()=>p,default:()=>u}),c,l,u,d,f,p;function m(){return(m=e((()=>{r(),a(),c=n(),{fn:l}=__STORYBOOK_MODULE_TEST__,u={title:`Components/DBHeading/Forwarded heading attributes`,component:o,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{visualSize:{control:`select`,options:[`h1`,`h2`,`h3`,`h4`,`h5`,`h6`,`p-small`,`p-medium`,`p-large`]},fontWeight:{control:`select`,options:[`black`,`light`]},children:{control:`text`},className:{control:`text`},id:{control:`text`}}},d={args:{id:`forwarded-heading`,class:`forwarded-heading-class`,"aria-label":`ID, class, ARIA, data and style forwarded to h2`,"data-example":`heading`,style:{textTransform:`uppercase`},children:`ID, class, ARIA, data and style forwarded to h2`},render:e=>(0,c.jsx)(o,{...e})},f={args:{id:`forwarded-custom-heading`,class:`forwarded-custom-heading-class`,"data-example":`custom-heading`,style:{textTransform:`uppercase`},children:(0,c.jsx)(`h2`,{children:`ID, class, data and style on the wrapper`})},render:e=>(0,c.jsx)(i,{...e})},p=[`NativeIDclassARIAdataandstyle`,`WrapperIDclassdataandstyle`],d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    "id": "forwarded-heading",
    "class": "forwarded-heading-class",
    "aria-label": "ID, class, ARIA, data and style forwarded to h2",
    "data-example": "heading",
    "style": {
      textTransform: 'uppercase'
    },
    "children": "ID, class, ARIA, data and style forwarded to h2"
  },
  render: (properties: any) => <DBHeadingH2 {...properties} />
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    "id": "forwarded-custom-heading",
    "class": "forwarded-custom-heading-class",
    "data-example": "custom-heading",
    "style": {
      textTransform: 'uppercase'
    },
    "children": <h2>ID, class, data and style on the wrapper</h2>
  },
  render: (properties: any) => <DBCustomHeading {...properties} />
}`,...f.parameters?.docs?.source}}}})))()}export{m as i,f as n,s as r,d as t};