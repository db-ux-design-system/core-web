import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{l as t,o as n}from"./iframe-B9kWor2y.js";import{i as r,n as i,t as a}from"./apply-web-component-args-B1PNRnpa.js";var o,s,c,l,u;function d(){return(d=e((()=>{n(),a(),{fn:o}=__STORYBOOK_MODULE_TEST__,s={title:`Components/DBTag/Show Check State`,component:`db-tag`,parameters:{layout:`centered`},tags:[`autodocs`],args:{onRemove:o()},argTypes:{emphasis:{control:`select`,options:[`weak`,`strong`]},semantic:{control:`select`,options:[`adaptive`,`neutral`,`critical`,`informational`,`warning`,`successful`]},behavior:{control:`select`,options:[`static`,`removable`]},showIcon:{control:`boolean`},noText:{control:`boolean`},content:{control:`text`},showCheckState:{control:`boolean`},overflow:{control:`boolean`},removeButton:{control:`text`},text:{control:`text`},value:{control:`text`},id:{control:`text`},autofocus:{control:`boolean`},onRemove:{action:`onRemove`}}},c={args:{showCheckState:!0},render:({children:e,...n})=>t`<db-tag ${i(n)}>${r(`<label><input type="checkbox" />(Default) True</label>`)}</db-tag>`},l={args:{showCheckState:!1},render:({children:e,...n})=>t`<db-tag ${i(n)}>${r(`<label><input type="checkbox" />False</label>`)}</db-tag>`},u=[`DefaultTrue`,`False`],c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    "showCheckState": true
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-tag \${spreadArgs(args)}>\${unsafeHTML(\`<label><input type="checkbox" />(Default) True</label>\`)}</db-tag>\`
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "showCheckState": false
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-tag \${spreadArgs(args)}>\${unsafeHTML(\`<label><input type="checkbox" />False</label>\`)}</db-tag>\`
}`,...l.parameters?.docs?.source}}}})))()}d();export{c as DefaultTrue,l as False,u as __namedExportsOrder,s as default};