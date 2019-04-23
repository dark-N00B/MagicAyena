/* Magic Mirror Config Sample
 *
 * By Michael Teeuw http://michaelteeuw.nl
 * MIT Licensed.
 *
 * For more information how you can configurate this file
 * See https://github.com/MichMich/MagicMirror#configuration
 *
 */

var config = {
	address: "localhost", // Address to listen on, can be:
	                      // - "localhost", "127.0.0.1", "::1" to listen on loopback interface
	                      // - another specific IPv4/6 to listen on a specific interface
	                      // - "", "0.0.0.0", "::" to listen on any interface
	                      // Default, when address config is left out, is "localhost"
	port: 8080,
	ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1"], // Set [] to allow all IP addresses
	                                                       // or add a specific IPv4 of 192.168.1.5 :
	                                                       // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
	                                                       // or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
	                                                       // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

	language: "en",
	timeFormat: 12,
	units: "metric",

	modules: [
		{
			module: "alert",
		},
		{
			module: "updatenotification",
			position: "top_bar"
		},
		{
			module: "clock",
			position: "top_left"
		},
		{
			module: "calendar",
			header: "IN Holidays",
			position: "top_left",
			config: {
				count: 14,
				show: 1,
				calendars: [
					{
						symbol: "calendar-check",
						url: "https://calendar.google.com/calendar/ical/en.indian%23holiday%40group.v.calendar.google.com/public/basic.ics"
					}
				]
			}
		},
		{
			module: "compliments",
			position: "lower_third"
		},
		{
			module: "currentweather",
			position: "top_right",
			config: {
				location: "Siliguri",
				locationID: "1256525",  //ID from http://bulk.openweathermap.org/sample/; unzip the gz file and find your city
				appid: "284b943e90eafd38e48a5e5d6aeb32a1"
			}
		},
		//{
		//module: "weatherforecast",
		//	position: "top_right",
		//	header: "Weather Forecast",
		//	config: {
		//		location: "Siliguri",
		//		locationID: "1256525",  //ID from https://openweathermap.org/city
		//		appid: "284b943e90eafd38e48a5e5d6aeb32a1"
		//	}
		//},
		{
			module: "newsfeed",
			position: "bottom_left",
			config: {
				feeds: [
					{
						title: "Times Of India",
						url: "https://timesofindia.indiatimes.com/rssfeedstopstories.cms"
					}
				],
				showSourceTitle: true,
				showPublishDate: true
			}
		},
		//{
	//module: "MMM-Reddit",
	//position: "top_right",
	//config: {
	//	subreddit: ['funny', 'science', 'technology'],
	//	headerType: 'chained',
	//	displayType: 'headlines',
	//	count: 14,
	//	show: 1,
	//	width: 500,
	//	showScore: false,
	//	showSubreddit: false,
	//	colorText: false,
	//	showThumbnail: true,
	//}
//},
	
		]

};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}
