import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{l as t,o as n}from"./iframe-B9kWor2y.js";import{i as r,n as i,t as a}from"./apply-web-component-args-B1PNRnpa.js";var o,s,c,l,u,d,f,p,m,h;function g(){return(g=e((()=>{n(),a(),{fn:o}=__STORYBOOK_MODULE_TEST__,s={title:`Components/DBTag/Behavior`,component:`db-tag`,parameters:{layout:`centered`},tags:[`autodocs`],args:{onRemove:o()},argTypes:{emphasis:{control:`select`,options:[`weak`,`strong`]},semantic:{control:`select`,options:[`adaptive`,`neutral`,`critical`,`informational`,`warning`,`successful`]},behavior:{control:`select`,options:[`static`,`removable`]},showIcon:{control:`boolean`},noText:{control:`boolean`},content:{control:`text`},showCheckState:{control:`boolean`},overflow:{control:`boolean`},removeButton:{control:`text`},text:{control:`text`},value:{control:`text`},id:{control:`text`},autofocus:{control:`boolean`},onRemove:{action:`onRemove`}}},c={args:{},render:({children:e,...n})=>t`<db-tag ${i(n)}>${r(`(Default) Static`)}</db-tag>`},l={args:{behavior:`removable`},render:({children:e,...n})=>t`<db-tag ${i(n)}>${r(`Removable`)}</db-tag>`},u={args:{},render:({children:e,...n})=>t`<db-tag ${i(n)}>${r(`<button>Interactive (Button)</button>`)}</db-tag>`},d={args:{},render:({children:e,...n})=>t`<db-tag ${i(n)}>${r(`<a href="#">Interactive (Link)</a>`)}</db-tag>`},f={args:{},render:({children:e,...n})=>t`<db-tag ${i(n)}>${r(`<label><input type="checkbox" />Interactive (Checkbox)</label>`)}</db-tag>`},p={args:{},render:({children:e,...n})=>t`<db-tag ${i(n)}>${r(`<label><input type="radio" name="radio01" />Interactive (Radio)</label>`)}</db-tag>`},m={args:{},render:({children:e,...n})=>t`<db-tag ${i(n)}>${r(`<label><input type="radio" name="radio01" />Interactive Radio 2</label>`)}</db-tag>`},h=[`DefaultStatic`,`Removable`,`InteractiveButton`,`InteractiveLink`,`InteractiveCheckbox`,`InteractiveRadio`,`InteractiveRadio2`],c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {},
  render: ({
    children,
    ...args
  }: any) => html\`<db-tag \${spreadArgs(args)}>\${unsafeHTML(\`(Default) Static\`)}</db-tag>\`
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "behavior": "removable"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-tag \${spreadArgs(args)}>\${unsafeHTML(\`Removable\`)}</db-tag>\`
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {},
  render: ({
    children,
    ...args
  }: any) => html\`<db-tag \${spreadArgs(args)}>\${unsafeHTML(\`<button>Interactive (Button)</button>\`)}</db-tag>\`
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {},
  render: ({
    children,
    ...args
  }: any) => html\`<db-tag \${spreadArgs(args)}>\${unsafeHTML(\`<a href="#">Interactive (Link)</a>\`)}</db-tag>\`
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {},
  render: ({
    children,
    ...args
  }: any) => html\`<db-tag \${spreadArgs(args)}>\${unsafeHTML(\`<label><input type="checkbox" />Interactive (Checkbox)</label>\`)}</db-tag>\`
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {},
  render: ({
    children,
    ...args
  }: any) => html\`<db-tag \${spreadArgs(args)}>\${unsafeHTML(\`<label><input type="radio" name="radio01" />Interactive (Radio)</label>\`)}</db-tag>\`
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {},
  render: ({
    children,
    ...args
  }: any) => html\`<db-tag \${spreadArgs(args)}>\${unsafeHTML(\`<label><input type="radio" name="radio01" />Interactive Radio 2</label>\`)}</db-tag>\`
}`,...m.parameters?.docs?.source}}}})))()}g();export{c as DefaultStatic,u as InteractiveButton,f as InteractiveCheckbox,d as InteractiveLink,p as InteractiveRadio,m as InteractiveRadio2,l as Removable,h as __namedExportsOrder,s as default};