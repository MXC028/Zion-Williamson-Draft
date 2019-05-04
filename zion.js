
var teamsList = [
				/* Suns Chances */
				"Phoenix Suns", "Phoenix Suns", "Phoenix Suns", "Phoenix Suns", "Phoenix Suns", "Phoenix Suns", "Phoenix Suns", "Phoenix Suns", "Phoenix Suns", "Phoenix Suns", "Phoenix Suns", "Phoenix Suns", "Phoenix Suns", "Phoenix Suns",
				/* Knicks Chances */
				"New York Knicks", "New York Knicks", "New York Knicks", "New York Knicks", "New York Knicks", "New York Knicks", "New York Knicks", "New York Knicks", "New York Knicks", "New York Knicks", "New York Knicks", "New York Knicks", "New York Knicks", "New York Knicks",
				/* Cleveland Caveliers */
				"Cleveland Caveliers", "Cleveland Caveliers", "Cleveland Caveliers", "Cleveland Caveliers", "Cleveland Caveliers", "Cleveland Caveliers", "Cleveland Caveliers", "Cleveland Caveliers", "Cleveland Caveliers", "Cleveland Caveliers", "Cleveland Caveliers", "Cleveland Caveliers", "Cleveland Caveliers", "Cleveland Caveliers",
				/* Chicago Bulls */
				"Chicago Bulls", "Chicago Bulls", "Chicago Bulls", "Chicago Bulls", "Chicago Bulls", "Chicago Bulls", "Chicago Bulls", "Chicago Bulls", "Chicago Bulls", "Chicago Bulls", "Chicago Bulls", "Chicago Bulls",
				/* Atlanta Hawks */
				"Atlanta Hawks", "Atlanta Hawks", "Atlanta Hawks", "Atlanta Hawks", "Atlanta Hawks", "Atlanta Hawks", "Atlanta Hawks", "Atlanta Hawks", "Atlanta Hawks", "Atlanta Hawks",
				/* Dallas Mavericks */
				"Dallas Mavericks", "Dallas Mavericks", "Dallas Mavericks", "Dallas Mavericks", "Dallas Mavericks", "Dallas Mavericks",
				/* Memphis Grizzlies */
				"Memphis Grizzlies", "Memphis Grizzlies", "Memphis Grizzlies", "Memphis Grizzlies", "Memphis Grizzlies", "Memphis Grizzlies", 
				/* Wahington Wizards */
				"Washington Wizards", "Washington Wizards", "Washington Wizards", "Washington Wizards", "Washington Wizards", "Washington Wizards", "Washington Wizards", "Washington Wizards", "Washington Wizards",
				/* New Orleans Pelicans */
				"New Orleans Pelicans", "New Orleans Pelicans", "New Orleans Pelicans", "New Orleans Pelicans", "New Orleans Pelicans", "New Orleans Pelicans",
				/* Minnesota Timberwolves */
				"Minnesota Timberwolves", "Minnesota Timberwolves", "Minnesota Timberwolves",
				/* Los Angeles Lakers */
				"Los Angeles Lakers", "Los Angeles Lakers", 
				/* Charlotte Hornets */
				"Charlotte Hornets", 
				/* Miami Heat */
				"Miami Heat",
				/*Sacramento Kings */
				"Sacramento Kings"
				];

				var rand = teamsList[Math.floor(Math.random() * teamsList.length)];
				
				/*
				function pic() {
					var pic = "https://i.imgur.com/2UF2fDV.jpg";
					document.getElementById('zionPic').src = pic.replace('90x90', '225x225');
					document.getElementById('zionPic').style.display = "block";
				};
				*/

				function teamPicture() {
					if (rand === "Phoenix Suns"){
						var suns = "https://i.imgur.com/Q6t69Ic.png";

						document.getElementById('suns').style.display = "block";
					} else if (rand === "New York Knicks") {
						var knicks = "https://i.imgur.com/fxtnbGT.png";
						document.getElementById('knicks').style.display = "block";
					} else if (rand === "Cleveland Caveliers") {
						var cavs = "https://i.imgur.com/Z4C5T4m.png";
						document.getElementById('cavs').style.display = "block";
					} else if (rand === "Chicago Bulls") {
						var bulls = "https://i.imgur.com/JFMUJmT.png";
						document.getElementById('bulls').style.display = "block";
					} else if(rand === "Atlanta Hawks") {
						var hawks ="https://i.imgur.com/sJafUI6.png";
						document.getElementById('hawks').style.display = "block";
					} else if (rand === "Dallas Mavericks") {
						var mavericks = "https://i.imgur.com/Adae2YD.png";
						document.getElementById('mavericks').style.display = "block";
					} else if (rand === "Memphis Grizzlies") {
						var grizzlies = "https://i.imgur.com/2kzcRdy.png";
						document.getElementById('grizzlies').style.display = "block";
					} else if (rand === "Washington Wizards") {
						var wizards = "https://i.imgur.com/tNvsx6G.png";
						document.getElementById('wizards').style.display = "block";
					} else if (rand === "New Orleans Pelicans") {
						var pelicans = "https://i.imgur.com/JGqrjCa.png";
						document.getElementById('pelicans').style.display = "block";
					} else if (rand === "Los Angeles Lakers") {
						var lakers = "https://i.imgur.com/v6dPmjN.png";
						document.getElementById('lakers').style.display = "block";
					} else if (rand === "Charlotte Hornets") {
						var hornets = "https://i.imgur.com/qxMzONV.png";
						document.getElementById('hornets').style.display = "block";
					} else if (rand === "Minnesota Timberwolves") {
						var timberwolves = "https://i.imgur.com/vVURI5p.png";
						document.getElementById('timberwolves').style.display = "block";
					} else if (rand === "Sacramento Kings") {
						var kings = "https://i.imgur.com/R4fESgj.png";
						document.getElementById('kings').style.display = "block";
					} else if (rand === "Miami Heat") {
						var heat = "https://i.imgur.com/D5nzdIy.png";
						document.getElementById('heat').style.display = "block";
					}

					else {
						return none;
					};
				};