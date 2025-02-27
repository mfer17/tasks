// filepath: /c:/Users/ADMIN/Desktop/Mis proyectos/tasks/src/store/useStore.ts
import { create, StateCreator } from 'zustand';
import { db } from '../../firebase/configuration';
import { collection, addDoc, getDocs, deleteDoc, query, where, getDocs as getDocsQuery, doc } from 'firebase/firestore';
import { devtools, persist } from "zustand/middleware";

interface TaskState {
    tasks: { id: string, task: string }[];
    fetchTasks: () => void;
    addTask: (task: string) => void;
    deleteTask: (id: string) => void;
}

const storeTaskApi: StateCreator<TaskState> = (set) => ({
    tasks: [],
    fetchTasks: async () => {
        const querySnapshot = await getDocs(collection(db, 'tasks'));
        const tasks = querySnapshot.docs.map(doc => ({ id: doc.id, task: doc.data().task }));
        set({ tasks });
    },
    addTask: async (task) => {
        const docRef = await addDoc(collection(db, 'tasks'), { task });
        set((state) => ({ tasks: [...state.tasks, { id: docRef.id, task }] }));
    },
    deleteTask: async (id) => {
        await deleteDoc(doc(db, 'tasks', id));
        set((state) => ({ tasks: state.tasks.filter(task => task.id !== id) }));
    },
});

export const useStore = create<TaskState>()(
    devtools(  // Enable Redux DevTools
        persist(  // Enable LocalStorage        
            storeTaskApi
        , { name: "tasks" })  // Set the name of the LocalStorage key to "tasks-store"
    )  
)