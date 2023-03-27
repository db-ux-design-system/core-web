const fileHeader =
	'@use "variables" as *;\n' +
	'// Do not edit directly\n' +
	'// Generated on ' +
	new Date().toString() +
	'\n';

const generateScaling = () => {
	let allClasses = fileHeader;

	const scaleTypeKey = ['regular', 'functional', 'expressive'];

	const inputCustomVars = {
		regular: {
			labelScale: 0.65,
			focusOpacity: 1
		},
		functional: {
			labelScale: 1,
			focusOpacity: 0
		},
		expressive: {
			labelScale: 0.55,
			focusOpacity: 1
		}
	};

	for (const scale of scaleTypeKey) {
		allClasses += `
%db-scaling-${scale}{
\t--db-sizing-xs: #{$db-sizing-${scale}-xs};
\t--db-sizing-sm: #{$db-sizing-${scale}-s};
\t--db-sizing-md: #{$db-sizing-${scale}-m};
\t--db-sizing-lg: #{$db-sizing-${scale}-l};
\t--db-sizing-xl: #{$db-sizing-${scale}-xl};
\t--db-sizing-2xl: #{$db-sizing-${scale}-2xl};
\t--db-sizing-3xl: #{$db-sizing-${scale}-3xl};

\t--db-spacing-fixed-3xs: #{$db-spacing-fixed-${scale}-3xs};
\t--db-spacing-fixed-2xs: #{$db-spacing-fixed-${scale}-2xs};
\t--db-spacing-fixed-xs: #{$db-spacing-fixed-${scale}-xs};
\t--db-spacing-fixed-sm: #{$db-spacing-fixed-${scale}-s};
\t--db-spacing-fixed-md: #{$db-spacing-fixed-${scale}-m};
\t--db-spacing-fixed-lg: #{$db-spacing-fixed-${scale}-l};
\t--db-spacing-fixed-xl: #{$db-spacing-fixed-${scale}-xl};

\t--db-spacing-responsive-xs: #{$db-spacing-responsive-${scale}-mobile-xs};
\t--db-spacing-responsive-sm: #{$db-spacing-responsive-${scale}-mobile-s};
\t--db-spacing-responsive-md: #{$db-spacing-responsive-${scale}-mobile-m};
\t--db-spacing-responsive-lg: #{$db-spacing-responsive-${scale}-mobile-l};
\t--db-spacing-responsive-xl: #{$db-spacing-responsive-${scale}-mobile-xl};

\t--db-input-label-scale: ${inputCustomVars[scale].labelScale};
\t--db-input-focus-opacity: ${inputCustomVars[scale].focusOpacity};

\t@media only screen and (min-width: $db-screens-s) {
\t\t--db-spacing-responsive-xs: #{$db-spacing-responsive-${scale}-tablet-xs};
\t\t--db-spacing-responsive-sm: #{$db-spacing-responsive-${scale}-tablet-s};
\t\t--db-spacing-responsive-md: #{$db-spacing-responsive-${scale}-tablet-m};
\t\t--db-spacing-responsive-lg: #{$db-spacing-responsive-${scale}-tablet-l};
\t\t--db-spacing-responsive-xl: #{$db-spacing-responsive-${scale}-tablet-xl};
\t}

\t@media only screen and (min-width: $db-screens-m) {
\t\t--db-spacing-responsive-xs: #{$db-spacing-responsive-${scale}-desktop-xs};
\t\t--db-spacing-responsive-sm: #{$db-spacing-responsive-${scale}-desktop-s};
\t\t--db-spacing-responsive-md: #{$db-spacing-responsive-${scale}-desktop-m};
\t\t--db-spacing-responsive-lg: #{$db-spacing-responsive-${scale}-desktop-l};
\t\t--db-spacing-responsive-xl: #{$db-spacing-responsive-${scale}-desktop-xl};
\t}
}
`;
	}

	return allClasses;
};

module.exports = generateScaling;
