import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface FavoriteProduct {
  id: number;
  image: string;
  name: string;
  model: string;
}

interface FavoriteState {
  favorites: FavoriteProduct[];
  toggleFavorite: (product: FavoriteProduct) => void;
  isFavorite: (id: number) => boolean;
}

export const useFavoriteStore = create<FavoriteState>()(
  persist(
    (set, get) => ({
      favorites: [],
      toggleFavorite: (product) => {
        const exists = get().favorites.find((fav) => fav.id === product.id);
        if (exists) {
          set({
            favorites: get().favorites.filter((fav) => fav.id !== product.id),
          });
        } else {
          set({
            favorites: [...get().favorites, product],
          });
        }
      },
      isFavorite: (id) => !!get().favorites.find((fav) => fav.id === id),
    }),
    {
      name: 's_fav', // localStorage key
    }
  )
);
