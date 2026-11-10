import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{l as n,o as r}from"./iframe-BEdmdqT_.js";import{i,n as a,t as o}from"./apply-web-component-args-CDzlxrdt.js";var s=t({Bothslotswithanaction:()=>d,Endslotwithabadge:()=>u,__namedExportsOrder:()=>f,default:()=>l}),c,l,u,d,f;function p(){return(p=e((()=>{r(),o(),{fn:c}=__STORYBOOK_MODULE_TEST__,l={title:`Components/DBCustomHeading/Start and end slot`,component:`db-custom-heading`,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{visualSize:{control:`select`,options:[`h1`,`h2`,`h3`,`h4`,`h5`,`h6`,`p-small`,`p-medium`,`p-large`]},fontWeight:{control:`select`,options:[`black`,`light`]},children:{control:`text`},className:{control:`text`},id:{control:`text`}}},u={args:{},render:({children:e,...t})=>n`<db-custom-heading ${a(t)}>${i(`<db-badge slot="endSlot" semantic="critical" emphasis="strong">3</db-badge><h2>Current disruptions</h2>`)}</db-custom-heading>`},d={args:{},render:({children:e,...t})=>n`<db-custom-heading ${a(t)}>${i(`<db-icon slot="startSlot" icon="x_placeholder"></db-icon><db-custom-button slot="endSlot" variant="ghost" icon="more_vertical" no-text><button type="button">More options</button></db-custom-button><h2>Installation</h2>`)}</db-custom-heading>`},f=[`Endslotwithabadge`,`Bothslotswithanaction`],u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {},
  render: ({
    children,
    ...args
  }: any) => html\`<db-custom-heading \${spreadArgs(args)}>\${unsafeHTML(\`<db-badge slot="endSlot" semantic="critical" emphasis="strong">3</db-badge><h2>Current disruptions</h2>\`)}</db-custom-heading>\`
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {},
  render: ({
    children,
    ...args
  }: any) => html\`<db-custom-heading \${spreadArgs(args)}>\${unsafeHTML(\`<db-icon slot="startSlot" icon="x_placeholder"></db-icon><db-custom-button slot="endSlot" variant="ghost" icon="more_vertical" no-text><button type="button">More options</button></db-custom-button><h2>Installation</h2>\`)}</db-custom-heading>\`
}`,...d.parameters?.docs?.source}}}})))()}export{s as i,u as n,p as r,d as t};