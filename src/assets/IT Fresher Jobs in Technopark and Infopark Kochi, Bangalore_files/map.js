$description = $(".description");
$map = [];
var shiftPositionObject = {
    'IN-GA': {
        x: 1,
        y: 30
    },
    'IN-MN': {
        x: -5,
        y: 30
    },
    'IN-NL': {
        x: -5,
        y: 30
    },
    'IN-AS': {
        x: -5,
        y: 18
    },
    'IN-ML': {
        x: 1,
        y: 25
    },
    'IN-MZ': {
        x: 1,
        y: 25
    },
    'IN-TR': {
        x: 1,
        y: 30
    },
    'IN-SK': {
        x: 1,
        y: 30
    },
    'IN-AR': {
        x: -5,
        y: 20
    },
    'IN-WB': {
        x: 1,
        y: -25
    },
    'IN-BR': {
        x: 1,
        y: 10
    },
    'IN-JH': {
        x: 8,
        y: 10
    },
    'IN-AP': {
        x: 20,
        y: -20
    },
    'IN-KL': {
        x: 1,
        y: 10
    },
    'IN-KA': {
        x: 1,
        y: -25
    },
    'IN-MH': {
        x: 15,
        y: 5
    },
    'IN-MP': {
        x: 5,
        y: -15
    },
    'IN-HR': {
        x: 1,
        y: 15
    },
    'IN-UT': {
        x: 1,
        y: 15
    },
    'IN-PB': {
        x: 1,
        y: 10
    },
    'IN-HP': {
        x: 1,
        y: 15
    },
    'IN-JK': {
        x: 5,
        y: 1
    },
    'IN-UP': {
        x: 5,
        y: -5
    },
    'IN-TG': {
        x: 5,
        y: 10
    },
    'IN-DL': {
        x: 1,
        y: 32
    },
    'IN-LD': {
        x: 8,
        y: 30
    }
}

$('.enabled').hover(function () {
    stopAutoAnim();
    $description.addClass('active');
    $description.html($(this).attr('title'));
}, function () {
    var listOfPaths = $('.enabled');
    listOfPaths.map(function (currentPath) {
        if ($(listOfPaths[currentPath]).hasClass('selected')) {
            $description.html($(this).attr('title'));
            mouseEneter(listOfPaths[currentPath]);
        }
    })
});

$('.enabled').click(clickedAnimation);

$('.india-map').on('mouseenter', function (e) {
  stopAutoAnim();
});
$('.india-map-details').on('mouseenter', function (e) {
  stopAutoAnim();
});
$('.enabled').on('mouseenter', function (e) {
    mouseEneter(e);
});

$('.india-map').on('mouseleave', function (e) {
    var _autoAnim = setTimeout(function () {
        clearTimeout(_autoAnim);
        startAutoAnim();
    }, 0);
});


var autoStart = null;
var index = 0;

function stopAutoAnim() {
    autoStart && clearInterval(autoStart);
}

function startAnimOnInit(){
  stopAutoAnim();
  var listOfStates = ['IN-KL'];
  var listOfPaths = $('.enabled');
  listOfPaths.map(function (currentPath) {
      if ($(listOfPaths[currentPath]).attr('id') === listOfStates[index]) {
          $(listOfPaths[currentPath]).trigger('click');
          $description.addClass('active');
          $description.html($(this).attr('title'));
          mouseEneter(listOfPaths[currentPath]);
      }
  })
  index++;
  if (index >= listOfStates.length) {
      index = 0;
  }
}
startAnimOnInit();
function startAutoAnim() {
    stopAutoAnim();
    autoStart = setInterval(function () {
        var listOfStates = ['IN-JK', 'IN-UP', 'IN-MP', 'IN-WB', 'IN-BR'];
        var listOfPaths = $('.enabled');
        listOfPaths.map(function (currentPath) {
            if ($(listOfPaths[currentPath]).attr('id') === listOfStates[index]) {
                $(listOfPaths[currentPath]).trigger('click');
                $description.addClass('active');
                $description.html($(this).attr('title'));
                mouseEneter(listOfPaths[currentPath]);
            }
        })
        index++;
        if (index >= listOfStates.length) {
            index = 0;
        }
        initialized = true
    }, 3000);
}

