let profiles = [
  {
    'title': 'Twitter',
    'url' : 'https://twitter.com/akkonomi',
    'description': '@akkonomi'
  },
  {
    'title': 'MAL',
    'url': 'https://myanimelist.net/profile/akko_lambda',
    'description': 'akko_lambda'
  },
  {
    'title': 'Github',
    'url': 'https://github.com/4k1k0',
    'description': '4k1k0'
  },
  {
    'title': 'Steam',
    'url': 'https://steamcommunity.com/profiles/76561198271168645',
    'description': 'akko_lambda'
  },
  {
    'title': 'Name',
    'description': '(W)Akko'
  },
  {
    'title': 'Job',
    'description': 'Cyber witch'
  },
  {
    'title': 'Type',
    'description': 'Ghost'
  },
  {
    'title': 'Age',
    'description': '9302 years old'
  },
  {
    'title': 'Hobbies',
    'description': 'Listening to my jams'
  },
  {
    'title': 'Digimon',
    'description': 'Wizardmon'
  },
  {
    'title': 'OS',
    'description': 'GNU/Linux, MacOs and Windows'
  },
  {
    'title': 'Editor',
    'description': 'Vim'
  },
  {
    'title': 'Anilist',
    'url': 'https://anilist.co/user/akkiko',
    'description': 'akkiko'
  },
  {
    'title': 'EVA',
    'description': '02'
  }
];


profiles.sort( (a, b) => {
  if ( a.title.toLowerCase() > b.title.toLowerCase() ) {
    return 1;
  } else {
    return -1;
  }
  return 0;
});

profiles.forEach( (profile) => {
  let element = `<tr><td>${profile.title}</td><td>${profile.description}</td></tr>`;
  if ( profile.url !== undefined ) {
    element = `<tr><td>${profile.title}</td><td><a href="${profile.url}" target="_blank">${profile.description}</a></td></tr>`;
  }
  document.getElementsByTagName('tbody')[0].insertAdjacentHTML('beforeend', element);
});


let skills = ['Javascript', 'Angular', 'Node.js', 'PHP', 'Linux', 'Wordpress', 'Express', 'MySQL'];

skills.sort();

skills.forEach( (skill) => {
  let element = `<div class="skill">${skill}</div>`;
  document.getElementById('list').insertAdjacentHTML('beforeend', element);
});
