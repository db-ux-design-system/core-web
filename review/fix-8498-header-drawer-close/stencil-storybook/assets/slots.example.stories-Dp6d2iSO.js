import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{l as t,o as n}from"./iframe-CKiHflev.js";import{i as r,n as i,t as a}from"./apply-web-component-args-Bz7XFV2u.js";var o,s,c,l,u;function d(){return(d=e((()=>{n(),a(),{fn:o}=__STORYBOOK_MODULE_TEST__,s={title:`Components/DBCustomHeading/Start and end slot`,component:`db-custom-heading`,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{visualSize:{control:`select`,options:[`h1`,`h2`,`h3`,`h4`,`h5`,`h6`,`p-small`,`p-medium`,`p-large`]},fontWeight:{control:`select`,options:[`black`,`light`]},children:{control:`text`},className:{control:`text`},id:{control:`text`}}},c={args:{},render:({children:e,...n})=>t`<db-custom-heading ${i(n)}>${r(`<db-badge slot="endSlot" semantic="critical" emphasis="strong">3</db-badge><h2>Current disruptions</h2>`)}</db-custom-heading>`},l={args:{},render:({children:e,...n})=>t`<db-custom-heading ${i(n)}>${r(`<db-icon slot="startSlot" icon="x_placeholder"></db-icon><db-custom-button slot="endSlot" variant="ghost" icon="more_vertical" no-text><button type="button">More options</button></db-custom-button><h2>Installation</h2>`)}</db-custom-heading>`},u=[`Endslotwithabadge`,`Bothslotswithanaction`],c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {},
  render: ({
    children,
    ...args
  }: any) => html\`<db-custom-heading \${spreadArgs(args)}>\${unsafeHTML(\`<db-badge slot="endSlot" semantic="critical" emphasis="strong">3</db-badge><h2>Current disruptions</h2>\`)}</db-custom-heading>\`
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {},
  render: ({
    children,
    ...args
  }: any) => html\`<db-custom-heading \${spreadArgs(args)}>\${unsafeHTML(\`<db-icon slot="startSlot" icon="x_placeholder"></db-icon><db-custom-button slot="endSlot" variant="ghost" icon="more_vertical" no-text><button type="button">More options</button></db-custom-button><h2>Installation</h2>\`)}</db-custom-heading>\`
}`,...l.parameters?.docs?.source}}}})))()}d();export{l as Bothslotswithanaction,c as Endslotwithabadge,u as __namedExportsOrder,s as default};