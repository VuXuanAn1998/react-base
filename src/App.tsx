import AgoraRTC from "agora-rtc-sdk-ng";
import { useState } from "react";
import { IoVolumeMute } from "react-icons/io5";
import { IoExit } from "react-icons/io5";
function App() {
  const token = null;
  const RTC_UID = Math.floor(Math.random() * 2024);
  const [isJoin, setIsJoin] = useState(false);
  const APP_ID = "36edfa25f8974bee9d8f222b23f7e766";
  const roomId = "main";

  const [userList, setuserList] = useState<number[]>([]);
  const [audioTracks, setAudioTracks] = useState({
    localAudioTracks: undefined,
    remoteAudioTracks: {},
  });
  const [rtcClient] = useState(
    AgoraRTC.createClient({
      mode: "rtc",
      codec: "vp8",
    })
  );

  const handleUserJoin = async (user) => {
    setuserList((prevList) => [...prevList, user.uid]);
  };

  const handleUserPublished = async (user, mediaType) => {
    await rtcClient.subscribe(user, mediaType);
    if (mediaType === "audio") {
      const userRemote = [user.audioTrack];
      setAudioTracks((prevState) => ({
        ...prevState,
        remoteAudioTracks: {
          [user.uid]: userRemote,
        },
      }));
      user.audioTrack.play();
    }
  };

  const handleUserLeft = (user) => {
    setAudioTracks((prevState) => {
      const { [user.uid]: _, ...remainingTracks } = prevState.remoteAudioTracks;
      return {
        ...prevState,
        remoteAudioTracks: remainingTracks,
      };
    });
    setuserList((prevList) => prevList.filter((id) => id !== user.uid));
  };
  const initRTC = async () => {
    await rtcClient.join(APP_ID, roomId, token, RTC_UID);
    rtcClient.on("user-joined", handleUserJoin);
    rtcClient.on("user-published", handleUserPublished);
    rtcClient.on("user-left", handleUserLeft);
    const remoteAudioTracks = await AgoraRTC.createMicrophoneAudioTrack();
    setAudioTracks((prevState) => ({
      ...prevState,
      remoteAudioTracks,
    }));
    setuserList((prevList) => [...prevList, RTC_UID]);
    rtcClient.publish(remoteAudioTracks);
    setIsJoin(() => true);
  };

  const leaveRoom = async () => {
    audioTracks.localAudioTracks?.stop();
    audioTracks.localAudioTracks?.close();

    rtcClient.unpublish();
    rtcClient.leave();

    setIsJoin(false);
  };

  return (
    <>
      {!isJoin ? (
        <div
          className="px-5 py-3 bg-slate-400 rounded-full w-fit mx-auto mt-5 cursor-pointer text-white font-medium"
          onClick={initRTC}
        >
          Enter Room
        </div>
      ) : (
        <div className="flex justify-between px-5 py-2 mt-5 bg-gray-600 rounded  text-white font-medium mx-2">
          {userList.map((item) => {
            return <h1 key={item}>{item}</h1>;
          })}
          <div className="flex gap-4">
            <IoVolumeMute className="w-6 h-6" />
            <IoExit className="w-6 h-6" onClick={leaveRoom} />
          </div>
        </div>
      )}
    </>
  );
}

export default App;
