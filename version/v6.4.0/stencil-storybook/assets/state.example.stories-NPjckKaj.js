import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{l as n,o as r}from"./iframe-BYLdompv.js";import{i,n as a,t as o}from"./apply-web-component-args-CTUelvRL.js";var s=t({ActiveBar:()=>h,ActiveCircularhorizontal:()=>p,ActiveCircularvertical:()=>m,CriticalBar:()=>x,CriticalCircularhorizontal:()=>y,CriticalCircularvertical:()=>b,InactiveBar:()=>f,InactiveCircularhorizontal:()=>u,InactiveCircularvertical:()=>d,SuccessfulBar:()=>v,SuccessfulCircularhorizontal:()=>g,SuccessfulCircularvertical:()=>_,__namedExportsOrder:()=>S,default:()=>l}),c,l,u,d,f,p,m,h,g,_,v,y,b,x,S;function C(){return(C=e((()=>{r(),o(),{fn:c}=__STORYBOOK_MODULE_TEST__,l={title:`Components/DBLoadingIndicator/State`,component:`db-loading-indicator`,parameters:{layout:`centered`},tags:[`autodocs`],args:{onTimeout:c()},argTypes:{variant:{control:`select`,options:[`bar`,`circular`]},orientation:{control:`select`,options:[`horizontal`,`vertical`]},size:{control:`select`,options:[`small`,`medium`,`large`]},state:{control:`select`,options:[`inactive`,`active`,`successful`,`critical`]},indeterminate:{control:`boolean`},value:{control:`number`},max:{control:`number`},showLabel:{control:`boolean`},showProgressText:{control:`boolean`},overlay:{control:`boolean`},delay:{control:`select`,options:[`none`,`slow`,`fast`]},onTimeout:{action:`onTimeout`}}},u={args:{state:`inactive`,variant:`circular`,orientation:`horizontal`,progressText:`42 of 100`},render:({children:e,...t})=>n`<db-loading-indicator ${a(t)}>${i(`Circular horizontal`)}</db-loading-indicator>`},d={args:{state:`inactive`,variant:`circular`,orientation:`vertical`,progressText:`42%`},render:({children:e,...t})=>n`<db-loading-indicator ${a(t)}>${i(`Circular vertical`)}</db-loading-indicator>`},f={args:{state:`inactive`,variant:`bar`,progressText:`42 of 100`},render:({children:e,...t})=>n`<db-loading-indicator ${a(t)}>${i(`Bar`)}</db-loading-indicator>`},p={args:{state:`active`,variant:`circular`,orientation:`horizontal`,progressText:`42 of 100`},render:({children:e,...t})=>n`<db-loading-indicator ${a(t)}>${i(`Circular horizontal`)}</db-loading-indicator>`},m={args:{state:`active`,variant:`circular`,orientation:`vertical`,progressText:`42%`},render:({children:e,...t})=>n`<db-loading-indicator ${a(t)}>${i(`Circular vertical`)}</db-loading-indicator>`},h={args:{state:`active`,variant:`bar`,progressText:`42 of 100`},render:({children:e,...t})=>n`<db-loading-indicator ${a(t)}>${i(`Bar`)}</db-loading-indicator>`},g={args:{state:`successful`,variant:`circular`,orientation:`horizontal`,progressText:`100 of 100`,propOverrides:{progress:{ariaLabel:`Success`}}},render:({children:e,...t})=>n`<db-loading-indicator ${a(t)}>${i(`Circular horizontal`)}</db-loading-indicator>`},_={args:{state:`successful`,variant:`circular`,orientation:`vertical`,progressText:`100%`,propOverrides:{progress:{ariaLabel:`Success`}}},render:({children:e,...t})=>n`<db-loading-indicator ${a(t)}>${i(`Circular vertical`)}</db-loading-indicator>`},v={args:{state:`successful`,variant:`bar`,progressText:`100 of 100`,propOverrides:{progress:{ariaLabel:`Success`}}},render:({children:e,...t})=>n`<db-loading-indicator ${a(t)}>${i(`Bar`)}</db-loading-indicator>`},y={args:{state:`critical`,variant:`circular`,orientation:`horizontal`,progressText:`100 of 100`,propOverrides:{progress:{ariaLabel:`Error`}}},render:({children:e,...t})=>n`<db-loading-indicator ${a(t)}>${i(`Circular horizontal`)}</db-loading-indicator>`},b={args:{state:`critical`,variant:`circular`,orientation:`vertical`,progressText:`100%`,propOverrides:{progress:{ariaLabel:`Error`}}},render:({children:e,...t})=>n`<db-loading-indicator ${a(t)}>${i(`Circular vertical`)}</db-loading-indicator>`},x={args:{state:`critical`,variant:`bar`,progressText:`100 of 100`,propOverrides:{progress:{ariaLabel:`Error`}}},render:({children:e,...t})=>n`<db-loading-indicator ${a(t)}>${i(`Bar`)}</db-loading-indicator>`},S=[`InactiveCircularhorizontal`,`InactiveCircularvertical`,`InactiveBar`,`ActiveCircularhorizontal`,`ActiveCircularvertical`,`ActiveBar`,`SuccessfulCircularhorizontal`,`SuccessfulCircularvertical`,`SuccessfulBar`,`CriticalCircularhorizontal`,`CriticalCircularvertical`,`CriticalBar`],u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    "state": "inactive",
    "variant": "circular",
    "orientation": "horizontal",
    "progressText": "42 of 100"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-loading-indicator \${spreadArgs(args)}>\${unsafeHTML(\`Circular horizontal\`)}</db-loading-indicator>\`
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    "state": "inactive",
    "variant": "circular",
    "orientation": "vertical",
    "progressText": "42%"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-loading-indicator \${spreadArgs(args)}>\${unsafeHTML(\`Circular vertical\`)}</db-loading-indicator>\`
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    "state": "inactive",
    "variant": "bar",
    "progressText": "42 of 100"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-loading-indicator \${spreadArgs(args)}>\${unsafeHTML(\`Bar\`)}</db-loading-indicator>\`
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    "state": "active",
    "variant": "circular",
    "orientation": "horizontal",
    "progressText": "42 of 100"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-loading-indicator \${spreadArgs(args)}>\${unsafeHTML(\`Circular horizontal\`)}</db-loading-indicator>\`
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    "state": "active",
    "variant": "circular",
    "orientation": "vertical",
    "progressText": "42%"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-loading-indicator \${spreadArgs(args)}>\${unsafeHTML(\`Circular vertical\`)}</db-loading-indicator>\`
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    "state": "active",
    "variant": "bar",
    "progressText": "42 of 100"
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-loading-indicator \${spreadArgs(args)}>\${unsafeHTML(\`Bar\`)}</db-loading-indicator>\`
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    "state": "successful",
    "variant": "circular",
    "orientation": "horizontal",
    "progressText": "100 of 100",
    "propOverrides": {
      progress: {
        ariaLabel: 'Success'
      }
    }
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-loading-indicator \${spreadArgs(args)}>\${unsafeHTML(\`Circular horizontal\`)}</db-loading-indicator>\`
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    "state": "successful",
    "variant": "circular",
    "orientation": "vertical",
    "progressText": "100%",
    "propOverrides": {
      progress: {
        ariaLabel: 'Success'
      }
    }
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-loading-indicator \${spreadArgs(args)}>\${unsafeHTML(\`Circular vertical\`)}</db-loading-indicator>\`
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    "state": "successful",
    "variant": "bar",
    "progressText": "100 of 100",
    "propOverrides": {
      progress: {
        ariaLabel: 'Success'
      }
    }
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-loading-indicator \${spreadArgs(args)}>\${unsafeHTML(\`Bar\`)}</db-loading-indicator>\`
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    "state": "critical",
    "variant": "circular",
    "orientation": "horizontal",
    "progressText": "100 of 100",
    "propOverrides": {
      progress: {
        ariaLabel: 'Error'
      }
    }
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-loading-indicator \${spreadArgs(args)}>\${unsafeHTML(\`Circular horizontal\`)}</db-loading-indicator>\`
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    "state": "critical",
    "variant": "circular",
    "orientation": "vertical",
    "progressText": "100%",
    "propOverrides": {
      progress: {
        ariaLabel: 'Error'
      }
    }
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-loading-indicator \${spreadArgs(args)}>\${unsafeHTML(\`Circular vertical\`)}</db-loading-indicator>\`
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    "state": "critical",
    "variant": "bar",
    "progressText": "100 of 100",
    "propOverrides": {
      progress: {
        ariaLabel: 'Error'
      }
    }
  },
  render: ({
    children,
    ...args
  }: any) => html\`<db-loading-indicator \${spreadArgs(args)}>\${unsafeHTML(\`Bar\`)}</db-loading-indicator>\`
}`,...x.parameters?.docs?.source}}}})))()}export{y as a,u as c,g as d,_ as f,x as i,d as l,s as m,p as n,b as o,C as p,m as r,f as s,h as t,v as u};