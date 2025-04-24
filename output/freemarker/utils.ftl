<#function cls componentName className>
	<#if (className)?? && className?has_content>
		<#local class=componentName + " " + className/>
	<#else>
		<#local class=componentName/>
	</#if>
	<#return class!"" />
</#function>

<#function getBooleanAsString originBool>
	<#if (originBool)?? && originBool?has_content>
		<#return originBool?then("true","") />
	<#else>
		<#return originBool! />
	</#if>
</#function>


<#function getBoolean originBool propertyName>
	<#if (originBool)?? && originBool?has_content>
		<#if (propertyName)??>
			<#return (originBool?c == propertyName)?then("true","") />
		</#if>
		<#return originBool?then("true","") />
	<#else>
		<#return "" />
	</#if>
</#function>

<#function getHideProp show>
	<#if (show)?? && show?has_content>
		<#return getBooleanAsString(!show) />
	<#else>
		<#return show! />
	</#if>
</#function>

<#function getDefaultProp defaultValue prop>
	<#if (prop)?? && prop?has_content>
		<#return prop />
	<#else>
		<#return defaultValue />
	</#if>
</#function>


