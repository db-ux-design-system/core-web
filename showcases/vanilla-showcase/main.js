import '../../packages/core/output/webcomponent/src/components/button/button';
import '../../packages/core/output/webcomponent/src/components/icon/icon';
import '../../packages/core/output/webcomponent/src/components/tab/tab';
import '../../packages/core/output/webcomponent/src/components/tab-bar/tab-bar';

const tabBar = [
	{
		name: 'tab-bar-2',
		label: '2-Tab1',
		active: true,
		children: 'Content 2-1'
	},
	{ name: 'tab-bar-2', label: '2-Tab2', content: 'Content 2-2' }
];

document.querySelector('#app').innerHTML = `
  <main>
      <h1>Vanilla</h1>
      <div style="display: flex; gap: 4px; align-items: center">
        <db-button variant="secondary">Test</db-button>
        <db-button variant="primary" text="Test" icon="account"></db-button>
        <db-icon icon="account"></db-icon>
      </div>

        <h2>TabBar</h2>
      <div style="display: flex; gap: 4px; flex-direction: column">
        <db-tab-bar>
          <db-tab name="tab-bar-1" label="Tab1">
            <strong>Content 1-1</strong>
          </db-tab>
          <db-tab name="tab-bar-1" label="Tab2" active={true}>
            Content 1-2
          </db-tab>
        </db-tab-bar>

        <db-tab-bar
          tabs="${JSON.stringify(tabBar).replace(/"/g, '&quot;')}"
        />
      </div>
  </main>
`;