//startAutoAnim();





function clickedAnimation() {
	 //alert ("isworking");
    $('.IN-LD').find('.enabled').prev().removeClass('makeVisible');
    $('.IN-LD').find('.enabled').removeClass('selected');
    $(this).addClass('selected');
    $(this).prev().addClass('makeVisible');
    $(this).parent().siblings().find('.enabled').prev().removeClass('makeVisible');
    $(this).parent().siblings().find('.enabled').removeClass('selected');
    var name = $(this).attr('title');
    var id = $(this).data('tid');
	//alert(this.id);
	//alert ("State"+id);
	//alert ("$map "+$map[id]);
  if(this.id != null){
	  
	  
	//if($map[id]) {
		 //alert ("id not null");
		// alert "ok"+$map[id];
		
		 switch (this.id) {
              case 'IN-AN':  $('.state-name').html("<div class='myText'><span style=''><h5>States in India</h5><h3>Andaman and Nicobar Islands</h3><p>Andaman and Nicobar Islands, union territory, India, consisting of two groups of islands at the southeastern edge of the Bay of Bengal. The peaks of a submerged mountain range, the Andaman Islands and their neighbours to the south, the Nicobar Islands. Neither the Andaman nor the Nicobar island groups are highly industrialised. However, a variety of manufacturing activities are undertaken on both sets of islands.Agriculture, forestry, and fishing are the other sources of economy here.</p> </span> </div>");
//              case 'IN-AN':  $('.state-name').html("<div class='myText'><span style=''><h5>States in India</h5><h3>Andaman and Nicobar Islands</h3><p>Andaman and Nicobar Islands, union territory, India, consisting of two groups of islands at the southeastern edge of the Bay of Bengal. The peaks of a submerged mountain range, the Andaman Islands and their neighbours to the south, the Nicobar Islands. Neither the Andaman nor the Nicobar island groups are highly industrialised. However, a variety of manufacturing activities are undertaken on both sets of islands.Agriculture, forestry, and fishing are the other sources of economy here.</p><div class='col-md-4 state-feature'><span><img src='https://technoparkjobs.com/frontend/images/box-img1.png'></span><h2>22</h2><h4>JOBS</h4></div><div class='col-md-4 state-feature2'><span><img src='https://technoparkjobs.com/frontend/images/box-img2.png'></span><h2>16</h2><h4>Total Company</h4></div><div class='col-md-4 state-feature'><img src='https://technoparkjobs.com/frontend/images/box-img3.png'><h2>363</h2><h4>Candidates</h4></div> <a href='#' class='red-btn'>More Details</a></span> </div>");
               break;
            
               case 'IN-AP':  $('.state-name').html("<div class='myText'><span style=''><h5>States in India</h5><h3>Andhra Pradesh</h3><p>Andhra Pradesh is situated in the south-eastern part of the country.  So many job opportunities are there in Automobiles and Auto components Industry, IT industry. spices, mines and minerals. Textiles and apparels, Bulk drugs and pharmaceuticals, horticulture, paultry  farming are the main industries in Andhra Pradesh.</p></span> </div>");
               break;
			   
			   case 'IN-AS':  $('.state-name').html("<div class='myText'><span style=''><h5>States in India</h5><h3>Assam</h3><p>Assam is a state in northeastern India. Agro- based industries of Assam broadly include - Tea Industry, Sugar Industry, Grain Mill Products Industry (Rice, Oil and Flour Mill), Food Processing Industry and Textile Industry. Mineral based industries of Assam include - Petroleum, Cement, and Fertilizer and so on.</p></span> </div>");
               break;
			   
			   case 'IN-BR':  $('.state-name').html("<div class='myText'><span style=''><h5>States in India</h5><h3>Bihar</h3><p>Bihar is a state in East India, bordering Nepal. Bihar is in the process of setting up its first Information technology (IT) park near the state capital on the lines of Bangalore's International Tech Park and Hyderabad's Software Technology Park. The IT Park will be set up at Bihta, 30 km from Patna. Food processing, dairy, sugar, manufacturing and healthcare are some of the fast growing industries in the state. The state has planned initiatives for the development of other sectors such as education and tourism and also provides incentives for information technology and renewable energy.</p></span> </div>");
               break;
			   
			   case 'IN-GA':  $('.state-name').html("<div class='myText'><span style=''><h5>States in India</h5><h3>Goa</h3><p>The state aims to become a vibrant IT destination in India and among the top 25 startup destinations in Asia by 2025. The Goa government has approved setting up two Information Technology parks in North Goa that are expected to create employment in the IT sector. The IT Parks will come up at Chimbel and Penha-de-Franca villages, both bordering Panaji. The Integrated IT Township would be set up on an area ad measuring 4,49,625 sq meters while the Hybrid IT Park will come up at an area of 12,455 sq meters land. Both IT parks would provide a steady supply of employment opportunities besides being specifically geared towards the needs of the IT/ITeS sector.</p></span> </div>");
               break;
			   case 'IN-GJ':  $('.state-name').html("<div class='myText'><span style=''><h5>States in India</h5><h3>Gujarat</h3><p>Gujarat is the western most state of India . The GIFT City is an integrated development on 886 acres of land with 62 million  sq. ft. of Built Up area which includes Office spaces, Residential Apartments, Schools, Hospital, Hotels, Clubs, Retail and various Recreational facilities, which makes this City a truly “Walk to Work” City. GIFT City is a new Financial & Technology Gateway of India for the World. The Infocity is a global ITeS Outsourcing hub in Gujarat, India that provides world-class infrastructure to BPO, KPO, Software development & ITeS outsourcing companies. Awarded as one of the best-conceptualized IT Parks in India, Infocity Information Technology (IT) park project is developed based on the concept of “A City within a city.”</p></span> </div>");
               break;
              
			   case 'IN-JH':  $('.state-name').html("<div class='myText'><span style=''><h5>States in India</h5><h3>Jharkhand</h3><p>Jharkhand is a state in eastern India. The Economy of Jharkhand depends on mineral resources, industries, agricultural, and tourism sectors. The state's gross domestic product amounted to US$ 14 billion in 2004. The Economy in the state of Jharkhand gets it revenue from the mineral resources sector for the state has a rich storehouse of minerals.</p></span> </div>");
               break;
			   
			   case 'IN-KA':  $('.state-name').html("<div class='myText'><span style=''><h5>States in India</h5><h3>Karnataka</h3><p>Karnataka is a state in the south western region of India. The capital and the largest city Bangalore is known for its amazingly carved Tech Parks and these tech parks host hundreds of top-notch IT companies. Electronic City Tech Park, Bagmane Tech Park, Manyata Embassy Business Park, Ecospace Business Park, International Tech Park and Global Village Tech Park are the top among the tech parks clutching almost all the big companies in the world with more than 1900 companies and lakhs of employees making Bangalore a place for tech lovers with abundant opportunities.</p></span> </div>");
               break;
			   
			   case 'IN-MH':  $('.state-name').html("<div class='myText'><span style=''><h5>States in India</h5><h3>Maharashtra</h3><p>Maharashtra is a state in the western peninsular region of India occupying a substantial portion of the Deccan Plateau. It is one of the most populous state and third-largest state by area. About 40 per cent of India's Internet users lives in Maharashtra and around 169,000 trained technical personnel added to the manpower pool each year. Pune is the second largest city in Maharashtra with 12 Stunning IT Parks and Special Economic Zone. Pune turns to be the first choice for software companies and Office Commercial Space, The Special Economic Zone of the City includes the International Tech Park Pune, MagarPatta City and EON IT parks.</p></span> </div>");
               break;
			   
			   case 'IN-MP':  $('.state-name').html("<div class='myText'><span style=''><h5>States in India</h5><h3>Madhya pradhesh</h3><p>Madhya Pradesh, a large state in central India, retains landmarks from eras throughout Indian history.  IT Parks are being established at 4 places in the state - Indore, Bhopal, Jabalpur and Gwalior. Fifth IT Park has been sanctioned at Sagar, whose work would begin soon. The state is leader in textile manufacturing, automobiles, food processing, engineering and agriculture equipment manufacturing. The peaceful manpower of the State is an added advantage for industrial development. All the above mentioned factors pave the way for the Madhya Pradesh to become a developed state, The government of MP came up with a policy for the IT, ITES and ESDM sector in 2012.</p></span> </div>");
               break;
			   
			   case 'IN-NL':  $('.state-name').html("<div class='myText'><span style=''><h5>States in India</h5><h3>Nagaland</h3><p>Nagaland is one of the seven states in the north-east. The state is flanked by Myanmar in the east, Arunachal Pradesh in the north, Assam in the west and Manipur in the south. Nagaland’s agro-climatic conditions favor agriculture, horticulture and forestry, offering immense potential in these areas. Nagaland has a high literacy rate of 80.1 percent. The majority of the population in the state speaks English, which is the official language of the state. The state offers technical and medical education.</p></span> </div>");
               break;
			   
			   case 'IN-OR':  $('.state-name').html("<div class='myText'><span style=''><h5>States in India</h5><h3>Odisha</h3><p>Odisha is a state located on the eastern coast of India. The state government is focused to rope in IT and BPO firms who are keen to expand footprint but mindful of the costs of organic growth. Known to be one of the first to get the top four IT  companies TCS, Infosys, Wipro and Tech Mahindra, to set up centres on its turf. The Odisha government is sensing an opportunity to be the hub for accommodating the next phase of ramp-up by IT and ITES .In addition to the big four, Odisha is home to a software development centre by Mindtree Consulting.  Odisha offers 600 acres of land at Infovalley on the outskirts of Bhubaneswar. It is home to the second campus of IT bellwether Infosys Technologies, and has ample space to house centres by other firms. </p></span> </div>");
               break;
			   
			   case 'IN-RJ':  $('.state-name').html("<div class='myText'><span style=''><h5>States in India</h5><h3>Rajasthan</h3><p>Rajasthan is a state in northern India. Rajasthan is home to several key industries  which are engaged in production of goods like cotton cloth, cotton yarn, cement, sugar, urea, zinc-ingots, ball-bearings, edible oils, salt, copper cathodes etc. Rajasthan is a late starter in IT field in comparison with southern states but now this sector has got momentum from last few years. One of the largest IT SEZ on land area of 750 acres at Jaipur by Mahindra World City ( Jaipur) Ltd. (MWCJL) in joint venture with RIICO is being set up. IT SEZ ( Phase-I) on land area of 383 acre has already become operational and companies like Infosys Ltd., Infosys BPO Ltd.</p></span> </div>");
               break;
			   
			   case 'IN-TN':  $('.state-name').html("<div class='myText'><span style=''><h5>States in India</h5><h3>Tamil Nadu</h3><p>Tamilnadu is one of the important industrial states of India. Its capital and largest city, Chennai have More than 4000 big companies and more than 8000 small and medium level companies. The south Indian city , Chennai is fast emerging as a destination for IT outsourcing and has seen a growing number of IT parks being built there. International Tech Park, Chennai (ITPC) or ASCENDAS is a hi-tech park in Taramani, Chennai. Tidal Park at Taramani and Olympia Tech Park at Guindy are the other largest Technology parks in Chennai. Huge number of employment opportunities are generated here day by day.</p></span> </div>");
               break;
			   
			    case 'IN-WB':  $('.state-name').html("<div class='myText'><span style=''><h5>States in India</h5><h3>West Bengal</h3><p>West Bengal is a state in eastern India, between the Himalayas and the Bay of Bengal. West Bengal is getting huge response from private sector in terms of occupying spaces by IT firms in the newly-developed IT Parks, set up mostly in smaller cities, increasing chances of generating good employment in the sector across the state. Key Industries: Tea, petroleum and petrochemicals, leather. Iron and steel, information technology, mineral resources, automobile and auto components, biotechnology, fisheries, jute products and textiles.</p></span> </div>");
               break;
			   
			    case 'IN-LD':  $('.state-name').html("<div class='myText'><span style=''>><h5>States in India</h5><h3>Lakshadweep</h3><p>Lakshadweep formally known as Laccadive, Minicoy and Aminidivi Islands is a union territory of India located at the south-west side in Laccadive Sea. The islands form the smallest Union Territory of India and their total surface area is just 32 Sq Km (12 sq mi).The main economic sources are Tourism, Fisheries and Coir Manufacturing. Scope of tech company establishments are very limited due to its space concerns and its geography.</p></span> </div>");
               break;
			   
			   
			    case 'IN-KL':  $('.state-name').html("<div class='myText'><span style=''><h5>States in India</h5><h3>Kerala</h3><p>Kerala is a state on the southwestern Malabar Coast of India. Technopark, is one of India's largest IT park located in Kerala, Trivandrum. It is Kerala's first IT park with more than 400  companies employing more than 70,000 IT professionals. Technocity is an upcoming tech park in Trivandrum  under construction and South India's largest World Trade Centre and World's fifth Nissan Global Digital Hub campus also coming here. Infopark and Cyberpark are another major IT parks in Kerala. The three IT parks together have more than 800 companies that provide employment to over  1 lakh IT professionals.</p></span> </div>");
//			    case 'IN-KL':  $('.state-name').html("<div class='myText'><span style=''><h5>States in India</h5><h3>Kerala</h3><p>Kerala is a state on the southwestern Malabar Coast of India. Technopark, is one of India's largest IT park located in Kerala, Trivandrum. It is Kerala's first IT park with more than 400  companies employing more than 70,000 IT professionals. Technocity is an upcoming tech park in Trivandrum  under construction and South India's largest World Trade Centre and World's fifth Nissan Global Digital Hub campus also coming here. Infopark and Cyberpark are another major IT parks in Kerala. The three IT parks together have more than 800 companies that provide employment to over  1 lakh IT professionals.</p><div class='col-md-4 state-feature'><span><img src='https://technoparkjobs.com/frontend/images/box-img1.png'></span><h2>"+$(this).attr('data-jobs')+"</h2><h4>JOBS</h4></div><div class='col-md-4 state-feature2'><span><img src='https://technoparkjobs.com/frontend/images/box-img2.png'></span><h2>"+$(this).attr('data-company')+"</h2><h4>Total Company</h4></div><div class='col-md-4 state-feature'><img src='https://technoparkjobs.com/frontend/images/box-img3.png'><h2>"+$(this).attr('data-candidates')+"</h2><h4>Candidates</h4></div> </span> </div>");
               break;
			   
			    case 'IN-TG':  $('.state-name').html("<div class='myText'><span style=''><h5>States in India</h5><h3>Telangana</h3><p>Telangana is a state in southern India. The capital city Hyderabad is famous for  its rich history, cuisine, and  a multi-linguistic culture which makes it one of the best cities to live in. Hyderabad is one of the growing and emerging cities in the IT Sector which hosts many  IT companies and Tech parks which attract a large pool of young working professionals to the city. The  HITEC City, is an IT, Engineering, Health informatics,  and Bioinformatics, business district located in Hyderabad. HITEC City is spread across 200 acres  of  land under suburbs of Madhapur, Gachibowli, Kondapur, Manikonda, and Nanakramguda, the technology township is also known as Cyberabad.</p></span> </div>");
               break;
			   
			    case 'IN-JK':  $('.state-name').html("<div class='myText'><span style=''><h5>States in India</h5><h3>Jammu and Kashmir</h3><p>Jammu and Kashmir's economy is predominantly dependent on agriculture and allied activities. Jammu and Kashmir State has a greater potential to become a major tourist destination in the world. Tourism sector is the most popular source of income and employment generation for the J&K state economy. The Kashmir valley is also known for its sericulture and cold-water fisheries. Wood from Kashmir is used to make high-quality cricket bats, popularly known as Kashmir Willow. Jammu and Kashmir is essentially a grain growing state. Rice, maize, wheat, millets, and pulses are its major food crops.</p></span> </div>");
               break;
			   
			    case 'IN-PB':  $('.state-name').html("<div class='myText'><span style=''><h5>States in India</h5><h3>Punjab</h3><p>Punjab, a state bordering Pakistan, is the heart of India’s Sikh community. The Government of Punjab identifies Information Technology (IT) and Information Technology Enabled Services (ITES) as niche areas to leverage the natural strength of Intelligence and entrepreneurship of people of Punjab and attracting investments from Information Technology (IT) and Knowledge industry thereby creating employment opportunities in these sectors.</p></span> </div>");
               break;
			   
			    case 'IN-HP':  $('.state-name').html("<div class='myText'><span style=''><h5>States in India</h5><h3>Himachal Pradesh</h3><p>Himachal Pradesh is a northern Indian state in the Himalayas. It's home to scenic mountain towns and resorts such as Dalhousie. The Himachal Pradesh government has started the process to set up two software technology parks at Gaggal in Kangra district and Mehli in Shimla district. Both these places are located close to the airports which makes them suitable sites for the proposed projects. Agriculture contributes nearly about 45% to the net state domestic product. It is the main source of income as well as employment in Himachal. About 93% of the state population depends directly upon agriculture.</p></span> </div>");
               break;
			   
			    case 'IN-UT':  $('.state-name').html("<div class='myText'><span style=''><h5>States in India</h5><h3>Uttarakhand</h3><p>Uttarakhand formerly known as Uttaranchal is a state in the northern part of India. There are 116 resin based industries in the State. Like most of India, agriculture is one of the most significant sectors of the economy of Uttarakhand. Basmati rice, wheat, soybeans, groundnuts, coarse cereals, pulses, and oil seeds are the most widely grown crops.</p></span> </div>");
               break;
			   
			    case 'IN-HR':  $('.state-name').html("<div class='myText'><span style=''><h5>States in India</h5><h3>Haryana</h3><p>Haryana is located in northern part of the country. The government of Haryana has earmarked several zones as Haryana Industrial Area. The area claims that in the past year over 1000 industries of various scales have forayed into Haryana. This has also raked up the employment opportunities for the youth catapulting economic growth.</p></span> </div>");
               break;
			   
			    case 'IN-UP':  $('.state-name').html("<div class='myText'><span style=''><h5>States in India</h5><h3>Uttar Pradesh</h3><p>Uttar Pradesh is a state in northern India. The state Govt. has identified 3-5 Acres of land for the establishment of IT Parks in cities like Meerut, Kanpur, Agra and Gorakhpur. IT Park Agra & Meerut have been approved and the construction will be started by STPI shortly. Uttar Pradesh has very fertile land and its economy is largely driven by agriculture. The key industries in the state include food processing, Information Technology , tourism, mineral-based industries, auto components, textiles, handlooms and handicrafts, biotechnology, leather-based and sports goods industries.</p></span> </div>");
               break;
			   
			    case 'IN-CT':  $('.state-name').html("<div class='myText'><span style=''><h5>States in India</h5><h3>Chhattisgarh</h3><p>Chhattisgarh, state of east-central India is one of the most populated states in the country. A resource-rich state, it is a source of electricity and steel for the country, accounting for 15% of the total steel produced as well as large contributor of coal. Chhattisgarh is one of the fastest-developing states in India. Agriculture and power sector is the main source of income in Chhattisgarh. Government of Chhattisgarh (GoCG) has developed world class infrastructure for the promotion and sustenance of IT & ITeS business and is committed to promote state as best business investment destination for both established players as well as startups.</p></span> </div>");
               break;
			   
			    case 'IN-AR':  $('.state-name').html("<div class='myText'><span style=''><h5>States in India</h5><h3>Arunachal Pradesh</h3><p>Arunachal Pradesh is the north easternmost state of India. It borders the states of Assam and Nagaland to the south. Major industries of the state include agriculture, art and crafts, weaving, cane and   bamboo, horticulture, bamboo, horticulture, power and mineral-based industry.</p></span> </div>");
               break;
			   
			    case 'IN-MN':  $('.state-name').html("<div class='myText'><span style=''><h5>States in India</h5><h3>Manipur</h3><p>Manipur is a state in northeastern India, with the city of Imphal as its capital.  Manipur is primarily an agriculture-based economy and has scope for commercial plantation of a variety of horticulture crops such as figs, olive and mandarin.</p></span> </div>");
               break;
			   
			   case 'IN-TR':  $('.state-name').html("<div class='myText'><span style=''><h5>States in India</h5><h3>Tripura</h3><p>Tripura is a state in northeastern India. The third-smallest state in the country. It shares a common boundary with Assam and Mizoram. It is an agrarian state with more than half of the population dependent on agriculture and allied activities. The state is also rich in natural gas deposits, glass sands, limestone, plastic clay and hard rock. With its pleasant climate and scenic landscape, Tripura is a favoured tourist destination. The state has a wide range of fiscal and policy incentives for businesses under Tripura Industrial Investment Promotion Incentive Scheme, 2017.</p></span> </div>");
               break;
			   
			   
			   case 'IN-MZ':  $('.state-name').html("<div class='myText'><span style=''><h5>States in India</h5><h3>Mizoram</h3><p>Mizoram is a state in northeastern India. Mizoram is one of the seven states in the North-East. Mizoram has the potential to generate 4,500 MW of hydro power, of which 97.94 MW was installed as of July 2019. The state has a large forest area and contributes 14 per cent to the country's bamboo production.  A Software Technology Park is  being established in Mizoram University campus. Officials of the Union Ministry of Information Technology and the Mizoram government signed a Memorandum of Understanding (MoU)  to set up the software technology park.</p></span> </div>");
               break;
			   
			       case 'IN-ML':  $('.state-name').html("<div class='myText'><span style=''><h5>States in India</h5><h3>Meghalaya</h3><p>Meghalaya is a hilly state in northeastern India. Like almost all the other north-eastern states, Meghalaya is largely dependent on wood and wood-based industries. The mining sector also contributes significantly to the state's income, and private entrepreneurs are involved in this process. Meghalaya has predominantly an agrarian economy with a significant commercial forestry industry. The service sector is made up of real estate and insurance companies.</p></span> </div>");
               break;
			   
			       case 'IN-SK':  $('.state-name').html("<div class='myText'><span style=''><h5>States in India</h5><h3>Sikkim</h3><p>Sikkim is a state in northeastern India. The state's economy is largely agrarian based on the terraced farming of rice and the cultivation of crops such as maize, millet, wheat, barley, oranges, tea, and cardamom. Sikkim produces more cardamom than any other Indian state and is home to the largest cultivated area of cardamom.</p></span> </div>");
               break;
			       case 'IN-DL':  $('.state-name').html("<div class='myText'><span style=''><h5>States in India</h5><h3>Delhi</h3><p>Delhi, India’s capital territory, is a massive metropolitan area in the country’s north. The key industries include IT, Telecommunications, Hotels, Media, Banking and Tourism. The Delhi IT Park is an IT park complex developed by DMRC. It is a Software Technology Park situated in Shastri Park close to the metro station. Gurugram, the second biggest technology hub in India, has also emerged as one of the top five Asian IT. Logix Technopark, DLF Cyber City, Global Business Park, Signature Towers, Millennium Plaza and Unitech Business Park are the other famous tech parks in Delhi.</p></span> </div>");
               break;
			   
			    
               default:  document.write("Unknown grade<br />")
            }
		
		
   //   $('.state-name').html(this.id);
    }else {
		 
      $.ajax({
		 
        type: "GET",
        url: '/get-state-html/' + id,
	
        success: function(data){
          $('.state-name').html(data.data);
          $map[id] = data.data;
        }
      });
    }
	
	

    if ($(this).attr('id') != 'IN-LD') {
      $(this).parent().appendTo('#map-parent');
    }
}



