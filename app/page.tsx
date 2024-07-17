'use client';

import { useEffect, useState } from 'react';
import styles from './page.module.css';
import Image from 'next/image';

interface Song {
  link: string;
  thumbnail: string;
  singer: string;
  title: string;
}

export default function Home() {
  const [songs, setSongs] = useState<Song[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [currentSong, setCurrentSong] = useState<Song | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          'https://opensheet.elk.sh/1oSDi5i4mwb3M4jDVazuvQDmjSQxNhsAfggNhNTh1kQ4/1'
        );
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data: Song[] = await response.json();
        setSongs(data);
        console.log('Fetched data:', data);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false); // Set loading to false once the fetch is complete
      }
    }

    fetchData();
  }, []);

  return (
    <div className={styles.main}>
      {loading ? (
        <p>Loading...</p> // Display a loading indicator while fetching data
      ) : (
        <>
          {currentSong && (
            <audio controls src={currentSong.link} autoPlay></audio>
          )}
          <div>
            {songs.map((song, index) => (
              <div
                key={index}
                className={styles.song}
                onClick={() => setCurrentSong(song)}
                style={{ cursor: 'pointer' }}
              >
                <Image
                  src={song.thumbnail}
                  alt={`${song.title} thumbnail`}
                  width={50}
                  height={50}
                />
                <div>
                  <h3>{song.title}</h3>
                  <p>{song.singer}</p>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
