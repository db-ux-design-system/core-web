const getActionBar = (mobile) =>
	`<div slot="action-bar${mobile ? '-mobile' : ''}">
				<db-button variant="ghost" icon="account">Profile</db-button>
				<db-button variant="ghost" icon="alert">Notification</db-button>
				<db-button variant="ghost" icon="help">Help</db-button>
			</div>`;

export default getActionBar;
