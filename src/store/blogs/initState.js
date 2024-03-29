const blogInitState = {
  articles: [
    {
      id: 1,
      read: '4',
      category: 'laptop',
      title: 'Improve your customer experience',
      img: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
      createdAt: '21 April 2022',
      author: {
        img: 'https://randomuser.me/api/portraits/men/65.jpg',
        id: 1,
        name: 'Sumon',
      },
    },
    {
      id: 2,
      read: '3',
      category: 'camera',
      createdAt: '23 April 2022',
      img: 'https://images.unsplash.com/photo-1625123627242-97ef1000c6d1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJsb2dnaW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
      title: 'How to use search engine optimization to drive sales',
      author: {
        img: 'https://randomuser.me/api/portraits/men/19.jpg',
        id: 2,
        name: 'Tamim',
      },
    },
    {
      id: 3,
      read: '3',
      category: 'laptop',
      title: 'Single Responsibility Principle',
      createdAt: '24 April 2022',
      img: 'https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGJsb2d8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
      author: {
        img: 'https://randomuser.me/api/portraits/men/19.jpg',
        id: 2,
        name: 'Tamim',
      },
    },
    {
      id: 4,
      category: 'tech',
      read: '2',
      title: 'Boost your conversion rate',
      createdAt: '18 April 2022',
      img: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGJsb2d8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
      author: {
        img: 'https://randomuser.me/api/portraits/men/19.jpg',
        id: 1,
        name: 'sumon',
      },
    },
    {
      id: 5,
      category: 'camera',
      read: '4',
      createdAt: '28 April 2022',
      title: 'repeat the type when you pass',
      img: 'https://images.unsplash.com/photo-1513001900722-370f803f498d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGJsb2d8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
      author: {
        img: 'https://randomuser.me/api/portraits/men/19.jpg',
        id: 2,
        name: 'Tamim',
      },
    },
    {
      id: 6,
      read: '7',
      category: 'laptop',
      createdAt: '18 May 2022',
      img: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGJsb2d8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
      title: 'How do you turn a weakness into a strength',
      author: {
        img: 'https://randomuser.me/api/portraits/women/23.jpg',
        id: 6,
        name: 'Rahim',
      },
    },
    {
      id: 7,
      category: 'tech',
      read: '5',
      title: 'How to run a frontend workshop',
      createdAt: '15 May 2022',
      img: 'https://media.istockphoto.com/photos/the-more-you-know-the-more-your-business-grows-picture-id1292991881?b=1&k=20&m=1292991881&s=170667a&w=0&h=5QfHORbgcqTFyHbRp7L83YlVF-U5Mt-AsWXX2zBtOZ8=',
      author: {
        img: 'https://randomuser.me/api/portraits/women/28.jpg',
        id: 10,
        name: 'Sanjida',
      },
    },
    {
      id: 8,
      read: '3',
      category: 'camera',
      title: 'display UI showing which scope',
      createdAt: '25 May 2022',
      img: 'https://media.istockphoto.com/photos/working-home-concept-picture-id1247171756?b=1&k=20&m=1247171756&s=170667a&w=0&h=1SJeZ7fPkJ8kXLdHLY5U85vDJElK6wWBuRxxJj2iP70=',
      author: {
        img: 'https://randomuser.me/api/portraits/men/19.jpg',
        id: 2,
        name: 'Tamim',
      },
    },
    {
      id: 9,
      read: '2',
      category: 'laptop',
      title: 'Editor Sticky Scroll Feature',
      createdAt: '5 May 2022',
      img: 'https://media.istockphoto.com/photos/young-asian-woman-using-laptop-receiving-purchase-order-and-showing-picture-id1411654011?b=1&k=20&m=1411654011&s=170667a&w=0&h=-pax8o2k2e1t_-jLFNO6MFrcVLyujTodJ-36pJySOMY=',
      author: {
        img: 'https://randomuser.me/api/portraits/men/27.jpg',
        id: 9,
        name: 'Rahim',
      },
    },
    {
      id: 10,
      category: 'tech',
      read: '3',
      title: 'ultimate solution has finally arrived',
      createdAt: '2022-08-21T06:40:49.084Z',
      img: 'https://media.istockphoto.com/photos/young-woman-working-on-a-laptop-picture-id925516616?b=1&k=20&m=925516616&s=170667a&w=0&h=LK8AJgG6S7rbGWOMFa9URyj-r-oVO9zAugyKOio1y4U=',
      author: {
        img: 'https://randomuser.me/api/portraits/women/28.jpg',
        id: 10,
        name: 'Sanjida',
      },
    },
    {
      id: 11,
      read: '9',
      category: 'camera',
      title: 'Feature - Never Get Lost',
      createdAt: '15 April 2022',
      img: 'https://media.istockphoto.com/photos/visual-contents-concept-social-networking-service-streaming-video-picture-id1289323170?b=1&k=20&m=1289323170&s=170667a&w=0&h=_mVTXluDgqHGZkvsG20yMKGBbPih4_sOSL_pqSnU0Qg=',
      author: {
        img: 'https://randomuser.me/api/portraits/men/35.jpg',
        id: 16,
        name: 'Karim',
      },
    },
    {
      id: 12,
      read: '8',
      category: 'tech',
      title: 'Visual Studio Code',
      createdAt: '14 April 2022',
      img: 'https://images.unsplash.com/reserve/LJIZlzHgQ7WPSh5KVTCB_Typewriter.jpg?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGJsb2d8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
      author: {
        img: 'https://randomuser.me/api/portraits/women/28.jpg',
        id: 10,
        name: 'Sanjida',
      },
    },
    {
      id: 13,
      read: '4',
      category: 'tech',
      title: 'Stack-choosing pain',
      createdAt: '21 May 2022',
      img: 'https://images.unsplash.com/photo-1471107340929-a87cd0f5b5f3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8YmxvZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
      author: {
        img: 'https://randomuser.me/api/portraits/women/28.jpg',
        id: 10,
        name: 'Sanjida',
      },
    },
    {
      id: 14,
      read: '9',
      category: 'camera',
      title: 'CSS - Vue without build',
      createdAt: '27 May 2022',
      img: 'https://images.unsplash.com/photo-1500989145603-8e7ef71d639e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8YmxvZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
      author: {
        img: 'https://randomuser.me/api/portraits/men/35.jpg',
        id: 16,
        name: 'Karim',
      },
    },
    {
      id: 17,
      read: '2',
      category: 'laptop',
      createdAt: '20 April 2022',
      img: 'https://images.unsplash.com/photo-1487611459768-bd414656ea10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8YmxvZ2dpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
      title: 'Hd Apple Watch Wallpapers',
      author: {
        id: 1,
        img: 'https://randomuser.me/api/portraits/men/65.jpg',
        name: 'Sumon',
      },
    },
    {
      id: 15,
      read: '4',
      category: 'laptop',
      title: 'stack for mastering HTML',
      createdAt: '23 April 2022',
      img: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGJsb2d8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
      author: {
        img: 'https://randomuser.me/api/portraits/women/28.jpg',
        id: 15,
        name: 'Rahim',
      },
    },
    {
      id: 16,
      category: 'laptop',
      read: '7',
      title: 'How I discovered an ideal',
      createdAt: '20 May 2022',
      img: 'https://images.unsplash.com/photo-1604933762023-7213af7ff7a7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmxvZ2dpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
      author: {
        img: 'https://randomuser.me/api/portraits/men/35.jpg',
        id: 16,
        name: 'Karim',
      },
    },

    {
      id: 18,
      category: 'camera',
      createdAt: '24 May 2022',
      img: 'https://images.unsplash.com/photo-1625123627242-97ef1000c6d1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJsb2dnaW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
      read: '5',
      title: 'Documenting Life’s Moments on Camera',
      author: {
        img: 'https://randomuser.me/api/portraits/men/65.jpg',
        id: 1,
        name: 'Sumon',
      },
    },
  ],
}
export default blogInitState
