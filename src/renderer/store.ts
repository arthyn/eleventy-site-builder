import create from 'zustand';

export type State = {
    projectsDirectory: string;
}

export const useStore = create<State>(set => ({
    projectsDirectory: ''
}));