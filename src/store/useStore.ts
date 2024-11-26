import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type Store = {
	isDarkMode: boolean;
	toggleDarkMode: () => void;
};
export const useStore = create<Store>()(
	persist(
		(set) => ({
			isDarkMode: false,
			toggleDarkMode: () => set((state) => ({ isDarkMode: !state.isDarkMode })),
		}),
		{
			name: 'padel-storage',
		}
	)
);
