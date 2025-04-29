<#import "*/components/index.ftl" as DB/>
<#include "*/includes/default.ftl"/>


<@Default>
	<h1>Hello ${title}!${app}</h1>

	<h2>Divider</h2>
	<@DB.Divider>
	</@DB.Divider>

	<h2>Brand</h2>
	<@DB.Brand>
		Test
	</@DB.Brand>

	<h2>Link</h2>
	<@DB.Link href="#" target="_blank">
		Test
	</@DB.Link>

	<h2>Badge</h2>

	<@DB.Badge>Test</@DB.Badge>

	<h2>Notification</h2>

	<@DB.Notification headline="Test" icon="information_circle" closeable="true"; slot>
		<#if !slot?has_content>
			Test
		</#if>
	</@DB.Notification>

	<h2>Card</h2>

	<@DB.Card>
		<@DB.Button>Test1</@DB.Button>
		<@DB.Button>Test2</@DB.Button>
		<@DB.Button>Test3</@DB.Button>
	</@DB.Card>



	<h2>Only FTL</h2>
	<@DB.Accordion wc=false>
		<@DB.AccordionItem wc=false headlinePlain="Test">Bla</@DB.AccordionItem>
		<@DB.AccordionItem wc=false headlinePlain="Test2">Bla2</@DB.AccordionItem>
		<@DB.AccordionItem wc=false headlinePlain="Test3">Bla3</@DB.AccordionItem>
	</@DB.Accordion>

	<h2>Only FTL with Slot</h2>
	<@DB.Accordion wc=false>
		<@DB.AccordionItem wc=false ; accSlot>
			<#if accSlot=="headline">
				Test
			<#else>
				Bla
			</#if>
		</@DB.AccordionItem>
		<@DB.AccordionItem wc=false ; accSlot>
			<#if accSlot=="headline">
				Test2
			<#else>
				Bla2
			</#if>
		</@DB.AccordionItem>
		<@DB.AccordionItem wc=false ; accSlot>
			<#if accSlot=="headline">
				Test3
			<#else>
				Bla3
			</#if>
		</@DB.AccordionItem>
	</@DB.Accordion>

	<h2>Only WC</h2>
	<@DB.Accordion ftl=false>
		<@DB.AccordionItem ftl=false headlinePlain="Test">Bla</@DB.AccordionItem>
		<@DB.AccordionItem ftl=false headlinePlain="Test2">Bla2</@DB.AccordionItem>
		<@DB.AccordionItem ftl=false headlinePlain="Test3">Bla3</@DB.AccordionItem>
	</@DB.Accordion>

	<h2>Only WC + Slot</h2>
	<@DB.Accordion ftl=false>
		<@DB.AccordionItem ftl=false>
			<span slot="headline">Test1</span>
			Bla
		</@DB.AccordionItem>
		<@DB.AccordionItem ftl=false>
			<span slot="headline">Test2</span>
			Bla2
		</@DB.AccordionItem>
		<@DB.AccordionItem ftl=false>
			<span slot="headline">Test3</span>
			Bla3
		</@DB.AccordionItem>
	</@DB.Accordion>


	<h2>FTL + WC</h2>
	<@DB.Button ftl=true wc=true icon="person" data\-test="bla">Test</@DB.Button>
	<h2>Only FTL</h2>
	<@DB.Button wc=false icon="person" data\-test="bla">Test</@DB.Button>
	<h2>Only WC</h2>
	<@DB.Button ftl=false wc=true icon="person" data\-test="bla">Test</@DB.Button>
</@Default>

