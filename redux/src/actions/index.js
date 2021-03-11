export const selectSong = song => {
    return {
        type: '[SONG] SELECT_SONG',
        payload: song
    };
}