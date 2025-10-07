import{_ as a}from"./Header-Dq6r1E3W.js";import"./iframe-CPoGl5Ok.js";import"./preload-helper-DJNAMIdq.js";import"./Button-pHgHklXQ.js";const{fn:o}=__STORYBOOK_MODULE_TEST__,u={title:"Example/Header",component:a,render:s=>({components:{MyHeader:a},setup(){return{args:s}},template:'<my-header :user="args.user" />'}),parameters:{layout:"fullscreen"},args:{onLogin:o(),onLogout:o(),onCreateAccount:o()},tags:["autodocs"]},e={args:{user:{name:"Jane Doe"}}},r={args:{user:null}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    user: {
      name: 'Jane Doe'
    }
  }
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    user: null
  }
}`,...r.parameters?.docs?.source}}};const p=["LoggedIn","LoggedOut"];export{e as LoggedIn,r as LoggedOut,p as __namedExportsOrder,u as default};
