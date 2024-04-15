const getActionBar = (mobile) =>
	`<div slot="action-bar${mobile ? '-mobile' : ''}">
				<db-button variant="ghost" icon="user">Profile</db-button>
				<db-button variant="ghost" icon="bell">Notification</db-button>
				<db-button variant="ghost" icon="question_mark_circle">Help</db-button>
			</div>`;

export default getActionBar;
