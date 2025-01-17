import AgoraRTC from "agora-rtc-sdk-ng";
import { useEffect, useState } from "react";
import { IoVolumeMute } from "react-icons/io5";
import { IoExit } from "react-icons/io5";
import {
  IAgoraRTCClient,
  IAgoraRTCRemoteUser,
  ILocalTrack,
  UID,
} from "agora-rtc-sdk-ng";
function App() {
  const token = null;
  const RTC_UID = Math.floor(Math.random() * 2024);
  const [isJoin, setIsJoin] = useState(false);
  const APP_ID = "36edfa25f8974bee9d8f222b23f7e766";
  const roomId = "main";

  const [userList, setuserList] = useState<{ id: UID; status: boolean }[]>([]);
  const [audioTracks, setAudioTracks] = useState({
    localAudioTracks: {},
    remoteAudioTracks: {},
  });
  const [rtcClient, setRtcClient] = useState<IAgoraRTCClient>();
  useEffect(() => {
    const client: IAgoraRTCClient = AgoraRTC.createClient({
      mode: "rtc",
      codec: "vp8",
    });
    setRtcClient(() => client);
  }, []);

  const handleUserJoin = async (user: IAgoraRTCRemoteUser) => {
    setuserList((prevList) => [...prevList, { id: user.uid, status: false }]);
  };

  const handleUserPublished = async (
    user: IAgoraRTCRemoteUser,
    mediaType: "audio" | "video"
  ) => {
    await rtcClient?.subscribe(user, mediaType);
    if (mediaType === "audio") {
      const userRemote = [user.audioTrack];
      setAudioTracks((prevState) => ({
        ...prevState,
        remoteAudioTracks: {
          [user.uid]: userRemote,
        },
      }));
      user.audioTrack?.play();
    }
  };

  const handleUserLeft = (user: IAgoraRTCRemoteUser) => {
    setAudioTracks((prevState) => {
      const { [user.uid]: _, ...remainingTracks } = prevState.remoteAudioTracks;
      return {
        ...prevState,
        remoteAudioTracks: remainingTracks,
      };
    });
    setuserList((prevList) => prevList.filter((item) => item.id !== user.uid));
  };

  const initVolumeIndicator = () => {
    rtcClient?.enableAudioVolumeIndicator();
    rtcClient?.on("volume-indicator", (volumes: RTCPeerConnectionState) => {
      volumes?.forEach((volume) => {
        console.log(volume.level);
        if (volume.level > 40) {
          setuserList((prevList) =>
            prevList.map((user) =>
              user.id === volume.uid ? { ...user, status: true } : user
            )
          );
        } else {
          setuserList((prevList) =>
            prevList.map((user) =>
              user.id === volume.uid ? { ...user, status: false } : user
            )
          );
        }
      });
    });
  };

  const initRTC = async () => {
    await rtcClient?.join(APP_ID, roomId, token, RTC_UID);
    rtcClient?.on("user-joined", handleUserJoin);
    rtcClient?.on("user-published", handleUserPublished);
    rtcClient?.on("user-left", handleUserLeft);
    const remoteAudioTracks: ILocalTrack =
      await AgoraRTC.createMicrophoneAudioTrack();

    setAudioTracks((prevState) => ({
      ...prevState,
      remoteAudioTracks,
    }));
    setuserList((prevList) => [...prevList, { id: RTC_UID, status: false }]);
    rtcClient?.publish(remoteAudioTracks);
    setIsJoin(() => true);
    initVolumeIndicator();
  };

  const leaveRoom = async () => {
    audioTracks.localAudioTracks?.stop();
    audioTracks.localAudioTracks?.close();

    rtcClient?.unpublish();
    rtcClient?.leave();

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
            return (
              <h1
                key={item.id}
                className={`border-[2px] border-solid ${
                  item.status ? "border-green-600" : "border-gray-800"
                } px-4 py-2 rounded-lg`}
              >
                {item.id}
              </h1>
            );
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
