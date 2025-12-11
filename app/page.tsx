'use client'

import { useEffect, useState } from 'react'
import styles from './page.module.css'
import Image from 'next/image'

interface Song {
  link: string
  thumbnail: string
  singer: string
  title: string
}

export default function Home() {
  const [songs, setSongs] = useState<Song[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [searchQuery, setSearchQuery] = useState<string>('')

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          'https://opensheet.elk.sh/1oSDi5i4mwb3M4jDVazuvQDmjSQxNhsAfggNhNTh1kQ4/1'
        )
        if (!response.ok) {
          throw new Error('Network response was not ok')
        }
        const data: Song[] = await response.json()
        setSongs(data)
        console.log(data)
      } catch (error) {
        console.error('Error fetching data:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  const filteredSongs = songs.filter((song) => {
    const query = searchQuery.toLowerCase()
    return (
      song.title.toLowerCase().includes(query) ||
      song.singer.toLowerCase().includes(query)
    )
  })

  return (
    <div className={styles.main}>
      <div>
        <div className={styles.search}>
          <input
            className={styles.searchInput}
            placeholder='Search songs or artists...'
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        {filteredSongs.map((song, index) => (
          <div key={index} className={styles.song}>
            <Image
              src={song.thumbnail}
              alt={`${song.title} thumbnail`}
              width={512}
              height={512}
            />
            <div>
              <div className={styles.songTitle}>{song.title}</div>
              <div className={styles.songSinger}>{song.singer}</div>
              <audio
                className={styles.audio}
                controls
                loop
                src={song.link}
              ></audio>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
