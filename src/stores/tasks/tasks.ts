// filepath: /c:/Users/ADMIN/Desktop/Mis proyectos/tasks/src/store/useStore.ts
import { create, StateCreator } from 'zustand';
import { db } from '../../firebase/configuration';
import { collection, addDoc, getDocs, deleteDoc, query, where, getDocs as getDocsQuery, doc, updateDoc } from 'firebase/firestore';
import { devtools, persist } from "zustand/middleware";

export interface Task {
    id: string;
    task: string;
    status: 'next-up' | 'in-progress' | 'completed';
}

interface TaskState {
    tasks: Task[];
    fetchTasks: () => void;
    addTask: (task: string) => void;
    deleteTask: (id: string) => void;
    updateTaskStatus: (id: string, status: Task['status']) => void;
}

const storeTaskApi: StateCreator<TaskState> = (set) => ({
    tasks: [],
    fetchTasks: async () => {
        const querySnapshot = await getDocs(collection(db, 'tasks'));
        const tasks = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })) as Task[];
        set({ tasks });
    },
    addTask: async (task) => {
        const docRef = await addDoc(collection(db, 'tasks'), { task, status: 'next-up' });
        set((state) => ({ tasks: [...state.tasks, { id: docRef.id, task, status: 'next-up' }] }));
    },
    deleteTask: async (id) => {
        await deleteDoc(doc(db, 'tasks', id));
        set((state) => ({ tasks: state.tasks.filter(task => task.id !== id) }));
    },
    updateTaskStatus: async (id, status) => {
        const taskDoc = doc(db, 'tasks', id);
        await updateDoc(taskDoc, { status });
        set((state) => ({
          tasks: state.tasks.map(task => task.id === id ? { ...task, status } : task)
        }));
    },
});

export const useStore = create<TaskState>()(
    devtools(  // Enable Redux DevTools
        persist(  // Enable LocalStorage        
            storeTaskApi
        , { name: "tasks" })  // Set the name of the LocalStorage key to "tasks-store"
    )  
)