//***************************************************************************************





//***************************************************************************************





function mouseEneter(e) {
    var id = (e.hasOwnProperty('currentTarget') && e.currentTarget.id) || $(e).attr('id');
    var idElem = document.getElementById(id);
    var clientReact = idElem.getBoundingClientRect();
    var description = document.querySelector('.description');
    var descPosition = description.getBoundingClientRect();
    var isSmallState = shiftPositionObject[id] || 0;
    /*$(description).css({
        right: clientReact.x + clientReact.width / 2 - descPosition.width / 2 - ((isSmallState && isSmallState.x) || isSmallState),
        top: document.documentElement.scrollTop + clientReact.y - ((isSmallState && isSmallState.y) || isSmallState)
    });*/
    var mapContainer = document.getElementsByClassName('india-map')[0];
    var mapContainerRect = mapContainer.getBoundingClientRect();
    $(description).css({
      left: clientReact.left - mapContainerRect.left + clientReact.width / 2 - descPosition.width / 2 - ((isSmallState && isSmallState.x) || isSmallState),
      top: clientReact.top - mapContainerRect.top - ((isSmallState && isSmallState.y) || isSmallState)
    });
}
$(document).ready(function (e) {
  $('.india-map').ripples({
    dropRadius: 5,
    perturbance: 0.005
  });

  var rippleAutoPlay = null;
  function startAutoPlayRippleAnim() {
    (rippleAutoPlay && clearInterval(rippleAutoPlay));
    rippleAutoPlay = setInterval(function() {
      var $el = $('.india-map');
      var x = Math.random() * $el.outerWidth();
      var y = Math.random() * $el.outerHeight();
      var dropRadius = 5;
      var strength = 0.1;
      $el.ripples('drop', x, y, dropRadius, strength);
    }, 1000);
  }


  //startAutoPlayRippleAnim();

//  $(window).on('focus', function (){
//    startAutoPlayRippleAnim();
//    startAutoAnim();
//  });
  var initialized = false
  $(window).scroll(function(){
    var init = 1;
    var scrollTop = $(this).scrollTop();
    var offset = $('.tech-job-india-map-section').offset().top - 200;
    var stopoffset = $('#main-wrapper').offset().top;
    if(scrollTop < offset && initialized) {
      (rippleAutoPlay && clearInterval(rippleAutoPlay));
      stopAutoAnim();
      initialized = false;
    }
    if(scrollTop > offset && (scrollTop < stopoffset) && !initialized){
      startAutoPlayRippleAnim();
      startAutoAnim();
      initialized = true;
    }
    if((scrollTop > offset) && (scrollTop > stopoffset) && initialized) {
      (rippleAutoPlay && clearInterval(rippleAutoPlay));
      stopAutoAnim();
      initialized = false;
    }

  });

  $(window).on('blur', function (){
    (rippleAutoPlay && clearInterval(rippleAutoPlay));
    stopAutoAnim();
  });

});




