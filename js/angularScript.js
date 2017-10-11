/// <reference patha="ajs/angular.min.js" />

var BG_resume = angular
					.module("BGresume", ['ngRoute'])
					.directive('ngPreloader', ngPreloader)
					.directive('ngPortfolio', ngPortfolio)
					.directive('ngScrollbar', ngScrollbar)
					.value("sociallinks", [{"id":1,"title":"FaceBook","link":"https:\/\/www.facebook.com\/babuguru5","icon":"fa fa-facebook","orders":2,"created_at":"-0001-11-30 00:00:00","updated_at":"2017-04-29 07:09:38","status":1},{"id":2,"title":"Google+","link":"https:\/\/plus.google.com\/u\/0\/114979168125161604161","icon":"fa fa-google-plus","orders":1,"created_at":"-0001-11-30 00:00:00","updated_at":"2017-04-29 07:09:51","status":1},{"id":3,"title":"Linkedin","link":"https:\/\/www.linkedin.com\/in\/babu-guru-946415136\/","icon":"fa fa-linkedin","orders":3,"created_at":"-0001-11-30 00:00:00","updated_at":"2017-04-29 07:10:02","status":1}])
					.filter('capitalize', function() {
						return function(input, all) {
						  var reg = (all) ? /([^\W_]+[^\s-]*) */g : /([^\W_]+[^\s-]*)/;
						  return (!!input) ? input.replace(reg, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();}) : '';
						}
					})
					.config(function($routeProvider,$locationProvider) {				
						$routeProvider
							.when("/home", {
								controller:'home',
								templateUrl:'pages/home.html',
								title: 'Home'
								//Data: PersonalDetails()
							})
							.when("/resume", {
								controller:'resume',
								templateUrl:'pages/resume.html',
								title: 'Resume'
							})
							.when("/portfolio", {
								controller:'portfolio',
								templateUrl:'pages/portfolio.html',
								title: 'Portfolio'
							})
							.when("/portfolio/:id", {
								controller:'portfolio-detail',
								templateUrl:'pages/portfolio-detail.html',
								title: 'Portfolio'
							})
							.when("/facts", {
								controller:'facts',
								templateUrl:'pages/facts.html',
								title: 'Facts'
							})
							.when("/contact", {
								controller:'contact',
								templateUrl:'pages/contact.html',
								title: 'Contact'
							})
							.otherwise({
								redirectTo:'/home'
							});
							$locationProvider.html5Mode(true);
					})
					.run(['$rootScope', function($rootScope) {
						$rootScope.$on('$routeChangeSuccess', function (event, current, previous) {
							$rootScope.$route = current.$$route;
						});
					}])
					.controller("profile", function($scope,sociallinks){
						$scope.Data = PersonalDetails();
						$scope.socilalinks = sociallinks;
						$scope.profilepage = 'pages/profile.html';
					})
					.controller("sidebar", function($scope){
						var menulist = [
								{ controller : 'home', title : 'About Me', icon : 'fa fa-user' },
								{ controller : 'resume', title : 'Resume', icon : 'fa fa-black-tie' },
								{ controller : 'portfolio', title : 'Portfolio', icon : 'fa fa-th-large' },
								{ controller : 'facts', title : 'Facts', icon : 'fa fa-address-book' },
								{ controller : 'contact', title : 'Contact', icon : 'fa fa-address-card' }
							];
						$scope.menupage = 'pages/menulist.html';
						$scope.menulist = menulist;
					})
					.controller("home", function($scope, $sce){
						$scope.objHeading = "About Me";
						$scope.objContent = $sce.trustAsHtml("I'm having a great passion towards software development field. Specializes in front-end development, responsive builds, user experience and PHP frameworks!. I like to handle technical challenges and doing anything and everything relating to learning new technologies. <br/><br/> I'm constantly learning web technologies and other design & development related topics, currently playing around with AngularJS and Laraval. <br/><br/> Seeking to be inspired, to envision the unlikely, to work hard for things that are worth it, and to be surrounded by those who bring out the best in me. <br/><br/> In my free time, I loves playing games like it's my likfe, going for movies with friends, and hearing songs with surround sound effect.doing anything and everything relating to learning new technologies.");
						var areainterest = [{"id":1,"title":"Static Website","content":"I prefer to develop with reusability, scalability & maintainability. Also, i have developed product showcase website with a lot easier to maintain by the client without the developer.","icon":"fa fa-suitcase","orders":1,"created_at":"-0001-11-30 00:00:00","updated_at":"2017-04-23 18:43:30","status":1},{"id":2,"title":"Custom Application","content":"A custom application like Office Mangement Tool, Basic CRM, Survey System, Online Exam Portal, Hotel Management System, Payroll Management System, Billing system and more.","icon":"fa fa-cubes","orders":null,"created_at":"-0001-11-30 00:00:00","updated_at":"-0001-11-30 00:00:00","status":1},{"id":3,"title":"Ecommerce \/ Online shop","content":"My first project is web based eCommerce portal. I worked many eCommerce projects with options like Tracking Order, Order management, Custom Header & footer, Coupon & Voucher, Offers and more.","icon":"fa fa-bullhorn","orders":null,"created_at":"-0001-11-30 00:00:00","updated_at":"-0001-11-30 00:00:00","status":1},{"id":4,"title":"Photoshop Design","content":"I use to design a website Mock-up, Website images (Slider images or Other images), Flyer & Brochures and Banners.","icon":"fa fa-image","orders":null,"created_at":"-0001-11-30 00:00:00","updated_at":"-0001-11-30 00:00:00","status":1}];
						$scope.areaintersetData = areainterest;
						$scope.Data = PersonalDetails();
					})
					.controller("resume", function($scope,$sce){
						var employers = [{"id":1,"company":"Touchmark Media","location":"Chennai","datefrom":"2015-09-01","dateto":"2016-02-06","position":"Application Developer","responsibility":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nec nulla sagittis, scelerisque mi vitae, congue turpis.","logo":"","createdon":"2017-04-06 00:00:00","updated_at":"-0001-11-30 00:00:00","status":1},{"id":2,"company":"Binary Resonance Pvt Ltd","location":"Chennai","datefrom":"2016-02-15","dateto":"2016-07-16","position":"PHP Developer","responsibility":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nec nulla sagittis, scelerisque mi vitae, congue turpis.","logo":"","createdon":"2017-04-06 00:00:00","updated_at":"-0001-11-30 00:00:00","status":1},{"id":3,"company":"KATC Autotrans Pvt Ltd","location":"Singapore","datefrom":"2016-07-18","dateto":"2016-12-10","position":"Software Developer \/ Technician","responsibility":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nec nulla sagittis, scelerisque mi vitae, congue turpis.","logo":"","createdon":"2017-04-06 00:00:00","updated_at":"-0001-11-30 00:00:00","status":1},{"id":4,"company":"Verz Design","location":"Singapore","datefrom":"2017-01-03","dateto":"2017-02-17","position":"Web Developer","responsibility":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nec nulla sagittis, scelerisque mi vitae, congue turpis.","logo":"","createdon":"2017-04-06 00:00:00","updated_at":"-0001-11-30 00:00:00","status":1}];
						var educations = [{"id":2,"college":"Tagore Arts & Science","university":"Madras University","location":"Chrompet","datefrom":2008,"dateto":2011,"cource":"Bachelor of Computer Application","createdon":"2017-04-06 00:00:00","updated_at":"-0001-11-30 00:00:00","status":1},{"id":1,"college":"Madha Engineering College","university":"Anna University","location":"Chennai","datefrom":2011,"dateto":2014,"cource":"Master of Computer Application","createdon":"2017-04-06 00:00:00","updated_at":"-0001-11-30 00:00:00","status":1}];
						var skillset = [{"id":1,"title":"PHP","level":"85%","orders":1,"created_at":"-0001-11-30 00:00:00","updated_at":"-0001-11-30 00:00:00","status":1},{"id":2,"title":"Codeigniter","level":"85%","orders":2,"created_at":"-0001-11-30 00:00:00","updated_at":"-0001-11-30 00:00:00","status":1},{"id":3,"title":"JavaScript","level":"70%","orders":3,"created_at":"-0001-11-30 00:00:00","updated_at":"2017-04-23 15:45:11","status":1},{"id":4,"title":"jQuery","level":"70%","orders":4,"created_at":"-0001-11-30 00:00:00","updated_at":"-0001-11-30 00:00:00","status":1},{"id":5,"title":"CSS3","level":"90%","orders":5,"created_at":"-0001-11-30 00:00:00","updated_at":"-0001-11-30 00:00:00","status":1},{"id":6,"title":"Bootstrap","level":"90%","orders":6,"created_at":"-0001-11-30 00:00:00","updated_at":"-0001-11-30 00:00:00","status":1},{"id":7,"title":"HTML5","level":"90%","orders":7,"created_at":"-0001-11-30 00:00:00","updated_at":"-0001-11-30 00:00:00","status":1},{"id":8,"title":"JSON","level":"90%","orders":8,"created_at":"-0001-11-30 00:00:00","updated_at":"-0001-11-30 00:00:00","status":1},{"id":9,"title":"ReST API","level":"80%","orders":9,"created_at":"-0001-11-30 00:00:00","updated_at":"-0001-11-30 00:00:00","status":1},{"id":10,"title":"Ajax","level":"90%","orders":10,"created_at":"-0001-11-30 00:00:00","updated_at":"-0001-11-30 00:00:00","status":1},{"id":11,"title":"Photoshop","level":"70%","orders":11,"created_at":"-0001-11-30 00:00:00","updated_at":"-0001-11-30 00:00:00","status":1},{"id":12,"title":"AngularJS","level":"70%","orders":12,"created_at":"-0001-11-30 00:00:00","updated_at":"-0001-11-30 00:00:00","status":1},{"id":13,"title":"MySql","level":"70%","orders":13,"created_at":"-0001-11-30 00:00:00","updated_at":"-0001-11-30 00:00:00","status":1},{"id":14,"title":"Android","level":"50%","orders":14,"created_at":"-0001-11-30 00:00:00","updated_at":"-0001-11-30 00:00:00","status":1},{"id":15,"title":"Laravel","level":"70%","orders":15,"created_at":"-0001-11-30 00:00:00","updated_at":"2017-04-23 15:45:29","status":1},{"id":16,"title":"SASS \/ SCSS","level":"70%","orders":16,"created_at":"-0001-11-30 00:00:00","updated_at":"-0001-11-30 00:00:00","status":1}];
						$scope.careerobject = $sce.trustAsHtml("To work diligently in challenging environment that would allow me to apply my skills and thoughts in a productive manner both for the organization as well as for myself. Proven problem solving, intellectual and analytic skills, Ability to learn new technologies quickly and develop innovative solutions.");
						var professionals = [{"id":1,"point":"2.5 years experience in PHP Web Development and Designing.","created_at":"-0001-11-30 00:00:00","updated_at":"-0001-11-30 00:00:00","orders":0,"status":1},{"id":2,"point":"Strong in developing HTML, CSS, MySQL, PHP, JavaScript, jQuery.","created_at":"-0001-11-30 00:00:00","updated_at":"-0001-11-30 00:00:00","orders":0,"status":1},{"id":3,"point":"Excellent analytic and debugging skills, Committed to excellence and continuous learning.","created_at":"-0001-11-30 00:00:00","updated_at":"-0001-11-30 00:00:00","orders":0,"status":1},{"id":4,"point":"Good Team Player and ability to work with minimum guidance.","created_at":"-0001-11-30 00:00:00","updated_at":"-0001-11-30 00:00:00","orders":0,"status":1},{"id":5,"point":"Have Good Experience in Web designing and developing.","created_at":"-0001-11-30 00:00:00","updated_at":"-0001-11-30 00:00:00","orders":0,"status":1}];
						$scope.professionals = professionals;
						$scope.skillset = skillset;
						$scope.educations = educations;
						$scope.employers = employers;
					})
					.controller("portfolio", function($scope){
						var categories = [
								{ title : 'Custom', filter : '.custom' },
								{ title : 'Ecommerce', filter : '.ecommerce' },
								{ title : 'Static', filter : '.static' },
								{ title : 'CMS', filter : '.cms' }
							];
						var portfoliolist = [
								{ title : 'Good Food', category : ['cms', 'custom'], shortdescrip: '', image: 'image/projects/cms/gfc.jpg', order: '', sitelink: 'http://goodfoodcatering.org/', details: 'portfolio/1' },
								{ title : 'RK Caterers', category : ['cms', 'custom'], shortdescrip: '', image: 'image/projects/cms/rkcaterers.jpg', order: '', sitelink: '', details: 'portfolio/2' }
							];
						$scope.categories = categories;
						$scope.portfoliolist = portfoliolist;
					})
					.controller("portfolio-detail", function($scope, $routeParams){
							var portfoliolist = [
								{ id: '1', title : 'Good Food', category : ['cms', 'custom'], description: 'Good Food Catering is a promotional and order booking website for chennai based hotel. User can place order in front end and can check in backend with full details by admin. Order alert will send to perfered mail address and it is changable in backend by admin. Menu items will be captured from database and it can be managed using backend panel.', image: 'image/projects/cms/gfc1.jpg', order: '', sitelink: 'http://goodfoodcatering.org/',
								  projectDetail : {
												   role: 'Front end and back end Developer',
												   tech: 'PHP, MySQL, JavaScript, jQuery, Html, Ajax',
												   team: 1
												   } },
								{ id: '2', title : 'RK Caterers', category : ['cms', 'custom'], description: 'RK Caterers is a promotional website for chennai based hotel. Menu items will be captured from database and it can be managed using backend panel.', image: 'image/projects/cms/rkcaterers1.jpg', order: '', sitelink: '',
								  projectDetail : {
												   role: 'Front end and back end Developer',
												   tech: 'PHP, MySQL, JavaScript, jQuery, Html, Ajax',
												   team: 1
												   } }
							];
						angular.forEach(portfoliolist, function(project, key){
     						if(project.id == $routeParams.id){
								$scope.portfoliodetail = project;
							} 	
						});
					})
					.controller("facts", function($scope){
						var hobbies = [{"id":1,"title":"Playing Games","content":"I love to play games on PC. I use to play games even when I feel bad, to get out of it. I feel like normal after spends time on it.","icon":"fa fa-gamepad","created_at":"0000-00-00 00:00:00","updated_at":"-0001-11-30 00:00:00","orders":0,"status":1},{"id":2,"title":"Listening Songs","content":"Just like others, i love listening songs while traveling. Apart from the music, I use to listen to the lyrics a lot. I only hear the song with good lyrics.","icon":"fa fa-music","created_at":"0000-00-00 00:00:00","updated_at":"-0001-11-30 00:00:00","orders":0,"status":1},{"id":3,"title":"New Technologies","content":"I always like to know about mechanical & electronic based technology.","icon":"fa fa-laptop","created_at":"0000-00-00 00:00:00","updated_at":"-0001-11-30 00:00:00","orders":0,"status":1},{"id":4,"title":"Movies","content":"I like to watch Sci-Fi, Mystery, Horror, Fantasy, Action, Crime and Comedy movies.","icon":"fa fa-film","created_at":"0000-00-00 00:00:00","updated_at":"-0001-11-30 00:00:00","orders":0,"status":1},{"id":5,"title":"Just Thinking","content":"Just like everyone, I use to think a lot about something. But I feel like I'm over doing it.","icon":"fa fa-commenting-o","created_at":"0000-00-00 00:00:00","updated_at":"-0001-11-30 00:00:00","orders":0,"status":0}];
						var facts = [{"id":1,"title":"Web Project","count":"30+","icon":"fa fa-area-chart","orders":0,"createdon":"2017-04-06 00:00:00","updated_at":"-0001-11-30 00:00:00","status":1},{"id":2,"title":"Games Played","count":"100+","icon":"fa fa-gamepad","orders":0,"createdon":"2017-04-06 00:00:00","updated_at":"-0001-11-30 00:00:00","status":1},{"id":3,"title":"Hours Songs","count":"1000+","icon":"fa fa-music","orders":0,"createdon":"2017-04-06 00:00:00","updated_at":"-0001-11-30 00:00:00","status":1}];
						$scope.hobbies = hobbies;
						$scope.facts = facts;
					})
					.controller("contact", function($scope,$http,$httpParamSerializer){
						$scope.Data = PersonalDetails();
						$scope.send = function(isValid,form) {
            				if (isValid) {
								$http({
									method: 'POST',
									url: 'ajax/enquiry.php',
									data    : $httpParamSerializer($scope.enquiry),
									headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
								})
								.then(function(response) {
									$scope.status = response.status;
									$scope.data = response.data;
									if (response.data.success == true) {
										$scope.enquiry = {};
										form.$setPristine();
										form.$setUntouched();
									}
								}, function(response) {
									$scope.data = response.data || 'Request failed';
									$scope.status = response.status;
								});
							} else {
								//alert('Form is not valid');
							}
						}
					});
					
					function PersonalDetails(){
						var PersonalDetail = {
												"name": "Babu S.R",
												"dob": "xx/xx/xxxx",
												"address": "No: xxx, xxxx xxxx, xxxxxxxxxxxxxx, xxxxxxxxx, Ch-69.",
												"maritalstatus": "Unmarried",
												"nationality": "Indian",
												"email": "srbabuxx@xxxxx.com",
												"phone": "+91 99529xxxxx",
												"gender": "Male",
												"shortdescription": "To work diligently in challenging environment that would allow me to apply my skills and thoughts in a productive manner both for the organization as well as for myself. Proven problem solving, intellectual and analytic skills, Ability to learn new technologies quickly and develop innovative solutions.",
												"position": "Web Designer & Developer",
												"imgsign": "image/sign.png",
												"profilepic": "image/pro-img.jpg",
												"resume": "resume/profile.docx"
											};
						return PersonalDetail;
					}
					
					function ngScrollbar($log) {
						return {
							restrict: 'A',
							scope: {
								config: '&ngScrollbar'
							},
							link: function postLink(scope, iElement, iAttrs, controller, transcludeFn) {
								var config = scope.config();
								//$log.debug('config: ', config);
								// create scroll elemnt
								var elem = iElement.mCustomScrollbar({
									autoHideScrollbar: config.autoHide,
									theme: config.theme,
									advanced: {
										updateOnImageLoad: true
									},
									scrollButtons: {
										enable: true
									}
								});
								// the live options object
								var mObject = elem.data('mCS');
								//$log.debug('elem: ', mObject.opt);
							}
						};
					}
					
					function ngPortfolio(){
						return {
							scope: {
								config: '&ngPortfolio',
								portfoliolist: '='
							},
							transclude: true,
							templateUrl: 'pages/portfolio-list.html',
							link: function Link(scope, iElement, iAttrs, controller, transcludeFn){
								var config = scope.config();
								
								scope.$watch('portfoliolist', function(){
       								iElement.mixItUp({
										load: {
										  filter: config.loadfilter
										},
									});
    							});
								
								iElement.on('$destroy', function() {
									iElement.mixItUp('destroy');
								});
							}
						}
					}
					
					function ngPreloader($log,$interval,$window){
						return {
							restrict: 'A',
							transclude: true,
							template: '<div id="status">&nbsp;</div>',
							scope: {
								config: '&ngPreloader'	
							},
							link: function preLoad(scope, elem){
								var config = scope.config();
								$interval(function() {
									elem.children().fadeOut();
									elem.fadeOut('slow');
									elem.parent().css({'overflow':'visible'});
								}, config.delay);
							}
						}
					}