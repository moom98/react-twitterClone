import React from "react";
import TwitterIcon from "@mui/icons-material/Twitter";
import SidebarOption from "./SidebarOption";

const Sidebar = () => {
	return (
		<div className="sidebar">
			{/* twitter icon */}
			<TwitterIcon className="sidebar_twitterIcon" />

			{/* SidebarOption */}
			<SidebarOption />
		</div>
	);

	// tweet button
};

export default Sidebar;
