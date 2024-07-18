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
        console.log(data);
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
          <div>
            {songs.map((song, index) => (
              <div key={index} className={styles.song}>
                <Image
                  src={song.thumbnail}
                  alt={`${song.title} thumbnail`}
                  width={20}
                  height={20}
                />
                <div>
                  <h3>{song.title}</h3>
                  <p>{song.singer}</p>
                  <audio
                    className={styles.audio}
                    controls
                    src={song.link}
                  ></audio>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
