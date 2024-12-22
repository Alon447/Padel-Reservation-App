import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { User } from '../types/types';

type Store = {
	user: User | null;
	isDarkMode: boolean;
	toggleDarkMode: () => void;
};
export const useStore = create<Store>()(
	persist(
		(set) => ({
			user: null,
			isDarkMode: false,
			toggleDarkMode: () => set((state) => ({ isDarkMode: !state.isDarkMode })),
		}),
		{
			name: 'padel-storage',
		}
	)
);
