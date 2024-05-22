---
to: "<%= showcases ? `../../showcases/patternhub/components/${name}/[[...slug]].tsx` : null %>"
---
import CardNavigation from '../../components/card-navigation/card-navigation';
const FallbackPage = () => <CardNavigation />;
export default FallbackPage;
