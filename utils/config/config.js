const Menu = {
  LOGIN: [
    {
      title: 'JOIN US',
      isPromotion: true,
      items: [
        {
          title: 'Join our rewards programme and get an instant 12% off.',
          description: 'Signup to our newsletter and get all the latest info',
        },
      ],
      route: '/join',
    },
    {
      title: 'CORPORATES',
      items: [
        {
          title: 'Login Now',
          description: 'Access your contracted rates now',
        },
      ],
      link: 'https://booking.thecapital.co.za/',
    },
    // {
    //   title: 'NEWS',
    //   items: [
    //     {
    //       title: 'Signup Today',
    //       description: 'Signup to our newsletters and get all the latest info',
    //     },
    //   ],
    //   link: 'https://booking.thecapital.co.za/',
    // },
  ],
  FINDUS: [
    {
      title: 'FIND US',
      items: [
        {
          title: 'Contact Us Today',
          description: 'We are available to assist',
        },
      ],
      route: '/find-us',
    },
    {
      title: 'ABOUT US',
      items: [
        {
          title: 'Get to Know Us',
          description: 'We are all about the essential luxuries',
        },
      ],
      route: '/find-us/about',
    },
    {
      title: 'INVEST',
      items: [
        {
          title: 'Live The Hotel Life',
          description: 'Enjoy the benefits of hassle free living',
        },
      ],
      link: 'https://invest.thecapital.co.za/',
    },
  ],
  HOTELS: [
    {
      title: 'SANDTON',
      items: [
        {
          title: 'Empire',
          description: 'In Sandton’s hub',
          route: 'Empire',
        },
        {
          title: 'On The Park',
          description: 'Resort lifestyle',
          route: 'On_The_Park',
        },
        {
          title: '20 West',
          description: 'The executive choice',
          route: '20_West',
        },
        {
          title: 'SEVEN Villa Hotel & Spa',
          description: 'Inner-city retreat',
          link: 'https://sevenvillahotel.co.za/',
        },
      ],
    },
    {
      title: 'MELROSE',
      items: [
        {
          title: 'Melrose',
          description: 'Urban Style',
          route: 'Melrose',
        },
      ],
    },
    {
      title: 'ROSEBANK',
      items: [
        {
          title: 'Bath',
          description: 'On Rosebank’s pulse',
          route: 'Bath',
        },
      ],
    },
    {
      title: 'PRETORIA',
      items: [
        {
          title: 'Menlyn Maine',
          description: 'Stay central',
          route: 'Menlyn_Maine',
        },
        {
          title: 'Trilogy',
          description: 'Stay central across the road from\nThe Capital Menlyn Maine',
          route: 'Trilogy',
        },
      ],
    },
    {
      title: 'CAPE TOWN',
      items: [
        {
          title: 'Mirage',
          description: 'Sophistication',
          route: 'Mirage',
        },
      ],
    },
    {
      title: 'DURBAN',
      items: [
        {
          title: 'Pearls',
          description: 'A View from the top',
          route: 'Pearls',
        },
      ],
    },
  ],
  CONFERENCES: [
    {
      title: 'SANDTON',
      items: [
        {
          title: 'Empire',
          description: 'In Sandton’s hub',
          route: 'Empire',
        },
        {
          title: 'On The Park',
          description: 'Resort lifestyle',
          route: 'On_The_Park',
        },
        {
          title: '20 West',
          description: 'The executive choice',
          route: '20_West',
        },
        {
          title: 'SEVEN Villa Hotel & Spa',
          description: 'Inner-city retreat',
          link: 'https://sevenvillahotel.co.za/',
        },
      ],
    },
    {
      title: 'MELROSE',
      items: [
        {
          title: 'Melrose',
          description: 'Urban Style',
          route: 'Melrose',
        },
      ],
    },
    {
      title: 'PRETORIA',
      items: [
        {
          title: 'Menlyn Maine',
          description: 'Stay central',
          route: 'Menlyn_Maine',
        },
        {
          title: 'Trilogy',
          description: 'Stay central across the road from\nThe Capital Menlyn Maine',
          route: 'Menlyn_Maine',
        },
      ],
    },
    {
      title: 'DURBAN',
      items: [
        {
          title: 'Pearls',
          description: 'A View from the top',
          route: 'Pearls',
        },
      ],
    },
  ],
};

const FacilityArys = [
  {
    key: 'facilities',
    label: 'FACILITIES',
  },
  {
    key: 'dining',
    label: 'DINING',
  },
  {
    key: 'services',
    label: 'SERVICES',
  },
  {
    key: 'conference',
    label: 'CONFERENCE',
  },
  {
    key: 'experiences',
    label: 'EXPERIENCES',
  },
  {
    key: 'gym',
    label: 'GYM & SPA',
  },
];

const ConfServiceArys = [
  {
    key: 'venues',
    label: 'VENUES',
  },
  {
    key: 'packages',
    label: 'PACKAGES',
  },
  {
    key: 'room_configurations',
    label: 'ROOM CONFIGURATIONS',
  },
  {
    key: 'floor_plans',
    label: 'FLOOR PLANS',
  },
  {
    key: 'contact_us',
    label: 'CONTACT US',
  },
];

export default { Menu, FacilityArys, ConfServiceArys };
