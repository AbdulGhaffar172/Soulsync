import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
  StatusBar
} from 'react-native';
import React from 'react';
import InputFlatlist from './InputFlatlist';


const Furthur_details = ({navigation}) => {


  const dataSet = [
    {id: 1, data: dataSeta, placeholder: 'State you live in'},
    {id: 2, data: dataSetb, placeholder: 'City you live in'},
    {id: 3, data: dataSetc, placeholder: 'Your Material Status'},
    {id: 4, data: dataSetd, placeholder: 'Your Diet'},
    {id: 5, data: dataSete, placeholder: 'Your Height'},
    {id: 6, data: dataSetf, placeholder: 'Your Sub-Community'},
  ];
  const dataSeta = [
    {id: 21, key: 'Afghanistan', value: 'Afghanistan'},

    {id: 22, key: 'Albania', value: 'Albania'},

    {id: 23, key: 'Algeria', value: 'Algeria'},

    {id: 24, key: 'Andorra', value: 'Andorra'},

    {id: 26, key: 'Angola', value: 'Angola'},

    {id: 27, key: 'Antigua and Barbuda', value: 'Antigua and Barbuda'},

    {id: 28, key: 'Argentina', value: 'Argentina'},

    {id: 29, key: 'Armenia', value: 'Armenia'},

    {id: 30, key: 'Australia', value: 'Australia'},

    {id: 31, key: 'Austria', value: 'Austria'},

    {id: 32, key: 'Azerbaijan', value: 'Azerbaijan'},

    {id: 33, key: 'The Bahamas', value: 'The Bahamas'},

    {id: 33, key: 'Bahrain', value: 'Bahrain'},

    {id: 34, key: 'Bangladesh', value: 'Bangladesh'},

    {id: 35, key: 'Barbados', value: 'Barbados'},

    {id: 36, key: 'Belarus', value: 'Belarus'},

    {id: 37, key: 'Belgium', value: 'Belgium'},

    {id: 38, key: 'Belize1', value: 'Belize'},

    {id: 39, key: 'Benin', value: 'Benin'},

    {id: 40, key: 'Bhutan', value: 'Bhutan'},

    {id: 41, key: 'Bolivia', value: 'Bolivia'},

    {id: 42, key: 'Bosnia and Herzegovina', value: 'Bosnia and Herzegovina'},

    {id: 43, key: 'Botswana', value: 'Botswana'},

    {id: 44, key: 'Brazil', value: 'Brazil'},

    {id: 45, key: 'Brunei', value: 'Brunei'},

    {id: 46, key: 'Bulgaria', value: 'Bulgaria'},

    {id: 47, key: 'Burkina Faso', value: 'Burkina Faso'},

    {id: 48, key: 'Burundi', value: 'Burundi'},

    {id: 49, key: 'Cabo Verde', value: 'Cabo Verde'},

    {id: 50, key: 'Cambodia', value: 'Cambodia'},

    {id: 51, key: 'Cameroon', value: 'Cameroon'},

    {id: 52, key: 'Canada', value: 'Canada'},

    {
      id: 53,
      key: 'Central African Republic',
      value: 'Central African Republic',
    },

    {id: 54, key: 'Chad', value: 'Chad'},

    {id: 55, key: 'Chile', value: 'Chile'},

    {id: 56, key: 'China', value: 'China'},

    {id: 57, key: 'Colombia', value: 'Colombia'},

    {id: 58, key: 'Comoros', value: 'Comoros'},

    {
      id: 59,
      key: 'Congo, Democratic Republic of the',
      value: 'Congo, Democratic Republic of the',
    },

    {id: 60, key: 'Congo, Republic of the', value: 'Congo, Republic of the'},

    {id: 61, key: 'Costa Rica', value: 'Costa Rica'},

    {id: 62, key: 'Côte d’Ivoire', value: 'Côte d’Ivoire'},

    {id: 63, key: 'Croatia', value: 'Croatia'},

    {id: 64, key: 'Cuba', value: 'Cuba'},

    {id: 65, key: 'Cyprus', value: 'Cyprus'},

    {id: 66, key: 'Czech Republic', value: 'Czech Republic'},

    {id: 67, key: 'Denmark', value: 'Denmark'},

    {id: 68, key: 'Djibouti', value: 'Djibouti'},

    {id: 69, key: 'Dominica', value: 'Dominica'},

    {id: 70, key: 'Dominican Republic', value: 'Dominican Republic'},

    {
      id: 71,
      key: 'East Timor (Timor-Leste)',
      value: 'East Timor (Timor-Leste)',
    },

    {id: 72, key: 'Ecuador', value: 'Ecuador'},

    {id: 73, key: 'Egypt', value: 'Egypt'},

    {id: 74, key: 'El Salvador', value: 'El Salvador'},

    {id: 75, key: 'Equatorial Guinea', value: 'Equatorial Guinea'},

    {id: 76, key: 'Eritrea', value: 'Eritrea'},

    {id: 77, key: 'Estonia', value: 'Estonia'},

    {id: 78, key: 'Eswatini', value: 'Eswatini'},

    {id: 79, key: 'Ethiopia', value: 'Ethiopia'},

    {id: 80, key: 'Fiji', value: 'Fiji'},

    {id: 81, key: 'Finland', value: 'Finland'},

    {id: 82, key: 'France', value: 'France'},

    {id: 83, key: 'Gabon', value: 'Gabon'},

    {id: 84, key: 'The Gambia', value: 'The Gambia'},

    {id: 85, key: 'Georgia', value: 'Georgia'},

    {id: 86, key: 'Germany', value: 'Germany'},

    {id: 87, key: 'Ghana', value: 'Ghana'},

    {id: 88, key: 'HGreece', value: 'Greece'},

    {id: 89, key: 'Grenada', value: 'Grenada'},

    {id: 90, key: 'Guatemala', value: 'Guatemala'},

    {id: 91, key: 'Guinea', value: 'Guinea'},

    {id: 92, key: 'Guinea-Bissau', value: 'Guinea-Bissau'},

    {id: 93, key: 'Guyana', value: 'Guyana'},

    {id: 94, key: 'Haiti', value: 'dHaiti'},

    {id: 95, key: 'Honduras', value: 'Honduras'},

    {id: 96, key: 'HHungary', value: 'dHungary'},

    {id: 97, key: 'Iceland', value: 'Iceland'},

    {id: 98, key: 'India', value: 'India'},

    {id: 99, key: 'HIndonesia', value: 'Indonesia'},

    {id: 100, key: 'Iran', value: 'Iran'},

    {id: 101, key: 'Iraq', value: 'Iraq'},

    {id: 102, key: 'Ireland', value: 'Ireland'},
    {id: 103, key: 'Israel', value: 'Israel'},

    {id: 104, key: 'Italy', value: 'Italy'},

    {id: 105, key: 'Jamaica', value: 'Jamaica'},

    {id: 106, key: 'Japan', value: 'Japan'},

    {id: 107, key: 'Jordan', value: 'Jordan'},

    {id: 108, key: 'Kazakhstan', value: 'Kazakhstan'},

    {id: 109, key: 'Kenya', value: 'Kenya'},

    {id: 110, key: 'Kiribati', value: 'Kiribati'},

    {id: 111, key: 'Korea, North', value: 'Korea, North'},

    {id: 112, key: 'Korea, South', value: 'Korea, South'},

    {id: 113, key: 'Kosovo', value: 'Kosovo'},

    {id: 114, key: 'Kuwait', value: 'Kuwait'},

    {id: 115, key: 'Kyrgyzstan', value: 'Kyrgyzstan'},

    {id: 116, key: 'Laos', value: 'Laos'},

    {id: 117, key: 'Latvia', value: 'Latvia'},

    {id: 118, key: 'Lebanon', value: 'Lebanon'},

    {id: 119, key: 'Lesotho', value: 'Lesotho'},

    {id: 120, key: 'Liberia', value: 'Liberia'},

    {id: 121, key: 'Libya', value: 'Libya'},

    {id: 122, key: 'Liechtenstein', value: 'Liechtenstein'},

    {id: 123, key: 'Lithuania', value: 'Lithuania'},

    {id: 124, key: 'Luxembourg', value: 'Luxembourg'},

    {id: 125, key: 'HMadagascar', value: 'Madagascar'},

    {id: 126, key: 'Malawi', value: 'Malawi'},

    {id: 127, key: 'Malaysia', value: 'Malaysia'},

    {id: 128, key: 'Maldives', value: 'Maldives'},

    {id: 129, key: 'Mali', value: 'Mali'},

    {id: 130, key: 'Malta', value: 'Malta'},

    {id: 131, key: 'Marshall Islands', value: 'Marshall Islands'},

    {id: 132, key: 'Mauritania', value: 'Mauritania'},

    {id: 133, key: 'Mauritius', value: 'Mauritius'},

    {id: 134, key: 'Mexico', value: 'Mexico'},

    {
      id: 135,
      key: 'Micronesia, Federated States of',
      value: 'Micronesia, Federated States of',
    },

    {id: 136, key: 'Moldova', value: 'Moldova'},

    {id: 137, key: 'Monaco', value: 'Monaco'},

    {id: 138, key: 'Mongolia', value: 'dMongolia'},

    {id: 139, key: 'Montenegro', value: 'Montenegro'},

    {id: 140, key: 'Morocco', value: 'Morocco'},

    {id: 141, key: 'Mozambique', value: 'Mozambique'},

    {id: 142, key: 'Myanmar (Burma)', value: 'Myanmar (Burma)'},

    {id: 143, key: 'Namibia', value: 'Namibia'},

    {id: 144, key: 'Nauru', value: 'Nauru'},

    {id: 145, key: 'Nepal', value: 'Nepal'},

    {id: 146, key: 'Netherlands', value: 'Netherlands'},

    {id: 147, key: 'New Zealand', value: 'New Zealand'},

    {id: 148, key: 'Nicaragua', value: 'Nicaragua'},

    {id: 149, key: 'Niger', value: 'Niger'},

    {id: 150, key: 'Nigeria', value: 'Nigeria'},

    {id: 151, key: 'North Macedonia', value: 'North Macedonia'},

    {id: 152, key: 'Norway', value: 'Norway'},

    {id: 153, key: 'Oman', value: 'Oman'},

    {id: 154, key: 'Pakistan', value: 'Pakistan'},

    {id: 155, key: 'Palau', value: 'Palau'},

    {id: 156, key: 'Panama', value: 'Panama'},

    {id: 157, key: 'Papua New Guinea', value: 'Papua New Guinea'},

    {id: 158, key: 'Paraguay', value: 'Paraguay'},

    {id: 159, key: 'Peru', value: 'Peru'},

    {id: 160, key: 'Philippines', value: 'Philippines'},

    {id: 161, key: 'Poland', value: 'Poland'},

    {id: 162, key: 'Portugal', value: 'Portugal'},

    {id: 163, key: 'Qatar', value: 'Qatar'},

    {id: 164, key: 'Romania', value: 'Romania'},

    {id: 165, key: 'Russia', value: 'Russia'},

    {id: 166, key: 'Rwanda', value: 'Rwanda'},

    {id: 167, key: 'Saint Kitts and Nevis', value: 'daint Kitts and Nevis'},

    {id: 168, key: 'Saint Lucia', value: 'Saint Lucia'},

    {
      id: 169,
      key: 'Saint Vincent and the Grenadines',
      value: 'Saint Vincent and the Grenadines',
    },

    {id: 170, key: 'Samoa', value: 'Samoa'},

    {id: 171, key: 'San Marino', value: 'San Marino'},

    {id: 172, key: 'Sao Tome and Principe', value: 'Sao Tome and Principe'},

    {id: 173, key: 'Saudi Arabia', value: 'Saudi Arabia'},

    {id: 174, key: 'Senegal', value: 'Senegal'},

    {id: 175, key: 'Serbia', value: 'Serbia'},

    {id: 176, key: 'Seychelles', value: 'Seychelles'},

    {id: 177, key: 'Sierra Leone', value: 'Sierra Leone'},

    {id: 178, key: 'Singapore', value: 'Singapore'},

    {id: 179, key: 'Slovakia', value: 'Slovakia'},

    {id: 180, key: 'Slovenia', value: 'Slovenia'},

    {id: 181, key: 'Solomon Islands', value: 'Solomon Islands'},

    {id: 182, key: 'Somalia', value: 'Somalia'},

    {id: 183, key: 'South Africa', value: 'South Africa'},

    {id: 184, key: 'Spain', value: 'Spain'},

    {id: 185, key: 'Sri Lanka', value: 'Sri Lanka'},

    {id: 186, key: 'Sudan', value: 'Sudan'},

    {id: 187, key: 'Sudan, South', value: 'Sudan, South'},

    {id: 188, key: 'Suriname', value: 'Suriname'},

    {id: 189, key: 'Sweden', value: 'Sweden'},

    {id: 190, key: 'Switzerland', value: 'Switzerland'},

    {id: 191, key: 'Syria', value: 'Syria'},

    {id: 192, key: 'Taiwan', value: 'Taiwan'},

    {id: 193, key: 'Tajikistan', value: 'Tajikistan'},

    {id: 194, key: 'Tanzania', value: 'Tanzania'},

    {id: 195, key: 'Thailand', value: 'Thailand'},

    {id: 196, key: 'Togo', value: 'Togo'},

    {id: 197, key: 'Tonga', value: 'Tonga'},

    {id: 198, key: 'Trinidad and Tobago', value: 'Trinidad and Tobago'},

    {id: 199, key: 'Tunisia', value: 'Tunisia'},

    {id: 200, key: 'Turkey', value: 'Turkey'},

    {id: 201, key: 'Turkmenistan', value: 'Turkmenistan'},

    {id: 202, key: 'Tuvalu', value: 'Tuvalu'},

    {id: 203, key: 'Uganda', value: 'Uganda'},

    {id: 204, key: 'Ukraine', value: 'Ukraine'},

    {id: 205, key: 'United Arab Emirates', value: 'dUnited Arab Emirates'},

    {id: 206, key: 'United Kingdom', value: 'United Kingdom'},

    {id: 207, key: 'United States', value: 'United States'},

    {id: 208, key: 'Uruguay', value: 'Uruguay'},

    {id: 209, key: 'Uzbekistan', value: 'Uzbekistan'},

    {id: 210, key: 'Vanuatu', value: 'Vanuatu'},

    {id: 211, key: 'Vatican City', value: 'Vatican City'},

    {id: 212, key: 'Venezuela', value: 'Venezuela'},

    {id: 213, key: 'Vietnam', value: 'Vietnam'},

    {id: 214, key: 'Yemen', value: 'Yemen'},

    {id: 215, key: 'Zambia', value: 'Zambia'},

    {id: 216, key: 'Zimbabwe', value: 'Zimbabwe'},
  ];
  const dataSetb = [
    'Islamabad',
    'Ahmed Nager',
    'Ahmadpur East',
    'Ali Khan',
    'Alipur',
    'Arifwala',
    'Attock',
    'Bhera',
    'Bhalwal',
    'Bahawalnagar',
    'Bahawalpur',
    'Bhakkar',
    'Burewala',
    'Chillianwala',
    'Chakwal',
    'Chichawatni',
    'Chiniot',
    'Chishtian',
    'Daska',
    'Darya Khan',
    'Dera Ghazi',
    'Dhaular',
    'Dina',
    'Dinga',
    'Dipalpur',
    'Faisalabad',
    'Fateh Jhang',
    'Ghakhar Mandi',
    'Gojra',
    'Gujranwala',
    'Gujrat',
    'Gujar Khan',
    'Hafizabad',
    'Haroonabad',
    'Hasilpur',
    'Haveli',
    'Lakha',
    'Jalalpur',
    'Jattan',
    'Jampur',
    'Jaranwala',
    'Jhang',
    'Jhelum',
    'Kalabagh',
    'Karor Lal',
    'Kasur',
    'Kamalia',
    'Kamoke',
    'Khanewal',
    'Khanpur',
    'Kharian',
    'Khushab',
    'Kot Adu',
    'Jauharabad',
    'Lahore',
    'Lalamusa',
    'Layyah',
    'Liaquat Pur',
    'Lodhran',
    'Malakwal',
    'Mamoori',
    'Mailsi',
    'Mandi Bahauddin',
    'mian Channu',
    'Mianwali',
    'Multan',
    'Murree',
    'Muridke',
    'Mianwali Bangla',
    'Muzaffargarh',
    'Narowal',
    'Okara',
    'Renala Khurd',
    'Pakpattan',
    'Pattoki',
    'Pir Mahal',
    'Qaimpur',
    'Qila Didar',
    'Rabwah',
    'Raiwind',
    'Rajanpur',
    'Rahim Yar',
    'Rawalpindi',
    'Sadiqabad',
    'Safdarabad',
    'Sahiwal',
    'Sangla Hill',
    'Sarai Alamgir',
    'Sargodha',
    'Shakargarh',
    'Sheikhupura',
    'Sialkot',
    'Sohawa',
    'Soianwala',
    'Siranwali',
    'Talagang',
    'Taxila',
    'Toba Tek',
    'Vehari',
    'Wah Cantonment',
    'Wazirabad',
    'Badin',
    'Bhirkan',
    'Rajo Khanani',
    'Chak',
    'Dadu',
    'Digri',
    'Diplo',
    'Dokri',
    'Ghotki',
    'Haala',
    'Hyderabad',
    'Islamkot',
    'Jacobabad',
    'Jamshoro',
    'Jungshahi',
    'Kandhkot',
    'Kandiaro',
    'Karachi',
    'Kashmore',
    'Keti Bandar',
    'Khairpur',
    'Kotri',
    'Larkana',
    'Matiari',
    'Mehar',
    'Mirpur Khas',
    'Mithani',
    'Mithi',
    'Mehrabpur',
    'Moro',
    'Nagarparkar',
    'Naudero',
    'Naushahro Feroze',
    'Naushara',
    'Nawabshah',
    'Nazimabad',
    'Qambar',
    'Qasimabad',
    'Ranipur',
    'Ratodero',
    'Rohri',
    'Sakrand',
    'Sanghar',
    'Shahbandar',
    'Shahdadkot',
    'Shahdadpur',
    'Shahpur Chakar',
    'Shikarpaur',
    'Sukkur',
    'Tangwani',
    'Tando Adam',
    'Tando Allahyar',
    'Tando Muhammad',
    'Thatta',
    'Umerkot',
    'Warah',
    'Abbottabad',
    'Adezai',
    'Alpuri',
    'Akora Khattak',
    'Ayubia',
    'Banda Daud',
    'Bannu',
    'Batkhela',
    'Battagram',
    'Birote',
    'Chakdara',
    'Charsadda',
    'Chitral',
    'Daggar',
    'Dargai',
    'Darya Khan',
    'dera Ismail',
    'Doaba',
    'Dir',
    'Drosh',
    'Hangu',
    'Haripur',
    'Karak',
    'Kohat',
    'Kulachi',
    'Lakki Marwat',
    'Latamber',
    'Madyan',
    'Mansehra',
    'Mardan',
    'Mastuj',
    'Mingora',
    'Nowshera',
    'Paharpur',
    'Pabbi',
    'Peshawar',
    'Saidu Sharif',
    'Shorkot',
    'Shewa Adda',
    'Swabi',
    'Swat',
    'Tangi',
    'Tank',
    'Thall',
    'Timergara',
    'Tordher',
    'Awaran',
    'Barkhan',
    'Chagai',
    'Dera Bugti',
    'Gwadar',
    'Harnai',
    'Jafarabad',
    'Jhal Magsi',
    'Kacchi',
    'Kalat',
    'Kech',
    'Kharan',
    'Khuzdar',
    'Killa Abdullah',
    'Killa Saifullah',
    'Kohlu',
    'Lasbela',
    'Lehri',
    'Loralai',
    'Mastung',
    'Musakhel',
    'Nasirabad',
    'Nushki',
    'Panjgur',
    'Pishin valley',
    'Quetta',
    'Sherani',
    'Sibi',
    'Sohbatpur',
    'Washuk',
    'Zhob',
    'Ziarat',

    {id: 1, key: 'Religion', value: 'dataSe'},
    {id: 2, key: 'Community', value: 'dataSetl'},
    {id: 3, key: 'Countries', value: 'dataSetc'},
  ];
  const dataSetc = [
    {id: 1, key: 'Religion', value: 'Married'},
    {id: 2, key: 'Community', value: 'Non Married'},
  ];
  const dataSetd = [
    {id: 1, key: 'Religion', value: 'Intermittent Fasting'},
    {id: 2, key: 'Community', value: 'Mediterrannean Diet'},
    {id: 3, key: 'Countries', value: 'The Ketogenic Diet'},
    {id: 3, key: 'Countries', value: 'If it Fits Your Macros'},
    {id: 3, key: 'Countries', value: 'Veganism'},
    {id: 3, key: 'Countries', value: 'Carnivore Diet'},
    {id: 3, key: 'Countries', value: 'Paleo Diet'},
    {id: 3, key: 'Countries', value: 'Dessert with Breakfast Diet'},
    {id: 3, key: 'Countries', value: 'Sirtfood Diet'},
  ];
  const dataSete = [
    {id: 1, key: 'Religion', value: '4 ft 6 inch = 137.16cm'},
    {id: 2, key: 'Community', value: '4 ft 7 inch = 139.7cm'},
    {id: 25, key: 'Countries', value: '4 ft 8 inch = 142.24cm'},
    {id: 25, key: 'Countries', value: '4 ft 9 inch = 144.78cm'},
    {id: 25, key: 'Countries', value: '4 ft 10 inch = 147.32cm'},
    {id: 25, key: 'Countries', value: '4 ft 11 inch = 149.86cm'},
    {id: 25, key: 'Countries', value: '5 ft  = 152.4cm'},
    {id: 25, key: 'Countries', value: '5 ft 1 inch = 154.96cm'},
    {id: 25, key: 'Countries', value: '5 ft 2 inch = 157.48cm'},
    {id: 25, key: 'Countries', value: '5 ft 3 inch = 160.02cm'},
    {id: 25, key: 'Countries', value: '5 ft 4 inch = 162.56cm'},
    {id: 25, key: 'Countries', value: '5 ft 5 inch = 165.1cm'},
    {id: 25, key: 'Countries', value: '5 ft 6 inch = 167.64cm'},
    {id: 25, key: 'Countries', value: '5 ft 7 inch = 170.18cm'},
    {id: 25, key: 'Countries', value: '5 ft 8 inch = 172.72cm'},
    {id: 25, key: 'Countries', value: '5 ft 9 inch = 175.26cm'},
    {id: 25, key: 'Countries', value: '5 ft 10 inch = 177.8cm'},
    {id: 25, key: 'Countries', value: '5 ft 11 inch = 180.34cm'},
    {id: 25, key: 'Countries', value: '6 ft  = 154.96cm'},
    {id: 25, key: 'Countries', value: '6 ft 1 inch = 185.42cm'},
    {id: 25, key: 'Countries', value: '6 ft 2 inch = 187.96cm'},
    {id: 25, key: 'Countries', value: '6 ft 3 inch = 190.5cm'},
    {id: 25, key: 'Countries', value: '6 ft 4 inch = 193.04cm'},
    {id: 25, key: 'Countries', value: '6 ft 5 inch = 195.58cm'},
    {id: 25, key: 'Countries', value: '6 ft 6 inch = 198.12cm'},
    {id: 25, key: 'Countries', value: '6 ft 7 inch = 200.66cm'},
    {id: 25, key: 'Countries', value: '6 ft 8 inch = 203.2cm'},
    {id: 25, key: 'Countries', value: '6 ft 9 inch = 205.74cm'},
  ];
  const dataSetf = [
    {id: 8, key: 'Business', value: 'Business'},
    {id: 9, key: 'Blogging', value: 'Blogging'},
    {id: 10, key: 'Forum', value: 'Forum'},
    {id: 11, key: 'Social Media', value: 'Social Media'},
    {id: 12, key: 'Caste', value: 'Caste'},
    {id: 13, key: 'Religious', value: 'Religious'},
    {id: 14, key: 'Ethnic', value: 'Ethnic'},
    {id: 15, key: 'Political', value: 'Political'},
    {id: 16, key: 'Farming', value: 'Farming'},
    {id: 17, key: 'Workplace', value: 'Workplace'},
    {id: 18, key: 'Hobby', value: 'Hobby'},
    {id: 19, key: 'Imagined', value: 'Imagined'},
    {id: 20, key: 'Other', value: 'Other'},
  ];
  return (
    <ScrollView>
    <StatusBar backgroundColor="white" barStyle="dark-content" />
      <View>
        <View>
          <ImageBackground
            source={require('../Verification/V2.png')}
            style={{
              width: 367.92,
              height: 193,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text style={{color: 'black', fontSize: 20}}>
              Thanks For Registration
            </Text>
            <Text style={{color: 'black', fontSize: 20}}>
              Now Let's Build Your Profile
            </Text>
          </ImageBackground>
        </View>

        {dataSet.map(item => (
          <InputFlatlist
            placeholder={item.placeholder}
            value={
              item.id == 1
                ? dataSeta
                : item.id == 2
                ? dataSetb
                : item.id == 3
                ? dataSetc
                : item.id == 4
                ? dataSetd
                : item.id == 5
                ? dataSete
                : item.id == 6
                ? dataSetf
                : null
            }
          />
        ))}

       
        <Text style={{color: 'black', textAlign: 'center'}}>
          Not particular about my partner's community
        </Text>
        <View>
          <TouchableOpacity
            onPress={() => navigation.navigate('Almost_done')}
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              marginVertical: 95,
            }}>
            <Text
              style={{
                width: 200,
                color: 'white',
                backgroundColor: 'black',
                padding: 10,
                borderWidth: 1,
                borderRadius: 20,
                textAlign: 'center',
              }}>
              Continue
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default Furthur_details;

const styles = StyleSheet.create({});
