export const bottomDetailData = [
  {
    name: 'Calculate Delivery Charges',
    onPress: navigation => {},
  },
  {
    name: 'Term & Conditions',
    onPress: navigation => {
      navigation.navigate('TermAndConditions');
    },
  },
  {
    name: 'Options',
    onPress: navigation => {},
  },
  {
    name: 'Specifications',
    onPress: navigation => {},
  },
  {
    name: 'Inspection Location Map',
    onPress: navigation => {},
  },
  {
    name: 'Chat Now',
    onPress: navigation => {},
  },
];

export const userData = {
  profileImage:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/2015_Mazda_MX-5_ND_2.0_SKYACTIV-G_160_i-ELOOP_Rubinrot-Metallic_Vorderansicht.jpg/400px-2015_Mazda_MX-5_ND_2.0_SKYACTIV-G_160_i-ELOOP_Rubinrot-Metallic_Vorderansicht.jpg',
  name: 'John Doe',
  email: 'john.doe@example.com',
};

export const carSpecificationData = [
  {
    icon: 'car-outline',
    key: 'Make',
    value: 'Audi',
  },
  {
    icon: 'car',
    key: 'Model',
    value: 'A3',
  },
  {
    icon: 'car-sports',
    key: 'Body Type',
    value: 'Sedan',
  },
  {
    icon: 'key',
    key: 'Keys',
    value: '2',
  },
  {
    icon: 'grid',
    key: 'VIN',
    value: 'WAUZZGY5NA006078',
  },
  {
    icon: 'transmission-tower',
    key: 'Transmission',
    value: 'Automatic',
  },
  {
    icon: 'car-shift-pattern',
    key: 'Exterior',
    value: 'Grey',
  },
];

export const termsAndConditions = [
  'AED 500 administration fee will be applied on each lot price exceeds AED 2,000 and AED 300 otherwise.',
  'You must complete payment and collection of the Lot within 48 hours from the time of auction’s conclusion. Documents of the lot shall be finalized within approximately 10 working days of completing the payment process.',
  'Emirates Auction reserves the right to apply fees of 100AED for each delay, without prior notice, for any vehicle not paid or received within the specified period',
  'Emirates Auction is not responsible whatsoever for the period of issuing ownership documents.',
  'To be sold as is where is, Emirates Auction has no responsibility and you must inspect the lot before bid.',
  'AED 50 loading/unloading fees will be applied for each car.',
  'Emirates Auction shall not guarantee the registration of the classic cars.',
  'The buyer bears 200 dirhams of possession issuance fees ... In the event that the issuance of possession requires an export examination, the buyer must conduct the examination and hand it over to the Emirates Auctions to issue the possession at the buyer’s expense',
];
