import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{l as n,o as r}from"./iframe-B4vbRiLP.js";import{i,n as a,t as o}from"./apply-web-component-args-nLpIKx2m.js";var s=t({Checked:()=>d,Unchecked:()=>u,__namedExportsOrder:()=>f,default:()=>l}),c,l,u,d,f;function p(){return(p=e((()=>{r(),o(),{fn:c}=__STORYBOOK_MODULE_TEST__,l={title:`Components/DBCustomButton/Checkbox`,component:`db-custom-button`,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{variant:{control:`select`,options:[`outlined`,`brand`,`ghost`,`filled`]},noText:{control:`boolean`},wrap:{control:`boolean`},showIcon:{control:`boolean`},showIconLeading:{control:`boolean`},showIconTrailing:{control:`boolean`},width:{control:`select`,options:[`full`,`auto`]},size:{control:`select`,options:[`small`,`medium`]},id:{control:`text`},autofocus:{control:`boolean`}}},u={args:{},render:({children:e,...t})=>n`<db-custom-button ${a(t)}>${i(`<label for="checkbox01"><input type="checkbox" id="checkbox01" />Checkbox</label>`)}</db-custom-button>`},d={args:{},render:({children:e,...t})=>n`<db-custom-button ${a(t)}>${i(`<label for="checkbox02"><input type="checkbox" id="checkbox02" checked />Checkbox</label>`)}</db-custom-button>`},f=[`Unchecked`,`Checked`],u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {},
  render: ({
    children,
    ...args
  }: any) => html\`<db-custom-button \${spreadArgs(args)}>\${unsafeHTML(\`<label for="checkbox01"><input type="checkbox" id="checkbox01" />Checkbox</label>\`)}</db-custom-button>\`
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {},
  render: ({
    children,
    ...args
  }: any) => html\`<db-custom-button \${spreadArgs(args)}>\${unsafeHTML(\`<label for="checkbox02"><input type="checkbox" id="checkbox02" checked />Checkbox</label>\`)}</db-custom-button>\`
}`,...d.parameters?.docs?.source}}}})))()}export{p as i,u as n,s as r,d as t};