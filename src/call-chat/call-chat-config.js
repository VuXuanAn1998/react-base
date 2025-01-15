import AgoraRTC from "agora-rtc-sdk-ng";


const token = null
const RTC_UID = Math.floor(Math.random() * 2032)


const APP_ID = import.meta.env.REACT_APP_API_URL
const roomId = "main"
const audioTracks = {
    localAudioTracks : null,
    remoteAudioTracks: {},
}


let rtcClient ;

const initRTC = async () => {
    rtcClient = AgoraRTC.createClient({
        mode: 'rtc' , 
        codec: 'vp8'
    })

    await rtcClient.join(APP_ID, roomId, token, RTC_UID)
    audioTracks.localAudioTracks = await AgoraRTC.createMicrophoneAudioTrack()
    rtcClient.publish(audioTracks.localAudioTracks)
}

