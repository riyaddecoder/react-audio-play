const MUSICS = [
  {
    url: 'https://github.com/riyaddecoder/audio-files/raw/master/Aurthohin-Anmone.mp3',
    title: 'Anmone - Aurthohin',
    sourceLink: 'https://youtu.be/P9jXUxOkcR8?si=a7DhScN3EFtvuEdM'
  },
  {
    url: 'https://github.com/riyaddecoder/audio-files/raw/master/Kotha%20Koiyo%20Na%20-%20Coke%20Studio%20Bangla.mp3',
    title: 'Kotha koio na - Coke Studio',
    sourceLink: 'https://youtu.be/a7V9bUwc4cU?si=WyOopTUwhjZuLwZs'
  },
  {
    url: 'https://github.com/riyaddecoder/audio-files/raw/master/Anmone2-Aurthohin.mp3',
    title: 'Anmone 2 - Aurthohin',
    sourceLink: 'https://youtu.be/3I3l-x93kOY?si=c9Uymhr7i3r2VN7y'
  },
  {
    url: 'https://github.com/riyaddecoder/audio-files/raw/master/Poth%20Chola%20-%20Artcell.mp3',
    title: 'Poth Chola - Artcell',
    sourceLink: 'https://youtu.be/CKfhGvUPXkY?si=NSEmDY1T-gsUigSv'
  }
];

export class Music {
  private currentMusic = MUSICS[0];
  private musicIndexes = new Set();

  nextMusic = () => {
    if (MUSICS.length <= this.musicIndexes.size) {
      this.musicIndexes.clear();
    }
    let number;
    do {
      number = Math.floor(Math.random() * MUSICS.length);
    } while (this.musicIndexes.has(number));
    this.currentMusic = MUSICS[number];
    this.musicIndexes.add(number);
    return MUSICS[number];
  };

  getCurrentMusic = () => {
    return this.currentMusic;
  };
}
