import React from 'react';
import { useTopCandidates } from '@/hooks/useTopCandidates'; // 경로는 니 폴더 구조에 맞게 조정해줘 언냐~

const MusicItem = () => {
    const candidates = useTopCandidates(5); // 상위 5개 가져오기~ ✨

    return (
        <div>
            <h2>🎵 인기 많은 노래들 🎤</h2>
            <ul>
                {candidates.map((song, index) => (
                    <li key={song.link_id}>
                        {index + 1}. <strong>{song.song_name}</strong> - {song.song_artist}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MusicItem;