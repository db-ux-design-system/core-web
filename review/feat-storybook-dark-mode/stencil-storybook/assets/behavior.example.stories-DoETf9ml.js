import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{l as n,o as r}from"./iframe-CR0u9Pnn.js";import{i,n as a,t as o}from"./apply-web-component-args-eq_daaBH.js";var s=t({DefaultStatic:()=>u,InteractiveButton:()=>f,InteractiveCheckbox:()=>m,InteractiveLink:()=>p,InteractiveRadio:()=>h,InteractiveRadio2:()=>g,Removable:()=>d,__namedExportsOrder:()=>_,default:()=>l}),c,l,u,d,f,p,m,h,g,_;function v(){return(v=e((()=>{r(),o(),{fn:c}=__STORYBOOK_MODULE_TEST__,l={title:`Components/DBTag/Behavior`,component:`db-tag`,parameters:{layout:`centered`},tags:[`autodocs`],args:{onRemove:c()},argTypes:{emphasis:{control:`select`,options:[`weak`,`strong`]},semantic:{control:`select`,options:[`adaptive`,`neutral`,`critical`,`informational`,`warning`,`successful`]},behavior:{control:`select`,options:[`static`,`removable`]},showIcon:{control:`boolean`},noText:{control:`boolean`},content:{control:`text`},showCheckState:{control:`boolean`},overflow:{control:`boolean`},removeButton:{control:`text`},text:{control:`text`},value:{control:`text`},id:{control:`text`},autofocus:{control:`boolean`},onRemove:{action:`onRemove`}}},u={args:{},render:({children:e,...t})=>n`<db-tag ${a(t)}>${i(`(Default) Static`)}</db-tag>`},d={args:{behavior:`removable`},render:({children:e,...t})=>n`<db-tag ${a(t)}>${i(`Removable`)}</db-tag>`},f={args:{},render:({children:e,...t})=>n`<db-tag ${a(t)}>${i(`<button>Interactive (Button)</button>`)}</db-tag>`},p={args:{},render:({children:e,...t})=>n`<db-tag ${a(t)}>${i(`<a href="#">Interactive (Link)</a>`)}</db-tag>`},m={args:{},render:({children:e,...t})=>n`<db-tag ${a(t)}>${i(`<label><input type="checkbox" />Interactive (Checkbox)</label>`)}</db-tag>`},h={args:{},render:({children:e,...t})=>n`<db-tag ${a(t)}>${i(`<label><input type="radio" name="radio01" />Interactive (Radio)</label>`)}</db-tag>`},g={args:{},render:({children:e,...t})=>n`<db-tag ${a(t)}>${i(`<label><input type="radio" name="radio01" />Interactive Radio 2</label>`)}</db-tag>`},_=[`DefaultStatic`,`Removable`,`InteractiveButton`,`InteractiveLink`,`InteractiveCheckbox`,`InteractiveRadio`,`InteractiveRadio2`],u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {},
  render: ({
    children,
    ...args
  }: any) => html\`<db-tag \${spreadArgs(args)}>\${unsafeHTML(\`(Default) Static\`)}</db-tag>\`
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    "behavior": "removable"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-tag \${spreadArgs(args)}>\${unsafeHTML(\`Removable\`)}</db-tag>\`
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {},
  render: ({
    children,
    ...args
  }: any) => html\`<db-tag \${spreadArgs(args)}>\${unsafeHTML(\`<button>Interactive (Button)</button>\`)}</db-tag>\`
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {},
  render: ({
    children,
    ...args
  }: any) => html\`<db-tag \${spreadArgs(args)}>\${unsafeHTML(\`<a href="#">Interactive (Link)</a>\`)}</db-tag>\`
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {},
  render: ({
    children,
    ...args
  }: any) => html\`<db-tag \${spreadArgs(args)}>\${unsafeHTML(\`<label><input type="checkbox" />Interactive (Checkbox)</label>\`)}</db-tag>\`
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {},
  render: ({
    children,
    ...args
  }: any) => html\`<db-tag \${spreadArgs(args)}>\${unsafeHTML(\`<label><input type="radio" name="radio01" />Interactive (Radio)</label>\`)}</db-tag>\`
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {},
  render: ({
    children,
    ...args
  }: any) => html\`<db-tag \${spreadArgs(args)}>\${unsafeHTML(\`<label><input type="radio" name="radio01" />Interactive Radio 2</label>\`)}</db-tag>\`
}`,...g.parameters?.docs?.source}}}})))()}export{h as a,s as c,p as i,v as l,f as n,g as o,m as r,d as s,u as t};