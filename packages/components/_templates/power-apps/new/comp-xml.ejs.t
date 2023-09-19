---
to: ../../output/power-apps/<%= name %>/DB<%= h.capitalize(name) %>/ControlManifest.Input.xml
force: true
---
<% if(typeof props !== 'undefined'){ locals.props = JSON.parse(Buffer.from(props, 'base64').toString('ascii')) }  -%>
<?xml version="1.0" encoding="utf-8" ?>
<manifest>
    <control namespace="DBUI" constructor="DB<%= h.capitalize(name) %>" version="<%= version %>"
             display-name-key="DB<%= h.capitalize(name) %>_Display_Key" description-key="DB<%= h.capitalize(name) %>_Desc_Key"
             control-type="standard">

        <%  if(locals.props){ locals.props.forEach((prop)=>{ -%>
        <property name="<%= prop.powerAppsName || prop.name %>" display-name-key="<%= prop.name %>_Display_Key"

                  description-key="<%= prop.name %>_Desc_Key"

                  <% if(typeof prop.onChange !== 'undefined' && prop.onChange){ -%>
                  usage="bound"
                  <% } else { -%>
                  usage="input"
				  <% } -%>

                  <% if(typeof prop.required !== 'undefined' && prop.required){ -%>
                  required="true"
                  <% } else { -%>
                  required="false"
				  <% } -%>

				  <% if(typeof prop.defaultValue !== 'undefined' && prop.defaultValue){ -%>
                  default-value="<%= prop.defaultValue %>"
                  <% } -%>

				  <% if(typeof prop.type !== 'undefined' && prop.type !== "Icon" && prop.type !== "DefaultVariant"){ -%>
                  of-type="<%= prop.type %>"
                  <% } else if(prop.type === "Icon"){ -%>
                  of-type="Enum">
                  <value name="1st class" display-name-key="1st class">1st_class</value>
					<value name="2nd class" display-name-key="2nd class">2nd_class</value>
					<value name="Account" display-name-key="Account">account</value>
					<value name="Add" display-name-key="Add">add</value>
					<value name="Add Circle" display-name-key="Add Circle">add_circle</value>
					<value name="Add Link" display-name-key="Add Link">add_link</value>
					<value name="Air Condition" display-name-key="Air Condition">air_condition</value>
					<value name="Airplane" display-name-key="Airplane">airplane</value>
					<value name="Airplane Inverted" display-name-key="Airplane Inverted">airplane_inverted</value>
					<value name="Aisle" display-name-key="Aisle">aisle</value>
					<value name="Aisle Not Available" display-name-key="Aisle Not Available">aisle_not_available</value>
					<value name="Alarm" display-name-key="Alarm">alarm</value>
					<value name="Alarm Add" display-name-key="Alarm Add">alarm_add</value>
					<value name="Alert" display-name-key="Alert">alert</value>
					<value name="Alert Off" display-name-key="Alert Off">alert_off</value>
					<value name="Alternative Connection" display-name-key="Alternative Connection">alternative_connection</value>
					<value name="Arrow Back" display-name-key="Arrow Back">arrow_back</value>
					<value name="Arrow Down" display-name-key="Arrow Down">arrow_down</value>
					<value name="Arrow Forward" display-name-key="Arrow Forward">arrow_forward</value>
					<value name="Arrow Up" display-name-key="Arrow Up">arrow_up</value>
					<value name="Attachment" display-name-key="Attachment">attachment</value>
					<value name="Augmented Reality" display-name-key="Augmented Reality">augmented_reality</value>
					<value name="Bahnbonus" display-name-key="Bahnbonus">bahnbonus</value>
					<value name="Bahnbonus Card" display-name-key="Bahnbonus Card">bahnbonus_card</value>
					<value name="Bahncard" display-name-key="Bahncard">bahncard</value>
					<value name="Bed" display-name-key="Bed">bed</value>
					<value name="Best Price" display-name-key="Best Price">best_price</value>
					<value name="Bicycle" display-name-key="Bicycle">bicycle</value>
					<value name="Bicycle Inverted" display-name-key="Bicycle Inverted">bicycle_inverted</value>
					<value name="Bicycle Trailer" display-name-key="Bicycle Trailer">bicycle_trailer</value>
					<value name="Bicycle Trailer Inverted" display-name-key="Bicycle Trailer Inverted">bicycle_trailer_inverted</value>
					<value name="Block" display-name-key="Block">block</value>
					<value name="Booking" display-name-key="Booking">booking</value>
					<value name="Bookmark" display-name-key="Bookmark">bookmark</value>
					<value name="Breakfast" display-name-key="Breakfast">breakfast</value>
					<value name="Bug" display-name-key="Bug">bug</value>
					<value name="Buggy" display-name-key="Buggy">buggy</value>
					<value name="Build" display-name-key="Build">build</value>
					<value name="Calendar" display-name-key="Calendar">calendar</value>
					<value name="Call" display-name-key="Call">call</value>
					<value name="Call A Bike" display-name-key="Call A Bike">call_a_bike</value>
					<value name="Call A Bike Inverted" display-name-key="Call A Bike Inverted">call_a_bike_inverted</value>
					<value name="Camera" display-name-key="Camera">camera</value>
					<value name="Cancel" display-name-key="Cancel">cancel</value>
					<value name="Capacity Indicator" display-name-key="Capacity Indicator">capacity_indicator</value>
					<value name="Capacity Indicator Fully Booked" display-name-key="Capacity Indicator Fully Booked">capacity_indicator_fully_booked</value>
					<value name="Capacity Indicator High" display-name-key="Capacity Indicator High">capacity_indicator_high</value>
					<value name="Capacity Indicator Low" display-name-key="Capacity Indicator Low">capacity_indicator_low</value>
					<value name="Car" display-name-key="Car">car</value>
					<value name="Car Inverted" display-name-key="Car Inverted">car_inverted</value>
					<value name="Car Sequence" display-name-key="Car Sequence">car_sequence</value>
					<value name="Carsharing" display-name-key="Carsharing">carsharing</value>
					<value name="Carsharing Inverted" display-name-key="Carsharing Inverted">carsharing_inverted</value>
					<value name="Cash" display-name-key="Cash">cash</value>
					<value name="Chat" display-name-key="Chat">chat</value>
					<value name="Check Circle" display-name-key="Check Circle">check_circle</value>
					<value name="Chevron Left" display-name-key="Chevron Left">chevron_left</value>
					<value name="Chevron Right" display-name-key="Chevron Right">chevron_right</value>
					<value name="Childrens Compartment" display-name-key="Childrens Compartment">childrens_compartment</value>
					<value name="Close" display-name-key="Close">close</value>
					<value name="Clothing Hanger" display-name-key="Clothing Hanger">clothing_hanger</value>
					<value name="Cloud" display-name-key="Cloud">cloud</value>
					<value name="Cloud Download" display-name-key="Cloud Download">cloud_download</value>
					<value name="Cloud Upload" display-name-key="Cloud Upload">cloud_upload</value>
					<value name="Coffee Cup" display-name-key="Coffee Cup">coffee_cup</value>
					<value name="Commuter Ticket" display-name-key="Commuter Ticket">commuter_ticket</value>
					<value name="Compass" display-name-key="Compass">compass</value>
					<value name="Conversation" display-name-key="Conversation">conversation</value>
					<value name="Copy" display-name-key="Copy">copy</value>
					<value name="Couchette" display-name-key="Couchette">couchette</value>
					<value name="Credit Card" display-name-key="Credit Card">credit_card</value>
					<value name="Dashboard" display-name-key="Dashboard">dashboard</value>
					<value name="Database" display-name-key="Database">database</value>
					<value name="Day" display-name-key="Day">day</value>
					<value name="Delete" display-name-key="Delete">delete</value>
					<value name="Destination" display-name-key="Destination">destination</value>
					<value name="Discount" display-name-key="Discount">discount</value>
					<value name="Document" display-name-key="Document">document</value>
					<value name="Done" display-name-key="Done">done</value>
					<value name="Download" display-name-key="Download">download</value>
					<value name="Drag And Drop" display-name-key="Drag And Drop">drag_and_drop</value>
					<value name="Drink" display-name-key="Drink">drink</value>
					<value name="Edit" display-name-key="Edit">edit</value>
					<value name="Elderly" display-name-key="Elderly">elderly</value>
					<value name="Electric Locomotive" display-name-key="Electric Locomotive">electric_locomotive</value>
					<value name="Electric Locomotive Inverted" display-name-key="Electric Locomotive Inverted">electric_locomotive_inverted</value>
					<value name="Electric Scooter" display-name-key="Electric Scooter">electric_scooter</value>
					<value name="Electric Scooter Inverted" display-name-key="Electric Scooter Inverted">electric_scooter_inverted</value>
					<value name="Entry Aid" display-name-key="Entry Aid">entry_aid</value>
					<value name="Environmental Mobility Check" display-name-key="Environmental Mobility Check">environmental_mobility_check</value>
					<value name="Error" display-name-key="Error">error</value>
					<value name="Ev Car" display-name-key="Ev Car">ev_car</value>
					<value name="Ev Car Inverted" display-name-key="Ev Car Inverted">ev_car_inverted</value>
					<value name="Expand Less" display-name-key="Expand Less">expand_less</value>
					<value name="Expand More" display-name-key="Expand More">expand_more</value>
					<value name="Face Neutral" display-name-key="Face Neutral">face_neutral</value>
					<value name="Face Sad" display-name-key="Face Sad">face_sad</value>
					<value name="Face Smiling" display-name-key="Face Smiling">face_smiling</value>
					<value name="Fast Backward 10" display-name-key="Fast Backward 10">fast_backward_10</value>
					<value name="Fast Backward 30" display-name-key="Fast Backward 30">fast_backward_30</value>
					<value name="Fast Backward Empty" display-name-key="Fast Backward Empty">fast_backward_empty</value>
					<value name="Fast Forward 10" display-name-key="Fast Forward 10">fast_forward_10</value>
					<value name="Fast Forward 30" display-name-key="Fast Forward 30">fast_forward_30</value>
					<value name="Fast Forward Empty" display-name-key="Fast Forward Empty">fast_forward_empty</value>
					<value name="Fax" display-name-key="Fax">fax</value>
					<value name="Feedback" display-name-key="Feedback">feedback</value>
					<value name="Ferry" display-name-key="Ferry">ferry</value>
					<value name="Ferry Inverted" display-name-key="Ferry Inverted">ferry_inverted</value>
					<value name="Filter" display-name-key="Filter">filter</value>
					<value name="Fingerprint" display-name-key="Fingerprint">fingerprint</value>
					<value name="Folder" display-name-key="Folder">folder</value>
					<value name="Folder Open" display-name-key="Folder Open">folder_open</value>
					<value name="Fullscreen" display-name-key="Fullscreen">fullscreen</value>
					<value name="Fullscreen Exit" display-name-key="Fullscreen Exit">fullscreen_exit</value>
					<value name="Generic Card" display-name-key="Generic Card">generic_card</value>
					<value name="Giftcard" display-name-key="Giftcard">giftcard</value>
					<value name="Gps" display-name-key="Gps">gps</value>
					<value name="Gps North" display-name-key="Gps North">gps_north</value>
					<value name="Grid View" display-name-key="Grid View">grid_view</value>
					<value name="Handcart" display-name-key="Handcart">handcart</value>
					<value name="Handcart Inverted" display-name-key="Handcart Inverted">handcart_inverted</value>
					<value name="Handicapped" display-name-key="Handicapped">handicapped</value>
					<value name="Hearing" display-name-key="Hearing">hearing</value>
					<value name="Hearing Disabled" display-name-key="Hearing Disabled">hearing_disabled</value>
					<value name="Heart" display-name-key="Heart">heart</value>
					<value name="Help" display-name-key="Help">help</value>
					<value name="Home" display-name-key="Home">home</value>
					<value name="Hydrogen" display-name-key="Hydrogen">hydrogen</value>
					<value name="Ice" display-name-key="Ice">ice</value>
					<value name="Ice Inverted" display-name-key="Ice Inverted">ice_inverted</value>
					<value name="Ice Side View" display-name-key="Ice Side View">ice_side_view</value>
					<value name="Image" display-name-key="Image">image</value>
					<value name="Info" display-name-key="Info">info</value>
					<value name="Intercity Train" display-name-key="Intercity Train">intercity_train</value>
					<value name="Intercity Train Inverted" display-name-key="Intercity Train Inverted">intercity_train_inverted</value>
					<value name="Intermediary Stop" display-name-key="Intermediary Stop">intermediary_stop</value>
					<value name="Key" display-name-key="Key">key</value>
					<value name="Komfort Check In" display-name-key="Komfort Check In">komfort_check_in</value>
					<value name="Komfort Check In Check" display-name-key="Komfort Check In Check">komfort_check_in_check</value>
					<value name="Komfort Check In Circle" display-name-key="Komfort Check In Circle">komfort_check_in_circle</value>
					<value name="Legal" display-name-key="Legal">legal</value>
					<value name="Lightbulb" display-name-key="Lightbulb">lightbulb</value>
					<value name="Link" display-name-key="Link">link</value>
					<value name="Link External" display-name-key="Link External">link_external</value>
					<value name="List" display-name-key="List">list</value>
					<value name="Local Bus" display-name-key="Local Bus">local_bus</value>
					<value name="Local Bus Inverted" display-name-key="Local Bus Inverted">local_bus_inverted</value>
					<value name="Local Train" display-name-key="Local Train">local_train</value>
					<value name="Local Train Inverted" display-name-key="Local Train Inverted">local_train_inverted</value>
					<value name="Lock Close" display-name-key="Lock Close">lock_close</value>
					<value name="Lock Open" display-name-key="Lock Open">lock_open</value>
					<value name="Log Out" display-name-key="Log Out">log_out</value>
					<value name="Logbook" display-name-key="Logbook">logbook</value>
					<value name="Logo" display-name-key="Logo">logo</value>
					<value name="Long Distance Bus" display-name-key="Long Distance Bus">long_distance_bus</value>
					<value name="Long Distance Bus Inverted" display-name-key="Long Distance Bus Inverted">long_distance_bus_inverted</value>
					<value name="Luggage Compartment" display-name-key="Luggage Compartment">luggage_compartment</value>
					<value name="Luggage Rack" display-name-key="Luggage Rack">luggage_rack</value>
					<value name="Mail" display-name-key="Mail">mail</value>
					<value name="Map" display-name-key="Map">map</value>
					<value name="Marketplace" display-name-key="Marketplace">marketplace</value>
					<value name="Mask" display-name-key="Mask">mask</value>
					<value name="Medical" display-name-key="Medical">medical</value>
					<value name="Menu" display-name-key="Menu">menu</value>
					<value name="Microphone" display-name-key="Microphone">microphone</value>
					<value name="Minus" display-name-key="Minus">minus</value>
					<value name="Mixed Class" display-name-key="Mixed Class">mixed_class</value>
					<value name="Mobile Off" display-name-key="Mobile Off">mobile_off</value>
					<value name="Mobile Phone" display-name-key="Mobile Phone">mobile_phone</value>
					<value name="Monochrome Capacity Indicator High" display-name-key="Monochrome Capacity Indicator High">monochrome_capacity_indicator_high</value>
					<value name="Monochrome Capacity Indicator Low" display-name-key="Monochrome Capacity Indicator Low">monochrome_capacity_indicator_low</value>
					<value name="Monochrome Capacity Indicator Moderate" display-name-key="Monochrome Capacity Indicator Moderate">monochrome_capacity_indicator_moderate</value>
					<value name="More Horizontal" display-name-key="More Horizontal">more_horizontal</value>
					<value name="More Vertical" display-name-key="More Vertical">more_vertical</value>
					<value name="Multiple Cards" display-name-key="Multiple Cards">multiple_cards</value>
					<value name="Multiple Passenger" display-name-key="Multiple Passenger">multiple_passenger</value>
					<value name="My Travel" display-name-key="My Travel">my_travel</value>
					<value name="Night" display-name-key="Night">night</value>
					<value name="No Smoking" display-name-key="No Smoking">no_smoking</value>
					<value name="Notify" display-name-key="Notify">notify</value>
					<value name="Notify Cutoff" display-name-key="Notify Cutoff">notify_cutoff</value>
					<value name="Outward Journey" display-name-key="Outward Journey">outward_journey</value>
					<value name="Parent Child Compartment" display-name-key="Parent Child Compartment">parent_child_compartment</value>
					<value name="Parking" display-name-key="Parking">parking</value>
					<value name="Pause" display-name-key="Pause">pause</value>
					<value name="Person With Cane" display-name-key="Person With Cane">person_with_cane</value>
					<value name="Person With Rollator" display-name-key="Person With Rollator">person_with_rollator</value>
					<value name="Pin" display-name-key="Pin">pin</value>
					<value name="Place" display-name-key="Place">place</value>
					<value name="Platform" display-name-key="Platform">platform</value>
					<value name="Play" display-name-key="Play">play</value>
					<value name="Playground" display-name-key="Playground">playground</value>
					<value name="Power Outlet" display-name-key="Power Outlet">power_outlet</value>
					<value name="Print" display-name-key="Print">print</value>
					<value name="Priority" display-name-key="Priority">priority</value>
					<value name="Qr Code" display-name-key="Qr Code">qr_code</value>
					<value name="Question" display-name-key="Question">question</value>
					<value name="Quiet Zone" display-name-key="Quiet Zone">quiet_zone</value>
					<value name="Rail And Fly" display-name-key="Rail And Fly">rail_and_fly</value>
					<value name="Railroad Car" display-name-key="Railroad Car">railroad_car</value>
					<value name="Receive Item" display-name-key="Receive Item">receive_item</value>
					<value name="Refresh" display-name-key="Refresh">refresh</value>
					<value name="Remove" display-name-key="Remove">remove</value>
					<value name="Reservation" display-name-key="Reservation">reservation</value>
					<value name="Resize" display-name-key="Resize">resize</value>
					<value name="Restaurant" display-name-key="Restaurant">restaurant</value>
					<value name="Restricted Mobility Toilet" display-name-key="Restricted Mobility Toilet">restricted_mobility_toilet</value>
					<value name="Return Journey" display-name-key="Return Journey">return_journey</value>
					<value name="Round Trip" display-name-key="Round Trip">round_trip</value>
					<value name="S Bahn" display-name-key="S-Bahn">s-bahn</value>
					<value name="S Bahn Inverted" display-name-key="S-Bahn Inverted">s-bahn-inverted</value>
					<value name="Save" display-name-key="Save">save</value>
					<value name="Schedule" display-name-key="Schedule">schedule</value>
					<value name="Scooter" display-name-key="Scooter">scooter</value>
					<value name="Scooter Inverted" display-name-key="Scooter Inverted">scooter_inverted</value>
					<value name="Search" display-name-key="Search">search</value>
					<value name="Send" display-name-key="Send">send</value>
					<value name="Sepa" display-name-key="Sepa">sepa</value>
					<value name="Set Position" display-name-key="Set Position">set_position</value>
					<value name="Settings" display-name-key="Settings">settings</value>
					<value name="Sev" display-name-key="Sev">sev</value>
					<value name="Share" display-name-key="Share">share</value>
					<value name="Share Item" display-name-key="Share Item">share_item</value>
					<value name="Shopping Bag" display-name-key="Shopping Bag">shopping_bag</value>
					<value name="Shopping Basket" display-name-key="Shopping Basket">shopping_basket</value>
					<value name="Shopping Basket Disabled" display-name-key="Shopping Basket Disabled">shopping_basket_disabled</value>
					<value name="Shopping Cart" display-name-key="Shopping Cart">shopping_cart</value>
					<value name="Shopping Cart Disabled" display-name-key="Shopping Cart Disabled">shopping_cart_disabled</value>
					<value name="Shower" display-name-key="Shower">shower</value>
					<value name="Shower Men" display-name-key="Shower Men">shower_men</value>
					<value name="Shower Women" display-name-key="Shower Women">shower_women</value>
					<value name="Single Trip" display-name-key="Single Trip">single_trip</value>
					<value name="Sink" display-name-key="Sink">sink</value>
					<value name="Skip Backward" display-name-key="Skip Backward">skip_backward</value>
					<value name="Skip Forward" display-name-key="Skip Forward">skip_forward</value>
					<value name="Sort Down" display-name-key="Sort Down">sort_down</value>
					<value name="Sort Up" display-name-key="Sort Up">sort_up</value>
					<value name="Speedboat" display-name-key="Speedboat">speedboat</value>
					<value name="Speedboat Inverted" display-name-key="Speedboat Inverted">speedboat_inverted</value>
					<value name="Sprinter" display-name-key="Sprinter">sprinter</value>
					<value name="Standing Room" display-name-key="Standing Room">standing_room</value>
					<value name="Star" display-name-key="Star">star</value>
					<value name="Start" display-name-key="Start">start</value>
					<value name="Station" display-name-key="Station">station</value>
					<value name="Steppless Entry" display-name-key="Steppless Entry">steppless_entry</value>
					<value name="Stop" display-name-key="Stop">stop</value>
					<value name="Stop Sign" display-name-key="Stop Sign">stop_sign</value>
					<value name="Subtitles" display-name-key="Subtitles">subtitles</value>
					<value name="Subway" display-name-key="Subway">subway</value>
					<value name="Subway Inverted" display-name-key="Subway Inverted">subway_inverted</value>
					<value name="Support Dog" display-name-key="Support Dog">support_dog</value>
					<value name="Swap Horizontal" display-name-key="Swap Horizontal">swap_horizontal</value>
					<value name="Swap Vertical" display-name-key="Swap Vertical">swap_vertical</value>
					<value name="Table" display-name-key="Table">table</value>
					<value name="Taxi" display-name-key="Taxi">taxi</value>
					<value name="Taxi Inverted" display-name-key="Taxi Inverted">taxi_inverted</value>
					<value name="Thumb Up" display-name-key="Thumb Up">thumb_up</value>
					<value name="Thumb Up Down" display-name-key="Thumb Up Down">thumb_up_down</value>
					<value name="Ticket" display-name-key="Ticket">ticket</value>
					<value name="Ticket Discount" display-name-key="Ticket Discount">ticket_discount</value>
					<value name="Ticket Multiple" display-name-key="Ticket Multiple">ticket_multiple</value>
					<value name="Ticket Subscription" display-name-key="Ticket Subscription">ticket_subscription</value>
					<value name="Time Outward Journey" display-name-key="Time Outward Journey">time_outward_journey</value>
					<value name="Time Return Journey" display-name-key="Time Return Journey">time_return_journey</value>
					<value name="Timetable" display-name-key="Timetable">timetable</value>
					<value name="Train And Car" display-name-key="Train And Car">train_and_car</value>
					<value name="Train And Car Inverted" display-name-key="Train And Car Inverted">train_and_car_inverted</value>
					<value name="Train Station" display-name-key="Train Station">train_station</value>
					<value name="Tram" display-name-key="Tram">tram</value>
					<value name="Tram Inverted" display-name-key="Tram Inverted">tram_inverted</value>
					<value name="Translation" display-name-key="Translation">translation</value>
					<value name="Travel Insurance" display-name-key="Travel Insurance">travel_insurance</value>
					<value name="Undo" display-name-key="Undo">undo</value>
					<value name="Upload" display-name-key="Upload">upload</value>
					<value name="Visibility" display-name-key="Visibility">visibility</value>
					<value name="Visibility Off" display-name-key="Visibility Off">visibility_off</value>
					<value name="Volume Down" display-name-key="Volume Down">volume_down</value>
					<value name="Volume Mute" display-name-key="Volume Mute">volume_mute</value>
					<value name="Volume Off" display-name-key="Volume Off">volume_off</value>
					<value name="Volume Up" display-name-key="Volume Up">volume_up</value>
					<value name="Voucher" display-name-key="Voucher">voucher</value>
					<value name="Walking" display-name-key="Walking">walking</value>
					<value name="Walking Fast" display-name-key="Walking Fast">walking_fast</value>
					<value name="Walking Fast Inverted" display-name-key="Walking Fast Inverted">walking_fast_inverted</value>
					<value name="Walking Inverted" display-name-key="Walking Inverted">walking_inverted</value>
					<value name="Warning" display-name-key="Warning">warning</value>
					<value name="Wc" display-name-key="Wc">wc</value>
					<value name="Wc Men" display-name-key="Wc Men">wc_men</value>
					<value name="Wc Sign" display-name-key="Wc Sign">wc_sign</value>
					<value name="Wc Women" display-name-key="Wc Women">wc_women</value>
					<value name="Website" display-name-key="Website">website</value>
					<value name="Wifi" display-name-key="Wifi">wifi</value>
					<value name="Wifi Off" display-name-key="Wifi Off">wifi_off</value>
					<value name="Window" display-name-key="Window">window</value>
					<value name="Zoom In" display-name-key="Zoom In">zoom_in</value>
					<value name="Zoom Out" display-name-key="Zoom Out">zoom_out</value>
                  <!-- TODO: Add other icons here -->
                  </property>
                  <% } else if(prop.type === "DefaultVariant"){ -%>
                  of-type="Enum">
                  <value name="Adaptive" display-name-key="Adaptive">adaptive</value>
                  <value name="Critical" display-name-key="Critical">critical</value>
                  <value name="Informational" display-name-key="Informational">informational</value>
                  <value name="Successful" display-name-key="Successful">successful</value>
                  <value name="Warning" display-name-key="Warning">warning</value>
                  </property>
				  <% } -%>

                  <% if(prop.type === "Enum" && prop.values && prop.values.length>0 ){ -%>
                  >
                    <% prop.values.forEach((value)=>{ -%>
                        <value name="<%= value.name %>" display-name-key="<%= value.key %>"><%= value.value %></value>
                    <% }); -%>
                        </property>
                  <% } else if (prop.type !== "Icon" && prop.type !== "DefaultVariant"){ -%>
                        />
                  <% } -%>
        <% })} -%>


		<% if(typeof hasOnClick !== 'undefined' && hasOnClick){   -%>
		<property name="clicked" display-name-key="clicked_Display_Key"
		description-key="clicked_Desc_Key" of-type="TwoOptions" usage="bound" required="false"/>
		<% } -%>

        <resources>
            <code path="index.ts" order="1"/>
            <resx path="strings/DB<%= h.capitalize(name) %>.1031.resx" version="<%= version %>" />
            <resx path="strings/DB<%= h.capitalize(name) %>.1033.resx" version="<%= version %>" />
        </resources>
    </control>
</manifest>

