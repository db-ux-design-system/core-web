import{j as e}from"./jsx-runtime-u17CrQMm.js";import{D as h,a as p,b as r,c as a,d as m,e as l}from"./table-DzrqdBoC.js";import{D as i}from"./infotext-DYs86XGF.js";import{D as t}from"./checkbox-BbMtrWnc.js";import{D as n}from"./tooltip-B6Gy-LPW.js";import{D as o}from"./button-CVoZfBO6.js";import{D as c}from"./link-Dooo2W-Q.js";import{D as s}from"./tag-BW9SYYdj.js";import{D}from"./input-7WTYMjL5.js";import"./index-cGbbigiG.js";import"./iframe-kMgWZl75.js";import"./preload-helper-BD8fvMO7.js";import"./constants-CD69XpC7.js";import"./form-components-B5fJjToM.js";import"./document-scroll-listener-BixpNV2P.js";import"./floating-components-BNmGdAgy.js";const{fn:A}=__STORYBOOK_MODULE_TEST__,S={title:"Components/DBTable/Complex",component:h,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{id:{control:"text"},caption:{control:"text"},captionPlain:{control:"text"},data:{control:"object"},divider:{control:"select",options:["none","both","horizontal","vertical"]},showCaption:{control:"boolean"},size:{control:"select",options:["x-small","small","medium","large"]},variant:{control:"select",options:["joined","zebra","floating"]},mobileVariant:{control:"select",options:["table","list"]},stickyHeader:{control:"select",options:["none","both","horizontal","vertical"]},columnSizes:{control:"object"}}},B={args:{captionPlain:"Joined, sortable columns are Link.",columnSizes:{0:"min-content",6:"min-content"},children:e.jsxs(e.Fragment,{children:[e.jsx(p,{children:e.jsxs(r,{children:[e.jsx(a,{scope:"col",children:e.jsxs(t,{name:"joined",showLabel:!1,children:["Check All",e.jsx(n,{placement:"top",children:"Check All"})]})}),e.jsx(a,{scope:"col",children:e.jsxs("div",{style:{display:"flex",gap:"var(--db-spacing-fixed-xs)"},children:["Link",e.jsxs(o,{size:"small",variant:"ghost",icon:"arrows_vertical",noText:!0,children:["Sort Link",e.jsx(n,{placement:"top",children:"Sort Link"})]})]})}),e.jsx(a,{scope:"col",children:"Tag"}),e.jsx(a,{scope:"col",children:"Infotext"}),e.jsx(a,{scope:"col",children:"Text"}),e.jsx(a,{scope:"col",children:"Input"}),e.jsx(a,{scope:"col",horizontalAlignment:"end",noText:!0,children:"Button"})]})}),e.jsxs(m,{children:[e.jsxs(r,{interactive:!0,children:[e.jsx(a,{scope:"row",children:e.jsx(t,{"data-table-row-action":"true",name:"joined",showLabel:!1,children:"Check Red"})}),e.jsx(l,{children:e.jsx(c,{href:"#",content:"external",referrerPolicy:"no-referrer",target:"_blank",children:"Red"})}),e.jsx(l,{children:e.jsx(s,{icon:"check",semantic:"informational",children:"Progress"})}),e.jsx(l,{children:e.jsx(i,{semantic:"critical",children:"15"})}),e.jsx(l,{children:"Red"}),e.jsx(l,{children:e.jsx(D,{label:"Red",placeholder:"Red",showLabel:!1,required:!0})}),e.jsx(l,{horizontalAlignment:"end",children:e.jsxs(o,{variant:"ghost",icon:"more_vertical",noText:!0,children:["More",e.jsx(n,{placement:"left",children:"More"})]})})]}),e.jsxs(r,{interactive:!0,children:[e.jsx(a,{scope:"row",children:e.jsx(t,{"data-table-row-action":"true",name:"joined",showLabel:!1,children:"Check Yellow"})}),e.jsx(l,{children:e.jsx(c,{href:"#",content:"external",referrerPolicy:"no-referrer",target:"_blank",children:"Yellow"})}),e.jsx(l,{children:e.jsx(s,{icon:"check",semantic:"warning",children:"Open"})}),e.jsx(l,{children:e.jsx(i,{semantic:"warning",children:"1"})}),e.jsx(l,{children:"Yellow"}),e.jsx(l,{children:e.jsx(D,{label:"Yellow",placeholder:"Yellow",showLabel:!1})}),e.jsx(l,{horizontalAlignment:"end",children:e.jsxs(o,{variant:"ghost",icon:"more_vertical",noText:!0,children:["More",e.jsx(n,{placement:"left",children:"More"})]})})]}),e.jsxs(r,{interactive:!0,children:[e.jsx(a,{scope:"row",children:e.jsx(t,{"data-table-row-action":"true",name:"joined",showLabel:!1,children:"Check Green"})}),e.jsx(l,{children:e.jsx(c,{href:"#",content:"external",referrerPolicy:"no-referrer",target:"_blank",children:"Green"})}),e.jsx(l,{children:e.jsx(s,{icon:"check",semantic:"successful",children:"Done"})}),e.jsx(l,{}),e.jsx(l,{children:"Green"}),e.jsx(l,{children:e.jsx(D,{label:"Green",placeholder:"Green",showLabel:!1})}),e.jsx(l,{horizontalAlignment:"end",children:e.jsxs(o,{variant:"ghost",icon:"more_vertical",noText:!0,children:["More",e.jsx(n,{placement:"left",children:"More"})]})})]})]})]})},render:d=>e.jsxs("div",{style:{maxInlineSize:"100%",inlineSize:"1000px",display:"flex",flexDirection:"column",alignItems:"center",gap:"var(--db-spacing-fixed-md)"},children:[e.jsx(i,{semantic:"informational",size:"small",icon:"none",children:"Joined"}),e.jsx(h,{...d})]})},b={args:{variant:"zebra",captionPlain:"Zebra, sortable columns are Link.",columnSizes:{0:"min-content",6:"min-content"},children:e.jsxs(e.Fragment,{children:[e.jsx(p,{children:e.jsxs(r,{children:[e.jsx(a,{scope:"col",children:e.jsxs(t,{name:"zebra",showLabel:!1,children:["Check All",e.jsx(n,{placement:"top",children:"Check All"})]})}),e.jsx(a,{scope:"col",children:e.jsxs("div",{style:{display:"flex",gap:"var(--db-spacing-fixed-xs)"},children:["Link",e.jsxs(o,{size:"small",variant:"ghost",icon:"arrows_vertical",noText:!0,children:["Sort Link",e.jsx(n,{placement:"top",children:"Sort Link"})]})]})}),e.jsx(a,{scope:"col",children:"Tag"}),e.jsx(a,{scope:"col",children:"Infotext"}),e.jsx(a,{scope:"col",children:"Text"}),e.jsx(a,{scope:"col",children:"Input"}),e.jsx(a,{scope:"col",horizontalAlignment:"end",noText:!0,children:"Button"})]})}),e.jsxs(m,{children:[e.jsxs(r,{interactive:!0,children:[e.jsx(a,{scope:"row",children:e.jsx(t,{"data-table-row-action":"true",name:"zebra",showLabel:!1,children:"Check Red"})}),e.jsx(l,{children:e.jsx(c,{href:"#",content:"external",referrerPolicy:"no-referrer",target:"_blank",children:"Red"})}),e.jsx(l,{children:e.jsx(s,{icon:"check",semantic:"informational",children:"Progress"})}),e.jsx(l,{children:e.jsx(i,{semantic:"critical",children:"15"})}),e.jsx(l,{children:"Red"}),e.jsx(l,{children:e.jsx(D,{label:"Red",placeholder:"Red",showLabel:!1,required:!0})}),e.jsx(l,{horizontalAlignment:"end",children:e.jsxs(o,{variant:"ghost",icon:"more_vertical",noText:!0,children:["More",e.jsx(n,{placement:"left",children:"More"})]})})]}),e.jsxs(r,{interactive:!0,children:[e.jsx(a,{scope:"row",children:e.jsx(t,{"data-table-row-action":"true",name:"zebra",showLabel:!1,children:"Check Yellow"})}),e.jsx(l,{children:e.jsx(c,{href:"#",content:"external",referrerPolicy:"no-referrer",target:"_blank",children:"Yellow"})}),e.jsx(l,{children:e.jsx(s,{icon:"check",semantic:"warning",children:"Open"})}),e.jsx(l,{children:e.jsx(i,{semantic:"warning",children:"1"})}),e.jsx(l,{children:"Yellow"}),e.jsx(l,{children:e.jsx(D,{label:"Yellow",placeholder:"Yellow",showLabel:!1})}),e.jsx(l,{horizontalAlignment:"end",children:e.jsxs(o,{variant:"ghost",icon:"more_vertical",noText:!0,children:["More",e.jsx(n,{placement:"left",children:"More"})]})})]}),e.jsxs(r,{interactive:!0,children:[e.jsx(a,{scope:"row",children:e.jsx(t,{"data-table-row-action":"true",name:"zebra",showLabel:!1,children:"Check Green"})}),e.jsx(l,{children:e.jsx(c,{href:"#",content:"external",referrerPolicy:"no-referrer",target:"_blank",children:"Green"})}),e.jsx(l,{children:e.jsx(s,{icon:"check",semantic:"successful",children:"Done"})}),e.jsx(l,{}),e.jsx(l,{children:"Green"}),e.jsx(l,{children:e.jsx(D,{label:"Green",placeholder:"Green",showLabel:!1})}),e.jsx(l,{horizontalAlignment:"end",children:e.jsxs(o,{variant:"ghost",icon:"more_vertical",noText:!0,children:["More",e.jsx(n,{placement:"left",children:"More"})]})})]})]})]})},render:d=>e.jsxs("div",{style:{maxInlineSize:"100%",inlineSize:"1000px",display:"flex",flexDirection:"column",alignItems:"center",gap:"var(--db-spacing-fixed-md)"},children:[e.jsx(i,{semantic:"informational",size:"small",icon:"none",children:"Zebra"}),e.jsx(h,{...d})]})},x={args:{variant:"floating",captionPlain:"Floating, sortable columns are Link.",columnSizes:{0:"min-content",6:"min-content"},children:e.jsxs(e.Fragment,{children:[e.jsx(p,{children:e.jsxs(r,{children:[e.jsx(a,{scope:"col",children:e.jsxs(t,{name:"floating",showLabel:!1,children:["Check All",e.jsx(n,{placement:"top",children:"Check All"})]})}),e.jsx(a,{scope:"col",children:e.jsxs("div",{style:{display:"flex",gap:"var(--db-spacing-fixed-xs)"},children:["Link",e.jsxs(o,{size:"small",variant:"ghost",icon:"arrows_vertical",noText:!0,children:["Sort Link",e.jsx(n,{placement:"top",children:"Sort Link"})]})]})}),e.jsx(a,{scope:"col",children:"Tag"}),e.jsx(a,{scope:"col",children:"Infotext"}),e.jsx(a,{scope:"col",children:"Text"}),e.jsx(a,{scope:"col",children:"Input"}),e.jsx(a,{scope:"col",horizontalAlignment:"end",noText:!0,children:"Button"})]})}),e.jsxs(m,{children:[e.jsxs(r,{interactive:!0,children:[e.jsx(a,{scope:"row",children:e.jsx(t,{"data-table-row-action":"true",name:"floating",showLabel:!1,children:"Check Red"})}),e.jsx(l,{children:e.jsx(c,{href:"#",content:"external",referrerPolicy:"no-referrer",target:"_blank",children:"Red"})}),e.jsx(l,{children:e.jsx(s,{icon:"check",semantic:"informational",children:"Progress"})}),e.jsx(l,{children:e.jsx(i,{semantic:"critical",children:"15"})}),e.jsx(l,{children:"Red"}),e.jsx(l,{children:e.jsx(D,{label:"Red",placeholder:"Red",showLabel:!1,required:!0})}),e.jsx(l,{horizontalAlignment:"end",children:e.jsxs(o,{variant:"ghost",icon:"more_vertical",noText:!0,children:["More",e.jsx(n,{placement:"left",children:"More"})]})})]}),e.jsxs(r,{interactive:!0,children:[e.jsx(a,{scope:"row",children:e.jsx(t,{"data-table-row-action":"true",name:"floating",showLabel:!1,children:"Check Yellow"})}),e.jsx(l,{children:e.jsx(c,{href:"#",content:"external",referrerPolicy:"no-referrer",target:"_blank",children:"Yellow"})}),e.jsx(l,{children:e.jsx(s,{icon:"check",semantic:"warning",children:"Open"})}),e.jsx(l,{children:e.jsx(i,{semantic:"warning",children:"1"})}),e.jsx(l,{children:"Yellow"}),e.jsx(l,{children:e.jsx(D,{label:"Yellow",placeholder:"Yellow",showLabel:!1})}),e.jsx(l,{horizontalAlignment:"end",children:e.jsxs(o,{variant:"ghost",icon:"more_vertical",noText:!0,children:["More",e.jsx(n,{placement:"left",children:"More"})]})})]}),e.jsxs(r,{interactive:!0,children:[e.jsx(a,{scope:"row",children:e.jsx(t,{"data-table-row-action":"true",name:"floating",showLabel:!1,children:"Check Green"})}),e.jsx(l,{children:e.jsx(c,{href:"#",content:"external",referrerPolicy:"no-referrer",target:"_blank",children:"Green"})}),e.jsx(l,{children:e.jsx(s,{icon:"check",semantic:"successful",children:"Done"})}),e.jsx(l,{}),e.jsx(l,{children:"Green"}),e.jsx(l,{children:e.jsx(D,{label:"Green",placeholder:"Green",showLabel:!1})}),e.jsx(l,{horizontalAlignment:"end",children:e.jsxs(o,{variant:"ghost",icon:"more_vertical",noText:!0,children:["More",e.jsx(n,{placement:"left",children:"More"})]})})]})]})]})},render:d=>e.jsxs("div",{style:{maxInlineSize:"100%",inlineSize:"1000px",display:"flex",flexDirection:"column",alignItems:"center",gap:"var(--db-spacing-fixed-md)"},children:[e.jsx(i,{semantic:"informational",size:"small",icon:"none",children:"Floating"}),e.jsx(h,{...d})]})},T={args:{variant:"floating",mobileVariant:"list",captionPlain:"Mobile variant: List, sortable columns are Link.",columnSizes:{0:"min-content",6:"min-content"},children:e.jsxs(e.Fragment,{children:[e.jsx(p,{children:e.jsxs(r,{children:[e.jsx(a,{scope:"col",children:e.jsxs(t,{name:"list",showLabel:!1,children:["Check All",e.jsx(n,{placement:"top",children:"Check All"})]})}),e.jsx(a,{scope:"col",children:e.jsxs("div",{style:{display:"flex",gap:"var(--db-spacing-fixed-xs)"},children:["Link",e.jsxs(o,{size:"small",variant:"ghost",icon:"arrows_vertical",noText:!0,children:["Sort Link",e.jsx(n,{placement:"top",children:"Sort Link"})]})]})}),e.jsx(a,{scope:"col",children:"Tag"}),e.jsx(a,{scope:"col",children:"Infotext"}),e.jsx(a,{scope:"col",children:"Text"}),e.jsx(a,{scope:"col",children:"Input"}),e.jsx(a,{scope:"col",horizontalAlignment:"end",noText:!0,children:"Button"})]})}),e.jsxs(m,{children:[e.jsxs(r,{interactive:!0,children:[e.jsx(a,{scope:"row","data-header":"Check",children:e.jsx(t,{"data-table-row-action":"true",name:"list",showLabel:!1,children:"Check Red"})}),e.jsx(l,{"data-header":"Link",children:e.jsx(c,{href:"#",content:"external",referrerPolicy:"no-referrer",target:"_blank",children:"Red"})}),e.jsx(l,{children:e.jsx(s,{icon:"check",semantic:"informational",children:"Progress"})}),e.jsx(l,{children:e.jsx(i,{semantic:"critical",children:"15"})}),e.jsx(l,{children:"Red"}),e.jsx(l,{children:e.jsx(D,{label:"Red",placeholder:"Red",showLabel:!1,required:!0})}),e.jsx(l,{horizontalAlignment:"end",children:e.jsxs(o,{variant:"ghost",icon:"more_vertical",noText:!0,children:["More",e.jsx(n,{placement:"left",children:"More"})]})})]}),e.jsxs(r,{interactive:!0,children:[e.jsx(a,{scope:"row","data-header":"Check",children:e.jsx(t,{"data-table-row-action":"true",name:"list",showLabel:!1,children:"Check Yellow"})}),e.jsx(l,{"data-header":"Link",children:e.jsx(c,{href:"#",content:"external",referrerPolicy:"no-referrer",target:"_blank",children:"Yellow"})}),e.jsx(l,{children:e.jsx(s,{icon:"check",semantic:"warning",children:"Open"})}),e.jsx(l,{children:e.jsx(i,{semantic:"warning",children:"1"})}),e.jsx(l,{children:"Yellow"}),e.jsx(l,{children:e.jsx(D,{label:"Yellow",placeholder:"Yellow",showLabel:!1})}),e.jsx(l,{horizontalAlignment:"end",children:e.jsxs(o,{variant:"ghost",icon:"more_vertical",noText:!0,children:["More",e.jsx(n,{placement:"left",children:"More"})]})})]}),e.jsxs(r,{interactive:!0,children:[e.jsx(a,{scope:"row","data-header":"Check",children:e.jsx(t,{"data-table-row-action":"true",name:"list",showLabel:!1,children:"Check Green"})}),e.jsx(l,{"data-header":"Link",children:e.jsx(c,{href:"#",content:"external",referrerPolicy:"no-referrer",target:"_blank",children:"Green"})}),e.jsx(l,{children:e.jsx(s,{icon:"check",semantic:"successful",children:"Done"})}),e.jsx(l,{}),e.jsx(l,{children:"Green"}),e.jsx(l,{children:e.jsx(D,{label:"Green",placeholder:"Green",showLabel:!1})}),e.jsx(l,{horizontalAlignment:"end",children:e.jsxs(o,{variant:"ghost",icon:"more_vertical",noText:!0,children:["More",e.jsx(n,{placement:"left",children:"More"})]})})]})]})]})},render:d=>e.jsxs("div",{style:{inlineSize:"300px",display:"flex",flexDirection:"column",alignItems:"center",gap:"var(--db-spacing-fixed-md)"},children:[e.jsx(i,{semantic:"informational",size:"small",icon:"none",children:"Mobile variant: List"}),e.jsx(h,{...d})]})};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  args: {
    "captionPlain": "Joined, sortable columns are Link.",
    "columnSizes": {
      0: 'min-content',
      6: 'min-content'
    },
    "children": <><DBTableHead><DBTableRow><DBTableHeaderCell scope="col"><DBCheckbox name="joined" showLabel={false}>
                                    Check All
                                    <DBTooltip placement="top">
                                        Check All
                                    </DBTooltip></DBCheckbox></DBTableHeaderCell><DBTableHeaderCell scope="col"><div style={{
              display: 'flex',
              gap: 'var(--db-spacing-fixed-xs)'
            }}>
                                    Link
                                    <DBButton size="small" variant="ghost" icon="arrows_vertical" noText>
                                        Sort Link
                                        <DBTooltip placement="top">
                                            Sort Link
                                        </DBTooltip></DBButton></div></DBTableHeaderCell><DBTableHeaderCell scope="col">
                                Tag
                            </DBTableHeaderCell><DBTableHeaderCell scope="col">
                                Infotext
                            </DBTableHeaderCell><DBTableHeaderCell scope="col">
                                Text
                            </DBTableHeaderCell><DBTableHeaderCell scope="col">
                                Input
                            </DBTableHeaderCell><DBTableHeaderCell scope="col" horizontalAlignment="end" noText>
                                Button
                            </DBTableHeaderCell></DBTableRow></DBTableHead><DBTableBody><DBTableRow interactive><DBTableHeaderCell scope="row"><DBCheckbox data-table-row-action="true" name="joined" showLabel={false}>
                                    Check Red
                                </DBCheckbox></DBTableHeaderCell><DBTableDataCell><DBLink href="#" content="external" referrerPolicy="no-referrer" target="_blank">
                                    Red
                                </DBLink></DBTableDataCell><DBTableDataCell><DBTag icon="check" semantic="informational">
                                    Progress
                                </DBTag></DBTableDataCell><DBTableDataCell><DBInfotext semantic="critical">15</DBInfotext></DBTableDataCell><DBTableDataCell>Red</DBTableDataCell><DBTableDataCell><DBInput label="Red" placeholder="Red" showLabel={false} required /></DBTableDataCell><DBTableDataCell horizontalAlignment="end"><DBButton variant="ghost" icon="more_vertical" noText>
                                    More
                                    <DBTooltip placement="left">More</DBTooltip></DBButton></DBTableDataCell></DBTableRow><DBTableRow interactive><DBTableHeaderCell scope="row"><DBCheckbox data-table-row-action="true" name="joined" showLabel={false}>
                                    Check Yellow
                                </DBCheckbox></DBTableHeaderCell><DBTableDataCell><DBLink href="#" content="external" referrerPolicy="no-referrer" target="_blank">
                                    Yellow
                                </DBLink></DBTableDataCell><DBTableDataCell><DBTag icon="check" semantic="warning">
                                    Open
                                </DBTag></DBTableDataCell><DBTableDataCell><DBInfotext semantic="warning">1</DBInfotext></DBTableDataCell><DBTableDataCell>Yellow</DBTableDataCell><DBTableDataCell><DBInput label="Yellow" placeholder="Yellow" showLabel={false} /></DBTableDataCell><DBTableDataCell horizontalAlignment="end"><DBButton variant="ghost" icon="more_vertical" noText>
                                    More
                                    <DBTooltip placement="left">More</DBTooltip></DBButton></DBTableDataCell></DBTableRow><DBTableRow interactive><DBTableHeaderCell scope="row"><DBCheckbox data-table-row-action="true" name="joined" showLabel={false}>
                                    Check Green
                                </DBCheckbox></DBTableHeaderCell><DBTableDataCell><DBLink href="#" content="external" referrerPolicy="no-referrer" target="_blank">
                                    Green
                                </DBLink></DBTableDataCell><DBTableDataCell><DBTag icon="check" semantic="successful">
                                    Done
                                </DBTag></DBTableDataCell><DBTableDataCell /><DBTableDataCell>Green</DBTableDataCell><DBTableDataCell><DBInput label="Green" placeholder="Green" showLabel={false} /></DBTableDataCell><DBTableDataCell horizontalAlignment="end"><DBButton variant="ghost" icon="more_vertical" noText>
                                    More
                                    <DBTooltip placement="left">More</DBTooltip></DBButton></DBTableDataCell></DBTableRow></DBTableBody></>
  },
  render: (properties: any) => <div style={{
    maxInlineSize: '100%',
    inlineSize: '1000px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 'var(--db-spacing-fixed-md)'
  }}><DBInfotext semantic="informational" size="small" icon="none">
                    Joined
                </DBInfotext><DBTable {...properties} /></div>
}`,...B.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    "variant": "zebra",
    "captionPlain": "Zebra, sortable columns are Link.",
    "columnSizes": {
      0: 'min-content',
      6: 'min-content'
    },
    "children": <><DBTableHead><DBTableRow><DBTableHeaderCell scope="col"><DBCheckbox name="zebra" showLabel={false}>
                                    Check All
                                    <DBTooltip placement="top">
                                        Check All
                                    </DBTooltip></DBCheckbox></DBTableHeaderCell><DBTableHeaderCell scope="col"><div style={{
              display: 'flex',
              gap: 'var(--db-spacing-fixed-xs)'
            }}>
                                    Link
                                    <DBButton size="small" variant="ghost" icon="arrows_vertical" noText>
                                        Sort Link
                                        <DBTooltip placement="top">
                                            Sort Link
                                        </DBTooltip></DBButton></div></DBTableHeaderCell><DBTableHeaderCell scope="col">
                                Tag
                            </DBTableHeaderCell><DBTableHeaderCell scope="col">
                                Infotext
                            </DBTableHeaderCell><DBTableHeaderCell scope="col">
                                Text
                            </DBTableHeaderCell><DBTableHeaderCell scope="col">
                                Input
                            </DBTableHeaderCell><DBTableHeaderCell scope="col" horizontalAlignment="end" noText>
                                Button
                            </DBTableHeaderCell></DBTableRow></DBTableHead><DBTableBody><DBTableRow interactive><DBTableHeaderCell scope="row"><DBCheckbox data-table-row-action="true" name="zebra" showLabel={false}>
                                    Check Red
                                </DBCheckbox></DBTableHeaderCell><DBTableDataCell><DBLink href="#" content="external" referrerPolicy="no-referrer" target="_blank">
                                    Red
                                </DBLink></DBTableDataCell><DBTableDataCell><DBTag icon="check" semantic="informational">
                                    Progress
                                </DBTag></DBTableDataCell><DBTableDataCell><DBInfotext semantic="critical">15</DBInfotext></DBTableDataCell><DBTableDataCell>Red</DBTableDataCell><DBTableDataCell><DBInput label="Red" placeholder="Red" showLabel={false} required /></DBTableDataCell><DBTableDataCell horizontalAlignment="end"><DBButton variant="ghost" icon="more_vertical" noText>
                                    More
                                    <DBTooltip placement="left">More</DBTooltip></DBButton></DBTableDataCell></DBTableRow><DBTableRow interactive><DBTableHeaderCell scope="row"><DBCheckbox data-table-row-action="true" name="zebra" showLabel={false}>
                                    Check Yellow
                                </DBCheckbox></DBTableHeaderCell><DBTableDataCell><DBLink href="#" content="external" referrerPolicy="no-referrer" target="_blank">
                                    Yellow
                                </DBLink></DBTableDataCell><DBTableDataCell><DBTag icon="check" semantic="warning">
                                    Open
                                </DBTag></DBTableDataCell><DBTableDataCell><DBInfotext semantic="warning">1</DBInfotext></DBTableDataCell><DBTableDataCell>Yellow</DBTableDataCell><DBTableDataCell><DBInput label="Yellow" placeholder="Yellow" showLabel={false} /></DBTableDataCell><DBTableDataCell horizontalAlignment="end"><DBButton variant="ghost" icon="more_vertical" noText>
                                    More
                                    <DBTooltip placement="left">More</DBTooltip></DBButton></DBTableDataCell></DBTableRow><DBTableRow interactive><DBTableHeaderCell scope="row"><DBCheckbox data-table-row-action="true" name="zebra" showLabel={false}>
                                    Check Green
                                </DBCheckbox></DBTableHeaderCell><DBTableDataCell><DBLink href="#" content="external" referrerPolicy="no-referrer" target="_blank">
                                    Green
                                </DBLink></DBTableDataCell><DBTableDataCell><DBTag icon="check" semantic="successful">
                                    Done
                                </DBTag></DBTableDataCell><DBTableDataCell /><DBTableDataCell>Green</DBTableDataCell><DBTableDataCell><DBInput label="Green" placeholder="Green" showLabel={false} /></DBTableDataCell><DBTableDataCell horizontalAlignment="end"><DBButton variant="ghost" icon="more_vertical" noText>
                                    More
                                    <DBTooltip placement="left">More</DBTooltip></DBButton></DBTableDataCell></DBTableRow></DBTableBody></>
  },
  render: (properties: any) => <div style={{
    maxInlineSize: '100%',
    inlineSize: '1000px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 'var(--db-spacing-fixed-md)'
  }}><DBInfotext semantic="informational" size="small" icon="none">
                    Zebra
                </DBInfotext><DBTable {...properties} /></div>
}`,...b.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    "variant": "floating",
    "captionPlain": "Floating, sortable columns are Link.",
    "columnSizes": {
      0: 'min-content',
      6: 'min-content'
    },
    "children": <><DBTableHead><DBTableRow><DBTableHeaderCell scope="col"><DBCheckbox name="floating" showLabel={false}>
                                    Check All
                                    <DBTooltip placement="top">
                                        Check All
                                    </DBTooltip></DBCheckbox></DBTableHeaderCell><DBTableHeaderCell scope="col"><div style={{
              display: 'flex',
              gap: 'var(--db-spacing-fixed-xs)'
            }}>
                                    Link
                                    <DBButton size="small" variant="ghost" icon="arrows_vertical" noText>
                                        Sort Link
                                        <DBTooltip placement="top">
                                            Sort Link
                                        </DBTooltip></DBButton></div></DBTableHeaderCell><DBTableHeaderCell scope="col">
                                Tag
                            </DBTableHeaderCell><DBTableHeaderCell scope="col">
                                Infotext
                            </DBTableHeaderCell><DBTableHeaderCell scope="col">
                                Text
                            </DBTableHeaderCell><DBTableHeaderCell scope="col">
                                Input
                            </DBTableHeaderCell><DBTableHeaderCell scope="col" horizontalAlignment="end" noText>
                                Button
                            </DBTableHeaderCell></DBTableRow></DBTableHead><DBTableBody><DBTableRow interactive><DBTableHeaderCell scope="row"><DBCheckbox data-table-row-action="true" name="floating" showLabel={false}>
                                    Check Red
                                </DBCheckbox></DBTableHeaderCell><DBTableDataCell><DBLink href="#" content="external" referrerPolicy="no-referrer" target="_blank">
                                    Red
                                </DBLink></DBTableDataCell><DBTableDataCell><DBTag icon="check" semantic="informational">
                                    Progress
                                </DBTag></DBTableDataCell><DBTableDataCell><DBInfotext semantic="critical">15</DBInfotext></DBTableDataCell><DBTableDataCell>Red</DBTableDataCell><DBTableDataCell><DBInput label="Red" placeholder="Red" showLabel={false} required /></DBTableDataCell><DBTableDataCell horizontalAlignment="end"><DBButton variant="ghost" icon="more_vertical" noText>
                                    More
                                    <DBTooltip placement="left">More</DBTooltip></DBButton></DBTableDataCell></DBTableRow><DBTableRow interactive><DBTableHeaderCell scope="row"><DBCheckbox data-table-row-action="true" name="floating" showLabel={false}>
                                    Check Yellow
                                </DBCheckbox></DBTableHeaderCell><DBTableDataCell><DBLink href="#" content="external" referrerPolicy="no-referrer" target="_blank">
                                    Yellow
                                </DBLink></DBTableDataCell><DBTableDataCell><DBTag icon="check" semantic="warning">
                                    Open
                                </DBTag></DBTableDataCell><DBTableDataCell><DBInfotext semantic="warning">1</DBInfotext></DBTableDataCell><DBTableDataCell>Yellow</DBTableDataCell><DBTableDataCell><DBInput label="Yellow" placeholder="Yellow" showLabel={false} /></DBTableDataCell><DBTableDataCell horizontalAlignment="end"><DBButton variant="ghost" icon="more_vertical" noText>
                                    More
                                    <DBTooltip placement="left">More</DBTooltip></DBButton></DBTableDataCell></DBTableRow><DBTableRow interactive><DBTableHeaderCell scope="row"><DBCheckbox data-table-row-action="true" name="floating" showLabel={false}>
                                    Check Green
                                </DBCheckbox></DBTableHeaderCell><DBTableDataCell><DBLink href="#" content="external" referrerPolicy="no-referrer" target="_blank">
                                    Green
                                </DBLink></DBTableDataCell><DBTableDataCell><DBTag icon="check" semantic="successful">
                                    Done
                                </DBTag></DBTableDataCell><DBTableDataCell /><DBTableDataCell>Green</DBTableDataCell><DBTableDataCell><DBInput label="Green" placeholder="Green" showLabel={false} /></DBTableDataCell><DBTableDataCell horizontalAlignment="end"><DBButton variant="ghost" icon="more_vertical" noText>
                                    More
                                    <DBTooltip placement="left">More</DBTooltip></DBButton></DBTableDataCell></DBTableRow></DBTableBody></>
  },
  render: (properties: any) => <div style={{
    maxInlineSize: '100%',
    inlineSize: '1000px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 'var(--db-spacing-fixed-md)'
  }}><DBInfotext semantic="informational" size="small" icon="none">
                    Floating
                </DBInfotext><DBTable {...properties} /></div>
}`,...x.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    "variant": "floating",
    "mobileVariant": "list",
    "captionPlain": "Mobile variant: List, sortable columns are Link.",
    "columnSizes": {
      0: 'min-content',
      6: 'min-content'
    },
    "children": <><DBTableHead><DBTableRow><DBTableHeaderCell scope="col"><DBCheckbox name="list" showLabel={false}>
                                    Check All
                                    <DBTooltip placement="top">
                                        Check All
                                    </DBTooltip></DBCheckbox></DBTableHeaderCell><DBTableHeaderCell scope="col"><div style={{
              display: 'flex',
              gap: 'var(--db-spacing-fixed-xs)'
            }}>
                                    Link
                                    <DBButton size="small" variant="ghost" icon="arrows_vertical" noText>
                                        Sort Link
                                        <DBTooltip placement="top">
                                            Sort Link
                                        </DBTooltip></DBButton></div></DBTableHeaderCell><DBTableHeaderCell scope="col">
                                Tag
                            </DBTableHeaderCell><DBTableHeaderCell scope="col">
                                Infotext
                            </DBTableHeaderCell><DBTableHeaderCell scope="col">
                                Text
                            </DBTableHeaderCell><DBTableHeaderCell scope="col">
                                Input
                            </DBTableHeaderCell><DBTableHeaderCell scope="col" horizontalAlignment="end" noText>
                                Button
                            </DBTableHeaderCell></DBTableRow></DBTableHead><DBTableBody><DBTableRow interactive><DBTableHeaderCell scope="row" data-header="Check"><DBCheckbox data-table-row-action="true" name="list" showLabel={false}>
                                    Check Red
                                </DBCheckbox></DBTableHeaderCell><DBTableDataCell data-header="Link"><DBLink href="#" content="external" referrerPolicy="no-referrer" target="_blank">
                                    Red
                                </DBLink></DBTableDataCell><DBTableDataCell><DBTag icon="check" semantic="informational">
                                    Progress
                                </DBTag></DBTableDataCell><DBTableDataCell><DBInfotext semantic="critical">15</DBInfotext></DBTableDataCell><DBTableDataCell>Red</DBTableDataCell><DBTableDataCell><DBInput label="Red" placeholder="Red" showLabel={false} required /></DBTableDataCell><DBTableDataCell horizontalAlignment="end"><DBButton variant="ghost" icon="more_vertical" noText>
                                    More
                                    <DBTooltip placement="left">More</DBTooltip></DBButton></DBTableDataCell></DBTableRow><DBTableRow interactive><DBTableHeaderCell scope="row" data-header="Check"><DBCheckbox data-table-row-action="true" name="list" showLabel={false}>
                                    Check Yellow
                                </DBCheckbox></DBTableHeaderCell><DBTableDataCell data-header="Link"><DBLink href="#" content="external" referrerPolicy="no-referrer" target="_blank">
                                    Yellow
                                </DBLink></DBTableDataCell><DBTableDataCell><DBTag icon="check" semantic="warning">
                                    Open
                                </DBTag></DBTableDataCell><DBTableDataCell><DBInfotext semantic="warning">1</DBInfotext></DBTableDataCell><DBTableDataCell>Yellow</DBTableDataCell><DBTableDataCell><DBInput label="Yellow" placeholder="Yellow" showLabel={false} /></DBTableDataCell><DBTableDataCell horizontalAlignment="end"><DBButton variant="ghost" icon="more_vertical" noText>
                                    More
                                    <DBTooltip placement="left">More</DBTooltip></DBButton></DBTableDataCell></DBTableRow><DBTableRow interactive><DBTableHeaderCell scope="row" data-header="Check"><DBCheckbox data-table-row-action="true" name="list" showLabel={false}>
                                    Check Green
                                </DBCheckbox></DBTableHeaderCell><DBTableDataCell data-header="Link"><DBLink href="#" content="external" referrerPolicy="no-referrer" target="_blank">
                                    Green
                                </DBLink></DBTableDataCell><DBTableDataCell><DBTag icon="check" semantic="successful">
                                    Done
                                </DBTag></DBTableDataCell><DBTableDataCell /><DBTableDataCell>Green</DBTableDataCell><DBTableDataCell><DBInput label="Green" placeholder="Green" showLabel={false} /></DBTableDataCell><DBTableDataCell horizontalAlignment="end"><DBButton variant="ghost" icon="more_vertical" noText>
                                    More
                                    <DBTooltip placement="left">More</DBTooltip></DBButton></DBTableDataCell></DBTableRow></DBTableBody></>
  },
  render: (properties: any) => <div style={{
    inlineSize: '300px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 'var(--db-spacing-fixed-md)'
  }}><DBInfotext semantic="informational" size="small" icon="none">
                    Mobile variant: List
                </DBInfotext><DBTable {...properties} /></div>
}`,...T.parameters?.docs?.source}}};const P=["Joined","Zebra","Floating","MobilevariantList"];export{x as Floating,B as Joined,T as MobilevariantList,b as Zebra,P as __namedExportsOrder,S as default};
