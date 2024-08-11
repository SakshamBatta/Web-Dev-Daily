import { selector } from "recoil";
import { jobsAtom } from "./jobsAtom";
import { messageAtom } from "./messagingAtom";
import { networkAtom } from "./networkAtom";
import { notificationAtom } from "./notificationAtom";

export const totalNotification = selector({
  key: "totalNotification",
  get: ({ get }) => {
    const jobsAtomCount = get(jobsAtom);
    const messageAtomCount = get(messageAtom);
    const networkAtomCount = get(networkAtom);
    const notificationAtomCount = get(notificationAtom);

    return (
      jobsAtomCount +
      messageAtomCount +
      networkAtomCount +
      notificationAtomCount
    );
  },
});
