import { create } from "zustand";

//상태 저장소 만들기
const useCounterStore = create((set, get) => ({
  count: 0, //상태를 저장할 변수
  increment: () => {
    const current = get().count; //get을 통해 현재상태 읽어오기
    if (current >= 10) {
      alert("최대값은 10");
      return;
    }
    set({ count: current + 1 }); //set을 통해 상태변경
  },
  decrement: () => {
    const current = get().count; //get을 통해 현재상태 읽어오기
    if (current <= 0) {
      alert("최소값은 0");
      return;
    }
    set({ count: current - 1 }); //set을 통해 상태변경
  },
  reset: () => set({ count: 0 }),
}));

export default useCounterStore;
