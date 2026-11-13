import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{n,t as r}from"./tooltip-B5m_PdhP.js";import{n as i,t as a}from"./button-CWXqZAq2.js";import{n as o,t as s}from"./infotext-nUvz-XS8.js";import{n as c,t as l}from"./checkbox-C2kI-ftW.js";import{n as u,t as d}from"./input-5tx6Ju0W.js";import{n as f,t as p}from"./link-BlqvB9Nb.js";import{c as m,d as h,f as g,i as _,l as v,m as y,n as b,p as x,r as S,s as C,t as w,u as T}from"./table-DrPpgZQ_.js";import{n as E,t as D}from"./tag--KMt413n.js";var O=t({Flat:()=>j,MobilevariantList:()=>P,Spaced:()=>N,Zebra:()=>M,__namedExportsOrder:()=>F,default:()=>A}),k,A,j,M,N,P,F;function I(){return(I=e((()=>{i(),c(),o(),d(),p(),C(),x(),S(),h(),v(),D(),r(),w(),{fn:k}=__STORYBOOK_MODULE_TEST__,A={title:`Components/DBTable/Complex`,component:b,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{id:{control:`text`},caption:{control:`text`},captionPlain:{control:`text`},data:{control:`object`},divider:{control:`select`,options:[`none`,`both`,`horizontal`,`vertical`]},showCaption:{control:`boolean`},size:{control:`select`,options:[`x-small`,`small`,`medium`,`large`]},variant:{control:`select`,options:[`flat`,`zebra`,`spaced`]},mobileVariant:{control:`select`,options:[`table`,`list`]},stickyHeader:{control:`select`,options:[`none`,`both`,`horizontal`,`vertical`]},columnSizes:{control:`object`}}},j={args:{captionPlain:`Flat, sortable columns are Link.`,columnSizes:{0:`min-content`,6:`min-content`},default:`<DBTableHead
  ><DBTableRow
    ><DBTableHeaderCell scope="col"
      ><DBCheckbox name="flat" :showLabel="false">
        Check All
        <DBTooltip placement="top"> Check All </DBTooltip></DBCheckbox
      ></DBTableHeaderCell
    ><DBTableHeaderCell scope="col"
      ><div
        :style="{
  display: 'flex',
  gap: 'var(--db-spacing-fixed-xs)'
}"
      >
        Link
        <DBButton
          size="small"
          variant="ghost"
          icon="arrows_vertical"
          :noText="true"
        >
          Sort button
          <DBTooltip placement="top"> Sort button </DBTooltip></DBButton
        ></div
      ></DBTableHeaderCell
    ><DBTableHeaderCell scope="col"> Tag </DBTableHeaderCell
    ><DBTableHeaderCell scope="col"> Infotext </DBTableHeaderCell
    ><DBTableHeaderCell scope="col"> Text </DBTableHeaderCell
    ><DBTableHeaderCell scope="col"> Input </DBTableHeaderCell
    ><DBTableHeaderCell scope="col" horizontalAlignment="end" :noText="true">
      Button
    </DBTableHeaderCell></DBTableRow
  ></DBTableHead
><DBTableBody
  ><DBTableRow :interactive="true"
    ><DBTableHeaderCell scope="row"
      ><DBCheckbox data-table-row-trigger="true" name="flat" :showLabel="false">
        Check Red
      </DBCheckbox></DBTableHeaderCell
    ><DBTableDataCell
      ><DBLink
        href="#"
        content="external"
        referrerPolicy="no-referrer"
        target="_blank"
        text="Red"
      ></DBLink></DBTableDataCell
    ><DBTableDataCell
      ><DBTag icon="check" semantic="informational">
        Progress
      </DBTag></DBTableDataCell
    ><DBTableDataCell
      ><DBInfotext semantic="critical">15</DBInfotext></DBTableDataCell
    ><DBTableDataCell>Red</DBTableDataCell
    ><DBTableDataCell
      ><DBInput
        label="Red"
        placeholder="Red"
        :showLabel="false"
      ></DBInput></DBTableDataCell
    ><DBTableDataCell horizontalAlignment="end"
      ><DBButton variant="ghost" icon="more_vertical" :noText="true">
        More
        <DBTooltip placement="left">More</DBTooltip></DBButton
      ></DBTableDataCell
    ></DBTableRow
  ><DBTableRow :interactive="true"
    ><DBTableHeaderCell scope="row"
      ><DBCheckbox data-table-row-trigger="true" name="flat" :showLabel="false">
        Check Yellow
      </DBCheckbox></DBTableHeaderCell
    ><DBTableDataCell
      ><DBLink
        href="#"
        content="external"
        referrerPolicy="no-referrer"
        target="_blank"
        text="Yellow"
      ></DBLink></DBTableDataCell
    ><DBTableDataCell
      ><DBTag icon="check" semantic="warning"> Open </DBTag></DBTableDataCell
    ><DBTableDataCell
      ><DBInfotext semantic="warning">1</DBInfotext></DBTableDataCell
    ><DBTableDataCell>Yellow</DBTableDataCell
    ><DBTableDataCell
      ><DBInput
        label="Yellow"
        placeholder="Yellow"
        :showLabel="false"
      ></DBInput></DBTableDataCell
    ><DBTableDataCell horizontalAlignment="end"
      ><DBButton variant="ghost" icon="more_vertical" :noText="true">
        More
        <DBTooltip placement="left">More</DBTooltip></DBButton
      ></DBTableDataCell
    ></DBTableRow
  ><DBTableRow :interactive="true"
    ><DBTableHeaderCell scope="row"
      ><DBCheckbox data-table-row-trigger="true" name="flat" :showLabel="false">
        Check Green
      </DBCheckbox></DBTableHeaderCell
    ><DBTableDataCell
      ><DBLink
        href="#"
        content="external"
        referrerPolicy="no-referrer"
        target="_blank"
        text="Green"
      ></DBLink></DBTableDataCell
    ><DBTableDataCell
      ><DBTag icon="check" semantic="successful"> Done </DBTag></DBTableDataCell
    ><DBTableDataCell></DBTableDataCell><DBTableDataCell>Green</DBTableDataCell
    ><DBTableDataCell
      ><DBInput
        label="Green"
        placeholder="Green"
        :showLabel="false"
      ></DBInput></DBTableDataCell
    ><DBTableDataCell horizontalAlignment="end"
      ><DBButton variant="ghost" icon="more_vertical" :noText="true">
        More
        <DBTooltip placement="left">More</DBTooltip></DBButton
      ></DBTableDataCell
    ></DBTableRow
  ></DBTableBody
>`},render:e=>({components:{DBTable:b,DBButton:a,DBCheckbox:l,DBInfotext:s,DBInput:u,DBLink:f,DBTableBody:m,DBTableDataCell:y,DBTableHead:_,DBTableHeaderCell:g,DBTableRow:T,DBTag:E,DBTooltip:n},setup(){return{args:e}},template:`<div  :style="{
  maxInlineSize: '100%',
  inlineSize: '1000px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: 'var(--db-spacing-fixed-md)'
}"  ><DBInfotext semantic="informational" size="small" icon="none"   >
                    Flat
                </DBInfotext><DBTable v-bind="args"   >${e.default}</DBTable></div>`})},M={args:{variant:`zebra`,captionPlain:`Zebra, sortable columns are Link.`,columnSizes:{0:`min-content`,6:`min-content`},default:`<DBTableHead
  ><DBTableRow
    ><DBTableHeaderCell scope="col"
      ><DBCheckbox name="zebra" :showLabel="false">
        Check All
        <DBTooltip placement="top"> Check All </DBTooltip></DBCheckbox
      ></DBTableHeaderCell
    ><DBTableHeaderCell scope="col"
      ><div
        :style="{
  display: 'flex',
  gap: 'var(--db-spacing-fixed-xs)'
}"
      >
        Link
        <DBButton
          size="small"
          variant="ghost"
          icon="arrows_vertical"
          :noText="true"
        >
          Sort button
          <DBTooltip placement="top"> Sort button </DBTooltip></DBButton
        ></div
      ></DBTableHeaderCell
    ><DBTableHeaderCell scope="col"> Tag </DBTableHeaderCell
    ><DBTableHeaderCell scope="col"> Infotext </DBTableHeaderCell
    ><DBTableHeaderCell scope="col"> Text </DBTableHeaderCell
    ><DBTableHeaderCell scope="col"> Input </DBTableHeaderCell
    ><DBTableHeaderCell scope="col" horizontalAlignment="end" :noText="true">
      Button
    </DBTableHeaderCell></DBTableRow
  ></DBTableHead
><DBTableBody
  ><DBTableRow :interactive="true"
    ><DBTableHeaderCell scope="row"
      ><DBCheckbox
        data-table-row-trigger="true"
        name="zebra"
        :showLabel="false"
      >
        Check Red
      </DBCheckbox></DBTableHeaderCell
    ><DBTableDataCell
      ><DBLink
        href="#"
        content="external"
        referrerPolicy="no-referrer"
        target="_blank"
        text="Red"
      ></DBLink></DBTableDataCell
    ><DBTableDataCell
      ><DBTag icon="check" semantic="informational">
        Progress
      </DBTag></DBTableDataCell
    ><DBTableDataCell
      ><DBInfotext semantic="critical">15</DBInfotext></DBTableDataCell
    ><DBTableDataCell>Red</DBTableDataCell
    ><DBTableDataCell
      ><DBInput
        label="Red"
        placeholder="Red"
        :showLabel="false"
      ></DBInput></DBTableDataCell
    ><DBTableDataCell horizontalAlignment="end"
      ><DBButton variant="ghost" icon="more_vertical" :noText="true">
        More
        <DBTooltip placement="left">More</DBTooltip></DBButton
      ></DBTableDataCell
    ></DBTableRow
  ><DBTableRow :interactive="true"
    ><DBTableHeaderCell scope="row"
      ><DBCheckbox
        data-table-row-trigger="true"
        name="zebra"
        :showLabel="false"
      >
        Check Yellow
      </DBCheckbox></DBTableHeaderCell
    ><DBTableDataCell
      ><DBLink
        href="#"
        content="external"
        referrerPolicy="no-referrer"
        target="_blank"
        text="Yellow"
      ></DBLink></DBTableDataCell
    ><DBTableDataCell
      ><DBTag icon="check" semantic="warning"> Open </DBTag></DBTableDataCell
    ><DBTableDataCell
      ><DBInfotext semantic="warning">1</DBInfotext></DBTableDataCell
    ><DBTableDataCell>Yellow</DBTableDataCell
    ><DBTableDataCell
      ><DBInput
        label="Yellow"
        placeholder="Yellow"
        :showLabel="false"
      ></DBInput></DBTableDataCell
    ><DBTableDataCell horizontalAlignment="end"
      ><DBButton variant="ghost" icon="more_vertical" :noText="true">
        More
        <DBTooltip placement="left">More</DBTooltip></DBButton
      ></DBTableDataCell
    ></DBTableRow
  ><DBTableRow :interactive="true"
    ><DBTableHeaderCell scope="row"
      ><DBCheckbox
        data-table-row-trigger="true"
        name="zebra"
        :showLabel="false"
      >
        Check Green
      </DBCheckbox></DBTableHeaderCell
    ><DBTableDataCell
      ><DBLink
        href="#"
        content="external"
        referrerPolicy="no-referrer"
        target="_blank"
        text="Green"
      ></DBLink></DBTableDataCell
    ><DBTableDataCell
      ><DBTag icon="check" semantic="successful"> Done </DBTag></DBTableDataCell
    ><DBTableDataCell></DBTableDataCell><DBTableDataCell>Green</DBTableDataCell
    ><DBTableDataCell
      ><DBInput
        label="Green"
        placeholder="Green"
        :showLabel="false"
      ></DBInput></DBTableDataCell
    ><DBTableDataCell horizontalAlignment="end"
      ><DBButton variant="ghost" icon="more_vertical" :noText="true">
        More
        <DBTooltip placement="left">More</DBTooltip></DBButton
      ></DBTableDataCell
    ></DBTableRow
  ></DBTableBody
>`},render:e=>({components:{DBTable:b,DBButton:a,DBCheckbox:l,DBInfotext:s,DBInput:u,DBLink:f,DBTableBody:m,DBTableDataCell:y,DBTableHead:_,DBTableHeaderCell:g,DBTableRow:T,DBTag:E,DBTooltip:n},setup(){return{args:e}},template:`<div  :style="{
  maxInlineSize: '100%',
  inlineSize: '1000px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: 'var(--db-spacing-fixed-md)'
}"  ><DBInfotext semantic="informational" size="small" icon="none"   >
                    Zebra
                </DBInfotext><DBTable v-bind="args"   >${e.default}</DBTable></div>`})},N={args:{variant:`spaced`,captionPlain:`Spaced, sortable columns are Link.`,columnSizes:{0:`min-content`,6:`min-content`},default:`<DBTableHead
  ><DBTableRow
    ><DBTableHeaderCell scope="col"
      ><DBCheckbox name="spaced" :showLabel="false">
        Check All
        <DBTooltip placement="top"> Check All </DBTooltip></DBCheckbox
      ></DBTableHeaderCell
    ><DBTableHeaderCell scope="col"
      ><div
        :style="{
  display: 'flex',
  gap: 'var(--db-spacing-fixed-xs)'
}"
      >
        Link
        <DBButton
          size="small"
          variant="ghost"
          icon="arrows_vertical"
          :noText="true"
        >
          Sort button
          <DBTooltip placement="top"> Sort button </DBTooltip></DBButton
        ></div
      ></DBTableHeaderCell
    ><DBTableHeaderCell scope="col"> Tag </DBTableHeaderCell
    ><DBTableHeaderCell scope="col"> Infotext </DBTableHeaderCell
    ><DBTableHeaderCell scope="col"> Text </DBTableHeaderCell
    ><DBTableHeaderCell scope="col"> Input </DBTableHeaderCell
    ><DBTableHeaderCell scope="col" horizontalAlignment="end" :noText="true">
      Button
    </DBTableHeaderCell></DBTableRow
  ></DBTableHead
><DBTableBody
  ><DBTableRow :interactive="true"
    ><DBTableHeaderCell scope="row"
      ><DBCheckbox
        data-table-row-trigger="true"
        name="spaced"
        :showLabel="false"
      >
        Check Red
      </DBCheckbox></DBTableHeaderCell
    ><DBTableDataCell
      ><DBLink
        href="#"
        content="external"
        referrerPolicy="no-referrer"
        target="_blank"
        text="Red"
      ></DBLink></DBTableDataCell
    ><DBTableDataCell
      ><DBTag icon="check" semantic="informational">
        Progress
      </DBTag></DBTableDataCell
    ><DBTableDataCell
      ><DBInfotext semantic="critical">15</DBInfotext></DBTableDataCell
    ><DBTableDataCell>Red</DBTableDataCell
    ><DBTableDataCell
      ><DBInput
        label="Red"
        placeholder="Red"
        :showLabel="false"
      ></DBInput></DBTableDataCell
    ><DBTableDataCell horizontalAlignment="end"
      ><DBButton variant="ghost" icon="more_vertical" :noText="true">
        More
        <DBTooltip placement="left">More</DBTooltip></DBButton
      ></DBTableDataCell
    ></DBTableRow
  ><DBTableRow :interactive="true"
    ><DBTableHeaderCell scope="row"
      ><DBCheckbox
        data-table-row-trigger="true"
        name="spaced"
        :showLabel="false"
      >
        Check Yellow
      </DBCheckbox></DBTableHeaderCell
    ><DBTableDataCell
      ><DBLink
        href="#"
        content="external"
        referrerPolicy="no-referrer"
        target="_blank"
        text="Yellow"
      ></DBLink></DBTableDataCell
    ><DBTableDataCell
      ><DBTag icon="check" semantic="warning"> Open </DBTag></DBTableDataCell
    ><DBTableDataCell
      ><DBInfotext semantic="warning">1</DBInfotext></DBTableDataCell
    ><DBTableDataCell>Yellow</DBTableDataCell
    ><DBTableDataCell
      ><DBInput
        label="Yellow"
        placeholder="Yellow"
        :showLabel="false"
      ></DBInput></DBTableDataCell
    ><DBTableDataCell horizontalAlignment="end"
      ><DBButton variant="ghost" icon="more_vertical" :noText="true">
        More
        <DBTooltip placement="left">More</DBTooltip></DBButton
      ></DBTableDataCell
    ></DBTableRow
  ><DBTableRow :interactive="true"
    ><DBTableHeaderCell scope="row"
      ><DBCheckbox
        data-table-row-trigger="true"
        name="spaced"
        :showLabel="false"
      >
        Check Green
      </DBCheckbox></DBTableHeaderCell
    ><DBTableDataCell
      ><DBLink
        href="#"
        content="external"
        referrerPolicy="no-referrer"
        target="_blank"
        text="Green"
      ></DBLink></DBTableDataCell
    ><DBTableDataCell
      ><DBTag icon="check" semantic="successful"> Done </DBTag></DBTableDataCell
    ><DBTableDataCell></DBTableDataCell><DBTableDataCell>Green</DBTableDataCell
    ><DBTableDataCell
      ><DBInput
        label="Green"
        placeholder="Green"
        :showLabel="false"
      ></DBInput></DBTableDataCell
    ><DBTableDataCell horizontalAlignment="end"
      ><DBButton variant="ghost" icon="more_vertical" :noText="true">
        More
        <DBTooltip placement="left">More</DBTooltip></DBButton
      ></DBTableDataCell
    ></DBTableRow
  ></DBTableBody
>`},render:e=>({components:{DBTable:b,DBButton:a,DBCheckbox:l,DBInfotext:s,DBInput:u,DBLink:f,DBTableBody:m,DBTableDataCell:y,DBTableHead:_,DBTableHeaderCell:g,DBTableRow:T,DBTag:E,DBTooltip:n},setup(){return{args:e}},template:`<div  :style="{
  maxInlineSize: '100%',
  inlineSize: '1000px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: 'var(--db-spacing-fixed-md)'
}"  ><DBInfotext semantic="informational" size="small" icon="none"   >
                    Spaced
                </DBInfotext><DBTable v-bind="args"   >${e.default}</DBTable></div>`})},P={args:{variant:`spaced`,mobileVariant:`list`,captionPlain:`Mobile variant: List, sortable columns are Link.`,columnSizes:{0:`min-content`,6:`min-content`},default:`<DBTableHead
  ><DBTableRow
    ><DBTableHeaderCell scope="col"
      ><DBCheckbox name="list" :showLabel="false">
        Check All
        <DBTooltip placement="top"> Check All </DBTooltip></DBCheckbox
      ></DBTableHeaderCell
    ><DBTableHeaderCell scope="col"
      ><div
        :style="{
  display: 'flex',
  gap: 'var(--db-spacing-fixed-xs)'
}"
      >
        Link
        <DBButton
          size="small"
          variant="ghost"
          icon="arrows_vertical"
          :noText="true"
        >
          Sort button
          <DBTooltip placement="top"> Sort button </DBTooltip></DBButton
        ></div
      ></DBTableHeaderCell
    ><DBTableHeaderCell scope="col"> Tag </DBTableHeaderCell
    ><DBTableHeaderCell scope="col"> Infotext </DBTableHeaderCell
    ><DBTableHeaderCell scope="col"> Text </DBTableHeaderCell
    ><DBTableHeaderCell scope="col"> Input </DBTableHeaderCell
    ><DBTableHeaderCell scope="col" horizontalAlignment="end" :noText="true">
      Button
    </DBTableHeaderCell></DBTableRow
  ></DBTableHead
><DBTableBody
  ><DBTableRow :interactive="true"
    ><DBTableHeaderCell scope="row" data-header="Check"
      ><DBCheckbox data-table-row-trigger="true" name="list" :showLabel="false">
        Check Red
      </DBCheckbox></DBTableHeaderCell
    ><DBTableDataCell data-header="Link"
      ><DBLink
        href="#"
        content="external"
        referrerPolicy="no-referrer"
        target="_blank"
        text="Red"
      ></DBLink></DBTableDataCell
    ><DBTableDataCell
      ><DBTag icon="check" semantic="informational">
        Progress
      </DBTag></DBTableDataCell
    ><DBTableDataCell
      ><DBInfotext semantic="critical">15</DBInfotext></DBTableDataCell
    ><DBTableDataCell>Red</DBTableDataCell
    ><DBTableDataCell
      ><DBInput
        label="Red"
        placeholder="Red"
        :showLabel="false"
      ></DBInput></DBTableDataCell
    ><DBTableDataCell horizontalAlignment="end"
      ><DBButton variant="ghost" icon="more_vertical" :noText="true">
        More
        <DBTooltip placement="left">More</DBTooltip></DBButton
      ></DBTableDataCell
    ></DBTableRow
  ><DBTableRow :interactive="true"
    ><DBTableHeaderCell scope="row" data-header="Check"
      ><DBCheckbox data-table-row-trigger="true" name="list" :showLabel="false">
        Check Yellow
      </DBCheckbox></DBTableHeaderCell
    ><DBTableDataCell data-header="Link"
      ><DBLink
        href="#"
        content="external"
        referrerPolicy="no-referrer"
        target="_blank"
        text="Yellow"
      ></DBLink></DBTableDataCell
    ><DBTableDataCell
      ><DBTag icon="check" semantic="warning"> Open </DBTag></DBTableDataCell
    ><DBTableDataCell
      ><DBInfotext semantic="warning">1</DBInfotext></DBTableDataCell
    ><DBTableDataCell>Yellow</DBTableDataCell
    ><DBTableDataCell
      ><DBInput
        label="Yellow"
        placeholder="Yellow"
        :showLabel="false"
      ></DBInput></DBTableDataCell
    ><DBTableDataCell horizontalAlignment="end"
      ><DBButton variant="ghost" icon="more_vertical" :noText="true">
        More
        <DBTooltip placement="left">More</DBTooltip></DBButton
      ></DBTableDataCell
    ></DBTableRow
  ><DBTableRow :interactive="true"
    ><DBTableHeaderCell scope="row" data-header="Check"
      ><DBCheckbox data-table-row-trigger="true" name="list" :showLabel="false">
        Check Green
      </DBCheckbox></DBTableHeaderCell
    ><DBTableDataCell data-header="Link"
      ><DBLink
        href="#"
        content="external"
        referrerPolicy="no-referrer"
        target="_blank"
        text="Green"
      ></DBLink></DBTableDataCell
    ><DBTableDataCell
      ><DBTag icon="check" semantic="successful"> Done </DBTag></DBTableDataCell
    ><DBTableDataCell></DBTableDataCell><DBTableDataCell>Green</DBTableDataCell
    ><DBTableDataCell
      ><DBInput
        label="Green"
        placeholder="Green"
        :showLabel="false"
      ></DBInput></DBTableDataCell
    ><DBTableDataCell horizontalAlignment="end"
      ><DBButton variant="ghost" icon="more_vertical" :noText="true">
        More
        <DBTooltip placement="left">More</DBTooltip></DBButton
      ></DBTableDataCell
    ></DBTableRow
  ></DBTableBody
>`},render:e=>({components:{DBTable:b,DBButton:a,DBCheckbox:l,DBInfotext:s,DBInput:u,DBLink:f,DBTableBody:m,DBTableDataCell:y,DBTableHead:_,DBTableHeaderCell:g,DBTableRow:T,DBTag:E,DBTooltip:n},setup(){return{args:e}},template:`<div  :style="{
  inlineSize: '300px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: 'var(--db-spacing-fixed-md)'
}"  ><DBInfotext semantic="informational" size="small" icon="none"   >
                    Mobile variant: List
                </DBInfotext><DBTable v-bind="args"   >${e.default}</DBTable></div>`})},F=[`Flat`,`Zebra`,`Spaced`,`MobilevariantList`],j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    "captionPlain": "Flat, sortable columns are Link.",
    "columnSizes": {
      0: 'min-content',
      6: 'min-content'
    },
    "default": \`<DBTableHead
  ><DBTableRow
    ><DBTableHeaderCell scope="col"
      ><DBCheckbox name="flat" :showLabel="false">
        Check All
        <DBTooltip placement="top"> Check All </DBTooltip></DBCheckbox
      ></DBTableHeaderCell
    ><DBTableHeaderCell scope="col"
      ><div
        :style="{
  display: 'flex',
  gap: 'var(--db-spacing-fixed-xs)'
}"
      >
        Link
        <DBButton
          size="small"
          variant="ghost"
          icon="arrows_vertical"
          :noText="true"
        >
          Sort button
          <DBTooltip placement="top"> Sort button </DBTooltip></DBButton
        ></div
      ></DBTableHeaderCell
    ><DBTableHeaderCell scope="col"> Tag </DBTableHeaderCell
    ><DBTableHeaderCell scope="col"> Infotext </DBTableHeaderCell
    ><DBTableHeaderCell scope="col"> Text </DBTableHeaderCell
    ><DBTableHeaderCell scope="col"> Input </DBTableHeaderCell
    ><DBTableHeaderCell scope="col" horizontalAlignment="end" :noText="true">
      Button
    </DBTableHeaderCell></DBTableRow
  ></DBTableHead
><DBTableBody
  ><DBTableRow :interactive="true"
    ><DBTableHeaderCell scope="row"
      ><DBCheckbox data-table-row-trigger="true" name="flat" :showLabel="false">
        Check Red
      </DBCheckbox></DBTableHeaderCell
    ><DBTableDataCell
      ><DBLink
        href="#"
        content="external"
        referrerPolicy="no-referrer"
        target="_blank"
        text="Red"
      ></DBLink></DBTableDataCell
    ><DBTableDataCell
      ><DBTag icon="check" semantic="informational">
        Progress
      </DBTag></DBTableDataCell
    ><DBTableDataCell
      ><DBInfotext semantic="critical">15</DBInfotext></DBTableDataCell
    ><DBTableDataCell>Red</DBTableDataCell
    ><DBTableDataCell
      ><DBInput
        label="Red"
        placeholder="Red"
        :showLabel="false"
      ></DBInput></DBTableDataCell
    ><DBTableDataCell horizontalAlignment="end"
      ><DBButton variant="ghost" icon="more_vertical" :noText="true">
        More
        <DBTooltip placement="left">More</DBTooltip></DBButton
      ></DBTableDataCell
    ></DBTableRow
  ><DBTableRow :interactive="true"
    ><DBTableHeaderCell scope="row"
      ><DBCheckbox data-table-row-trigger="true" name="flat" :showLabel="false">
        Check Yellow
      </DBCheckbox></DBTableHeaderCell
    ><DBTableDataCell
      ><DBLink
        href="#"
        content="external"
        referrerPolicy="no-referrer"
        target="_blank"
        text="Yellow"
      ></DBLink></DBTableDataCell
    ><DBTableDataCell
      ><DBTag icon="check" semantic="warning"> Open </DBTag></DBTableDataCell
    ><DBTableDataCell
      ><DBInfotext semantic="warning">1</DBInfotext></DBTableDataCell
    ><DBTableDataCell>Yellow</DBTableDataCell
    ><DBTableDataCell
      ><DBInput
        label="Yellow"
        placeholder="Yellow"
        :showLabel="false"
      ></DBInput></DBTableDataCell
    ><DBTableDataCell horizontalAlignment="end"
      ><DBButton variant="ghost" icon="more_vertical" :noText="true">
        More
        <DBTooltip placement="left">More</DBTooltip></DBButton
      ></DBTableDataCell
    ></DBTableRow
  ><DBTableRow :interactive="true"
    ><DBTableHeaderCell scope="row"
      ><DBCheckbox data-table-row-trigger="true" name="flat" :showLabel="false">
        Check Green
      </DBCheckbox></DBTableHeaderCell
    ><DBTableDataCell
      ><DBLink
        href="#"
        content="external"
        referrerPolicy="no-referrer"
        target="_blank"
        text="Green"
      ></DBLink></DBTableDataCell
    ><DBTableDataCell
      ><DBTag icon="check" semantic="successful"> Done </DBTag></DBTableDataCell
    ><DBTableDataCell></DBTableDataCell><DBTableDataCell>Green</DBTableDataCell
    ><DBTableDataCell
      ><DBInput
        label="Green"
        placeholder="Green"
        :showLabel="false"
      ></DBInput></DBTableDataCell
    ><DBTableDataCell horizontalAlignment="end"
      ><DBButton variant="ghost" icon="more_vertical" :noText="true">
        More
        <DBTooltip placement="left">More</DBTooltip></DBButton
      ></DBTableDataCell
    ></DBTableRow
  ></DBTableBody
>\`
  },
  render: (args: any) => ({
    components: {
      DBTable,
      DBButton,
      DBCheckbox,
      DBInfotext,
      DBInput,
      DBLink,
      DBTableBody,
      DBTableDataCell,
      DBTableHead,
      DBTableHeaderCell,
      DBTableRow,
      DBTag,
      DBTooltip
    },
    setup() {
      return {
        args
      };
    },
    template: \`<div  :style="{
  maxInlineSize: '100%',
  inlineSize: '1000px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: 'var(--db-spacing-fixed-md)'
}"  ><DBInfotext semantic="informational" size="small" icon="none"   >
                    Flat
                </DBInfotext><DBTable v-bind="args"   >\${args.default}</DBTable></div>\`
  })
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: {
    "variant": "zebra",
    "captionPlain": "Zebra, sortable columns are Link.",
    "columnSizes": {
      0: 'min-content',
      6: 'min-content'
    },
    "default": \`<DBTableHead
  ><DBTableRow
    ><DBTableHeaderCell scope="col"
      ><DBCheckbox name="zebra" :showLabel="false">
        Check All
        <DBTooltip placement="top"> Check All </DBTooltip></DBCheckbox
      ></DBTableHeaderCell
    ><DBTableHeaderCell scope="col"
      ><div
        :style="{
  display: 'flex',
  gap: 'var(--db-spacing-fixed-xs)'
}"
      >
        Link
        <DBButton
          size="small"
          variant="ghost"
          icon="arrows_vertical"
          :noText="true"
        >
          Sort button
          <DBTooltip placement="top"> Sort button </DBTooltip></DBButton
        ></div
      ></DBTableHeaderCell
    ><DBTableHeaderCell scope="col"> Tag </DBTableHeaderCell
    ><DBTableHeaderCell scope="col"> Infotext </DBTableHeaderCell
    ><DBTableHeaderCell scope="col"> Text </DBTableHeaderCell
    ><DBTableHeaderCell scope="col"> Input </DBTableHeaderCell
    ><DBTableHeaderCell scope="col" horizontalAlignment="end" :noText="true">
      Button
    </DBTableHeaderCell></DBTableRow
  ></DBTableHead
><DBTableBody
  ><DBTableRow :interactive="true"
    ><DBTableHeaderCell scope="row"
      ><DBCheckbox
        data-table-row-trigger="true"
        name="zebra"
        :showLabel="false"
      >
        Check Red
      </DBCheckbox></DBTableHeaderCell
    ><DBTableDataCell
      ><DBLink
        href="#"
        content="external"
        referrerPolicy="no-referrer"
        target="_blank"
        text="Red"
      ></DBLink></DBTableDataCell
    ><DBTableDataCell
      ><DBTag icon="check" semantic="informational">
        Progress
      </DBTag></DBTableDataCell
    ><DBTableDataCell
      ><DBInfotext semantic="critical">15</DBInfotext></DBTableDataCell
    ><DBTableDataCell>Red</DBTableDataCell
    ><DBTableDataCell
      ><DBInput
        label="Red"
        placeholder="Red"
        :showLabel="false"
      ></DBInput></DBTableDataCell
    ><DBTableDataCell horizontalAlignment="end"
      ><DBButton variant="ghost" icon="more_vertical" :noText="true">
        More
        <DBTooltip placement="left">More</DBTooltip></DBButton
      ></DBTableDataCell
    ></DBTableRow
  ><DBTableRow :interactive="true"
    ><DBTableHeaderCell scope="row"
      ><DBCheckbox
        data-table-row-trigger="true"
        name="zebra"
        :showLabel="false"
      >
        Check Yellow
      </DBCheckbox></DBTableHeaderCell
    ><DBTableDataCell
      ><DBLink
        href="#"
        content="external"
        referrerPolicy="no-referrer"
        target="_blank"
        text="Yellow"
      ></DBLink></DBTableDataCell
    ><DBTableDataCell
      ><DBTag icon="check" semantic="warning"> Open </DBTag></DBTableDataCell
    ><DBTableDataCell
      ><DBInfotext semantic="warning">1</DBInfotext></DBTableDataCell
    ><DBTableDataCell>Yellow</DBTableDataCell
    ><DBTableDataCell
      ><DBInput
        label="Yellow"
        placeholder="Yellow"
        :showLabel="false"
      ></DBInput></DBTableDataCell
    ><DBTableDataCell horizontalAlignment="end"
      ><DBButton variant="ghost" icon="more_vertical" :noText="true">
        More
        <DBTooltip placement="left">More</DBTooltip></DBButton
      ></DBTableDataCell
    ></DBTableRow
  ><DBTableRow :interactive="true"
    ><DBTableHeaderCell scope="row"
      ><DBCheckbox
        data-table-row-trigger="true"
        name="zebra"
        :showLabel="false"
      >
        Check Green
      </DBCheckbox></DBTableHeaderCell
    ><DBTableDataCell
      ><DBLink
        href="#"
        content="external"
        referrerPolicy="no-referrer"
        target="_blank"
        text="Green"
      ></DBLink></DBTableDataCell
    ><DBTableDataCell
      ><DBTag icon="check" semantic="successful"> Done </DBTag></DBTableDataCell
    ><DBTableDataCell></DBTableDataCell><DBTableDataCell>Green</DBTableDataCell
    ><DBTableDataCell
      ><DBInput
        label="Green"
        placeholder="Green"
        :showLabel="false"
      ></DBInput></DBTableDataCell
    ><DBTableDataCell horizontalAlignment="end"
      ><DBButton variant="ghost" icon="more_vertical" :noText="true">
        More
        <DBTooltip placement="left">More</DBTooltip></DBButton
      ></DBTableDataCell
    ></DBTableRow
  ></DBTableBody
>\`
  },
  render: (args: any) => ({
    components: {
      DBTable,
      DBButton,
      DBCheckbox,
      DBInfotext,
      DBInput,
      DBLink,
      DBTableBody,
      DBTableDataCell,
      DBTableHead,
      DBTableHeaderCell,
      DBTableRow,
      DBTag,
      DBTooltip
    },
    setup() {
      return {
        args
      };
    },
    template: \`<div  :style="{
  maxInlineSize: '100%',
  inlineSize: '1000px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: 'var(--db-spacing-fixed-md)'
}"  ><DBInfotext semantic="informational" size="small" icon="none"   >
                    Zebra
                </DBInfotext><DBTable v-bind="args"   >\${args.default}</DBTable></div>\`
  })
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    "variant": "spaced",
    "captionPlain": "Spaced, sortable columns are Link.",
    "columnSizes": {
      0: 'min-content',
      6: 'min-content'
    },
    "default": \`<DBTableHead
  ><DBTableRow
    ><DBTableHeaderCell scope="col"
      ><DBCheckbox name="spaced" :showLabel="false">
        Check All
        <DBTooltip placement="top"> Check All </DBTooltip></DBCheckbox
      ></DBTableHeaderCell
    ><DBTableHeaderCell scope="col"
      ><div
        :style="{
  display: 'flex',
  gap: 'var(--db-spacing-fixed-xs)'
}"
      >
        Link
        <DBButton
          size="small"
          variant="ghost"
          icon="arrows_vertical"
          :noText="true"
        >
          Sort button
          <DBTooltip placement="top"> Sort button </DBTooltip></DBButton
        ></div
      ></DBTableHeaderCell
    ><DBTableHeaderCell scope="col"> Tag </DBTableHeaderCell
    ><DBTableHeaderCell scope="col"> Infotext </DBTableHeaderCell
    ><DBTableHeaderCell scope="col"> Text </DBTableHeaderCell
    ><DBTableHeaderCell scope="col"> Input </DBTableHeaderCell
    ><DBTableHeaderCell scope="col" horizontalAlignment="end" :noText="true">
      Button
    </DBTableHeaderCell></DBTableRow
  ></DBTableHead
><DBTableBody
  ><DBTableRow :interactive="true"
    ><DBTableHeaderCell scope="row"
      ><DBCheckbox
        data-table-row-trigger="true"
        name="spaced"
        :showLabel="false"
      >
        Check Red
      </DBCheckbox></DBTableHeaderCell
    ><DBTableDataCell
      ><DBLink
        href="#"
        content="external"
        referrerPolicy="no-referrer"
        target="_blank"
        text="Red"
      ></DBLink></DBTableDataCell
    ><DBTableDataCell
      ><DBTag icon="check" semantic="informational">
        Progress
      </DBTag></DBTableDataCell
    ><DBTableDataCell
      ><DBInfotext semantic="critical">15</DBInfotext></DBTableDataCell
    ><DBTableDataCell>Red</DBTableDataCell
    ><DBTableDataCell
      ><DBInput
        label="Red"
        placeholder="Red"
        :showLabel="false"
      ></DBInput></DBTableDataCell
    ><DBTableDataCell horizontalAlignment="end"
      ><DBButton variant="ghost" icon="more_vertical" :noText="true">
        More
        <DBTooltip placement="left">More</DBTooltip></DBButton
      ></DBTableDataCell
    ></DBTableRow
  ><DBTableRow :interactive="true"
    ><DBTableHeaderCell scope="row"
      ><DBCheckbox
        data-table-row-trigger="true"
        name="spaced"
        :showLabel="false"
      >
        Check Yellow
      </DBCheckbox></DBTableHeaderCell
    ><DBTableDataCell
      ><DBLink
        href="#"
        content="external"
        referrerPolicy="no-referrer"
        target="_blank"
        text="Yellow"
      ></DBLink></DBTableDataCell
    ><DBTableDataCell
      ><DBTag icon="check" semantic="warning"> Open </DBTag></DBTableDataCell
    ><DBTableDataCell
      ><DBInfotext semantic="warning">1</DBInfotext></DBTableDataCell
    ><DBTableDataCell>Yellow</DBTableDataCell
    ><DBTableDataCell
      ><DBInput
        label="Yellow"
        placeholder="Yellow"
        :showLabel="false"
      ></DBInput></DBTableDataCell
    ><DBTableDataCell horizontalAlignment="end"
      ><DBButton variant="ghost" icon="more_vertical" :noText="true">
        More
        <DBTooltip placement="left">More</DBTooltip></DBButton
      ></DBTableDataCell
    ></DBTableRow
  ><DBTableRow :interactive="true"
    ><DBTableHeaderCell scope="row"
      ><DBCheckbox
        data-table-row-trigger="true"
        name="spaced"
        :showLabel="false"
      >
        Check Green
      </DBCheckbox></DBTableHeaderCell
    ><DBTableDataCell
      ><DBLink
        href="#"
        content="external"
        referrerPolicy="no-referrer"
        target="_blank"
        text="Green"
      ></DBLink></DBTableDataCell
    ><DBTableDataCell
      ><DBTag icon="check" semantic="successful"> Done </DBTag></DBTableDataCell
    ><DBTableDataCell></DBTableDataCell><DBTableDataCell>Green</DBTableDataCell
    ><DBTableDataCell
      ><DBInput
        label="Green"
        placeholder="Green"
        :showLabel="false"
      ></DBInput></DBTableDataCell
    ><DBTableDataCell horizontalAlignment="end"
      ><DBButton variant="ghost" icon="more_vertical" :noText="true">
        More
        <DBTooltip placement="left">More</DBTooltip></DBButton
      ></DBTableDataCell
    ></DBTableRow
  ></DBTableBody
>\`
  },
  render: (args: any) => ({
    components: {
      DBTable,
      DBButton,
      DBCheckbox,
      DBInfotext,
      DBInput,
      DBLink,
      DBTableBody,
      DBTableDataCell,
      DBTableHead,
      DBTableHeaderCell,
      DBTableRow,
      DBTag,
      DBTooltip
    },
    setup() {
      return {
        args
      };
    },
    template: \`<div  :style="{
  maxInlineSize: '100%',
  inlineSize: '1000px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: 'var(--db-spacing-fixed-md)'
}"  ><DBInfotext semantic="informational" size="small" icon="none"   >
                    Spaced
                </DBInfotext><DBTable v-bind="args"   >\${args.default}</DBTable></div>\`
  })
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  args: {
    "variant": "spaced",
    "mobileVariant": "list",
    "captionPlain": "Mobile variant: List, sortable columns are Link.",
    "columnSizes": {
      0: 'min-content',
      6: 'min-content'
    },
    "default": \`<DBTableHead
  ><DBTableRow
    ><DBTableHeaderCell scope="col"
      ><DBCheckbox name="list" :showLabel="false">
        Check All
        <DBTooltip placement="top"> Check All </DBTooltip></DBCheckbox
      ></DBTableHeaderCell
    ><DBTableHeaderCell scope="col"
      ><div
        :style="{
  display: 'flex',
  gap: 'var(--db-spacing-fixed-xs)'
}"
      >
        Link
        <DBButton
          size="small"
          variant="ghost"
          icon="arrows_vertical"
          :noText="true"
        >
          Sort button
          <DBTooltip placement="top"> Sort button </DBTooltip></DBButton
        ></div
      ></DBTableHeaderCell
    ><DBTableHeaderCell scope="col"> Tag </DBTableHeaderCell
    ><DBTableHeaderCell scope="col"> Infotext </DBTableHeaderCell
    ><DBTableHeaderCell scope="col"> Text </DBTableHeaderCell
    ><DBTableHeaderCell scope="col"> Input </DBTableHeaderCell
    ><DBTableHeaderCell scope="col" horizontalAlignment="end" :noText="true">
      Button
    </DBTableHeaderCell></DBTableRow
  ></DBTableHead
><DBTableBody
  ><DBTableRow :interactive="true"
    ><DBTableHeaderCell scope="row" data-header="Check"
      ><DBCheckbox data-table-row-trigger="true" name="list" :showLabel="false">
        Check Red
      </DBCheckbox></DBTableHeaderCell
    ><DBTableDataCell data-header="Link"
      ><DBLink
        href="#"
        content="external"
        referrerPolicy="no-referrer"
        target="_blank"
        text="Red"
      ></DBLink></DBTableDataCell
    ><DBTableDataCell
      ><DBTag icon="check" semantic="informational">
        Progress
      </DBTag></DBTableDataCell
    ><DBTableDataCell
      ><DBInfotext semantic="critical">15</DBInfotext></DBTableDataCell
    ><DBTableDataCell>Red</DBTableDataCell
    ><DBTableDataCell
      ><DBInput
        label="Red"
        placeholder="Red"
        :showLabel="false"
      ></DBInput></DBTableDataCell
    ><DBTableDataCell horizontalAlignment="end"
      ><DBButton variant="ghost" icon="more_vertical" :noText="true">
        More
        <DBTooltip placement="left">More</DBTooltip></DBButton
      ></DBTableDataCell
    ></DBTableRow
  ><DBTableRow :interactive="true"
    ><DBTableHeaderCell scope="row" data-header="Check"
      ><DBCheckbox data-table-row-trigger="true" name="list" :showLabel="false">
        Check Yellow
      </DBCheckbox></DBTableHeaderCell
    ><DBTableDataCell data-header="Link"
      ><DBLink
        href="#"
        content="external"
        referrerPolicy="no-referrer"
        target="_blank"
        text="Yellow"
      ></DBLink></DBTableDataCell
    ><DBTableDataCell
      ><DBTag icon="check" semantic="warning"> Open </DBTag></DBTableDataCell
    ><DBTableDataCell
      ><DBInfotext semantic="warning">1</DBInfotext></DBTableDataCell
    ><DBTableDataCell>Yellow</DBTableDataCell
    ><DBTableDataCell
      ><DBInput
        label="Yellow"
        placeholder="Yellow"
        :showLabel="false"
      ></DBInput></DBTableDataCell
    ><DBTableDataCell horizontalAlignment="end"
      ><DBButton variant="ghost" icon="more_vertical" :noText="true">
        More
        <DBTooltip placement="left">More</DBTooltip></DBButton
      ></DBTableDataCell
    ></DBTableRow
  ><DBTableRow :interactive="true"
    ><DBTableHeaderCell scope="row" data-header="Check"
      ><DBCheckbox data-table-row-trigger="true" name="list" :showLabel="false">
        Check Green
      </DBCheckbox></DBTableHeaderCell
    ><DBTableDataCell data-header="Link"
      ><DBLink
        href="#"
        content="external"
        referrerPolicy="no-referrer"
        target="_blank"
        text="Green"
      ></DBLink></DBTableDataCell
    ><DBTableDataCell
      ><DBTag icon="check" semantic="successful"> Done </DBTag></DBTableDataCell
    ><DBTableDataCell></DBTableDataCell><DBTableDataCell>Green</DBTableDataCell
    ><DBTableDataCell
      ><DBInput
        label="Green"
        placeholder="Green"
        :showLabel="false"
      ></DBInput></DBTableDataCell
    ><DBTableDataCell horizontalAlignment="end"
      ><DBButton variant="ghost" icon="more_vertical" :noText="true">
        More
        <DBTooltip placement="left">More</DBTooltip></DBButton
      ></DBTableDataCell
    ></DBTableRow
  ></DBTableBody
>\`
  },
  render: (args: any) => ({
    components: {
      DBTable,
      DBButton,
      DBCheckbox,
      DBInfotext,
      DBInput,
      DBLink,
      DBTableBody,
      DBTableDataCell,
      DBTableHead,
      DBTableHeaderCell,
      DBTableRow,
      DBTag,
      DBTooltip
    },
    setup() {
      return {
        args
      };
    },
    template: \`<div  :style="{
  inlineSize: '300px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: 'var(--db-spacing-fixed-md)'
}"  ><DBInfotext semantic="informational" size="small" icon="none"   >
                    Mobile variant: List
                </DBInfotext><DBTable v-bind="args"   >\${args.default}</DBTable></div>\`
  })
}`,...P.parameters?.docs?.source}}}})))()}export{O as a,M as i,P as n,I as o,N as r,j as t};