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


<#function getBoolean originBool propertyName="">
    <#if (originBool)?? && originBool?has_content>
        <#if (propertyName)??  && propertyName?has_content>
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

<#function getPropIf ifValue conditionValue prop>
    <#if (prop)?? && prop?has_content && ifValue == prop>
        <#return conditionValue />
    <#else>
        <#return "" />
    </#if>
</#function>

<#function getPropIfDefined trueValue falseValue prop>
    <#if (prop)?? && prop?has_content>
        <#return trueValue />
    <#else>
        <#return falseValue />
    </#if>
</#function>


<#function getPropStartsWith startsWithValue conditionValue prop>
    <#if (prop)?? && prop?has_content && prop?starts_with(startsWithValue)>
        <#return conditionValue />
    <#else>
        <#return "" />
    </#if>
</#function>


<#function getItems items>
	<#if (items)?? && items?has_content>
		<#if items?is_sequence>
			<#return items />
		</#if>
		<#return items?eval_json />
	<#else>
		<#return "" />
	</#if>
</#function>

