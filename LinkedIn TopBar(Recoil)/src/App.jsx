import { RecoilRoot, useRecoilValue } from "recoil";
import { networkAtom } from "./store/atoms/networkAtom";
import { jobsAtom } from "./store/atoms/jobsAtom";
import { messageAtom } from "./store/atoms/messagingAtom";
import { notificationAtom } from "./store/atoms/notificationAtom";
import { totalNotification } from "./store/atoms/selectorAtom";

function App() {
  return (
    <>
      <RecoilRoot>
        <MainApp />
      </RecoilRoot>
    </>
  );
}

function MainApp() {
  const network = useRecoilValue(networkAtom);
  const jobs = useRecoilValue(jobsAtom);
  const messaging = useRecoilValue(messageAtom);
  const notifications = useRecoilValue(notificationAtom);
  const totalNotificationCount = useRecoilValue(totalNotification);
  return (
    <>
      <button>Home</button>
      <button>My Network ({network >= 100 ? "99+" : network})</button>
      <button>Jobs ({jobs >= 100 ? "99+" : jobs})</button>
      <button>Messaging ({messaging >= 100 ? "99+" : messaging})</button>
      <button>
        Notifications ({notifications >= 100 ? "99+" : notifications})
      </button>
      <button>Me ({totalNotificationCount})</button>
    </>
  );
}

export default App;
