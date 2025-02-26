// filepath: /c:/Users/ADMIN/Desktop/Mis proyectos/tasks/src/store/useStore.ts
import { create, StateCreator } from 'zustand';
import { db } from '../../firebase/configuration';
import { collection, addDoc, getDocs } from 'firebase/firestore';
import { devtools, persist } from "zustand/middleware";

interface TaskState {
    tasks: string[];
    fetchTasks: () => void;
    addTask: (task: string) => void;
}

const storeTaskApi: StateCreator<TaskState> = (set) => ({
    tasks: [],
    fetchTasks: async () => {
        const querySnapshot = await getDocs(collection(db, 'tasks'));
        const tasks = querySnapshot.docs.map(doc => doc.data().task);
        set({ tasks });
    },
    addTask: async (task) => {
        await addDoc(collection(db, 'tasks'), { task });
        set((state) => ({ tasks: [...state.tasks, task] }));
    },
});

export const useStore = create<TaskState>()(
    devtools(  // Enable Redux DevTools
        persist(  // Enable LocalStorage        
            storeTaskApi
        , { name: "tasks" })  // Set the name of the LocalStorage key to "tasks-store"
    )  
)