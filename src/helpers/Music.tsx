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
  }
];

export class Music {
  private currentMusic = MUSICS[0];

  nextMusic = () => {
    const number = Math.floor(Math.random() * MUSICS.length);
    this.currentMusic = MUSICS[number];
    return MUSICS[number];
  };

  getCurrentMusic = () => {
    return this.currentMusic;
  };
}
