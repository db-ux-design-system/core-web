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
		<#if originBool?is_boolean>
			<#return originBool?then("true","") />
		<#else>
			<#return originBool />
		</#if>
	<#else>
		<#return "" />
	</#if>
</#function>


<#function getBoolean originBool propertyName="">
	<#if (originBool)?? && originBool?has_content>
		<#local originBoolTrim=originBool?trim />
		<#if originBoolTrim?boolean>
			<#return "true" />
		<#elseif (propertyName)?? && propertyName?has_content>
			<#return (originBoolTrim == propertyName?trim)?then("true","") />
		<#else>
			<#return "" />
		</#if>
	<#else>
		<#return "" />
	</#if>
</#function>

<#function getHideProp show>
	<#if (show)?? && show?has_content>
		<#return getBooleanAsString(!show) />
	<#else>
		<#return "" />
	</#if>
</#function>

<#function getDefaultProp defaultValue prop>
	<#if prop?? && prop?has_content>
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

<#function stringPropVisible givenString showString>
	<#if showString == "false">
		<#return "" />
	<#else>
		<#return givenString />
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


<#assign DEFAULT_ID='OVERWRITE_DEFAULT_ID' />
<#assign DEFAULT_LABEL='LABEL SHOULD BE SET' />
<#assign DEFAULT_PLACEHOLDER = ' ' />
<#assign DEFAULT_MESSAGE = 'MESSAGE SHOULD BE SET' />

<#assign DEFAULT_LABEL_ID_SUFFIX = '-label' />
<#assign DEFAULT_SELECT_ID_SUFFIX = '-select' />
<#assign DEFAULT_MESSAGE_ID_SUFFIX = '-message' />
<#assign DEFAULT_VALID_MESSAGE_ID_SUFFIX = '-valid-message' />
<#assign DEFAULT_INVALID_MESSAGE_ID_SUFFIX = '-invalid-message' />
<#assign DEFAULT_PLACEHOLDER_ID_SUFFIX = '-placeholder' />
<#assign DEFAULT_DATALIST_ID_SUFFIX = '-datalist' />

<#assign DEFAULT_VALID_MESSAGE = 'TODO: Add a validMessage' />
<#assign DEFAULT_INVALID_MESSAGE = 'TODO: Add an invalidMessage' />

<#assign DEFAULT_REMOVE = 'Remove' />
<#assign DEFAULT_BACK = 'Back' />
<#assign DEFAULT_SELECTED = 'Selected' />

<#assign DEFAULT_BURGER_MENU = 'BurgerMenu' />
<#assign DEFAULT_ICON = 'brand' />
<#assign DEFAULT_ROWS = 4 />

<#assign DEFAULT_CLOSE_BUTTON = 'Close' />
<#assign DENSITY_CONST = 'density' />
<#assign COLOR_CONST = 'color' />
